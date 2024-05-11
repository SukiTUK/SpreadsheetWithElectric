import './App.css';
import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import * as Y from 'yjs';
import { useLiveQuery } from 'electric-sql/react'
import { genUUID } from 'electric-sql/util'
import { Items as Item } from './generated/client'
import { Rowmap as Row } from './generated/client'
import { Colmap as Col } from './generated/client'
import { useElectric } from './ElectricProvider'
import './Example.css'
import { WebsocketProvider } from 'y-websocket';


/* const ySpreadsheet = [];
ySpreadsheet.push(["","",""]); */
/* const yHeaders = [];
yHeaders.push(["XYZ","XYZ","XYZ"]); */

const yDoc = new Y.Doc();
const ySpreadsheet = yDoc.getArray('rows');
const yHeaders = yDoc.getArray('headers');
const wsProvider = new WebsocketProvider('ws://localhost:1234', 'naive', yDoc);

export const Example = () => {
  
  // Initialization of the JSX display -- if possible, read from the yDoc, otherwise generate the default
  const [spreadsheet, setSpreadsheet] = useState([
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
    [undefined,undefined,undefined]
    ]);

  const [headers, setHeaders] = useState([
    "XYZ","XYZ","XYZ"
  ]);

  function initialize() { 
    for (let i = 0; i < 3; i++) {
      yHeaders.push(["XYZ"]);
      const yRow = Y.Array.from(['','','']);
      ySpreadsheet.push([yRow]);
    }
  }

  const [connectionStatus, setConnectionStatus] = useState('');

  useEffect(() => {
    // Track & update connection status to properly update document on connection change.
    wsProvider.on('status', event => {
      setConnectionStatus(event.status);
    });
    // Initialize yDoc on first connect.
    wsProvider.once('sync', () => {
      if (ySpreadsheet.length === 0) {
        initialize();
      } else {
        rebuildSpreadsheet();
  
      }
    });
    const syncItems = async () => {
      // Resolves when the shape subscription has been established.
      const shape = await db.items.sync()
      const shapeRow = await db.rowmap.sync()
      // Resolves when the data has been synced into the local database.
      await shape.synced
      await shapeRow.synced
    }
    //console.log("here",projects);
    syncItems();
    // yArray observers. Handle structural changes
    ySpreadsheet.observeDeep(() => rebuildSpreadsheet());
    yHeaders.observe(() => rebuildSpreadsheet());
  }, []);

  function rebuildSpreadsheet() {
    setHeaders(yHeaders.toArray());
    
    const newSpreadsheet = new Array(ySpreadsheet.length);
    console.log("rebuild spreadsheet---------");
    
    for (let i = 0; i < ySpreadsheet.length; i++) {
      
      newSpreadsheet[i] = new Array(ySpreadsheet.get(0).length);
      newSpreadsheet[i].fill('');
    }
    
    //ySpreadsheet.forEach((row,rowIndex) => row.forEach((value,colIndex) => newSpreadsheet[rowIndex][colIndex] = value));

    //ySpreadsheet.forEach((row,rowIndex) => row.forEach((value,colIndex) => console.log(newSpreadsheet[rowIndex][colIndex])));
    
    for (let i = 0; i < ySpreadsheet.length; i++) {
      if (ySpreadsheet[i]) {
        for (let j=0; j < ySpreadsheet[i].length; j++) {
          if(ySpreadsheet[i][j]) {
            newSpreadsheet[i][j] = ySpreadsheet[i][j];
          }
        }
      }
      
    }

    
    setSpreadsheet(newSpreadsheet);
    for (let i = 0; i < ySpreadsheet.length; i++) {
      //console.log("---- rebuilding----- << i >>", i, "----newSpreadsheet.get(i)----", newSpreadsheet[i]);
    }
  }

  const { db } = useElectric();
  const { results } = useLiveQuery(db.items.liveMany());
  const { resultsRowMap } = useLiveQuery(db.rowmap.liveMany());

  /* useEffect(() => {
    const syncItems = async () => {
      // Resolves when the shape subscription has been established.
      const shape = await db.items.sync()
      const shapeRow = await db.rowmap.sync()
      // Resolves when the data has been synced into the local database.
      await shape.synced
      await shapeRow.synced
    }
    console.log("here",projects);
    syncItems()
  }, [])
 */

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

  const projects = db.rawQuery({
    sql: 'select * from Rowmap where pos = ?',
    bindParams: ['1']
  })

  const clearItems = async () => {
    await db.items.deleteMany()
  }
  

  const items: Item[] = results ?? []
  const rowmap: Row[] = resultsRowMap ?? []
  

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
  }

  // - Row & column insertion
  const handleInsertRow = (index) => {
    
    //<<<!!!! 
    //PROBLEMMMMM...... inserting new row inbetween causes it to insert at the end
    //>>>>>>
    const yRow = new Y.Array();
    yRow.push(Array.apply(null, Array(yHeaders.length)).map(function () {return ""}))
    ySpreadsheet.insert(index, [yRow]);
    console.log("ySpreadsheet",ySpreadsheet);
  }

  const handleInsertCol = (index) => {
    /* let index;
    console.log("element", element, typeof element)
    if (typeof element == 'undefined') {
      index = 0;
    }else {
      index = element[0].length;
    }
    yHeaders.slice(index,0).concat(["XYZ"]);
    if (ySpreadsheet.length == 'undefined'){
      ySpreadsheet[0].push(['']);
      return;
    }
    for (let i = 0; i < ySpreadsheet.length; i++) {
      ySpreadsheet[i][index].push(['']);
    } */
    /* let index;
    console.log("element", element, typeof element)
    if (element === 'undefined') {
      index = 0;
    }else {
      index = element.get(0).length;
    } */
    

    yHeaders.insert(index,["XYZ"]);
    for (let i = 0; i < ySpreadsheet.length; i++) {
      ySpreadsheet.get(i).insert(index, ['']);
    }
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
    const rowID = genUUID();
    const colID = genUUID();
    addRow(rowIndex, rowID);
    addCol(colIndex, colID);
    addContentMap(rowID, colID, value);
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
              <th key="button" className="addButtons addColumnButton" rowSpan={2} onClick={() => handleInsertCol(ySpreadsheet.get(0).length)}>+</th>
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
            <th className="addButtons addRowButton" onClick={() => handleInsertRow(ySpreadsheet)}>+</th>
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
      
      {rowmap.map((row: Row, index: number) => (
        <p key={index} className="row">
          <code>{row.value}</code>
        </p>
      ))}
      WebSocket:
      <div className='wsStatus'>
        {wsProvider.wsconnecting
          ? <span title='Connecting'><img alt={connectionStatus} height='16em' src="https://cdn-icons-png.flaticon.com/512/3031/3031712.png" /> Connecting to websocket...</span>
          : wsProvider.wsconnected
            ? <span title='Connected'><img alt={connectionStatus} height='16em' src="https://cdn-icons-png.flaticon.com/512/2983/2983692.png" /> <button onClick={() => wsProvider.disconnect()}>Disconnect</button></span>
            : <span title='Disonnected'><img alt={connectionStatus} height='16em' src="https://cdn-icons-png.flaticon.com/512/1144/1144833.png" /> <button onClick={() => wsProvider.connect()}>Reconnect</button></span>
        }
      </div>
      
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
