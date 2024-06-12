import './App.css';
import { useLiveQuery } from 'electric-sql/react';
import { genUUID } from 'electric-sql/util';

import { useElectric } from './ElectricProvider';
import './Example_stildalf.css';
import { Sheets as Sheet } from './generated/client';


export const Example = () => {

  // Electric
  const { db } = useElectric()!; 

  // Sheets
  const { results: sheets } = useLiveQuery(db.sheets.liveMany());
  
  const onAddSheet = () => db.sheets.create({ data: {
    id: genUUID(),
    rows: 0,
    cols: 0
  }});
  
  const onDelSheet = async (id: string) => {
    await db.content.deleteMany({ where: { sheet_id: id }});
    await db.sheets.delete({ where: { id }});
  }

  
  // Rows & Columns
  type Row = { row: number, label: string };
  type Col = { col: number, label: string };

  const getSheetRowsAndCols = (sheet: Sheet) => {
    const rows: Row[] = [];
    for (let i = 1; i <= sheet.rows; i++) {
      rows.push({ row: i, label: i.toString() });
    }
    const cols: Col[] = [];
    for (let i = 1; i <= sheet.cols; i++) {
      cols.push({ col: i, label: String.fromCharCode(i + 64) });
    }
    return { rows, cols };
  }
  
  const onAddCols = async (sheet_id: string, count = 1) => {
    const sheet = sheets?.find((s) => s.id === sheet_id);
    if (!sheet) return;
    await db.sheets.update({
      where: { id: sheet_id },
      data: {
        cols: sheet?.cols + count
      }
    });
  }

  const onAddRows = (sheet_id: string, count = 1) => {
    const sheet = sheets?.find((s) => s.id === sheet_id);
    if (!sheet) return;
    db.sheets.update({
      where: { id: sheet_id },
      data: {
        rows: sheet?.rows + count
      }
    });
  }


  // Cell Content
  const { results: content } = useLiveQuery(db.content.liveMany());

  const getCell = (sheet_id: string, row: number, col: number) => {
    return (content ?? []).find((c) => c.sheet_id === sheet_id && c.row === row && c.col === col);
  };

  const onCellBlur = async (sheet_id: string, row: number, col: number, content: string) => {
    const cell = getCell(sheet_id, row, col);
    if (content && !cell) {
      await db.content.create({ data: {
        id: genUUID(), sheet_id, row, col, content
      }});
    } else if (cell && cell?.content !== content) {
      await db.content.update({ where: {  id: cell.id }, data: { content } });
    }
  }

 
  // Main spreadsheet construction
  return (
    <div className="split">
      {sheets?.map((sheet) => {
        const { rows, cols } = getSheetRowsAndCols(sheet);
        return (
        <table id={sheet.id} className="spreadsheetSim" key={sheet.id}>
          <thead>
            <tr className="firstRow">
                <th title='Delete Sheet' style={{color: 'red'}} onClick={() => onDelSheet(sheet.id) }>X</th>
                {cols.map((col) => 
                  <th key={col.label}>{col.label}</th>
                )}
                <th key="button" className="addButtons addColumnButton" rowSpan={2} onClick={() => onAddCols(sheet.id,1) }>+</th>
            </tr>
          </thead>  
          <tbody>
            {rows.map((row) => 
              <tr key={row.label}>
                <th>{row.label}</th>
                {cols.map((col) => {
                  const cell = getCell(sheet.id, row.row, col.col);
                  return (
                    <td key={`${col.label}-${row.label}`}>
                      <input
                        type="text"
                        defaultValue={cell?.content ?? ''}
                        onBlur={event => onCellBlur(sheet.id, row.row, col.col, event.target.value)}
                      />
                    </td>
                  )
                })}
              </tr>
            )}
          
            <tr>
              <th className="addButtons addRowButton" onClick={() => onAddRows(sheet.id, 1) }>+</th>
            </tr>
          </tbody>
        </table>
        )}
      )}  
      
      <div className="addButtons addSheetButton" onClick={() => onAddSheet()}>+ Add Sheet</div>  

    </div>
  );
}