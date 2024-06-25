import './App.css';
import './Example.css';
import React, { useState } from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';

import { useLiveQuery } from 'electric-sql/react';
import { useElectric } from './ElectricProvider';
import { Colmap, Rowmap } from './generated/client';
// import { genUUID } from 'electric-sql/util';
import { nanoid } from 'nanoid';

const genUUID = (size = 20) => nanoid(size);

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
    startcol: '',
    endcol: '',
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
      
      // Find the next row where the startmarker matches the endmarker of the current row
      const nextRow = rows.find(r => r.sheet_id === sheet_id && r.startmarker === currentRow.endmarker);
      
      return orderRows(nextRow, orderedRows);
    };
  
    // Start the ordering with the initial row
    return orderRows(startingRow);
  };


  const orderRows = (rows: Rowmap[], marker: string, sheet_id: string): Rowmap[] => {
    const currentRow = rows.find(r => r.sheet_id === sheet_id && r.startmarker === marker);
    if (!currentRow) return;
    orderedRows.push(currentRow);
    currentMarker = currentRow.endmarker

    while (currentMarker) {
      const currentRow = rows.find(r => r.sheet_id === sheet_id && r.startmarker === currentMarker);
      if (!currentRow) return;
      orderedRows.push(currentRow);
      currentMarker = currentRow.endmarker;
    }
  
    return orderedRows;
  };

  //const getRowLabel = (row: Rowmap) => row? row.id : [];

  const getRowLabel = (rows: Rowmap[], row: Rowmap, sheet: string) => {
    const orderedRows: Rowmap[] = [];
    const currentRow = rows.find(r => r.sheet_id === sheet.sheet_id && r.id === sheet.startrow);
    if (!currentRow) return;
    orderedRows.push(currentRow);

    //following is the endmarker of the first row of spreadsheet
    orderedRows.push(orderRows(rows, currentRow.endmarker, sheet.id));
    const foundRow = orderedRows.findIndex(r => r.id === row.id);
    //return foundRow?.label ?? foundRow?.pos ?? '';
    return orderedRows[foundRow];
  };

  const onAddRow = async (sheet_id: string, id: string, position: 'before' | 'after' = 'after') => {
    
    console.log("onAddRow ", sheet_id, id , position);
    const sheet = sheets?.find((s) => s.id === sheet_id);
    if (!sheet) return;
    
    const newRowId = genUUID();
    
    if(!sheet.startrow && !sheet.endrow) {
      const startmarker =  genUUID();
      const endmarker = genUUID();
      await db.sheets.update({
        where: { id: sheet_id },
        data: {
          startrow: newRowId,
          endrow: newRowId
        }
      });
      await db.rowmap.create({ data: {
        id: newRowId,
        sheet_id,
        startmarker,
        endmarker
      }});
      return;
    }
      
    
    const rowIndex = rows.findIndex(r => r.sheet_id === sheet_id && r.id === id);

    if (rowIndex !== -1) {
      const referenceRow = rows[rowIndex];

      const newRow = { id: newRowId, sheet_id: sheet_id, startmarker: null, endmarker: null };
      if (position === 'after') {
        // here you need to send updates to electricSQL rowmap schema
        newRow.startmarker = referenceRow.endmarker;
        newRow.endmarker = genUUID();

        await db.rowmap.create({ data: {
          id: newRowId,
          sheet_id,
          startmarker: newRow.startmarker,
          endmarker: newRow.endmarker,
        }});

        
        const nextRow = rows.find(r => r.startmarker === referenceRow.endmarker);
        if (nextRow) nextRow.startmarker = newRow.endmarker;
          
        //const sql = `UPDATE rowmap SET startmarker = ${newRow.endmarker} WHERE sheet_id = '${sheet_id}' AND startmarker = ${referenceRow.endmarker}`;
        //await db.unsafeExec({ sql });

        await db.sheets.update({
          where: { id: sheet_id },
          data: {
            endrow: newRowId,
          }
        });

        await db.rowmap.update({
          where: { id: sheet_id, startmarker: referenceRow.endmarker },
          data: {
            startmarker: newRow.endmarker,
          }
        });

        console.log("sheets", sheet);


        //PENDING -> update sheet_id endRow or startRow 
        //based on the referenceRow.ID is equal to startRow for position = "before"
        //or referenceRow.ID is equal to endRow for position = "after"

      } else if (position === 'before') {
          newRow.endmarker = referenceRow.startmarker;
          newRow.startmarker = genUUID();

          await db.rowmap.create({ data: {
            id: newRowId,
            sheet_id,
            startmarker: newRow.startmarker,
            endmarker: newRow.endmarker,
          }});
            
          const prevRow = rows.find(r => r.endmarker === referenceRow.startmarker);
          if (prevRow) prevRow.endmarker = newRow.startmarker;
            const sql = `UPDATE rowmap SET endmarker = ${newRow.startmarker} WHERE sheet_id = '${sheet_id}' AND endmarker = ${referenceRow.startmarker}`;
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
  
  const getSheetCols = (sheet_id: string, startCol: string): Col[] => {
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
      
      // Find the next Col where the startmarker matches the endmarker of the current Col
      const nextCol = cols.find(c => c.sheet_id === sheet_id && c.startmarker === currentCol.endmarker);
      
      return orderCols(nextCol, orderedCols);
    };
  
    // Start the ordering with the initial Col
    return orderCols(startingCol);
  };

  const orderCols = (cols: Colmap[], marker: string, sheet_id: string): Colmap[] => {
    const currentCol = cols.find(c => c.sheet_id === sheet_id && c.startmarker === marker);
    if (!currentCol) return;
    orderedCols.push(currentCol);
    currentMarker = currentCol.endmarker

    while (currentMarker) {
      const currentCol = cols.find(c => c.sheet_id === sheet_id && c.startmarker === currentMarker);
      if (!currentCol) return;
      orderedCols.push(currentCol);
      currentMarker = currentCol.endmarker;
    }
  
    return orderedCols;
  };

  const getColLabel = (cols: Colmap[], col: Colmap, sheet: string) => {
    const orderedCols: Colmap[] = [];
    const currentCol = cols.find(c => c.sheet_id === sheet.sheet_id && c.id === sheet.startcol);
    if (!currentCol) return;
    orderedCols.push(currentCol);

    //following is the endmarker of the first col of spreadsheet
    orderedCols.push(orderCols(cols, currentCol.endmarker, sheet.id));
    const foundCol = orderedCols.findIndex(c => c.id === col.id);
    //return foundCol?.label ?? foundCols?.pos ?? '';
    return orderedCols[foundCol];
  };

  //const getColLabel = (col: Colmap) => col? col.id : [];
  
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
                  <th key={col.id} onContextMenu={event => onColHeaderContext(event, col)}>{getColLabel(col,sheet)}</th>
                )}
                <th key="button" className="addButtons addColumnButton" rowSpan={2} onClick={() => onAddCol(sheet.id,-1) }>+</th>
            </tr>
          </thead>  
          <tbody>
            {rows.map((row) => 
              <tr key={row.id}>
                <th  onContextMenu={event => onRowHeaderContext(event, row)}>{getRowLabel(row, sheet)}</th>
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
              <th className="addButtons addRowButton" onClick={() => onAddRow(sheet.id, sheet.endrow, 'after') }>+</th>
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