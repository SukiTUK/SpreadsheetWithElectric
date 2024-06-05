
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
 * Model Colmap
 * 
 */
export type Colmap = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  pos: number | null
}

/**
 * Model Contentmap
 * 
 */
export type Contentmap = {
  /**
   * @zod.string.uuid()
   */
  rowindex: string
  /**
   * @zod.string.uuid()
   */
  colindex: string
  content: string | null
}

/**
 * Model Items
 * 
 */
export type Items = {
  value: string
}

/**
 * Model Rowmap
 * 
 */
export type Rowmap = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  pos: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Colmaps
 * const colmaps = await prisma.colmap.findMany()
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
   * // Fetch zero or more Colmaps
   * const colmaps = await prisma.colmap.findMany()
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
   * `prisma.colmap`: Exposes CRUD operations for the **Colmap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colmaps
    * const colmaps = await prisma.colmap.findMany()
    * ```
    */
  get colmap(): Prisma.ColmapDelegate<GlobalReject>;

  /**
   * `prisma.contentmap`: Exposes CRUD operations for the **Contentmap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contentmaps
    * const contentmaps = await prisma.contentmap.findMany()
    * ```
    */
  get contentmap(): Prisma.ContentmapDelegate<GlobalReject>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.ItemsDelegate<GlobalReject>;

  /**
   * `prisma.rowmap`: Exposes CRUD operations for the **Rowmap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rowmaps
    * const rowmaps = await prisma.rowmap.findMany()
    * ```
    */
  get rowmap(): Prisma.RowmapDelegate<GlobalReject>;
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
    Colmap: 'Colmap',
    Contentmap: 'Contentmap',
    Items: 'Items',
    Rowmap: 'Rowmap'
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
    contentmap: number
  }

  export type ColmapCountOutputTypeSelect = {
    contentmap?: boolean
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
    contentmap: number
  }

  export type RowmapCountOutputTypeSelect = {
    contentmap?: boolean
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
   * Models
   */

  /**
   * Model Colmap
   */


  export type AggregateColmap = {
    _count: ColmapCountAggregateOutputType | null
    _avg: ColmapAvgAggregateOutputType | null
    _sum: ColmapSumAggregateOutputType | null
    _min: ColmapMinAggregateOutputType | null
    _max: ColmapMaxAggregateOutputType | null
  }

  export type ColmapAvgAggregateOutputType = {
    pos: number | null
  }

  export type ColmapSumAggregateOutputType = {
    pos: number | null
  }

  export type ColmapMinAggregateOutputType = {
    id: string | null
    pos: number | null
  }

  export type ColmapMaxAggregateOutputType = {
    id: string | null
    pos: number | null
  }

  export type ColmapCountAggregateOutputType = {
    id: number
    pos: number
    _all: number
  }


  export type ColmapAvgAggregateInputType = {
    pos?: true
  }

  export type ColmapSumAggregateInputType = {
    pos?: true
  }

  export type ColmapMinAggregateInputType = {
    id?: true
    pos?: true
  }

  export type ColmapMaxAggregateInputType = {
    id?: true
    pos?: true
  }

  export type ColmapCountAggregateInputType = {
    id?: true
    pos?: true
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
     * Select which fields to average
    **/
    _avg?: ColmapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColmapSumAggregateInputType
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
    _avg?: ColmapAvgAggregateInputType
    _sum?: ColmapSumAggregateInputType
    _min?: ColmapMinAggregateInputType
    _max?: ColmapMaxAggregateInputType
  }


  export type ColmapGroupByOutputType = {
    id: string
    pos: number | null
    _count: ColmapCountAggregateOutputType | null
    _avg: ColmapAvgAggregateOutputType | null
    _sum: ColmapSumAggregateOutputType | null
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
    pos?: boolean
    contentmap?: boolean | Colmap$contentmapArgs
    _count?: boolean | ColmapCountOutputTypeArgs
  }


  export type ColmapInclude = {
    contentmap?: boolean | Colmap$contentmapArgs
    _count?: boolean | ColmapCountOutputTypeArgs
  } 

  export type ColmapGetPayload<S extends boolean | null | undefined | ColmapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Colmap :
    S extends undefined ? never :
    S extends { include: any } & (ColmapArgs | ColmapFindManyArgs)
    ? Colmap  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'contentmap' ? Array < ContentmapGetPayload<S['include'][P]>>  :
        P extends '_count' ? ColmapCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ColmapArgs | ColmapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'contentmap' ? Array < ContentmapGetPayload<S['select'][P]>>  :
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

    contentmap<T extends Colmap$contentmapArgs= {}>(args?: Subset<T, Colmap$contentmapArgs>): PrismaPromise<Array<ContentmapGetPayload<T>>| Null>;

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
   * Colmap.contentmap
   */
  export type Colmap$contentmapArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    where?: ContentmapWhereInput
    orderBy?: Enumerable<ContentmapOrderByWithRelationInput>
    cursor?: ContentmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ContentmapScalarFieldEnum>
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
   * Model Contentmap
   */


  export type AggregateContentmap = {
    _count: ContentmapCountAggregateOutputType | null
    _min: ContentmapMinAggregateOutputType | null
    _max: ContentmapMaxAggregateOutputType | null
  }

  export type ContentmapMinAggregateOutputType = {
    rowindex: string | null
    colindex: string | null
    content: string | null
  }

  export type ContentmapMaxAggregateOutputType = {
    rowindex: string | null
    colindex: string | null
    content: string | null
  }

  export type ContentmapCountAggregateOutputType = {
    rowindex: number
    colindex: number
    content: number
    _all: number
  }


  export type ContentmapMinAggregateInputType = {
    rowindex?: true
    colindex?: true
    content?: true
  }

  export type ContentmapMaxAggregateInputType = {
    rowindex?: true
    colindex?: true
    content?: true
  }

  export type ContentmapCountAggregateInputType = {
    rowindex?: true
    colindex?: true
    content?: true
    _all?: true
  }

  export type ContentmapAggregateArgs = {
    /**
     * Filter which Contentmap to aggregate.
     * 
    **/
    where?: ContentmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contentmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<ContentmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ContentmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contentmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contentmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contentmaps
    **/
    _count?: true | ContentmapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentmapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentmapMaxAggregateInputType
  }

  export type GetContentmapAggregateType<T extends ContentmapAggregateArgs> = {
        [P in keyof T & keyof AggregateContentmap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentmap[P]>
      : GetScalarType<T[P], AggregateContentmap[P]>
  }




  export type ContentmapGroupByArgs = {
    where?: ContentmapWhereInput
    orderBy?: Enumerable<ContentmapOrderByWithAggregationInput>
    by: Array<ContentmapScalarFieldEnum>
    having?: ContentmapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentmapCountAggregateInputType | true
    _min?: ContentmapMinAggregateInputType
    _max?: ContentmapMaxAggregateInputType
  }


  export type ContentmapGroupByOutputType = {
    rowindex: string
    colindex: string
    content: string | null
    _count: ContentmapCountAggregateOutputType | null
    _min: ContentmapMinAggregateOutputType | null
    _max: ContentmapMaxAggregateOutputType | null
  }

  type GetContentmapGroupByPayload<T extends ContentmapGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ContentmapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentmapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentmapGroupByOutputType[P]>
            : GetScalarType<T[P], ContentmapGroupByOutputType[P]>
        }
      >
    >


  export type ContentmapSelect = {
    rowindex?: boolean
    colindex?: boolean
    content?: boolean
    colmap?: boolean | ColmapArgs
    rowmap?: boolean | RowmapArgs
  }


  export type ContentmapInclude = {
    colmap?: boolean | ColmapArgs
    rowmap?: boolean | RowmapArgs
  } 

  export type ContentmapGetPayload<S extends boolean | null | undefined | ContentmapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Contentmap :
    S extends undefined ? never :
    S extends { include: any } & (ContentmapArgs | ContentmapFindManyArgs)
    ? Contentmap  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'colmap' ? ColmapGetPayload<S['include'][P]> :
        P extends 'rowmap' ? RowmapGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ContentmapArgs | ContentmapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'colmap' ? ColmapGetPayload<S['select'][P]> :
        P extends 'rowmap' ? RowmapGetPayload<S['select'][P]> :  P extends keyof Contentmap ? Contentmap[P] : never
  } 
      : Contentmap


  type ContentmapCountArgs = Merge<
    Omit<ContentmapFindManyArgs, 'select' | 'include'> & {
      select?: ContentmapCountAggregateInputType | true
    }
  >

  export interface ContentmapDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Contentmap that matches the filter.
     * @param {ContentmapFindUniqueArgs} args - Arguments to find a Contentmap
     * @example
     * // Get one Contentmap
     * const contentmap = await prisma.contentmap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContentmapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContentmapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Contentmap'> extends True ? Prisma__ContentmapClient<ContentmapGetPayload<T>> : Prisma__ContentmapClient<ContentmapGetPayload<T> | null, null>

    /**
     * Find one Contentmap that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContentmapFindUniqueOrThrowArgs} args - Arguments to find a Contentmap
     * @example
     * // Get one Contentmap
     * const contentmap = await prisma.contentmap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContentmapFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContentmapFindUniqueOrThrowArgs>
    ): Prisma__ContentmapClient<ContentmapGetPayload<T>>

    /**
     * Find the first Contentmap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentmapFindFirstArgs} args - Arguments to find a Contentmap
     * @example
     * // Get one Contentmap
     * const contentmap = await prisma.contentmap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContentmapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContentmapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Contentmap'> extends True ? Prisma__ContentmapClient<ContentmapGetPayload<T>> : Prisma__ContentmapClient<ContentmapGetPayload<T> | null, null>

    /**
     * Find the first Contentmap that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentmapFindFirstOrThrowArgs} args - Arguments to find a Contentmap
     * @example
     * // Get one Contentmap
     * const contentmap = await prisma.contentmap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContentmapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContentmapFindFirstOrThrowArgs>
    ): Prisma__ContentmapClient<ContentmapGetPayload<T>>

    /**
     * Find zero or more Contentmaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentmapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contentmaps
     * const contentmaps = await prisma.contentmap.findMany()
     * 
     * // Get first 10 Contentmaps
     * const contentmaps = await prisma.contentmap.findMany({ take: 10 })
     * 
     * // Only select the `rowindex`
     * const contentmapWithRowindexOnly = await prisma.contentmap.findMany({ select: { rowindex: true } })
     * 
    **/
    findMany<T extends ContentmapFindManyArgs>(
      args?: SelectSubset<T, ContentmapFindManyArgs>
    ): PrismaPromise<Array<ContentmapGetPayload<T>>>

    /**
     * Create a Contentmap.
     * @param {ContentmapCreateArgs} args - Arguments to create a Contentmap.
     * @example
     * // Create one Contentmap
     * const Contentmap = await prisma.contentmap.create({
     *   data: {
     *     // ... data to create a Contentmap
     *   }
     * })
     * 
    **/
    create<T extends ContentmapCreateArgs>(
      args: SelectSubset<T, ContentmapCreateArgs>
    ): Prisma__ContentmapClient<ContentmapGetPayload<T>>

    /**
     * Create many Contentmaps.
     *     @param {ContentmapCreateManyArgs} args - Arguments to create many Contentmaps.
     *     @example
     *     // Create many Contentmaps
     *     const contentmap = await prisma.contentmap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContentmapCreateManyArgs>(
      args?: SelectSubset<T, ContentmapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Contentmap.
     * @param {ContentmapDeleteArgs} args - Arguments to delete one Contentmap.
     * @example
     * // Delete one Contentmap
     * const Contentmap = await prisma.contentmap.delete({
     *   where: {
     *     // ... filter to delete one Contentmap
     *   }
     * })
     * 
    **/
    delete<T extends ContentmapDeleteArgs>(
      args: SelectSubset<T, ContentmapDeleteArgs>
    ): Prisma__ContentmapClient<ContentmapGetPayload<T>>

    /**
     * Update one Contentmap.
     * @param {ContentmapUpdateArgs} args - Arguments to update one Contentmap.
     * @example
     * // Update one Contentmap
     * const contentmap = await prisma.contentmap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContentmapUpdateArgs>(
      args: SelectSubset<T, ContentmapUpdateArgs>
    ): Prisma__ContentmapClient<ContentmapGetPayload<T>>

    /**
     * Delete zero or more Contentmaps.
     * @param {ContentmapDeleteManyArgs} args - Arguments to filter Contentmaps to delete.
     * @example
     * // Delete a few Contentmaps
     * const { count } = await prisma.contentmap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContentmapDeleteManyArgs>(
      args?: SelectSubset<T, ContentmapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contentmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentmapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contentmaps
     * const contentmap = await prisma.contentmap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContentmapUpdateManyArgs>(
      args: SelectSubset<T, ContentmapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Contentmap.
     * @param {ContentmapUpsertArgs} args - Arguments to update or create a Contentmap.
     * @example
     * // Update or create a Contentmap
     * const contentmap = await prisma.contentmap.upsert({
     *   create: {
     *     // ... data to create a Contentmap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contentmap we want to update
     *   }
     * })
    **/
    upsert<T extends ContentmapUpsertArgs>(
      args: SelectSubset<T, ContentmapUpsertArgs>
    ): Prisma__ContentmapClient<ContentmapGetPayload<T>>

    /**
     * Count the number of Contentmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentmapCountArgs} args - Arguments to filter Contentmaps to count.
     * @example
     * // Count the number of Contentmaps
     * const count = await prisma.contentmap.count({
     *   where: {
     *     // ... the filter for the Contentmaps we want to count
     *   }
     * })
    **/
    count<T extends ContentmapCountArgs>(
      args?: Subset<T, ContentmapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentmapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contentmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentmapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentmapAggregateArgs>(args: Subset<T, ContentmapAggregateArgs>): PrismaPromise<GetContentmapAggregateType<T>>

    /**
     * Group by Contentmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentmapGroupByArgs} args - Group by arguments.
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
      T extends ContentmapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentmapGroupByArgs['orderBy'] }
        : { orderBy?: ContentmapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentmapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentmapGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Contentmap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContentmapClient<T, Null = never> implements PrismaPromise<T> {
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
   * Contentmap base type for findUnique actions
   */
  export type ContentmapFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    /**
     * Filter, which Contentmap to fetch.
     * 
    **/
    where: ContentmapWhereUniqueInput
  }

  /**
   * Contentmap findUnique
   */
  export interface ContentmapFindUniqueArgs extends ContentmapFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contentmap findUniqueOrThrow
   */
  export type ContentmapFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    /**
     * Filter, which Contentmap to fetch.
     * 
    **/
    where: ContentmapWhereUniqueInput
  }


  /**
   * Contentmap base type for findFirst actions
   */
  export type ContentmapFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    /**
     * Filter, which Contentmap to fetch.
     * 
    **/
    where?: ContentmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contentmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<ContentmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contentmaps.
     * 
    **/
    cursor?: ContentmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contentmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contentmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contentmaps.
     * 
    **/
    distinct?: Enumerable<ContentmapScalarFieldEnum>
  }

  /**
   * Contentmap findFirst
   */
  export interface ContentmapFindFirstArgs extends ContentmapFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contentmap findFirstOrThrow
   */
  export type ContentmapFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    /**
     * Filter, which Contentmap to fetch.
     * 
    **/
    where?: ContentmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contentmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<ContentmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contentmaps.
     * 
    **/
    cursor?: ContentmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contentmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contentmaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contentmaps.
     * 
    **/
    distinct?: Enumerable<ContentmapScalarFieldEnum>
  }


  /**
   * Contentmap findMany
   */
  export type ContentmapFindManyArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    /**
     * Filter, which Contentmaps to fetch.
     * 
    **/
    where?: ContentmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contentmaps to fetch.
     * 
    **/
    orderBy?: Enumerable<ContentmapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contentmaps.
     * 
    **/
    cursor?: ContentmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contentmaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contentmaps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ContentmapScalarFieldEnum>
  }


  /**
   * Contentmap create
   */
  export type ContentmapCreateArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    /**
     * The data needed to create a Contentmap.
     * 
    **/
    data: XOR<ContentmapCreateInput, ContentmapUncheckedCreateInput>
  }


  /**
   * Contentmap createMany
   */
  export type ContentmapCreateManyArgs = {
    /**
     * The data used to create many Contentmaps.
     * 
    **/
    data: Enumerable<ContentmapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Contentmap update
   */
  export type ContentmapUpdateArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    /**
     * The data needed to update a Contentmap.
     * 
    **/
    data: XOR<ContentmapUpdateInput, ContentmapUncheckedUpdateInput>
    /**
     * Choose, which Contentmap to update.
     * 
    **/
    where: ContentmapWhereUniqueInput
  }


  /**
   * Contentmap updateMany
   */
  export type ContentmapUpdateManyArgs = {
    /**
     * The data used to update Contentmaps.
     * 
    **/
    data: XOR<ContentmapUpdateManyMutationInput, ContentmapUncheckedUpdateManyInput>
    /**
     * Filter which Contentmaps to update
     * 
    **/
    where?: ContentmapWhereInput
  }


  /**
   * Contentmap upsert
   */
  export type ContentmapUpsertArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    /**
     * The filter to search for the Contentmap to update in case it exists.
     * 
    **/
    where: ContentmapWhereUniqueInput
    /**
     * In case the Contentmap found by the `where` argument doesn't exist, create a new Contentmap with this data.
     * 
    **/
    create: XOR<ContentmapCreateInput, ContentmapUncheckedCreateInput>
    /**
     * In case the Contentmap was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ContentmapUpdateInput, ContentmapUncheckedUpdateInput>
  }


  /**
   * Contentmap delete
   */
  export type ContentmapDeleteArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    /**
     * Filter which Contentmap to delete.
     * 
    **/
    where: ContentmapWhereUniqueInput
  }


  /**
   * Contentmap deleteMany
   */
  export type ContentmapDeleteManyArgs = {
    /**
     * Filter which Contentmaps to delete
     * 
    **/
    where?: ContentmapWhereInput
  }


  /**
   * Contentmap without action
   */
  export type ContentmapArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
  }



  /**
   * Model Items
   */


  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsMinAggregateOutputType = {
    value: string | null
  }

  export type ItemsMaxAggregateOutputType = {
    value: string | null
  }

  export type ItemsCountAggregateOutputType = {
    value: number
    _all: number
  }


  export type ItemsMinAggregateInputType = {
    value?: true
  }

  export type ItemsMaxAggregateInputType = {
    value?: true
  }

  export type ItemsCountAggregateInputType = {
    value?: true
    _all?: true
  }

  export type ItemsAggregateArgs = {
    /**
     * Filter which Items to aggregate.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type ItemsGroupByArgs = {
    where?: ItemsWhereInput
    orderBy?: Enumerable<ItemsOrderByWithAggregationInput>
    by: Array<ItemsScalarFieldEnum>
    having?: ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }


  export type ItemsGroupByOutputType = {
    value: string
    _count: ItemsCountAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends ItemsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type ItemsSelect = {
    value?: boolean
  }


  export type ItemsGetPayload<S extends boolean | null | undefined | ItemsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Items :
    S extends undefined ? never :
    S extends { include: any } & (ItemsArgs | ItemsFindManyArgs)
    ? Items 
    : S extends { select: any } & (ItemsArgs | ItemsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Items ? Items[P] : never
  } 
      : Items


  type ItemsCountArgs = Merge<
    Omit<ItemsFindManyArgs, 'select' | 'include'> & {
      select?: ItemsCountAggregateInputType | true
    }
  >

  export interface ItemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Items that matches the filter.
     * @param {ItemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Items'> extends True ? Prisma__ItemsClient<ItemsGetPayload<T>> : Prisma__ItemsClient<ItemsGetPayload<T> | null, null>

    /**
     * Find one Items that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ItemsFindUniqueOrThrowArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Items'> extends True ? Prisma__ItemsClient<ItemsGetPayload<T>> : Prisma__ItemsClient<ItemsGetPayload<T> | null, null>

    /**
     * Find the first Items that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ItemsFindFirstOrThrowArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `value`
     * const itemsWithValueOnly = await prisma.items.findMany({ select: { value: true } })
     * 
    **/
    findMany<T extends ItemsFindManyArgs>(
      args?: SelectSubset<T, ItemsFindManyArgs>
    ): PrismaPromise<Array<ItemsGetPayload<T>>>

    /**
     * Create a Items.
     * @param {ItemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
    **/
    create<T extends ItemsCreateArgs>(
      args: SelectSubset<T, ItemsCreateArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Create many Items.
     *     @param {ItemsCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const items = await prisma.items.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemsCreateManyArgs>(
      args?: SelectSubset<T, ItemsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Items.
     * @param {ItemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
    **/
    delete<T extends ItemsDeleteArgs>(
      args: SelectSubset<T, ItemsDeleteArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Update one Items.
     * @param {ItemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemsUpdateArgs>(
      args: SelectSubset<T, ItemsUpdateArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Delete zero or more Items.
     * @param {ItemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemsDeleteManyArgs>(
      args?: SelectSubset<T, ItemsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemsUpdateManyArgs>(
      args: SelectSubset<T, ItemsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Items.
     * @param {ItemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
    **/
    upsert<T extends ItemsUpsertArgs>(
      args: SelectSubset<T, ItemsUpsertArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemsCountArgs>(
      args?: Subset<T, ItemsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsGroupByArgs} args - Group by arguments.
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
      T extends ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsGroupByArgs['orderBy'] }
        : { orderBy?: ItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemsClient<T, Null = never> implements PrismaPromise<T> {
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
   * Items base type for findUnique actions
   */
  export type ItemsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findUnique
   */
  export interface ItemsFindUniqueArgs extends ItemsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Items findUniqueOrThrow
   */
  export type ItemsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where: ItemsWhereUniqueInput
  }


  /**
   * Items base type for findFirst actions
   */
  export type ItemsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     * 
    **/
    distinct?: Enumerable<ItemsScalarFieldEnum>
  }

  /**
   * Items findFirst
   */
  export interface ItemsFindFirstArgs extends ItemsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Items findFirstOrThrow
   */
  export type ItemsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     * 
    **/
    distinct?: Enumerable<ItemsScalarFieldEnum>
  }


  /**
   * Items findMany
   */
  export type ItemsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ItemsScalarFieldEnum>
  }


  /**
   * Items create
   */
  export type ItemsCreateArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * The data needed to create a Items.
     * 
    **/
    data: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
  }


  /**
   * Items createMany
   */
  export type ItemsCreateManyArgs = {
    /**
     * The data used to create many Items.
     * 
    **/
    data: Enumerable<ItemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Items update
   */
  export type ItemsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * The data needed to update a Items.
     * 
    **/
    data: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
    /**
     * Choose, which Items to update.
     * 
    **/
    where: ItemsWhereUniqueInput
  }


  /**
   * Items updateMany
   */
  export type ItemsUpdateManyArgs = {
    /**
     * The data used to update Items.
     * 
    **/
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     * 
    **/
    where?: ItemsWhereInput
  }


  /**
   * Items upsert
   */
  export type ItemsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * The filter to search for the Items to update in case it exists.
     * 
    **/
    where: ItemsWhereUniqueInput
    /**
     * In case the Items found by the `where` argument doesn't exist, create a new Items with this data.
     * 
    **/
    create: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
    /**
     * In case the Items was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
  }


  /**
   * Items delete
   */
  export type ItemsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Filter which Items to delete.
     * 
    **/
    where: ItemsWhereUniqueInput
  }


  /**
   * Items deleteMany
   */
  export type ItemsDeleteManyArgs = {
    /**
     * Filter which Items to delete
     * 
    **/
    where?: ItemsWhereInput
  }


  /**
   * Items without action
   */
  export type ItemsArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
  }



  /**
   * Model Rowmap
   */


  export type AggregateRowmap = {
    _count: RowmapCountAggregateOutputType | null
    _avg: RowmapAvgAggregateOutputType | null
    _sum: RowmapSumAggregateOutputType | null
    _min: RowmapMinAggregateOutputType | null
    _max: RowmapMaxAggregateOutputType | null
  }

  export type RowmapAvgAggregateOutputType = {
    pos: number | null
  }

  export type RowmapSumAggregateOutputType = {
    pos: number | null
  }

  export type RowmapMinAggregateOutputType = {
    id: string | null
    pos: number | null
  }

  export type RowmapMaxAggregateOutputType = {
    id: string | null
    pos: number | null
  }

  export type RowmapCountAggregateOutputType = {
    id: number
    pos: number
    _all: number
  }


  export type RowmapAvgAggregateInputType = {
    pos?: true
  }

  export type RowmapSumAggregateInputType = {
    pos?: true
  }

  export type RowmapMinAggregateInputType = {
    id?: true
    pos?: true
  }

  export type RowmapMaxAggregateInputType = {
    id?: true
    pos?: true
  }

  export type RowmapCountAggregateInputType = {
    id?: true
    pos?: true
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
     * Select which fields to average
    **/
    _avg?: RowmapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RowmapSumAggregateInputType
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
    _avg?: RowmapAvgAggregateInputType
    _sum?: RowmapSumAggregateInputType
    _min?: RowmapMinAggregateInputType
    _max?: RowmapMaxAggregateInputType
  }


  export type RowmapGroupByOutputType = {
    id: string
    pos: number | null
    _count: RowmapCountAggregateOutputType | null
    _avg: RowmapAvgAggregateOutputType | null
    _sum: RowmapSumAggregateOutputType | null
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
    pos?: boolean
    contentmap?: boolean | Rowmap$contentmapArgs
    _count?: boolean | RowmapCountOutputTypeArgs
  }


  export type RowmapInclude = {
    contentmap?: boolean | Rowmap$contentmapArgs
    _count?: boolean | RowmapCountOutputTypeArgs
  } 

  export type RowmapGetPayload<S extends boolean | null | undefined | RowmapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Rowmap :
    S extends undefined ? never :
    S extends { include: any } & (RowmapArgs | RowmapFindManyArgs)
    ? Rowmap  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'contentmap' ? Array < ContentmapGetPayload<S['include'][P]>>  :
        P extends '_count' ? RowmapCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RowmapArgs | RowmapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'contentmap' ? Array < ContentmapGetPayload<S['select'][P]>>  :
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

    contentmap<T extends Rowmap$contentmapArgs= {}>(args?: Subset<T, Rowmap$contentmapArgs>): PrismaPromise<Array<ContentmapGetPayload<T>>| Null>;

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
   * Rowmap.contentmap
   */
  export type Rowmap$contentmapArgs = {
    /**
     * Select specific fields to fetch from the Contentmap
     * 
    **/
    select?: ContentmapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContentmapInclude | null
    where?: ContentmapWhereInput
    orderBy?: Enumerable<ContentmapOrderByWithRelationInput>
    cursor?: ContentmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ContentmapScalarFieldEnum>
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
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ColmapScalarFieldEnum: {
    id: 'id',
    pos: 'pos'
  };

  export type ColmapScalarFieldEnum = (typeof ColmapScalarFieldEnum)[keyof typeof ColmapScalarFieldEnum]


  export const ContentmapScalarFieldEnum: {
    rowindex: 'rowindex',
    colindex: 'colindex',
    content: 'content'
  };

  export type ContentmapScalarFieldEnum = (typeof ContentmapScalarFieldEnum)[keyof typeof ContentmapScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    value: 'value'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RowmapScalarFieldEnum: {
    id: 'id',
    pos: 'pos'
  };

  export type RowmapScalarFieldEnum = (typeof RowmapScalarFieldEnum)[keyof typeof RowmapScalarFieldEnum]


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


  export type ColmapWhereInput = {
    AND?: Enumerable<ColmapWhereInput>
    OR?: Enumerable<ColmapWhereInput>
    NOT?: Enumerable<ColmapWhereInput>
    id?: UuidFilter | string
    pos?: IntNullableFilter | number | null
    contentmap?: ContentmapListRelationFilter
  }

  export type ColmapOrderByWithRelationInput = {
    id?: SortOrder
    pos?: SortOrder
    contentmap?: ContentmapOrderByRelationAggregateInput
  }

  export type ColmapWhereUniqueInput = {
    id?: string
  }

  export type ColmapOrderByWithAggregationInput = {
    id?: SortOrder
    pos?: SortOrder
    _count?: ColmapCountOrderByAggregateInput
    _avg?: ColmapAvgOrderByAggregateInput
    _max?: ColmapMaxOrderByAggregateInput
    _min?: ColmapMinOrderByAggregateInput
    _sum?: ColmapSumOrderByAggregateInput
  }

  export type ColmapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ColmapScalarWhereWithAggregatesInput>
    OR?: Enumerable<ColmapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ColmapScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    pos?: IntNullableWithAggregatesFilter | number | null
  }

  export type ContentmapWhereInput = {
    AND?: Enumerable<ContentmapWhereInput>
    OR?: Enumerable<ContentmapWhereInput>
    NOT?: Enumerable<ContentmapWhereInput>
    rowindex?: UuidFilter | string
    colindex?: UuidFilter | string
    content?: StringNullableFilter | string | null
    colmap?: XOR<ColmapRelationFilter, ColmapWhereInput>
    rowmap?: XOR<RowmapRelationFilter, RowmapWhereInput>
  }

  export type ContentmapOrderByWithRelationInput = {
    rowindex?: SortOrder
    colindex?: SortOrder
    content?: SortOrder
    colmap?: ColmapOrderByWithRelationInput
    rowmap?: RowmapOrderByWithRelationInput
  }

  export type ContentmapWhereUniqueInput = {
    rowindex_colindex?: ContentmapRowindexColindexCompoundUniqueInput
  }

  export type ContentmapOrderByWithAggregationInput = {
    rowindex?: SortOrder
    colindex?: SortOrder
    content?: SortOrder
    _count?: ContentmapCountOrderByAggregateInput
    _max?: ContentmapMaxOrderByAggregateInput
    _min?: ContentmapMinOrderByAggregateInput
  }

  export type ContentmapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContentmapScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContentmapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContentmapScalarWhereWithAggregatesInput>
    rowindex?: UuidWithAggregatesFilter | string
    colindex?: UuidWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
  }

  export type ItemsWhereInput = {
    AND?: Enumerable<ItemsWhereInput>
    OR?: Enumerable<ItemsWhereInput>
    NOT?: Enumerable<ItemsWhereInput>
    value?: StringFilter | string
  }

  export type ItemsOrderByWithRelationInput = {
    value?: SortOrder
  }

  export type ItemsWhereUniqueInput = {
    value?: string
  }

  export type ItemsOrderByWithAggregationInput = {
    value?: SortOrder
    _count?: ItemsCountOrderByAggregateInput
    _max?: ItemsMaxOrderByAggregateInput
    _min?: ItemsMinOrderByAggregateInput
  }

  export type ItemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemsScalarWhereWithAggregatesInput>
    value?: StringWithAggregatesFilter | string
  }

  export type RowmapWhereInput = {
    AND?: Enumerable<RowmapWhereInput>
    OR?: Enumerable<RowmapWhereInput>
    NOT?: Enumerable<RowmapWhereInput>
    id?: UuidFilter | string
    pos?: IntNullableFilter | number | null
    contentmap?: ContentmapListRelationFilter
  }

  export type RowmapOrderByWithRelationInput = {
    id?: SortOrder
    pos?: SortOrder
    contentmap?: ContentmapOrderByRelationAggregateInput
  }

  export type RowmapWhereUniqueInput = {
    id?: string
  }

  export type RowmapOrderByWithAggregationInput = {
    id?: SortOrder
    pos?: SortOrder
    _count?: RowmapCountOrderByAggregateInput
    _avg?: RowmapAvgOrderByAggregateInput
    _max?: RowmapMaxOrderByAggregateInput
    _min?: RowmapMinOrderByAggregateInput
    _sum?: RowmapSumOrderByAggregateInput
  }

  export type RowmapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RowmapScalarWhereWithAggregatesInput>
    OR?: Enumerable<RowmapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RowmapScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    pos?: IntNullableWithAggregatesFilter | number | null
  }

  export type ColmapCreateInput = {
    id: string
    pos?: number | null
    contentmap?: ContentmapCreateNestedManyWithoutColmapInput
  }

  export type ColmapUncheckedCreateInput = {
    id: string
    pos?: number | null
    contentmap?: ContentmapUncheckedCreateNestedManyWithoutColmapInput
  }

  export type ColmapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
    contentmap?: ContentmapUpdateManyWithoutColmapNestedInput
  }

  export type ColmapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
    contentmap?: ContentmapUncheckedUpdateManyWithoutColmapNestedInput
  }

  export type ColmapCreateManyInput = {
    id: string
    pos?: number | null
  }

  export type ColmapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ColmapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContentmapCreateInput = {
    content?: string | null
    colmap: ColmapCreateNestedOneWithoutContentmapInput
    rowmap: RowmapCreateNestedOneWithoutContentmapInput
  }

  export type ContentmapUncheckedCreateInput = {
    rowindex: string
    colindex: string
    content?: string | null
  }

  export type ContentmapUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    colmap?: ColmapUpdateOneRequiredWithoutContentmapNestedInput
    rowmap?: RowmapUpdateOneRequiredWithoutContentmapNestedInput
  }

  export type ContentmapUncheckedUpdateInput = {
    rowindex?: StringFieldUpdateOperationsInput | string
    colindex?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentmapCreateManyInput = {
    rowindex: string
    colindex: string
    content?: string | null
  }

  export type ContentmapUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentmapUncheckedUpdateManyInput = {
    rowindex?: StringFieldUpdateOperationsInput | string
    colindex?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemsCreateInput = {
    value: string
  }

  export type ItemsUncheckedCreateInput = {
    value: string
  }

  export type ItemsUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsUncheckedUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsCreateManyInput = {
    value: string
  }

  export type ItemsUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsUncheckedUpdateManyInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type RowmapCreateInput = {
    id: string
    pos?: number | null
    contentmap?: ContentmapCreateNestedManyWithoutRowmapInput
  }

  export type RowmapUncheckedCreateInput = {
    id: string
    pos?: number | null
    contentmap?: ContentmapUncheckedCreateNestedManyWithoutRowmapInput
  }

  export type RowmapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
    contentmap?: ContentmapUpdateManyWithoutRowmapNestedInput
  }

  export type RowmapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
    contentmap?: ContentmapUncheckedUpdateManyWithoutRowmapNestedInput
  }

  export type RowmapCreateManyInput = {
    id: string
    pos?: number | null
  }

  export type RowmapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RowmapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type ContentmapListRelationFilter = {
    every?: ContentmapWhereInput
    some?: ContentmapWhereInput
    none?: ContentmapWhereInput
  }

  export type ContentmapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColmapCountOrderByAggregateInput = {
    id?: SortOrder
    pos?: SortOrder
  }

  export type ColmapAvgOrderByAggregateInput = {
    pos?: SortOrder
  }

  export type ColmapMaxOrderByAggregateInput = {
    id?: SortOrder
    pos?: SortOrder
  }

  export type ColmapMinOrderByAggregateInput = {
    id?: SortOrder
    pos?: SortOrder
  }

  export type ColmapSumOrderByAggregateInput = {
    pos?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
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

  export type ContentmapRowindexColindexCompoundUniqueInput = {
    rowindex: string
    colindex: string
  }

  export type ContentmapCountOrderByAggregateInput = {
    rowindex?: SortOrder
    colindex?: SortOrder
    content?: SortOrder
  }

  export type ContentmapMaxOrderByAggregateInput = {
    rowindex?: SortOrder
    colindex?: SortOrder
    content?: SortOrder
  }

  export type ContentmapMinOrderByAggregateInput = {
    rowindex?: SortOrder
    colindex?: SortOrder
    content?: SortOrder
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

  export type ItemsCountOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ItemsMaxOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ItemsMinOrderByAggregateInput = {
    value?: SortOrder
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

  export type RowmapCountOrderByAggregateInput = {
    id?: SortOrder
    pos?: SortOrder
  }

  export type RowmapAvgOrderByAggregateInput = {
    pos?: SortOrder
  }

  export type RowmapMaxOrderByAggregateInput = {
    id?: SortOrder
    pos?: SortOrder
  }

  export type RowmapMinOrderByAggregateInput = {
    id?: SortOrder
    pos?: SortOrder
  }

  export type RowmapSumOrderByAggregateInput = {
    pos?: SortOrder
  }

  export type ContentmapCreateNestedManyWithoutColmapInput = {
    create?: XOR<Enumerable<ContentmapCreateWithoutColmapInput>, Enumerable<ContentmapUncheckedCreateWithoutColmapInput>>
    connectOrCreate?: Enumerable<ContentmapCreateOrConnectWithoutColmapInput>
    createMany?: ContentmapCreateManyColmapInputEnvelope
    connect?: Enumerable<ContentmapWhereUniqueInput>
  }

  export type ContentmapUncheckedCreateNestedManyWithoutColmapInput = {
    create?: XOR<Enumerable<ContentmapCreateWithoutColmapInput>, Enumerable<ContentmapUncheckedCreateWithoutColmapInput>>
    connectOrCreate?: Enumerable<ContentmapCreateOrConnectWithoutColmapInput>
    createMany?: ContentmapCreateManyColmapInputEnvelope
    connect?: Enumerable<ContentmapWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContentmapUpdateManyWithoutColmapNestedInput = {
    create?: XOR<Enumerable<ContentmapCreateWithoutColmapInput>, Enumerable<ContentmapUncheckedCreateWithoutColmapInput>>
    connectOrCreate?: Enumerable<ContentmapCreateOrConnectWithoutColmapInput>
    upsert?: Enumerable<ContentmapUpsertWithWhereUniqueWithoutColmapInput>
    createMany?: ContentmapCreateManyColmapInputEnvelope
    set?: Enumerable<ContentmapWhereUniqueInput>
    disconnect?: Enumerable<ContentmapWhereUniqueInput>
    delete?: Enumerable<ContentmapWhereUniqueInput>
    connect?: Enumerable<ContentmapWhereUniqueInput>
    update?: Enumerable<ContentmapUpdateWithWhereUniqueWithoutColmapInput>
    updateMany?: Enumerable<ContentmapUpdateManyWithWhereWithoutColmapInput>
    deleteMany?: Enumerable<ContentmapScalarWhereInput>
  }

  export type ContentmapUncheckedUpdateManyWithoutColmapNestedInput = {
    create?: XOR<Enumerable<ContentmapCreateWithoutColmapInput>, Enumerable<ContentmapUncheckedCreateWithoutColmapInput>>
    connectOrCreate?: Enumerable<ContentmapCreateOrConnectWithoutColmapInput>
    upsert?: Enumerable<ContentmapUpsertWithWhereUniqueWithoutColmapInput>
    createMany?: ContentmapCreateManyColmapInputEnvelope
    set?: Enumerable<ContentmapWhereUniqueInput>
    disconnect?: Enumerable<ContentmapWhereUniqueInput>
    delete?: Enumerable<ContentmapWhereUniqueInput>
    connect?: Enumerable<ContentmapWhereUniqueInput>
    update?: Enumerable<ContentmapUpdateWithWhereUniqueWithoutColmapInput>
    updateMany?: Enumerable<ContentmapUpdateManyWithWhereWithoutColmapInput>
    deleteMany?: Enumerable<ContentmapScalarWhereInput>
  }

  export type ColmapCreateNestedOneWithoutContentmapInput = {
    create?: XOR<ColmapCreateWithoutContentmapInput, ColmapUncheckedCreateWithoutContentmapInput>
    connectOrCreate?: ColmapCreateOrConnectWithoutContentmapInput
    connect?: ColmapWhereUniqueInput
  }

  export type RowmapCreateNestedOneWithoutContentmapInput = {
    create?: XOR<RowmapCreateWithoutContentmapInput, RowmapUncheckedCreateWithoutContentmapInput>
    connectOrCreate?: RowmapCreateOrConnectWithoutContentmapInput
    connect?: RowmapWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ColmapUpdateOneRequiredWithoutContentmapNestedInput = {
    create?: XOR<ColmapCreateWithoutContentmapInput, ColmapUncheckedCreateWithoutContentmapInput>
    connectOrCreate?: ColmapCreateOrConnectWithoutContentmapInput
    upsert?: ColmapUpsertWithoutContentmapInput
    connect?: ColmapWhereUniqueInput
    update?: XOR<ColmapUpdateWithoutContentmapInput, ColmapUncheckedUpdateWithoutContentmapInput>
  }

  export type RowmapUpdateOneRequiredWithoutContentmapNestedInput = {
    create?: XOR<RowmapCreateWithoutContentmapInput, RowmapUncheckedCreateWithoutContentmapInput>
    connectOrCreate?: RowmapCreateOrConnectWithoutContentmapInput
    upsert?: RowmapUpsertWithoutContentmapInput
    connect?: RowmapWhereUniqueInput
    update?: XOR<RowmapUpdateWithoutContentmapInput, RowmapUncheckedUpdateWithoutContentmapInput>
  }

  export type ContentmapCreateNestedManyWithoutRowmapInput = {
    create?: XOR<Enumerable<ContentmapCreateWithoutRowmapInput>, Enumerable<ContentmapUncheckedCreateWithoutRowmapInput>>
    connectOrCreate?: Enumerable<ContentmapCreateOrConnectWithoutRowmapInput>
    createMany?: ContentmapCreateManyRowmapInputEnvelope
    connect?: Enumerable<ContentmapWhereUniqueInput>
  }

  export type ContentmapUncheckedCreateNestedManyWithoutRowmapInput = {
    create?: XOR<Enumerable<ContentmapCreateWithoutRowmapInput>, Enumerable<ContentmapUncheckedCreateWithoutRowmapInput>>
    connectOrCreate?: Enumerable<ContentmapCreateOrConnectWithoutRowmapInput>
    createMany?: ContentmapCreateManyRowmapInputEnvelope
    connect?: Enumerable<ContentmapWhereUniqueInput>
  }

  export type ContentmapUpdateManyWithoutRowmapNestedInput = {
    create?: XOR<Enumerable<ContentmapCreateWithoutRowmapInput>, Enumerable<ContentmapUncheckedCreateWithoutRowmapInput>>
    connectOrCreate?: Enumerable<ContentmapCreateOrConnectWithoutRowmapInput>
    upsert?: Enumerable<ContentmapUpsertWithWhereUniqueWithoutRowmapInput>
    createMany?: ContentmapCreateManyRowmapInputEnvelope
    set?: Enumerable<ContentmapWhereUniqueInput>
    disconnect?: Enumerable<ContentmapWhereUniqueInput>
    delete?: Enumerable<ContentmapWhereUniqueInput>
    connect?: Enumerable<ContentmapWhereUniqueInput>
    update?: Enumerable<ContentmapUpdateWithWhereUniqueWithoutRowmapInput>
    updateMany?: Enumerable<ContentmapUpdateManyWithWhereWithoutRowmapInput>
    deleteMany?: Enumerable<ContentmapScalarWhereInput>
  }

  export type ContentmapUncheckedUpdateManyWithoutRowmapNestedInput = {
    create?: XOR<Enumerable<ContentmapCreateWithoutRowmapInput>, Enumerable<ContentmapUncheckedCreateWithoutRowmapInput>>
    connectOrCreate?: Enumerable<ContentmapCreateOrConnectWithoutRowmapInput>
    upsert?: Enumerable<ContentmapUpsertWithWhereUniqueWithoutRowmapInput>
    createMany?: ContentmapCreateManyRowmapInputEnvelope
    set?: Enumerable<ContentmapWhereUniqueInput>
    disconnect?: Enumerable<ContentmapWhereUniqueInput>
    delete?: Enumerable<ContentmapWhereUniqueInput>
    connect?: Enumerable<ContentmapWhereUniqueInput>
    update?: Enumerable<ContentmapUpdateWithWhereUniqueWithoutRowmapInput>
    updateMany?: Enumerable<ContentmapUpdateManyWithWhereWithoutRowmapInput>
    deleteMany?: Enumerable<ContentmapScalarWhereInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
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

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
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

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
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

  export type ContentmapCreateWithoutColmapInput = {
    content?: string | null
    rowmap: RowmapCreateNestedOneWithoutContentmapInput
  }

  export type ContentmapUncheckedCreateWithoutColmapInput = {
    rowindex: string
    content?: string | null
  }

  export type ContentmapCreateOrConnectWithoutColmapInput = {
    where: ContentmapWhereUniqueInput
    create: XOR<ContentmapCreateWithoutColmapInput, ContentmapUncheckedCreateWithoutColmapInput>
  }

  export type ContentmapCreateManyColmapInputEnvelope = {
    data: Enumerable<ContentmapCreateManyColmapInput>
    skipDuplicates?: boolean
  }

  export type ContentmapUpsertWithWhereUniqueWithoutColmapInput = {
    where: ContentmapWhereUniqueInput
    update: XOR<ContentmapUpdateWithoutColmapInput, ContentmapUncheckedUpdateWithoutColmapInput>
    create: XOR<ContentmapCreateWithoutColmapInput, ContentmapUncheckedCreateWithoutColmapInput>
  }

  export type ContentmapUpdateWithWhereUniqueWithoutColmapInput = {
    where: ContentmapWhereUniqueInput
    data: XOR<ContentmapUpdateWithoutColmapInput, ContentmapUncheckedUpdateWithoutColmapInput>
  }

  export type ContentmapUpdateManyWithWhereWithoutColmapInput = {
    where: ContentmapScalarWhereInput
    data: XOR<ContentmapUpdateManyMutationInput, ContentmapUncheckedUpdateManyWithoutContentmapInput>
  }

  export type ContentmapScalarWhereInput = {
    AND?: Enumerable<ContentmapScalarWhereInput>
    OR?: Enumerable<ContentmapScalarWhereInput>
    NOT?: Enumerable<ContentmapScalarWhereInput>
    rowindex?: UuidFilter | string
    colindex?: UuidFilter | string
    content?: StringNullableFilter | string | null
  }

  export type ColmapCreateWithoutContentmapInput = {
    id: string
    pos?: number | null
  }

  export type ColmapUncheckedCreateWithoutContentmapInput = {
    id: string
    pos?: number | null
  }

  export type ColmapCreateOrConnectWithoutContentmapInput = {
    where: ColmapWhereUniqueInput
    create: XOR<ColmapCreateWithoutContentmapInput, ColmapUncheckedCreateWithoutContentmapInput>
  }

  export type RowmapCreateWithoutContentmapInput = {
    id: string
    pos?: number | null
  }

  export type RowmapUncheckedCreateWithoutContentmapInput = {
    id: string
    pos?: number | null
  }

  export type RowmapCreateOrConnectWithoutContentmapInput = {
    where: RowmapWhereUniqueInput
    create: XOR<RowmapCreateWithoutContentmapInput, RowmapUncheckedCreateWithoutContentmapInput>
  }

  export type ColmapUpsertWithoutContentmapInput = {
    update: XOR<ColmapUpdateWithoutContentmapInput, ColmapUncheckedUpdateWithoutContentmapInput>
    create: XOR<ColmapCreateWithoutContentmapInput, ColmapUncheckedCreateWithoutContentmapInput>
  }

  export type ColmapUpdateWithoutContentmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ColmapUncheckedUpdateWithoutContentmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RowmapUpsertWithoutContentmapInput = {
    update: XOR<RowmapUpdateWithoutContentmapInput, RowmapUncheckedUpdateWithoutContentmapInput>
    create: XOR<RowmapCreateWithoutContentmapInput, RowmapUncheckedCreateWithoutContentmapInput>
  }

  export type RowmapUpdateWithoutContentmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RowmapUncheckedUpdateWithoutContentmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    pos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContentmapCreateWithoutRowmapInput = {
    content?: string | null
    colmap: ColmapCreateNestedOneWithoutContentmapInput
  }

  export type ContentmapUncheckedCreateWithoutRowmapInput = {
    colindex: string
    content?: string | null
  }

  export type ContentmapCreateOrConnectWithoutRowmapInput = {
    where: ContentmapWhereUniqueInput
    create: XOR<ContentmapCreateWithoutRowmapInput, ContentmapUncheckedCreateWithoutRowmapInput>
  }

  export type ContentmapCreateManyRowmapInputEnvelope = {
    data: Enumerable<ContentmapCreateManyRowmapInput>
    skipDuplicates?: boolean
  }

  export type ContentmapUpsertWithWhereUniqueWithoutRowmapInput = {
    where: ContentmapWhereUniqueInput
    update: XOR<ContentmapUpdateWithoutRowmapInput, ContentmapUncheckedUpdateWithoutRowmapInput>
    create: XOR<ContentmapCreateWithoutRowmapInput, ContentmapUncheckedCreateWithoutRowmapInput>
  }

  export type ContentmapUpdateWithWhereUniqueWithoutRowmapInput = {
    where: ContentmapWhereUniqueInput
    data: XOR<ContentmapUpdateWithoutRowmapInput, ContentmapUncheckedUpdateWithoutRowmapInput>
  }

  export type ContentmapUpdateManyWithWhereWithoutRowmapInput = {
    where: ContentmapScalarWhereInput
    data: XOR<ContentmapUpdateManyMutationInput, ContentmapUncheckedUpdateManyWithoutContentmapInput>
  }

  export type ContentmapCreateManyColmapInput = {
    rowindex: string
    content?: string | null
  }

  export type ContentmapUpdateWithoutColmapInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    rowmap?: RowmapUpdateOneRequiredWithoutContentmapNestedInput
  }

  export type ContentmapUncheckedUpdateWithoutColmapInput = {
    rowindex?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentmapUncheckedUpdateManyWithoutContentmapInput = {
    rowindex?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentmapCreateManyRowmapInput = {
    colindex: string
    content?: string | null
  }

  export type ContentmapUpdateWithoutRowmapInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    colmap?: ColmapUpdateOneRequiredWithoutContentmapNestedInput
  }

  export type ContentmapUncheckedUpdateWithoutRowmapInput = {
    colindex?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
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
