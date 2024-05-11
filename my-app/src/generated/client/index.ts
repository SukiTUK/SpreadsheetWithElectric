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

export const ContentmapScalarFieldEnumSchema = z.enum(['rowIndex','colIndex','content']);

export const ItemsScalarFieldEnumSchema = z.enum(['value']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const RowmapScalarFieldEnumSchema = z.enum(['id','pos']);

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
// CONTENTMAP SCHEMA
/////////////////////////////////////////

export const ContentmapSchema = z.object({
  rowIndex: z.string().uuid(),
  colIndex: z.string().uuid(),
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
  rowIndex: z.boolean().optional(),
  colIndex: z.boolean().optional(),
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

export const ContentmapWhereInputSchema: z.ZodType<Prisma.ContentmapWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ContentmapWhereInputSchema),z.lazy(() => ContentmapWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentmapWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentmapWhereInputSchema),z.lazy(() => ContentmapWhereInputSchema).array() ]).optional(),
  rowIndex: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  colIndex: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  colmap: z.union([ z.lazy(() => ColmapRelationFilterSchema),z.lazy(() => ColmapWhereInputSchema) ]).optional(),
  rowmap: z.union([ z.lazy(() => RowmapRelationFilterSchema),z.lazy(() => RowmapWhereInputSchema) ]).optional(),
}).strict();

export const ContentmapOrderByWithRelationInputSchema: z.ZodType<Prisma.ContentmapOrderByWithRelationInput> = z.object({
  rowIndex: z.lazy(() => SortOrderSchema).optional(),
  colIndex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  colmap: z.lazy(() => ColmapOrderByWithRelationInputSchema).optional(),
  rowmap: z.lazy(() => RowmapOrderByWithRelationInputSchema).optional()
}).strict();

export const ContentmapWhereUniqueInputSchema: z.ZodType<Prisma.ContentmapWhereUniqueInput> = z.object({
  rowIndex_colIndex: z.lazy(() => ContentmapRowIndexColIndexCompoundUniqueInputSchema).optional()
}).strict();

export const ContentmapOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContentmapOrderByWithAggregationInput> = z.object({
  rowIndex: z.lazy(() => SortOrderSchema).optional(),
  colIndex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ContentmapCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ContentmapMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ContentmapMinOrderByAggregateInputSchema).optional()
}).strict();

export const ContentmapScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContentmapScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema),z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema),z.lazy(() => ContentmapScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  rowIndex: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  colIndex: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
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

export const ContentmapCreateInputSchema: z.ZodType<Prisma.ContentmapCreateInput> = z.object({
  content: z.string().optional().nullable(),
  colmap: z.lazy(() => ColmapCreateNestedOneWithoutContentmapInputSchema),
  rowmap: z.lazy(() => RowmapCreateNestedOneWithoutContentmapInputSchema)
}).strict();

export const ContentmapUncheckedCreateInputSchema: z.ZodType<Prisma.ContentmapUncheckedCreateInput> = z.object({
  rowIndex: z.string().uuid(),
  colIndex: z.string().uuid(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapUpdateInputSchema: z.ZodType<Prisma.ContentmapUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colmap: z.lazy(() => ColmapUpdateOneRequiredWithoutContentmapNestedInputSchema).optional(),
  rowmap: z.lazy(() => RowmapUpdateOneRequiredWithoutContentmapNestedInputSchema).optional()
}).strict();

export const ContentmapUncheckedUpdateInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateInput> = z.object({
  rowIndex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colIndex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapCreateManyInputSchema: z.ZodType<Prisma.ContentmapCreateManyInput> = z.object({
  rowIndex: z.string().uuid(),
  colIndex: z.string().uuid(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapUpdateManyMutationInputSchema: z.ZodType<Prisma.ContentmapUpdateManyMutationInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateManyInput> = z.object({
  rowIndex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colIndex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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

export const ContentmapRowIndexColIndexCompoundUniqueInputSchema: z.ZodType<Prisma.ContentmapRowIndexColIndexCompoundUniqueInput> = z.object({
  rowIndex: z.string(),
  colIndex: z.string()
}).strict();

export const ContentmapCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContentmapCountOrderByAggregateInput> = z.object({
  rowIndex: z.lazy(() => SortOrderSchema).optional(),
  colIndex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentmapMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContentmapMaxOrderByAggregateInput> = z.object({
  rowIndex: z.lazy(() => SortOrderSchema).optional(),
  colIndex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContentmapMinOrderByAggregateInputSchema: z.ZodType<Prisma.ContentmapMinOrderByAggregateInput> = z.object({
  rowIndex: z.lazy(() => SortOrderSchema).optional(),
  colIndex: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional()
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

export const ItemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsCountOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMaxOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMinOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
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

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
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

export const ContentmapCreateWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapCreateWithoutColmapInput> = z.object({
  content: z.string().optional().nullable(),
  rowmap: z.lazy(() => RowmapCreateNestedOneWithoutContentmapInputSchema)
}).strict();

export const ContentmapUncheckedCreateWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedCreateWithoutColmapInput> = z.object({
  rowIndex: z.string(),
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
  rowIndex: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  colIndex: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
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
  colIndex: z.string(),
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

export const ContentmapCreateManyColmapInputSchema: z.ZodType<Prisma.ContentmapCreateManyColmapInput> = z.object({
  rowIndex: z.string().uuid(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapUpdateWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUpdateWithoutColmapInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rowmap: z.lazy(() => RowmapUpdateOneRequiredWithoutContentmapNestedInputSchema).optional()
}).strict();

export const ContentmapUncheckedUpdateWithoutColmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateWithoutColmapInput> = z.object({
  rowIndex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapUncheckedUpdateManyWithoutContentmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateManyWithoutContentmapInput> = z.object({
  rowIndex: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ContentmapCreateManyRowmapInputSchema: z.ZodType<Prisma.ContentmapCreateManyRowmapInput> = z.object({
  colIndex: z.string().uuid(),
  content: z.string().optional().nullable()
}).strict();

export const ContentmapUpdateWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapUpdateWithoutRowmapInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  colmap: z.lazy(() => ColmapUpdateOneRequiredWithoutContentmapNestedInputSchema).optional()
}).strict();

export const ContentmapUncheckedUpdateWithoutRowmapInputSchema: z.ZodType<Prisma.ContentmapUncheckedUpdateWithoutRowmapInput> = z.object({
  colIndex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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

interface ColmapGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ColmapArgs
  readonly type: Omit<Prisma.ColmapGetPayload<this['_A']>, "Please either choose `select` or `include`">
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
  contentmap: {
    fields: new Map([
      [
        "rowIndex",
        "UUID"
      ],
      [
        "colIndex",
        "UUID"
      ],
      [
        "content",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("colmap", "colIndex", "id", "colmap", "ColmapToContentmap", "one"),
      new Relation("rowmap", "rowIndex", "id", "rowmap", "ContentmapToRowmap", "one"),
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
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
