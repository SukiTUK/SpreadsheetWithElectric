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


/* const ySpreadsheet = [];
ySpreadsheet.push(["","",""]); */
/* const yHeaders = [];
yHeaders.push(["XYZ","XYZ","XYZ"]); */

//const yDoc = new Y.Doc();
const ySpreadsheet = [];
const yHeaders = [];
//const wsProvider = new WebsocketProvider('ws://localhost:1234', 'naive', yDoc);
let spreadsheetWithIds = [];

export const Example = () => {
  
  // Initialization of the JSX display -- if possible, read from the yDoc, otherwise generate the default
  const [spreadsheet, setSpreadsheet] = useState([
    
    ]);

  const [headers, setHeaders] = useState([
    /* "XYZ","XYZ","XYZ" */
  ]);

  function initialize() { 
    /* for (let i = 0; i < 3; i++) {
      yHeaders.push(["XYZ"]);
      const yRow = (['','','']);
      ySpreadsheet.push([yRow]);
    } */
  }

  function collectIdentifiers() {
    if (colmap.results && rowmap.results) {
    console.log("here inside rebuild");
    if (colmap.results.length == 0) {
        console.log("colmap.results.length == 0", colmap.results.length)
        if (rowmap.results.length !=0) {
            console.log("rowmap.results.length !=0", rowmap.results.length)
            console.log("rowmap.results", rowmap.results);
            for ( let j = 0; j < rowmap.results.length; j++) {
                spreadsheetWithIds.push(['', '', rowmap.results[j].id,j, '']);
                console.log("spreadsheetwithIDs", spreadsheetWithIds);
            }
        }
    } else if (colmap.results.length != 0 && rowmap.results.length !=0) {
        console.log("colmap.results.length != 0 && rowmap.results.length !=0",colmap.results.length, rowmap.results.length )
        if (content.length !=0 ) {
            console.log("rowmap.results", rowmap.results);
            console.log("colmap.results", colmap.results);
            console.log("content.results", content.results);
            for ( let k = 0; k < content.length; k++) {
                if ( colmap.results[i].id == content.results[k]['colIndex'] && rowmap.results[j].id == content.results[k]['rowIndex'] ) {
                  spreadsheetWithIds.push([colmap.results[i].id, i, rowmap.results[j].id,j, content.results[k]['content']]);
                  console.log("spreadsheetwithIDs", spreadsheetWithIds);
                } 
            }
        } else {
            spreadsheetWithIds.push([colmap.results[i].id, i, rowmap.results[j].id,j, '']);
            console.log("spreadsheetwithIDs", spreadsheetWithIds);
        }
          
    } else if (rowmap.results.length == 0 && colmap.results.length != 0) {
        console.log("rowmap.results.length == 0 && colmap.results.length != 0",colmap.results.length, rowmap.results.length )
        for ( let j = 0; j < colmap.results.length; j++) {   
            console.log("colmap.results", colmap.results);
            spreadsheetWithIds.push([colmap.results[j].id, j, '','', '']);
            console.log("spreadsheetwithIDs", spreadsheetWithIds);
        }
    }
  }
}
  const [connectionStatus, setConnectionStatus] = useState('');

  useEffect(() => {
    
    // Track & update connection status to properly update document on connection change.
    if (ySpreadsheet.length === 0) {
        initialize();
      } else {
        rebuildSpreadsheet();
  
      }
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
    //console.log("here",projects);
    syncItems();
    // yArray observers. Handle structural changes
    //ySpreadsheet.observeDeep(() => rebuildSpreadsheet());
    //yHeaders.observe(() => rebuildSpreadsheet());
  }, []);

  function rebuildSpreadsheet() {
    setHeaders(yHeaders);
    collectIdentifiers();
    const newSpreadsheet = Array(ySpreadsheet.length);
    for (let i = 0; i < ySpreadsheet.length; i++) {
      newSpreadsheet[i] = Array.apply(null, ...Array(ySpreadsheet[i].length)).map(function () {return undefined});
    }
    ySpreadsheet.forEach((row,rowIndex) => row.forEach((value,colIndex) => newSpreadsheet[rowIndex][colIndex] = value))
    setSpreadsheet(newSpreadsheet);
    
    
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

  /* const addContentMap = async (element) => {
    await db.contentmap.create({
      data: {
        rowindex: element[0],
        colindex: element[1],
        content: element[2],
      },
    })
  } */

  const projects = db.rawQuery({
    sql: 'select * from Rowmap where pos = ?',
    bindParams: ['1']
  })

  const clearItems = async () => {
    await db.items.deleteMany()
  }
  
  /* const updatedContentMap = async(element) => {
    await db.contentmap.update({
    data: {
      content: element[2],
    },
    where: {
        rowindex: element[0],
        colindex: element[1],
    },
  });
} */

  const updatedContentMap = async(element) => {
    await db.contentmap.upsert({
    create: {
      rowindex: element[0],
      colindex: element[1],
      content: element[2],
    },
    update: {
        content: element[2],
      },
    where: {
        rowindex: element[0],
        colindex: element[1],
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


  // Context menu context for the column and row context menus, respectively
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
    console.log(index,"index");
    const yRow = [];
    console.log("before ySpreadsheet",ySpreadsheet);
    console.log("yRow",yRow);
    //yRow.push(Array.apply(null, ...Array(yHeaders.length)).map(function () {return ""}))
    //ySpreadsheet.insert(index, [yRow]);
    
    for(let i = 0 ; i < yHeaders.length ; i++) {
      yRow.push("");
    }
    ySpreadsheet.splice(index, 0, yRow);
    
    console.log("after appending ySpreadsheet",ySpreadsheet);
    rebuildSpreadsheet();
    const rowID = genUUID();
    addRow(index, rowID);
    
  }

  const handleInsertCol = (index) => {
    
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
    rebuildSpreadsheet();
    const colID = genUUID();
    addCol(index, colID);
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
    console.log("handle cell blur starts here>>>");
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
    let columnID, rowID;
    if(colmap.results) {
        for (let i=0; i < colmap.results.length; i++) {
            console.log("colmap.results[i].pos", typeof colmap.results[i].pos, typeof colIndex);
            if(colmap.results[i].pos == colIndex) {
                columnID = colmap.results[i].id;
            }
        }
    }
    if(rowmap.results) {
        for (let i=0; i < rowmap.results.length; i++) {
            if(rowmap.results[i].pos == rowIndex) {
                rowID = rowmap.results[i].id;
            }
        }
    }
    let contentResultsFlag = 0;
    contentResults.push([rowID, columnID, value]);
    if (content.results.length !=0) {
        console.log("content.results.length !=0", content.results)
        for (let i=0; i < content.results.length; i++) {
            if(content.results[i]['rowIndex'] == rowID && content.results[i]['colIndex'] == columnID) {
                console.log("content.results[i]['rowIndex'], content.results[i]['colIndex'], rowID, ColumnID", content.results[i]['rowIndex'], content.results[i]['colIndex'], rowID, columnID);
                //if(content.results[i]['content'].length != 0) { // here you were checking if there is a content and if the length was not zero - it meant that you should be updating the tuple and not adding a new tuple
                contentResults.forEach(element => {
                    console.log("content.results[i], element", content.results[i], element);
                    updatedContentMap(element);
                    contentResultsFlag = 1;
                    return;
                });
                /* } else{
                    console.log("element updatedContentMap", element)
                    contentResults.forEach(element => {
                        addContentMap(element);
                        contentResultsFlag = 1;
                        return;
                    });
                } */
            }
        }
    }
    /* if(contentResultsFlag == 1) {
        return;
    }
    if(contentResultsFlag == 0) {
    contentResults.forEach(element => {
        console.log("element", element);
        addContentMap(element);
    });
} */
    console.log("handle cell blur ends here>>>");
    
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