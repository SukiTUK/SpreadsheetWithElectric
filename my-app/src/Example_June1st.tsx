import './App.css';
import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import * as Y from 'yjs';
import { useLiveQuery } from 'electric-sql/react'
import { genUUID } from 'electric-sql/util'
import { Items as Item } from './generated/client'
import { Rowmap as Row } from './generated/client'
import { Colmap as Col } from './generated/client'
import { Contentmap as Content } from './generated/client'
import { useElectric } from './ElectricProvider'
import './Example.css'
import { WebsocketProvider } from 'y-websocket';


let ySpreadsheet = [];
const yHeaders = [];
//const wsProvider = new WebsocketProvider('ws://localhost:1234', 'naive', yDoc);
let handleInsertColFlag = 0;
let handleInsertRowFlag = 0;
let contentChangeFlag = 0;

export const Example = () => {
  
  // Initialization of the JSX display -- if possible, read from the yDoc, otherwise generate the default
  const [spreadsheet, setSpreadsheet] = useState([
    ]);

  const [headers, setHeaders] = useState([
  ]);

  function initialize() { 
    /* for (let i = 0; i < 3; i++) {
      yHeaders.push(["XYZ"]);
      const yRow = (['','','']);
      ySpreadsheet.push([yRow]);
    } */
  }

  const [connectionStatus, setConnectionStatus] = useState('');

  useEffect(() => {
    // Track & update connection status to properly update document on connection change.

    const syncItems = async () => {
      // Resolves when the shape subscription has been established.
      const shape = await db.items.sync()
      const shapeRow = await db.rowmap.sync()
      const shapeCol = await db.colmap.sync()
      const shapeContent = await db.contentmap.sync()
      // Resolves when the data has been synced into the local database.
      await shape.synced
      await shapeRow.synced
      await shapeCol.synced
      await shapeContent.synced
    }
    syncItems();
    
    if (ySpreadsheet.length === 0) {
      syncItems();
      rebuildSpreadsheet();
      } else {
        rebuildSpreadsheet();
  
      }
  }, [handleInsertRowFlag]);

 

  function rebuildSpreadsheet() {
    setHeaders(yHeaders);
    let rowResultsByPosAscending = [];
    let colResultsByPosAscending = [];
    let contentResultsByPosAscending = [];
    let columnIds = [];
    let rowIds = [];
    let lastRowElementPos, rowLength, lastColumnElementPos, colLength;
    
    if(rowmap.results) {
      rowResultsByPosAscending = 
        rowmap.results.slice().sort((a, b) => a.pos - b.pos);
      lastRowElementPos = rowResultsByPosAscending[rowResultsByPosAscending.length].pos;
      rowLength = lastRowElementPos+1;
    }
    if(colmap.results) {
      colResultsByPosAscending = 
        colmap.results.slice().sort((a, b) => a.pos - b.pos);
      lastColumnElementPos = colResultsByPosAscending[colResultsByPosAscending.length].pos;
      colLength = lastColumnElementPos+1;
    }

    
    console.log("different length ", colLength,rowLength);
    
    for ( let i = 0; i < colLength ; i ++ ) {
      columnIds[i] = colResultsByPosAscending[i].id;
    }
    for ( let i = 0; i < rowLength ; i ++ ) {
      rowIds[i] = rowResultsByPosAscending[i].id;
    }

    let newSpreadsheet = Array(rowLength);
    if(colLength) {
      for (let i = 0; i < rowLength; i++) {
        newSpreadsheet[i] = Array.apply(null, ...Array(colLength)).map(function () {return undefined});
      }
    }
    
    if( columnIds.length == 0 ) {
      if ( rowIds.length == 0) {
        ySpreadsheet = newSpreadsheet;
        setSpreadsheet(ySpreadsheet);
        return;
      }
      if ( rowIds.length != 0 ) {
        for( let i = 0; i < colLength; i++ ) {
          newSpreadsheet[i][0] = "undefined";
          ySpreadsheet = newSpreadsheet;
          setSpreadsheet(ySpreadsheet);
          return;
        }
      }
    }
    if( columnIds.length != 0 && rowIds.length != 0 ) {
      for( let i = 0; i < colLength; i++ ) {
        for ( let j = 0; j < rowLength; j++) {
          for ( let k = 0; k < content.length; k++) {
            if ( columnIds[i] == content.results[k]['colIndex'] && rowIds[j] == content.results[k]['rowIndex'] ) {
              newSpreadsheet[j][i] = content.results[k]['content'];
              console.log("newSpreadsheet[j][i]", newSpreadsheet[j][i]);
            } 
          }
          if (content.length == 0) {
            newSpreadsheet[j][i] = " ";
          }
        }
      }
    }
     /*
    ySpreadsheet.forEach((row,rowIndex) => row.forEach((value,colIndex) => newSpreadsheet[rowIndex][colIndex] = value)) */
    ySpreadsheet = newSpreadsheet;
    setSpreadsheet(ySpreadsheet);
  }

  const { db } = useElectric();
  const results = [];
  let resultsColMap = [];
  let resultsRowMap = [];
  let resultsContentMap = [];
  resultsColMap = useLiveQuery(db.colmap.liveMany());
  resultsRowMap = useLiveQuery(db.rowmap.liveMany());
  resultsContentMap = useLiveQuery(db.contentmap.liveMany());

  const colmap: Col[] = resultsColMap ?? []
  const rowmap: Row[] = resultsRowMap ?? []
  const content: Contentmap[] = resultsContentMap ?? []
  

  const addItem = async () => {
    await db.items.create({
      data: {
        value: genUUID(),
      },
    })
  }

  const addRow = async (rowIndex, rowID) => {
    await db.rowmap.create({
      data: {
        id: rowID,
        pos: rowIndex,
      },
    })
  }

  const addCol = async (colIndex, colID) => {
    await db.colmap.create({
      data: {
        id: colID,
        pos: colIndex,
      },
    })
  }

  const addContentMap = async (rowID, colID, value) => {
    await db.contentmap.create({
      data: {
        rowIndex: rowID,
        colIndex: colID,
        content: value,
      },
    })
  }

  const clearItems = async () => {
    await db.items.deleteMany()
  }
  
  
  const updatedContentMap = async(element) => {
    await db.contentmap.create({
    data: {
      rowIndex: element[0],
      colIndex: element[1],
      content: element[2],
    },
  });
}

  const updatedRowMap = async(element) => {
    await db.rowmap.upsert({
    create: {
      id: element[0],
      pos: element[1],
    },
    update: {
      pos: element[1],
    },
    where: {
      id: element[0],
    },
  });
}

const updatedColMap = async(element) => {
  await db.colmap.upsert({
  create: {
    id: element[0],
    pos: element[1],
  },
  update: {
    pos: element[1],
  },
  where: {
    id: element[0],
  },
});
}
  
  const columnContextMenuItems = [
    { text: "Insert left", image: "https://cdn-icons-png.flaticon.com/512/7601/7601881.png" },
    { text: "Delete column", image: "https://cdn-icons-png.flaticon.com/512/7794/7794583.png" },
    { text: "Insert right", image: "https://cdn-icons-png.flaticon.com/512/7601/7601880.png" }
  ];

  const rowContextMenuItems = [
    { text: "Insert above", image: "https://cdn-icons-png.flaticon.com/512/6535/6535072.png" },
    { text: "Delete row", image: "https://cdn-icons-png.flaticon.com/512/1/1813.png" },
    { text: "Insert below", image: "https://cdn-icons-png.flaticon.com/512/6535/6535075.png" }
  ];

  // Action handlers for spreadsheet manipulation
  // - Header rename handler
  const handleHeaderChange = (colIndex, value) => {
    const newHeaders = [...headers];
    newHeaders[colIndex] = value;
    setHeaders(newHeaders);
  }

  const handleHeaderBlur = (colIndex, value) => {
    yHeaders[colIndex].push([value]);
    yHeaders.splice(colIndex, 0, [value]);
  }

  // - Row & column insertion
  const handleInsertRow = (index) => {
    let rowMapFound = 0;
    console.log(index,"index");
    const yRow = [];
    //yRow.push(Array.apply(null, ...Array(yHeaders.length)).map(function () {return ""}))
    //ySpreadsheet.insert(index, [yRow]);
    for(let i = 0 ; i < yHeaders.length ; i++) {
      yRow.push("");
    }
    ySpreadsheet.splice(index, 0, yRow);
    //rebuildSpreadsheet();
    handleInsertRowFlag = 1;

    //resultsRowMap.results[0]
   
    /* On insert row:
    1. Generate new rowId and assign index position
    2. Idea*/
    const rowID = genUUID();
    const position = index;
    
    const rowResultsByPosAscending = 
    rowmap.results.slice().sort((a, b) => a.pos - b.pos);
    if (rowResultsByPosAscending.length == 0) {
      rowResultsByPosAscending.push([rowID, position]);
    } else {
    rowResultsByPosAscending.forEach(element => {
      if(element.pos == index && rowMapFound == 0) {
        rowMapFound = 1;
        rowResultsByPosAscending.push([rowID, position]);
      }
      if(rowMapFound == 1 && element.pos != index) {
        rowResultsByPosAscending.pos = rowResultsByPosAscending.pos + 1;
      }
    })
  }
    const colResultsByPosAscending = colmap.results.slice().sort((a, b) => a.pos - b.pos);
    const contentResults = [];
    if (colmap.results) {
      colResultsByPosAscending.forEach(element => {
        if (element.id) {
          contentResults.push([rowID, element[0], " "] );
        }
      });
    }
    
    rowResultsByPosAscending.forEach(element => {
      updatedRowMap(element);
  });

  if (colmap.results) {
  contentResults.forEach(element => {
    updatedContentMap(element);
  });
}
  rowMapFound = 0;
  rebuildSpreadsheet();
  }

  const handleInsertCol = (index) => {
    let colMapFound = 0;
    yHeaders.splice(index,0, ["XYZ"]);
    console.log("handle insert column" , typeof ySpreadsheet[0]);
    for (let i = 0; i < ySpreadsheet.length; i++) {
      console.log("inside for loop" , typeof ySpreadsheet[i],ySpreadsheet[i].value);
      if (ySpreadsheet[i]) {
        ySpreadsheet[i].splice(index, 0, '');
      } else {
        ySpreadsheet[i] = '';
      }
    }

    const colID = genUUID();
    const position = index;
    const colResultsByPosAscending = 
    colmap.results.slice().sort((a, b) => a.pos - b.pos);
    
    if (colResultsByPosAscending.length == 0) {
      colResultsByPosAscending.push([colID, position]);
    } else {
      colResultsByPosAscending.forEach(element => {
      if(element.pos == index && colMapFound == 0) {
        console.log("found it inside colmap forloop", colResultsByPosAscending);
        colMapFound = 1;
        colResultsByPosAscending.push([colID, position]);
      }
      if(colMapFound == 1 && element.pos != index) {
        console.log("found it inside colmap forloop", colResultsByPosAscending);
        colResultsByPosAscending.pos = colResultsByPosAscending.pos + 1;
      }
    })
  }
    const rowResultsByPosAscending = 
    rowmap.results.slice().sort((a, b) => a.pos - b.pos);
    const contentResults = [];
    rowResultsByPosAscending.forEach(element => {
      if (element.id) {
        contentResults.push([element.id, colID, ""] );
      }
    });
    console.log("contentResults ", contentResults);
    colResultsByPosAscending.forEach(element => {
      updatedColMap(element);
    console.log("updatedColMap", updatedColMap);
  });
  contentResults.forEach(element => {
    updatedContentMap(element);
  });
  
  colMapFound = 0;
  rebuildSpreadsheet();
  }

  const handleDeleteCol = (index) => {
    ySpreadsheet.forEach(row => row.delete(index));
    yHeaders.delete(index);
  }

  // - Cell change
  const handleCellChange = (rowIndex, colIndex, value) => {
    const newSpreadsheet = [...spreadsheet];
    newSpreadsheet[rowIndex][colIndex] = value;
    setSpreadsheet(newSpreadsheet);
  };

  const handleCellBlur = (rowIndex, colIndex, value) => {
    if (typeof(ySpreadsheet[rowIndex])!== 'undefined' && value === ySpreadsheet[rowIndex][colIndex]) return;
    if (typeof(ySpreadsheet[rowIndex])=== 'undefined') {
      ySpreadsheet[rowIndex] = ["", "", ""];
    } else if (typeof(ySpreadsheet[rowIndex][colIndex])=== 'undefined') {
      ySpreadsheet[rowIndex][colIndex] = {};
    }
    ySpreadsheet[rowIndex][colIndex]=value;
    //console.log(ySpreadsheet);
    /* const rowID = genUUID();
    const colID = genUUID();
    addRow(rowIndex, rowID);
    addCol(colIndex, colID);
    addContentMap(rowID, colID, value); */

    const contentResults = [];
    contentResults.forEach(element => {
      updatedContentMap();
    });
    
  }

  // - Context menu selections
  function handleColumnContextMenuClick (index) {
    switch(index) {
      case 0:
      case 2:
        handleInsertCol(columnOpenIndex + (index/2));
        break;
      case 1:
        handleDeleteCol(columnOpenIndex);
        break;
      default:
        return console.log(`handleColumnContextMenuClick called with index out of bound: ${index}`);
    }
  }

  function handleRowContextMenuClick (index) {
    switch(index) {
      case 0:
      case 2:
        handleInsertRow(rowOpenIndex + (index/2));
        break;
      case 1:
        ySpreadsheet.delete(rowOpenIndex);
        break;
      default:
        return console.log(`handleColumnContextMenuClick called with index out of bound: ${index}`);
    }
  }

  // Conversion function of index to alphabet
  function getColumnIndicator(colIndex) {
    return String.fromCharCode(colIndex + 65);
  }

  // States used for keeping track of context menu states
  const [columnOpen, setColumnOpen] = useState(false);
  const [rowOpen, setRowOpen] = useState(false);
  const [anchorColumnEl, setAnchorColumnEl] = useState(null);
  const [anchorRowEl, setAnchorRowEl] = useState(null);
  const [columnOpenIndex, setColumnOpenIndex] = useState(null);
  const [rowOpenIndex, setRowOpenIndex] = useState(null);

  // Context menu handlers for rows and columns, respectively, including closeHandlers
  const handleRowHeaderContextMenu = (event, index) => {
    event.preventDefault();
    setAnchorRowEl(event.currentTarget);
    setRowOpen(true);
    setRowOpenIndex(index);
  }

  const handleColumnHeaderContextMenu = (event, index) => {
    event.preventDefault();
    setAnchorColumnEl(event.currentTarget);
    setColumnOpen(true);
    setColumnOpenIndex(index);
  }
 
  const handleColumnClose = () => {
    setColumnOpen(false);
  }
 
  const handleRowClose = () => {
    setRowOpen(false);
  }

  // Main spreadsheet construction
  return (
    <div className="split">
      <table id='spreadsheetSim'>
        <thead>
          <tr className="firstRow">
              <th title='Right click for options'><img alt='MR' height='16em' src='https://cdn-icons-png.flaticon.com/512/3645/3645851.png'/></th>
              {headers.map((col, colIndex) => 
                <th key={colIndex} onContextMenu={event => handleColumnHeaderContextMenu(event, colIndex)}>{getColumnIndicator(colIndex)}</th>
              )}
              <th key="button" className="addButtons addColumnButton" rowSpan={2} onClick={() => handleInsertCol(ySpreadsheet[0].length)}>+</th>
          </tr>
          <tr>
            <th/>
            {headers.map((col, colIndex) => 
                <th key={colIndex}>
                  <input
                    type="text"
                    value={col}
                    onChange={event => handleHeaderChange(colIndex, event.target.value)}
                    onBlur={event => handleHeaderBlur(colIndex, event.target.value)}

                  />  
                </th>
              )}
          </tr>
        </thead>  
        <tbody>
          
          {spreadsheet.map((row, rowIndex) => 
            <tr key={rowIndex}>
              <th onContextMenu={event => handleRowHeaderContextMenu(event, rowIndex)}>{rowIndex+1}</th>
              {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                <input
                  type="text"
                  value={cell || ''}
                  onChange={event => handleCellChange(rowIndex, cellIndex, event.target.value)}
                  onBlur={event => handleCellBlur(rowIndex, cellIndex, event.target.value)}
                />
              </td>
              ))}
            </tr>
          )}
        
          <tr>
            <th className="addButtons addRowButton" onClick={() => handleInsertRow(ySpreadsheet.length)}>+</th>
          </tr>
        </tbody>
        <Menu
            id="columnContextMenu"
            anchorEl={anchorColumnEl}
            open={columnOpen}
            onClose={handleColumnClose}
            onClick={handleColumnClose}
        >
            {columnContextMenuItems.map((element, index) => (
                <MenuItem key={element.text} onClick={() => handleColumnContextMenuClick(index)}>
                  <ListItemIcon>
                      <img height='16em' src={element.image} alt={element.text}/>
                  </ListItemIcon>
                  <ListItemText primary={element.text}/>
                </MenuItem>
            ))}
        </Menu>
        <Menu
            id="rowContextMenu"
            anchorEl={anchorRowEl}
            open={rowOpen}
            onClose={handleRowClose}
            onClick={handleRowClose}
        >
            {rowContextMenuItems.map((element, index) => (
                <MenuItem key={element.text} onClick={() => handleRowContextMenuClick(index)}>
                  <ListItemIcon>
                      <img height='16em' src={element.image} alt={element.text}/>
                  </ListItemIcon>
                  <ListItemText primary={element.text}/>
                </MenuItem>
            ))}
        </Menu>
      </table>
      console.log("Items",items);
      
      
      
      yDoc: <br />
      <tt className='json'>
        <div>
          <b>Nested Array (yArray of yArrays): </b><br />
          {JSON.stringify(ySpreadsheet, null, '  ')}
        </div>
        <div>
          <b>Headers (yArray):</b><br />
          {JSON.stringify(yHeaders, null, '  ')}
        </div>
      </tt>
    </div>
  );
}
