import './App.css';
import './Example.css';
import React, { useState } from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';

import { useLiveQuery } from 'electric-sql/react';
import { useElectric } from './ElectricProvider';
import { Colmap, Rowmap } from './generated/client';
// import { genUUID } from 'electric-sql/util';
import { nanoid } from 'nanoid';

const genUUID = (size = 10) => nanoid(size);

export const Example = () => {

  // Electric
  const { db } = useElectric()!; 

  // Sheets
  const { results: sheets } = useLiveQuery(db.sheets.liveMany({
    orderBy: { created_at: 'asc' }
  }));
  
  const onAddSheet = () => db.sheets.create({ data: {
    id: genUUID(),
    rows: 0,
    cols: 0,
    startrow: '',
    endrow: '',
    startrol: '',
    endrol: '',
    created_at: new Date(),
  }});
  
  console.log("onAddSheet", onAddSheet);

  const onDelSheet = async (id: string) => {
    await db.sheets.delete({ where: { id }});
  }
  
  // Rows
  const { results: rows } = useLiveQuery(db.rowmap.liveMany());
  

  const getSheetRows = (sheet_id: string, startRow: string): Row[] => {
    // Find the starting row based on sheet_id and row_last
    if (!rows) {
      return [];
    }
    const startingRow = rows.find(r => r.sheet_id === sheet_id && r.id === startRow);
    
    if (!startingRow) {
      return [];
    }
  
    // Recursive function to order rows
    const orderRows = (currentRow: Row | undefined, orderedRows: Row[] = []): Row[] => {
      if (!currentRow) {
        return orderedRows;
      }
  
      orderedRows.push(currentRow);
      
      // Find the next row where the startMarker matches the endMarker of the current row
      const nextRow = rows.find(r => r.sheet_id === sheet_id && r.startMarker === currentRow.endMarker);
      
      return orderRows(nextRow, orderedRows);
    };
  
    // Start the ordering with the initial row
    return orderRows(startingRow);
  };




  const getRowLabel = (row: Rowmap) => row? row.id : [];

  const onAddRow = async (sheet_id: string, id: string, position: 'before' | 'after' = 'after') => {
    
    const sheet = sheets?.find((s) => s.id === sheet_id);
    if (!sheet) return;
    
    const newRowId = genUUID();
    
    if(!sheet.startrow && !sheet.endrow) {
      const startMarker =  genUUID();
      const endMarker = genUUID();
      await db.sheets.update({
        where: { id: sheet_id },
        data: {
          startrow: newRowId,
          endrow: newRowId
        }
      });
      await db.rowmap.create({ data: {
        newRowId,
        sheet_id,
        startMarker,
        endMarker
      }});
    }
      
    
    const rowIndex = rows.findIndex(r => r.sheet_id === sheet_id && r.id === id);

    if (rowIndex !== -1) {
      const referenceRow = rows[rowIndex];

      if (position === 'after') {
        // here you need to send updates to electricSQL rowmap schema
        newRow.startMarker = referenceRow.endMarker;
        newRow.endMarker = genUUID();

        await db.rowmap.create({ data: {
          id: newRowId,
          sheet_id,
          startMarker: newRow.startMarker,
          endMarker: newRow.endMarker,
        }});

        
        const nextRow = rows.find(r => r.startMarker === referenceRow.endMarker);
        if (nextRow) nextRow.startMarker = newRow.endMarker;
          
        const sql = `UPDATE rowmap SET startMarker = ${newRow.endMarker} WHERE sheet_id = '${sheet_id}' AND startMarker = ${referenceRow.endMarker}`;
        await db.unsafeExec({ sql });


        //PENDING -> update sheet_id endRow or startRow 
        //based on the referenceRow.ID is equal to startRow for position = "before"
        //or referenceRow.ID is equal to endRow for position = "after"

      } else if (position === 'before') {
          newRow.endMarker = referenceRow.startMarker;
          newRow.startMarker = genUUID();

          await db.rowmap.create({ data: {
            id: newRowId,
            sheet_id,
            startMarker: newRow.startMarker,
            endMarker: newRow.endMarker,
          }});
            
          const prevRow = rows.find(r => r.endMarker === referenceRow.startMarker);
          if (prevRow) prevRow.endMarker = newRow.startMarker;
            const sql = `UPDATE rowmap SET endMarker = ${newRow.startMarker} WHERE sheet_id = '${sheet_id}' AND endMarker = ${referenceRow.startMarker}`;
            await db.unsafeExec({ sql });
          }
        }
      }

  const onDeleteRow = async (sheet_id: string, pos: number) => {
    const row = rows?.find((r) => r.sheet_id === sheet_id && r.pos === pos);
    const sheet = sheets?.find((s) => s.id === sheet_id);
    if (!row || !sheet) return;

    await db.rowmap.delete({ where: { id: row.id } });
    await db.sheets.update({
      where: { id: sheet_id },
      data: {
        rows: sheet?.rows - 1
      }
    });

    if (pos < sheet.rows) {
      const sql = `UPDATE rowmap SET pos = pos - 1 WHERE sheet_id = '${sheet_id}' AND pos > ${pos}`;
      await db.unsafeExec({ sql });
    }

  }

  // Columns
  const { results: cols } = useLiveQuery(db.colmap.liveMany());

  //const getSheetCols = (sheet_id: string) => cols?.filter((c) => c.sheet_id === sheet_id)
  //  .sort((a,b) => a.pos - b.pos) ?? [];
  
  const getSheetCols = (sheet_id: string, startCol: string): Row[] => {
    // Find the starting row based on sheet_id and row_last
    if (!cols) {
      return [];
    }
    const startingCol = cols.find(c => c.sheet_id === sheet_id && c.id === startCol);
    
    if (!startingCol) {
      return [];
    }
  
    // Recursive function to order cols
    const orderCols = (currentCol: Col | undefined, orderedCols: Col[] = []): Col[] => {
      if (!currentCol) {
        return orderedCols;
      }
  
      orderedCols.push(currentCol);
      
      // Find the next Col where the startMarker matches the endMarker of the current Col
      const nextCol = Cols.find(c => c.sheet_id === sheet_id && c.startMarker === currentCol.endMarker);
      
      return orderCols(nextCol, orderedCols);
    };
  
    // Start the ordering with the initial Col
    return orderCols(startingCol);
  };

  const getColLabel = (col: Colmap) => col? col.id : [];
  
  const onAddCol = async (sheet_id: string, pos = -1) => {
    const sheet = sheets?.find((s) => s.id === sheet_id);
    if (!sheet) return;
    if (pos < 0) pos = sheet.cols + 1;
    pos = Math.min(sheet.cols + 1, pos);

    if (pos <= sheet.cols) {
      const sql = `UPDATE colmap SET pos = pos + 1 WHERE sheet_id = '${sheet_id}' AND pos >= ${pos}`;
      await db.unsafeExec({ sql });
    }

    await db.colmap.create({ data: {
      id: genUUID(),
      sheet_id,
      pos
    }});

    await db.sheets.update({
      where: { id: sheet_id },
      data: {
        cols: sheet.cols + 1
      }
    });
  }

  const onDeleteCol = async (sheet_id: string, pos: number) => {
    const col = cols?.find((c) => c.sheet_id === sheet_id && c.pos === pos);
    const sheet = sheets?.find((s) => s.id === sheet_id);
    if (!col || !sheet) return;

    await db.colmap.delete({ where: { id: col.id } });    
    await db.sheets.update({
      where: { id: sheet_id },
      data: {
        cols: sheet?.cols - 1
      }
    });

    if (pos < sheet.cols) {
      const sql = `UPDATE colmap SET pos = pos - 1 WHERE sheet_id = '${sheet_id}' AND pos > ${pos}`;
      await db.unsafeExec({ sql });
    }

  }


  // Cell Content
  const { results: content } = useLiveQuery(db.cellmap.liveMany());

  const getCell = (sheet_id: string, row_id: string, col_id: string) => {
    return (content ?? []).find((c) => c.sheet_id === sheet_id && c.row_id === row_id && c.col_id === col_id);
  };

  const onCellBlur = async (sheet_id: string, row_id: string, col_id: string, content: string) => {
    const cell = getCell(sheet_id, row_id, col_id);
    if (content && !cell) {
      await db.cellmap.create({ data: {
        id: genUUID(), sheet_id, row_id, col_id, content
      }});
    } else if (cell && cell?.content !== content) {
      await db.cellmap.update({ where: {  id: cell.id }, data: { content } });
    }
  }

  // Column Header Context Menu
  const colContextMenuItems = [
    { action: 'insertColLeft',  text: "Insert left",    image: "https://cdn-icons-png.flaticon.com/512/7601/7601881.png" },
    { action: 'deleteCol',      text: "Delete column",  image: "https://cdn-icons-png.flaticon.com/512/7794/7794583.png" },
    { action: 'insertColRight', text: "Insert right",   image: "https://cdn-icons-png.flaticon.com/512/7601/7601880.png" }
  ] as const;
  type ColContextMenuAction = typeof colContextMenuItems[number]['action'];

  type ColHeaderEvent = React.MouseEvent<HTMLTableHeaderCellElement>;
  const [colMenuOpen, setColMenuOpen] = useState(false);
  const [colMenuCol, setColMenuCol] = useState<Colmap | null>(null);  
  const [colMenuAnchor, setColMenuAnchor] = useState<Element | null>(null);

  const onColHeaderContext = (event: ColHeaderEvent, col: Colmap) => {
    event.preventDefault();
    setColMenuAnchor(event.currentTarget);
    setColMenuCol(col);
    setColMenuOpen(true);
  }

  const onColMenuClose = () => {
    setColMenuOpen(false);
  }

  const onColMenuItemClick = (action: ColContextMenuAction) => {
    if (!colMenuCol) return;
    const { pos, sheet_id } = colMenuCol;
    switch(action) {
      case 'insertColLeft':
        onAddCol(sheet_id, pos);
        break;
      case 'deleteCol':
        onDeleteCol(sheet_id, pos);
        break;
      case 'insertColRight':
        onAddCol(sheet_id, pos + 1);
        break;
      default:
        return console.warn(`onColMenuClick called with invalid action: ${action}`);
    }
  }  
  

  // Row Header Context Menu
  const rowContextMenuItems = [
    { action: 'insertRowAbove', text: "Insert above", image: "https://cdn-icons-png.flaticon.com/512/6535/6535072.png" },
    { action: 'deleteRow',      text: "Delete row",   image: "https://cdn-icons-png.flaticon.com/512/1/1813.png" },
    { action: 'insertRowBelow', text: "Insert below", image: "https://cdn-icons-png.flaticon.com/512/6535/6535075.png" }
  ] as const;
  type RowContextMenuAction = typeof rowContextMenuItems[number]['action'];
  
  type RowHeaderEvent = React.MouseEvent<HTMLTableHeaderCellElement>;

  const [rowMenuOpen, setRowMenuOpen] = useState(false);
  const [rowMenuRow, setRowMenuRow] = useState<Rowmap | null>(null);  
  const [rowMenuAnchor, setrowMenuAnchor] = useState<Element | null>(null);

  const onRowHeaderContext = (event: RowHeaderEvent, row: Rowmap) => {
    console.log({ fn: 'onRowHeaderContext', event, sheet_id: row.sheet_id });
    event.preventDefault();
    setrowMenuAnchor(event.currentTarget);
    console.log("event.currentTarget",event.currentTarget);
    setRowMenuOpen(true);
    console.log("onRowHeaderContext >> row", row );
    setRowMenuRow(row);
  }

  const onRowMenuClose = () => {
    setRowMenuOpen(false);
  }

  const onRowMenuItemClick = (action: RowContextMenuAction) => {
    console.log("inside onRowMenuItemClick", rowMenuRow);
    if (!rowMenuRow) return;
    const { id, sheet_id } = rowMenuRow;
  switch(action) {
    case 'insertRowAbove':
      onAddRow(sheet_id, id, 'before');
      break;
    case 'deleteRow':
      onDeleteRow(sheet_id, id);
      break;
    case 'insertRowBelow':
      onAddRow(sheet_id, id, 'after');
      break;
    default:
      return console.warn(`onRowMenuClick called with invalid action: ${action}`);
    }
  }  
    
  // Main spreadsheet construction
  return (
    <div className="split">
      {sheets?.map((sheet) => {
        const rows = getSheetRows(sheet.id, sheet.startRow);
        const cols = getSheetCols(sheet.id, sheet.startCol);
        return (
        <table id={sheet.id} className="spreadsheetSim" key={sheet.id}>
          <thead>
            <tr className="titleRow">
              <th style={{color: 'red'}} onClick={() => onDelSheet(sheet.id)}>X</th>
              <th colSpan={sheet.cols + 1}>{sheet.id}</th>
            </tr>
            <tr className="firstRow">
                <th key="icon" title='Right click for options'>                  
                    <img alt='MR' height='16em' src='https://cdn-icons-png.flaticon.com/512/3645/3645851.png'/>
                </th>
                {cols.map((col) => 
                  <th key={col.id} onContextMenu={event => onColHeaderContext(event, col)}>{getColLabel(col)}</th>
                )}
                <th key="button" className="addButtons addColumnButton" rowSpan={2} onClick={() => onAddCol(sheet.id,-1) }>+</th>
            </tr>
          </thead>  
          <tbody>
            {rows.map((row) => 
              <tr key={row.id}>
                <th  onContextMenu={event => onRowHeaderContext(event, row)}>{getRowLabel(row)}</th>
                {cols.map((col) => {
                  const cell = getCell(sheet.id, row.id, col.id);
                  return (
                    <td key={`${col.id}-${row.id}`}><input
                        type="text"
                        defaultValue={cell?.content ?? ''}
                        onBlur={event => onCellBlur(sheet.id, row.id, col.id, event.target.value)}
                    /></td>
                  )
                })}
              </tr>
            )}
            <tr>
              <th className="addButtons addRowButton" onClick={() => onAddRow(sheet.id, '', '', '') }>+</th>
            </tr>
          </tbody>                 
        </table>
        )}
      )}  
      
      <div className="addButtons addSheetButton" onClick={() => onAddSheet()}>+ Add Sheet</div>  

      <div className='json'>
        <div>Cols: <br /><pre>{JSON.stringify(cols, null, 2)}</pre></div>
        <div>Rows: <br /><pre>{JSON.stringify(rows, null, 2)}</pre></div>
        <div>Content <br /><pre>{JSON.stringify(content, null, 2)}</pre></div>
      </div>

      <Menu
            id="columnContextMenu"
            anchorEl={colMenuAnchor}
            open={colMenuOpen}
            onClose={onColMenuClose}
            onClick={onColMenuClose}
        >
            {colContextMenuItems.map((item) => (
                <MenuItem key={item.action} onClick={() => onColMenuItemClick(item.action)}>
                  <ListItemIcon>
                      <img height='16em' src={item.image} alt={item.text}/>
                  </ListItemIcon>
                  <ListItemText primary={item.text}/>
                </MenuItem>
            ))}
          </Menu>
          <Menu
            id="rowContextMenu"
            anchorEl={rowMenuAnchor}
            open={rowMenuOpen}
            onClose={onRowMenuClose}
            onClick={onRowMenuClose}
        >
            {rowContextMenuItems.map((item) => (
                <MenuItem key={item.action} onClick={() => onRowMenuItemClick(item.action)}>
                  <ListItemIcon>
                      <img height='16em' src={item.image} alt={item.text}/>
                  </ListItemIcon>
                  <ListItemText primary={item.text}/>
                </MenuItem>
            ))}
        </Menu>      

    </div>
  );
}