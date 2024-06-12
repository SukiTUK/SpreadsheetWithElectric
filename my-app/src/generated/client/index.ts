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

export const ColmapScalarFieldEnumSchema = z.enum(['id','pos']);

export const ContentScalarFieldEnumSchema = z.enum(['id','sheet_id','row','col','content']);

export const ContentmapScalarFieldEnumSchema = z.enum(['rowindex','colindex','content']);

export const ItemsScalarFieldEnumSchema = z.enum(['value']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const RowmapScalarFieldEnumSchema = z.enum(['id','pos']);

export const SheetsScalarFieldEnumSchema = z.enum(['id','rows','cols']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// COLMAP SCHEMA
/////////////////////////////////////////

export const ColmapSchema = z.object({
  id: z.string().uuid(),
  pos: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
})

export type Colmap = z.infer<typeof ColmapSchema>

/////////////////////////////////////////
// CONTENT SCHEMA
/////////////////////////////////////////

export const ContentSchema = z.object({
  id: z.string(),
  sheet_id: z.string(),
  row: z.number().int().gte(-32768).lte(32767),
  col: z.number().int().gte(-32768).lte(32767),
  content: z.string().nullable(),
})

export type Content = z.infer<typeof ContentSchema>

/////////////////////////////////////////
// CONTENTMAP SCHEMA
/////////////////////////////////////////

export const ContentmapSchema = z.object({
  rowindex: z.string().uuid(),
  colindex: z.string().uuid(),
  content: z.string().nullable(),
})

export type Contentmap = z.infer<typeof ContentmapSchema>

/////////////////////////////////////////
// ITEMS SCHEMA
/////////////////////////////////////////

export const ItemsSchema = z.object({
  value: z.string(),
})

export type Items = z.infer<typeof ItemsSchema>

/////////////////////////////////////////
// ROWMAP SCHEMA
/////////////////////////////////////////

export const RowmapSchema = z.object({
  id: z.string().uuid(),
  pos: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
})

export type Rowmap = z.infer<typeof RowmapSchema>

/////////////////////////////////////////
// SHEETS SCHEMA
/////////////////////////////////////////

export const SheetsSchema = z.object({
  id: z.string(),
  rows: z.number().int().gte(-32768).lte(32767),
  cols: z.number().int().gte(-32768).lte(32767),
})

export type Sheets = z.infer<typeof SheetsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// COLMAP
//------------------------------------------------------

export const ColmapIncludeSchema: z.ZodType<Prisma.ColmapInclude> = z.object({
  contentmap: z.union([z.boolean(),z.lazy(() => ContentmapFindManyArgsSchema)]).optional(),
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
  contentmap: z.boolean().optional(),
}).strict();

export const ColmapSelectSchema: z.ZodType<Prisma.ColmapSelect> = z.object({
  id: z.boolean().optional(),
  pos: z.boolean().optional(),
  contentmap: z.union([z.boolean(),z.lazy(() => ContentmapFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColmapCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CONTENT
//------------------------------------------------------

export const ContentIncludeSchema: z.ZodType<Prisma.ContentInclude> = z.object({
  sheets: z.union([z.boolean(),z.lazy(() => SheetsArgsSchema)]).optional(),
}).strict()

export const ContentArgsSchema: z.ZodType<Prisma.ContentArgs> = z.object({
  select: z.lazy(() => ContentSelectSchema).optional(),
  include: z.lazy(() => ContentIncludeSchema).optional(),
}).strict();

export const ContentSelectSchema: z.ZodType<Prisma.ContentSelect> = z.object({
  id: z.boolean().optional(),
  sheet_id: z.boolean().optional(),
  row: z.boolean().optional(),
  col: z.boolean().optional(),
  content: z.boolean().optional(),
  sheets: z.union([z.boolean(),z.lazy(() => SheetsArgsSchema)]).optional(),
}).strict()

// CONTENTMAP
//------------------------------------------------------

export const ContentmapIncludeSchema: z.ZodType<Prisma.ContentmapInclude> = z.object({
  colmap: z.union([z.boolean(),z.lazy(() => ColmapArgsSchema)]).optional(),
  rowmap: z.union([z.boolean(),z.lazy(() => RowmapArgsSchema)]).optional(),
}).strict()

export const ContentmapArgsSchema: z.ZodType<Prisma.ContentmapArgs> = z.object({
  select: z.lazy(() => ContentmapSelectSchema).optional(),
  include: z.lazy(() => ContentmapIncludeSchema).optional(),
}).strict();

export const ContentmapSelectSchema: z.ZodType<Prisma.ContentmapSelect> = z.object({
  rowindex: z.boolean().optional(),
  colindex: z.boolean().optional(),
  content: z.boolean().optional(),
  colmap: z.union([z.boolean(),z.lazy(() => ColmapArgsSchema)]).optional(),
  rowmap: z.union([z.boolean(),z.lazy(() => RowmapArgsSchema)]).optional(),
}).strict()

// ITEMS
//------------------------------------------------------

export const ItemsSelectSchema: z.ZodType<Prisma.ItemsSelect> = z.object({
  value: z.boolean().optional(),
}).strict()

// ROWMAP
//------------------------------------------------------

export const RowmapIncludeSchema: z.ZodType<Prisma.RowmapInclude> = z.object({
  contentmap: z.union([z.boolean(),z.lazy(() => ContentmapFindManyArgsSchema)]).optional(),
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
  contentmap: z.boolean().optional(),
}).strict();

export const RowmapSelectSchema: z.ZodType<Prisma.RowmapSelect> = z.object({
  id: z.boolean().optional(),
  pos: z.boolean().optional(),
  contentmap: z.union([z.boolean(),z.lazy(() => ContentmapFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RowmapCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SHEETS
//------------------------------------------------------

export const SheetsIncludeSchema: z.ZodType<Prisma.SheetsInclude> = z.object({
  content: z.union([z.boolean(),z.lazy(() => ContentFindManyArgsSchema)]).optional(),
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
  content: z.boolean().optional(),
}).strict();

export const SheetsSelectSchema: z.ZodType<Prisma.SheetsSelect> = z.object({
  id: z.boolean().optional(),
  rows: z.boolean().optional(),
  cols: z.boolean().optional(),
  content: z.union([z.boolean(),z.lazy(() => ContentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SheetsCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ColmapWhereInputSchema: z.ZodType<Prisma.ColmapWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ColmapWhereInputSchema),z.lazy(() => ColmapWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColmapWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColmapWhereInputSchema),z.lazy(() => ColmapWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  pos: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  contentmap: z.lazy(() => ContentmapListRelationFilterSchema).optional()
}).strict();

export const ColmapOrderByWithRelationInputSchema: z.ZodType<Prisma.ColmapOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional(),
  contentmap: z.lazy(() => ContentmapOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ColmapWhereUniqueInputSchema: z.ZodType<Prisma.ColmapWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const ColmapOrderByWithAggregationInputSchema: z.ZodType<Prisma.ColmapOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ColmapCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ColmapAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ColmapMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ColmapMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ColmapSumOrderByAggregateInputSchema).optional()
}).strict();

export const ColmapScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ColmapScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema),z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema),z.lazy(() => ColmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  pos: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const ContentWhereInputSchema: z.ZodType<Prisma.ContentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ContentWhereInputSchema),z.lazy(() => ContentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentWhereInputSchema),z.lazy(() => ContentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  row: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  col: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sheets: z.union([ z.lazy(() => SheetsRelationFilterSchema),z.lazy(() => SheetsWhereInputSchema) ]).optional(),
}).strict();

export const ContentOrderByWithRelationInputSchema: z.ZodType<Prisma.ContentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row: z.lazy(() => SortOrderSchema).optional(),
  col: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  sheets: z.lazy(() => SheetsOrderByWithRelationInputSchema).optional()
}).strict();

export const ContentWhereUniqueInputSchema: z.ZodType<Prisma.ContentWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const ContentOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row: z.lazy(() => SortOrderSchema).optional(),
  col: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ContentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ContentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ContentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ContentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ContentSumOrderByAggregateInputSchema).optional()
}).strict();

export const ContentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ContentScalarWhereWithAggregatesInputSchema),z.lazy(() => ContentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentScalarWhereWithAggregatesInputSchema),z.lazy(() => ContentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  row: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  col: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ContentmapWhereInputSchema: z.ZodType<Prisma.ContentmapWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ContentmapWhereInputSchema),z.lazy(() => ContentmapWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentmapWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentmapWhereInputSchema),z.lazy(() => ContentmapWhereInputSchema).array() ]).optional(),
  rowindex: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  colindex: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  colmap: z.union([ z.lazy(() => ColmapRelationFilterSchema),z.lazy(() => ColmapWhereInputSchema) ]).optional(),
  rowmap: z.union([ z.lazy(() => RowmapRelationFilterSchema),z.lazy(() => RowmapWhereInputSchema) ]).optional(),
}).strict();

export const ContentmapOrderByWithRelationInputSchema: z.ZodType<Prisma.ContentmapOrderByWithRelationInput> = z.object({
  rowindex: z.lazy(() => SortOrderSchema).optional(),
  colindex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  colmap: z.lazy(() => ColmapOrderByWithRelationInputSchema).optional(),
  rowmap: z.lazy(() => RowmapOrderByWithRelationInputSchema).optional()
}).strict();

export const ContentmapWhereUniqueInputSchema: z.ZodType<Prisma.ContentmapWhereUniqueInput> = z.object({
  rowindex_colindex: z.lazy(() => ContentmapRowindexColindexCompoundUniqueInputSchema).optional()
}).strict();

export const ContentmapOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContentmapOrderByWithAggregationInput> = z.object({
  rowindex: z.lazy(() => SortOrderSchema).optional(),
  colindex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ContentmapCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ContentmapMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ContentmapMinOrderByAggregateInputSchema).optional()
}).strict();

export const ContentmapScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContentmapScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema),z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema),z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  rowindex: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  colindex: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ItemsWhereInputSchema: z.ZodType<Prisma.ItemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ItemsWhereInputSchema),z.lazy(() => ItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ItemsWhereInputSchema),z.lazy(() => ItemsWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ItemsOrderByWithRelationInputSchema: z.ZodType<Prisma.ItemsOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsWhereUniqueInputSchema: z.ZodType<Prisma.ItemsWhereUniqueInput> = z.object({
  value: z.string().optional()
}).strict();

export const ItemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ItemsOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ItemsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ItemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ItemsMinOrderByAggregateInputSchema).optional()
}).strict();

export const ItemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ItemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const RowmapWhereInputSchema: z.ZodType<Prisma.RowmapWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RowmapWhereInputSchema),z.lazy(() => RowmapWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RowmapWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RowmapWhereInputSchema),z.lazy(() => RowmapWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  pos: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  contentmap: z.lazy(() => ContentmapListRelationFilterSchema).optional()
}).strict();

export const RowmapOrderByWithRelationInputSchema: z.ZodType<Prisma.RowmapOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional(),
  contentmap: z.lazy(() => ContentmapOrderByRelationAggregateInputSchema).optional()
}).strict();

export const RowmapWhereUniqueInputSchema: z.ZodType<Prisma.RowmapWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const RowmapOrderByWithAggregationInputSchema: z.ZodType<Prisma.RowmapOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RowmapCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RowmapAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RowmapMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RowmapMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RowmapSumOrderByAggregateInputSchema).optional()
}).strict();

export const RowmapScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RowmapScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema),z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema),z.lazy(() => RowmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  pos: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const SheetsWhereInputSchema: z.ZodType<Prisma.SheetsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SheetsWhereInputSchema),z.lazy(() => SheetsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SheetsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SheetsWhereInputSchema),z.lazy(() => SheetsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rows: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  cols: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.lazy(() => ContentListRelationFilterSchema).optional()
}).strict();

export const SheetsOrderByWithRelationInputSchema: z.ZodType<Prisma.SheetsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => ContentOrderByRelationAggregateInputSchema).optional()
}).strict();

export const SheetsWhereUniqueInputSchema: z.ZodType<Prisma.SheetsWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const SheetsOrderByWithAggregationInputSchema: z.ZodType<Prisma.SheetsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional(),
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
}).strict();

export const ColmapCreateInputSchema: z.ZodType<Prisma.ColmapCreateInput> = z.object({
  id: z.string().uuid(),
  pos: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  contentmap: z.lazy(() => ContentmapCreateNestedManyWithoutColmapInputSchema).optional()
}).strict();

export const ColmapUncheckedCreateInputSchema: z.ZodType<Prisma.ColmapUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  pos: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  contentmap: z.lazy(() => ContentmapUncheckedCreateNestedManyWithoutColmapInputSchema).optional()
}).strict();

export const ColmapUpdateInputSchema: z.ZodType<Prisma.ColmapUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  contentmap: z.lazy(() => ContentmapUpdateManyWithoutColmapNestedInputSchema).optional()
}).strict();

export const ColmapUncheckedUpdateInputSchema: z.ZodType<Prisma.ColmapUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  contentmap: z.lazy(() => ContentmapUncheckedUpdateManyWithoutColmapNestedInputSchema).optional()
}).strict();

export const ColmapCreateManyInputSchema: z.ZodType<Prisma.ColmapCreateManyInput> = z.object({
  id: z.string().uuid(),
  pos: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable()
}).strict();

export const ColmapUpdateManyMutationInputSchema: z.ZodType<Prisma.ColmapUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ColmapUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ColmapUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentCreateInputSchema: z.ZodType<Prisma.ContentCreateInput> = z.object({
  id: z.string(),
  row: z.number().int().gte(-32768).lte(32767),
  col: z.number().int().gte(-32768).lte(32767),
  content: z.string().optional().nullable(),
  sheets: z.lazy(() => SheetsCreateNestedOneWithoutContentInputSchema)
}).strict();

export const ContentUncheckedCreateInputSchema: z.ZodType<Prisma.ContentUncheckedCreateInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  row: z.number().int().gte(-32768).lte(32767),
  col: z.number().int().gte(-32768).lte(32767),
  content: z.string().optional().nullable()
}).strict();

export const ContentUpdateInputSchema: z.ZodType<Prisma.ContentUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  col: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sheets: z.lazy(() => SheetsUpdateOneRequiredWithoutContentNestedInputSchema).optional()
}).strict();

export const ContentUncheckedUpdateInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  col: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentCreateManyInputSchema: z.ZodType<Prisma.ContentCreateManyInput> = z.object({
  id: z.string(),
  sheet_id: z.string(),
  row: z.number().int().gte(-32768).lte(32767),
  col: z.number().int().gte(-32768).lte(32767),
  content: z.string().optional().nullable()
}).strict();

export const ContentUpdateManyMutationInputSchema: z.ZodType<Prisma.ContentUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  col: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sheet_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  col: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapCreateInputSchema: z.ZodType<Prisma.ContentmapCreateInput> = z.object({
  content: z.string().optional().nullable(),
  colmap: z.lazy(() => ColmapCreateNestedOneWithoutContentmapInputSchema),
  rowmap: z.lazy(() => RowmapCreateNestedOneWithoutContentmapInputSchema)
}).strict();

export const ContentmapUncheckedCreateInputSchema: z.ZodType<Prisma.ContentmapUncheckedCreateInput> = z.object({
  rowindex: z.string().uuid(),
  colindex: z.string().uuid(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapUpdateInputSchema: z.ZodType<Prisma.ContentmapUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colmap: z.lazy(() => ColmapUpdateOneRequiredWithoutContentmapNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUpdateOneRequiredWithoutContentmapNestedInputSchema).optional()
}).strict();

export const ContentmapUncheckedUpdateInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateInput> = z.object({
  rowindex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colindex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapCreateManyInputSchema: z.ZodType<Prisma.ContentmapCreateManyInput> = z.object({
  rowindex: z.string().uuid(),
  colindex: z.string().uuid(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapUpdateManyMutationInputSchema: z.ZodType<Prisma.ContentmapUpdateManyMutationInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateManyInput> = z.object({
  rowindex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colindex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ItemsCreateInputSchema: z.ZodType<Prisma.ItemsCreateInput> = z.object({
  value: z.string()
}).strict();

export const ItemsUncheckedCreateInputSchema: z.ZodType<Prisma.ItemsUncheckedCreateInput> = z.object({
  value: z.string()
}).strict();

export const ItemsUpdateInputSchema: z.ZodType<Prisma.ItemsUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsUncheckedUpdateInputSchema: z.ZodType<Prisma.ItemsUncheckedUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsCreateManyInputSchema: z.ZodType<Prisma.ItemsCreateManyInput> = z.object({
  value: z.string()
}).strict();

export const ItemsUpdateManyMutationInputSchema: z.ZodType<Prisma.ItemsUpdateManyMutationInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ItemsUncheckedUpdateManyInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RowmapCreateInputSchema: z.ZodType<Prisma.RowmapCreateInput> = z.object({
  id: z.string().uuid(),
  pos: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  contentmap: z.lazy(() => ContentmapCreateNestedManyWithoutRowmapInputSchema).optional()
}).strict();

export const RowmapUncheckedCreateInputSchema: z.ZodType<Prisma.RowmapUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  pos: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  contentmap: z.lazy(() => ContentmapUncheckedCreateNestedManyWithoutRowmapInputSchema).optional()
}).strict();

export const RowmapUpdateInputSchema: z.ZodType<Prisma.RowmapUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  contentmap: z.lazy(() => ContentmapUpdateManyWithoutRowmapNestedInputSchema).optional()
}).strict();

export const RowmapUncheckedUpdateInputSchema: z.ZodType<Prisma.RowmapUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  contentmap: z.lazy(() => ContentmapUncheckedUpdateManyWithoutRowmapNestedInputSchema).optional()
}).strict();

export const RowmapCreateManyInputSchema: z.ZodType<Prisma.RowmapCreateManyInput> = z.object({
  id: z.string().uuid(),
  pos: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable()
}).strict();

export const RowmapUpdateManyMutationInputSchema: z.ZodType<Prisma.RowmapUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RowmapUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RowmapUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SheetsCreateInputSchema: z.ZodType<Prisma.SheetsCreateInput> = z.object({
  id: z.string(),
  rows: z.number().int().gte(-32768).lte(32767),
  cols: z.number().int().gte(-32768).lte(32767),
  content: z.lazy(() => ContentCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsUncheckedCreateInputSchema: z.ZodType<Prisma.SheetsUncheckedCreateInput> = z.object({
  id: z.string(),
  rows: z.number().int().gte(-32768).lte(32767),
  cols: z.number().int().gte(-32768).lte(32767),
  content: z.lazy(() => ContentUncheckedCreateNestedManyWithoutSheetsInputSchema).optional()
}).strict();

export const SheetsUpdateInputSchema: z.ZodType<Prisma.SheetsUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.lazy(() => ContentUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const SheetsUncheckedUpdateInputSchema: z.ZodType<Prisma.SheetsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.lazy(() => ContentUncheckedUpdateManyWithoutSheetsNestedInputSchema).optional()
}).strict();

export const SheetsCreateManyInputSchema: z.ZodType<Prisma.SheetsCreateManyInput> = z.object({
  id: z.string(),
  rows: z.number().int().gte(-32768).lte(32767),
  cols: z.number().int().gte(-32768).lte(32767)
}).strict();

export const SheetsUpdateManyMutationInputSchema: z.ZodType<Prisma.SheetsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SheetsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SheetsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ContentmapListRelationFilterSchema: z.ZodType<Prisma.ContentmapListRelationFilter> = z.object({
  every: z.lazy(() => ContentmapWhereInputSchema).optional(),
  some: z.lazy(() => ContentmapWhereInputSchema).optional(),
  none: z.lazy(() => ContentmapWhereInputSchema).optional()
}).strict();

export const ContentmapOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ContentmapOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColmapCountOrderByAggregateInputSchema: z.ZodType<Prisma.ColmapCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColmapAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ColmapAvgOrderByAggregateInput> = z.object({
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColmapMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ColmapMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColmapMinOrderByAggregateInputSchema: z.ZodType<Prisma.ColmapMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColmapSumOrderByAggregateInputSchema: z.ZodType<Prisma.ColmapSumOrderByAggregateInput> = z.object({
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
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

export const SheetsRelationFilterSchema: z.ZodType<Prisma.SheetsRelationFilter> = z.object({
  is: z.lazy(() => SheetsWhereInputSchema).optional(),
  isNot: z.lazy(() => SheetsWhereInputSchema).optional()
}).strict();

export const ContentCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row: z.lazy(() => SortOrderSchema).optional(),
  col: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ContentAvgOrderByAggregateInput> = z.object({
  row: z.lazy(() => SortOrderSchema).optional(),
  col: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row: z.lazy(() => SortOrderSchema).optional(),
  col: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentMinOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sheet_id: z.lazy(() => SortOrderSchema).optional(),
  row: z.lazy(() => SortOrderSchema).optional(),
  col: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentSumOrderByAggregateInputSchema: z.ZodType<Prisma.ContentSumOrderByAggregateInput> = z.object({
  row: z.lazy(() => SortOrderSchema).optional(),
  col: z.lazy(() => SortOrderSchema).optional()
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

export const ColmapRelationFilterSchema: z.ZodType<Prisma.ColmapRelationFilter> = z.object({
  is: z.lazy(() => ColmapWhereInputSchema).optional(),
  isNot: z.lazy(() => ColmapWhereInputSchema).optional()
}).strict();

export const RowmapRelationFilterSchema: z.ZodType<Prisma.RowmapRelationFilter> = z.object({
  is: z.lazy(() => RowmapWhereInputSchema).optional(),
  isNot: z.lazy(() => RowmapWhereInputSchema).optional()
}).strict();

export const ContentmapRowindexColindexCompoundUniqueInputSchema: z.ZodType<Prisma.ContentmapRowindexColindexCompoundUniqueInput> = z.object({
  rowindex: z.string(),
  colindex: z.string()
}).strict();

export const ContentmapCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContentmapCountOrderByAggregateInput> = z.object({
  rowindex: z.lazy(() => SortOrderSchema).optional(),
  colindex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentmapMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContentmapMaxOrderByAggregateInput> = z.object({
  rowindex: z.lazy(() => SortOrderSchema).optional(),
  colindex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentmapMinOrderByAggregateInputSchema: z.ZodType<Prisma.ContentmapMinOrderByAggregateInput> = z.object({
  rowindex: z.lazy(() => SortOrderSchema).optional(),
  colindex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsCountOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMaxOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMinOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RowmapCountOrderByAggregateInputSchema: z.ZodType<Prisma.RowmapCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RowmapAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RowmapAvgOrderByAggregateInput> = z.object({
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RowmapMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RowmapMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RowmapMinOrderByAggregateInputSchema: z.ZodType<Prisma.RowmapMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RowmapSumOrderByAggregateInputSchema: z.ZodType<Prisma.RowmapSumOrderByAggregateInput> = z.object({
  pos: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentListRelationFilterSchema: z.ZodType<Prisma.ContentListRelationFilter> = z.object({
  every: z.lazy(() => ContentWhereInputSchema).optional(),
  some: z.lazy(() => ContentWhereInputSchema).optional(),
  none: z.lazy(() => ContentWhereInputSchema).optional()
}).strict();

export const ContentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ContentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsCountOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsAvgOrderByAggregateInput> = z.object({
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsMinOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SheetsSumOrderByAggregateInputSchema: z.ZodType<Prisma.SheetsSumOrderByAggregateInput> = z.object({
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentmapCreateNestedManyWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapCreateNestedManyWithoutColmapInput> = z.object({
  create: z.union([ z.lazy(() => ContentmapCreateWithoutColmapInputSchema),z.lazy(() => ContentmapCreateWithoutColmapInputSchema).array(),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentmapCreateOrConnectWithoutColmapInputSchema),z.lazy(() => ContentmapCreateOrConnectWithoutColmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentmapCreateManyColmapInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ContentmapUncheckedCreateNestedManyWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedCreateNestedManyWithoutColmapInput> = z.object({
  create: z.union([ z.lazy(() => ContentmapCreateWithoutColmapInputSchema),z.lazy(() => ContentmapCreateWithoutColmapInputSchema).array(),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentmapCreateOrConnectWithoutColmapInputSchema),z.lazy(() => ContentmapCreateOrConnectWithoutColmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentmapCreateManyColmapInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ContentmapUpdateManyWithoutColmapNestedInputSchema: z.ZodType<Prisma.ContentmapUpdateManyWithoutColmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContentmapCreateWithoutColmapInputSchema),z.lazy(() => ContentmapCreateWithoutColmapInputSchema).array(),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentmapCreateOrConnectWithoutColmapInputSchema),z.lazy(() => ContentmapCreateOrConnectWithoutColmapInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ContentmapUpsertWithWhereUniqueWithoutColmapInputSchema),z.lazy(() => ContentmapUpsertWithWhereUniqueWithoutColmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentmapCreateManyColmapInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ContentmapUpdateWithWhereUniqueWithoutColmapInputSchema),z.lazy(() => ContentmapUpdateWithWhereUniqueWithoutColmapInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ContentmapUpdateManyWithWhereWithoutColmapInputSchema),z.lazy(() => ContentmapUpdateManyWithWhereWithoutColmapInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ContentmapScalarWhereInputSchema),z.lazy(() => ContentmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ContentmapUncheckedUpdateManyWithoutColmapNestedInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateManyWithoutColmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContentmapCreateWithoutColmapInputSchema),z.lazy(() => ContentmapCreateWithoutColmapInputSchema).array(),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentmapCreateOrConnectWithoutColmapInputSchema),z.lazy(() => ContentmapCreateOrConnectWithoutColmapInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ContentmapUpsertWithWhereUniqueWithoutColmapInputSchema),z.lazy(() => ContentmapUpsertWithWhereUniqueWithoutColmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentmapCreateManyColmapInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ContentmapUpdateWithWhereUniqueWithoutColmapInputSchema),z.lazy(() => ContentmapUpdateWithWhereUniqueWithoutColmapInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ContentmapUpdateManyWithWhereWithoutColmapInputSchema),z.lazy(() => ContentmapUpdateManyWithWhereWithoutColmapInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ContentmapScalarWhereInputSchema),z.lazy(() => ContentmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SheetsCreateNestedOneWithoutContentInputSchema: z.ZodType<Prisma.SheetsCreateNestedOneWithoutContentInput> = z.object({
  create: z.union([ z.lazy(() => SheetsCreateWithoutContentInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutContentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SheetsCreateOrConnectWithoutContentInputSchema).optional(),
  connect: z.lazy(() => SheetsWhereUniqueInputSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const SheetsUpdateOneRequiredWithoutContentNestedInputSchema: z.ZodType<Prisma.SheetsUpdateOneRequiredWithoutContentNestedInput> = z.object({
  create: z.union([ z.lazy(() => SheetsCreateWithoutContentInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutContentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SheetsCreateOrConnectWithoutContentInputSchema).optional(),
  upsert: z.lazy(() => SheetsUpsertWithoutContentInputSchema).optional(),
  connect: z.lazy(() => SheetsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SheetsUpdateWithoutContentInputSchema),z.lazy(() => SheetsUncheckedUpdateWithoutContentInputSchema) ]).optional(),
}).strict();

export const ColmapCreateNestedOneWithoutContentmapInputSchema: z.ZodType<Prisma.ColmapCreateNestedOneWithoutContentmapInput> = z.object({
  create: z.union([ z.lazy(() => ColmapCreateWithoutContentmapInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutContentmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColmapCreateOrConnectWithoutContentmapInputSchema).optional(),
  connect: z.lazy(() => ColmapWhereUniqueInputSchema).optional()
}).strict();

export const RowmapCreateNestedOneWithoutContentmapInputSchema: z.ZodType<Prisma.RowmapCreateNestedOneWithoutContentmapInput> = z.object({
  create: z.union([ z.lazy(() => RowmapCreateWithoutContentmapInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutContentmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RowmapCreateOrConnectWithoutContentmapInputSchema).optional(),
  connect: z.lazy(() => RowmapWhereUniqueInputSchema).optional()
}).strict();

export const ColmapUpdateOneRequiredWithoutContentmapNestedInputSchema: z.ZodType<Prisma.ColmapUpdateOneRequiredWithoutContentmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColmapCreateWithoutContentmapInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutContentmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColmapCreateOrConnectWithoutContentmapInputSchema).optional(),
  upsert: z.lazy(() => ColmapUpsertWithoutContentmapInputSchema).optional(),
  connect: z.lazy(() => ColmapWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ColmapUpdateWithoutContentmapInputSchema),z.lazy(() => ColmapUncheckedUpdateWithoutContentmapInputSchema) ]).optional(),
}).strict();

export const RowmapUpdateOneRequiredWithoutContentmapNestedInputSchema: z.ZodType<Prisma.RowmapUpdateOneRequiredWithoutContentmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => RowmapCreateWithoutContentmapInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutContentmapInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RowmapCreateOrConnectWithoutContentmapInputSchema).optional(),
  upsert: z.lazy(() => RowmapUpsertWithoutContentmapInputSchema).optional(),
  connect: z.lazy(() => RowmapWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RowmapUpdateWithoutContentmapInputSchema),z.lazy(() => RowmapUncheckedUpdateWithoutContentmapInputSchema) ]).optional(),
}).strict();

export const ContentmapCreateNestedManyWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapCreateNestedManyWithoutRowmapInput> = z.object({
  create: z.union([ z.lazy(() => ContentmapCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapCreateWithoutRowmapInputSchema).array(),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentmapCreateOrConnectWithoutRowmapInputSchema),z.lazy(() => ContentmapCreateOrConnectWithoutRowmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentmapCreateManyRowmapInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ContentmapUncheckedCreateNestedManyWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedCreateNestedManyWithoutRowmapInput> = z.object({
  create: z.union([ z.lazy(() => ContentmapCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapCreateWithoutRowmapInputSchema).array(),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentmapCreateOrConnectWithoutRowmapInputSchema),z.lazy(() => ContentmapCreateOrConnectWithoutRowmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentmapCreateManyRowmapInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ContentmapUpdateManyWithoutRowmapNestedInputSchema: z.ZodType<Prisma.ContentmapUpdateManyWithoutRowmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContentmapCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapCreateWithoutRowmapInputSchema).array(),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentmapCreateOrConnectWithoutRowmapInputSchema),z.lazy(() => ContentmapCreateOrConnectWithoutRowmapInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ContentmapUpsertWithWhereUniqueWithoutRowmapInputSchema),z.lazy(() => ContentmapUpsertWithWhereUniqueWithoutRowmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentmapCreateManyRowmapInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ContentmapUpdateWithWhereUniqueWithoutRowmapInputSchema),z.lazy(() => ContentmapUpdateWithWhereUniqueWithoutRowmapInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ContentmapUpdateManyWithWhereWithoutRowmapInputSchema),z.lazy(() => ContentmapUpdateManyWithWhereWithoutRowmapInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ContentmapScalarWhereInputSchema),z.lazy(() => ContentmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ContentmapUncheckedUpdateManyWithoutRowmapNestedInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateManyWithoutRowmapNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContentmapCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapCreateWithoutRowmapInputSchema).array(),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentmapCreateOrConnectWithoutRowmapInputSchema),z.lazy(() => ContentmapCreateOrConnectWithoutRowmapInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ContentmapUpsertWithWhereUniqueWithoutRowmapInputSchema),z.lazy(() => ContentmapUpsertWithWhereUniqueWithoutRowmapInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentmapCreateManyRowmapInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ContentmapWhereUniqueInputSchema),z.lazy(() => ContentmapWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ContentmapUpdateWithWhereUniqueWithoutRowmapInputSchema),z.lazy(() => ContentmapUpdateWithWhereUniqueWithoutRowmapInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ContentmapUpdateManyWithWhereWithoutRowmapInputSchema),z.lazy(() => ContentmapUpdateManyWithWhereWithoutRowmapInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ContentmapScalarWhereInputSchema),z.lazy(() => ContentmapScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ContentCreateNestedManyWithoutSheetsInputSchema: z.ZodType<Prisma.ContentCreateNestedManyWithoutSheetsInput> = z.object({
  create: z.union([ z.lazy(() => ContentCreateWithoutSheetsInputSchema),z.lazy(() => ContentCreateWithoutSheetsInputSchema).array(),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => ContentCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentCreateManySheetsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ContentUncheckedCreateNestedManyWithoutSheetsInputSchema: z.ZodType<Prisma.ContentUncheckedCreateNestedManyWithoutSheetsInput> = z.object({
  create: z.union([ z.lazy(() => ContentCreateWithoutSheetsInputSchema),z.lazy(() => ContentCreateWithoutSheetsInputSchema).array(),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => ContentCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentCreateManySheetsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ContentUpdateManyWithoutSheetsNestedInputSchema: z.ZodType<Prisma.ContentUpdateManyWithoutSheetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContentCreateWithoutSheetsInputSchema),z.lazy(() => ContentCreateWithoutSheetsInputSchema).array(),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => ContentCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ContentUpsertWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => ContentUpsertWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentCreateManySheetsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ContentUpdateWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => ContentUpdateWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ContentUpdateManyWithWhereWithoutSheetsInputSchema),z.lazy(() => ContentUpdateManyWithWhereWithoutSheetsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ContentScalarWhereInputSchema),z.lazy(() => ContentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ContentUncheckedUpdateManyWithoutSheetsNestedInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateManyWithoutSheetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContentCreateWithoutSheetsInputSchema),z.lazy(() => ContentCreateWithoutSheetsInputSchema).array(),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContentCreateOrConnectWithoutSheetsInputSchema),z.lazy(() => ContentCreateOrConnectWithoutSheetsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ContentUpsertWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => ContentUpsertWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContentCreateManySheetsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ContentWhereUniqueInputSchema),z.lazy(() => ContentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ContentUpdateWithWhereUniqueWithoutSheetsInputSchema),z.lazy(() => ContentUpdateWithWhereUniqueWithoutSheetsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ContentUpdateManyWithWhereWithoutSheetsInputSchema),z.lazy(() => ContentUpdateManyWithWhereWithoutSheetsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ContentScalarWhereInputSchema),z.lazy(() => ContentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
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

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
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

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
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

export const ContentmapCreateWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapCreateWithoutColmapInput> = z.object({
  content: z.string().optional().nullable(),
  rowmap: z.lazy(() => RowmapCreateNestedOneWithoutContentmapInputSchema)
}).strict();

export const ContentmapUncheckedCreateWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedCreateWithoutColmapInput> = z.object({
  rowindex: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapCreateOrConnectWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapCreateOrConnectWithoutColmapInput> = z.object({
  where: z.lazy(() => ContentmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContentmapCreateWithoutColmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema) ]),
}).strict();

export const ContentmapCreateManyColmapInputEnvelopeSchema: z.ZodType<Prisma.ContentmapCreateManyColmapInputEnvelope> = z.object({
  data: z.lazy(() => ContentmapCreateManyColmapInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ContentmapUpsertWithWhereUniqueWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUpsertWithWhereUniqueWithoutColmapInput> = z.object({
  where: z.lazy(() => ContentmapWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ContentmapUpdateWithoutColmapInputSchema),z.lazy(() => ContentmapUncheckedUpdateWithoutColmapInputSchema) ]),
  create: z.union([ z.lazy(() => ContentmapCreateWithoutColmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutColmapInputSchema) ]),
}).strict();

export const ContentmapUpdateWithWhereUniqueWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUpdateWithWhereUniqueWithoutColmapInput> = z.object({
  where: z.lazy(() => ContentmapWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ContentmapUpdateWithoutColmapInputSchema),z.lazy(() => ContentmapUncheckedUpdateWithoutColmapInputSchema) ]),
}).strict();

export const ContentmapUpdateManyWithWhereWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUpdateManyWithWhereWithoutColmapInput> = z.object({
  where: z.lazy(() => ContentmapScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ContentmapUpdateManyMutationInputSchema),z.lazy(() => ContentmapUncheckedUpdateManyWithoutContentmapInputSchema) ]),
}).strict();

export const ContentmapScalarWhereInputSchema: z.ZodType<Prisma.ContentmapScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ContentmapScalarWhereInputSchema),z.lazy(() => ContentmapScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentmapScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentmapScalarWhereInputSchema),z.lazy(() => ContentmapScalarWhereInputSchema).array() ]).optional(),
  rowindex: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  colindex: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SheetsCreateWithoutContentInputSchema: z.ZodType<Prisma.SheetsCreateWithoutContentInput> = z.object({
  id: z.string(),
  rows: z.number(),
  cols: z.number()
}).strict();

export const SheetsUncheckedCreateWithoutContentInputSchema: z.ZodType<Prisma.SheetsUncheckedCreateWithoutContentInput> = z.object({
  id: z.string(),
  rows: z.number(),
  cols: z.number()
}).strict();

export const SheetsCreateOrConnectWithoutContentInputSchema: z.ZodType<Prisma.SheetsCreateOrConnectWithoutContentInput> = z.object({
  where: z.lazy(() => SheetsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SheetsCreateWithoutContentInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutContentInputSchema) ]),
}).strict();

export const SheetsUpsertWithoutContentInputSchema: z.ZodType<Prisma.SheetsUpsertWithoutContentInput> = z.object({
  update: z.union([ z.lazy(() => SheetsUpdateWithoutContentInputSchema),z.lazy(() => SheetsUncheckedUpdateWithoutContentInputSchema) ]),
  create: z.union([ z.lazy(() => SheetsCreateWithoutContentInputSchema),z.lazy(() => SheetsUncheckedCreateWithoutContentInputSchema) ]),
}).strict();

export const SheetsUpdateWithoutContentInputSchema: z.ZodType<Prisma.SheetsUpdateWithoutContentInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SheetsUncheckedUpdateWithoutContentInputSchema: z.ZodType<Prisma.SheetsUncheckedUpdateWithoutContentInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rows: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cols: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ColmapCreateWithoutContentmapInputSchema: z.ZodType<Prisma.ColmapCreateWithoutContentmapInput> = z.object({
  id: z.string(),
  pos: z.number().optional().nullable()
}).strict();

export const ColmapUncheckedCreateWithoutContentmapInputSchema: z.ZodType<Prisma.ColmapUncheckedCreateWithoutContentmapInput> = z.object({
  id: z.string(),
  pos: z.number().optional().nullable()
}).strict();

export const ColmapCreateOrConnectWithoutContentmapInputSchema: z.ZodType<Prisma.ColmapCreateOrConnectWithoutContentmapInput> = z.object({
  where: z.lazy(() => ColmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ColmapCreateWithoutContentmapInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutContentmapInputSchema) ]),
}).strict();

export const RowmapCreateWithoutContentmapInputSchema: z.ZodType<Prisma.RowmapCreateWithoutContentmapInput> = z.object({
  id: z.string(),
  pos: z.number().optional().nullable()
}).strict();

export const RowmapUncheckedCreateWithoutContentmapInputSchema: z.ZodType<Prisma.RowmapUncheckedCreateWithoutContentmapInput> = z.object({
  id: z.string(),
  pos: z.number().optional().nullable()
}).strict();

export const RowmapCreateOrConnectWithoutContentmapInputSchema: z.ZodType<Prisma.RowmapCreateOrConnectWithoutContentmapInput> = z.object({
  where: z.lazy(() => RowmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RowmapCreateWithoutContentmapInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutContentmapInputSchema) ]),
}).strict();

export const ColmapUpsertWithoutContentmapInputSchema: z.ZodType<Prisma.ColmapUpsertWithoutContentmapInput> = z.object({
  update: z.union([ z.lazy(() => ColmapUpdateWithoutContentmapInputSchema),z.lazy(() => ColmapUncheckedUpdateWithoutContentmapInputSchema) ]),
  create: z.union([ z.lazy(() => ColmapCreateWithoutContentmapInputSchema),z.lazy(() => ColmapUncheckedCreateWithoutContentmapInputSchema) ]),
}).strict();

export const ColmapUpdateWithoutContentmapInputSchema: z.ZodType<Prisma.ColmapUpdateWithoutContentmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ColmapUncheckedUpdateWithoutContentmapInputSchema: z.ZodType<Prisma.ColmapUncheckedUpdateWithoutContentmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RowmapUpsertWithoutContentmapInputSchema: z.ZodType<Prisma.RowmapUpsertWithoutContentmapInput> = z.object({
  update: z.union([ z.lazy(() => RowmapUpdateWithoutContentmapInputSchema),z.lazy(() => RowmapUncheckedUpdateWithoutContentmapInputSchema) ]),
  create: z.union([ z.lazy(() => RowmapCreateWithoutContentmapInputSchema),z.lazy(() => RowmapUncheckedCreateWithoutContentmapInputSchema) ]),
}).strict();

export const RowmapUpdateWithoutContentmapInputSchema: z.ZodType<Prisma.RowmapUpdateWithoutContentmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RowmapUncheckedUpdateWithoutContentmapInputSchema: z.ZodType<Prisma.RowmapUncheckedUpdateWithoutContentmapInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pos: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapCreateWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapCreateWithoutRowmapInput> = z.object({
  content: z.string().optional().nullable(),
  colmap: z.lazy(() => ColmapCreateNestedOneWithoutContentmapInputSchema)
}).strict();

export const ContentmapUncheckedCreateWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedCreateWithoutRowmapInput> = z.object({
  colindex: z.string(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapCreateOrConnectWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapCreateOrConnectWithoutRowmapInput> = z.object({
  where: z.lazy(() => ContentmapWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContentmapCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema) ]),
}).strict();

export const ContentmapCreateManyRowmapInputEnvelopeSchema: z.ZodType<Prisma.ContentmapCreateManyRowmapInputEnvelope> = z.object({
  data: z.lazy(() => ContentmapCreateManyRowmapInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ContentmapUpsertWithWhereUniqueWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapUpsertWithWhereUniqueWithoutRowmapInput> = z.object({
  where: z.lazy(() => ContentmapWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ContentmapUpdateWithoutRowmapInputSchema),z.lazy(() => ContentmapUncheckedUpdateWithoutRowmapInputSchema) ]),
  create: z.union([ z.lazy(() => ContentmapCreateWithoutRowmapInputSchema),z.lazy(() => ContentmapUncheckedCreateWithoutRowmapInputSchema) ]),
}).strict();

export const ContentmapUpdateWithWhereUniqueWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapUpdateWithWhereUniqueWithoutRowmapInput> = z.object({
  where: z.lazy(() => ContentmapWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ContentmapUpdateWithoutRowmapInputSchema),z.lazy(() => ContentmapUncheckedUpdateWithoutRowmapInputSchema) ]),
}).strict();

export const ContentmapUpdateManyWithWhereWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapUpdateManyWithWhereWithoutRowmapInput> = z.object({
  where: z.lazy(() => ContentmapScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ContentmapUpdateManyMutationInputSchema),z.lazy(() => ContentmapUncheckedUpdateManyWithoutContentmapInputSchema) ]),
}).strict();

export const ContentCreateWithoutSheetsInputSchema: z.ZodType<Prisma.ContentCreateWithoutSheetsInput> = z.object({
  id: z.string(),
  row: z.number(),
  col: z.number(),
  content: z.string().optional().nullable()
}).strict();

export const ContentUncheckedCreateWithoutSheetsInputSchema: z.ZodType<Prisma.ContentUncheckedCreateWithoutSheetsInput> = z.object({
  id: z.string(),
  row: z.number(),
  col: z.number(),
  content: z.string().optional().nullable()
}).strict();

export const ContentCreateOrConnectWithoutSheetsInputSchema: z.ZodType<Prisma.ContentCreateOrConnectWithoutSheetsInput> = z.object({
  where: z.lazy(() => ContentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContentCreateWithoutSheetsInputSchema),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema) ]),
}).strict();

export const ContentCreateManySheetsInputEnvelopeSchema: z.ZodType<Prisma.ContentCreateManySheetsInputEnvelope> = z.object({
  data: z.lazy(() => ContentCreateManySheetsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ContentUpsertWithWhereUniqueWithoutSheetsInputSchema: z.ZodType<Prisma.ContentUpsertWithWhereUniqueWithoutSheetsInput> = z.object({
  where: z.lazy(() => ContentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ContentUpdateWithoutSheetsInputSchema),z.lazy(() => ContentUncheckedUpdateWithoutSheetsInputSchema) ]),
  create: z.union([ z.lazy(() => ContentCreateWithoutSheetsInputSchema),z.lazy(() => ContentUncheckedCreateWithoutSheetsInputSchema) ]),
}).strict();

export const ContentUpdateWithWhereUniqueWithoutSheetsInputSchema: z.ZodType<Prisma.ContentUpdateWithWhereUniqueWithoutSheetsInput> = z.object({
  where: z.lazy(() => ContentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ContentUpdateWithoutSheetsInputSchema),z.lazy(() => ContentUncheckedUpdateWithoutSheetsInputSchema) ]),
}).strict();

export const ContentUpdateManyWithWhereWithoutSheetsInputSchema: z.ZodType<Prisma.ContentUpdateManyWithWhereWithoutSheetsInput> = z.object({
  where: z.lazy(() => ContentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ContentUpdateManyMutationInputSchema),z.lazy(() => ContentUncheckedUpdateManyWithoutContentInputSchema) ]),
}).strict();

export const ContentScalarWhereInputSchema: z.ZodType<Prisma.ContentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ContentScalarWhereInputSchema),z.lazy(() => ContentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentScalarWhereInputSchema),z.lazy(() => ContentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sheet_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  row: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  col: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ContentmapCreateManyColmapInputSchema: z.ZodType<Prisma.ContentmapCreateManyColmapInput> = z.object({
  rowindex: z.string().uuid(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapUpdateWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUpdateWithoutColmapInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rowmap: z.lazy(() => RowmapUpdateOneRequiredWithoutContentmapNestedInputSchema).optional()
}).strict();

export const ContentmapUncheckedUpdateWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateWithoutColmapInput> = z.object({
  rowindex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapUncheckedUpdateManyWithoutContentmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateManyWithoutContentmapInput> = z.object({
  rowindex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapCreateManyRowmapInputSchema: z.ZodType<Prisma.ContentmapCreateManyRowmapInput> = z.object({
  colindex: z.string().uuid(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapUpdateWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapUpdateWithoutRowmapInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colmap: z.lazy(() => ColmapUpdateOneRequiredWithoutContentmapNestedInputSchema).optional()
}).strict();

export const ContentmapUncheckedUpdateWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateWithoutRowmapInput> = z.object({
  colindex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentCreateManySheetsInputSchema: z.ZodType<Prisma.ContentCreateManySheetsInput> = z.object({
  id: z.string(),
  row: z.number().int().gte(-32768).lte(32767),
  col: z.number().int().gte(-32768).lte(32767),
  content: z.string().optional().nullable()
}).strict();

export const ContentUpdateWithoutSheetsInputSchema: z.ZodType<Prisma.ContentUpdateWithoutSheetsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  col: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentUncheckedUpdateWithoutSheetsInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateWithoutSheetsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  col: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentUncheckedUpdateManyWithoutContentInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateManyWithoutContentInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  row: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  col: z.union([ z.number().int().gte(-32768).lte(32767),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

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

export const ContentFindFirstArgsSchema: z.ZodType<Prisma.ContentFindFirstArgs> = z.object({
  select: ContentSelectSchema.optional(),
  include: ContentIncludeSchema.optional(),
  where: ContentWhereInputSchema.optional(),
  orderBy: z.union([ ContentOrderByWithRelationInputSchema.array(),ContentOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ContentScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ContentFindFirstArgs>

export const ContentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ContentFindFirstOrThrowArgs> = z.object({
  select: ContentSelectSchema.optional(),
  include: ContentIncludeSchema.optional(),
  where: ContentWhereInputSchema.optional(),
  orderBy: z.union([ ContentOrderByWithRelationInputSchema.array(),ContentOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ContentScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ContentFindFirstOrThrowArgs>

export const ContentFindManyArgsSchema: z.ZodType<Prisma.ContentFindManyArgs> = z.object({
  select: ContentSelectSchema.optional(),
  include: ContentIncludeSchema.optional(),
  where: ContentWhereInputSchema.optional(),
  orderBy: z.union([ ContentOrderByWithRelationInputSchema.array(),ContentOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ContentScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ContentFindManyArgs>

export const ContentAggregateArgsSchema: z.ZodType<Prisma.ContentAggregateArgs> = z.object({
  where: ContentWhereInputSchema.optional(),
  orderBy: z.union([ ContentOrderByWithRelationInputSchema.array(),ContentOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ContentAggregateArgs>

export const ContentGroupByArgsSchema: z.ZodType<Prisma.ContentGroupByArgs> = z.object({
  where: ContentWhereInputSchema.optional(),
  orderBy: z.union([ ContentOrderByWithAggregationInputSchema.array(),ContentOrderByWithAggregationInputSchema ]).optional(),
  by: ContentScalarFieldEnumSchema.array(),
  having: ContentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ContentGroupByArgs>

export const ContentFindUniqueArgsSchema: z.ZodType<Prisma.ContentFindUniqueArgs> = z.object({
  select: ContentSelectSchema.optional(),
  include: ContentIncludeSchema.optional(),
  where: ContentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ContentFindUniqueArgs>

export const ContentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ContentFindUniqueOrThrowArgs> = z.object({
  select: ContentSelectSchema.optional(),
  include: ContentIncludeSchema.optional(),
  where: ContentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ContentFindUniqueOrThrowArgs>

export const ContentmapFindFirstArgsSchema: z.ZodType<Prisma.ContentmapFindFirstArgs> = z.object({
  select: ContentmapSelectSchema.optional(),
  include: ContentmapIncludeSchema.optional(),
  where: ContentmapWhereInputSchema.optional(),
  orderBy: z.union([ ContentmapOrderByWithRelationInputSchema.array(),ContentmapOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ContentmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ContentmapFindFirstArgs>

export const ContentmapFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ContentmapFindFirstOrThrowArgs> = z.object({
  select: ContentmapSelectSchema.optional(),
  include: ContentmapIncludeSchema.optional(),
  where: ContentmapWhereInputSchema.optional(),
  orderBy: z.union([ ContentmapOrderByWithRelationInputSchema.array(),ContentmapOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ContentmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ContentmapFindFirstOrThrowArgs>

export const ContentmapFindManyArgsSchema: z.ZodType<Prisma.ContentmapFindManyArgs> = z.object({
  select: ContentmapSelectSchema.optional(),
  include: ContentmapIncludeSchema.optional(),
  where: ContentmapWhereInputSchema.optional(),
  orderBy: z.union([ ContentmapOrderByWithRelationInputSchema.array(),ContentmapOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ContentmapScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ContentmapFindManyArgs>

export const ContentmapAggregateArgsSchema: z.ZodType<Prisma.ContentmapAggregateArgs> = z.object({
  where: ContentmapWhereInputSchema.optional(),
  orderBy: z.union([ ContentmapOrderByWithRelationInputSchema.array(),ContentmapOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentmapWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ContentmapAggregateArgs>

export const ContentmapGroupByArgsSchema: z.ZodType<Prisma.ContentmapGroupByArgs> = z.object({
  where: ContentmapWhereInputSchema.optional(),
  orderBy: z.union([ ContentmapOrderByWithAggregationInputSchema.array(),ContentmapOrderByWithAggregationInputSchema ]).optional(),
  by: ContentmapScalarFieldEnumSchema.array(),
  having: ContentmapScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ContentmapGroupByArgs>

export const ContentmapFindUniqueArgsSchema: z.ZodType<Prisma.ContentmapFindUniqueArgs> = z.object({
  select: ContentmapSelectSchema.optional(),
  include: ContentmapIncludeSchema.optional(),
  where: ContentmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ContentmapFindUniqueArgs>

export const ContentmapFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ContentmapFindUniqueOrThrowArgs> = z.object({
  select: ContentmapSelectSchema.optional(),
  include: ContentmapIncludeSchema.optional(),
  where: ContentmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ContentmapFindUniqueOrThrowArgs>

export const ItemsFindFirstArgsSchema: z.ZodType<Prisma.ItemsFindFirstArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ItemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ItemsFindFirstOrThrowArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ItemsFindManyArgsSchema: z.ZodType<Prisma.ItemsFindManyArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ItemsAggregateArgsSchema: z.ZodType<Prisma.ItemsAggregateArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ItemsGroupByArgsSchema: z.ZodType<Prisma.ItemsGroupByArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithAggregationInputSchema.array(),ItemsOrderByWithAggregationInputSchema ]).optional(),
  by: ItemsScalarFieldEnumSchema.array(),
  having: ItemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ItemsFindUniqueArgsSchema: z.ZodType<Prisma.ItemsFindUniqueArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ItemsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ItemsFindUniqueOrThrowArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

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

export const ContentCreateArgsSchema: z.ZodType<Prisma.ContentCreateArgs> = z.object({
  select: ContentSelectSchema.optional(),
  include: ContentIncludeSchema.optional(),
  data: z.union([ ContentCreateInputSchema,ContentUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ContentCreateArgs>

export const ContentUpsertArgsSchema: z.ZodType<Prisma.ContentUpsertArgs> = z.object({
  select: ContentSelectSchema.optional(),
  include: ContentIncludeSchema.optional(),
  where: ContentWhereUniqueInputSchema,
  create: z.union([ ContentCreateInputSchema,ContentUncheckedCreateInputSchema ]),
  update: z.union([ ContentUpdateInputSchema,ContentUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ContentUpsertArgs>

export const ContentCreateManyArgsSchema: z.ZodType<Prisma.ContentCreateManyArgs> = z.object({
  data: ContentCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ContentCreateManyArgs>

export const ContentDeleteArgsSchema: z.ZodType<Prisma.ContentDeleteArgs> = z.object({
  select: ContentSelectSchema.optional(),
  include: ContentIncludeSchema.optional(),
  where: ContentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ContentDeleteArgs>

export const ContentUpdateArgsSchema: z.ZodType<Prisma.ContentUpdateArgs> = z.object({
  select: ContentSelectSchema.optional(),
  include: ContentIncludeSchema.optional(),
  data: z.union([ ContentUpdateInputSchema,ContentUncheckedUpdateInputSchema ]),
  where: ContentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ContentUpdateArgs>

export const ContentUpdateManyArgsSchema: z.ZodType<Prisma.ContentUpdateManyArgs> = z.object({
  data: z.union([ ContentUpdateManyMutationInputSchema,ContentUncheckedUpdateManyInputSchema ]),
  where: ContentWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ContentUpdateManyArgs>

export const ContentDeleteManyArgsSchema: z.ZodType<Prisma.ContentDeleteManyArgs> = z.object({
  where: ContentWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ContentDeleteManyArgs>

export const ContentmapCreateArgsSchema: z.ZodType<Prisma.ContentmapCreateArgs> = z.object({
  select: ContentmapSelectSchema.optional(),
  include: ContentmapIncludeSchema.optional(),
  data: z.union([ ContentmapCreateInputSchema,ContentmapUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ContentmapCreateArgs>

export const ContentmapUpsertArgsSchema: z.ZodType<Prisma.ContentmapUpsertArgs> = z.object({
  select: ContentmapSelectSchema.optional(),
  include: ContentmapIncludeSchema.optional(),
  where: ContentmapWhereUniqueInputSchema,
  create: z.union([ ContentmapCreateInputSchema,ContentmapUncheckedCreateInputSchema ]),
  update: z.union([ ContentmapUpdateInputSchema,ContentmapUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ContentmapUpsertArgs>

export const ContentmapCreateManyArgsSchema: z.ZodType<Prisma.ContentmapCreateManyArgs> = z.object({
  data: ContentmapCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ContentmapCreateManyArgs>

export const ContentmapDeleteArgsSchema: z.ZodType<Prisma.ContentmapDeleteArgs> = z.object({
  select: ContentmapSelectSchema.optional(),
  include: ContentmapIncludeSchema.optional(),
  where: ContentmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ContentmapDeleteArgs>

export const ContentmapUpdateArgsSchema: z.ZodType<Prisma.ContentmapUpdateArgs> = z.object({
  select: ContentmapSelectSchema.optional(),
  include: ContentmapIncludeSchema.optional(),
  data: z.union([ ContentmapUpdateInputSchema,ContentmapUncheckedUpdateInputSchema ]),
  where: ContentmapWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ContentmapUpdateArgs>

export const ContentmapUpdateManyArgsSchema: z.ZodType<Prisma.ContentmapUpdateManyArgs> = z.object({
  data: z.union([ ContentmapUpdateManyMutationInputSchema,ContentmapUncheckedUpdateManyInputSchema ]),
  where: ContentmapWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ContentmapUpdateManyArgs>

export const ContentmapDeleteManyArgsSchema: z.ZodType<Prisma.ContentmapDeleteManyArgs> = z.object({
  where: ContentmapWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ContentmapDeleteManyArgs>

export const ItemsCreateArgsSchema: z.ZodType<Prisma.ItemsCreateArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  data: z.union([ ItemsCreateInputSchema,ItemsUncheckedCreateInputSchema ]),
}).strict() 

export const ItemsUpsertArgsSchema: z.ZodType<Prisma.ItemsUpsertArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
  create: z.union([ ItemsCreateInputSchema,ItemsUncheckedCreateInputSchema ]),
  update: z.union([ ItemsUpdateInputSchema,ItemsUncheckedUpdateInputSchema ]),
}).strict() 

export const ItemsCreateManyArgsSchema: z.ZodType<Prisma.ItemsCreateManyArgs> = z.object({
  data: ItemsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const ItemsDeleteArgsSchema: z.ZodType<Prisma.ItemsDeleteArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ItemsUpdateArgsSchema: z.ZodType<Prisma.ItemsUpdateArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  data: z.union([ ItemsUpdateInputSchema,ItemsUncheckedUpdateInputSchema ]),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ItemsUpdateManyArgsSchema: z.ZodType<Prisma.ItemsUpdateManyArgs> = z.object({
  data: z.union([ ItemsUpdateManyMutationInputSchema,ItemsUncheckedUpdateManyInputSchema ]),
  where: ItemsWhereInputSchema.optional(),
}).strict() 

export const ItemsDeleteManyArgsSchema: z.ZodType<Prisma.ItemsDeleteManyArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
}).strict() 

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

interface ColmapGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ColmapArgs
  readonly type: Omit<Prisma.ColmapGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface ContentGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ContentArgs
  readonly type: Omit<Prisma.ContentGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface ContentmapGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ContentmapArgs
  readonly type: Omit<Prisma.ContentmapGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface ItemsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ItemsArgs
  readonly type: Omit<Prisma.ItemsGetPayload<this['_A']>, "Please either choose `select` or `include`">
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
  colmap: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "pos",
        "INT4"
      ]
    ]),
    relations: [
      new Relation("contentmap", "", "", "contentmap", "ColmapToContentmap", "many"),
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
  content: {
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
        "row",
        "INT2"
      ],
      [
        "col",
        "INT2"
      ],
      [
        "content",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("sheets", "sheet_id", "id", "sheets", "ContentToSheets", "one"),
    ],
    modelSchema: (ContentCreateInputSchema as any)
      .partial()
      .or((ContentUncheckedCreateInputSchema as any).partial()),
    createSchema: ContentCreateArgsSchema,
    createManySchema: ContentCreateManyArgsSchema,
    findUniqueSchema: ContentFindUniqueArgsSchema,
    findSchema: ContentFindFirstArgsSchema,
    updateSchema: ContentUpdateArgsSchema,
    updateManySchema: ContentUpdateManyArgsSchema,
    upsertSchema: ContentUpsertArgsSchema,
    deleteSchema: ContentDeleteArgsSchema,
    deleteManySchema: ContentDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ContentUncheckedCreateInputSchema>,
    Prisma.ContentCreateArgs['data'],
    Prisma.ContentUpdateArgs['data'],
    Prisma.ContentFindFirstArgs['select'],
    Prisma.ContentFindFirstArgs['where'],
    Prisma.ContentFindUniqueArgs['where'],
    Omit<Prisma.ContentInclude, '_count'>,
    Prisma.ContentFindFirstArgs['orderBy'],
    Prisma.ContentScalarFieldEnum,
    ContentGetPayload
  >,
  contentmap: {
    fields: new Map([
      [
        "rowindex",
        "UUID"
      ],
      [
        "colindex",
        "UUID"
      ],
      [
        "content",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("colmap", "colindex", "id", "colmap", "ColmapToContentmap", "one"),
      new Relation("rowmap", "rowindex", "id", "rowmap", "ContentmapToRowmap", "one"),
    ],
    modelSchema: (ContentmapCreateInputSchema as any)
      .partial()
      .or((ContentmapUncheckedCreateInputSchema as any).partial()),
    createSchema: ContentmapCreateArgsSchema,
    createManySchema: ContentmapCreateManyArgsSchema,
    findUniqueSchema: ContentmapFindUniqueArgsSchema,
    findSchema: ContentmapFindFirstArgsSchema,
    updateSchema: ContentmapUpdateArgsSchema,
    updateManySchema: ContentmapUpdateManyArgsSchema,
    upsertSchema: ContentmapUpsertArgsSchema,
    deleteSchema: ContentmapDeleteArgsSchema,
    deleteManySchema: ContentmapDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ContentmapUncheckedCreateInputSchema>,
    Prisma.ContentmapCreateArgs['data'],
    Prisma.ContentmapUpdateArgs['data'],
    Prisma.ContentmapFindFirstArgs['select'],
    Prisma.ContentmapFindFirstArgs['where'],
    Prisma.ContentmapFindUniqueArgs['where'],
    Omit<Prisma.ContentmapInclude, '_count'>,
    Prisma.ContentmapFindFirstArgs['orderBy'],
    Prisma.ContentmapScalarFieldEnum,
    ContentmapGetPayload
  >,
  items: {
    fields: new Map([
      [
        "value",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ItemsCreateInputSchema as any)
      .partial()
      .or((ItemsUncheckedCreateInputSchema as any).partial()),
    createSchema: ItemsCreateArgsSchema,
    createManySchema: ItemsCreateManyArgsSchema,
    findUniqueSchema: ItemsFindUniqueArgsSchema,
    findSchema: ItemsFindFirstArgsSchema,
    updateSchema: ItemsUpdateArgsSchema,
    updateManySchema: ItemsUpdateManyArgsSchema,
    upsertSchema: ItemsUpsertArgsSchema,
    deleteSchema: ItemsDeleteArgsSchema,
    deleteManySchema: ItemsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ItemsUncheckedCreateInputSchema>,
    Prisma.ItemsCreateArgs['data'],
    Prisma.ItemsUpdateArgs['data'],
    Prisma.ItemsFindFirstArgs['select'],
    Prisma.ItemsFindFirstArgs['where'],
    Prisma.ItemsFindUniqueArgs['where'],
    never,
    Prisma.ItemsFindFirstArgs['orderBy'],
    Prisma.ItemsScalarFieldEnum,
    ItemsGetPayload
  >,
  rowmap: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "pos",
        "INT4"
      ]
    ]),
    relations: [
      new Relation("contentmap", "", "", "contentmap", "ContentmapToRowmap", "many"),
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
      ]
    ]),
    relations: [
      new Relation("content", "", "", "content", "ContentToSheets", "many"),
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
