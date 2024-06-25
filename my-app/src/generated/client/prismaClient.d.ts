
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Cellmap
 * 
 */
export type Cellmap = {
  id: string
  sheet_id: string
  row_id: string
  col_id: string
  content: string | null
}

/**
 * Model Colmap
 * 
 */
export type Colmap = {
  id: string
  sheet_id: string
  startmarker: string
  endmarker: string
}

/**
 * Model Rowmap
 * 
 */
export type Rowmap = {
  id: string
  sheet_id: string
  startmarker: string
  endmarker: string
}

/**
 * Model Sheets
 * 
 */
export type Sheets = {
  id: string
  /**
   * @zod.number.int().gte(-32768).lte(32767)
   */
  rows: number
  /**
   * @zod.number.int().gte(-32768).lte(32767)
   */
  cols: number
  startrow: string | null
  endrow: string | null
  startrol: string | null
  endrol: string | null
  created_at: Date
  title: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cellmaps
 * const cellmaps = await prisma.cellmap.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cellmaps
   * const cellmaps = await prisma.cellmap.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.cellmap`: Exposes CRUD operations for the **Cellmap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cellmaps
    * const cellmaps = await prisma.cellmap.findMany()
    * ```
    */
  get cellmap(): Prisma.CellmapDelegate<GlobalReject>;

  /**
   * `prisma.colmap`: Exposes CRUD operations for the **Colmap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colmaps
    * const colmaps = await prisma.colmap.findMany()
    * ```
    */
  get colmap(): Prisma.ColmapDelegate<GlobalReject>;

  /**
   * `prisma.rowmap`: Exposes CRUD operations for the **Rowmap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rowmaps
    * const rowmaps = await prisma.rowmap.findMany()
    * ```
    */
  get rowmap(): Prisma.RowmapDelegate<GlobalReject>;

  /**
   * `prisma.sheets`: Exposes CRUD operations for the **Sheets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheets
    * const sheets = await prisma.sheets.findMany()
    * ```
    */
  get sheets(): Prisma.SheetsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Cellmap: 'Cellmap',
    Colmap: 'Colmap',
    Rowmap: 'Rowmap',
    Sheets: 'Sheets'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ColmapCountOutputType
   */


  export type ColmapCountOutputType = {
    cellmap: number
  }

  export type ColmapCountOutputTypeSelect = {
    cellmap?: boolean
  }

  export type ColmapCountOutputTypeGetPayload<S extends boolean | null | undefined | ColmapCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ColmapCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ColmapCountOutputTypeArgs)
    ? ColmapCountOutputType 
    : S extends { select: any } & (ColmapCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ColmapCountOutputType ? ColmapCountOutputType[P] : never
  } 
      : ColmapCountOutputType




  // Custom InputTypes

  /**
   * ColmapCountOutputType without action
   */
  export type ColmapCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ColmapCountOutputType
     * 
    **/
    select?: ColmapCountOutputTypeSelect | null
  }



  /**
   * Count Type RowmapCountOutputType
   */


  export type RowmapCountOutputType = {
    cellmap: number
  }

  export type RowmapCountOutputTypeSelect = {
    cellmap?: boolean
  }

  export type RowmapCountOutputTypeGetPayload<S extends boolean | null | undefined | RowmapCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RowmapCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RowmapCountOutputTypeArgs)
    ? RowmapCountOutputType 
    : S extends { select: any } & (RowmapCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RowmapCountOutputType ? RowmapCountOutputType[P] : never
  } 
      : RowmapCountOutputType




  // Custom InputTypes

  /**
   * RowmapCountOutputType without action
   */
  export type RowmapCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RowmapCountOutputType
     * 
    **/
    select?: RowmapCountOutputTypeSelect | null
  }



  /**
   * Count Type SheetsCountOutputType
   */


  export type SheetsCountOutputType = {
    cellmap: number
    colmap: number
    rowmap: number
  }

  export type SheetsCountOutputTypeSelect = {
    cellmap?: boolean
    colmap?: boolean
    rowmap?: boolean
  }

  export type SheetsCountOutputTypeGetPayload<S extends boolean | null | undefined | SheetsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SheetsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SheetsCountOutputTypeArgs)
    ? SheetsCountOutputType 
    : S extends { select: any } & (SheetsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SheetsCountOutputType ? SheetsCountOutputType[P] : never
  } 
      : SheetsCountOutputType




  // Custom InputTypes

  /**
   * SheetsCountOutputType without action
   */
  export type SheetsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SheetsCountOutputType
     * 
    **/
    select?: SheetsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Cellmap
   */


  export type AggregateCellmap = {
    _count: CellmapCountAggregateOutputType | null
    _min: CellmapMinAggregateOutputType | null
    _max: CellmapMaxAggregateOutputType | null
  }

  export type CellmapMinAggregateOutputType = {
    id: string | null
    sheet_id: string | null
    row_id: string | null
    col_id: string | null
    content: string | null
  }

  export type CellmapMaxAggregateOutputType = {
    id: string | null
    sheet_id: string | null
    row_id: string | null
    col_id: string | null
    content: string | null
  }

  export type CellmapCountAggregateOutputType = {
    id: number
    sheet_id: number
    row_id: number
    col_id: number
    content: number
    _all: number
  }


  export type CellmapMinAggregateInputType = {
    id?: true
    sheet_id?: true
    row_id?: true
    col_id?: true
    content?: true
  }

  export type CellmapMaxAggregateInputType = {
    id?: true
    sheet_id?: true
    row_id?: true
    col_id?: true
    content?: true
  }

  export type CellmapCountAggregateInputType = {
    id?: true
    sheet_id?: true
    row_id?: true
    col_id?: true
    content?: true
    _all?: true
  }

  export type CellmapAggregateArgs = {
    /**
     * Filter which Cellmap to aggregate.
     * 
    **/
    where?: CellmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cellmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<CellmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CellmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cellmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cellmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cellmaps
    **/
    _count?: true | CellmapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CellmapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CellmapMaxAggregateInputType
  }

  export type GetCellmapAggregateType<T extends CellmapAggregateArgs> = {
        [P in keyof T & keyof AggregateCellmap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCellmap[P]>
      : GetScalarType<T[P], AggregateCellmap[P]>
  }




  export type CellmapGroupByArgs = {
    where?: CellmapWhereInput
    orderBy?: Enumerable<CellmapOrderByWithAggregationInput>
    by: Array<CellmapScalarFieldEnum>
    having?: CellmapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CellmapCountAggregateInputType | true
    _min?: CellmapMinAggregateInputType
    _max?: CellmapMaxAggregateInputType
  }


  export type CellmapGroupByOutputType = {
    id: string
    sheet_id: string
    row_id: string
    col_id: string
    content: string | null
    _count: CellmapCountAggregateOutputType | null
    _min: CellmapMinAggregateOutputType | null
    _max: CellmapMaxAggregateOutputType | null
  }

  type GetCellmapGroupByPayload<T extends CellmapGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CellmapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CellmapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CellmapGroupByOutputType[P]>
            : GetScalarType<T[P], CellmapGroupByOutputType[P]>
        }
      >
    >


  export type CellmapSelect = {
    id?: boolean
    sheet_id?: boolean
    row_id?: boolean
    col_id?: boolean
    content?: boolean
    colmap?: boolean | ColmapArgs
    rowmap?: boolean | RowmapArgs
    sheets?: boolean | SheetsArgs
  }


  export type CellmapInclude = {
    colmap?: boolean | ColmapArgs
    rowmap?: boolean | RowmapArgs
    sheets?: boolean | SheetsArgs
  } 

  export type CellmapGetPayload<S extends boolean | null | undefined | CellmapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Cellmap :
    S extends undefined ? never :
    S extends { include: any } & (CellmapArgs | CellmapFindManyArgs)
    ? Cellmap  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'colmap' ? ColmapGetPayload<S['include'][P]> :
        P extends 'rowmap' ? RowmapGetPayload<S['include'][P]> :
        P extends 'sheets' ? SheetsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CellmapArgs | CellmapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'colmap' ? ColmapGetPayload<S['select'][P]> :
        P extends 'rowmap' ? RowmapGetPayload<S['select'][P]> :
        P extends 'sheets' ? SheetsGetPayload<S['select'][P]> :  P extends keyof Cellmap ? Cellmap[P] : never
  } 
      : Cellmap


  type CellmapCountArgs = Merge<
    Omit<CellmapFindManyArgs, 'select' | 'include'> & {
      select?: CellmapCountAggregateInputType | true
    }
  >

  export interface CellmapDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Cellmap that matches the filter.
     * @param {CellmapFindUniqueArgs} args - Arguments to find a Cellmap
     * @example
     * // Get one Cellmap
     * const cellmap = await prisma.cellmap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CellmapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CellmapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cellmap'> extends True ? Prisma__CellmapClient<CellmapGetPayload<T>> : Prisma__CellmapClient<CellmapGetPayload<T> | null, null>

    /**
     * Find one Cellmap that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CellmapFindUniqueOrThrowArgs} args - Arguments to find a Cellmap
     * @example
     * // Get one Cellmap
     * const cellmap = await prisma.cellmap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CellmapFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CellmapFindUniqueOrThrowArgs>
    ): Prisma__CellmapClient<CellmapGetPayload<T>>

    /**
     * Find the first Cellmap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellmapFindFirstArgs} args - Arguments to find a Cellmap
     * @example
     * // Get one Cellmap
     * const cellmap = await prisma.cellmap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CellmapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CellmapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cellmap'> extends True ? Prisma__CellmapClient<CellmapGetPayload<T>> : Prisma__CellmapClient<CellmapGetPayload<T> | null, null>

    /**
     * Find the first Cellmap that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellmapFindFirstOrThrowArgs} args - Arguments to find a Cellmap
     * @example
     * // Get one Cellmap
     * const cellmap = await prisma.cellmap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CellmapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CellmapFindFirstOrThrowArgs>
    ): Prisma__CellmapClient<CellmapGetPayload<T>>

    /**
     * Find zero or more Cellmaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellmapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cellmaps
     * const cellmaps = await prisma.cellmap.findMany()
     * 
     * // Get first 10 Cellmaps
     * const cellmaps = await prisma.cellmap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cellmapWithIdOnly = await prisma.cellmap.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CellmapFindManyArgs>(
      args?: SelectSubset<T, CellmapFindManyArgs>
    ): PrismaPromise<Array<CellmapGetPayload<T>>>

    /**
     * Create a Cellmap.
     * @param {CellmapCreateArgs} args - Arguments to create a Cellmap.
     * @example
     * // Create one Cellmap
     * const Cellmap = await prisma.cellmap.create({
     *   data: {
     *     // ... data to create a Cellmap
     *   }
     * })
     * 
    **/
    create<T extends CellmapCreateArgs>(
      args: SelectSubset<T, CellmapCreateArgs>
    ): Prisma__CellmapClient<CellmapGetPayload<T>>

    /**
     * Create many Cellmaps.
     *     @param {CellmapCreateManyArgs} args - Arguments to create many Cellmaps.
     *     @example
     *     // Create many Cellmaps
     *     const cellmap = await prisma.cellmap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CellmapCreateManyArgs>(
      args?: SelectSubset<T, CellmapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cellmap.
     * @param {CellmapDeleteArgs} args - Arguments to delete one Cellmap.
     * @example
     * // Delete one Cellmap
     * const Cellmap = await prisma.cellmap.delete({
     *   where: {
     *     // ... filter to delete one Cellmap
     *   }
     * })
     * 
    **/
    delete<T extends CellmapDeleteArgs>(
      args: SelectSubset<T, CellmapDeleteArgs>
    ): Prisma__CellmapClient<CellmapGetPayload<T>>

    /**
     * Update one Cellmap.
     * @param {CellmapUpdateArgs} args - Arguments to update one Cellmap.
     * @example
     * // Update one Cellmap
     * const cellmap = await prisma.cellmap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CellmapUpdateArgs>(
      args: SelectSubset<T, CellmapUpdateArgs>
    ): Prisma__CellmapClient<CellmapGetPayload<T>>

    /**
     * Delete zero or more Cellmaps.
     * @param {CellmapDeleteManyArgs} args - Arguments to filter Cellmaps to delete.
     * @example
     * // Delete a few Cellmaps
     * const { count } = await prisma.cellmap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CellmapDeleteManyArgs>(
      args?: SelectSubset<T, CellmapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cellmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellmapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cellmaps
     * const cellmap = await prisma.cellmap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CellmapUpdateManyArgs>(
      args: SelectSubset<T, CellmapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cellmap.
     * @param {CellmapUpsertArgs} args - Arguments to update or create a Cellmap.
     * @example
     * // Update or create a Cellmap
     * const cellmap = await prisma.cellmap.upsert({
     *   create: {
     *     // ... data to create a Cellmap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cellmap we want to update
     *   }
     * })
    **/
    upsert<T extends CellmapUpsertArgs>(
      args: SelectSubset<T, CellmapUpsertArgs>
    ): Prisma__CellmapClient<CellmapGetPayload<T>>

    /**
     * Count the number of Cellmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellmapCountArgs} args - Arguments to filter Cellmaps to count.
     * @example
     * // Count the number of Cellmaps
     * const count = await prisma.cellmap.count({
     *   where: {
     *     // ... the filter for the Cellmaps we want to count
     *   }
     * })
    **/
    count<T extends CellmapCountArgs>(
      args?: Subset<T, CellmapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CellmapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cellmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellmapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CellmapAggregateArgs>(args: Subset<T, CellmapAggregateArgs>): PrismaPromise<GetCellmapAggregateType<T>>

    /**
     * Group by Cellmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellmapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CellmapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CellmapGroupByArgs['orderBy'] }
        : { orderBy?: CellmapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CellmapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCellmapGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cellmap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CellmapClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    colmap<T extends ColmapArgs= {}>(args?: Subset<T, ColmapArgs>): Prisma__ColmapClient<ColmapGetPayload<T> | Null>;

    rowmap<T extends RowmapArgs= {}>(args?: Subset<T, RowmapArgs>): Prisma__RowmapClient<RowmapGetPayload<T> | Null>;

    sheets<T extends SheetsArgs= {}>(args?: Subset<T, SheetsArgs>): Prisma__SheetsClient<SheetsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Cellmap base type for findUnique actions
   */
  export type CellmapFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    /**
     * Filter, which Cellmap to fetch.
     * 
    **/
    where: CellmapWhereUniqueInput
  }

  /**
   * Cellmap findUnique
   */
  export interface CellmapFindUniqueArgs extends CellmapFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cellmap findUniqueOrThrow
   */
  export type CellmapFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    /**
     * Filter, which Cellmap to fetch.
     * 
    **/
    where: CellmapWhereUniqueInput
  }


  /**
   * Cellmap base type for findFirst actions
   */
  export type CellmapFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    /**
     * Filter, which Cellmap to fetch.
     * 
    **/
    where?: CellmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cellmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<CellmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cellmaps.
     * 
    **/
    cursor?: CellmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cellmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cellmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cellmaps.
     * 
    **/
    distinct?: Enumerable<CellmapScalarFieldEnum>
  }

  /**
   * Cellmap findFirst
   */
  export interface CellmapFindFirstArgs extends CellmapFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cellmap findFirstOrThrow
   */
  export type CellmapFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    /**
     * Filter, which Cellmap to fetch.
     * 
    **/
    where?: CellmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cellmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<CellmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cellmaps.
     * 
    **/
    cursor?: CellmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cellmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cellmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cellmaps.
     * 
    **/
    distinct?: Enumerable<CellmapScalarFieldEnum>
  }


  /**
   * Cellmap findMany
   */
  export type CellmapFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    /**
     * Filter, which Cellmaps to fetch.
     * 
    **/
    where?: CellmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cellmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<CellmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cellmaps.
     * 
    **/
    cursor?: CellmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cellmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cellmaps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CellmapScalarFieldEnum>
  }


  /**
   * Cellmap create
   */
  export type CellmapCreateArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    /**
     * The data needed to create a Cellmap.
     * 
    **/
    data: XOR<CellmapCreateInput, CellmapUncheckedCreateInput>
  }


  /**
   * Cellmap createMany
   */
  export type CellmapCreateManyArgs = {
    /**
     * The data used to create many Cellmaps.
     * 
    **/
    data: Enumerable<CellmapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cellmap update
   */
  export type CellmapUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    /**
     * The data needed to update a Cellmap.
     * 
    **/
    data: XOR<CellmapUpdateInput, CellmapUncheckedUpdateInput>
    /**
     * Choose, which Cellmap to update.
     * 
    **/
    where: CellmapWhereUniqueInput
  }


  /**
   * Cellmap updateMany
   */
  export type CellmapUpdateManyArgs = {
    /**
     * The data used to update Cellmaps.
     * 
    **/
    data: XOR<CellmapUpdateManyMutationInput, CellmapUncheckedUpdateManyInput>
    /**
     * Filter which Cellmaps to update
     * 
    **/
    where?: CellmapWhereInput
  }


  /**
   * Cellmap upsert
   */
  export type CellmapUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    /**
     * The filter to search for the Cellmap to update in case it exists.
     * 
    **/
    where: CellmapWhereUniqueInput
    /**
     * In case the Cellmap found by the `where` argument doesn't exist, create a new Cellmap with this data.
     * 
    **/
    create: XOR<CellmapCreateInput, CellmapUncheckedCreateInput>
    /**
     * In case the Cellmap was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CellmapUpdateInput, CellmapUncheckedUpdateInput>
  }


  /**
   * Cellmap delete
   */
  export type CellmapDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    /**
     * Filter which Cellmap to delete.
     * 
    **/
    where: CellmapWhereUniqueInput
  }


  /**
   * Cellmap deleteMany
   */
  export type CellmapDeleteManyArgs = {
    /**
     * Filter which Cellmaps to delete
     * 
    **/
    where?: CellmapWhereInput
  }


  /**
   * Cellmap without action
   */
  export type CellmapArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
  }



  /**
   * Model Colmap
   */


  export type AggregateColmap = {
    _count: ColmapCountAggregateOutputType | null
    _min: ColmapMinAggregateOutputType | null
    _max: ColmapMaxAggregateOutputType | null
  }

  export type ColmapMinAggregateOutputType = {
    id: string | null
    sheet_id: string | null
    startmarker: string | null
    endmarker: string | null
  }

  export type ColmapMaxAggregateOutputType = {
    id: string | null
    sheet_id: string | null
    startmarker: string | null
    endmarker: string | null
  }

  export type ColmapCountAggregateOutputType = {
    id: number
    sheet_id: number
    startmarker: number
    endmarker: number
    _all: number
  }


  export type ColmapMinAggregateInputType = {
    id?: true
    sheet_id?: true
    startmarker?: true
    endmarker?: true
  }

  export type ColmapMaxAggregateInputType = {
    id?: true
    sheet_id?: true
    startmarker?: true
    endmarker?: true
  }

  export type ColmapCountAggregateInputType = {
    id?: true
    sheet_id?: true
    startmarker?: true
    endmarker?: true
    _all?: true
  }

  export type ColmapAggregateArgs = {
    /**
     * Filter which Colmap to aggregate.
     * 
    **/
    where?: ColmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<ColmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ColmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colmaps
    **/
    _count?: true | ColmapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColmapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColmapMaxAggregateInputType
  }

  export type GetColmapAggregateType<T extends ColmapAggregateArgs> = {
        [P in keyof T & keyof AggregateColmap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColmap[P]>
      : GetScalarType<T[P], AggregateColmap[P]>
  }




  export type ColmapGroupByArgs = {
    where?: ColmapWhereInput
    orderBy?: Enumerable<ColmapOrderByWithAggregationInput>
    by: Array<ColmapScalarFieldEnum>
    having?: ColmapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColmapCountAggregateInputType | true
    _min?: ColmapMinAggregateInputType
    _max?: ColmapMaxAggregateInputType
  }


  export type ColmapGroupByOutputType = {
    id: string
    sheet_id: string
    startmarker: string
    endmarker: string
    _count: ColmapCountAggregateOutputType | null
    _min: ColmapMinAggregateOutputType | null
    _max: ColmapMaxAggregateOutputType | null
  }

  type GetColmapGroupByPayload<T extends ColmapGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ColmapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColmapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColmapGroupByOutputType[P]>
            : GetScalarType<T[P], ColmapGroupByOutputType[P]>
        }
      >
    >


  export type ColmapSelect = {
    id?: boolean
    sheet_id?: boolean
    startmarker?: boolean
    endmarker?: boolean
    cellmap?: boolean | Colmap$cellmapArgs
    sheets?: boolean | SheetsArgs
    _count?: boolean | ColmapCountOutputTypeArgs
  }


  export type ColmapInclude = {
    cellmap?: boolean | Colmap$cellmapArgs
    sheets?: boolean | SheetsArgs
    _count?: boolean | ColmapCountOutputTypeArgs
  } 

  export type ColmapGetPayload<S extends boolean | null | undefined | ColmapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Colmap :
    S extends undefined ? never :
    S extends { include: any } & (ColmapArgs | ColmapFindManyArgs)
    ? Colmap  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cellmap' ? Array < CellmapGetPayload<S['include'][P]>>  :
        P extends 'sheets' ? SheetsGetPayload<S['include'][P]> :
        P extends '_count' ? ColmapCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ColmapArgs | ColmapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cellmap' ? Array < CellmapGetPayload<S['select'][P]>>  :
        P extends 'sheets' ? SheetsGetPayload<S['select'][P]> :
        P extends '_count' ? ColmapCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Colmap ? Colmap[P] : never
  } 
      : Colmap


  type ColmapCountArgs = Merge<
    Omit<ColmapFindManyArgs, 'select' | 'include'> & {
      select?: ColmapCountAggregateInputType | true
    }
  >

  export interface ColmapDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Colmap that matches the filter.
     * @param {ColmapFindUniqueArgs} args - Arguments to find a Colmap
     * @example
     * // Get one Colmap
     * const colmap = await prisma.colmap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ColmapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ColmapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Colmap'> extends True ? Prisma__ColmapClient<ColmapGetPayload<T>> : Prisma__ColmapClient<ColmapGetPayload<T> | null, null>

    /**
     * Find one Colmap that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ColmapFindUniqueOrThrowArgs} args - Arguments to find a Colmap
     * @example
     * // Get one Colmap
     * const colmap = await prisma.colmap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ColmapFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ColmapFindUniqueOrThrowArgs>
    ): Prisma__ColmapClient<ColmapGetPayload<T>>

    /**
     * Find the first Colmap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColmapFindFirstArgs} args - Arguments to find a Colmap
     * @example
     * // Get one Colmap
     * const colmap = await prisma.colmap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ColmapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ColmapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Colmap'> extends True ? Prisma__ColmapClient<ColmapGetPayload<T>> : Prisma__ColmapClient<ColmapGetPayload<T> | null, null>

    /**
     * Find the first Colmap that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColmapFindFirstOrThrowArgs} args - Arguments to find a Colmap
     * @example
     * // Get one Colmap
     * const colmap = await prisma.colmap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ColmapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ColmapFindFirstOrThrowArgs>
    ): Prisma__ColmapClient<ColmapGetPayload<T>>

    /**
     * Find zero or more Colmaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColmapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colmaps
     * const colmaps = await prisma.colmap.findMany()
     * 
     * // Get first 10 Colmaps
     * const colmaps = await prisma.colmap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colmapWithIdOnly = await prisma.colmap.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ColmapFindManyArgs>(
      args?: SelectSubset<T, ColmapFindManyArgs>
    ): PrismaPromise<Array<ColmapGetPayload<T>>>

    /**
     * Create a Colmap.
     * @param {ColmapCreateArgs} args - Arguments to create a Colmap.
     * @example
     * // Create one Colmap
     * const Colmap = await prisma.colmap.create({
     *   data: {
     *     // ... data to create a Colmap
     *   }
     * })
     * 
    **/
    create<T extends ColmapCreateArgs>(
      args: SelectSubset<T, ColmapCreateArgs>
    ): Prisma__ColmapClient<ColmapGetPayload<T>>

    /**
     * Create many Colmaps.
     *     @param {ColmapCreateManyArgs} args - Arguments to create many Colmaps.
     *     @example
     *     // Create many Colmaps
     *     const colmap = await prisma.colmap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ColmapCreateManyArgs>(
      args?: SelectSubset<T, ColmapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Colmap.
     * @param {ColmapDeleteArgs} args - Arguments to delete one Colmap.
     * @example
     * // Delete one Colmap
     * const Colmap = await prisma.colmap.delete({
     *   where: {
     *     // ... filter to delete one Colmap
     *   }
     * })
     * 
    **/
    delete<T extends ColmapDeleteArgs>(
      args: SelectSubset<T, ColmapDeleteArgs>
    ): Prisma__ColmapClient<ColmapGetPayload<T>>

    /**
     * Update one Colmap.
     * @param {ColmapUpdateArgs} args - Arguments to update one Colmap.
     * @example
     * // Update one Colmap
     * const colmap = await prisma.colmap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ColmapUpdateArgs>(
      args: SelectSubset<T, ColmapUpdateArgs>
    ): Prisma__ColmapClient<ColmapGetPayload<T>>

    /**
     * Delete zero or more Colmaps.
     * @param {ColmapDeleteManyArgs} args - Arguments to filter Colmaps to delete.
     * @example
     * // Delete a few Colmaps
     * const { count } = await prisma.colmap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ColmapDeleteManyArgs>(
      args?: SelectSubset<T, ColmapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColmapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colmaps
     * const colmap = await prisma.colmap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ColmapUpdateManyArgs>(
      args: SelectSubset<T, ColmapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Colmap.
     * @param {ColmapUpsertArgs} args - Arguments to update or create a Colmap.
     * @example
     * // Update or create a Colmap
     * const colmap = await prisma.colmap.upsert({
     *   create: {
     *     // ... data to create a Colmap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colmap we want to update
     *   }
     * })
    **/
    upsert<T extends ColmapUpsertArgs>(
      args: SelectSubset<T, ColmapUpsertArgs>
    ): Prisma__ColmapClient<ColmapGetPayload<T>>

    /**
     * Count the number of Colmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColmapCountArgs} args - Arguments to filter Colmaps to count.
     * @example
     * // Count the number of Colmaps
     * const count = await prisma.colmap.count({
     *   where: {
     *     // ... the filter for the Colmaps we want to count
     *   }
     * })
    **/
    count<T extends ColmapCountArgs>(
      args?: Subset<T, ColmapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColmapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColmapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColmapAggregateArgs>(args: Subset<T, ColmapAggregateArgs>): PrismaPromise<GetColmapAggregateType<T>>

    /**
     * Group by Colmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColmapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColmapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColmapGroupByArgs['orderBy'] }
        : { orderBy?: ColmapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColmapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColmapGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Colmap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ColmapClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cellmap<T extends Colmap$cellmapArgs= {}>(args?: Subset<T, Colmap$cellmapArgs>): PrismaPromise<Array<CellmapGetPayload<T>>| Null>;

    sheets<T extends SheetsArgs= {}>(args?: Subset<T, SheetsArgs>): Prisma__SheetsClient<SheetsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Colmap base type for findUnique actions
   */
  export type ColmapFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    /**
     * Filter, which Colmap to fetch.
     * 
    **/
    where: ColmapWhereUniqueInput
  }

  /**
   * Colmap findUnique
   */
  export interface ColmapFindUniqueArgs extends ColmapFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Colmap findUniqueOrThrow
   */
  export type ColmapFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    /**
     * Filter, which Colmap to fetch.
     * 
    **/
    where: ColmapWhereUniqueInput
  }


  /**
   * Colmap base type for findFirst actions
   */
  export type ColmapFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    /**
     * Filter, which Colmap to fetch.
     * 
    **/
    where?: ColmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<ColmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colmaps.
     * 
    **/
    cursor?: ColmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colmaps.
     * 
    **/
    distinct?: Enumerable<ColmapScalarFieldEnum>
  }

  /**
   * Colmap findFirst
   */
  export interface ColmapFindFirstArgs extends ColmapFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Colmap findFirstOrThrow
   */
  export type ColmapFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    /**
     * Filter, which Colmap to fetch.
     * 
    **/
    where?: ColmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<ColmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colmaps.
     * 
    **/
    cursor?: ColmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colmaps.
     * 
    **/
    distinct?: Enumerable<ColmapScalarFieldEnum>
  }


  /**
   * Colmap findMany
   */
  export type ColmapFindManyArgs = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    /**
     * Filter, which Colmaps to fetch.
     * 
    **/
    where?: ColmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<ColmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colmaps.
     * 
    **/
    cursor?: ColmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colmaps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ColmapScalarFieldEnum>
  }


  /**
   * Colmap create
   */
  export type ColmapCreateArgs = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    /**
     * The data needed to create a Colmap.
     * 
    **/
    data: XOR<ColmapCreateInput, ColmapUncheckedCreateInput>
  }


  /**
   * Colmap createMany
   */
  export type ColmapCreateManyArgs = {
    /**
     * The data used to create many Colmaps.
     * 
    **/
    data: Enumerable<ColmapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Colmap update
   */
  export type ColmapUpdateArgs = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    /**
     * The data needed to update a Colmap.
     * 
    **/
    data: XOR<ColmapUpdateInput, ColmapUncheckedUpdateInput>
    /**
     * Choose, which Colmap to update.
     * 
    **/
    where: ColmapWhereUniqueInput
  }


  /**
   * Colmap updateMany
   */
  export type ColmapUpdateManyArgs = {
    /**
     * The data used to update Colmaps.
     * 
    **/
    data: XOR<ColmapUpdateManyMutationInput, ColmapUncheckedUpdateManyInput>
    /**
     * Filter which Colmaps to update
     * 
    **/
    where?: ColmapWhereInput
  }


  /**
   * Colmap upsert
   */
  export type ColmapUpsertArgs = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    /**
     * The filter to search for the Colmap to update in case it exists.
     * 
    **/
    where: ColmapWhereUniqueInput
    /**
     * In case the Colmap found by the `where` argument doesn't exist, create a new Colmap with this data.
     * 
    **/
    create: XOR<ColmapCreateInput, ColmapUncheckedCreateInput>
    /**
     * In case the Colmap was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ColmapUpdateInput, ColmapUncheckedUpdateInput>
  }


  /**
   * Colmap delete
   */
  export type ColmapDeleteArgs = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    /**
     * Filter which Colmap to delete.
     * 
    **/
    where: ColmapWhereUniqueInput
  }


  /**
   * Colmap deleteMany
   */
  export type ColmapDeleteManyArgs = {
    /**
     * Filter which Colmaps to delete
     * 
    **/
    where?: ColmapWhereInput
  }


  /**
   * Colmap.cellmap
   */
  export type Colmap$cellmapArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    where?: CellmapWhereInput
    orderBy?: Enumerable<CellmapOrderByWithRelationInput>
    cursor?: CellmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CellmapScalarFieldEnum>
  }


  /**
   * Colmap without action
   */
  export type ColmapArgs = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
  }



  /**
   * Model Rowmap
   */


  export type AggregateRowmap = {
    _count: RowmapCountAggregateOutputType | null
    _min: RowmapMinAggregateOutputType | null
    _max: RowmapMaxAggregateOutputType | null
  }

  export type RowmapMinAggregateOutputType = {
    id: string | null
    sheet_id: string | null
    startmarker: string | null
    endmarker: string | null
  }

  export type RowmapMaxAggregateOutputType = {
    id: string | null
    sheet_id: string | null
    startmarker: string | null
    endmarker: string | null
  }

  export type RowmapCountAggregateOutputType = {
    id: number
    sheet_id: number
    startmarker: number
    endmarker: number
    _all: number
  }


  export type RowmapMinAggregateInputType = {
    id?: true
    sheet_id?: true
    startmarker?: true
    endmarker?: true
  }

  export type RowmapMaxAggregateInputType = {
    id?: true
    sheet_id?: true
    startmarker?: true
    endmarker?: true
  }

  export type RowmapCountAggregateInputType = {
    id?: true
    sheet_id?: true
    startmarker?: true
    endmarker?: true
    _all?: true
  }

  export type RowmapAggregateArgs = {
    /**
     * Filter which Rowmap to aggregate.
     * 
    **/
    where?: RowmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rowmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<RowmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RowmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rowmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rowmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rowmaps
    **/
    _count?: true | RowmapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RowmapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RowmapMaxAggregateInputType
  }

  export type GetRowmapAggregateType<T extends RowmapAggregateArgs> = {
        [P in keyof T & keyof AggregateRowmap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRowmap[P]>
      : GetScalarType<T[P], AggregateRowmap[P]>
  }




  export type RowmapGroupByArgs = {
    where?: RowmapWhereInput
    orderBy?: Enumerable<RowmapOrderByWithAggregationInput>
    by: Array<RowmapScalarFieldEnum>
    having?: RowmapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RowmapCountAggregateInputType | true
    _min?: RowmapMinAggregateInputType
    _max?: RowmapMaxAggregateInputType
  }


  export type RowmapGroupByOutputType = {
    id: string
    sheet_id: string
    startmarker: string
    endmarker: string
    _count: RowmapCountAggregateOutputType | null
    _min: RowmapMinAggregateOutputType | null
    _max: RowmapMaxAggregateOutputType | null
  }

  type GetRowmapGroupByPayload<T extends RowmapGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RowmapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RowmapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RowmapGroupByOutputType[P]>
            : GetScalarType<T[P], RowmapGroupByOutputType[P]>
        }
      >
    >


  export type RowmapSelect = {
    id?: boolean
    sheet_id?: boolean
    startmarker?: boolean
    endmarker?: boolean
    cellmap?: boolean | Rowmap$cellmapArgs
    sheets?: boolean | SheetsArgs
    _count?: boolean | RowmapCountOutputTypeArgs
  }


  export type RowmapInclude = {
    cellmap?: boolean | Rowmap$cellmapArgs
    sheets?: boolean | SheetsArgs
    _count?: boolean | RowmapCountOutputTypeArgs
  } 

  export type RowmapGetPayload<S extends boolean | null | undefined | RowmapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Rowmap :
    S extends undefined ? never :
    S extends { include: any } & (RowmapArgs | RowmapFindManyArgs)
    ? Rowmap  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cellmap' ? Array < CellmapGetPayload<S['include'][P]>>  :
        P extends 'sheets' ? SheetsGetPayload<S['include'][P]> :
        P extends '_count' ? RowmapCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RowmapArgs | RowmapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cellmap' ? Array < CellmapGetPayload<S['select'][P]>>  :
        P extends 'sheets' ? SheetsGetPayload<S['select'][P]> :
        P extends '_count' ? RowmapCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Rowmap ? Rowmap[P] : never
  } 
      : Rowmap


  type RowmapCountArgs = Merge<
    Omit<RowmapFindManyArgs, 'select' | 'include'> & {
      select?: RowmapCountAggregateInputType | true
    }
  >

  export interface RowmapDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Rowmap that matches the filter.
     * @param {RowmapFindUniqueArgs} args - Arguments to find a Rowmap
     * @example
     * // Get one Rowmap
     * const rowmap = await prisma.rowmap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RowmapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RowmapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Rowmap'> extends True ? Prisma__RowmapClient<RowmapGetPayload<T>> : Prisma__RowmapClient<RowmapGetPayload<T> | null, null>

    /**
     * Find one Rowmap that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RowmapFindUniqueOrThrowArgs} args - Arguments to find a Rowmap
     * @example
     * // Get one Rowmap
     * const rowmap = await prisma.rowmap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RowmapFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RowmapFindUniqueOrThrowArgs>
    ): Prisma__RowmapClient<RowmapGetPayload<T>>

    /**
     * Find the first Rowmap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowmapFindFirstArgs} args - Arguments to find a Rowmap
     * @example
     * // Get one Rowmap
     * const rowmap = await prisma.rowmap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RowmapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RowmapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Rowmap'> extends True ? Prisma__RowmapClient<RowmapGetPayload<T>> : Prisma__RowmapClient<RowmapGetPayload<T> | null, null>

    /**
     * Find the first Rowmap that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowmapFindFirstOrThrowArgs} args - Arguments to find a Rowmap
     * @example
     * // Get one Rowmap
     * const rowmap = await prisma.rowmap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RowmapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RowmapFindFirstOrThrowArgs>
    ): Prisma__RowmapClient<RowmapGetPayload<T>>

    /**
     * Find zero or more Rowmaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowmapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rowmaps
     * const rowmaps = await prisma.rowmap.findMany()
     * 
     * // Get first 10 Rowmaps
     * const rowmaps = await prisma.rowmap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rowmapWithIdOnly = await prisma.rowmap.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RowmapFindManyArgs>(
      args?: SelectSubset<T, RowmapFindManyArgs>
    ): PrismaPromise<Array<RowmapGetPayload<T>>>

    /**
     * Create a Rowmap.
     * @param {RowmapCreateArgs} args - Arguments to create a Rowmap.
     * @example
     * // Create one Rowmap
     * const Rowmap = await prisma.rowmap.create({
     *   data: {
     *     // ... data to create a Rowmap
     *   }
     * })
     * 
    **/
    create<T extends RowmapCreateArgs>(
      args: SelectSubset<T, RowmapCreateArgs>
    ): Prisma__RowmapClient<RowmapGetPayload<T>>

    /**
     * Create many Rowmaps.
     *     @param {RowmapCreateManyArgs} args - Arguments to create many Rowmaps.
     *     @example
     *     // Create many Rowmaps
     *     const rowmap = await prisma.rowmap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RowmapCreateManyArgs>(
      args?: SelectSubset<T, RowmapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Rowmap.
     * @param {RowmapDeleteArgs} args - Arguments to delete one Rowmap.
     * @example
     * // Delete one Rowmap
     * const Rowmap = await prisma.rowmap.delete({
     *   where: {
     *     // ... filter to delete one Rowmap
     *   }
     * })
     * 
    **/
    delete<T extends RowmapDeleteArgs>(
      args: SelectSubset<T, RowmapDeleteArgs>
    ): Prisma__RowmapClient<RowmapGetPayload<T>>

    /**
     * Update one Rowmap.
     * @param {RowmapUpdateArgs} args - Arguments to update one Rowmap.
     * @example
     * // Update one Rowmap
     * const rowmap = await prisma.rowmap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RowmapUpdateArgs>(
      args: SelectSubset<T, RowmapUpdateArgs>
    ): Prisma__RowmapClient<RowmapGetPayload<T>>

    /**
     * Delete zero or more Rowmaps.
     * @param {RowmapDeleteManyArgs} args - Arguments to filter Rowmaps to delete.
     * @example
     * // Delete a few Rowmaps
     * const { count } = await prisma.rowmap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RowmapDeleteManyArgs>(
      args?: SelectSubset<T, RowmapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rowmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowmapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rowmaps
     * const rowmap = await prisma.rowmap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RowmapUpdateManyArgs>(
      args: SelectSubset<T, RowmapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Rowmap.
     * @param {RowmapUpsertArgs} args - Arguments to update or create a Rowmap.
     * @example
     * // Update or create a Rowmap
     * const rowmap = await prisma.rowmap.upsert({
     *   create: {
     *     // ... data to create a Rowmap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rowmap we want to update
     *   }
     * })
    **/
    upsert<T extends RowmapUpsertArgs>(
      args: SelectSubset<T, RowmapUpsertArgs>
    ): Prisma__RowmapClient<RowmapGetPayload<T>>

    /**
     * Count the number of Rowmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowmapCountArgs} args - Arguments to filter Rowmaps to count.
     * @example
     * // Count the number of Rowmaps
     * const count = await prisma.rowmap.count({
     *   where: {
     *     // ... the filter for the Rowmaps we want to count
     *   }
     * })
    **/
    count<T extends RowmapCountArgs>(
      args?: Subset<T, RowmapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RowmapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rowmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowmapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RowmapAggregateArgs>(args: Subset<T, RowmapAggregateArgs>): PrismaPromise<GetRowmapAggregateType<T>>

    /**
     * Group by Rowmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowmapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RowmapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RowmapGroupByArgs['orderBy'] }
        : { orderBy?: RowmapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RowmapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRowmapGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Rowmap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RowmapClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cellmap<T extends Rowmap$cellmapArgs= {}>(args?: Subset<T, Rowmap$cellmapArgs>): PrismaPromise<Array<CellmapGetPayload<T>>| Null>;

    sheets<T extends SheetsArgs= {}>(args?: Subset<T, SheetsArgs>): Prisma__SheetsClient<SheetsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Rowmap base type for findUnique actions
   */
  export type RowmapFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    /**
     * Filter, which Rowmap to fetch.
     * 
    **/
    where: RowmapWhereUniqueInput
  }

  /**
   * Rowmap findUnique
   */
  export interface RowmapFindUniqueArgs extends RowmapFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rowmap findUniqueOrThrow
   */
  export type RowmapFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    /**
     * Filter, which Rowmap to fetch.
     * 
    **/
    where: RowmapWhereUniqueInput
  }


  /**
   * Rowmap base type for findFirst actions
   */
  export type RowmapFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    /**
     * Filter, which Rowmap to fetch.
     * 
    **/
    where?: RowmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rowmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<RowmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rowmaps.
     * 
    **/
    cursor?: RowmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rowmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rowmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rowmaps.
     * 
    **/
    distinct?: Enumerable<RowmapScalarFieldEnum>
  }

  /**
   * Rowmap findFirst
   */
  export interface RowmapFindFirstArgs extends RowmapFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rowmap findFirstOrThrow
   */
  export type RowmapFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    /**
     * Filter, which Rowmap to fetch.
     * 
    **/
    where?: RowmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rowmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<RowmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rowmaps.
     * 
    **/
    cursor?: RowmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rowmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rowmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rowmaps.
     * 
    **/
    distinct?: Enumerable<RowmapScalarFieldEnum>
  }


  /**
   * Rowmap findMany
   */
  export type RowmapFindManyArgs = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    /**
     * Filter, which Rowmaps to fetch.
     * 
    **/
    where?: RowmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rowmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<RowmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rowmaps.
     * 
    **/
    cursor?: RowmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rowmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rowmaps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RowmapScalarFieldEnum>
  }


  /**
   * Rowmap create
   */
  export type RowmapCreateArgs = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    /**
     * The data needed to create a Rowmap.
     * 
    **/
    data: XOR<RowmapCreateInput, RowmapUncheckedCreateInput>
  }


  /**
   * Rowmap createMany
   */
  export type RowmapCreateManyArgs = {
    /**
     * The data used to create many Rowmaps.
     * 
    **/
    data: Enumerable<RowmapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Rowmap update
   */
  export type RowmapUpdateArgs = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    /**
     * The data needed to update a Rowmap.
     * 
    **/
    data: XOR<RowmapUpdateInput, RowmapUncheckedUpdateInput>
    /**
     * Choose, which Rowmap to update.
     * 
    **/
    where: RowmapWhereUniqueInput
  }


  /**
   * Rowmap updateMany
   */
  export type RowmapUpdateManyArgs = {
    /**
     * The data used to update Rowmaps.
     * 
    **/
    data: XOR<RowmapUpdateManyMutationInput, RowmapUncheckedUpdateManyInput>
    /**
     * Filter which Rowmaps to update
     * 
    **/
    where?: RowmapWhereInput
  }


  /**
   * Rowmap upsert
   */
  export type RowmapUpsertArgs = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    /**
     * The filter to search for the Rowmap to update in case it exists.
     * 
    **/
    where: RowmapWhereUniqueInput
    /**
     * In case the Rowmap found by the `where` argument doesn't exist, create a new Rowmap with this data.
     * 
    **/
    create: XOR<RowmapCreateInput, RowmapUncheckedCreateInput>
    /**
     * In case the Rowmap was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RowmapUpdateInput, RowmapUncheckedUpdateInput>
  }


  /**
   * Rowmap delete
   */
  export type RowmapDeleteArgs = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    /**
     * Filter which Rowmap to delete.
     * 
    **/
    where: RowmapWhereUniqueInput
  }


  /**
   * Rowmap deleteMany
   */
  export type RowmapDeleteManyArgs = {
    /**
     * Filter which Rowmaps to delete
     * 
    **/
    where?: RowmapWhereInput
  }


  /**
   * Rowmap.cellmap
   */
  export type Rowmap$cellmapArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    where?: CellmapWhereInput
    orderBy?: Enumerable<CellmapOrderByWithRelationInput>
    cursor?: CellmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CellmapScalarFieldEnum>
  }


  /**
   * Rowmap without action
   */
  export type RowmapArgs = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
  }



  /**
   * Model Sheets
   */


  export type AggregateSheets = {
    _count: SheetsCountAggregateOutputType | null
    _avg: SheetsAvgAggregateOutputType | null
    _sum: SheetsSumAggregateOutputType | null
    _min: SheetsMinAggregateOutputType | null
    _max: SheetsMaxAggregateOutputType | null
  }

  export type SheetsAvgAggregateOutputType = {
    rows: number | null
    cols: number | null
  }

  export type SheetsSumAggregateOutputType = {
    rows: number | null
    cols: number | null
  }

  export type SheetsMinAggregateOutputType = {
    id: string | null
    rows: number | null
    cols: number | null
    startrow: string | null
    endrow: string | null
    startrol: string | null
    endrol: string | null
    created_at: Date | null
    title: string | null
  }

  export type SheetsMaxAggregateOutputType = {
    id: string | null
    rows: number | null
    cols: number | null
    startrow: string | null
    endrow: string | null
    startrol: string | null
    endrol: string | null
    created_at: Date | null
    title: string | null
  }

  export type SheetsCountAggregateOutputType = {
    id: number
    rows: number
    cols: number
    startrow: number
    endrow: number
    startrol: number
    endrol: number
    created_at: number
    title: number
    _all: number
  }


  export type SheetsAvgAggregateInputType = {
    rows?: true
    cols?: true
  }

  export type SheetsSumAggregateInputType = {
    rows?: true
    cols?: true
  }

  export type SheetsMinAggregateInputType = {
    id?: true
    rows?: true
    cols?: true
    startrow?: true
    endrow?: true
    startrol?: true
    endrol?: true
    created_at?: true
    title?: true
  }

  export type SheetsMaxAggregateInputType = {
    id?: true
    rows?: true
    cols?: true
    startrow?: true
    endrow?: true
    startrol?: true
    endrol?: true
    created_at?: true
    title?: true
  }

  export type SheetsCountAggregateInputType = {
    id?: true
    rows?: true
    cols?: true
    startrow?: true
    endrow?: true
    startrol?: true
    endrol?: true
    created_at?: true
    title?: true
    _all?: true
  }

  export type SheetsAggregateArgs = {
    /**
     * Filter which Sheets to aggregate.
     * 
    **/
    where?: SheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     * 
    **/
    orderBy?: Enumerable<SheetsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sheets
    **/
    _count?: true | SheetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetsMaxAggregateInputType
  }

  export type GetSheetsAggregateType<T extends SheetsAggregateArgs> = {
        [P in keyof T & keyof AggregateSheets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheets[P]>
      : GetScalarType<T[P], AggregateSheets[P]>
  }




  export type SheetsGroupByArgs = {
    where?: SheetsWhereInput
    orderBy?: Enumerable<SheetsOrderByWithAggregationInput>
    by: Array<SheetsScalarFieldEnum>
    having?: SheetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetsCountAggregateInputType | true
    _avg?: SheetsAvgAggregateInputType
    _sum?: SheetsSumAggregateInputType
    _min?: SheetsMinAggregateInputType
    _max?: SheetsMaxAggregateInputType
  }


  export type SheetsGroupByOutputType = {
    id: string
    rows: number
    cols: number
    startrow: string | null
    endrow: string | null
    startrol: string | null
    endrol: string | null
    created_at: Date
    title: string | null
    _count: SheetsCountAggregateOutputType | null
    _avg: SheetsAvgAggregateOutputType | null
    _sum: SheetsSumAggregateOutputType | null
    _min: SheetsMinAggregateOutputType | null
    _max: SheetsMaxAggregateOutputType | null
  }

  type GetSheetsGroupByPayload<T extends SheetsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SheetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetsGroupByOutputType[P]>
            : GetScalarType<T[P], SheetsGroupByOutputType[P]>
        }
      >
    >


  export type SheetsSelect = {
    id?: boolean
    rows?: boolean
    cols?: boolean
    startrow?: boolean
    endrow?: boolean
    startrol?: boolean
    endrol?: boolean
    created_at?: boolean
    title?: boolean
    cellmap?: boolean | Sheets$cellmapArgs
    colmap?: boolean | Sheets$colmapArgs
    rowmap?: boolean | Sheets$rowmapArgs
    _count?: boolean | SheetsCountOutputTypeArgs
  }


  export type SheetsInclude = {
    cellmap?: boolean | Sheets$cellmapArgs
    colmap?: boolean | Sheets$colmapArgs
    rowmap?: boolean | Sheets$rowmapArgs
    _count?: boolean | SheetsCountOutputTypeArgs
  } 

  export type SheetsGetPayload<S extends boolean | null | undefined | SheetsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Sheets :
    S extends undefined ? never :
    S extends { include: any } & (SheetsArgs | SheetsFindManyArgs)
    ? Sheets  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cellmap' ? Array < CellmapGetPayload<S['include'][P]>>  :
        P extends 'colmap' ? Array < ColmapGetPayload<S['include'][P]>>  :
        P extends 'rowmap' ? Array < RowmapGetPayload<S['include'][P]>>  :
        P extends '_count' ? SheetsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SheetsArgs | SheetsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cellmap' ? Array < CellmapGetPayload<S['select'][P]>>  :
        P extends 'colmap' ? Array < ColmapGetPayload<S['select'][P]>>  :
        P extends 'rowmap' ? Array < RowmapGetPayload<S['select'][P]>>  :
        P extends '_count' ? SheetsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Sheets ? Sheets[P] : never
  } 
      : Sheets


  type SheetsCountArgs = Merge<
    Omit<SheetsFindManyArgs, 'select' | 'include'> & {
      select?: SheetsCountAggregateInputType | true
    }
  >

  export interface SheetsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Sheets that matches the filter.
     * @param {SheetsFindUniqueArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SheetsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SheetsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sheets'> extends True ? Prisma__SheetsClient<SheetsGetPayload<T>> : Prisma__SheetsClient<SheetsGetPayload<T> | null, null>

    /**
     * Find one Sheets that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SheetsFindUniqueOrThrowArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SheetsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SheetsFindUniqueOrThrowArgs>
    ): Prisma__SheetsClient<SheetsGetPayload<T>>

    /**
     * Find the first Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsFindFirstArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SheetsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SheetsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sheets'> extends True ? Prisma__SheetsClient<SheetsGetPayload<T>> : Prisma__SheetsClient<SheetsGetPayload<T> | null, null>

    /**
     * Find the first Sheets that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsFindFirstOrThrowArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SheetsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SheetsFindFirstOrThrowArgs>
    ): Prisma__SheetsClient<SheetsGetPayload<T>>

    /**
     * Find zero or more Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheets
     * const sheets = await prisma.sheets.findMany()
     * 
     * // Get first 10 Sheets
     * const sheets = await prisma.sheets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetsWithIdOnly = await prisma.sheets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SheetsFindManyArgs>(
      args?: SelectSubset<T, SheetsFindManyArgs>
    ): PrismaPromise<Array<SheetsGetPayload<T>>>

    /**
     * Create a Sheets.
     * @param {SheetsCreateArgs} args - Arguments to create a Sheets.
     * @example
     * // Create one Sheets
     * const Sheets = await prisma.sheets.create({
     *   data: {
     *     // ... data to create a Sheets
     *   }
     * })
     * 
    **/
    create<T extends SheetsCreateArgs>(
      args: SelectSubset<T, SheetsCreateArgs>
    ): Prisma__SheetsClient<SheetsGetPayload<T>>

    /**
     * Create many Sheets.
     *     @param {SheetsCreateManyArgs} args - Arguments to create many Sheets.
     *     @example
     *     // Create many Sheets
     *     const sheets = await prisma.sheets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SheetsCreateManyArgs>(
      args?: SelectSubset<T, SheetsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sheets.
     * @param {SheetsDeleteArgs} args - Arguments to delete one Sheets.
     * @example
     * // Delete one Sheets
     * const Sheets = await prisma.sheets.delete({
     *   where: {
     *     // ... filter to delete one Sheets
     *   }
     * })
     * 
    **/
    delete<T extends SheetsDeleteArgs>(
      args: SelectSubset<T, SheetsDeleteArgs>
    ): Prisma__SheetsClient<SheetsGetPayload<T>>

    /**
     * Update one Sheets.
     * @param {SheetsUpdateArgs} args - Arguments to update one Sheets.
     * @example
     * // Update one Sheets
     * const sheets = await prisma.sheets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SheetsUpdateArgs>(
      args: SelectSubset<T, SheetsUpdateArgs>
    ): Prisma__SheetsClient<SheetsGetPayload<T>>

    /**
     * Delete zero or more Sheets.
     * @param {SheetsDeleteManyArgs} args - Arguments to filter Sheets to delete.
     * @example
     * // Delete a few Sheets
     * const { count } = await prisma.sheets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SheetsDeleteManyArgs>(
      args?: SelectSubset<T, SheetsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheets
     * const sheets = await prisma.sheets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SheetsUpdateManyArgs>(
      args: SelectSubset<T, SheetsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sheets.
     * @param {SheetsUpsertArgs} args - Arguments to update or create a Sheets.
     * @example
     * // Update or create a Sheets
     * const sheets = await prisma.sheets.upsert({
     *   create: {
     *     // ... data to create a Sheets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheets we want to update
     *   }
     * })
    **/
    upsert<T extends SheetsUpsertArgs>(
      args: SelectSubset<T, SheetsUpsertArgs>
    ): Prisma__SheetsClient<SheetsGetPayload<T>>

    /**
     * Count the number of Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsCountArgs} args - Arguments to filter Sheets to count.
     * @example
     * // Count the number of Sheets
     * const count = await prisma.sheets.count({
     *   where: {
     *     // ... the filter for the Sheets we want to count
     *   }
     * })
    **/
    count<T extends SheetsCountArgs>(
      args?: Subset<T, SheetsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SheetsAggregateArgs>(args: Subset<T, SheetsAggregateArgs>): PrismaPromise<GetSheetsAggregateType<T>>

    /**
     * Group by Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SheetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetsGroupByArgs['orderBy'] }
        : { orderBy?: SheetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SheetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Sheets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SheetsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cellmap<T extends Sheets$cellmapArgs= {}>(args?: Subset<T, Sheets$cellmapArgs>): PrismaPromise<Array<CellmapGetPayload<T>>| Null>;

    colmap<T extends Sheets$colmapArgs= {}>(args?: Subset<T, Sheets$colmapArgs>): PrismaPromise<Array<ColmapGetPayload<T>>| Null>;

    rowmap<T extends Sheets$rowmapArgs= {}>(args?: Subset<T, Sheets$rowmapArgs>): PrismaPromise<Array<RowmapGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Sheets base type for findUnique actions
   */
  export type SheetsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
    /**
     * Filter, which Sheets to fetch.
     * 
    **/
    where: SheetsWhereUniqueInput
  }

  /**
   * Sheets findUnique
   */
  export interface SheetsFindUniqueArgs extends SheetsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sheets findUniqueOrThrow
   */
  export type SheetsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
    /**
     * Filter, which Sheets to fetch.
     * 
    **/
    where: SheetsWhereUniqueInput
  }


  /**
   * Sheets base type for findFirst actions
   */
  export type SheetsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
    /**
     * Filter, which Sheets to fetch.
     * 
    **/
    where?: SheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     * 
    **/
    orderBy?: Enumerable<SheetsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     * 
    **/
    cursor?: SheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     * 
    **/
    distinct?: Enumerable<SheetsScalarFieldEnum>
  }

  /**
   * Sheets findFirst
   */
  export interface SheetsFindFirstArgs extends SheetsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sheets findFirstOrThrow
   */
  export type SheetsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
    /**
     * Filter, which Sheets to fetch.
     * 
    **/
    where?: SheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     * 
    **/
    orderBy?: Enumerable<SheetsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     * 
    **/
    cursor?: SheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     * 
    **/
    distinct?: Enumerable<SheetsScalarFieldEnum>
  }


  /**
   * Sheets findMany
   */
  export type SheetsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
    /**
     * Filter, which Sheets to fetch.
     * 
    **/
    where?: SheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     * 
    **/
    orderBy?: Enumerable<SheetsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sheets.
     * 
    **/
    cursor?: SheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SheetsScalarFieldEnum>
  }


  /**
   * Sheets create
   */
  export type SheetsCreateArgs = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
    /**
     * The data needed to create a Sheets.
     * 
    **/
    data: XOR<SheetsCreateInput, SheetsUncheckedCreateInput>
  }


  /**
   * Sheets createMany
   */
  export type SheetsCreateManyArgs = {
    /**
     * The data used to create many Sheets.
     * 
    **/
    data: Enumerable<SheetsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Sheets update
   */
  export type SheetsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
    /**
     * The data needed to update a Sheets.
     * 
    **/
    data: XOR<SheetsUpdateInput, SheetsUncheckedUpdateInput>
    /**
     * Choose, which Sheets to update.
     * 
    **/
    where: SheetsWhereUniqueInput
  }


  /**
   * Sheets updateMany
   */
  export type SheetsUpdateManyArgs = {
    /**
     * The data used to update Sheets.
     * 
    **/
    data: XOR<SheetsUpdateManyMutationInput, SheetsUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     * 
    **/
    where?: SheetsWhereInput
  }


  /**
   * Sheets upsert
   */
  export type SheetsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
    /**
     * The filter to search for the Sheets to update in case it exists.
     * 
    **/
    where: SheetsWhereUniqueInput
    /**
     * In case the Sheets found by the `where` argument doesn't exist, create a new Sheets with this data.
     * 
    **/
    create: XOR<SheetsCreateInput, SheetsUncheckedCreateInput>
    /**
     * In case the Sheets was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SheetsUpdateInput, SheetsUncheckedUpdateInput>
  }


  /**
   * Sheets delete
   */
  export type SheetsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
    /**
     * Filter which Sheets to delete.
     * 
    **/
    where: SheetsWhereUniqueInput
  }


  /**
   * Sheets deleteMany
   */
  export type SheetsDeleteManyArgs = {
    /**
     * Filter which Sheets to delete
     * 
    **/
    where?: SheetsWhereInput
  }


  /**
   * Sheets.cellmap
   */
  export type Sheets$cellmapArgs = {
    /**
     * Select specific fields to fetch from the Cellmap
     * 
    **/
    select?: CellmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CellmapInclude | null
    where?: CellmapWhereInput
    orderBy?: Enumerable<CellmapOrderByWithRelationInput>
    cursor?: CellmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CellmapScalarFieldEnum>
  }


  /**
   * Sheets.colmap
   */
  export type Sheets$colmapArgs = {
    /**
     * Select specific fields to fetch from the Colmap
     * 
    **/
    select?: ColmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ColmapInclude | null
    where?: ColmapWhereInput
    orderBy?: Enumerable<ColmapOrderByWithRelationInput>
    cursor?: ColmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ColmapScalarFieldEnum>
  }


  /**
   * Sheets.rowmap
   */
  export type Sheets$rowmapArgs = {
    /**
     * Select specific fields to fetch from the Rowmap
     * 
    **/
    select?: RowmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RowmapInclude | null
    where?: RowmapWhereInput
    orderBy?: Enumerable<RowmapOrderByWithRelationInput>
    cursor?: RowmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RowmapScalarFieldEnum>
  }


  /**
   * Sheets without action
   */
  export type SheetsArgs = {
    /**
     * Select specific fields to fetch from the Sheets
     * 
    **/
    select?: SheetsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SheetsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CellmapScalarFieldEnum: {
    id: 'id',
    sheet_id: 'sheet_id',
    row_id: 'row_id',
    col_id: 'col_id',
    content: 'content'
  };

  export type CellmapScalarFieldEnum = (typeof CellmapScalarFieldEnum)[keyof typeof CellmapScalarFieldEnum]


  export const ColmapScalarFieldEnum: {
    id: 'id',
    sheet_id: 'sheet_id',
    startmarker: 'startmarker',
    endmarker: 'endmarker'
  };

  export type ColmapScalarFieldEnum = (typeof ColmapScalarFieldEnum)[keyof typeof ColmapScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RowmapScalarFieldEnum: {
    id: 'id',
    sheet_id: 'sheet_id',
    startmarker: 'startmarker',
    endmarker: 'endmarker'
  };

  export type RowmapScalarFieldEnum = (typeof RowmapScalarFieldEnum)[keyof typeof RowmapScalarFieldEnum]


  export const SheetsScalarFieldEnum: {
    id: 'id',
    rows: 'rows',
    cols: 'cols',
    startrow: 'startrow',
    endrow: 'endrow',
    startrol: 'startrol',
    endrol: 'endrol',
    created_at: 'created_at',
    title: 'title'
  };

  export type SheetsScalarFieldEnum = (typeof SheetsScalarFieldEnum)[keyof typeof SheetsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type CellmapWhereInput = {
    AND?: Enumerable<CellmapWhereInput>
    OR?: Enumerable<CellmapWhereInput>
    NOT?: Enumerable<CellmapWhereInput>
    id?: StringFilter | string
    sheet_id?: StringFilter | string
    row_id?: StringFilter | string
    col_id?: StringFilter | string
    content?: StringNullableFilter | string | null
    colmap?: XOR<ColmapRelationFilter, ColmapWhereInput>
    rowmap?: XOR<RowmapRelationFilter, RowmapWhereInput>
    sheets?: XOR<SheetsRelationFilter, SheetsWhereInput>
  }

  export type CellmapOrderByWithRelationInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    row_id?: SortOrder
    col_id?: SortOrder
    content?: SortOrder
    colmap?: ColmapOrderByWithRelationInput
    rowmap?: RowmapOrderByWithRelationInput
    sheets?: SheetsOrderByWithRelationInput
  }

  export type CellmapWhereUniqueInput = {
    id?: string
  }

  export type CellmapOrderByWithAggregationInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    row_id?: SortOrder
    col_id?: SortOrder
    content?: SortOrder
    _count?: CellmapCountOrderByAggregateInput
    _max?: CellmapMaxOrderByAggregateInput
    _min?: CellmapMinOrderByAggregateInput
  }

  export type CellmapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CellmapScalarWhereWithAggregatesInput>
    OR?: Enumerable<CellmapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CellmapScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sheet_id?: StringWithAggregatesFilter | string
    row_id?: StringWithAggregatesFilter | string
    col_id?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
  }

  export type ColmapWhereInput = {
    AND?: Enumerable<ColmapWhereInput>
    OR?: Enumerable<ColmapWhereInput>
    NOT?: Enumerable<ColmapWhereInput>
    id?: StringFilter | string
    sheet_id?: StringFilter | string
    startmarker?: StringFilter | string
    endmarker?: StringFilter | string
    cellmap?: CellmapListRelationFilter
    sheets?: XOR<SheetsRelationFilter, SheetsWhereInput>
  }

  export type ColmapOrderByWithRelationInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
    cellmap?: CellmapOrderByRelationAggregateInput
    sheets?: SheetsOrderByWithRelationInput
  }

  export type ColmapWhereUniqueInput = {
    id?: string
  }

  export type ColmapOrderByWithAggregationInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
    _count?: ColmapCountOrderByAggregateInput
    _max?: ColmapMaxOrderByAggregateInput
    _min?: ColmapMinOrderByAggregateInput
  }

  export type ColmapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ColmapScalarWhereWithAggregatesInput>
    OR?: Enumerable<ColmapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ColmapScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sheet_id?: StringWithAggregatesFilter | string
    startmarker?: StringWithAggregatesFilter | string
    endmarker?: StringWithAggregatesFilter | string
  }

  export type RowmapWhereInput = {
    AND?: Enumerable<RowmapWhereInput>
    OR?: Enumerable<RowmapWhereInput>
    NOT?: Enumerable<RowmapWhereInput>
    id?: StringFilter | string
    sheet_id?: StringFilter | string
    startmarker?: StringFilter | string
    endmarker?: StringFilter | string
    cellmap?: CellmapListRelationFilter
    sheets?: XOR<SheetsRelationFilter, SheetsWhereInput>
  }

  export type RowmapOrderByWithRelationInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
    cellmap?: CellmapOrderByRelationAggregateInput
    sheets?: SheetsOrderByWithRelationInput
  }

  export type RowmapWhereUniqueInput = {
    id?: string
  }

  export type RowmapOrderByWithAggregationInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
    _count?: RowmapCountOrderByAggregateInput
    _max?: RowmapMaxOrderByAggregateInput
    _min?: RowmapMinOrderByAggregateInput
  }

  export type RowmapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RowmapScalarWhereWithAggregatesInput>
    OR?: Enumerable<RowmapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RowmapScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sheet_id?: StringWithAggregatesFilter | string
    startmarker?: StringWithAggregatesFilter | string
    endmarker?: StringWithAggregatesFilter | string
  }

  export type SheetsWhereInput = {
    AND?: Enumerable<SheetsWhereInput>
    OR?: Enumerable<SheetsWhereInput>
    NOT?: Enumerable<SheetsWhereInput>
    id?: StringFilter | string
    rows?: IntFilter | number
    cols?: IntFilter | number
    startrow?: StringNullableFilter | string | null
    endrow?: StringNullableFilter | string | null
    startrol?: StringNullableFilter | string | null
    endrol?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    title?: StringNullableFilter | string | null
    cellmap?: CellmapListRelationFilter
    colmap?: ColmapListRelationFilter
    rowmap?: RowmapListRelationFilter
  }

  export type SheetsOrderByWithRelationInput = {
    id?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    startrow?: SortOrder
    endrow?: SortOrder
    startrol?: SortOrder
    endrol?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    cellmap?: CellmapOrderByRelationAggregateInput
    colmap?: ColmapOrderByRelationAggregateInput
    rowmap?: RowmapOrderByRelationAggregateInput
  }

  export type SheetsWhereUniqueInput = {
    id?: string
  }

  export type SheetsOrderByWithAggregationInput = {
    id?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    startrow?: SortOrder
    endrow?: SortOrder
    startrol?: SortOrder
    endrol?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    _count?: SheetsCountOrderByAggregateInput
    _avg?: SheetsAvgOrderByAggregateInput
    _max?: SheetsMaxOrderByAggregateInput
    _min?: SheetsMinOrderByAggregateInput
    _sum?: SheetsSumOrderByAggregateInput
  }

  export type SheetsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SheetsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SheetsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SheetsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    rows?: IntWithAggregatesFilter | number
    cols?: IntWithAggregatesFilter | number
    startrow?: StringNullableWithAggregatesFilter | string | null
    endrow?: StringNullableWithAggregatesFilter | string | null
    startrol?: StringNullableWithAggregatesFilter | string | null
    endrol?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    title?: StringNullableWithAggregatesFilter | string | null
  }

  export type CellmapCreateInput = {
    id: string
    content?: string | null
    colmap: ColmapCreateNestedOneWithoutCellmapInput
    rowmap: RowmapCreateNestedOneWithoutCellmapInput
    sheets: SheetsCreateNestedOneWithoutCellmapInput
  }

  export type CellmapUncheckedCreateInput = {
    id: string
    sheet_id: string
    row_id: string
    col_id: string
    content?: string | null
  }

  export type CellmapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    colmap?: ColmapUpdateOneRequiredWithoutCellmapNestedInput
    rowmap?: RowmapUpdateOneRequiredWithoutCellmapNestedInput
    sheets?: SheetsUpdateOneRequiredWithoutCellmapNestedInput
  }

  export type CellmapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    row_id?: StringFieldUpdateOperationsInput | string
    col_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CellmapCreateManyInput = {
    id: string
    sheet_id: string
    row_id: string
    col_id: string
    content?: string | null
  }

  export type CellmapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CellmapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    row_id?: StringFieldUpdateOperationsInput | string
    col_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ColmapCreateInput = {
    id: string
    startmarker: string
    endmarker: string
    cellmap?: CellmapCreateNestedManyWithoutColmapInput
    sheets: SheetsCreateNestedOneWithoutColmapInput
  }

  export type ColmapUncheckedCreateInput = {
    id: string
    sheet_id: string
    startmarker: string
    endmarker: string
    cellmap?: CellmapUncheckedCreateNestedManyWithoutColmapInput
  }

  export type ColmapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    cellmap?: CellmapUpdateManyWithoutColmapNestedInput
    sheets?: SheetsUpdateOneRequiredWithoutColmapNestedInput
  }

  export type ColmapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    cellmap?: CellmapUncheckedUpdateManyWithoutColmapNestedInput
  }

  export type ColmapCreateManyInput = {
    id: string
    sheet_id: string
    startmarker: string
    endmarker: string
  }

  export type ColmapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
  }

  export type ColmapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
  }

  export type RowmapCreateInput = {
    id: string
    startmarker: string
    endmarker: string
    cellmap?: CellmapCreateNestedManyWithoutRowmapInput
    sheets: SheetsCreateNestedOneWithoutRowmapInput
  }

  export type RowmapUncheckedCreateInput = {
    id: string
    sheet_id: string
    startmarker: string
    endmarker: string
    cellmap?: CellmapUncheckedCreateNestedManyWithoutRowmapInput
  }

  export type RowmapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    cellmap?: CellmapUpdateManyWithoutRowmapNestedInput
    sheets?: SheetsUpdateOneRequiredWithoutRowmapNestedInput
  }

  export type RowmapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    cellmap?: CellmapUncheckedUpdateManyWithoutRowmapNestedInput
  }

  export type RowmapCreateManyInput = {
    id: string
    sheet_id: string
    startmarker: string
    endmarker: string
  }

  export type RowmapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
  }

  export type RowmapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
  }

  export type SheetsCreateInput = {
    id: string
    rows: number
    cols: number
    startrow?: string | null
    endrow?: string | null
    startrol?: string | null
    endrol?: string | null
    created_at: Date | string
    title?: string | null
    cellmap?: CellmapCreateNestedManyWithoutSheetsInput
    colmap?: ColmapCreateNestedManyWithoutSheetsInput
    rowmap?: RowmapCreateNestedManyWithoutSheetsInput
  }

  export type SheetsUncheckedCreateInput = {
    id: string
    rows: number
    cols: number
    startrow?: string | null
    endrow?: string | null
    startrol?: string | null
    endrol?: string | null
    created_at: Date | string
    title?: string | null
    cellmap?: CellmapUncheckedCreateNestedManyWithoutSheetsInput
    colmap?: ColmapUncheckedCreateNestedManyWithoutSheetsInput
    rowmap?: RowmapUncheckedCreateNestedManyWithoutSheetsInput
  }

  export type SheetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    cellmap?: CellmapUpdateManyWithoutSheetsNestedInput
    colmap?: ColmapUpdateManyWithoutSheetsNestedInput
    rowmap?: RowmapUpdateManyWithoutSheetsNestedInput
  }

  export type SheetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    cellmap?: CellmapUncheckedUpdateManyWithoutSheetsNestedInput
    colmap?: ColmapUncheckedUpdateManyWithoutSheetsNestedInput
    rowmap?: RowmapUncheckedUpdateManyWithoutSheetsNestedInput
  }

  export type SheetsCreateManyInput = {
    id: string
    rows: number
    cols: number
    startrow?: string | null
    endrow?: string | null
    startrol?: string | null
    endrol?: string | null
    created_at: Date | string
    title?: string | null
  }

  export type SheetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SheetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type ColmapRelationFilter = {
    is?: ColmapWhereInput
    isNot?: ColmapWhereInput
  }

  export type RowmapRelationFilter = {
    is?: RowmapWhereInput
    isNot?: RowmapWhereInput
  }

  export type SheetsRelationFilter = {
    is?: SheetsWhereInput
    isNot?: SheetsWhereInput
  }

  export type CellmapCountOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    row_id?: SortOrder
    col_id?: SortOrder
    content?: SortOrder
  }

  export type CellmapMaxOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    row_id?: SortOrder
    col_id?: SortOrder
    content?: SortOrder
  }

  export type CellmapMinOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    row_id?: SortOrder
    col_id?: SortOrder
    content?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type CellmapListRelationFilter = {
    every?: CellmapWhereInput
    some?: CellmapWhereInput
    none?: CellmapWhereInput
  }

  export type CellmapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColmapCountOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
  }

  export type ColmapMaxOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
  }

  export type ColmapMinOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
  }

  export type RowmapCountOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
  }

  export type RowmapMaxOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
  }

  export type RowmapMinOrderByAggregateInput = {
    id?: SortOrder
    sheet_id?: SortOrder
    startmarker?: SortOrder
    endmarker?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ColmapListRelationFilter = {
    every?: ColmapWhereInput
    some?: ColmapWhereInput
    none?: ColmapWhereInput
  }

  export type RowmapListRelationFilter = {
    every?: RowmapWhereInput
    some?: RowmapWhereInput
    none?: RowmapWhereInput
  }

  export type ColmapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RowmapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SheetsCountOrderByAggregateInput = {
    id?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    startrow?: SortOrder
    endrow?: SortOrder
    startrol?: SortOrder
    endrol?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
  }

  export type SheetsAvgOrderByAggregateInput = {
    rows?: SortOrder
    cols?: SortOrder
  }

  export type SheetsMaxOrderByAggregateInput = {
    id?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    startrow?: SortOrder
    endrow?: SortOrder
    startrol?: SortOrder
    endrol?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
  }

  export type SheetsMinOrderByAggregateInput = {
    id?: SortOrder
    rows?: SortOrder
    cols?: SortOrder
    startrow?: SortOrder
    endrow?: SortOrder
    startrol?: SortOrder
    endrol?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
  }

  export type SheetsSumOrderByAggregateInput = {
    rows?: SortOrder
    cols?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ColmapCreateNestedOneWithoutCellmapInput = {
    create?: XOR<ColmapCreateWithoutCellmapInput, ColmapUncheckedCreateWithoutCellmapInput>
    connectOrCreate?: ColmapCreateOrConnectWithoutCellmapInput
    connect?: ColmapWhereUniqueInput
  }

  export type RowmapCreateNestedOneWithoutCellmapInput = {
    create?: XOR<RowmapCreateWithoutCellmapInput, RowmapUncheckedCreateWithoutCellmapInput>
    connectOrCreate?: RowmapCreateOrConnectWithoutCellmapInput
    connect?: RowmapWhereUniqueInput
  }

  export type SheetsCreateNestedOneWithoutCellmapInput = {
    create?: XOR<SheetsCreateWithoutCellmapInput, SheetsUncheckedCreateWithoutCellmapInput>
    connectOrCreate?: SheetsCreateOrConnectWithoutCellmapInput
    connect?: SheetsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ColmapUpdateOneRequiredWithoutCellmapNestedInput = {
    create?: XOR<ColmapCreateWithoutCellmapInput, ColmapUncheckedCreateWithoutCellmapInput>
    connectOrCreate?: ColmapCreateOrConnectWithoutCellmapInput
    upsert?: ColmapUpsertWithoutCellmapInput
    connect?: ColmapWhereUniqueInput
    update?: XOR<ColmapUpdateWithoutCellmapInput, ColmapUncheckedUpdateWithoutCellmapInput>
  }

  export type RowmapUpdateOneRequiredWithoutCellmapNestedInput = {
    create?: XOR<RowmapCreateWithoutCellmapInput, RowmapUncheckedCreateWithoutCellmapInput>
    connectOrCreate?: RowmapCreateOrConnectWithoutCellmapInput
    upsert?: RowmapUpsertWithoutCellmapInput
    connect?: RowmapWhereUniqueInput
    update?: XOR<RowmapUpdateWithoutCellmapInput, RowmapUncheckedUpdateWithoutCellmapInput>
  }

  export type SheetsUpdateOneRequiredWithoutCellmapNestedInput = {
    create?: XOR<SheetsCreateWithoutCellmapInput, SheetsUncheckedCreateWithoutCellmapInput>
    connectOrCreate?: SheetsCreateOrConnectWithoutCellmapInput
    upsert?: SheetsUpsertWithoutCellmapInput
    connect?: SheetsWhereUniqueInput
    update?: XOR<SheetsUpdateWithoutCellmapInput, SheetsUncheckedUpdateWithoutCellmapInput>
  }

  export type CellmapCreateNestedManyWithoutColmapInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutColmapInput>, Enumerable<CellmapUncheckedCreateWithoutColmapInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutColmapInput>
    createMany?: CellmapCreateManyColmapInputEnvelope
    connect?: Enumerable<CellmapWhereUniqueInput>
  }

  export type SheetsCreateNestedOneWithoutColmapInput = {
    create?: XOR<SheetsCreateWithoutColmapInput, SheetsUncheckedCreateWithoutColmapInput>
    connectOrCreate?: SheetsCreateOrConnectWithoutColmapInput
    connect?: SheetsWhereUniqueInput
  }

  export type CellmapUncheckedCreateNestedManyWithoutColmapInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutColmapInput>, Enumerable<CellmapUncheckedCreateWithoutColmapInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutColmapInput>
    createMany?: CellmapCreateManyColmapInputEnvelope
    connect?: Enumerable<CellmapWhereUniqueInput>
  }

  export type CellmapUpdateManyWithoutColmapNestedInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutColmapInput>, Enumerable<CellmapUncheckedCreateWithoutColmapInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutColmapInput>
    upsert?: Enumerable<CellmapUpsertWithWhereUniqueWithoutColmapInput>
    createMany?: CellmapCreateManyColmapInputEnvelope
    set?: Enumerable<CellmapWhereUniqueInput>
    disconnect?: Enumerable<CellmapWhereUniqueInput>
    delete?: Enumerable<CellmapWhereUniqueInput>
    connect?: Enumerable<CellmapWhereUniqueInput>
    update?: Enumerable<CellmapUpdateWithWhereUniqueWithoutColmapInput>
    updateMany?: Enumerable<CellmapUpdateManyWithWhereWithoutColmapInput>
    deleteMany?: Enumerable<CellmapScalarWhereInput>
  }

  export type SheetsUpdateOneRequiredWithoutColmapNestedInput = {
    create?: XOR<SheetsCreateWithoutColmapInput, SheetsUncheckedCreateWithoutColmapInput>
    connectOrCreate?: SheetsCreateOrConnectWithoutColmapInput
    upsert?: SheetsUpsertWithoutColmapInput
    connect?: SheetsWhereUniqueInput
    update?: XOR<SheetsUpdateWithoutColmapInput, SheetsUncheckedUpdateWithoutColmapInput>
  }

  export type CellmapUncheckedUpdateManyWithoutColmapNestedInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutColmapInput>, Enumerable<CellmapUncheckedCreateWithoutColmapInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutColmapInput>
    upsert?: Enumerable<CellmapUpsertWithWhereUniqueWithoutColmapInput>
    createMany?: CellmapCreateManyColmapInputEnvelope
    set?: Enumerable<CellmapWhereUniqueInput>
    disconnect?: Enumerable<CellmapWhereUniqueInput>
    delete?: Enumerable<CellmapWhereUniqueInput>
    connect?: Enumerable<CellmapWhereUniqueInput>
    update?: Enumerable<CellmapUpdateWithWhereUniqueWithoutColmapInput>
    updateMany?: Enumerable<CellmapUpdateManyWithWhereWithoutColmapInput>
    deleteMany?: Enumerable<CellmapScalarWhereInput>
  }

  export type CellmapCreateNestedManyWithoutRowmapInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutRowmapInput>, Enumerable<CellmapUncheckedCreateWithoutRowmapInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutRowmapInput>
    createMany?: CellmapCreateManyRowmapInputEnvelope
    connect?: Enumerable<CellmapWhereUniqueInput>
  }

  export type SheetsCreateNestedOneWithoutRowmapInput = {
    create?: XOR<SheetsCreateWithoutRowmapInput, SheetsUncheckedCreateWithoutRowmapInput>
    connectOrCreate?: SheetsCreateOrConnectWithoutRowmapInput
    connect?: SheetsWhereUniqueInput
  }

  export type CellmapUncheckedCreateNestedManyWithoutRowmapInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutRowmapInput>, Enumerable<CellmapUncheckedCreateWithoutRowmapInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutRowmapInput>
    createMany?: CellmapCreateManyRowmapInputEnvelope
    connect?: Enumerable<CellmapWhereUniqueInput>
  }

  export type CellmapUpdateManyWithoutRowmapNestedInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutRowmapInput>, Enumerable<CellmapUncheckedCreateWithoutRowmapInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutRowmapInput>
    upsert?: Enumerable<CellmapUpsertWithWhereUniqueWithoutRowmapInput>
    createMany?: CellmapCreateManyRowmapInputEnvelope
    set?: Enumerable<CellmapWhereUniqueInput>
    disconnect?: Enumerable<CellmapWhereUniqueInput>
    delete?: Enumerable<CellmapWhereUniqueInput>
    connect?: Enumerable<CellmapWhereUniqueInput>
    update?: Enumerable<CellmapUpdateWithWhereUniqueWithoutRowmapInput>
    updateMany?: Enumerable<CellmapUpdateManyWithWhereWithoutRowmapInput>
    deleteMany?: Enumerable<CellmapScalarWhereInput>
  }

  export type SheetsUpdateOneRequiredWithoutRowmapNestedInput = {
    create?: XOR<SheetsCreateWithoutRowmapInput, SheetsUncheckedCreateWithoutRowmapInput>
    connectOrCreate?: SheetsCreateOrConnectWithoutRowmapInput
    upsert?: SheetsUpsertWithoutRowmapInput
    connect?: SheetsWhereUniqueInput
    update?: XOR<SheetsUpdateWithoutRowmapInput, SheetsUncheckedUpdateWithoutRowmapInput>
  }

  export type CellmapUncheckedUpdateManyWithoutRowmapNestedInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutRowmapInput>, Enumerable<CellmapUncheckedCreateWithoutRowmapInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutRowmapInput>
    upsert?: Enumerable<CellmapUpsertWithWhereUniqueWithoutRowmapInput>
    createMany?: CellmapCreateManyRowmapInputEnvelope
    set?: Enumerable<CellmapWhereUniqueInput>
    disconnect?: Enumerable<CellmapWhereUniqueInput>
    delete?: Enumerable<CellmapWhereUniqueInput>
    connect?: Enumerable<CellmapWhereUniqueInput>
    update?: Enumerable<CellmapUpdateWithWhereUniqueWithoutRowmapInput>
    updateMany?: Enumerable<CellmapUpdateManyWithWhereWithoutRowmapInput>
    deleteMany?: Enumerable<CellmapScalarWhereInput>
  }

  export type CellmapCreateNestedManyWithoutSheetsInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutSheetsInput>, Enumerable<CellmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutSheetsInput>
    createMany?: CellmapCreateManySheetsInputEnvelope
    connect?: Enumerable<CellmapWhereUniqueInput>
  }

  export type ColmapCreateNestedManyWithoutSheetsInput = {
    create?: XOR<Enumerable<ColmapCreateWithoutSheetsInput>, Enumerable<ColmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<ColmapCreateOrConnectWithoutSheetsInput>
    createMany?: ColmapCreateManySheetsInputEnvelope
    connect?: Enumerable<ColmapWhereUniqueInput>
  }

  export type RowmapCreateNestedManyWithoutSheetsInput = {
    create?: XOR<Enumerable<RowmapCreateWithoutSheetsInput>, Enumerable<RowmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<RowmapCreateOrConnectWithoutSheetsInput>
    createMany?: RowmapCreateManySheetsInputEnvelope
    connect?: Enumerable<RowmapWhereUniqueInput>
  }

  export type CellmapUncheckedCreateNestedManyWithoutSheetsInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutSheetsInput>, Enumerable<CellmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutSheetsInput>
    createMany?: CellmapCreateManySheetsInputEnvelope
    connect?: Enumerable<CellmapWhereUniqueInput>
  }

  export type ColmapUncheckedCreateNestedManyWithoutSheetsInput = {
    create?: XOR<Enumerable<ColmapCreateWithoutSheetsInput>, Enumerable<ColmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<ColmapCreateOrConnectWithoutSheetsInput>
    createMany?: ColmapCreateManySheetsInputEnvelope
    connect?: Enumerable<ColmapWhereUniqueInput>
  }

  export type RowmapUncheckedCreateNestedManyWithoutSheetsInput = {
    create?: XOR<Enumerable<RowmapCreateWithoutSheetsInput>, Enumerable<RowmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<RowmapCreateOrConnectWithoutSheetsInput>
    createMany?: RowmapCreateManySheetsInputEnvelope
    connect?: Enumerable<RowmapWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CellmapUpdateManyWithoutSheetsNestedInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutSheetsInput>, Enumerable<CellmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutSheetsInput>
    upsert?: Enumerable<CellmapUpsertWithWhereUniqueWithoutSheetsInput>
    createMany?: CellmapCreateManySheetsInputEnvelope
    set?: Enumerable<CellmapWhereUniqueInput>
    disconnect?: Enumerable<CellmapWhereUniqueInput>
    delete?: Enumerable<CellmapWhereUniqueInput>
    connect?: Enumerable<CellmapWhereUniqueInput>
    update?: Enumerable<CellmapUpdateWithWhereUniqueWithoutSheetsInput>
    updateMany?: Enumerable<CellmapUpdateManyWithWhereWithoutSheetsInput>
    deleteMany?: Enumerable<CellmapScalarWhereInput>
  }

  export type ColmapUpdateManyWithoutSheetsNestedInput = {
    create?: XOR<Enumerable<ColmapCreateWithoutSheetsInput>, Enumerable<ColmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<ColmapCreateOrConnectWithoutSheetsInput>
    upsert?: Enumerable<ColmapUpsertWithWhereUniqueWithoutSheetsInput>
    createMany?: ColmapCreateManySheetsInputEnvelope
    set?: Enumerable<ColmapWhereUniqueInput>
    disconnect?: Enumerable<ColmapWhereUniqueInput>
    delete?: Enumerable<ColmapWhereUniqueInput>
    connect?: Enumerable<ColmapWhereUniqueInput>
    update?: Enumerable<ColmapUpdateWithWhereUniqueWithoutSheetsInput>
    updateMany?: Enumerable<ColmapUpdateManyWithWhereWithoutSheetsInput>
    deleteMany?: Enumerable<ColmapScalarWhereInput>
  }

  export type RowmapUpdateManyWithoutSheetsNestedInput = {
    create?: XOR<Enumerable<RowmapCreateWithoutSheetsInput>, Enumerable<RowmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<RowmapCreateOrConnectWithoutSheetsInput>
    upsert?: Enumerable<RowmapUpsertWithWhereUniqueWithoutSheetsInput>
    createMany?: RowmapCreateManySheetsInputEnvelope
    set?: Enumerable<RowmapWhereUniqueInput>
    disconnect?: Enumerable<RowmapWhereUniqueInput>
    delete?: Enumerable<RowmapWhereUniqueInput>
    connect?: Enumerable<RowmapWhereUniqueInput>
    update?: Enumerable<RowmapUpdateWithWhereUniqueWithoutSheetsInput>
    updateMany?: Enumerable<RowmapUpdateManyWithWhereWithoutSheetsInput>
    deleteMany?: Enumerable<RowmapScalarWhereInput>
  }

  export type CellmapUncheckedUpdateManyWithoutSheetsNestedInput = {
    create?: XOR<Enumerable<CellmapCreateWithoutSheetsInput>, Enumerable<CellmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<CellmapCreateOrConnectWithoutSheetsInput>
    upsert?: Enumerable<CellmapUpsertWithWhereUniqueWithoutSheetsInput>
    createMany?: CellmapCreateManySheetsInputEnvelope
    set?: Enumerable<CellmapWhereUniqueInput>
    disconnect?: Enumerable<CellmapWhereUniqueInput>
    delete?: Enumerable<CellmapWhereUniqueInput>
    connect?: Enumerable<CellmapWhereUniqueInput>
    update?: Enumerable<CellmapUpdateWithWhereUniqueWithoutSheetsInput>
    updateMany?: Enumerable<CellmapUpdateManyWithWhereWithoutSheetsInput>
    deleteMany?: Enumerable<CellmapScalarWhereInput>
  }

  export type ColmapUncheckedUpdateManyWithoutSheetsNestedInput = {
    create?: XOR<Enumerable<ColmapCreateWithoutSheetsInput>, Enumerable<ColmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<ColmapCreateOrConnectWithoutSheetsInput>
    upsert?: Enumerable<ColmapUpsertWithWhereUniqueWithoutSheetsInput>
    createMany?: ColmapCreateManySheetsInputEnvelope
    set?: Enumerable<ColmapWhereUniqueInput>
    disconnect?: Enumerable<ColmapWhereUniqueInput>
    delete?: Enumerable<ColmapWhereUniqueInput>
    connect?: Enumerable<ColmapWhereUniqueInput>
    update?: Enumerable<ColmapUpdateWithWhereUniqueWithoutSheetsInput>
    updateMany?: Enumerable<ColmapUpdateManyWithWhereWithoutSheetsInput>
    deleteMany?: Enumerable<ColmapScalarWhereInput>
  }

  export type RowmapUncheckedUpdateManyWithoutSheetsNestedInput = {
    create?: XOR<Enumerable<RowmapCreateWithoutSheetsInput>, Enumerable<RowmapUncheckedCreateWithoutSheetsInput>>
    connectOrCreate?: Enumerable<RowmapCreateOrConnectWithoutSheetsInput>
    upsert?: Enumerable<RowmapUpsertWithWhereUniqueWithoutSheetsInput>
    createMany?: RowmapCreateManySheetsInputEnvelope
    set?: Enumerable<RowmapWhereUniqueInput>
    disconnect?: Enumerable<RowmapWhereUniqueInput>
    delete?: Enumerable<RowmapWhereUniqueInput>
    connect?: Enumerable<RowmapWhereUniqueInput>
    update?: Enumerable<RowmapUpdateWithWhereUniqueWithoutSheetsInput>
    updateMany?: Enumerable<RowmapUpdateManyWithWhereWithoutSheetsInput>
    deleteMany?: Enumerable<RowmapScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ColmapCreateWithoutCellmapInput = {
    id: string
    startmarker: string
    endmarker: string
    sheets: SheetsCreateNestedOneWithoutColmapInput
  }

  export type ColmapUncheckedCreateWithoutCellmapInput = {
    id: string
    sheet_id: string
    startmarker: string
    endmarker: string
  }

  export type ColmapCreateOrConnectWithoutCellmapInput = {
    where: ColmapWhereUniqueInput
    create: XOR<ColmapCreateWithoutCellmapInput, ColmapUncheckedCreateWithoutCellmapInput>
  }

  export type RowmapCreateWithoutCellmapInput = {
    id: string
    startmarker: string
    endmarker: string
    sheets: SheetsCreateNestedOneWithoutRowmapInput
  }

  export type RowmapUncheckedCreateWithoutCellmapInput = {
    id: string
    sheet_id: string
    startmarker: string
    endmarker: string
  }

  export type RowmapCreateOrConnectWithoutCellmapInput = {
    where: RowmapWhereUniqueInput
    create: XOR<RowmapCreateWithoutCellmapInput, RowmapUncheckedCreateWithoutCellmapInput>
  }

  export type SheetsCreateWithoutCellmapInput = {
    id: string
    rows: number
    cols: number
    startrow?: string | null
    endrow?: string | null
    startrol?: string | null
    endrol?: string | null
    created_at: Date | string
    title?: string | null
    colmap?: ColmapCreateNestedManyWithoutSheetsInput
    rowmap?: RowmapCreateNestedManyWithoutSheetsInput
  }

  export type SheetsUncheckedCreateWithoutCellmapInput = {
    id: string
    rows: number
    cols: number
    startrow?: string | null
    endrow?: string | null
    startrol?: string | null
    endrol?: string | null
    created_at: Date | string
    title?: string | null
    colmap?: ColmapUncheckedCreateNestedManyWithoutSheetsInput
    rowmap?: RowmapUncheckedCreateNestedManyWithoutSheetsInput
  }

  export type SheetsCreateOrConnectWithoutCellmapInput = {
    where: SheetsWhereUniqueInput
    create: XOR<SheetsCreateWithoutCellmapInput, SheetsUncheckedCreateWithoutCellmapInput>
  }

  export type ColmapUpsertWithoutCellmapInput = {
    update: XOR<ColmapUpdateWithoutCellmapInput, ColmapUncheckedUpdateWithoutCellmapInput>
    create: XOR<ColmapCreateWithoutCellmapInput, ColmapUncheckedCreateWithoutCellmapInput>
  }

  export type ColmapUpdateWithoutCellmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    sheets?: SheetsUpdateOneRequiredWithoutColmapNestedInput
  }

  export type ColmapUncheckedUpdateWithoutCellmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
  }

  export type RowmapUpsertWithoutCellmapInput = {
    update: XOR<RowmapUpdateWithoutCellmapInput, RowmapUncheckedUpdateWithoutCellmapInput>
    create: XOR<RowmapCreateWithoutCellmapInput, RowmapUncheckedCreateWithoutCellmapInput>
  }

  export type RowmapUpdateWithoutCellmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    sheets?: SheetsUpdateOneRequiredWithoutRowmapNestedInput
  }

  export type RowmapUncheckedUpdateWithoutCellmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
  }

  export type SheetsUpsertWithoutCellmapInput = {
    update: XOR<SheetsUpdateWithoutCellmapInput, SheetsUncheckedUpdateWithoutCellmapInput>
    create: XOR<SheetsCreateWithoutCellmapInput, SheetsUncheckedCreateWithoutCellmapInput>
  }

  export type SheetsUpdateWithoutCellmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    colmap?: ColmapUpdateManyWithoutSheetsNestedInput
    rowmap?: RowmapUpdateManyWithoutSheetsNestedInput
  }

  export type SheetsUncheckedUpdateWithoutCellmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    colmap?: ColmapUncheckedUpdateManyWithoutSheetsNestedInput
    rowmap?: RowmapUncheckedUpdateManyWithoutSheetsNestedInput
  }

  export type CellmapCreateWithoutColmapInput = {
    id: string
    content?: string | null
    rowmap: RowmapCreateNestedOneWithoutCellmapInput
    sheets: SheetsCreateNestedOneWithoutCellmapInput
  }

  export type CellmapUncheckedCreateWithoutColmapInput = {
    id: string
    sheet_id: string
    row_id: string
    content?: string | null
  }

  export type CellmapCreateOrConnectWithoutColmapInput = {
    where: CellmapWhereUniqueInput
    create: XOR<CellmapCreateWithoutColmapInput, CellmapUncheckedCreateWithoutColmapInput>
  }

  export type CellmapCreateManyColmapInputEnvelope = {
    data: Enumerable<CellmapCreateManyColmapInput>
    skipDuplicates?: boolean
  }

  export type SheetsCreateWithoutColmapInput = {
    id: string
    rows: number
    cols: number
    startrow?: string | null
    endrow?: string | null
    startrol?: string | null
    endrol?: string | null
    created_at: Date | string
    title?: string | null
    cellmap?: CellmapCreateNestedManyWithoutSheetsInput
    rowmap?: RowmapCreateNestedManyWithoutSheetsInput
  }

  export type SheetsUncheckedCreateWithoutColmapInput = {
    id: string
    rows: number
    cols: number
    startrow?: string | null
    endrow?: string | null
    startrol?: string | null
    endrol?: string | null
    created_at: Date | string
    title?: string | null
    cellmap?: CellmapUncheckedCreateNestedManyWithoutSheetsInput
    rowmap?: RowmapUncheckedCreateNestedManyWithoutSheetsInput
  }

  export type SheetsCreateOrConnectWithoutColmapInput = {
    where: SheetsWhereUniqueInput
    create: XOR<SheetsCreateWithoutColmapInput, SheetsUncheckedCreateWithoutColmapInput>
  }

  export type CellmapUpsertWithWhereUniqueWithoutColmapInput = {
    where: CellmapWhereUniqueInput
    update: XOR<CellmapUpdateWithoutColmapInput, CellmapUncheckedUpdateWithoutColmapInput>
    create: XOR<CellmapCreateWithoutColmapInput, CellmapUncheckedCreateWithoutColmapInput>
  }

  export type CellmapUpdateWithWhereUniqueWithoutColmapInput = {
    where: CellmapWhereUniqueInput
    data: XOR<CellmapUpdateWithoutColmapInput, CellmapUncheckedUpdateWithoutColmapInput>
  }

  export type CellmapUpdateManyWithWhereWithoutColmapInput = {
    where: CellmapScalarWhereInput
    data: XOR<CellmapUpdateManyMutationInput, CellmapUncheckedUpdateManyWithoutCellmapInput>
  }

  export type CellmapScalarWhereInput = {
    AND?: Enumerable<CellmapScalarWhereInput>
    OR?: Enumerable<CellmapScalarWhereInput>
    NOT?: Enumerable<CellmapScalarWhereInput>
    id?: StringFilter | string
    sheet_id?: StringFilter | string
    row_id?: StringFilter | string
    col_id?: StringFilter | string
    content?: StringNullableFilter | string | null
  }

  export type SheetsUpsertWithoutColmapInput = {
    update: XOR<SheetsUpdateWithoutColmapInput, SheetsUncheckedUpdateWithoutColmapInput>
    create: XOR<SheetsCreateWithoutColmapInput, SheetsUncheckedCreateWithoutColmapInput>
  }

  export type SheetsUpdateWithoutColmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    cellmap?: CellmapUpdateManyWithoutSheetsNestedInput
    rowmap?: RowmapUpdateManyWithoutSheetsNestedInput
  }

  export type SheetsUncheckedUpdateWithoutColmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    cellmap?: CellmapUncheckedUpdateManyWithoutSheetsNestedInput
    rowmap?: RowmapUncheckedUpdateManyWithoutSheetsNestedInput
  }

  export type CellmapCreateWithoutRowmapInput = {
    id: string
    content?: string | null
    colmap: ColmapCreateNestedOneWithoutCellmapInput
    sheets: SheetsCreateNestedOneWithoutCellmapInput
  }

  export type CellmapUncheckedCreateWithoutRowmapInput = {
    id: string
    sheet_id: string
    col_id: string
    content?: string | null
  }

  export type CellmapCreateOrConnectWithoutRowmapInput = {
    where: CellmapWhereUniqueInput
    create: XOR<CellmapCreateWithoutRowmapInput, CellmapUncheckedCreateWithoutRowmapInput>
  }

  export type CellmapCreateManyRowmapInputEnvelope = {
    data: Enumerable<CellmapCreateManyRowmapInput>
    skipDuplicates?: boolean
  }

  export type SheetsCreateWithoutRowmapInput = {
    id: string
    rows: number
    cols: number
    startrow?: string | null
    endrow?: string | null
    startrol?: string | null
    endrol?: string | null
    created_at: Date | string
    title?: string | null
    cellmap?: CellmapCreateNestedManyWithoutSheetsInput
    colmap?: ColmapCreateNestedManyWithoutSheetsInput
  }

  export type SheetsUncheckedCreateWithoutRowmapInput = {
    id: string
    rows: number
    cols: number
    startrow?: string | null
    endrow?: string | null
    startrol?: string | null
    endrol?: string | null
    created_at: Date | string
    title?: string | null
    cellmap?: CellmapUncheckedCreateNestedManyWithoutSheetsInput
    colmap?: ColmapUncheckedCreateNestedManyWithoutSheetsInput
  }

  export type SheetsCreateOrConnectWithoutRowmapInput = {
    where: SheetsWhereUniqueInput
    create: XOR<SheetsCreateWithoutRowmapInput, SheetsUncheckedCreateWithoutRowmapInput>
  }

  export type CellmapUpsertWithWhereUniqueWithoutRowmapInput = {
    where: CellmapWhereUniqueInput
    update: XOR<CellmapUpdateWithoutRowmapInput, CellmapUncheckedUpdateWithoutRowmapInput>
    create: XOR<CellmapCreateWithoutRowmapInput, CellmapUncheckedCreateWithoutRowmapInput>
  }

  export type CellmapUpdateWithWhereUniqueWithoutRowmapInput = {
    where: CellmapWhereUniqueInput
    data: XOR<CellmapUpdateWithoutRowmapInput, CellmapUncheckedUpdateWithoutRowmapInput>
  }

  export type CellmapUpdateManyWithWhereWithoutRowmapInput = {
    where: CellmapScalarWhereInput
    data: XOR<CellmapUpdateManyMutationInput, CellmapUncheckedUpdateManyWithoutCellmapInput>
  }

  export type SheetsUpsertWithoutRowmapInput = {
    update: XOR<SheetsUpdateWithoutRowmapInput, SheetsUncheckedUpdateWithoutRowmapInput>
    create: XOR<SheetsCreateWithoutRowmapInput, SheetsUncheckedCreateWithoutRowmapInput>
  }

  export type SheetsUpdateWithoutRowmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    cellmap?: CellmapUpdateManyWithoutSheetsNestedInput
    colmap?: ColmapUpdateManyWithoutSheetsNestedInput
  }

  export type SheetsUncheckedUpdateWithoutRowmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    rows?: IntFieldUpdateOperationsInput | number
    cols?: IntFieldUpdateOperationsInput | number
    startrow?: NullableStringFieldUpdateOperationsInput | string | null
    endrow?: NullableStringFieldUpdateOperationsInput | string | null
    startrol?: NullableStringFieldUpdateOperationsInput | string | null
    endrol?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    cellmap?: CellmapUncheckedUpdateManyWithoutSheetsNestedInput
    colmap?: ColmapUncheckedUpdateManyWithoutSheetsNestedInput
  }

  export type CellmapCreateWithoutSheetsInput = {
    id: string
    content?: string | null
    colmap: ColmapCreateNestedOneWithoutCellmapInput
    rowmap: RowmapCreateNestedOneWithoutCellmapInput
  }

  export type CellmapUncheckedCreateWithoutSheetsInput = {
    id: string
    row_id: string
    col_id: string
    content?: string | null
  }

  export type CellmapCreateOrConnectWithoutSheetsInput = {
    where: CellmapWhereUniqueInput
    create: XOR<CellmapCreateWithoutSheetsInput, CellmapUncheckedCreateWithoutSheetsInput>
  }

  export type CellmapCreateManySheetsInputEnvelope = {
    data: Enumerable<CellmapCreateManySheetsInput>
    skipDuplicates?: boolean
  }

  export type ColmapCreateWithoutSheetsInput = {
    id: string
    startmarker: string
    endmarker: string
    cellmap?: CellmapCreateNestedManyWithoutColmapInput
  }

  export type ColmapUncheckedCreateWithoutSheetsInput = {
    id: string
    startmarker: string
    endmarker: string
    cellmap?: CellmapUncheckedCreateNestedManyWithoutColmapInput
  }

  export type ColmapCreateOrConnectWithoutSheetsInput = {
    where: ColmapWhereUniqueInput
    create: XOR<ColmapCreateWithoutSheetsInput, ColmapUncheckedCreateWithoutSheetsInput>
  }

  export type ColmapCreateManySheetsInputEnvelope = {
    data: Enumerable<ColmapCreateManySheetsInput>
    skipDuplicates?: boolean
  }

  export type RowmapCreateWithoutSheetsInput = {
    id: string
    startmarker: string
    endmarker: string
    cellmap?: CellmapCreateNestedManyWithoutRowmapInput
  }

  export type RowmapUncheckedCreateWithoutSheetsInput = {
    id: string
    startmarker: string
    endmarker: string
    cellmap?: CellmapUncheckedCreateNestedManyWithoutRowmapInput
  }

  export type RowmapCreateOrConnectWithoutSheetsInput = {
    where: RowmapWhereUniqueInput
    create: XOR<RowmapCreateWithoutSheetsInput, RowmapUncheckedCreateWithoutSheetsInput>
  }

  export type RowmapCreateManySheetsInputEnvelope = {
    data: Enumerable<RowmapCreateManySheetsInput>
    skipDuplicates?: boolean
  }

  export type CellmapUpsertWithWhereUniqueWithoutSheetsInput = {
    where: CellmapWhereUniqueInput
    update: XOR<CellmapUpdateWithoutSheetsInput, CellmapUncheckedUpdateWithoutSheetsInput>
    create: XOR<CellmapCreateWithoutSheetsInput, CellmapUncheckedCreateWithoutSheetsInput>
  }

  export type CellmapUpdateWithWhereUniqueWithoutSheetsInput = {
    where: CellmapWhereUniqueInput
    data: XOR<CellmapUpdateWithoutSheetsInput, CellmapUncheckedUpdateWithoutSheetsInput>
  }

  export type CellmapUpdateManyWithWhereWithoutSheetsInput = {
    where: CellmapScalarWhereInput
    data: XOR<CellmapUpdateManyMutationInput, CellmapUncheckedUpdateManyWithoutCellmapInput>
  }

  export type ColmapUpsertWithWhereUniqueWithoutSheetsInput = {
    where: ColmapWhereUniqueInput
    update: XOR<ColmapUpdateWithoutSheetsInput, ColmapUncheckedUpdateWithoutSheetsInput>
    create: XOR<ColmapCreateWithoutSheetsInput, ColmapUncheckedCreateWithoutSheetsInput>
  }

  export type ColmapUpdateWithWhereUniqueWithoutSheetsInput = {
    where: ColmapWhereUniqueInput
    data: XOR<ColmapUpdateWithoutSheetsInput, ColmapUncheckedUpdateWithoutSheetsInput>
  }

  export type ColmapUpdateManyWithWhereWithoutSheetsInput = {
    where: ColmapScalarWhereInput
    data: XOR<ColmapUpdateManyMutationInput, ColmapUncheckedUpdateManyWithoutColmapInput>
  }

  export type ColmapScalarWhereInput = {
    AND?: Enumerable<ColmapScalarWhereInput>
    OR?: Enumerable<ColmapScalarWhereInput>
    NOT?: Enumerable<ColmapScalarWhereInput>
    id?: StringFilter | string
    sheet_id?: StringFilter | string
    startmarker?: StringFilter | string
    endmarker?: StringFilter | string
  }

  export type RowmapUpsertWithWhereUniqueWithoutSheetsInput = {
    where: RowmapWhereUniqueInput
    update: XOR<RowmapUpdateWithoutSheetsInput, RowmapUncheckedUpdateWithoutSheetsInput>
    create: XOR<RowmapCreateWithoutSheetsInput, RowmapUncheckedCreateWithoutSheetsInput>
  }

  export type RowmapUpdateWithWhereUniqueWithoutSheetsInput = {
    where: RowmapWhereUniqueInput
    data: XOR<RowmapUpdateWithoutSheetsInput, RowmapUncheckedUpdateWithoutSheetsInput>
  }

  export type RowmapUpdateManyWithWhereWithoutSheetsInput = {
    where: RowmapScalarWhereInput
    data: XOR<RowmapUpdateManyMutationInput, RowmapUncheckedUpdateManyWithoutRowmapInput>
  }

  export type RowmapScalarWhereInput = {
    AND?: Enumerable<RowmapScalarWhereInput>
    OR?: Enumerable<RowmapScalarWhereInput>
    NOT?: Enumerable<RowmapScalarWhereInput>
    id?: StringFilter | string
    sheet_id?: StringFilter | string
    startmarker?: StringFilter | string
    endmarker?: StringFilter | string
  }

  export type CellmapCreateManyColmapInput = {
    id: string
    sheet_id: string
    row_id: string
    content?: string | null
  }

  export type CellmapUpdateWithoutColmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    rowmap?: RowmapUpdateOneRequiredWithoutCellmapNestedInput
    sheets?: SheetsUpdateOneRequiredWithoutCellmapNestedInput
  }

  export type CellmapUncheckedUpdateWithoutColmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    row_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CellmapUncheckedUpdateManyWithoutCellmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    row_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CellmapCreateManyRowmapInput = {
    id: string
    sheet_id: string
    col_id: string
    content?: string | null
  }

  export type CellmapUpdateWithoutRowmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    colmap?: ColmapUpdateOneRequiredWithoutCellmapNestedInput
    sheets?: SheetsUpdateOneRequiredWithoutCellmapNestedInput
  }

  export type CellmapUncheckedUpdateWithoutRowmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheet_id?: StringFieldUpdateOperationsInput | string
    col_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CellmapCreateManySheetsInput = {
    id: string
    row_id: string
    col_id: string
    content?: string | null
  }

  export type ColmapCreateManySheetsInput = {
    id: string
    startmarker: string
    endmarker: string
  }

  export type RowmapCreateManySheetsInput = {
    id: string
    startmarker: string
    endmarker: string
  }

  export type CellmapUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    colmap?: ColmapUpdateOneRequiredWithoutCellmapNestedInput
    rowmap?: RowmapUpdateOneRequiredWithoutCellmapNestedInput
  }

  export type CellmapUncheckedUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    row_id?: StringFieldUpdateOperationsInput | string
    col_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ColmapUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    cellmap?: CellmapUpdateManyWithoutColmapNestedInput
  }

  export type ColmapUncheckedUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    cellmap?: CellmapUncheckedUpdateManyWithoutColmapNestedInput
  }

  export type ColmapUncheckedUpdateManyWithoutColmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
  }

  export type RowmapUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    cellmap?: CellmapUpdateManyWithoutRowmapNestedInput
  }

  export type RowmapUncheckedUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
    cellmap?: CellmapUncheckedUpdateManyWithoutRowmapNestedInput
  }

  export type RowmapUncheckedUpdateManyWithoutRowmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    startmarker?: StringFieldUpdateOperationsInput | string
    endmarker?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

type Buffer = Omit<Uint8Array, 'set'>
