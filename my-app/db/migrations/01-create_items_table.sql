/* This is an example of an SQL DDL migration. It creates an `items` table and
 * then calls an `electric.electrify` procedure to expose the table to the
 * ElectricSQL replication machinery.
 *
 * Note that these statements are applied directly to the *Postgres* database.
 * Electric then handles keeping the local SQLite database schema in sync with
 * the electrified subset of your Postgres database schema.
 *
 * See https://electric-sql.com/docs/usage/data-modelling for more information.
 */
BEGIN;

/* 
-- Create a simple items table.
CREATE TABLE IF NOT EXISTS items (
  value TEXT PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS rowmap (
  id UUID PRIMARY KEY NOT NULL,
  pos integer
);

CREATE TABLE IF NOT EXISTS colmap (
  id UUID PRIMARY KEY NOT NULL,
  pos integer
);

CREATE TABLE IF NOT EXISTS contentmap (
  rowIndex UUID NOT NULL REFERENCES rowmap(id) ON DELETE CASCADE ON UPDATE CASCADE,
  colIndex UUID NOT NULL REFERENCES colmap(id) ON DELETE CASCADE ON UPDATE CASCADE,
  content TEXT,
  PRIMARY KEY(rowIndex,colIndex)
);
*/

CREATE TABLE IF NOT EXISTS sheets (
  id TEXT PRIMARY KEY NOT NULL,
  rows SMALLINT NOT NULL,
  cols SMALLINT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  title TEXT
);

CREATE TABLE IF NOT EXISTS rowmap (
  id TEXT PRIMARY KEY NOT NULL,
  sheet_id TEXT NOT NULL REFERENCES sheets(id) ON DELETE CASCADE ON UPDATE CASCADE,
  pos SMALLINT NOT NULL
);

CREATE TABLE IF NOT EXISTS colmap (
  id TEXT PRIMARY KEY NOT NULL,
  sheet_id TEXT NOT NULL REFERENCES sheets(id) ON DELETE CASCADE ON UPDATE CASCADE,
  pos SMALLINT NOT NULL
);

CREATE TABLE IF NOT EXISTS cellmap (
  id TEXT PRIMARY KEY NOT NULL,  
  sheet_id TEXT NOT NULL REFERENCES sheets(id) ON DELETE CASCADE ON UPDATE CASCADE,
  row_id TEXT NOT NULL REFERENCES rowmap(id) ON DELETE CASCADE ON UPDATE CASCADE,
  col_id TEXT NOT NULL REFERENCES colmap(id) ON DELETE CASCADE ON UPDATE CASCADE,
  content TEXT  
);

/* Looks like Electric does not support composite primary keys quite yet */
/*
  CREATE TABLE IF NOT EXISTS content (
    sheet_id TEXT NOT NULL REFERENCES sheets(id) ON DELETE CASCADE ON UPDATE CASCADE,
    row SMALLINT NOT NULL,
    col SMALLINT NOT NULL,
    content TEXT,
    PRIMARY KEY(sheet_id, row, col)
  );
*/



-- ⚡
-- Electrify the items table
/* 
ALTER TABLE items ENABLE ELECTRIC;
ALTER TABLE rowmap ENABLE ELECTRIC;
ALTER TABLE colmap ENABLE ELECTRIC;
ALTER TABLE contentmap ENABLE ELECTRIC;
 */
ALTER TABLE sheets ENABLE ELECTRIC;
ALTER TABLE rowmap ENABLE ELECTRIC;
ALTER TABLE colmap ENABLE ELECTRIC;
ALTER TABLE cellmap ENABLE ELECTRIC;


COMMIT;