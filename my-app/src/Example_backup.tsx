import { useEffect } from 'react'
import { useLiveQuery } from 'electric-sql/react'
import { genUUID } from 'electric-sql/util'
import { Items as Item } from './generated/client'
import { Rowmap as Row } from './generated/client'
import { useElectric } from './ElectricProvider'

import './Example.css'

export const Example = () => {
  const { db } = useElectric()!
  const { results } = useLiveQuery(db.items.liveMany())
  const { resultsRowMap } = useLiveQuery(db.rowmap.liveMany());

  useEffect(() => {
    const syncItems = async () => {
      // Resolves when the shape subscription has been established.
      const shape = await db.items.sync()
      const shapeRow = await db.rows.sync()
      // Resolves when the data has been synced into the local database.
      await shape.synced
      await shapeRow.synced
    }
    
    syncItems()
  }, [])


  const addItem = async () => {
    await db.items.create({
      data: {
        value: genUUID(),
      },
    })
  }

  const addRow = async () => {
    await db.rowmap.create({
      data: {
        id: genUUID(),
        pos: 1,
      },
    })
  }


  const clearItems = async () => {
    await db.items.deleteMany()
  }

  const items: Item[] = results ?? []
  const rows: Row[] = resultsRowMap ?? []

  return (
    <div>
      <div className="controls">
        <button className="button" onClick={addRow}>
          Add
        </button>
        <button className="button" onClick={clearItems}>
          Clear
        </button>
      </div>
      {items.map((item: Item, index: number) => (
        <p key={index} className="item">
          <code>{item.value}</code>
        </p>
      ))}
      {rows.map((Row: rows, index: number) => (
        <p key={index} className="item">
          <code>{Row.id}</code>
        </p>
      ))}
    </div>
  )
}
