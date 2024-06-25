import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const CellmapScalarFieldEnumSchema = z.enum(['id','sheet_id','row_id','col_id','content']);

export const ColmapScalarFieldEnumSchema = z.enum(['id','sheet_id','startmarker','endmarker']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const RowmapScalarFieldEnumSchema = z.enum(['id','sheet_id','startmarker','endmarker']);

export const SheetsScalarFieldEnumSchema = z.enum(['id','rows','cols','startrow','endrow','startrol','endrol','created_at','title']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CELLMAP SCHEMA
/////////////////////////////////////////

export const CellmapSchema = z.object({
  id: z.string(),
  sheet_id: z.string(),
  row_id: z.string(),
  col_id: z.string(),
  content: z.string().nullable(),
})

export type Cellmap = z.infer<typeof CellmapSchema>

/////////////////////////////////////////
// COLMAP SCHEMA
/////////////////////////////////////////

export const ColmapSchema = z.object({
  id: z.string(),
  sheet_id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
})

export type Colmap = z.infer<typeof ColmapSchema>

/////////////////////////////////////////
// ROWMAP SCHEMA
/////////////////////////////////////////

export const RowmapSchema = z.object({
  id: z.string(),
  sheet_id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
})

export type Rowmap = z.infer<typeof RowmapSchema>

/////////////////////////////////////////
// SHEETS SCHEMA
/////////////////////////////////////////

export const SheetsSchema = z.object({
  id: z.string(),
  rows: z.number().int().gte(-32768).lte(32767),
  cols: z.number().int().gte(-32768).lte(32767),
  startrow: z.string().nullable(),
  endrow: z.string().nullable(),
  startrol: z.string().nullable(),
  endrol: z.string().nullable(),
  created_at: z.coerce.date(),
  title: z.string().nullable(),
})

export type Sheets = z.infer<typeof SheetsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CELLMAP
//------------------------------------------------------

export const CellmapIncludeSchema: z.ZodType<Prisma.CellmapInclude> = z.object({
  colmap: z.union([z.boolean(),z.lazy(() => ColmapArgsSchema)]).optional(),
  rowmap: z.union([z.boolean(),z.lazy(() => RowmapArgsSchema)]).optional(),
  sheets: z.union([z.boolean(),z.lazy(() => SheetsArgsSchema)]).optional(),
}).strict()

export const CellmapArgsSchema: z.ZodType<Prisma.CellmapArgs> = z.object({
  select: z.lazy(() => CellmapSelectSchema).optional(),
  include: z.lazy(() => CellmapIncludeSchema).optional(),
}).strict();

export const CellmapSelectSchema: z.ZodType<Prisma.CellmapSelect> = z.object({
  id: z.boolean().optional(),
  sheet_id: z.boolean().optional(),
  row_id: z.boolean().optional(),
  col_id: z.boolean().optional(),
  content: z.boolean().optional(),
  colmap: z.union([z.boolean(),z.lazy(() => ColmapArgsSchema)]).optional(),
  rowmap: z.union([z.boolean(),z.lazy(() => RowmapArgsSchema)]).optional(),
  sheets: z.union([z.boolean(),z.lazy(() => SheetsArgsSchema)]).optional(),
}).strict()

// COLMAP
//------------------------------------------------------

export const ColmapIncludeSchema: z.ZodType<Prisma.ColmapInclude> = z.object({
  cellmap: z.union([z.boolean(),z.lazy(() => CellmapFindManyArgsSchema)]).optional(),
  sheets: z.union([z.boolean(),z.lazy(() => SheetsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColmapCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ColmapArgsSchema: z.ZodType<Prisma.ColmapArgs> = z.object({
  select: z.lazy(() => ColmapSelectSchema).optional(),
  include: z.lazy(() => ColmapIncludeSchema).optional(),
}).strict();

export const ColmapCountOutputTypeArgsSchema: z.ZodType<Prisma.ColmapCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ColmapCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ColmapCountOutputTypeSelectSchema: z.ZodType<Prisma.ColmapCountOutputTypeSelect> = z.object({
  cellmap: z.boolean().optional(),
}).strict();

export const ColmapSelectSchema: z.ZodType<Prisma.ColmapSelect> = z.object({
  id: z.boolean().optional(),
  sheet_id: z.boolean().optional(),
  startmarker: z.boolean().optional(),
  endmarker: z.boolean().optional(),
  cellmap: z.union([z.boolean(),z.lazy(() => CellmapFindManyArgsSchema)]).optional(),
  sheets: z.union([z.boolean(),z.lazy(() => SheetsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColmapCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ROWMAP
//------------------------------------------------------

export const RowmapIncludeSchema: z.ZodType<Prisma.RowmapInclude> = z.object({
  cellmap: z.union([z.boolean(),z.lazy(() => CellmapFindManyArgsSchema)]).optional(),
  sheets: z.union([z.boolean(),z.lazy(() => SheetsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RowmapCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RowmapArgsSchema: z.ZodType<Prisma.RowmapArgs> = z.object({
  select: z.lazy(() => RowmapSelectSchema).optional(),
  include: z.lazy(() => RowmapIncludeSchema).optional(),
}).strict();

export const RowmapCountOutputTypeArgsSchema: z.ZodType<Prisma.RowmapCountOutputTypeArgs> = z.object({
  select: z.lazy(() => RowmapCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RowmapCountOutputTypeSelectSchema: z.ZodType<Prisma.RowmapCountOutputTypeSelect> = z.object({
  cellmap: z.boolean().optional(),
}).strict();

export const RowmapSelectSchema: z.ZodType<Prisma.RowmapSelect> = z.object({
  id: z.boolean().optional(),
  sheet_id: z.boolean().optional(),
  startmarker: z.boolean().optional(),
  endmarker: z.boolean().optional(),
  cellmap: z.union([z.boolean(),z.lazy(() => CellmapFindManyArgsSchema)]).optional(),
  sheets: z.union([z.boolean(),z.lazy(() => SheetsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RowmapCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SHEETS
//------------------------------------------------------

export const SheetsIncludeSchema: z.ZodType<Prisma.SheetsInclude> = z.object({
  cellmap: z.union([z.boolean(),z.lazy(() => CellmapFindManyArgsSchema)]).optional(),
  colmap: z.union([z.boolean(),z.lazy(() => ColmapFindManyArgsSchema)]).optional(),
  rowmap: z.union([z.boolean(),z.lazy(() => RowmapFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SheetsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SheetsArgsSchema: z.ZodType<Prisma.SheetsArgs> = z.object({
  select: z.lazy(() => SheetsSelectSchema).optional(),
  include: z.lazy(() => SheetsIncludeSchema).optional(),
}).strict();

export const SheetsCountOutputTypeArgsSchema: z.ZodType<Prisma.SheetsCountOutputTypeArgs> = z.object({
  select: z.lazy(() => SheetsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const SheetsCountOutputTypeSelectSchema: z.ZodType<Prisma.SheetsCountOutputTypeSelect> = z.object({
  cellmap: z.boolean().optional(),
  colmap: z.boolean().optional(),
  rowmap: z.boolean().optional(),
}).strict();

export const SheetsSelectSchema: z.ZodType<Prisma.SheetsSelect> = z.object({
  id: z.boolean().optional(),
  rows: z.boolean().optional(),
  cols: z.boolean().optional(),
  startrow: z.boolean().optional(),
  endrow: z.boolean().optional(),
  startrol: z.boolean().optional(),
  endrol: z.boolean().optional(),
  created_at: z.boolean().optional(),
  title: z.boolean().optional(),
  cellmap: z.union([z.boolean(),z.lazy(() => CellmapFindManyArgsSchema)]).optional(),
  colmap: z.union([z.boolean(),z.lazy(() => ColmapFindManyArgsSchema)]).optional(),
  rowmap: z.union([z.boolean(),z.lazy(() => RowmapFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SheetsCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const CellmapWhereInputSchema: z.ZodType<Prisma.CellmapWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CellmapWhereInputSchema),z.lazy(() => CellmapWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CellmapWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CellmapWhereInputSchema),z.lazy(() => CellmapWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  row_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  col_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  colmap: z.union([ z.lazy(() => ColmapRelationFilterSchema),z.lazy(() => ColmapWhereInputSchema) ]).optional(),
  rowmap: z.union([ z.lazy(() => RowmapRelationFilterSchema),z.lazy(() => RowmapWhereInputSchema) ]).optional(),
  sheets: z.union([ z.lazy(() => SheetsRelationFilterSchema),z.lazy(() => SheetsWhereInputSchema) ]).optional(),
}).strict();

export const CellmapOrderByWithRelationInputSchema: z.ZodType<Prisma.CellmapOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row_id: z.lazy(() => SortOrderSchema).optional(),
  col_id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  colmap: z.lazy(() => ColmapOrderByWithRelationInputSchema).optional(),
  rowmap: z.lazy(() => RowmapOrderByWithRelationInputSchema).optional(),
  sheets: z.lazy(() => SheetsOrderByWithRelationInputSchema).optional()
}).strict();

export const CellmapWhereUniqueInputSchema: z.ZodType<Prisma.CellmapWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const CellmapOrderByWithAggregationInputSchema: z.ZodType<Prisma.CellmapOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row_id: z.lazy(() => SortOrderSchema).optional(),
  col_id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CellmapCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CellmapMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CellmapMinOrderByAggregateInputSchema).optional()
}).strict();

export const CellmapScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CellmapScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CellmapScalarWhereWithAggregatesInputSchema),z.lazy(() => CellmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CellmapScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CellmapScalarWhereWithAggregatesInputSchema),z.lazy(() => CellmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  row_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  col_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ColmapWhereInputSchema: z.ZodType<Prisma.ColmapWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ColmapWhereInputSchema),z.lazy(() => ColmapWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColmapWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColmapWhereInputSchema),z.lazy(() => ColmapWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startmarker: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endmarker: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cellmap: z.lazy(() => CellmapListRelationFilterSchema).optional(),
  sheets: z.union([ z.lazy(() => SheetsRelationFilterSchema),z.lazy(() => SheetsWhereInputSchema) ]).optional(),
}).strict();

export const ColmapOrderByWithRelationInputSchema: z.ZodType<Prisma.ColmapOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional(),
  cellmap: z.lazy(() => CellmapOrderByRelationAggregateInputSchema).optional(),
  sheets: z.lazy(() => SheetsOrderByWithRelationInputSchema).optional()
}).strict();

export const ColmapWhereUniqueInputSchema: z.ZodType<Prisma.ColmapWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const ColmapOrderByWithAggregationInputSchema: z.ZodType<Prisma.ColmapOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ColmapCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ColmapMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ColmapMinOrderByAggregateInputSchema).optional()
}).strict();

export const ColmapScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ColmapScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema),z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema),z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startmarker: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endmarker: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const RowmapWhereInputSchema: z.ZodType<Prisma.RowmapWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RowmapWhereInputSchema),z.lazy(() => RowmapWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RowmapWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RowmapWhereInputSchema),z.lazy(() => RowmapWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startmarker: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endmarker: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cellmap: z.lazy(() => CellmapListRelationFilterSchema).optional(),
  sheets: z.union([ z.lazy(() => SheetsRelationFilterSchema),z.lazy(() => SheetsWhereInputSchema) ]).optional(),
}).strict();

export const RowmapOrderByWithRelationInputSchema: z.ZodType<Prisma.RowmapOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional(),
  cellmap: z.lazy(() => CellmapOrderByRelationAggregateInputSchema).optional(),
  sheets: z.lazy(() => SheetsOrderByWithRelationInputSchema).optional()
}).strict();

export const RowmapWhereUniqueInputSchema: z.ZodType<Prisma.RowmapWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const RowmapOrderByWithAggregationInputSchema: z.ZodType<Prisma.RowmapOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RowmapCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RowmapMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RowmapMinOrderByAggregateInputSchema).optional()
}).strict();

export const RowmapScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RowmapScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema),z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema),z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startmarker: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endmarker: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const SheetsWhereInputSchema: z.ZodType<Prisma.SheetsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SheetsWhereInputSchema),z.lazy(() => SheetsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SheetsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SheetsWhereInputSchema),z.lazy(() => SheetsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rows: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  cols: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startrow: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  endrow: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  startrol: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  endrol: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  cellmap: z.lazy(() => CellmapListRelationFilterSchema).optional(),
  colmap: z.lazy(() => ColmapListRelationFilterSchema).optional(),
  rowmap: z.lazy(() => RowmapListRelationFilterSchema).optional()
}).strict();

export const SheetsOrderByWithRelationInputSchema: z.ZodType<Prisma.SheetsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional(),
  startrow: z.lazy(() => SortOrderSchema).optional(),
  endrow: z.lazy(() => SortOrderSchema).optional(),
  startrol: z.lazy(() => SortOrderSchema).optional(),
  endrol: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  cellmap: z.lazy(() => CellmapOrderByRelationAggregateInputSchema).optional(),
  colmap: z.lazy(() => ColmapOrderByRelationAggregateInputSchema).optional(),
  rowmap: z.lazy(() => RowmapOrderByRelationAggregateInputSchema).optional()
}).strict();

export const SheetsWhereUniqueInputSchema: z.ZodType<Prisma.SheetsWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const SheetsOrderByWithAggregationInputSchema: z.ZodType<Prisma.SheetsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional(),
  startrow: z.lazy(() => SortOrderSchema).optional(),
  endrow: z.lazy(() => SortOrderSchema).optional(),
  startrol: z.lazy(() => SortOrderSchema).optional(),
  endrol: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SheetsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SheetsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SheetsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SheetsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SheetsSumOrderByAggregateInputSchema).optional()
}).strict();

export const SheetsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SheetsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SheetsScalarWhereWithAggregatesInputSchema),z.lazy(() => SheetsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SheetsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SheetsScalarWhereWithAggregatesInputSchema),z.lazy(() => SheetsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rows: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  cols: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  startrow: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  endrow: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  startrol: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  endrol: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CellmapCreateInputSchema: z.ZodType<Prisma.CellmapCreateInput> = z.object({
  id: z.string(),
  content: z.string().optional().nullable(),
  colmap: z.lazy(() => ColmapCreateNestedOneWithoutCellmapInputSchema),
  rowmap: z.lazy(() => RowmapCreateNestedOneWithoutCellmapInputSchema),
  sheets: z.lazy(() => SheetsCreateNestedOneWithoutCellmapInputSchema)
}).strict();

export const CellmapUncheckedCreateInputSchema: z.ZodType<Prisma.CellmapUncheckedCreateInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  row_id: z.string(),
  col_id: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const CellmapUpdateInputSchema: z.ZodType<Prisma.CellmapUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colmap: z.lazy(() => ColmapUpdateOneRequiredWithoutCellmapNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUpdateOneRequiredWithoutCellmapNestedInputSchema).optional(),
  sheets: z.lazy(() => SheetsUpdateOneRequiredWithoutCellmapNestedInputSchema).optional()
}).strict();

export const CellmapUncheckedUpdateInputSchema: z.ZodType<Prisma.CellmapUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  col_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CellmapCreateManyInputSchema: z.ZodType<Prisma.CellmapCreateManyInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  row_id: z.string(),
  col_id: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const CellmapUpdateManyMutationInputSchema: z.ZodType<Prisma.CellmapUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CellmapUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CellmapUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  col_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ColmapCreateInputSchema: z.ZodType<Prisma.ColmapCreateInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  cellmap: z.lazy(() => CellmapCreateNestedManyWithoutColmapInputSchema).optional(),
  sheets: z.lazy(() => SheetsCreateNestedOneWithoutColmapInputSchema)
}).strict();

export const ColmapUncheckedCreateInputSchema: z.ZodType<Prisma.ColmapUncheckedCreateInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  cellmap: z.lazy(() => CellmapUncheckedCreateNestedManyWithoutColmapInputSchema).optional()
}).strict();

export const ColmapUpdateInputSchema: z.ZodType<Prisma.ColmapUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cellmap: z.lazy(() => CellmapUpdateManyWithoutColmapNestedInputSchema).optional(),
  sheets: z.lazy(() => SheetsUpdateOneRequiredWithoutColmapNestedInputSchema).optional()
}).strict();

export const ColmapUncheckedUpdateInputSchema: z.ZodType<Prisma.ColmapUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cellmap: z.lazy(() => CellmapUncheckedUpdateManyWithoutColmapNestedInputSchema).optional()
}).strict();

export const ColmapCreateManyInputSchema: z.ZodType<Prisma.ColmapCreateManyInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  startmarker: z.string(),
  endmarker: z.string()
}).strict();

export const ColmapUpdateManyMutationInputSchema: z.ZodType<Prisma.ColmapUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ColmapUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ColmapUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RowmapCreateInputSchema: z.ZodType<Prisma.RowmapCreateInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  cellmap: z.lazy(() => CellmapCreateNestedManyWithoutRowmapInputSchema).optional(),
  sheets: z.lazy(() => SheetsCreateNestedOneWithoutRowmapInputSchema)
}).strict();

export const RowmapUncheckedCreateInputSchema: z.ZodType<Prisma.RowmapUncheckedCreateInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  cellmap: z.lazy(() => CellmapUncheckedCreateNestedManyWithoutRowmapInputSchema).optional()
}).strict();

export const RowmapUpdateInputSchema: z.ZodType<Prisma.RowmapUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cellmap: z.lazy(() => CellmapUpdateManyWithoutRowmapNestedInputSchema).optional(),
  sheets: z.lazy(() => SheetsUpdateOneRequiredWithoutRowmapNestedInputSchema).optional()
}).strict();

export const RowmapUncheckedUpdateInputSchema: z.ZodType<Prisma.RowmapUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cellmap: z.lazy(() => CellmapUncheckedUpdateManyWithoutRowmapNestedInputSchema).optional()
}).strict();

export const RowmapCreateManyInputSchema: z.ZodType<Prisma.RowmapCreateManyInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  startmarker: z.string(),
  endmarker: z.string()
}).strict();

export const RowmapUpdateManyMutationInputSchema: z.ZodType<Prisma.RowmapUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RowmapUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RowmapUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SheetsCreateInputSchema: z.ZodType<Prisma.SheetsCreateInput> = z.object({
  id: z.string(),
  rows: z.number().int().gte(-32768).lte(32767),
  cols: z.number().int().gte(-32768).lte(32767),
  startrow: z.string().optional().nullable(),
  endrow: z.string().optional().nullable(),
  startrol: z.string().optional().nullable(),
  endrol: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  title: z.string().optional().nullable(),
  cellmap: z.lazy(() => CellmapCreateNestedManyWithoutSheetsInputSchema).optional(),
  colmap: z.lazy(() => ColmapCreateNestedManyWithoutSheetsInputSchema).optional(),
  rowmap: z.lazy(() => RowmapCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsUncheckedCreateInputSchema: z.ZodType<Prisma.SheetsUncheckedCreateInput> = z.object({
  id: z.string(),
  rows: z.number().int().gte(-32768).lte(32767),
  cols: z.number().int().gte(-32768).lte(32767),
  startrow: z.string().optional().nullable(),
  endrow: z.string().optional().nullable(),
  startrol: z.string().optional().nullable(),
  endrol: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  title: z.string().optional().nullable(),
  cellmap: z.lazy(() => CellmapUncheckedCreateNestedManyWithoutSheetsInputSchema).optional(),
  colmap: z.lazy(() => ColmapUncheckedCreateNestedManyWithoutSheetsInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUncheckedCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsUpdateInputSchema: z.ZodType<Prisma.SheetsUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cellmap: z.lazy(() => CellmapUpdateManyWithoutSheetsNestedInputSchema).optional(),
  colmap: z.lazy(() => ColmapUpdateManyWithoutSheetsNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const SheetsUncheckedUpdateInputSchema: z.ZodType<Prisma.SheetsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cellmap: z.lazy(() => CellmapUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional(),
  colmap: z.lazy(() => ColmapUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const SheetsCreateManyInputSchema: z.ZodType<Prisma.SheetsCreateManyInput> = z.object({
  id: z.string(),
  rows: z.number().int().gte(-32768).lte(32767),
  cols: z.number().int().gte(-32768).lte(32767),
  startrow: z.string().optional().nullable(),
  endrow: z.string().optional().nullable(),
  startrol: z.string().optional().nullable(),
  endrol: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  title: z.string().optional().nullable()
}).strict();

export const SheetsUpdateManyMutationInputSchema: z.ZodType<Prisma.SheetsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SheetsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SheetsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ColmapRelationFilterSchema: z.ZodType<Prisma.ColmapRelationFilter> = z.object({
  is: z.lazy(() => ColmapWhereInputSchema).optional(),
  isNot: z.lazy(() => ColmapWhereInputSchema).optional()
}).strict();

export const RowmapRelationFilterSchema: z.ZodType<Prisma.RowmapRelationFilter> = z.object({
  is: z.lazy(() => RowmapWhereInputSchema).optional(),
  isNot: z.lazy(() => RowmapWhereInputSchema).optional()
}).strict();

export const SheetsRelationFilterSchema: z.ZodType<Prisma.SheetsRelationFilter> = z.object({
  is: z.lazy(() => SheetsWhereInputSchema).optional(),
  isNot: z.lazy(() => SheetsWhereInputSchema).optional()
}).strict();

export const CellmapCountOrderByAggregateInputSchema: z.ZodType<Prisma.CellmapCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row_id: z.lazy(() => SortOrderSchema).optional(),
  col_id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CellmapMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CellmapMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row_id: z.lazy(() => SortOrderSchema).optional(),
  col_id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CellmapMinOrderByAggregateInputSchema: z.ZodType<Prisma.CellmapMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row_id: z.lazy(() => SortOrderSchema).optional(),
  col_id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const CellmapListRelationFilterSchema: z.ZodType<Prisma.CellmapListRelationFilter> = z.object({
  every: z.lazy(() => CellmapWhereInputSchema).optional(),
  some: z.lazy(() => CellmapWhereInputSchema).optional(),
  none: z.lazy(() => CellmapWhereInputSchema).optional()
}).strict();

export const CellmapOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CellmapOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColmapCountOrderByAggregateInputSchema: z.ZodType<Prisma.ColmapCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColmapMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ColmapMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColmapMinOrderByAggregateInputSchema: z.ZodType<Prisma.ColmapMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RowmapCountOrderByAggregateInputSchema: z.ZodType<Prisma.RowmapCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RowmapMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RowmapMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RowmapMinOrderByAggregateInputSchema: z.ZodType<Prisma.RowmapMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  startmarker: z.lazy(() => SortOrderSchema).optional(),
  endmarker: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const ColmapListRelationFilterSchema: z.ZodType<Prisma.ColmapListRelationFilter> = z.object({
  every: z.lazy(() => ColmapWhereInputSchema).optional(),
  some: z.lazy(() => ColmapWhereInputSchema).optional(),
  none: z.lazy(() => ColmapWhereInputSchema).optional()
}).strict();

export const RowmapListRelationFilterSchema: z.ZodType<Prisma.RowmapListRelationFilter> = z.object({
  every: z.lazy(() => RowmapWhereInputSchema).optional(),
  some: z.lazy(() => RowmapWhereInputSchema).optional(),
  none: z.lazy(() => RowmapWhereInputSchema).optional()
}).strict();

export const ColmapOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ColmapOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RowmapOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RowmapOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsCountOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional(),
  startrow: z.lazy(() => SortOrderSchema).optional(),
  endrow: z.lazy(() => SortOrderSchema).optional(),
  startrol: z.lazy(() => SortOrderSchema).optional(),
  endrol: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsAvgOrderByAggregateInput> = z.object({
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional(),
  startrow: z.lazy(() => SortOrderSchema).optional(),
  endrow: z.lazy(() => SortOrderSchema).optional(),
  startrol: z.lazy(() => SortOrderSchema).optional(),
  endrol: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsMinOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional(),
  startrow: z.lazy(() => SortOrderSchema).optional(),
  endrow: z.lazy(() => SortOrderSchema).optional(),
  startrol: z.lazy(() => SortOrderSchema).optional(),
  endrol: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsSumOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsSumOrderByAggregateInput> = z.object({
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ColmapCreateNestedOneWithoutCellmapInputSchema: z.ZodType<Prisma.ColmapCreateNestedOneWithoutCellmapInput> = z.object({
  create: z.union([ z.lazy(() => ColmapCreateWithoutCellmapInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutCellmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColmapCreateOrConnectWithoutCellmapInputSchema).optional(),
  connect: z.lazy(() => ColmapWhereUniqueInputSchema).optional()
}).strict();

export const RowmapCreateNestedOneWithoutCellmapInputSchema: z.ZodType<Prisma.RowmapCreateNestedOneWithoutCellmapInput> = z.object({
  create: z.union([ z.lazy(() => RowmapCreateWithoutCellmapInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutCellmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RowmapCreateOrConnectWithoutCellmapInputSchema).optional(),
  connect: z.lazy(() => RowmapWhereUniqueInputSchema).optional()
}).strict();

export const SheetsCreateNestedOneWithoutCellmapInputSchema: z.ZodType<Prisma.SheetsCreateNestedOneWithoutCellmapInput> = z.object({
  create: z.union([ z.lazy(() => SheetsCreateWithoutCellmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutCellmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SheetsCreateOrConnectWithoutCellmapInputSchema).optional(),
  connect: z.lazy(() => SheetsWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const ColmapUpdateOneRequiredWithoutCellmapNestedInputSchema: z.ZodType<Prisma.ColmapUpdateOneRequiredWithoutCellmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColmapCreateWithoutCellmapInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutCellmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColmapCreateOrConnectWithoutCellmapInputSchema).optional(),
  upsert: z.lazy(() => ColmapUpsertWithoutCellmapInputSchema).optional(),
  connect: z.lazy(() => ColmapWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ColmapUpdateWithoutCellmapInputSchema),z.lazy(() => ColmapUncheckedUpdateWithoutCellmapInputSchema) ]).optional(),
}).strict();

export const RowmapUpdateOneRequiredWithoutCellmapNestedInputSchema: z.ZodType<Prisma.RowmapUpdateOneRequiredWithoutCellmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => RowmapCreateWithoutCellmapInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutCellmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RowmapCreateOrConnectWithoutCellmapInputSchema).optional(),
  upsert: z.lazy(() => RowmapUpsertWithoutCellmapInputSchema).optional(),
  connect: z.lazy(() => RowmapWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RowmapUpdateWithoutCellmapInputSchema),z.lazy(() => RowmapUncheckedUpdateWithoutCellmapInputSchema) ]).optional(),
}).strict();

export const SheetsUpdateOneRequiredWithoutCellmapNestedInputSchema: z.ZodType<Prisma.SheetsUpdateOneRequiredWithoutCellmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => SheetsCreateWithoutCellmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutCellmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SheetsCreateOrConnectWithoutCellmapInputSchema).optional(),
  upsert: z.lazy(() => SheetsUpsertWithoutCellmapInputSchema).optional(),
  connect: z.lazy(() => SheetsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SheetsUpdateWithoutCellmapInputSchema),z.lazy(() => SheetsUncheckedUpdateWithoutCellmapInputSchema) ]).optional(),
}).strict();

export const CellmapCreateNestedManyWithoutColmapInputSchema: z.ZodType<Prisma.CellmapCreateNestedManyWithoutColmapInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutColmapInputSchema),z.lazy(() => CellmapCreateWithoutColmapInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutColmapInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutColmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManyColmapInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SheetsCreateNestedOneWithoutColmapInputSchema: z.ZodType<Prisma.SheetsCreateNestedOneWithoutColmapInput> = z.object({
  create: z.union([ z.lazy(() => SheetsCreateWithoutColmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutColmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SheetsCreateOrConnectWithoutColmapInputSchema).optional(),
  connect: z.lazy(() => SheetsWhereUniqueInputSchema).optional()
}).strict();

export const CellmapUncheckedCreateNestedManyWithoutColmapInputSchema: z.ZodType<Prisma.CellmapUncheckedCreateNestedManyWithoutColmapInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutColmapInputSchema),z.lazy(() => CellmapCreateWithoutColmapInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutColmapInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutColmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManyColmapInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CellmapUpdateManyWithoutColmapNestedInputSchema: z.ZodType<Prisma.CellmapUpdateManyWithoutColmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutColmapInputSchema),z.lazy(() => CellmapCreateWithoutColmapInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutColmapInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutColmapInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CellmapUpsertWithWhereUniqueWithoutColmapInputSchema),z.lazy(() => CellmapUpsertWithWhereUniqueWithoutColmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManyColmapInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CellmapUpdateWithWhereUniqueWithoutColmapInputSchema),z.lazy(() => CellmapUpdateWithWhereUniqueWithoutColmapInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CellmapUpdateManyWithWhereWithoutColmapInputSchema),z.lazy(() => CellmapUpdateManyWithWhereWithoutColmapInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CellmapScalarWhereInputSchema),z.lazy(() => CellmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SheetsUpdateOneRequiredWithoutColmapNestedInputSchema: z.ZodType<Prisma.SheetsUpdateOneRequiredWithoutColmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => SheetsCreateWithoutColmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutColmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SheetsCreateOrConnectWithoutColmapInputSchema).optional(),
  upsert: z.lazy(() => SheetsUpsertWithoutColmapInputSchema).optional(),
  connect: z.lazy(() => SheetsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SheetsUpdateWithoutColmapInputSchema),z.lazy(() => SheetsUncheckedUpdateWithoutColmapInputSchema) ]).optional(),
}).strict();

export const CellmapUncheckedUpdateManyWithoutColmapNestedInputSchema: z.ZodType<Prisma.CellmapUncheckedUpdateManyWithoutColmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutColmapInputSchema),z.lazy(() => CellmapCreateWithoutColmapInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutColmapInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutColmapInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CellmapUpsertWithWhereUniqueWithoutColmapInputSchema),z.lazy(() => CellmapUpsertWithWhereUniqueWithoutColmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManyColmapInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CellmapUpdateWithWhereUniqueWithoutColmapInputSchema),z.lazy(() => CellmapUpdateWithWhereUniqueWithoutColmapInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CellmapUpdateManyWithWhereWithoutColmapInputSchema),z.lazy(() => CellmapUpdateManyWithWhereWithoutColmapInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CellmapScalarWhereInputSchema),z.lazy(() => CellmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CellmapCreateNestedManyWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapCreateNestedManyWithoutRowmapInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutRowmapInputSchema),z.lazy(() => CellmapCreateWithoutRowmapInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutRowmapInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutRowmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManyRowmapInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SheetsCreateNestedOneWithoutRowmapInputSchema: z.ZodType<Prisma.SheetsCreateNestedOneWithoutRowmapInput> = z.object({
  create: z.union([ z.lazy(() => SheetsCreateWithoutRowmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutRowmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SheetsCreateOrConnectWithoutRowmapInputSchema).optional(),
  connect: z.lazy(() => SheetsWhereUniqueInputSchema).optional()
}).strict();

export const CellmapUncheckedCreateNestedManyWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapUncheckedCreateNestedManyWithoutRowmapInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutRowmapInputSchema),z.lazy(() => CellmapCreateWithoutRowmapInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutRowmapInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutRowmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManyRowmapInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CellmapUpdateManyWithoutRowmapNestedInputSchema: z.ZodType<Prisma.CellmapUpdateManyWithoutRowmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutRowmapInputSchema),z.lazy(() => CellmapCreateWithoutRowmapInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutRowmapInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutRowmapInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CellmapUpsertWithWhereUniqueWithoutRowmapInputSchema),z.lazy(() => CellmapUpsertWithWhereUniqueWithoutRowmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManyRowmapInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CellmapUpdateWithWhereUniqueWithoutRowmapInputSchema),z.lazy(() => CellmapUpdateWithWhereUniqueWithoutRowmapInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CellmapUpdateManyWithWhereWithoutRowmapInputSchema),z.lazy(() => CellmapUpdateManyWithWhereWithoutRowmapInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CellmapScalarWhereInputSchema),z.lazy(() => CellmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SheetsUpdateOneRequiredWithoutRowmapNestedInputSchema: z.ZodType<Prisma.SheetsUpdateOneRequiredWithoutRowmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => SheetsCreateWithoutRowmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutRowmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SheetsCreateOrConnectWithoutRowmapInputSchema).optional(),
  upsert: z.lazy(() => SheetsUpsertWithoutRowmapInputSchema).optional(),
  connect: z.lazy(() => SheetsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SheetsUpdateWithoutRowmapInputSchema),z.lazy(() => SheetsUncheckedUpdateWithoutRowmapInputSchema) ]).optional(),
}).strict();

export const CellmapUncheckedUpdateManyWithoutRowmapNestedInputSchema: z.ZodType<Prisma.CellmapUncheckedUpdateManyWithoutRowmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutRowmapInputSchema),z.lazy(() => CellmapCreateWithoutRowmapInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutRowmapInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutRowmapInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CellmapUpsertWithWhereUniqueWithoutRowmapInputSchema),z.lazy(() => CellmapUpsertWithWhereUniqueWithoutRowmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManyRowmapInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CellmapUpdateWithWhereUniqueWithoutRowmapInputSchema),z.lazy(() => CellmapUpdateWithWhereUniqueWithoutRowmapInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CellmapUpdateManyWithWhereWithoutRowmapInputSchema),z.lazy(() => CellmapUpdateManyWithWhereWithoutRowmapInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CellmapScalarWhereInputSchema),z.lazy(() => CellmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CellmapCreateNestedManyWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapCreateNestedManyWithoutSheetsInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutSheetsInputSchema),z.lazy(() => CellmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManySheetsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ColmapCreateNestedManyWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapCreateNestedManyWithoutSheetsInput> = z.object({
  create: z.union([ z.lazy(() => ColmapCreateWithoutSheetsInputSchema),z.lazy(() => ColmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => ColmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ColmapCreateManySheetsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RowmapCreateNestedManyWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapCreateNestedManyWithoutSheetsInput> = z.object({
  create: z.union([ z.lazy(() => RowmapCreateWithoutSheetsInputSchema),z.lazy(() => RowmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RowmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => RowmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RowmapCreateManySheetsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CellmapUncheckedCreateNestedManyWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapUncheckedCreateNestedManyWithoutSheetsInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutSheetsInputSchema),z.lazy(() => CellmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManySheetsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ColmapUncheckedCreateNestedManyWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapUncheckedCreateNestedManyWithoutSheetsInput> = z.object({
  create: z.union([ z.lazy(() => ColmapCreateWithoutSheetsInputSchema),z.lazy(() => ColmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => ColmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ColmapCreateManySheetsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RowmapUncheckedCreateNestedManyWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapUncheckedCreateNestedManyWithoutSheetsInput> = z.object({
  create: z.union([ z.lazy(() => RowmapCreateWithoutSheetsInputSchema),z.lazy(() => RowmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RowmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => RowmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RowmapCreateManySheetsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const CellmapUpdateManyWithoutSheetsNestedInputSchema: z.ZodType<Prisma.CellmapUpdateManyWithoutSheetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutSheetsInputSchema),z.lazy(() => CellmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CellmapUpsertWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => CellmapUpsertWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManySheetsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CellmapUpdateWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => CellmapUpdateWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CellmapUpdateManyWithWhereWithoutSheetsInputSchema),z.lazy(() => CellmapUpdateManyWithWhereWithoutSheetsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CellmapScalarWhereInputSchema),z.lazy(() => CellmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ColmapUpdateManyWithoutSheetsNestedInputSchema: z.ZodType<Prisma.ColmapUpdateManyWithoutSheetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColmapCreateWithoutSheetsInputSchema),z.lazy(() => ColmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => ColmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ColmapUpsertWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => ColmapUpsertWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ColmapCreateManySheetsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ColmapUpdateWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => ColmapUpdateWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ColmapUpdateManyWithWhereWithoutSheetsInputSchema),z.lazy(() => ColmapUpdateManyWithWhereWithoutSheetsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ColmapScalarWhereInputSchema),z.lazy(() => ColmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RowmapUpdateManyWithoutSheetsNestedInputSchema: z.ZodType<Prisma.RowmapUpdateManyWithoutSheetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RowmapCreateWithoutSheetsInputSchema),z.lazy(() => RowmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RowmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => RowmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RowmapUpsertWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => RowmapUpsertWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RowmapCreateManySheetsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RowmapUpdateWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => RowmapUpdateWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RowmapUpdateManyWithWhereWithoutSheetsInputSchema),z.lazy(() => RowmapUpdateManyWithWhereWithoutSheetsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RowmapScalarWhereInputSchema),z.lazy(() => RowmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CellmapUncheckedUpdateManyWithoutSheetsNestedInputSchema: z.ZodType<Prisma.CellmapUncheckedUpdateManyWithoutSheetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CellmapCreateWithoutSheetsInputSchema),z.lazy(() => CellmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CellmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => CellmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CellmapUpsertWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => CellmapUpsertWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CellmapCreateManySheetsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CellmapWhereUniqueInputSchema),z.lazy(() => CellmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CellmapUpdateWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => CellmapUpdateWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CellmapUpdateManyWithWhereWithoutSheetsInputSchema),z.lazy(() => CellmapUpdateManyWithWhereWithoutSheetsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CellmapScalarWhereInputSchema),z.lazy(() => CellmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ColmapUncheckedUpdateManyWithoutSheetsNestedInputSchema: z.ZodType<Prisma.ColmapUncheckedUpdateManyWithoutSheetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColmapCreateWithoutSheetsInputSchema),z.lazy(() => ColmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => ColmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ColmapUpsertWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => ColmapUpsertWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ColmapCreateManySheetsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColmapWhereUniqueInputSchema),z.lazy(() => ColmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ColmapUpdateWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => ColmapUpdateWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ColmapUpdateManyWithWhereWithoutSheetsInputSchema),z.lazy(() => ColmapUpdateManyWithWhereWithoutSheetsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ColmapScalarWhereInputSchema),z.lazy(() => ColmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RowmapUncheckedUpdateManyWithoutSheetsNestedInputSchema: z.ZodType<Prisma.RowmapUncheckedUpdateManyWithoutSheetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RowmapCreateWithoutSheetsInputSchema),z.lazy(() => RowmapCreateWithoutSheetsInputSchema).array(),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RowmapCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => RowmapCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RowmapUpsertWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => RowmapUpsertWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RowmapCreateManySheetsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RowmapWhereUniqueInputSchema),z.lazy(() => RowmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RowmapUpdateWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => RowmapUpdateWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RowmapUpdateManyWithWhereWithoutSheetsInputSchema),z.lazy(() => RowmapUpdateManyWithWhereWithoutSheetsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RowmapScalarWhereInputSchema),z.lazy(() => RowmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ColmapCreateWithoutCellmapInputSchema: z.ZodType<Prisma.ColmapCreateWithoutCellmapInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  sheets: z.lazy(() => SheetsCreateNestedOneWithoutColmapInputSchema)
}).strict();

export const ColmapUncheckedCreateWithoutCellmapInputSchema: z.ZodType<Prisma.ColmapUncheckedCreateWithoutCellmapInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  startmarker: z.string(),
  endmarker: z.string()
}).strict();

export const ColmapCreateOrConnectWithoutCellmapInputSchema: z.ZodType<Prisma.ColmapCreateOrConnectWithoutCellmapInput> = z.object({
  where: z.lazy(() => ColmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ColmapCreateWithoutCellmapInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutCellmapInputSchema) ]),
}).strict();

export const RowmapCreateWithoutCellmapInputSchema: z.ZodType<Prisma.RowmapCreateWithoutCellmapInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  sheets: z.lazy(() => SheetsCreateNestedOneWithoutRowmapInputSchema)
}).strict();

export const RowmapUncheckedCreateWithoutCellmapInputSchema: z.ZodType<Prisma.RowmapUncheckedCreateWithoutCellmapInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  startmarker: z.string(),
  endmarker: z.string()
}).strict();

export const RowmapCreateOrConnectWithoutCellmapInputSchema: z.ZodType<Prisma.RowmapCreateOrConnectWithoutCellmapInput> = z.object({
  where: z.lazy(() => RowmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RowmapCreateWithoutCellmapInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutCellmapInputSchema) ]),
}).strict();

export const SheetsCreateWithoutCellmapInputSchema: z.ZodType<Prisma.SheetsCreateWithoutCellmapInput> = z.object({
  id: z.string(),
  rows: z.number(),
  cols: z.number(),
  startrow: z.string().optional().nullable(),
  endrow: z.string().optional().nullable(),
  startrol: z.string().optional().nullable(),
  endrol: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  title: z.string().optional().nullable(),
  colmap: z.lazy(() => ColmapCreateNestedManyWithoutSheetsInputSchema).optional(),
  rowmap: z.lazy(() => RowmapCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsUncheckedCreateWithoutCellmapInputSchema: z.ZodType<Prisma.SheetsUncheckedCreateWithoutCellmapInput> = z.object({
  id: z.string(),
  rows: z.number(),
  cols: z.number(),
  startrow: z.string().optional().nullable(),
  endrow: z.string().optional().nullable(),
  startrol: z.string().optional().nullable(),
  endrol: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  title: z.string().optional().nullable(),
  colmap: z.lazy(() => ColmapUncheckedCreateNestedManyWithoutSheetsInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUncheckedCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsCreateOrConnectWithoutCellmapInputSchema: z.ZodType<Prisma.SheetsCreateOrConnectWithoutCellmapInput> = z.object({
  where: z.lazy(() => SheetsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SheetsCreateWithoutCellmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutCellmapInputSchema) ]),
}).strict();

export const ColmapUpsertWithoutCellmapInputSchema: z.ZodType<Prisma.ColmapUpsertWithoutCellmapInput> = z.object({
  update: z.union([ z.lazy(() => ColmapUpdateWithoutCellmapInputSchema),z.lazy(() => ColmapUncheckedUpdateWithoutCellmapInputSchema) ]),
  create: z.union([ z.lazy(() => ColmapCreateWithoutCellmapInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutCellmapInputSchema) ]),
}).strict();

export const ColmapUpdateWithoutCellmapInputSchema: z.ZodType<Prisma.ColmapUpdateWithoutCellmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheets: z.lazy(() => SheetsUpdateOneRequiredWithoutColmapNestedInputSchema).optional()
}).strict();

export const ColmapUncheckedUpdateWithoutCellmapInputSchema: z.ZodType<Prisma.ColmapUncheckedUpdateWithoutCellmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RowmapUpsertWithoutCellmapInputSchema: z.ZodType<Prisma.RowmapUpsertWithoutCellmapInput> = z.object({
  update: z.union([ z.lazy(() => RowmapUpdateWithoutCellmapInputSchema),z.lazy(() => RowmapUncheckedUpdateWithoutCellmapInputSchema) ]),
  create: z.union([ z.lazy(() => RowmapCreateWithoutCellmapInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutCellmapInputSchema) ]),
}).strict();

export const RowmapUpdateWithoutCellmapInputSchema: z.ZodType<Prisma.RowmapUpdateWithoutCellmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheets: z.lazy(() => SheetsUpdateOneRequiredWithoutRowmapNestedInputSchema).optional()
}).strict();

export const RowmapUncheckedUpdateWithoutCellmapInputSchema: z.ZodType<Prisma.RowmapUncheckedUpdateWithoutCellmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SheetsUpsertWithoutCellmapInputSchema: z.ZodType<Prisma.SheetsUpsertWithoutCellmapInput> = z.object({
  update: z.union([ z.lazy(() => SheetsUpdateWithoutCellmapInputSchema),z.lazy(() => SheetsUncheckedUpdateWithoutCellmapInputSchema) ]),
  create: z.union([ z.lazy(() => SheetsCreateWithoutCellmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutCellmapInputSchema) ]),
}).strict();

export const SheetsUpdateWithoutCellmapInputSchema: z.ZodType<Prisma.SheetsUpdateWithoutCellmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colmap: z.lazy(() => ColmapUpdateManyWithoutSheetsNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const SheetsUncheckedUpdateWithoutCellmapInputSchema: z.ZodType<Prisma.SheetsUncheckedUpdateWithoutCellmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colmap: z.lazy(() => ColmapUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const CellmapCreateWithoutColmapInputSchema: z.ZodType<Prisma.CellmapCreateWithoutColmapInput> = z.object({
  id: z.string(),
  content: z.string().optional().nullable(),
  rowmap: z.lazy(() => RowmapCreateNestedOneWithoutCellmapInputSchema),
  sheets: z.lazy(() => SheetsCreateNestedOneWithoutCellmapInputSchema)
}).strict();

export const CellmapUncheckedCreateWithoutColmapInputSchema: z.ZodType<Prisma.CellmapUncheckedCreateWithoutColmapInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  row_id: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const CellmapCreateOrConnectWithoutColmapInputSchema: z.ZodType<Prisma.CellmapCreateOrConnectWithoutColmapInput> = z.object({
  where: z.lazy(() => CellmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CellmapCreateWithoutColmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema) ]),
}).strict();

export const CellmapCreateManyColmapInputEnvelopeSchema: z.ZodType<Prisma.CellmapCreateManyColmapInputEnvelope> = z.object({
  data: z.lazy(() => CellmapCreateManyColmapInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SheetsCreateWithoutColmapInputSchema: z.ZodType<Prisma.SheetsCreateWithoutColmapInput> = z.object({
  id: z.string(),
  rows: z.number(),
  cols: z.number(),
  startrow: z.string().optional().nullable(),
  endrow: z.string().optional().nullable(),
  startrol: z.string().optional().nullable(),
  endrol: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  title: z.string().optional().nullable(),
  cellmap: z.lazy(() => CellmapCreateNestedManyWithoutSheetsInputSchema).optional(),
  rowmap: z.lazy(() => RowmapCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsUncheckedCreateWithoutColmapInputSchema: z.ZodType<Prisma.SheetsUncheckedCreateWithoutColmapInput> = z.object({
  id: z.string(),
  rows: z.number(),
  cols: z.number(),
  startrow: z.string().optional().nullable(),
  endrow: z.string().optional().nullable(),
  startrol: z.string().optional().nullable(),
  endrol: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  title: z.string().optional().nullable(),
  cellmap: z.lazy(() => CellmapUncheckedCreateNestedManyWithoutSheetsInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUncheckedCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsCreateOrConnectWithoutColmapInputSchema: z.ZodType<Prisma.SheetsCreateOrConnectWithoutColmapInput> = z.object({
  where: z.lazy(() => SheetsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SheetsCreateWithoutColmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutColmapInputSchema) ]),
}).strict();

export const CellmapUpsertWithWhereUniqueWithoutColmapInputSchema: z.ZodType<Prisma.CellmapUpsertWithWhereUniqueWithoutColmapInput> = z.object({
  where: z.lazy(() => CellmapWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CellmapUpdateWithoutColmapInputSchema),z.lazy(() => CellmapUncheckedUpdateWithoutColmapInputSchema) ]),
  create: z.union([ z.lazy(() => CellmapCreateWithoutColmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutColmapInputSchema) ]),
}).strict();

export const CellmapUpdateWithWhereUniqueWithoutColmapInputSchema: z.ZodType<Prisma.CellmapUpdateWithWhereUniqueWithoutColmapInput> = z.object({
  where: z.lazy(() => CellmapWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CellmapUpdateWithoutColmapInputSchema),z.lazy(() => CellmapUncheckedUpdateWithoutColmapInputSchema) ]),
}).strict();

export const CellmapUpdateManyWithWhereWithoutColmapInputSchema: z.ZodType<Prisma.CellmapUpdateManyWithWhereWithoutColmapInput> = z.object({
  where: z.lazy(() => CellmapScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CellmapUpdateManyMutationInputSchema),z.lazy(() => CellmapUncheckedUpdateManyWithoutCellmapInputSchema) ]),
}).strict();

export const CellmapScalarWhereInputSchema: z.ZodType<Prisma.CellmapScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CellmapScalarWhereInputSchema),z.lazy(() => CellmapScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CellmapScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CellmapScalarWhereInputSchema),z.lazy(() => CellmapScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  row_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  col_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SheetsUpsertWithoutColmapInputSchema: z.ZodType<Prisma.SheetsUpsertWithoutColmapInput> = z.object({
  update: z.union([ z.lazy(() => SheetsUpdateWithoutColmapInputSchema),z.lazy(() => SheetsUncheckedUpdateWithoutColmapInputSchema) ]),
  create: z.union([ z.lazy(() => SheetsCreateWithoutColmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutColmapInputSchema) ]),
}).strict();

export const SheetsUpdateWithoutColmapInputSchema: z.ZodType<Prisma.SheetsUpdateWithoutColmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cellmap: z.lazy(() => CellmapUpdateManyWithoutSheetsNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const SheetsUncheckedUpdateWithoutColmapInputSchema: z.ZodType<Prisma.SheetsUncheckedUpdateWithoutColmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cellmap: z.lazy(() => CellmapUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const CellmapCreateWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapCreateWithoutRowmapInput> = z.object({
  id: z.string(),
  content: z.string().optional().nullable(),
  colmap: z.lazy(() => ColmapCreateNestedOneWithoutCellmapInputSchema),
  sheets: z.lazy(() => SheetsCreateNestedOneWithoutCellmapInputSchema)
}).strict();

export const CellmapUncheckedCreateWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapUncheckedCreateWithoutRowmapInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  col_id: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const CellmapCreateOrConnectWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapCreateOrConnectWithoutRowmapInput> = z.object({
  where: z.lazy(() => CellmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CellmapCreateWithoutRowmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema) ]),
}).strict();

export const CellmapCreateManyRowmapInputEnvelopeSchema: z.ZodType<Prisma.CellmapCreateManyRowmapInputEnvelope> = z.object({
  data: z.lazy(() => CellmapCreateManyRowmapInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SheetsCreateWithoutRowmapInputSchema: z.ZodType<Prisma.SheetsCreateWithoutRowmapInput> = z.object({
  id: z.string(),
  rows: z.number(),
  cols: z.number(),
  startrow: z.string().optional().nullable(),
  endrow: z.string().optional().nullable(),
  startrol: z.string().optional().nullable(),
  endrol: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  title: z.string().optional().nullable(),
  cellmap: z.lazy(() => CellmapCreateNestedManyWithoutSheetsInputSchema).optional(),
  colmap: z.lazy(() => ColmapCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsUncheckedCreateWithoutRowmapInputSchema: z.ZodType<Prisma.SheetsUncheckedCreateWithoutRowmapInput> = z.object({
  id: z.string(),
  rows: z.number(),
  cols: z.number(),
  startrow: z.string().optional().nullable(),
  endrow: z.string().optional().nullable(),
  startrol: z.string().optional().nullable(),
  endrol: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  title: z.string().optional().nullable(),
  cellmap: z.lazy(() => CellmapUncheckedCreateNestedManyWithoutSheetsInputSchema).optional(),
  colmap: z.lazy(() => ColmapUncheckedCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsCreateOrConnectWithoutRowmapInputSchema: z.ZodType<Prisma.SheetsCreateOrConnectWithoutRowmapInput> = z.object({
  where: z.lazy(() => SheetsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SheetsCreateWithoutRowmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutRowmapInputSchema) ]),
}).strict();

export const CellmapUpsertWithWhereUniqueWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapUpsertWithWhereUniqueWithoutRowmapInput> = z.object({
  where: z.lazy(() => CellmapWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CellmapUpdateWithoutRowmapInputSchema),z.lazy(() => CellmapUncheckedUpdateWithoutRowmapInputSchema) ]),
  create: z.union([ z.lazy(() => CellmapCreateWithoutRowmapInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutRowmapInputSchema) ]),
}).strict();

export const CellmapUpdateWithWhereUniqueWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapUpdateWithWhereUniqueWithoutRowmapInput> = z.object({
  where: z.lazy(() => CellmapWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CellmapUpdateWithoutRowmapInputSchema),z.lazy(() => CellmapUncheckedUpdateWithoutRowmapInputSchema) ]),
}).strict();

export const CellmapUpdateManyWithWhereWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapUpdateManyWithWhereWithoutRowmapInput> = z.object({
  where: z.lazy(() => CellmapScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CellmapUpdateManyMutationInputSchema),z.lazy(() => CellmapUncheckedUpdateManyWithoutCellmapInputSchema) ]),
}).strict();

export const SheetsUpsertWithoutRowmapInputSchema: z.ZodType<Prisma.SheetsUpsertWithoutRowmapInput> = z.object({
  update: z.union([ z.lazy(() => SheetsUpdateWithoutRowmapInputSchema),z.lazy(() => SheetsUncheckedUpdateWithoutRowmapInputSchema) ]),
  create: z.union([ z.lazy(() => SheetsCreateWithoutRowmapInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutRowmapInputSchema) ]),
}).strict();

export const SheetsUpdateWithoutRowmapInputSchema: z.ZodType<Prisma.SheetsUpdateWithoutRowmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cellmap: z.lazy(() => CellmapUpdateManyWithoutSheetsNestedInputSchema).optional(),
  colmap: z.lazy(() => ColmapUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const SheetsUncheckedUpdateWithoutRowmapInputSchema: z.ZodType<Prisma.SheetsUncheckedUpdateWithoutRowmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrow: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endrol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cellmap: z.lazy(() => CellmapUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional(),
  colmap: z.lazy(() => ColmapUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const CellmapCreateWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapCreateWithoutSheetsInput> = z.object({
  id: z.string(),
  content: z.string().optional().nullable(),
  colmap: z.lazy(() => ColmapCreateNestedOneWithoutCellmapInputSchema),
  rowmap: z.lazy(() => RowmapCreateNestedOneWithoutCellmapInputSchema)
}).strict();

export const CellmapUncheckedCreateWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapUncheckedCreateWithoutSheetsInput> = z.object({
  id: z.string(),
  row_id: z.string(),
  col_id: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const CellmapCreateOrConnectWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapCreateOrConnectWithoutSheetsInput> = z.object({
  where: z.lazy(() => CellmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CellmapCreateWithoutSheetsInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema) ]),
}).strict();

export const CellmapCreateManySheetsInputEnvelopeSchema: z.ZodType<Prisma.CellmapCreateManySheetsInputEnvelope> = z.object({
  data: z.lazy(() => CellmapCreateManySheetsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ColmapCreateWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapCreateWithoutSheetsInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  cellmap: z.lazy(() => CellmapCreateNestedManyWithoutColmapInputSchema).optional()
}).strict();

export const ColmapUncheckedCreateWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapUncheckedCreateWithoutSheetsInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  cellmap: z.lazy(() => CellmapUncheckedCreateNestedManyWithoutColmapInputSchema).optional()
}).strict();

export const ColmapCreateOrConnectWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapCreateOrConnectWithoutSheetsInput> = z.object({
  where: z.lazy(() => ColmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ColmapCreateWithoutSheetsInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema) ]),
}).strict();

export const ColmapCreateManySheetsInputEnvelopeSchema: z.ZodType<Prisma.ColmapCreateManySheetsInputEnvelope> = z.object({
  data: z.lazy(() => ColmapCreateManySheetsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RowmapCreateWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapCreateWithoutSheetsInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  cellmap: z.lazy(() => CellmapCreateNestedManyWithoutRowmapInputSchema).optional()
}).strict();

export const RowmapUncheckedCreateWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapUncheckedCreateWithoutSheetsInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string(),
  cellmap: z.lazy(() => CellmapUncheckedCreateNestedManyWithoutRowmapInputSchema).optional()
}).strict();

export const RowmapCreateOrConnectWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapCreateOrConnectWithoutSheetsInput> = z.object({
  where: z.lazy(() => RowmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RowmapCreateWithoutSheetsInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema) ]),
}).strict();

export const RowmapCreateManySheetsInputEnvelopeSchema: z.ZodType<Prisma.RowmapCreateManySheetsInputEnvelope> = z.object({
  data: z.lazy(() => RowmapCreateManySheetsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CellmapUpsertWithWhereUniqueWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapUpsertWithWhereUniqueWithoutSheetsInput> = z.object({
  where: z.lazy(() => CellmapWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CellmapUpdateWithoutSheetsInputSchema),z.lazy(() => CellmapUncheckedUpdateWithoutSheetsInputSchema) ]),
  create: z.union([ z.lazy(() => CellmapCreateWithoutSheetsInputSchema),z.lazy(() => CellmapUncheckedCreateWithoutSheetsInputSchema) ]),
}).strict();

export const CellmapUpdateWithWhereUniqueWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapUpdateWithWhereUniqueWithoutSheetsInput> = z.object({
  where: z.lazy(() => CellmapWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CellmapUpdateWithoutSheetsInputSchema),z.lazy(() => CellmapUncheckedUpdateWithoutSheetsInputSchema) ]),
}).strict();

export const CellmapUpdateManyWithWhereWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapUpdateManyWithWhereWithoutSheetsInput> = z.object({
  where: z.lazy(() => CellmapScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CellmapUpdateManyMutationInputSchema),z.lazy(() => CellmapUncheckedUpdateManyWithoutCellmapInputSchema) ]),
}).strict();

export const ColmapUpsertWithWhereUniqueWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapUpsertWithWhereUniqueWithoutSheetsInput> = z.object({
  where: z.lazy(() => ColmapWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ColmapUpdateWithoutSheetsInputSchema),z.lazy(() => ColmapUncheckedUpdateWithoutSheetsInputSchema) ]),
  create: z.union([ z.lazy(() => ColmapCreateWithoutSheetsInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutSheetsInputSchema) ]),
}).strict();

export const ColmapUpdateWithWhereUniqueWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapUpdateWithWhereUniqueWithoutSheetsInput> = z.object({
  where: z.lazy(() => ColmapWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ColmapUpdateWithoutSheetsInputSchema),z.lazy(() => ColmapUncheckedUpdateWithoutSheetsInputSchema) ]),
}).strict();

export const ColmapUpdateManyWithWhereWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapUpdateManyWithWhereWithoutSheetsInput> = z.object({
  where: z.lazy(() => ColmapScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ColmapUpdateManyMutationInputSchema),z.lazy(() => ColmapUncheckedUpdateManyWithoutColmapInputSchema) ]),
}).strict();

export const ColmapScalarWhereInputSchema: z.ZodType<Prisma.ColmapScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ColmapScalarWhereInputSchema),z.lazy(() => ColmapScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColmapScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColmapScalarWhereInputSchema),z.lazy(() => ColmapScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startmarker: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endmarker: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const RowmapUpsertWithWhereUniqueWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapUpsertWithWhereUniqueWithoutSheetsInput> = z.object({
  where: z.lazy(() => RowmapWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RowmapUpdateWithoutSheetsInputSchema),z.lazy(() => RowmapUncheckedUpdateWithoutSheetsInputSchema) ]),
  create: z.union([ z.lazy(() => RowmapCreateWithoutSheetsInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutSheetsInputSchema) ]),
}).strict();

export const RowmapUpdateWithWhereUniqueWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapUpdateWithWhereUniqueWithoutSheetsInput> = z.object({
  where: z.lazy(() => RowmapWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RowmapUpdateWithoutSheetsInputSchema),z.lazy(() => RowmapUncheckedUpdateWithoutSheetsInputSchema) ]),
}).strict();

export const RowmapUpdateManyWithWhereWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapUpdateManyWithWhereWithoutSheetsInput> = z.object({
  where: z.lazy(() => RowmapScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RowmapUpdateManyMutationInputSchema),z.lazy(() => RowmapUncheckedUpdateManyWithoutRowmapInputSchema) ]),
}).strict();

export const RowmapScalarWhereInputSchema: z.ZodType<Prisma.RowmapScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RowmapScalarWhereInputSchema),z.lazy(() => RowmapScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RowmapScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RowmapScalarWhereInputSchema),z.lazy(() => RowmapScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startmarker: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endmarker: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const CellmapCreateManyColmapInputSchema: z.ZodType<Prisma.CellmapCreateManyColmapInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  row_id: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const CellmapUpdateWithoutColmapInputSchema: z.ZodType<Prisma.CellmapUpdateWithoutColmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rowmap: z.lazy(() => RowmapUpdateOneRequiredWithoutCellmapNestedInputSchema).optional(),
  sheets: z.lazy(() => SheetsUpdateOneRequiredWithoutCellmapNestedInputSchema).optional()
}).strict();

export const CellmapUncheckedUpdateWithoutColmapInputSchema: z.ZodType<Prisma.CellmapUncheckedUpdateWithoutColmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CellmapUncheckedUpdateManyWithoutCellmapInputSchema: z.ZodType<Prisma.CellmapUncheckedUpdateManyWithoutCellmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CellmapCreateManyRowmapInputSchema: z.ZodType<Prisma.CellmapCreateManyRowmapInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  col_id: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const CellmapUpdateWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapUpdateWithoutRowmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colmap: z.lazy(() => ColmapUpdateOneRequiredWithoutCellmapNestedInputSchema).optional(),
  sheets: z.lazy(() => SheetsUpdateOneRequiredWithoutCellmapNestedInputSchema).optional()
}).strict();

export const CellmapUncheckedUpdateWithoutRowmapInputSchema: z.ZodType<Prisma.CellmapUncheckedUpdateWithoutRowmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  col_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CellmapCreateManySheetsInputSchema: z.ZodType<Prisma.CellmapCreateManySheetsInput> = z.object({
  id: z.string(),
  row_id: z.string(),
  col_id: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const ColmapCreateManySheetsInputSchema: z.ZodType<Prisma.ColmapCreateManySheetsInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string()
}).strict();

export const RowmapCreateManySheetsInputSchema: z.ZodType<Prisma.RowmapCreateManySheetsInput> = z.object({
  id: z.string(),
  startmarker: z.string(),
  endmarker: z.string()
}).strict();

export const CellmapUpdateWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapUpdateWithoutSheetsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colmap: z.lazy(() => ColmapUpdateOneRequiredWithoutCellmapNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUpdateOneRequiredWithoutCellmapNestedInputSchema).optional()
}).strict();

export const CellmapUncheckedUpdateWithoutSheetsInputSchema: z.ZodType<Prisma.CellmapUncheckedUpdateWithoutSheetsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  col_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ColmapUpdateWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapUpdateWithoutSheetsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cellmap: z.lazy(() => CellmapUpdateManyWithoutColmapNestedInputSchema).optional()
}).strict();

export const ColmapUncheckedUpdateWithoutSheetsInputSchema: z.ZodType<Prisma.ColmapUncheckedUpdateWithoutSheetsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cellmap: z.lazy(() => CellmapUncheckedUpdateManyWithoutColmapNestedInputSchema).optional()
}).strict();

export const ColmapUncheckedUpdateManyWithoutColmapInputSchema: z.ZodType<Prisma.ColmapUncheckedUpdateManyWithoutColmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RowmapUpdateWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapUpdateWithoutSheetsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cellmap: z.lazy(() => CellmapUpdateManyWithoutRowmapNestedInputSchema).optional()
}).strict();

export const RowmapUncheckedUpdateWithoutSheetsInputSchema: z.ZodType<Prisma.RowmapUncheckedUpdateWithoutSheetsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cellmap: z.lazy(() => CellmapUncheckedUpdateManyWithoutRowmapNestedInputSchema).optional()
}).strict();

export const RowmapUncheckedUpdateManyWithoutRowmapInputSchema: z.ZodType<Prisma.RowmapUncheckedUpdateManyWithoutRowmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endmarker: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const CellmapFindFirstArgsSchema: z.ZodType<Prisma.CellmapFindFirstArgs> = z.object({
  select: CellmapSelectSchema.optional(),
  include: CellmapIncludeSchema.optional(),
  where: CellmapWhereInputSchema.optional(),
  orderBy: z.union([ CellmapOrderByWithRelationInputSchema.array(),CellmapOrderByWithRelationInputSchema ]).optional(),
  cursor: CellmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CellmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.CellmapFindFirstArgs>

export const CellmapFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CellmapFindFirstOrThrowArgs> = z.object({
  select: CellmapSelectSchema.optional(),
  include: CellmapIncludeSchema.optional(),
  where: CellmapWhereInputSchema.optional(),
  orderBy: z.union([ CellmapOrderByWithRelationInputSchema.array(),CellmapOrderByWithRelationInputSchema ]).optional(),
  cursor: CellmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CellmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.CellmapFindFirstOrThrowArgs>

export const CellmapFindManyArgsSchema: z.ZodType<Prisma.CellmapFindManyArgs> = z.object({
  select: CellmapSelectSchema.optional(),
  include: CellmapIncludeSchema.optional(),
  where: CellmapWhereInputSchema.optional(),
  orderBy: z.union([ CellmapOrderByWithRelationInputSchema.array(),CellmapOrderByWithRelationInputSchema ]).optional(),
  cursor: CellmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CellmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.CellmapFindManyArgs>

export const CellmapAggregateArgsSchema: z.ZodType<Prisma.CellmapAggregateArgs> = z.object({
  where: CellmapWhereInputSchema.optional(),
  orderBy: z.union([ CellmapOrderByWithRelationInputSchema.array(),CellmapOrderByWithRelationInputSchema ]).optional(),
  cursor: CellmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.CellmapAggregateArgs>

export const CellmapGroupByArgsSchema: z.ZodType<Prisma.CellmapGroupByArgs> = z.object({
  where: CellmapWhereInputSchema.optional(),
  orderBy: z.union([ CellmapOrderByWithAggregationInputSchema.array(),CellmapOrderByWithAggregationInputSchema ]).optional(),
  by: CellmapScalarFieldEnumSchema.array(),
  having: CellmapScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.CellmapGroupByArgs>

export const CellmapFindUniqueArgsSchema: z.ZodType<Prisma.CellmapFindUniqueArgs> = z.object({
  select: CellmapSelectSchema.optional(),
  include: CellmapIncludeSchema.optional(),
  where: CellmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CellmapFindUniqueArgs>

export const CellmapFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CellmapFindUniqueOrThrowArgs> = z.object({
  select: CellmapSelectSchema.optional(),
  include: CellmapIncludeSchema.optional(),
  where: CellmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CellmapFindUniqueOrThrowArgs>

export const ColmapFindFirstArgsSchema: z.ZodType<Prisma.ColmapFindFirstArgs> = z.object({
  select: ColmapSelectSchema.optional(),
  include: ColmapIncludeSchema.optional(),
  where: ColmapWhereInputSchema.optional(),
  orderBy: z.union([ ColmapOrderByWithRelationInputSchema.array(),ColmapOrderByWithRelationInputSchema ]).optional(),
  cursor: ColmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ColmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ColmapFindFirstArgs>

export const ColmapFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ColmapFindFirstOrThrowArgs> = z.object({
  select: ColmapSelectSchema.optional(),
  include: ColmapIncludeSchema.optional(),
  where: ColmapWhereInputSchema.optional(),
  orderBy: z.union([ ColmapOrderByWithRelationInputSchema.array(),ColmapOrderByWithRelationInputSchema ]).optional(),
  cursor: ColmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ColmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ColmapFindFirstOrThrowArgs>

export const ColmapFindManyArgsSchema: z.ZodType<Prisma.ColmapFindManyArgs> = z.object({
  select: ColmapSelectSchema.optional(),
  include: ColmapIncludeSchema.optional(),
  where: ColmapWhereInputSchema.optional(),
  orderBy: z.union([ ColmapOrderByWithRelationInputSchema.array(),ColmapOrderByWithRelationInputSchema ]).optional(),
  cursor: ColmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ColmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ColmapFindManyArgs>

export const ColmapAggregateArgsSchema: z.ZodType<Prisma.ColmapAggregateArgs> = z.object({
  where: ColmapWhereInputSchema.optional(),
  orderBy: z.union([ ColmapOrderByWithRelationInputSchema.array(),ColmapOrderByWithRelationInputSchema ]).optional(),
  cursor: ColmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ColmapAggregateArgs>

export const ColmapGroupByArgsSchema: z.ZodType<Prisma.ColmapGroupByArgs> = z.object({
  where: ColmapWhereInputSchema.optional(),
  orderBy: z.union([ ColmapOrderByWithAggregationInputSchema.array(),ColmapOrderByWithAggregationInputSchema ]).optional(),
  by: ColmapScalarFieldEnumSchema.array(),
  having: ColmapScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ColmapGroupByArgs>

export const ColmapFindUniqueArgsSchema: z.ZodType<Prisma.ColmapFindUniqueArgs> = z.object({
  select: ColmapSelectSchema.optional(),
  include: ColmapIncludeSchema.optional(),
  where: ColmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ColmapFindUniqueArgs>

export const ColmapFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ColmapFindUniqueOrThrowArgs> = z.object({
  select: ColmapSelectSchema.optional(),
  include: ColmapIncludeSchema.optional(),
  where: ColmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ColmapFindUniqueOrThrowArgs>

export const RowmapFindFirstArgsSchema: z.ZodType<Prisma.RowmapFindFirstArgs> = z.object({
  select: RowmapSelectSchema.optional(),
  include: RowmapIncludeSchema.optional(),
  where: RowmapWhereInputSchema.optional(),
  orderBy: z.union([ RowmapOrderByWithRelationInputSchema.array(),RowmapOrderByWithRelationInputSchema ]).optional(),
  cursor: RowmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: RowmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.RowmapFindFirstArgs>

export const RowmapFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RowmapFindFirstOrThrowArgs> = z.object({
  select: RowmapSelectSchema.optional(),
  include: RowmapIncludeSchema.optional(),
  where: RowmapWhereInputSchema.optional(),
  orderBy: z.union([ RowmapOrderByWithRelationInputSchema.array(),RowmapOrderByWithRelationInputSchema ]).optional(),
  cursor: RowmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: RowmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.RowmapFindFirstOrThrowArgs>

export const RowmapFindManyArgsSchema: z.ZodType<Prisma.RowmapFindManyArgs> = z.object({
  select: RowmapSelectSchema.optional(),
  include: RowmapIncludeSchema.optional(),
  where: RowmapWhereInputSchema.optional(),
  orderBy: z.union([ RowmapOrderByWithRelationInputSchema.array(),RowmapOrderByWithRelationInputSchema ]).optional(),
  cursor: RowmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: RowmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.RowmapFindManyArgs>

export const RowmapAggregateArgsSchema: z.ZodType<Prisma.RowmapAggregateArgs> = z.object({
  where: RowmapWhereInputSchema.optional(),
  orderBy: z.union([ RowmapOrderByWithRelationInputSchema.array(),RowmapOrderByWithRelationInputSchema ]).optional(),
  cursor: RowmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.RowmapAggregateArgs>

export const RowmapGroupByArgsSchema: z.ZodType<Prisma.RowmapGroupByArgs> = z.object({
  where: RowmapWhereInputSchema.optional(),
  orderBy: z.union([ RowmapOrderByWithAggregationInputSchema.array(),RowmapOrderByWithAggregationInputSchema ]).optional(),
  by: RowmapScalarFieldEnumSchema.array(),
  having: RowmapScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.RowmapGroupByArgs>

export const RowmapFindUniqueArgsSchema: z.ZodType<Prisma.RowmapFindUniqueArgs> = z.object({
  select: RowmapSelectSchema.optional(),
  include: RowmapIncludeSchema.optional(),
  where: RowmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.RowmapFindUniqueArgs>

export const RowmapFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RowmapFindUniqueOrThrowArgs> = z.object({
  select: RowmapSelectSchema.optional(),
  include: RowmapIncludeSchema.optional(),
  where: RowmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.RowmapFindUniqueOrThrowArgs>

export const SheetsFindFirstArgsSchema: z.ZodType<Prisma.SheetsFindFirstArgs> = z.object({
  select: SheetsSelectSchema.optional(),
  include: SheetsIncludeSchema.optional(),
  where: SheetsWhereInputSchema.optional(),
  orderBy: z.union([ SheetsOrderByWithRelationInputSchema.array(),SheetsOrderByWithRelationInputSchema ]).optional(),
  cursor: SheetsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SheetsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.SheetsFindFirstArgs>

export const SheetsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SheetsFindFirstOrThrowArgs> = z.object({
  select: SheetsSelectSchema.optional(),
  include: SheetsIncludeSchema.optional(),
  where: SheetsWhereInputSchema.optional(),
  orderBy: z.union([ SheetsOrderByWithRelationInputSchema.array(),SheetsOrderByWithRelationInputSchema ]).optional(),
  cursor: SheetsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SheetsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.SheetsFindFirstOrThrowArgs>

export const SheetsFindManyArgsSchema: z.ZodType<Prisma.SheetsFindManyArgs> = z.object({
  select: SheetsSelectSchema.optional(),
  include: SheetsIncludeSchema.optional(),
  where: SheetsWhereInputSchema.optional(),
  orderBy: z.union([ SheetsOrderByWithRelationInputSchema.array(),SheetsOrderByWithRelationInputSchema ]).optional(),
  cursor: SheetsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SheetsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.SheetsFindManyArgs>

export const SheetsAggregateArgsSchema: z.ZodType<Prisma.SheetsAggregateArgs> = z.object({
  where: SheetsWhereInputSchema.optional(),
  orderBy: z.union([ SheetsOrderByWithRelationInputSchema.array(),SheetsOrderByWithRelationInputSchema ]).optional(),
  cursor: SheetsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.SheetsAggregateArgs>

export const SheetsGroupByArgsSchema: z.ZodType<Prisma.SheetsGroupByArgs> = z.object({
  where: SheetsWhereInputSchema.optional(),
  orderBy: z.union([ SheetsOrderByWithAggregationInputSchema.array(),SheetsOrderByWithAggregationInputSchema ]).optional(),
  by: SheetsScalarFieldEnumSchema.array(),
  having: SheetsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.SheetsGroupByArgs>

export const SheetsFindUniqueArgsSchema: z.ZodType<Prisma.SheetsFindUniqueArgs> = z.object({
  select: SheetsSelectSchema.optional(),
  include: SheetsIncludeSchema.optional(),
  where: SheetsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.SheetsFindUniqueArgs>

export const SheetsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SheetsFindUniqueOrThrowArgs> = z.object({
  select: SheetsSelectSchema.optional(),
  include: SheetsIncludeSchema.optional(),
  where: SheetsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.SheetsFindUniqueOrThrowArgs>

export const CellmapCreateArgsSchema: z.ZodType<Prisma.CellmapCreateArgs> = z.object({
  select: CellmapSelectSchema.optional(),
  include: CellmapIncludeSchema.optional(),
  data: z.union([ CellmapCreateInputSchema,CellmapUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.CellmapCreateArgs>

export const CellmapUpsertArgsSchema: z.ZodType<Prisma.CellmapUpsertArgs> = z.object({
  select: CellmapSelectSchema.optional(),
  include: CellmapIncludeSchema.optional(),
  where: CellmapWhereUniqueInputSchema,
  create: z.union([ CellmapCreateInputSchema,CellmapUncheckedCreateInputSchema ]),
  update: z.union([ CellmapUpdateInputSchema,CellmapUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.CellmapUpsertArgs>

export const CellmapCreateManyArgsSchema: z.ZodType<Prisma.CellmapCreateManyArgs> = z.object({
  data: CellmapCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.CellmapCreateManyArgs>

export const CellmapDeleteArgsSchema: z.ZodType<Prisma.CellmapDeleteArgs> = z.object({
  select: CellmapSelectSchema.optional(),
  include: CellmapIncludeSchema.optional(),
  where: CellmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CellmapDeleteArgs>

export const CellmapUpdateArgsSchema: z.ZodType<Prisma.CellmapUpdateArgs> = z.object({
  select: CellmapSelectSchema.optional(),
  include: CellmapIncludeSchema.optional(),
  data: z.union([ CellmapUpdateInputSchema,CellmapUncheckedUpdateInputSchema ]),
  where: CellmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CellmapUpdateArgs>

export const CellmapUpdateManyArgsSchema: z.ZodType<Prisma.CellmapUpdateManyArgs> = z.object({
  data: z.union([ CellmapUpdateManyMutationInputSchema,CellmapUncheckedUpdateManyInputSchema ]),
  where: CellmapWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.CellmapUpdateManyArgs>

export const CellmapDeleteManyArgsSchema: z.ZodType<Prisma.CellmapDeleteManyArgs> = z.object({
  where: CellmapWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.CellmapDeleteManyArgs>

export const ColmapCreateArgsSchema: z.ZodType<Prisma.ColmapCreateArgs> = z.object({
  select: ColmapSelectSchema.optional(),
  include: ColmapIncludeSchema.optional(),
  data: z.union([ ColmapCreateInputSchema,ColmapUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ColmapCreateArgs>

export const ColmapUpsertArgsSchema: z.ZodType<Prisma.ColmapUpsertArgs> = z.object({
  select: ColmapSelectSchema.optional(),
  include: ColmapIncludeSchema.optional(),
  where: ColmapWhereUniqueInputSchema,
  create: z.union([ ColmapCreateInputSchema,ColmapUncheckedCreateInputSchema ]),
  update: z.union([ ColmapUpdateInputSchema,ColmapUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ColmapUpsertArgs>

export const ColmapCreateManyArgsSchema: z.ZodType<Prisma.ColmapCreateManyArgs> = z.object({
  data: ColmapCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ColmapCreateManyArgs>

export const ColmapDeleteArgsSchema: z.ZodType<Prisma.ColmapDeleteArgs> = z.object({
  select: ColmapSelectSchema.optional(),
  include: ColmapIncludeSchema.optional(),
  where: ColmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ColmapDeleteArgs>

export const ColmapUpdateArgsSchema: z.ZodType<Prisma.ColmapUpdateArgs> = z.object({
  select: ColmapSelectSchema.optional(),
  include: ColmapIncludeSchema.optional(),
  data: z.union([ ColmapUpdateInputSchema,ColmapUncheckedUpdateInputSchema ]),
  where: ColmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ColmapUpdateArgs>

export const ColmapUpdateManyArgsSchema: z.ZodType<Prisma.ColmapUpdateManyArgs> = z.object({
  data: z.union([ ColmapUpdateManyMutationInputSchema,ColmapUncheckedUpdateManyInputSchema ]),
  where: ColmapWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ColmapUpdateManyArgs>

export const ColmapDeleteManyArgsSchema: z.ZodType<Prisma.ColmapDeleteManyArgs> = z.object({
  where: ColmapWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ColmapDeleteManyArgs>

export const RowmapCreateArgsSchema: z.ZodType<Prisma.RowmapCreateArgs> = z.object({
  select: RowmapSelectSchema.optional(),
  include: RowmapIncludeSchema.optional(),
  data: z.union([ RowmapCreateInputSchema,RowmapUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.RowmapCreateArgs>

export const RowmapUpsertArgsSchema: z.ZodType<Prisma.RowmapUpsertArgs> = z.object({
  select: RowmapSelectSchema.optional(),
  include: RowmapIncludeSchema.optional(),
  where: RowmapWhereUniqueInputSchema,
  create: z.union([ RowmapCreateInputSchema,RowmapUncheckedCreateInputSchema ]),
  update: z.union([ RowmapUpdateInputSchema,RowmapUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.RowmapUpsertArgs>

export const RowmapCreateManyArgsSchema: z.ZodType<Prisma.RowmapCreateManyArgs> = z.object({
  data: RowmapCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.RowmapCreateManyArgs>

export const RowmapDeleteArgsSchema: z.ZodType<Prisma.RowmapDeleteArgs> = z.object({
  select: RowmapSelectSchema.optional(),
  include: RowmapIncludeSchema.optional(),
  where: RowmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.RowmapDeleteArgs>

export const RowmapUpdateArgsSchema: z.ZodType<Prisma.RowmapUpdateArgs> = z.object({
  select: RowmapSelectSchema.optional(),
  include: RowmapIncludeSchema.optional(),
  data: z.union([ RowmapUpdateInputSchema,RowmapUncheckedUpdateInputSchema ]),
  where: RowmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.RowmapUpdateArgs>

export const RowmapUpdateManyArgsSchema: z.ZodType<Prisma.RowmapUpdateManyArgs> = z.object({
  data: z.union([ RowmapUpdateManyMutationInputSchema,RowmapUncheckedUpdateManyInputSchema ]),
  where: RowmapWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.RowmapUpdateManyArgs>

export const RowmapDeleteManyArgsSchema: z.ZodType<Prisma.RowmapDeleteManyArgs> = z.object({
  where: RowmapWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.RowmapDeleteManyArgs>

export const SheetsCreateArgsSchema: z.ZodType<Prisma.SheetsCreateArgs> = z.object({
  select: SheetsSelectSchema.optional(),
  include: SheetsIncludeSchema.optional(),
  data: z.union([ SheetsCreateInputSchema,SheetsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.SheetsCreateArgs>

export const SheetsUpsertArgsSchema: z.ZodType<Prisma.SheetsUpsertArgs> = z.object({
  select: SheetsSelectSchema.optional(),
  include: SheetsIncludeSchema.optional(),
  where: SheetsWhereUniqueInputSchema,
  create: z.union([ SheetsCreateInputSchema,SheetsUncheckedCreateInputSchema ]),
  update: z.union([ SheetsUpdateInputSchema,SheetsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.SheetsUpsertArgs>

export const SheetsCreateManyArgsSchema: z.ZodType<Prisma.SheetsCreateManyArgs> = z.object({
  data: SheetsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.SheetsCreateManyArgs>

export const SheetsDeleteArgsSchema: z.ZodType<Prisma.SheetsDeleteArgs> = z.object({
  select: SheetsSelectSchema.optional(),
  include: SheetsIncludeSchema.optional(),
  where: SheetsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.SheetsDeleteArgs>

export const SheetsUpdateArgsSchema: z.ZodType<Prisma.SheetsUpdateArgs> = z.object({
  select: SheetsSelectSchema.optional(),
  include: SheetsIncludeSchema.optional(),
  data: z.union([ SheetsUpdateInputSchema,SheetsUncheckedUpdateInputSchema ]),
  where: SheetsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.SheetsUpdateArgs>

export const SheetsUpdateManyArgsSchema: z.ZodType<Prisma.SheetsUpdateManyArgs> = z.object({
  data: z.union([ SheetsUpdateManyMutationInputSchema,SheetsUncheckedUpdateManyInputSchema ]),
  where: SheetsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.SheetsUpdateManyArgs>

export const SheetsDeleteManyArgsSchema: z.ZodType<Prisma.SheetsDeleteManyArgs> = z.object({
  where: SheetsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.SheetsDeleteManyArgs>

interface CellmapGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.CellmapArgs
  readonly type: Omit<Prisma.CellmapGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface ColmapGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ColmapArgs
  readonly type: Omit<Prisma.ColmapGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface RowmapGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.RowmapArgs
  readonly type: Omit<Prisma.RowmapGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface SheetsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.SheetsArgs
  readonly type: Omit<Prisma.SheetsGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

export const tableSchemas = {
  cellmap: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "sheet_id",
        "TEXT"
      ],
      [
        "row_id",
        "TEXT"
      ],
      [
        "col_id",
        "TEXT"
      ],
      [
        "content",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("colmap", "col_id", "id", "colmap", "CellmapToColmap", "one"),
      new Relation("rowmap", "row_id", "id", "rowmap", "CellmapToRowmap", "one"),
      new Relation("sheets", "sheet_id", "id", "sheets", "CellmapToSheets", "one"),
    ],
    modelSchema: (CellmapCreateInputSchema as any)
      .partial()
      .or((CellmapUncheckedCreateInputSchema as any).partial()),
    createSchema: CellmapCreateArgsSchema,
    createManySchema: CellmapCreateManyArgsSchema,
    findUniqueSchema: CellmapFindUniqueArgsSchema,
    findSchema: CellmapFindFirstArgsSchema,
    updateSchema: CellmapUpdateArgsSchema,
    updateManySchema: CellmapUpdateManyArgsSchema,
    upsertSchema: CellmapUpsertArgsSchema,
    deleteSchema: CellmapDeleteArgsSchema,
    deleteManySchema: CellmapDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof CellmapUncheckedCreateInputSchema>,
    Prisma.CellmapCreateArgs['data'],
    Prisma.CellmapUpdateArgs['data'],
    Prisma.CellmapFindFirstArgs['select'],
    Prisma.CellmapFindFirstArgs['where'],
    Prisma.CellmapFindUniqueArgs['where'],
    Omit<Prisma.CellmapInclude, '_count'>,
    Prisma.CellmapFindFirstArgs['orderBy'],
    Prisma.CellmapScalarFieldEnum,
    CellmapGetPayload
  >,
  colmap: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "sheet_id",
        "TEXT"
      ],
      [
        "startmarker",
        "TEXT"
      ],
      [
        "endmarker",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("cellmap", "", "", "cellmap", "CellmapToColmap", "many"),
      new Relation("sheets", "sheet_id", "id", "sheets", "ColmapToSheets", "one"),
    ],
    modelSchema: (ColmapCreateInputSchema as any)
      .partial()
      .or((ColmapUncheckedCreateInputSchema as any).partial()),
    createSchema: ColmapCreateArgsSchema,
    createManySchema: ColmapCreateManyArgsSchema,
    findUniqueSchema: ColmapFindUniqueArgsSchema,
    findSchema: ColmapFindFirstArgsSchema,
    updateSchema: ColmapUpdateArgsSchema,
    updateManySchema: ColmapUpdateManyArgsSchema,
    upsertSchema: ColmapUpsertArgsSchema,
    deleteSchema: ColmapDeleteArgsSchema,
    deleteManySchema: ColmapDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ColmapUncheckedCreateInputSchema>,
    Prisma.ColmapCreateArgs['data'],
    Prisma.ColmapUpdateArgs['data'],
    Prisma.ColmapFindFirstArgs['select'],
    Prisma.ColmapFindFirstArgs['where'],
    Prisma.ColmapFindUniqueArgs['where'],
    Omit<Prisma.ColmapInclude, '_count'>,
    Prisma.ColmapFindFirstArgs['orderBy'],
    Prisma.ColmapScalarFieldEnum,
    ColmapGetPayload
  >,
  rowmap: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "sheet_id",
        "TEXT"
      ],
      [
        "startmarker",
        "TEXT"
      ],
      [
        "endmarker",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("cellmap", "", "", "cellmap", "CellmapToRowmap", "many"),
      new Relation("sheets", "sheet_id", "id", "sheets", "RowmapToSheets", "one"),
    ],
    modelSchema: (RowmapCreateInputSchema as any)
      .partial()
      .or((RowmapUncheckedCreateInputSchema as any).partial()),
    createSchema: RowmapCreateArgsSchema,
    createManySchema: RowmapCreateManyArgsSchema,
    findUniqueSchema: RowmapFindUniqueArgsSchema,
    findSchema: RowmapFindFirstArgsSchema,
    updateSchema: RowmapUpdateArgsSchema,
    updateManySchema: RowmapUpdateManyArgsSchema,
    upsertSchema: RowmapUpsertArgsSchema,
    deleteSchema: RowmapDeleteArgsSchema,
    deleteManySchema: RowmapDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof RowmapUncheckedCreateInputSchema>,
    Prisma.RowmapCreateArgs['data'],
    Prisma.RowmapUpdateArgs['data'],
    Prisma.RowmapFindFirstArgs['select'],
    Prisma.RowmapFindFirstArgs['where'],
    Prisma.RowmapFindUniqueArgs['where'],
    Omit<Prisma.RowmapInclude, '_count'>,
    Prisma.RowmapFindFirstArgs['orderBy'],
    Prisma.RowmapScalarFieldEnum,
    RowmapGetPayload
  >,
  sheets: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "rows",
        "INT2"
      ],
      [
        "cols",
        "INT2"
      ],
      [
        "startrow",
        "TEXT"
      ],
      [
        "endrow",
        "TEXT"
      ],
      [
        "startrol",
        "TEXT"
      ],
      [
        "endrol",
        "TEXT"
      ],
      [
        "created_at",
        "TIMESTAMP"
      ],
      [
        "title",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("cellmap", "", "", "cellmap", "CellmapToSheets", "many"),
      new Relation("colmap", "", "", "colmap", "ColmapToSheets", "many"),
      new Relation("rowmap", "", "", "rowmap", "RowmapToSheets", "many"),
    ],
    modelSchema: (SheetsCreateInputSchema as any)
      .partial()
      .or((SheetsUncheckedCreateInputSchema as any).partial()),
    createSchema: SheetsCreateArgsSchema,
    createManySchema: SheetsCreateManyArgsSchema,
    findUniqueSchema: SheetsFindUniqueArgsSchema,
    findSchema: SheetsFindFirstArgsSchema,
    updateSchema: SheetsUpdateArgsSchema,
    updateManySchema: SheetsUpdateManyArgsSchema,
    upsertSchema: SheetsUpsertArgsSchema,
    deleteSchema: SheetsDeleteArgsSchema,
    deleteManySchema: SheetsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof SheetsUncheckedCreateInputSchema>,
    Prisma.SheetsCreateArgs['data'],
    Prisma.SheetsUpdateArgs['data'],
    Prisma.SheetsFindFirstArgs['select'],
    Prisma.SheetsFindFirstArgs['where'],
    Prisma.SheetsFindUniqueArgs['where'],
    Omit<Prisma.SheetsInclude, '_count'>,
    Prisma.SheetsFindFirstArgs['orderBy'],
    Prisma.SheetsScalarFieldEnum,
    SheetsGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
