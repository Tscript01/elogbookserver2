
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Placement
 * 
 */
export type Placement = $Result.DefaultSelection<Prisma.$PlacementPayload>
/**
 * Model DailyLog
 * 
 */
export type DailyLog = $Result.DefaultSelection<Prisma.$DailyLogPayload>
/**
 * Model WeeklySubmission
 * 
 */
export type WeeklySubmission = $Result.DefaultSelection<Prisma.$WeeklySubmissionPayload>
/**
 * Model LogBookApproval
 * 
 */
export type LogBookApproval = $Result.DefaultSelection<Prisma.$LogBookApprovalPayload>
/**
 * Model FinalClearance
 * 
 */
export type FinalClearance = $Result.DefaultSelection<Prisma.$FinalClearancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  IND_SUPERVISOR: 'IND_SUPERVISOR',
  INST_COORDINATOR: 'INST_COORDINATOR',
  ITF_OFFICIAL: 'ITF_OFFICIAL',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ClearanceStatus: {
  PENDING: 'PENDING',
  CLEARED: 'CLEARED',
  FLAGGED: 'FLAGGED'
};

export type ClearanceStatus = (typeof ClearanceStatus)[keyof typeof ClearanceStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ClearanceStatus = $Enums.ClearanceStatus

export const ClearanceStatus: typeof $Enums.ClearanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.placement`: Exposes CRUD operations for the **Placement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Placements
    * const placements = await prisma.placement.findMany()
    * ```
    */
  get placement(): Prisma.PlacementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyLog`: Exposes CRUD operations for the **DailyLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyLogs
    * const dailyLogs = await prisma.dailyLog.findMany()
    * ```
    */
  get dailyLog(): Prisma.DailyLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklySubmission`: Exposes CRUD operations for the **WeeklySubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklySubmissions
    * const weeklySubmissions = await prisma.weeklySubmission.findMany()
    * ```
    */
  get weeklySubmission(): Prisma.WeeklySubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logBookApproval`: Exposes CRUD operations for the **LogBookApproval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogBookApprovals
    * const logBookApprovals = await prisma.logBookApproval.findMany()
    * ```
    */
  get logBookApproval(): Prisma.LogBookApprovalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finalClearance`: Exposes CRUD operations for the **FinalClearance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinalClearances
    * const finalClearances = await prisma.finalClearance.findMany()
    * ```
    */
  get finalClearance(): Prisma.FinalClearanceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PasswordResetToken: 'PasswordResetToken',
    RefreshToken: 'RefreshToken',
    Placement: 'Placement',
    DailyLog: 'DailyLog',
    WeeklySubmission: 'WeeklySubmission',
    LogBookApproval: 'LogBookApproval',
    FinalClearance: 'FinalClearance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "passwordResetToken" | "refreshToken" | "placement" | "dailyLog" | "weeklySubmission" | "logBookApproval" | "finalClearance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Placement: {
        payload: Prisma.$PlacementPayload<ExtArgs>
        fields: Prisma.PlacementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlacementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlacementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          findFirst: {
            args: Prisma.PlacementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlacementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          findMany: {
            args: Prisma.PlacementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>[]
          }
          create: {
            args: Prisma.PlacementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          createMany: {
            args: Prisma.PlacementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlacementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>[]
          }
          delete: {
            args: Prisma.PlacementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          update: {
            args: Prisma.PlacementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          deleteMany: {
            args: Prisma.PlacementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlacementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlacementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>[]
          }
          upsert: {
            args: Prisma.PlacementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          aggregate: {
            args: Prisma.PlacementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlacement>
          }
          groupBy: {
            args: Prisma.PlacementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlacementCountArgs<ExtArgs>
            result: $Utils.Optional<PlacementCountAggregateOutputType> | number
          }
        }
      }
      DailyLog: {
        payload: Prisma.$DailyLogPayload<ExtArgs>
        fields: Prisma.DailyLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findFirst: {
            args: Prisma.DailyLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findMany: {
            args: Prisma.DailyLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          create: {
            args: Prisma.DailyLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          createMany: {
            args: Prisma.DailyLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          delete: {
            args: Prisma.DailyLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          update: {
            args: Prisma.DailyLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          deleteMany: {
            args: Prisma.DailyLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          upsert: {
            args: Prisma.DailyLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          aggregate: {
            args: Prisma.DailyLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyLog>
          }
          groupBy: {
            args: Prisma.DailyLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyLogCountArgs<ExtArgs>
            result: $Utils.Optional<DailyLogCountAggregateOutputType> | number
          }
        }
      }
      WeeklySubmission: {
        payload: Prisma.$WeeklySubmissionPayload<ExtArgs>
        fields: Prisma.WeeklySubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklySubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklySubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          findFirst: {
            args: Prisma.WeeklySubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklySubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          findMany: {
            args: Prisma.WeeklySubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>[]
          }
          create: {
            args: Prisma.WeeklySubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          createMany: {
            args: Prisma.WeeklySubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklySubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>[]
          }
          delete: {
            args: Prisma.WeeklySubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          update: {
            args: Prisma.WeeklySubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          deleteMany: {
            args: Prisma.WeeklySubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklySubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklySubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>[]
          }
          upsert: {
            args: Prisma.WeeklySubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklySubmissionPayload>
          }
          aggregate: {
            args: Prisma.WeeklySubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklySubmission>
          }
          groupBy: {
            args: Prisma.WeeklySubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklySubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklySubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklySubmissionCountAggregateOutputType> | number
          }
        }
      }
      LogBookApproval: {
        payload: Prisma.$LogBookApprovalPayload<ExtArgs>
        fields: Prisma.LogBookApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogBookApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogBookApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload>
          }
          findFirst: {
            args: Prisma.LogBookApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogBookApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload>
          }
          findMany: {
            args: Prisma.LogBookApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload>[]
          }
          create: {
            args: Prisma.LogBookApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload>
          }
          createMany: {
            args: Prisma.LogBookApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogBookApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload>[]
          }
          delete: {
            args: Prisma.LogBookApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload>
          }
          update: {
            args: Prisma.LogBookApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload>
          }
          deleteMany: {
            args: Prisma.LogBookApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogBookApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogBookApprovalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload>[]
          }
          upsert: {
            args: Prisma.LogBookApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogBookApprovalPayload>
          }
          aggregate: {
            args: Prisma.LogBookApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogBookApproval>
          }
          groupBy: {
            args: Prisma.LogBookApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogBookApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogBookApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<LogBookApprovalCountAggregateOutputType> | number
          }
        }
      }
      FinalClearance: {
        payload: Prisma.$FinalClearancePayload<ExtArgs>
        fields: Prisma.FinalClearanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinalClearanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinalClearanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload>
          }
          findFirst: {
            args: Prisma.FinalClearanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinalClearanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload>
          }
          findMany: {
            args: Prisma.FinalClearanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload>[]
          }
          create: {
            args: Prisma.FinalClearanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload>
          }
          createMany: {
            args: Prisma.FinalClearanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinalClearanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload>[]
          }
          delete: {
            args: Prisma.FinalClearanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload>
          }
          update: {
            args: Prisma.FinalClearanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload>
          }
          deleteMany: {
            args: Prisma.FinalClearanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinalClearanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinalClearanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload>[]
          }
          upsert: {
            args: Prisma.FinalClearanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalClearancePayload>
          }
          aggregate: {
            args: Prisma.FinalClearanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinalClearance>
          }
          groupBy: {
            args: Prisma.FinalClearanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinalClearanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinalClearanceCountArgs<ExtArgs>
            result: $Utils.Optional<FinalClearanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    passwordResetToken?: PasswordResetTokenOmit
    refreshToken?: RefreshTokenOmit
    placement?: PlacementOmit
    dailyLog?: DailyLogOmit
    weeklySubmission?: WeeklySubmissionOmit
    logBookApproval?: LogBookApprovalOmit
    finalClearance?: FinalClearanceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    studentPlacements: number
    indSupervisorPlacements: number
    instCoordinatorPlacements: number
    approvals: number
    clearances: number
    refreshTokens: number
    password_reset_tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentPlacements?: boolean | UserCountOutputTypeCountStudentPlacementsArgs
    indSupervisorPlacements?: boolean | UserCountOutputTypeCountIndSupervisorPlacementsArgs
    instCoordinatorPlacements?: boolean | UserCountOutputTypeCountInstCoordinatorPlacementsArgs
    approvals?: boolean | UserCountOutputTypeCountApprovalsArgs
    clearances?: boolean | UserCountOutputTypeCountClearancesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    password_reset_tokens?: boolean | UserCountOutputTypeCountPassword_reset_tokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIndSupervisorPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInstCoordinatorPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogBookApprovalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClearancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinalClearanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPassword_reset_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
  }


  /**
   * Count Type PlacementCountOutputType
   */

  export type PlacementCountOutputType = {
    daily_logs: number
    weekly_submissions: number
  }

  export type PlacementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_logs?: boolean | PlacementCountOutputTypeCountDaily_logsArgs
    weekly_submissions?: boolean | PlacementCountOutputTypeCountWeekly_submissionsArgs
  }

  // Custom InputTypes
  /**
   * PlacementCountOutputType without action
   */
  export type PlacementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementCountOutputType
     */
    select?: PlacementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlacementCountOutputType without action
   */
  export type PlacementCountOutputTypeCountDaily_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
  }

  /**
   * PlacementCountOutputType without action
   */
  export type PlacementCountOutputTypeCountWeekly_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySubmissionWhereInput
  }


  /**
   * Count Type WeeklySubmissionCountOutputType
   */

  export type WeeklySubmissionCountOutputType = {
    daily_logs: number
    approvals: number
  }

  export type WeeklySubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily_logs?: boolean | WeeklySubmissionCountOutputTypeCountDaily_logsArgs
    approvals?: boolean | WeeklySubmissionCountOutputTypeCountApprovalsArgs
  }

  // Custom InputTypes
  /**
   * WeeklySubmissionCountOutputType without action
   */
  export type WeeklySubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmissionCountOutputType
     */
    select?: WeeklySubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeeklySubmissionCountOutputType without action
   */
  export type WeeklySubmissionCountOutputTypeCountDaily_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
  }

  /**
   * WeeklySubmissionCountOutputType without action
   */
  export type WeeklySubmissionCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogBookApprovalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    name: number
    role: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    studentPlacements?: boolean | User$studentPlacementsArgs<ExtArgs>
    indSupervisorPlacements?: boolean | User$indSupervisorPlacementsArgs<ExtArgs>
    instCoordinatorPlacements?: boolean | User$instCoordinatorPlacementsArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    clearances?: boolean | User$clearancesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    password_reset_tokens?: boolean | User$password_reset_tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "name" | "role" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentPlacements?: boolean | User$studentPlacementsArgs<ExtArgs>
    indSupervisorPlacements?: boolean | User$indSupervisorPlacementsArgs<ExtArgs>
    instCoordinatorPlacements?: boolean | User$instCoordinatorPlacementsArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    clearances?: boolean | User$clearancesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    password_reset_tokens?: boolean | User$password_reset_tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      studentPlacements: Prisma.$PlacementPayload<ExtArgs>[]
      indSupervisorPlacements: Prisma.$PlacementPayload<ExtArgs>[]
      instCoordinatorPlacements: Prisma.$PlacementPayload<ExtArgs>[]
      approvals: Prisma.$LogBookApprovalPayload<ExtArgs>[]
      clearances: Prisma.$FinalClearancePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      password_reset_tokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      name: string
      role: $Enums.Role
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentPlacements<T extends User$studentPlacementsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentPlacementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    indSupervisorPlacements<T extends User$indSupervisorPlacementsArgs<ExtArgs> = {}>(args?: Subset<T, User$indSupervisorPlacementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instCoordinatorPlacements<T extends User$instCoordinatorPlacementsArgs<ExtArgs> = {}>(args?: Subset<T, User$instCoordinatorPlacementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvals<T extends User$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clearances<T extends User$clearancesArgs<ExtArgs> = {}>(args?: Subset<T, User$clearancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    password_reset_tokens<T extends User$password_reset_tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$password_reset_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.studentPlacements
   */
  export type User$studentPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    where?: PlacementWhereInput
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    cursor?: PlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * User.indSupervisorPlacements
   */
  export type User$indSupervisorPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    where?: PlacementWhereInput
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    cursor?: PlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * User.instCoordinatorPlacements
   */
  export type User$instCoordinatorPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    where?: PlacementWhereInput
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    cursor?: PlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * User.approvals
   */
  export type User$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    where?: LogBookApprovalWhereInput
    orderBy?: LogBookApprovalOrderByWithRelationInput | LogBookApprovalOrderByWithRelationInput[]
    cursor?: LogBookApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogBookApprovalScalarFieldEnum | LogBookApprovalScalarFieldEnum[]
  }

  /**
   * User.clearances
   */
  export type User$clearancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    where?: FinalClearanceWhereInput
    orderBy?: FinalClearanceOrderByWithRelationInput | FinalClearanceOrderByWithRelationInput[]
    cursor?: FinalClearanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinalClearanceScalarFieldEnum | FinalClearanceScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.password_reset_tokens
   */
  export type User$password_reset_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    cursor?: PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
    jon: string | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
    jon: string | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    expires_at: number
    created_at: number
    jon: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
    jon?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
    jon?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
    jon?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    user_id: string
    token: string
    expires_at: Date
    created_at: Date
    jon: string
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    jon?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    jon?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    jon?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    jon?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "expires_at" | "created_at" | "jon", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token: string
      expires_at: Date
      created_at: Date
      jon: string
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly user_id: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expires_at: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly created_at: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly jon: FieldRef<"PasswordResetToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    user_id: string
    token: string
    expires_at: Date
    created_at: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "expires_at" | "created_at", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly user_id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly expires_at: FieldRef<"RefreshToken", 'DateTime'>
    readonly created_at: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Placement
   */

  export type AggregatePlacement = {
    _count: PlacementCountAggregateOutputType | null
    _min: PlacementMinAggregateOutputType | null
    _max: PlacementMaxAggregateOutputType | null
  }

  export type PlacementMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    company_name: string | null
    ind_supervisor_id: string | null
    inst_coordinator_id: string | null
    company_address: string | null
    company_contact: string | null
    company_email: string | null
    start_date: Date | null
    end_date: Date | null
  }

  export type PlacementMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    company_name: string | null
    ind_supervisor_id: string | null
    inst_coordinator_id: string | null
    company_address: string | null
    company_contact: string | null
    company_email: string | null
    start_date: Date | null
    end_date: Date | null
  }

  export type PlacementCountAggregateOutputType = {
    id: number
    student_id: number
    company_name: number
    ind_supervisor_id: number
    inst_coordinator_id: number
    company_address: number
    company_contact: number
    company_email: number
    start_date: number
    end_date: number
    _all: number
  }


  export type PlacementMinAggregateInputType = {
    id?: true
    student_id?: true
    company_name?: true
    ind_supervisor_id?: true
    inst_coordinator_id?: true
    company_address?: true
    company_contact?: true
    company_email?: true
    start_date?: true
    end_date?: true
  }

  export type PlacementMaxAggregateInputType = {
    id?: true
    student_id?: true
    company_name?: true
    ind_supervisor_id?: true
    inst_coordinator_id?: true
    company_address?: true
    company_contact?: true
    company_email?: true
    start_date?: true
    end_date?: true
  }

  export type PlacementCountAggregateInputType = {
    id?: true
    student_id?: true
    company_name?: true
    ind_supervisor_id?: true
    inst_coordinator_id?: true
    company_address?: true
    company_contact?: true
    company_email?: true
    start_date?: true
    end_date?: true
    _all?: true
  }

  export type PlacementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Placement to aggregate.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Placements
    **/
    _count?: true | PlacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacementMaxAggregateInputType
  }

  export type GetPlacementAggregateType<T extends PlacementAggregateArgs> = {
        [P in keyof T & keyof AggregatePlacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlacement[P]>
      : GetScalarType<T[P], AggregatePlacement[P]>
  }




  export type PlacementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementWhereInput
    orderBy?: PlacementOrderByWithAggregationInput | PlacementOrderByWithAggregationInput[]
    by: PlacementScalarFieldEnum[] | PlacementScalarFieldEnum
    having?: PlacementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacementCountAggregateInputType | true
    _min?: PlacementMinAggregateInputType
    _max?: PlacementMaxAggregateInputType
  }

  export type PlacementGroupByOutputType = {
    id: string
    student_id: string
    company_name: string
    ind_supervisor_id: string
    inst_coordinator_id: string | null
    company_address: string | null
    company_contact: string | null
    company_email: string | null
    start_date: Date
    end_date: Date
    _count: PlacementCountAggregateOutputType | null
    _min: PlacementMinAggregateOutputType | null
    _max: PlacementMaxAggregateOutputType | null
  }

  type GetPlacementGroupByPayload<T extends PlacementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacementGroupByOutputType[P]>
            : GetScalarType<T[P], PlacementGroupByOutputType[P]>
        }
      >
    >


  export type PlacementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    company_name?: boolean
    ind_supervisor_id?: boolean
    inst_coordinator_id?: boolean
    company_address?: boolean
    company_contact?: boolean
    company_email?: boolean
    start_date?: boolean
    end_date?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    ind_supervisor?: boolean | UserDefaultArgs<ExtArgs>
    inst_coordinator?: boolean | Placement$inst_coordinatorArgs<ExtArgs>
    daily_logs?: boolean | Placement$daily_logsArgs<ExtArgs>
    weekly_submissions?: boolean | Placement$weekly_submissionsArgs<ExtArgs>
    clearance?: boolean | Placement$clearanceArgs<ExtArgs>
    _count?: boolean | PlacementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type PlacementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    company_name?: boolean
    ind_supervisor_id?: boolean
    inst_coordinator_id?: boolean
    company_address?: boolean
    company_contact?: boolean
    company_email?: boolean
    start_date?: boolean
    end_date?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    ind_supervisor?: boolean | UserDefaultArgs<ExtArgs>
    inst_coordinator?: boolean | Placement$inst_coordinatorArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type PlacementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    company_name?: boolean
    ind_supervisor_id?: boolean
    inst_coordinator_id?: boolean
    company_address?: boolean
    company_contact?: boolean
    company_email?: boolean
    start_date?: boolean
    end_date?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    ind_supervisor?: boolean | UserDefaultArgs<ExtArgs>
    inst_coordinator?: boolean | Placement$inst_coordinatorArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type PlacementSelectScalar = {
    id?: boolean
    student_id?: boolean
    company_name?: boolean
    ind_supervisor_id?: boolean
    inst_coordinator_id?: boolean
    company_address?: boolean
    company_contact?: boolean
    company_email?: boolean
    start_date?: boolean
    end_date?: boolean
  }

  export type PlacementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "company_name" | "ind_supervisor_id" | "inst_coordinator_id" | "company_address" | "company_contact" | "company_email" | "start_date" | "end_date", ExtArgs["result"]["placement"]>
  export type PlacementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    ind_supervisor?: boolean | UserDefaultArgs<ExtArgs>
    inst_coordinator?: boolean | Placement$inst_coordinatorArgs<ExtArgs>
    daily_logs?: boolean | Placement$daily_logsArgs<ExtArgs>
    weekly_submissions?: boolean | Placement$weekly_submissionsArgs<ExtArgs>
    clearance?: boolean | Placement$clearanceArgs<ExtArgs>
    _count?: boolean | PlacementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlacementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    ind_supervisor?: boolean | UserDefaultArgs<ExtArgs>
    inst_coordinator?: boolean | Placement$inst_coordinatorArgs<ExtArgs>
  }
  export type PlacementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    ind_supervisor?: boolean | UserDefaultArgs<ExtArgs>
    inst_coordinator?: boolean | Placement$inst_coordinatorArgs<ExtArgs>
  }

  export type $PlacementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Placement"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      ind_supervisor: Prisma.$UserPayload<ExtArgs>
      inst_coordinator: Prisma.$UserPayload<ExtArgs> | null
      daily_logs: Prisma.$DailyLogPayload<ExtArgs>[]
      weekly_submissions: Prisma.$WeeklySubmissionPayload<ExtArgs>[]
      clearance: Prisma.$FinalClearancePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      company_name: string
      ind_supervisor_id: string
      inst_coordinator_id: string | null
      company_address: string | null
      company_contact: string | null
      company_email: string | null
      start_date: Date
      end_date: Date
    }, ExtArgs["result"]["placement"]>
    composites: {}
  }

  type PlacementGetPayload<S extends boolean | null | undefined | PlacementDefaultArgs> = $Result.GetResult<Prisma.$PlacementPayload, S>

  type PlacementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlacementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacementCountAggregateInputType | true
    }

  export interface PlacementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Placement'], meta: { name: 'Placement' } }
    /**
     * Find zero or one Placement that matches the filter.
     * @param {PlacementFindUniqueArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlacementFindUniqueArgs>(args: SelectSubset<T, PlacementFindUniqueArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Placement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlacementFindUniqueOrThrowArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlacementFindUniqueOrThrowArgs>(args: SelectSubset<T, PlacementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Placement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementFindFirstArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlacementFindFirstArgs>(args?: SelectSubset<T, PlacementFindFirstArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Placement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementFindFirstOrThrowArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlacementFindFirstOrThrowArgs>(args?: SelectSubset<T, PlacementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Placements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Placements
     * const placements = await prisma.placement.findMany()
     * 
     * // Get first 10 Placements
     * const placements = await prisma.placement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placementWithIdOnly = await prisma.placement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlacementFindManyArgs>(args?: SelectSubset<T, PlacementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Placement.
     * @param {PlacementCreateArgs} args - Arguments to create a Placement.
     * @example
     * // Create one Placement
     * const Placement = await prisma.placement.create({
     *   data: {
     *     // ... data to create a Placement
     *   }
     * })
     * 
     */
    create<T extends PlacementCreateArgs>(args: SelectSubset<T, PlacementCreateArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Placements.
     * @param {PlacementCreateManyArgs} args - Arguments to create many Placements.
     * @example
     * // Create many Placements
     * const placement = await prisma.placement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlacementCreateManyArgs>(args?: SelectSubset<T, PlacementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Placements and returns the data saved in the database.
     * @param {PlacementCreateManyAndReturnArgs} args - Arguments to create many Placements.
     * @example
     * // Create many Placements
     * const placement = await prisma.placement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Placements and only return the `id`
     * const placementWithIdOnly = await prisma.placement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlacementCreateManyAndReturnArgs>(args?: SelectSubset<T, PlacementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Placement.
     * @param {PlacementDeleteArgs} args - Arguments to delete one Placement.
     * @example
     * // Delete one Placement
     * const Placement = await prisma.placement.delete({
     *   where: {
     *     // ... filter to delete one Placement
     *   }
     * })
     * 
     */
    delete<T extends PlacementDeleteArgs>(args: SelectSubset<T, PlacementDeleteArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Placement.
     * @param {PlacementUpdateArgs} args - Arguments to update one Placement.
     * @example
     * // Update one Placement
     * const placement = await prisma.placement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlacementUpdateArgs>(args: SelectSubset<T, PlacementUpdateArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Placements.
     * @param {PlacementDeleteManyArgs} args - Arguments to filter Placements to delete.
     * @example
     * // Delete a few Placements
     * const { count } = await prisma.placement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlacementDeleteManyArgs>(args?: SelectSubset<T, PlacementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Placements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Placements
     * const placement = await prisma.placement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlacementUpdateManyArgs>(args: SelectSubset<T, PlacementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Placements and returns the data updated in the database.
     * @param {PlacementUpdateManyAndReturnArgs} args - Arguments to update many Placements.
     * @example
     * // Update many Placements
     * const placement = await prisma.placement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Placements and only return the `id`
     * const placementWithIdOnly = await prisma.placement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlacementUpdateManyAndReturnArgs>(args: SelectSubset<T, PlacementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Placement.
     * @param {PlacementUpsertArgs} args - Arguments to update or create a Placement.
     * @example
     * // Update or create a Placement
     * const placement = await prisma.placement.upsert({
     *   create: {
     *     // ... data to create a Placement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Placement we want to update
     *   }
     * })
     */
    upsert<T extends PlacementUpsertArgs>(args: SelectSubset<T, PlacementUpsertArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Placements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementCountArgs} args - Arguments to filter Placements to count.
     * @example
     * // Count the number of Placements
     * const count = await prisma.placement.count({
     *   where: {
     *     // ... the filter for the Placements we want to count
     *   }
     * })
    **/
    count<T extends PlacementCountArgs>(
      args?: Subset<T, PlacementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Placement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlacementAggregateArgs>(args: Subset<T, PlacementAggregateArgs>): Prisma.PrismaPromise<GetPlacementAggregateType<T>>

    /**
     * Group by Placement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementGroupByArgs} args - Group by arguments.
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
      T extends PlacementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlacementGroupByArgs['orderBy'] }
        : { orderBy?: PlacementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Placement model
   */
  readonly fields: PlacementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Placement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlacementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ind_supervisor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inst_coordinator<T extends Placement$inst_coordinatorArgs<ExtArgs> = {}>(args?: Subset<T, Placement$inst_coordinatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    daily_logs<T extends Placement$daily_logsArgs<ExtArgs> = {}>(args?: Subset<T, Placement$daily_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weekly_submissions<T extends Placement$weekly_submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Placement$weekly_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clearance<T extends Placement$clearanceArgs<ExtArgs> = {}>(args?: Subset<T, Placement$clearanceArgs<ExtArgs>>): Prisma__FinalClearanceClient<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Placement model
   */
  interface PlacementFieldRefs {
    readonly id: FieldRef<"Placement", 'String'>
    readonly student_id: FieldRef<"Placement", 'String'>
    readonly company_name: FieldRef<"Placement", 'String'>
    readonly ind_supervisor_id: FieldRef<"Placement", 'String'>
    readonly inst_coordinator_id: FieldRef<"Placement", 'String'>
    readonly company_address: FieldRef<"Placement", 'String'>
    readonly company_contact: FieldRef<"Placement", 'String'>
    readonly company_email: FieldRef<"Placement", 'String'>
    readonly start_date: FieldRef<"Placement", 'DateTime'>
    readonly end_date: FieldRef<"Placement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Placement findUnique
   */
  export type PlacementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement findUniqueOrThrow
   */
  export type PlacementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement findFirst
   */
  export type PlacementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Placements.
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * Placement findFirstOrThrow
   */
  export type PlacementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Placements.
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * Placement findMany
   */
  export type PlacementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placements to fetch.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Placements.
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * Placement create
   */
  export type PlacementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * The data needed to create a Placement.
     */
    data: XOR<PlacementCreateInput, PlacementUncheckedCreateInput>
  }

  /**
   * Placement createMany
   */
  export type PlacementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Placements.
     */
    data: PlacementCreateManyInput | PlacementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Placement createManyAndReturn
   */
  export type PlacementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * The data used to create many Placements.
     */
    data: PlacementCreateManyInput | PlacementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Placement update
   */
  export type PlacementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * The data needed to update a Placement.
     */
    data: XOR<PlacementUpdateInput, PlacementUncheckedUpdateInput>
    /**
     * Choose, which Placement to update.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement updateMany
   */
  export type PlacementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Placements.
     */
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyInput>
    /**
     * Filter which Placements to update
     */
    where?: PlacementWhereInput
    /**
     * Limit how many Placements to update.
     */
    limit?: number
  }

  /**
   * Placement updateManyAndReturn
   */
  export type PlacementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * The data used to update Placements.
     */
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyInput>
    /**
     * Filter which Placements to update
     */
    where?: PlacementWhereInput
    /**
     * Limit how many Placements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Placement upsert
   */
  export type PlacementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * The filter to search for the Placement to update in case it exists.
     */
    where: PlacementWhereUniqueInput
    /**
     * In case the Placement found by the `where` argument doesn't exist, create a new Placement with this data.
     */
    create: XOR<PlacementCreateInput, PlacementUncheckedCreateInput>
    /**
     * In case the Placement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlacementUpdateInput, PlacementUncheckedUpdateInput>
  }

  /**
   * Placement delete
   */
  export type PlacementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter which Placement to delete.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement deleteMany
   */
  export type PlacementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Placements to delete
     */
    where?: PlacementWhereInput
    /**
     * Limit how many Placements to delete.
     */
    limit?: number
  }

  /**
   * Placement.inst_coordinator
   */
  export type Placement$inst_coordinatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Placement.daily_logs
   */
  export type Placement$daily_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    cursor?: DailyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * Placement.weekly_submissions
   */
  export type Placement$weekly_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    where?: WeeklySubmissionWhereInput
    orderBy?: WeeklySubmissionOrderByWithRelationInput | WeeklySubmissionOrderByWithRelationInput[]
    cursor?: WeeklySubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklySubmissionScalarFieldEnum | WeeklySubmissionScalarFieldEnum[]
  }

  /**
   * Placement.clearance
   */
  export type Placement$clearanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    where?: FinalClearanceWhereInput
  }

  /**
   * Placement without action
   */
  export type PlacementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
  }


  /**
   * Model DailyLog
   */

  export type AggregateDailyLog = {
    _count: DailyLogCountAggregateOutputType | null
    _avg: DailyLogAvgAggregateOutputType | null
    _sum: DailyLogSumAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  export type DailyLogAvgAggregateOutputType = {
    week_no: number | null
  }

  export type DailyLogSumAggregateOutputType = {
    week_no: number | null
  }

  export type DailyLogMinAggregateOutputType = {
    id: string | null
    placement_id: string | null
    weekly_submission_id: string | null
    week_no: number | null
    log_date: Date | null
    description: string | null
    image_url: string | null
    created_timestamp: Date | null
  }

  export type DailyLogMaxAggregateOutputType = {
    id: string | null
    placement_id: string | null
    weekly_submission_id: string | null
    week_no: number | null
    log_date: Date | null
    description: string | null
    image_url: string | null
    created_timestamp: Date | null
  }

  export type DailyLogCountAggregateOutputType = {
    id: number
    placement_id: number
    weekly_submission_id: number
    week_no: number
    log_date: number
    description: number
    image_url: number
    created_timestamp: number
    _all: number
  }


  export type DailyLogAvgAggregateInputType = {
    week_no?: true
  }

  export type DailyLogSumAggregateInputType = {
    week_no?: true
  }

  export type DailyLogMinAggregateInputType = {
    id?: true
    placement_id?: true
    weekly_submission_id?: true
    week_no?: true
    log_date?: true
    description?: true
    image_url?: true
    created_timestamp?: true
  }

  export type DailyLogMaxAggregateInputType = {
    id?: true
    placement_id?: true
    weekly_submission_id?: true
    week_no?: true
    log_date?: true
    description?: true
    image_url?: true
    created_timestamp?: true
  }

  export type DailyLogCountAggregateInputType = {
    id?: true
    placement_id?: true
    weekly_submission_id?: true
    week_no?: true
    log_date?: true
    description?: true
    image_url?: true
    created_timestamp?: true
    _all?: true
  }

  export type DailyLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLog to aggregate.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyLogs
    **/
    _count?: true | DailyLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyLogMaxAggregateInputType
  }

  export type GetDailyLogAggregateType<T extends DailyLogAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyLog[P]>
      : GetScalarType<T[P], AggregateDailyLog[P]>
  }




  export type DailyLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithAggregationInput | DailyLogOrderByWithAggregationInput[]
    by: DailyLogScalarFieldEnum[] | DailyLogScalarFieldEnum
    having?: DailyLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyLogCountAggregateInputType | true
    _avg?: DailyLogAvgAggregateInputType
    _sum?: DailyLogSumAggregateInputType
    _min?: DailyLogMinAggregateInputType
    _max?: DailyLogMaxAggregateInputType
  }

  export type DailyLogGroupByOutputType = {
    id: string
    placement_id: string
    weekly_submission_id: string
    week_no: number
    log_date: Date
    description: string
    image_url: string | null
    created_timestamp: Date
    _count: DailyLogCountAggregateOutputType | null
    _avg: DailyLogAvgAggregateOutputType | null
    _sum: DailyLogSumAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  type GetDailyLogGroupByPayload<T extends DailyLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
            : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
        }
      >
    >


  export type DailyLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placement_id?: boolean
    weekly_submission_id?: boolean
    week_no?: boolean
    log_date?: boolean
    description?: boolean
    image_url?: boolean
    created_timestamp?: boolean
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placement_id?: boolean
    weekly_submission_id?: boolean
    week_no?: boolean
    log_date?: boolean
    description?: boolean
    image_url?: boolean
    created_timestamp?: boolean
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placement_id?: boolean
    weekly_submission_id?: boolean
    week_no?: boolean
    log_date?: boolean
    description?: boolean
    image_url?: boolean
    created_timestamp?: boolean
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectScalar = {
    id?: boolean
    placement_id?: boolean
    weekly_submission_id?: boolean
    week_no?: boolean
    log_date?: boolean
    description?: boolean
    image_url?: boolean
    created_timestamp?: boolean
  }

  export type DailyLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placement_id" | "weekly_submission_id" | "week_no" | "log_date" | "description" | "image_url" | "created_timestamp", ExtArgs["result"]["dailyLog"]>
  export type DailyLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
  }
  export type DailyLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
  }
  export type DailyLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
  }

  export type $DailyLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyLog"
    objects: {
      placement: Prisma.$PlacementPayload<ExtArgs>
      weekly_submission: Prisma.$WeeklySubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placement_id: string
      weekly_submission_id: string
      week_no: number
      log_date: Date
      description: string
      image_url: string | null
      created_timestamp: Date
    }, ExtArgs["result"]["dailyLog"]>
    composites: {}
  }

  type DailyLogGetPayload<S extends boolean | null | undefined | DailyLogDefaultArgs> = $Result.GetResult<Prisma.$DailyLogPayload, S>

  type DailyLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyLogCountAggregateInputType | true
    }

  export interface DailyLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyLog'], meta: { name: 'DailyLog' } }
    /**
     * Find zero or one DailyLog that matches the filter.
     * @param {DailyLogFindUniqueArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyLogFindUniqueArgs>(args: SelectSubset<T, DailyLogFindUniqueArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyLogFindUniqueOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyLogFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyLogFindFirstArgs>(args?: SelectSubset<T, DailyLogFindFirstArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyLogFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany()
     * 
     * // Get first 10 DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyLogFindManyArgs>(args?: SelectSubset<T, DailyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyLog.
     * @param {DailyLogCreateArgs} args - Arguments to create a DailyLog.
     * @example
     * // Create one DailyLog
     * const DailyLog = await prisma.dailyLog.create({
     *   data: {
     *     // ... data to create a DailyLog
     *   }
     * })
     * 
     */
    create<T extends DailyLogCreateArgs>(args: SelectSubset<T, DailyLogCreateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyLogs.
     * @param {DailyLogCreateManyArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyLogCreateManyArgs>(args?: SelectSubset<T, DailyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyLogs and returns the data saved in the database.
     * @param {DailyLogCreateManyAndReturnArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyLogs and only return the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyLogCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyLog.
     * @param {DailyLogDeleteArgs} args - Arguments to delete one DailyLog.
     * @example
     * // Delete one DailyLog
     * const DailyLog = await prisma.dailyLog.delete({
     *   where: {
     *     // ... filter to delete one DailyLog
     *   }
     * })
     * 
     */
    delete<T extends DailyLogDeleteArgs>(args: SelectSubset<T, DailyLogDeleteArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyLog.
     * @param {DailyLogUpdateArgs} args - Arguments to update one DailyLog.
     * @example
     * // Update one DailyLog
     * const dailyLog = await prisma.dailyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyLogUpdateArgs>(args: SelectSubset<T, DailyLogUpdateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyLogs.
     * @param {DailyLogDeleteManyArgs} args - Arguments to filter DailyLogs to delete.
     * @example
     * // Delete a few DailyLogs
     * const { count } = await prisma.dailyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyLogDeleteManyArgs>(args?: SelectSubset<T, DailyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyLogs
     * const dailyLog = await prisma.dailyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyLogUpdateManyArgs>(args: SelectSubset<T, DailyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLogs and returns the data updated in the database.
     * @param {DailyLogUpdateManyAndReturnArgs} args - Arguments to update many DailyLogs.
     * @example
     * // Update many DailyLogs
     * const dailyLog = await prisma.dailyLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyLogs and only return the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyLogUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyLog.
     * @param {DailyLogUpsertArgs} args - Arguments to update or create a DailyLog.
     * @example
     * // Update or create a DailyLog
     * const dailyLog = await prisma.dailyLog.upsert({
     *   create: {
     *     // ... data to create a DailyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyLog we want to update
     *   }
     * })
     */
    upsert<T extends DailyLogUpsertArgs>(args: SelectSubset<T, DailyLogUpsertArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogCountArgs} args - Arguments to filter DailyLogs to count.
     * @example
     * // Count the number of DailyLogs
     * const count = await prisma.dailyLog.count({
     *   where: {
     *     // ... the filter for the DailyLogs we want to count
     *   }
     * })
    **/
    count<T extends DailyLogCountArgs>(
      args?: Subset<T, DailyLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyLogAggregateArgs>(args: Subset<T, DailyLogAggregateArgs>): Prisma.PrismaPromise<GetDailyLogAggregateType<T>>

    /**
     * Group by DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogGroupByArgs} args - Group by arguments.
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
      T extends DailyLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyLogGroupByArgs['orderBy'] }
        : { orderBy?: DailyLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DailyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyLog model
   */
  readonly fields: DailyLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    placement<T extends PlacementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlacementDefaultArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    weekly_submission<T extends WeeklySubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySubmissionDefaultArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyLog model
   */
  interface DailyLogFieldRefs {
    readonly id: FieldRef<"DailyLog", 'String'>
    readonly placement_id: FieldRef<"DailyLog", 'String'>
    readonly weekly_submission_id: FieldRef<"DailyLog", 'String'>
    readonly week_no: FieldRef<"DailyLog", 'Int'>
    readonly log_date: FieldRef<"DailyLog", 'DateTime'>
    readonly description: FieldRef<"DailyLog", 'String'>
    readonly image_url: FieldRef<"DailyLog", 'String'>
    readonly created_timestamp: FieldRef<"DailyLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyLog findUnique
   */
  export type DailyLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findUniqueOrThrow
   */
  export type DailyLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findFirst
   */
  export type DailyLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findFirstOrThrow
   */
  export type DailyLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findMany
   */
  export type DailyLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLogs to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog create
   */
  export type DailyLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyLog.
     */
    data: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
  }

  /**
   * DailyLog createMany
   */
  export type DailyLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyLog createManyAndReturn
   */
  export type DailyLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyLog update
   */
  export type DailyLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyLog.
     */
    data: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
    /**
     * Choose, which DailyLog to update.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog updateMany
   */
  export type DailyLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyLogs.
     */
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyInput>
    /**
     * Filter which DailyLogs to update
     */
    where?: DailyLogWhereInput
    /**
     * Limit how many DailyLogs to update.
     */
    limit?: number
  }

  /**
   * DailyLog updateManyAndReturn
   */
  export type DailyLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * The data used to update DailyLogs.
     */
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyInput>
    /**
     * Filter which DailyLogs to update
     */
    where?: DailyLogWhereInput
    /**
     * Limit how many DailyLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyLog upsert
   */
  export type DailyLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyLog to update in case it exists.
     */
    where: DailyLogWhereUniqueInput
    /**
     * In case the DailyLog found by the `where` argument doesn't exist, create a new DailyLog with this data.
     */
    create: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
    /**
     * In case the DailyLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
  }

  /**
   * DailyLog delete
   */
  export type DailyLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter which DailyLog to delete.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog deleteMany
   */
  export type DailyLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLogs to delete
     */
    where?: DailyLogWhereInput
    /**
     * Limit how many DailyLogs to delete.
     */
    limit?: number
  }

  /**
   * DailyLog without action
   */
  export type DailyLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
  }


  /**
   * Model WeeklySubmission
   */

  export type AggregateWeeklySubmission = {
    _count: WeeklySubmissionCountAggregateOutputType | null
    _avg: WeeklySubmissionAvgAggregateOutputType | null
    _sum: WeeklySubmissionSumAggregateOutputType | null
    _min: WeeklySubmissionMinAggregateOutputType | null
    _max: WeeklySubmissionMaxAggregateOutputType | null
  }

  export type WeeklySubmissionAvgAggregateOutputType = {
    week_no: number | null
  }

  export type WeeklySubmissionSumAggregateOutputType = {
    week_no: number | null
  }

  export type WeeklySubmissionMinAggregateOutputType = {
    id: string | null
    placement_id: string | null
    week_no: number | null
    status: $Enums.Status | null
  }

  export type WeeklySubmissionMaxAggregateOutputType = {
    id: string | null
    placement_id: string | null
    week_no: number | null
    status: $Enums.Status | null
  }

  export type WeeklySubmissionCountAggregateOutputType = {
    id: number
    placement_id: number
    week_no: number
    status: number
    _all: number
  }


  export type WeeklySubmissionAvgAggregateInputType = {
    week_no?: true
  }

  export type WeeklySubmissionSumAggregateInputType = {
    week_no?: true
  }

  export type WeeklySubmissionMinAggregateInputType = {
    id?: true
    placement_id?: true
    week_no?: true
    status?: true
  }

  export type WeeklySubmissionMaxAggregateInputType = {
    id?: true
    placement_id?: true
    week_no?: true
    status?: true
  }

  export type WeeklySubmissionCountAggregateInputType = {
    id?: true
    placement_id?: true
    week_no?: true
    status?: true
    _all?: true
  }

  export type WeeklySubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySubmission to aggregate.
     */
    where?: WeeklySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySubmissions to fetch.
     */
    orderBy?: WeeklySubmissionOrderByWithRelationInput | WeeklySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklySubmissions
    **/
    _count?: true | WeeklySubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklySubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklySubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklySubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklySubmissionMaxAggregateInputType
  }

  export type GetWeeklySubmissionAggregateType<T extends WeeklySubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklySubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklySubmission[P]>
      : GetScalarType<T[P], AggregateWeeklySubmission[P]>
  }




  export type WeeklySubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklySubmissionWhereInput
    orderBy?: WeeklySubmissionOrderByWithAggregationInput | WeeklySubmissionOrderByWithAggregationInput[]
    by: WeeklySubmissionScalarFieldEnum[] | WeeklySubmissionScalarFieldEnum
    having?: WeeklySubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklySubmissionCountAggregateInputType | true
    _avg?: WeeklySubmissionAvgAggregateInputType
    _sum?: WeeklySubmissionSumAggregateInputType
    _min?: WeeklySubmissionMinAggregateInputType
    _max?: WeeklySubmissionMaxAggregateInputType
  }

  export type WeeklySubmissionGroupByOutputType = {
    id: string
    placement_id: string
    week_no: number
    status: $Enums.Status
    _count: WeeklySubmissionCountAggregateOutputType | null
    _avg: WeeklySubmissionAvgAggregateOutputType | null
    _sum: WeeklySubmissionSumAggregateOutputType | null
    _min: WeeklySubmissionMinAggregateOutputType | null
    _max: WeeklySubmissionMaxAggregateOutputType | null
  }

  type GetWeeklySubmissionGroupByPayload<T extends WeeklySubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklySubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklySubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklySubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklySubmissionGroupByOutputType[P]>
        }
      >
    >


  export type WeeklySubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placement_id?: boolean
    week_no?: boolean
    status?: boolean
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    daily_logs?: boolean | WeeklySubmission$daily_logsArgs<ExtArgs>
    approvals?: boolean | WeeklySubmission$approvalsArgs<ExtArgs>
    _count?: boolean | WeeklySubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySubmission"]>

  export type WeeklySubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placement_id?: boolean
    week_no?: boolean
    status?: boolean
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySubmission"]>

  export type WeeklySubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placement_id?: boolean
    week_no?: boolean
    status?: boolean
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklySubmission"]>

  export type WeeklySubmissionSelectScalar = {
    id?: boolean
    placement_id?: boolean
    week_no?: boolean
    status?: boolean
  }

  export type WeeklySubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placement_id" | "week_no" | "status", ExtArgs["result"]["weeklySubmission"]>
  export type WeeklySubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    daily_logs?: boolean | WeeklySubmission$daily_logsArgs<ExtArgs>
    approvals?: boolean | WeeklySubmission$approvalsArgs<ExtArgs>
    _count?: boolean | WeeklySubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeeklySubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
  }
  export type WeeklySubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
  }

  export type $WeeklySubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklySubmission"
    objects: {
      placement: Prisma.$PlacementPayload<ExtArgs>
      daily_logs: Prisma.$DailyLogPayload<ExtArgs>[]
      approvals: Prisma.$LogBookApprovalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placement_id: string
      week_no: number
      status: $Enums.Status
    }, ExtArgs["result"]["weeklySubmission"]>
    composites: {}
  }

  type WeeklySubmissionGetPayload<S extends boolean | null | undefined | WeeklySubmissionDefaultArgs> = $Result.GetResult<Prisma.$WeeklySubmissionPayload, S>

  type WeeklySubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklySubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklySubmissionCountAggregateInputType | true
    }

  export interface WeeklySubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklySubmission'], meta: { name: 'WeeklySubmission' } }
    /**
     * Find zero or one WeeklySubmission that matches the filter.
     * @param {WeeklySubmissionFindUniqueArgs} args - Arguments to find a WeeklySubmission
     * @example
     * // Get one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklySubmissionFindUniqueArgs>(args: SelectSubset<T, WeeklySubmissionFindUniqueArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklySubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklySubmissionFindUniqueOrThrowArgs} args - Arguments to find a WeeklySubmission
     * @example
     * // Get one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklySubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklySubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionFindFirstArgs} args - Arguments to find a WeeklySubmission
     * @example
     * // Get one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklySubmissionFindFirstArgs>(args?: SelectSubset<T, WeeklySubmissionFindFirstArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklySubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionFindFirstOrThrowArgs} args - Arguments to find a WeeklySubmission
     * @example
     * // Get one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklySubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklySubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklySubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklySubmissions
     * const weeklySubmissions = await prisma.weeklySubmission.findMany()
     * 
     * // Get first 10 WeeklySubmissions
     * const weeklySubmissions = await prisma.weeklySubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklySubmissionWithIdOnly = await prisma.weeklySubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklySubmissionFindManyArgs>(args?: SelectSubset<T, WeeklySubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklySubmission.
     * @param {WeeklySubmissionCreateArgs} args - Arguments to create a WeeklySubmission.
     * @example
     * // Create one WeeklySubmission
     * const WeeklySubmission = await prisma.weeklySubmission.create({
     *   data: {
     *     // ... data to create a WeeklySubmission
     *   }
     * })
     * 
     */
    create<T extends WeeklySubmissionCreateArgs>(args: SelectSubset<T, WeeklySubmissionCreateArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklySubmissions.
     * @param {WeeklySubmissionCreateManyArgs} args - Arguments to create many WeeklySubmissions.
     * @example
     * // Create many WeeklySubmissions
     * const weeklySubmission = await prisma.weeklySubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklySubmissionCreateManyArgs>(args?: SelectSubset<T, WeeklySubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklySubmissions and returns the data saved in the database.
     * @param {WeeklySubmissionCreateManyAndReturnArgs} args - Arguments to create many WeeklySubmissions.
     * @example
     * // Create many WeeklySubmissions
     * const weeklySubmission = await prisma.weeklySubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklySubmissions and only return the `id`
     * const weeklySubmissionWithIdOnly = await prisma.weeklySubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklySubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklySubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklySubmission.
     * @param {WeeklySubmissionDeleteArgs} args - Arguments to delete one WeeklySubmission.
     * @example
     * // Delete one WeeklySubmission
     * const WeeklySubmission = await prisma.weeklySubmission.delete({
     *   where: {
     *     // ... filter to delete one WeeklySubmission
     *   }
     * })
     * 
     */
    delete<T extends WeeklySubmissionDeleteArgs>(args: SelectSubset<T, WeeklySubmissionDeleteArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklySubmission.
     * @param {WeeklySubmissionUpdateArgs} args - Arguments to update one WeeklySubmission.
     * @example
     * // Update one WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklySubmissionUpdateArgs>(args: SelectSubset<T, WeeklySubmissionUpdateArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklySubmissions.
     * @param {WeeklySubmissionDeleteManyArgs} args - Arguments to filter WeeklySubmissions to delete.
     * @example
     * // Delete a few WeeklySubmissions
     * const { count } = await prisma.weeklySubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklySubmissionDeleteManyArgs>(args?: SelectSubset<T, WeeklySubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklySubmissions
     * const weeklySubmission = await prisma.weeklySubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklySubmissionUpdateManyArgs>(args: SelectSubset<T, WeeklySubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklySubmissions and returns the data updated in the database.
     * @param {WeeklySubmissionUpdateManyAndReturnArgs} args - Arguments to update many WeeklySubmissions.
     * @example
     * // Update many WeeklySubmissions
     * const weeklySubmission = await prisma.weeklySubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklySubmissions and only return the `id`
     * const weeklySubmissionWithIdOnly = await prisma.weeklySubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeeklySubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklySubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklySubmission.
     * @param {WeeklySubmissionUpsertArgs} args - Arguments to update or create a WeeklySubmission.
     * @example
     * // Update or create a WeeklySubmission
     * const weeklySubmission = await prisma.weeklySubmission.upsert({
     *   create: {
     *     // ... data to create a WeeklySubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklySubmission we want to update
     *   }
     * })
     */
    upsert<T extends WeeklySubmissionUpsertArgs>(args: SelectSubset<T, WeeklySubmissionUpsertArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklySubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionCountArgs} args - Arguments to filter WeeklySubmissions to count.
     * @example
     * // Count the number of WeeklySubmissions
     * const count = await prisma.weeklySubmission.count({
     *   where: {
     *     // ... the filter for the WeeklySubmissions we want to count
     *   }
     * })
    **/
    count<T extends WeeklySubmissionCountArgs>(
      args?: Subset<T, WeeklySubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklySubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklySubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklySubmissionAggregateArgs>(args: Subset<T, WeeklySubmissionAggregateArgs>): Prisma.PrismaPromise<GetWeeklySubmissionAggregateType<T>>

    /**
     * Group by WeeklySubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklySubmissionGroupByArgs} args - Group by arguments.
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
      T extends WeeklySubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklySubmissionGroupByArgs['orderBy'] }
        : { orderBy?: WeeklySubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WeeklySubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklySubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklySubmission model
   */
  readonly fields: WeeklySubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklySubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklySubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    placement<T extends PlacementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlacementDefaultArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    daily_logs<T extends WeeklySubmission$daily_logsArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySubmission$daily_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvals<T extends WeeklySubmission$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySubmission$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeeklySubmission model
   */
  interface WeeklySubmissionFieldRefs {
    readonly id: FieldRef<"WeeklySubmission", 'String'>
    readonly placement_id: FieldRef<"WeeklySubmission", 'String'>
    readonly week_no: FieldRef<"WeeklySubmission", 'Int'>
    readonly status: FieldRef<"WeeklySubmission", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * WeeklySubmission findUnique
   */
  export type WeeklySubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmission to fetch.
     */
    where: WeeklySubmissionWhereUniqueInput
  }

  /**
   * WeeklySubmission findUniqueOrThrow
   */
  export type WeeklySubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmission to fetch.
     */
    where: WeeklySubmissionWhereUniqueInput
  }

  /**
   * WeeklySubmission findFirst
   */
  export type WeeklySubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmission to fetch.
     */
    where?: WeeklySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySubmissions to fetch.
     */
    orderBy?: WeeklySubmissionOrderByWithRelationInput | WeeklySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySubmissions.
     */
    cursor?: WeeklySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySubmissions.
     */
    distinct?: WeeklySubmissionScalarFieldEnum | WeeklySubmissionScalarFieldEnum[]
  }

  /**
   * WeeklySubmission findFirstOrThrow
   */
  export type WeeklySubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmission to fetch.
     */
    where?: WeeklySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySubmissions to fetch.
     */
    orderBy?: WeeklySubmissionOrderByWithRelationInput | WeeklySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklySubmissions.
     */
    cursor?: WeeklySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySubmissions.
     */
    distinct?: WeeklySubmissionScalarFieldEnum | WeeklySubmissionScalarFieldEnum[]
  }

  /**
   * WeeklySubmission findMany
   */
  export type WeeklySubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which WeeklySubmissions to fetch.
     */
    where?: WeeklySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklySubmissions to fetch.
     */
    orderBy?: WeeklySubmissionOrderByWithRelationInput | WeeklySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklySubmissions.
     */
    cursor?: WeeklySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklySubmissions.
     */
    distinct?: WeeklySubmissionScalarFieldEnum | WeeklySubmissionScalarFieldEnum[]
  }

  /**
   * WeeklySubmission create
   */
  export type WeeklySubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklySubmission.
     */
    data: XOR<WeeklySubmissionCreateInput, WeeklySubmissionUncheckedCreateInput>
  }

  /**
   * WeeklySubmission createMany
   */
  export type WeeklySubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklySubmissions.
     */
    data: WeeklySubmissionCreateManyInput | WeeklySubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklySubmission createManyAndReturn
   */
  export type WeeklySubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklySubmissions.
     */
    data: WeeklySubmissionCreateManyInput | WeeklySubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklySubmission update
   */
  export type WeeklySubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklySubmission.
     */
    data: XOR<WeeklySubmissionUpdateInput, WeeklySubmissionUncheckedUpdateInput>
    /**
     * Choose, which WeeklySubmission to update.
     */
    where: WeeklySubmissionWhereUniqueInput
  }

  /**
   * WeeklySubmission updateMany
   */
  export type WeeklySubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklySubmissions.
     */
    data: XOR<WeeklySubmissionUpdateManyMutationInput, WeeklySubmissionUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySubmissions to update
     */
    where?: WeeklySubmissionWhereInput
    /**
     * Limit how many WeeklySubmissions to update.
     */
    limit?: number
  }

  /**
   * WeeklySubmission updateManyAndReturn
   */
  export type WeeklySubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * The data used to update WeeklySubmissions.
     */
    data: XOR<WeeklySubmissionUpdateManyMutationInput, WeeklySubmissionUncheckedUpdateManyInput>
    /**
     * Filter which WeeklySubmissions to update
     */
    where?: WeeklySubmissionWhereInput
    /**
     * Limit how many WeeklySubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklySubmission upsert
   */
  export type WeeklySubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklySubmission to update in case it exists.
     */
    where: WeeklySubmissionWhereUniqueInput
    /**
     * In case the WeeklySubmission found by the `where` argument doesn't exist, create a new WeeklySubmission with this data.
     */
    create: XOR<WeeklySubmissionCreateInput, WeeklySubmissionUncheckedCreateInput>
    /**
     * In case the WeeklySubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklySubmissionUpdateInput, WeeklySubmissionUncheckedUpdateInput>
  }

  /**
   * WeeklySubmission delete
   */
  export type WeeklySubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
    /**
     * Filter which WeeklySubmission to delete.
     */
    where: WeeklySubmissionWhereUniqueInput
  }

  /**
   * WeeklySubmission deleteMany
   */
  export type WeeklySubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklySubmissions to delete
     */
    where?: WeeklySubmissionWhereInput
    /**
     * Limit how many WeeklySubmissions to delete.
     */
    limit?: number
  }

  /**
   * WeeklySubmission.daily_logs
   */
  export type WeeklySubmission$daily_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    cursor?: DailyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * WeeklySubmission.approvals
   */
  export type WeeklySubmission$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    where?: LogBookApprovalWhereInput
    orderBy?: LogBookApprovalOrderByWithRelationInput | LogBookApprovalOrderByWithRelationInput[]
    cursor?: LogBookApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogBookApprovalScalarFieldEnum | LogBookApprovalScalarFieldEnum[]
  }

  /**
   * WeeklySubmission without action
   */
  export type WeeklySubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySubmission
     */
    select?: WeeklySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySubmission
     */
    omit?: WeeklySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklySubmissionInclude<ExtArgs> | null
  }


  /**
   * Model LogBookApproval
   */

  export type AggregateLogBookApproval = {
    _count: LogBookApprovalCountAggregateOutputType | null
    _min: LogBookApprovalMinAggregateOutputType | null
    _max: LogBookApprovalMaxAggregateOutputType | null
  }

  export type LogBookApprovalMinAggregateOutputType = {
    id: string | null
    weekly_submission_id: string | null
    supervisor_id: string | null
    approval_timestamp: Date | null
    cryptographic_signature_hash: string | null
  }

  export type LogBookApprovalMaxAggregateOutputType = {
    id: string | null
    weekly_submission_id: string | null
    supervisor_id: string | null
    approval_timestamp: Date | null
    cryptographic_signature_hash: string | null
  }

  export type LogBookApprovalCountAggregateOutputType = {
    id: number
    weekly_submission_id: number
    supervisor_id: number
    approval_timestamp: number
    cryptographic_signature_hash: number
    _all: number
  }


  export type LogBookApprovalMinAggregateInputType = {
    id?: true
    weekly_submission_id?: true
    supervisor_id?: true
    approval_timestamp?: true
    cryptographic_signature_hash?: true
  }

  export type LogBookApprovalMaxAggregateInputType = {
    id?: true
    weekly_submission_id?: true
    supervisor_id?: true
    approval_timestamp?: true
    cryptographic_signature_hash?: true
  }

  export type LogBookApprovalCountAggregateInputType = {
    id?: true
    weekly_submission_id?: true
    supervisor_id?: true
    approval_timestamp?: true
    cryptographic_signature_hash?: true
    _all?: true
  }

  export type LogBookApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogBookApproval to aggregate.
     */
    where?: LogBookApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogBookApprovals to fetch.
     */
    orderBy?: LogBookApprovalOrderByWithRelationInput | LogBookApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogBookApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogBookApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogBookApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogBookApprovals
    **/
    _count?: true | LogBookApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogBookApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogBookApprovalMaxAggregateInputType
  }

  export type GetLogBookApprovalAggregateType<T extends LogBookApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateLogBookApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogBookApproval[P]>
      : GetScalarType<T[P], AggregateLogBookApproval[P]>
  }




  export type LogBookApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogBookApprovalWhereInput
    orderBy?: LogBookApprovalOrderByWithAggregationInput | LogBookApprovalOrderByWithAggregationInput[]
    by: LogBookApprovalScalarFieldEnum[] | LogBookApprovalScalarFieldEnum
    having?: LogBookApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogBookApprovalCountAggregateInputType | true
    _min?: LogBookApprovalMinAggregateInputType
    _max?: LogBookApprovalMaxAggregateInputType
  }

  export type LogBookApprovalGroupByOutputType = {
    id: string
    weekly_submission_id: string
    supervisor_id: string
    approval_timestamp: Date
    cryptographic_signature_hash: string
    _count: LogBookApprovalCountAggregateOutputType | null
    _min: LogBookApprovalMinAggregateOutputType | null
    _max: LogBookApprovalMaxAggregateOutputType | null
  }

  type GetLogBookApprovalGroupByPayload<T extends LogBookApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogBookApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogBookApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogBookApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], LogBookApprovalGroupByOutputType[P]>
        }
      >
    >


  export type LogBookApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekly_submission_id?: boolean
    supervisor_id?: boolean
    approval_timestamp?: boolean
    cryptographic_signature_hash?: boolean
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logBookApproval"]>

  export type LogBookApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekly_submission_id?: boolean
    supervisor_id?: boolean
    approval_timestamp?: boolean
    cryptographic_signature_hash?: boolean
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logBookApproval"]>

  export type LogBookApprovalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekly_submission_id?: boolean
    supervisor_id?: boolean
    approval_timestamp?: boolean
    cryptographic_signature_hash?: boolean
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logBookApproval"]>

  export type LogBookApprovalSelectScalar = {
    id?: boolean
    weekly_submission_id?: boolean
    supervisor_id?: boolean
    approval_timestamp?: boolean
    cryptographic_signature_hash?: boolean
  }

  export type LogBookApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weekly_submission_id" | "supervisor_id" | "approval_timestamp" | "cryptographic_signature_hash", ExtArgs["result"]["logBookApproval"]>
  export type LogBookApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogBookApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogBookApprovalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekly_submission?: boolean | WeeklySubmissionDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogBookApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogBookApproval"
    objects: {
      weekly_submission: Prisma.$WeeklySubmissionPayload<ExtArgs>
      supervisor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weekly_submission_id: string
      supervisor_id: string
      approval_timestamp: Date
      cryptographic_signature_hash: string
    }, ExtArgs["result"]["logBookApproval"]>
    composites: {}
  }

  type LogBookApprovalGetPayload<S extends boolean | null | undefined | LogBookApprovalDefaultArgs> = $Result.GetResult<Prisma.$LogBookApprovalPayload, S>

  type LogBookApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogBookApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogBookApprovalCountAggregateInputType | true
    }

  export interface LogBookApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogBookApproval'], meta: { name: 'LogBookApproval' } }
    /**
     * Find zero or one LogBookApproval that matches the filter.
     * @param {LogBookApprovalFindUniqueArgs} args - Arguments to find a LogBookApproval
     * @example
     * // Get one LogBookApproval
     * const logBookApproval = await prisma.logBookApproval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogBookApprovalFindUniqueArgs>(args: SelectSubset<T, LogBookApprovalFindUniqueArgs<ExtArgs>>): Prisma__LogBookApprovalClient<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogBookApproval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogBookApprovalFindUniqueOrThrowArgs} args - Arguments to find a LogBookApproval
     * @example
     * // Get one LogBookApproval
     * const logBookApproval = await prisma.logBookApproval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogBookApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, LogBookApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogBookApprovalClient<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogBookApproval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogBookApprovalFindFirstArgs} args - Arguments to find a LogBookApproval
     * @example
     * // Get one LogBookApproval
     * const logBookApproval = await prisma.logBookApproval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogBookApprovalFindFirstArgs>(args?: SelectSubset<T, LogBookApprovalFindFirstArgs<ExtArgs>>): Prisma__LogBookApprovalClient<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogBookApproval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogBookApprovalFindFirstOrThrowArgs} args - Arguments to find a LogBookApproval
     * @example
     * // Get one LogBookApproval
     * const logBookApproval = await prisma.logBookApproval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogBookApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, LogBookApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogBookApprovalClient<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogBookApprovals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogBookApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogBookApprovals
     * const logBookApprovals = await prisma.logBookApproval.findMany()
     * 
     * // Get first 10 LogBookApprovals
     * const logBookApprovals = await prisma.logBookApproval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logBookApprovalWithIdOnly = await prisma.logBookApproval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogBookApprovalFindManyArgs>(args?: SelectSubset<T, LogBookApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogBookApproval.
     * @param {LogBookApprovalCreateArgs} args - Arguments to create a LogBookApproval.
     * @example
     * // Create one LogBookApproval
     * const LogBookApproval = await prisma.logBookApproval.create({
     *   data: {
     *     // ... data to create a LogBookApproval
     *   }
     * })
     * 
     */
    create<T extends LogBookApprovalCreateArgs>(args: SelectSubset<T, LogBookApprovalCreateArgs<ExtArgs>>): Prisma__LogBookApprovalClient<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogBookApprovals.
     * @param {LogBookApprovalCreateManyArgs} args - Arguments to create many LogBookApprovals.
     * @example
     * // Create many LogBookApprovals
     * const logBookApproval = await prisma.logBookApproval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogBookApprovalCreateManyArgs>(args?: SelectSubset<T, LogBookApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogBookApprovals and returns the data saved in the database.
     * @param {LogBookApprovalCreateManyAndReturnArgs} args - Arguments to create many LogBookApprovals.
     * @example
     * // Create many LogBookApprovals
     * const logBookApproval = await prisma.logBookApproval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogBookApprovals and only return the `id`
     * const logBookApprovalWithIdOnly = await prisma.logBookApproval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogBookApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, LogBookApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogBookApproval.
     * @param {LogBookApprovalDeleteArgs} args - Arguments to delete one LogBookApproval.
     * @example
     * // Delete one LogBookApproval
     * const LogBookApproval = await prisma.logBookApproval.delete({
     *   where: {
     *     // ... filter to delete one LogBookApproval
     *   }
     * })
     * 
     */
    delete<T extends LogBookApprovalDeleteArgs>(args: SelectSubset<T, LogBookApprovalDeleteArgs<ExtArgs>>): Prisma__LogBookApprovalClient<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogBookApproval.
     * @param {LogBookApprovalUpdateArgs} args - Arguments to update one LogBookApproval.
     * @example
     * // Update one LogBookApproval
     * const logBookApproval = await prisma.logBookApproval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogBookApprovalUpdateArgs>(args: SelectSubset<T, LogBookApprovalUpdateArgs<ExtArgs>>): Prisma__LogBookApprovalClient<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogBookApprovals.
     * @param {LogBookApprovalDeleteManyArgs} args - Arguments to filter LogBookApprovals to delete.
     * @example
     * // Delete a few LogBookApprovals
     * const { count } = await prisma.logBookApproval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogBookApprovalDeleteManyArgs>(args?: SelectSubset<T, LogBookApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogBookApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogBookApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogBookApprovals
     * const logBookApproval = await prisma.logBookApproval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogBookApprovalUpdateManyArgs>(args: SelectSubset<T, LogBookApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogBookApprovals and returns the data updated in the database.
     * @param {LogBookApprovalUpdateManyAndReturnArgs} args - Arguments to update many LogBookApprovals.
     * @example
     * // Update many LogBookApprovals
     * const logBookApproval = await prisma.logBookApproval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogBookApprovals and only return the `id`
     * const logBookApprovalWithIdOnly = await prisma.logBookApproval.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogBookApprovalUpdateManyAndReturnArgs>(args: SelectSubset<T, LogBookApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogBookApproval.
     * @param {LogBookApprovalUpsertArgs} args - Arguments to update or create a LogBookApproval.
     * @example
     * // Update or create a LogBookApproval
     * const logBookApproval = await prisma.logBookApproval.upsert({
     *   create: {
     *     // ... data to create a LogBookApproval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogBookApproval we want to update
     *   }
     * })
     */
    upsert<T extends LogBookApprovalUpsertArgs>(args: SelectSubset<T, LogBookApprovalUpsertArgs<ExtArgs>>): Prisma__LogBookApprovalClient<$Result.GetResult<Prisma.$LogBookApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogBookApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogBookApprovalCountArgs} args - Arguments to filter LogBookApprovals to count.
     * @example
     * // Count the number of LogBookApprovals
     * const count = await prisma.logBookApproval.count({
     *   where: {
     *     // ... the filter for the LogBookApprovals we want to count
     *   }
     * })
    **/
    count<T extends LogBookApprovalCountArgs>(
      args?: Subset<T, LogBookApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogBookApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogBookApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogBookApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogBookApprovalAggregateArgs>(args: Subset<T, LogBookApprovalAggregateArgs>): Prisma.PrismaPromise<GetLogBookApprovalAggregateType<T>>

    /**
     * Group by LogBookApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogBookApprovalGroupByArgs} args - Group by arguments.
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
      T extends LogBookApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogBookApprovalGroupByArgs['orderBy'] }
        : { orderBy?: LogBookApprovalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LogBookApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogBookApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogBookApproval model
   */
  readonly fields: LogBookApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogBookApproval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogBookApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weekly_submission<T extends WeeklySubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeeklySubmissionDefaultArgs<ExtArgs>>): Prisma__WeeklySubmissionClient<$Result.GetResult<Prisma.$WeeklySubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogBookApproval model
   */
  interface LogBookApprovalFieldRefs {
    readonly id: FieldRef<"LogBookApproval", 'String'>
    readonly weekly_submission_id: FieldRef<"LogBookApproval", 'String'>
    readonly supervisor_id: FieldRef<"LogBookApproval", 'String'>
    readonly approval_timestamp: FieldRef<"LogBookApproval", 'DateTime'>
    readonly cryptographic_signature_hash: FieldRef<"LogBookApproval", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LogBookApproval findUnique
   */
  export type LogBookApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    /**
     * Filter, which LogBookApproval to fetch.
     */
    where: LogBookApprovalWhereUniqueInput
  }

  /**
   * LogBookApproval findUniqueOrThrow
   */
  export type LogBookApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    /**
     * Filter, which LogBookApproval to fetch.
     */
    where: LogBookApprovalWhereUniqueInput
  }

  /**
   * LogBookApproval findFirst
   */
  export type LogBookApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    /**
     * Filter, which LogBookApproval to fetch.
     */
    where?: LogBookApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogBookApprovals to fetch.
     */
    orderBy?: LogBookApprovalOrderByWithRelationInput | LogBookApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogBookApprovals.
     */
    cursor?: LogBookApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogBookApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogBookApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogBookApprovals.
     */
    distinct?: LogBookApprovalScalarFieldEnum | LogBookApprovalScalarFieldEnum[]
  }

  /**
   * LogBookApproval findFirstOrThrow
   */
  export type LogBookApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    /**
     * Filter, which LogBookApproval to fetch.
     */
    where?: LogBookApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogBookApprovals to fetch.
     */
    orderBy?: LogBookApprovalOrderByWithRelationInput | LogBookApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogBookApprovals.
     */
    cursor?: LogBookApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogBookApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogBookApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogBookApprovals.
     */
    distinct?: LogBookApprovalScalarFieldEnum | LogBookApprovalScalarFieldEnum[]
  }

  /**
   * LogBookApproval findMany
   */
  export type LogBookApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    /**
     * Filter, which LogBookApprovals to fetch.
     */
    where?: LogBookApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogBookApprovals to fetch.
     */
    orderBy?: LogBookApprovalOrderByWithRelationInput | LogBookApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogBookApprovals.
     */
    cursor?: LogBookApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogBookApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogBookApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogBookApprovals.
     */
    distinct?: LogBookApprovalScalarFieldEnum | LogBookApprovalScalarFieldEnum[]
  }

  /**
   * LogBookApproval create
   */
  export type LogBookApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a LogBookApproval.
     */
    data: XOR<LogBookApprovalCreateInput, LogBookApprovalUncheckedCreateInput>
  }

  /**
   * LogBookApproval createMany
   */
  export type LogBookApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogBookApprovals.
     */
    data: LogBookApprovalCreateManyInput | LogBookApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogBookApproval createManyAndReturn
   */
  export type LogBookApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * The data used to create many LogBookApprovals.
     */
    data: LogBookApprovalCreateManyInput | LogBookApprovalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogBookApproval update
   */
  export type LogBookApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a LogBookApproval.
     */
    data: XOR<LogBookApprovalUpdateInput, LogBookApprovalUncheckedUpdateInput>
    /**
     * Choose, which LogBookApproval to update.
     */
    where: LogBookApprovalWhereUniqueInput
  }

  /**
   * LogBookApproval updateMany
   */
  export type LogBookApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogBookApprovals.
     */
    data: XOR<LogBookApprovalUpdateManyMutationInput, LogBookApprovalUncheckedUpdateManyInput>
    /**
     * Filter which LogBookApprovals to update
     */
    where?: LogBookApprovalWhereInput
    /**
     * Limit how many LogBookApprovals to update.
     */
    limit?: number
  }

  /**
   * LogBookApproval updateManyAndReturn
   */
  export type LogBookApprovalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * The data used to update LogBookApprovals.
     */
    data: XOR<LogBookApprovalUpdateManyMutationInput, LogBookApprovalUncheckedUpdateManyInput>
    /**
     * Filter which LogBookApprovals to update
     */
    where?: LogBookApprovalWhereInput
    /**
     * Limit how many LogBookApprovals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogBookApproval upsert
   */
  export type LogBookApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the LogBookApproval to update in case it exists.
     */
    where: LogBookApprovalWhereUniqueInput
    /**
     * In case the LogBookApproval found by the `where` argument doesn't exist, create a new LogBookApproval with this data.
     */
    create: XOR<LogBookApprovalCreateInput, LogBookApprovalUncheckedCreateInput>
    /**
     * In case the LogBookApproval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogBookApprovalUpdateInput, LogBookApprovalUncheckedUpdateInput>
  }

  /**
   * LogBookApproval delete
   */
  export type LogBookApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
    /**
     * Filter which LogBookApproval to delete.
     */
    where: LogBookApprovalWhereUniqueInput
  }

  /**
   * LogBookApproval deleteMany
   */
  export type LogBookApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogBookApprovals to delete
     */
    where?: LogBookApprovalWhereInput
    /**
     * Limit how many LogBookApprovals to delete.
     */
    limit?: number
  }

  /**
   * LogBookApproval without action
   */
  export type LogBookApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogBookApproval
     */
    select?: LogBookApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogBookApproval
     */
    omit?: LogBookApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogBookApprovalInclude<ExtArgs> | null
  }


  /**
   * Model FinalClearance
   */

  export type AggregateFinalClearance = {
    _count: FinalClearanceCountAggregateOutputType | null
    _min: FinalClearanceMinAggregateOutputType | null
    _max: FinalClearanceMaxAggregateOutputType | null
  }

  export type FinalClearanceMinAggregateOutputType = {
    id: string | null
    placement_id: string | null
    coordinator_status: $Enums.ClearanceStatus | null
    coordinator_cleared_at: Date | null
    itf_official_id: string | null
    itf_status: $Enums.ClearanceStatus | null
    itf_cleared_at: Date | null
    final_pdf_hash: string | null
    itf_stamp_hash: string | null
    clearance_timestamp: Date | null
  }

  export type FinalClearanceMaxAggregateOutputType = {
    id: string | null
    placement_id: string | null
    coordinator_status: $Enums.ClearanceStatus | null
    coordinator_cleared_at: Date | null
    itf_official_id: string | null
    itf_status: $Enums.ClearanceStatus | null
    itf_cleared_at: Date | null
    final_pdf_hash: string | null
    itf_stamp_hash: string | null
    clearance_timestamp: Date | null
  }

  export type FinalClearanceCountAggregateOutputType = {
    id: number
    placement_id: number
    coordinator_status: number
    coordinator_cleared_at: number
    itf_official_id: number
    itf_status: number
    itf_cleared_at: number
    final_pdf_hash: number
    itf_stamp_hash: number
    clearance_timestamp: number
    _all: number
  }


  export type FinalClearanceMinAggregateInputType = {
    id?: true
    placement_id?: true
    coordinator_status?: true
    coordinator_cleared_at?: true
    itf_official_id?: true
    itf_status?: true
    itf_cleared_at?: true
    final_pdf_hash?: true
    itf_stamp_hash?: true
    clearance_timestamp?: true
  }

  export type FinalClearanceMaxAggregateInputType = {
    id?: true
    placement_id?: true
    coordinator_status?: true
    coordinator_cleared_at?: true
    itf_official_id?: true
    itf_status?: true
    itf_cleared_at?: true
    final_pdf_hash?: true
    itf_stamp_hash?: true
    clearance_timestamp?: true
  }

  export type FinalClearanceCountAggregateInputType = {
    id?: true
    placement_id?: true
    coordinator_status?: true
    coordinator_cleared_at?: true
    itf_official_id?: true
    itf_status?: true
    itf_cleared_at?: true
    final_pdf_hash?: true
    itf_stamp_hash?: true
    clearance_timestamp?: true
    _all?: true
  }

  export type FinalClearanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinalClearance to aggregate.
     */
    where?: FinalClearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalClearances to fetch.
     */
    orderBy?: FinalClearanceOrderByWithRelationInput | FinalClearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinalClearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalClearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalClearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinalClearances
    **/
    _count?: true | FinalClearanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinalClearanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinalClearanceMaxAggregateInputType
  }

  export type GetFinalClearanceAggregateType<T extends FinalClearanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFinalClearance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinalClearance[P]>
      : GetScalarType<T[P], AggregateFinalClearance[P]>
  }




  export type FinalClearanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinalClearanceWhereInput
    orderBy?: FinalClearanceOrderByWithAggregationInput | FinalClearanceOrderByWithAggregationInput[]
    by: FinalClearanceScalarFieldEnum[] | FinalClearanceScalarFieldEnum
    having?: FinalClearanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinalClearanceCountAggregateInputType | true
    _min?: FinalClearanceMinAggregateInputType
    _max?: FinalClearanceMaxAggregateInputType
  }

  export type FinalClearanceGroupByOutputType = {
    id: string
    placement_id: string
    coordinator_status: $Enums.ClearanceStatus
    coordinator_cleared_at: Date | null
    itf_official_id: string | null
    itf_status: $Enums.ClearanceStatus
    itf_cleared_at: Date | null
    final_pdf_hash: string | null
    itf_stamp_hash: string | null
    clearance_timestamp: Date | null
    _count: FinalClearanceCountAggregateOutputType | null
    _min: FinalClearanceMinAggregateOutputType | null
    _max: FinalClearanceMaxAggregateOutputType | null
  }

  type GetFinalClearanceGroupByPayload<T extends FinalClearanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinalClearanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinalClearanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinalClearanceGroupByOutputType[P]>
            : GetScalarType<T[P], FinalClearanceGroupByOutputType[P]>
        }
      >
    >


  export type FinalClearanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placement_id?: boolean
    coordinator_status?: boolean
    coordinator_cleared_at?: boolean
    itf_official_id?: boolean
    itf_status?: boolean
    itf_cleared_at?: boolean
    final_pdf_hash?: boolean
    itf_stamp_hash?: boolean
    clearance_timestamp?: boolean
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    itf_official?: boolean | FinalClearance$itf_officialArgs<ExtArgs>
  }, ExtArgs["result"]["finalClearance"]>

  export type FinalClearanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placement_id?: boolean
    coordinator_status?: boolean
    coordinator_cleared_at?: boolean
    itf_official_id?: boolean
    itf_status?: boolean
    itf_cleared_at?: boolean
    final_pdf_hash?: boolean
    itf_stamp_hash?: boolean
    clearance_timestamp?: boolean
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    itf_official?: boolean | FinalClearance$itf_officialArgs<ExtArgs>
  }, ExtArgs["result"]["finalClearance"]>

  export type FinalClearanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placement_id?: boolean
    coordinator_status?: boolean
    coordinator_cleared_at?: boolean
    itf_official_id?: boolean
    itf_status?: boolean
    itf_cleared_at?: boolean
    final_pdf_hash?: boolean
    itf_stamp_hash?: boolean
    clearance_timestamp?: boolean
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    itf_official?: boolean | FinalClearance$itf_officialArgs<ExtArgs>
  }, ExtArgs["result"]["finalClearance"]>

  export type FinalClearanceSelectScalar = {
    id?: boolean
    placement_id?: boolean
    coordinator_status?: boolean
    coordinator_cleared_at?: boolean
    itf_official_id?: boolean
    itf_status?: boolean
    itf_cleared_at?: boolean
    final_pdf_hash?: boolean
    itf_stamp_hash?: boolean
    clearance_timestamp?: boolean
  }

  export type FinalClearanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placement_id" | "coordinator_status" | "coordinator_cleared_at" | "itf_official_id" | "itf_status" | "itf_cleared_at" | "final_pdf_hash" | "itf_stamp_hash" | "clearance_timestamp", ExtArgs["result"]["finalClearance"]>
  export type FinalClearanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    itf_official?: boolean | FinalClearance$itf_officialArgs<ExtArgs>
  }
  export type FinalClearanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    itf_official?: boolean | FinalClearance$itf_officialArgs<ExtArgs>
  }
  export type FinalClearanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placement?: boolean | PlacementDefaultArgs<ExtArgs>
    itf_official?: boolean | FinalClearance$itf_officialArgs<ExtArgs>
  }

  export type $FinalClearancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinalClearance"
    objects: {
      placement: Prisma.$PlacementPayload<ExtArgs>
      itf_official: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placement_id: string
      coordinator_status: $Enums.ClearanceStatus
      coordinator_cleared_at: Date | null
      itf_official_id: string | null
      itf_status: $Enums.ClearanceStatus
      itf_cleared_at: Date | null
      final_pdf_hash: string | null
      itf_stamp_hash: string | null
      clearance_timestamp: Date | null
    }, ExtArgs["result"]["finalClearance"]>
    composites: {}
  }

  type FinalClearanceGetPayload<S extends boolean | null | undefined | FinalClearanceDefaultArgs> = $Result.GetResult<Prisma.$FinalClearancePayload, S>

  type FinalClearanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinalClearanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinalClearanceCountAggregateInputType | true
    }

  export interface FinalClearanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinalClearance'], meta: { name: 'FinalClearance' } }
    /**
     * Find zero or one FinalClearance that matches the filter.
     * @param {FinalClearanceFindUniqueArgs} args - Arguments to find a FinalClearance
     * @example
     * // Get one FinalClearance
     * const finalClearance = await prisma.finalClearance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinalClearanceFindUniqueArgs>(args: SelectSubset<T, FinalClearanceFindUniqueArgs<ExtArgs>>): Prisma__FinalClearanceClient<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinalClearance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinalClearanceFindUniqueOrThrowArgs} args - Arguments to find a FinalClearance
     * @example
     * // Get one FinalClearance
     * const finalClearance = await prisma.finalClearance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinalClearanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FinalClearanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinalClearanceClient<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinalClearance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalClearanceFindFirstArgs} args - Arguments to find a FinalClearance
     * @example
     * // Get one FinalClearance
     * const finalClearance = await prisma.finalClearance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinalClearanceFindFirstArgs>(args?: SelectSubset<T, FinalClearanceFindFirstArgs<ExtArgs>>): Prisma__FinalClearanceClient<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinalClearance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalClearanceFindFirstOrThrowArgs} args - Arguments to find a FinalClearance
     * @example
     * // Get one FinalClearance
     * const finalClearance = await prisma.finalClearance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinalClearanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FinalClearanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinalClearanceClient<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinalClearances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalClearanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinalClearances
     * const finalClearances = await prisma.finalClearance.findMany()
     * 
     * // Get first 10 FinalClearances
     * const finalClearances = await prisma.finalClearance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const finalClearanceWithIdOnly = await prisma.finalClearance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinalClearanceFindManyArgs>(args?: SelectSubset<T, FinalClearanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinalClearance.
     * @param {FinalClearanceCreateArgs} args - Arguments to create a FinalClearance.
     * @example
     * // Create one FinalClearance
     * const FinalClearance = await prisma.finalClearance.create({
     *   data: {
     *     // ... data to create a FinalClearance
     *   }
     * })
     * 
     */
    create<T extends FinalClearanceCreateArgs>(args: SelectSubset<T, FinalClearanceCreateArgs<ExtArgs>>): Prisma__FinalClearanceClient<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinalClearances.
     * @param {FinalClearanceCreateManyArgs} args - Arguments to create many FinalClearances.
     * @example
     * // Create many FinalClearances
     * const finalClearance = await prisma.finalClearance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinalClearanceCreateManyArgs>(args?: SelectSubset<T, FinalClearanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinalClearances and returns the data saved in the database.
     * @param {FinalClearanceCreateManyAndReturnArgs} args - Arguments to create many FinalClearances.
     * @example
     * // Create many FinalClearances
     * const finalClearance = await prisma.finalClearance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinalClearances and only return the `id`
     * const finalClearanceWithIdOnly = await prisma.finalClearance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinalClearanceCreateManyAndReturnArgs>(args?: SelectSubset<T, FinalClearanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinalClearance.
     * @param {FinalClearanceDeleteArgs} args - Arguments to delete one FinalClearance.
     * @example
     * // Delete one FinalClearance
     * const FinalClearance = await prisma.finalClearance.delete({
     *   where: {
     *     // ... filter to delete one FinalClearance
     *   }
     * })
     * 
     */
    delete<T extends FinalClearanceDeleteArgs>(args: SelectSubset<T, FinalClearanceDeleteArgs<ExtArgs>>): Prisma__FinalClearanceClient<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinalClearance.
     * @param {FinalClearanceUpdateArgs} args - Arguments to update one FinalClearance.
     * @example
     * // Update one FinalClearance
     * const finalClearance = await prisma.finalClearance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinalClearanceUpdateArgs>(args: SelectSubset<T, FinalClearanceUpdateArgs<ExtArgs>>): Prisma__FinalClearanceClient<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinalClearances.
     * @param {FinalClearanceDeleteManyArgs} args - Arguments to filter FinalClearances to delete.
     * @example
     * // Delete a few FinalClearances
     * const { count } = await prisma.finalClearance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinalClearanceDeleteManyArgs>(args?: SelectSubset<T, FinalClearanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinalClearances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalClearanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinalClearances
     * const finalClearance = await prisma.finalClearance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinalClearanceUpdateManyArgs>(args: SelectSubset<T, FinalClearanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinalClearances and returns the data updated in the database.
     * @param {FinalClearanceUpdateManyAndReturnArgs} args - Arguments to update many FinalClearances.
     * @example
     * // Update many FinalClearances
     * const finalClearance = await prisma.finalClearance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinalClearances and only return the `id`
     * const finalClearanceWithIdOnly = await prisma.finalClearance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinalClearanceUpdateManyAndReturnArgs>(args: SelectSubset<T, FinalClearanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinalClearance.
     * @param {FinalClearanceUpsertArgs} args - Arguments to update or create a FinalClearance.
     * @example
     * // Update or create a FinalClearance
     * const finalClearance = await prisma.finalClearance.upsert({
     *   create: {
     *     // ... data to create a FinalClearance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinalClearance we want to update
     *   }
     * })
     */
    upsert<T extends FinalClearanceUpsertArgs>(args: SelectSubset<T, FinalClearanceUpsertArgs<ExtArgs>>): Prisma__FinalClearanceClient<$Result.GetResult<Prisma.$FinalClearancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinalClearances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalClearanceCountArgs} args - Arguments to filter FinalClearances to count.
     * @example
     * // Count the number of FinalClearances
     * const count = await prisma.finalClearance.count({
     *   where: {
     *     // ... the filter for the FinalClearances we want to count
     *   }
     * })
    **/
    count<T extends FinalClearanceCountArgs>(
      args?: Subset<T, FinalClearanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinalClearanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinalClearance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalClearanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinalClearanceAggregateArgs>(args: Subset<T, FinalClearanceAggregateArgs>): Prisma.PrismaPromise<GetFinalClearanceAggregateType<T>>

    /**
     * Group by FinalClearance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalClearanceGroupByArgs} args - Group by arguments.
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
      T extends FinalClearanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinalClearanceGroupByArgs['orderBy'] }
        : { orderBy?: FinalClearanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FinalClearanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinalClearanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinalClearance model
   */
  readonly fields: FinalClearanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinalClearance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinalClearanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    placement<T extends PlacementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlacementDefaultArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itf_official<T extends FinalClearance$itf_officialArgs<ExtArgs> = {}>(args?: Subset<T, FinalClearance$itf_officialArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinalClearance model
   */
  interface FinalClearanceFieldRefs {
    readonly id: FieldRef<"FinalClearance", 'String'>
    readonly placement_id: FieldRef<"FinalClearance", 'String'>
    readonly coordinator_status: FieldRef<"FinalClearance", 'ClearanceStatus'>
    readonly coordinator_cleared_at: FieldRef<"FinalClearance", 'DateTime'>
    readonly itf_official_id: FieldRef<"FinalClearance", 'String'>
    readonly itf_status: FieldRef<"FinalClearance", 'ClearanceStatus'>
    readonly itf_cleared_at: FieldRef<"FinalClearance", 'DateTime'>
    readonly final_pdf_hash: FieldRef<"FinalClearance", 'String'>
    readonly itf_stamp_hash: FieldRef<"FinalClearance", 'String'>
    readonly clearance_timestamp: FieldRef<"FinalClearance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinalClearance findUnique
   */
  export type FinalClearanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    /**
     * Filter, which FinalClearance to fetch.
     */
    where: FinalClearanceWhereUniqueInput
  }

  /**
   * FinalClearance findUniqueOrThrow
   */
  export type FinalClearanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    /**
     * Filter, which FinalClearance to fetch.
     */
    where: FinalClearanceWhereUniqueInput
  }

  /**
   * FinalClearance findFirst
   */
  export type FinalClearanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    /**
     * Filter, which FinalClearance to fetch.
     */
    where?: FinalClearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalClearances to fetch.
     */
    orderBy?: FinalClearanceOrderByWithRelationInput | FinalClearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinalClearances.
     */
    cursor?: FinalClearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalClearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalClearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinalClearances.
     */
    distinct?: FinalClearanceScalarFieldEnum | FinalClearanceScalarFieldEnum[]
  }

  /**
   * FinalClearance findFirstOrThrow
   */
  export type FinalClearanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    /**
     * Filter, which FinalClearance to fetch.
     */
    where?: FinalClearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalClearances to fetch.
     */
    orderBy?: FinalClearanceOrderByWithRelationInput | FinalClearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinalClearances.
     */
    cursor?: FinalClearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalClearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalClearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinalClearances.
     */
    distinct?: FinalClearanceScalarFieldEnum | FinalClearanceScalarFieldEnum[]
  }

  /**
   * FinalClearance findMany
   */
  export type FinalClearanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    /**
     * Filter, which FinalClearances to fetch.
     */
    where?: FinalClearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalClearances to fetch.
     */
    orderBy?: FinalClearanceOrderByWithRelationInput | FinalClearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinalClearances.
     */
    cursor?: FinalClearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalClearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalClearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinalClearances.
     */
    distinct?: FinalClearanceScalarFieldEnum | FinalClearanceScalarFieldEnum[]
  }

  /**
   * FinalClearance create
   */
  export type FinalClearanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    /**
     * The data needed to create a FinalClearance.
     */
    data: XOR<FinalClearanceCreateInput, FinalClearanceUncheckedCreateInput>
  }

  /**
   * FinalClearance createMany
   */
  export type FinalClearanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinalClearances.
     */
    data: FinalClearanceCreateManyInput | FinalClearanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinalClearance createManyAndReturn
   */
  export type FinalClearanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * The data used to create many FinalClearances.
     */
    data: FinalClearanceCreateManyInput | FinalClearanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinalClearance update
   */
  export type FinalClearanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    /**
     * The data needed to update a FinalClearance.
     */
    data: XOR<FinalClearanceUpdateInput, FinalClearanceUncheckedUpdateInput>
    /**
     * Choose, which FinalClearance to update.
     */
    where: FinalClearanceWhereUniqueInput
  }

  /**
   * FinalClearance updateMany
   */
  export type FinalClearanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinalClearances.
     */
    data: XOR<FinalClearanceUpdateManyMutationInput, FinalClearanceUncheckedUpdateManyInput>
    /**
     * Filter which FinalClearances to update
     */
    where?: FinalClearanceWhereInput
    /**
     * Limit how many FinalClearances to update.
     */
    limit?: number
  }

  /**
   * FinalClearance updateManyAndReturn
   */
  export type FinalClearanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * The data used to update FinalClearances.
     */
    data: XOR<FinalClearanceUpdateManyMutationInput, FinalClearanceUncheckedUpdateManyInput>
    /**
     * Filter which FinalClearances to update
     */
    where?: FinalClearanceWhereInput
    /**
     * Limit how many FinalClearances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinalClearance upsert
   */
  export type FinalClearanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    /**
     * The filter to search for the FinalClearance to update in case it exists.
     */
    where: FinalClearanceWhereUniqueInput
    /**
     * In case the FinalClearance found by the `where` argument doesn't exist, create a new FinalClearance with this data.
     */
    create: XOR<FinalClearanceCreateInput, FinalClearanceUncheckedCreateInput>
    /**
     * In case the FinalClearance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinalClearanceUpdateInput, FinalClearanceUncheckedUpdateInput>
  }

  /**
   * FinalClearance delete
   */
  export type FinalClearanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
    /**
     * Filter which FinalClearance to delete.
     */
    where: FinalClearanceWhereUniqueInput
  }

  /**
   * FinalClearance deleteMany
   */
  export type FinalClearanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinalClearances to delete
     */
    where?: FinalClearanceWhereInput
    /**
     * Limit how many FinalClearances to delete.
     */
    limit?: number
  }

  /**
   * FinalClearance.itf_official
   */
  export type FinalClearance$itf_officialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * FinalClearance without action
   */
  export type FinalClearanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalClearance
     */
    select?: FinalClearanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalClearance
     */
    omit?: FinalClearanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalClearanceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    name: 'name',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    expires_at: 'expires_at',
    created_at: 'created_at',
    jon: 'jon'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const PlacementScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    company_name: 'company_name',
    ind_supervisor_id: 'ind_supervisor_id',
    inst_coordinator_id: 'inst_coordinator_id',
    company_address: 'company_address',
    company_contact: 'company_contact',
    company_email: 'company_email',
    start_date: 'start_date',
    end_date: 'end_date'
  };

  export type PlacementScalarFieldEnum = (typeof PlacementScalarFieldEnum)[keyof typeof PlacementScalarFieldEnum]


  export const DailyLogScalarFieldEnum: {
    id: 'id',
    placement_id: 'placement_id',
    weekly_submission_id: 'weekly_submission_id',
    week_no: 'week_no',
    log_date: 'log_date',
    description: 'description',
    image_url: 'image_url',
    created_timestamp: 'created_timestamp'
  };

  export type DailyLogScalarFieldEnum = (typeof DailyLogScalarFieldEnum)[keyof typeof DailyLogScalarFieldEnum]


  export const WeeklySubmissionScalarFieldEnum: {
    id: 'id',
    placement_id: 'placement_id',
    week_no: 'week_no',
    status: 'status'
  };

  export type WeeklySubmissionScalarFieldEnum = (typeof WeeklySubmissionScalarFieldEnum)[keyof typeof WeeklySubmissionScalarFieldEnum]


  export const LogBookApprovalScalarFieldEnum: {
    id: 'id',
    weekly_submission_id: 'weekly_submission_id',
    supervisor_id: 'supervisor_id',
    approval_timestamp: 'approval_timestamp',
    cryptographic_signature_hash: 'cryptographic_signature_hash'
  };

  export type LogBookApprovalScalarFieldEnum = (typeof LogBookApprovalScalarFieldEnum)[keyof typeof LogBookApprovalScalarFieldEnum]


  export const FinalClearanceScalarFieldEnum: {
    id: 'id',
    placement_id: 'placement_id',
    coordinator_status: 'coordinator_status',
    coordinator_cleared_at: 'coordinator_cleared_at',
    itf_official_id: 'itf_official_id',
    itf_status: 'itf_status',
    itf_cleared_at: 'itf_cleared_at',
    final_pdf_hash: 'final_pdf_hash',
    itf_stamp_hash: 'itf_stamp_hash',
    clearance_timestamp: 'clearance_timestamp'
  };

  export type FinalClearanceScalarFieldEnum = (typeof FinalClearanceScalarFieldEnum)[keyof typeof FinalClearanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'ClearanceStatus'
   */
  export type EnumClearanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClearanceStatus'>
    


  /**
   * Reference to a field of type 'ClearanceStatus[]'
   */
  export type ListEnumClearanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClearanceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    studentPlacements?: PlacementListRelationFilter
    indSupervisorPlacements?: PlacementListRelationFilter
    instCoordinatorPlacements?: PlacementListRelationFilter
    approvals?: LogBookApprovalListRelationFilter
    clearances?: FinalClearanceListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    password_reset_tokens?: PasswordResetTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    studentPlacements?: PlacementOrderByRelationAggregateInput
    indSupervisorPlacements?: PlacementOrderByRelationAggregateInput
    instCoordinatorPlacements?: PlacementOrderByRelationAggregateInput
    approvals?: LogBookApprovalOrderByRelationAggregateInput
    clearances?: FinalClearanceOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    password_reset_tokens?: PasswordResetTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    studentPlacements?: PlacementListRelationFilter
    indSupervisorPlacements?: PlacementListRelationFilter
    instCoordinatorPlacements?: PlacementListRelationFilter
    approvals?: LogBookApprovalListRelationFilter
    clearances?: FinalClearanceListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    password_reset_tokens?: PasswordResetTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: UuidFilter<"PasswordResetToken"> | string
    user_id?: UuidFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expires_at?: DateTimeFilter<"PasswordResetToken"> | Date | string
    created_at?: DateTimeFilter<"PasswordResetToken"> | Date | string
    jon?: StringFilter<"PasswordResetToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    jon?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    user_id?: UuidFilter<"PasswordResetToken"> | string
    expires_at?: DateTimeFilter<"PasswordResetToken"> | Date | string
    created_at?: DateTimeFilter<"PasswordResetToken"> | Date | string
    jon?: StringFilter<"PasswordResetToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    jon?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PasswordResetToken"> | string
    user_id?: UuidWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expires_at?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    jon?: StringWithAggregatesFilter<"PasswordResetToken"> | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    user_id?: UuidFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    user_id?: UuidFilter<"RefreshToken"> | string
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RefreshToken"> | string
    user_id?: UuidWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    expires_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type PlacementWhereInput = {
    AND?: PlacementWhereInput | PlacementWhereInput[]
    OR?: PlacementWhereInput[]
    NOT?: PlacementWhereInput | PlacementWhereInput[]
    id?: UuidFilter<"Placement"> | string
    student_id?: UuidFilter<"Placement"> | string
    company_name?: StringFilter<"Placement"> | string
    ind_supervisor_id?: UuidFilter<"Placement"> | string
    inst_coordinator_id?: UuidNullableFilter<"Placement"> | string | null
    company_address?: StringNullableFilter<"Placement"> | string | null
    company_contact?: StringNullableFilter<"Placement"> | string | null
    company_email?: StringNullableFilter<"Placement"> | string | null
    start_date?: DateTimeFilter<"Placement"> | Date | string
    end_date?: DateTimeFilter<"Placement"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    ind_supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
    inst_coordinator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    daily_logs?: DailyLogListRelationFilter
    weekly_submissions?: WeeklySubmissionListRelationFilter
    clearance?: XOR<FinalClearanceNullableScalarRelationFilter, FinalClearanceWhereInput> | null
  }

  export type PlacementOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    company_name?: SortOrder
    ind_supervisor_id?: SortOrder
    inst_coordinator_id?: SortOrderInput | SortOrder
    company_address?: SortOrderInput | SortOrder
    company_contact?: SortOrderInput | SortOrder
    company_email?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    student?: UserOrderByWithRelationInput
    ind_supervisor?: UserOrderByWithRelationInput
    inst_coordinator?: UserOrderByWithRelationInput
    daily_logs?: DailyLogOrderByRelationAggregateInput
    weekly_submissions?: WeeklySubmissionOrderByRelationAggregateInput
    clearance?: FinalClearanceOrderByWithRelationInput
  }

  export type PlacementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlacementWhereInput | PlacementWhereInput[]
    OR?: PlacementWhereInput[]
    NOT?: PlacementWhereInput | PlacementWhereInput[]
    student_id?: UuidFilter<"Placement"> | string
    company_name?: StringFilter<"Placement"> | string
    ind_supervisor_id?: UuidFilter<"Placement"> | string
    inst_coordinator_id?: UuidNullableFilter<"Placement"> | string | null
    company_address?: StringNullableFilter<"Placement"> | string | null
    company_contact?: StringNullableFilter<"Placement"> | string | null
    company_email?: StringNullableFilter<"Placement"> | string | null
    start_date?: DateTimeFilter<"Placement"> | Date | string
    end_date?: DateTimeFilter<"Placement"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    ind_supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
    inst_coordinator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    daily_logs?: DailyLogListRelationFilter
    weekly_submissions?: WeeklySubmissionListRelationFilter
    clearance?: XOR<FinalClearanceNullableScalarRelationFilter, FinalClearanceWhereInput> | null
  }, "id">

  export type PlacementOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    company_name?: SortOrder
    ind_supervisor_id?: SortOrder
    inst_coordinator_id?: SortOrderInput | SortOrder
    company_address?: SortOrderInput | SortOrder
    company_contact?: SortOrderInput | SortOrder
    company_email?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    _count?: PlacementCountOrderByAggregateInput
    _max?: PlacementMaxOrderByAggregateInput
    _min?: PlacementMinOrderByAggregateInput
  }

  export type PlacementScalarWhereWithAggregatesInput = {
    AND?: PlacementScalarWhereWithAggregatesInput | PlacementScalarWhereWithAggregatesInput[]
    OR?: PlacementScalarWhereWithAggregatesInput[]
    NOT?: PlacementScalarWhereWithAggregatesInput | PlacementScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Placement"> | string
    student_id?: UuidWithAggregatesFilter<"Placement"> | string
    company_name?: StringWithAggregatesFilter<"Placement"> | string
    ind_supervisor_id?: UuidWithAggregatesFilter<"Placement"> | string
    inst_coordinator_id?: UuidNullableWithAggregatesFilter<"Placement"> | string | null
    company_address?: StringNullableWithAggregatesFilter<"Placement"> | string | null
    company_contact?: StringNullableWithAggregatesFilter<"Placement"> | string | null
    company_email?: StringNullableWithAggregatesFilter<"Placement"> | string | null
    start_date?: DateTimeWithAggregatesFilter<"Placement"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Placement"> | Date | string
  }

  export type DailyLogWhereInput = {
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    id?: UuidFilter<"DailyLog"> | string
    placement_id?: UuidFilter<"DailyLog"> | string
    weekly_submission_id?: UuidFilter<"DailyLog"> | string
    week_no?: IntFilter<"DailyLog"> | number
    log_date?: DateTimeFilter<"DailyLog"> | Date | string
    description?: StringFilter<"DailyLog"> | string
    image_url?: StringNullableFilter<"DailyLog"> | string | null
    created_timestamp?: DateTimeFilter<"DailyLog"> | Date | string
    placement?: XOR<PlacementScalarRelationFilter, PlacementWhereInput>
    weekly_submission?: XOR<WeeklySubmissionScalarRelationFilter, WeeklySubmissionWhereInput>
  }

  export type DailyLogOrderByWithRelationInput = {
    id?: SortOrder
    placement_id?: SortOrder
    weekly_submission_id?: SortOrder
    week_no?: SortOrder
    log_date?: SortOrder
    description?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_timestamp?: SortOrder
    placement?: PlacementOrderByWithRelationInput
    weekly_submission?: WeeklySubmissionOrderByWithRelationInput
  }

  export type DailyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    placement_id_log_date?: DailyLogPlacement_idLog_dateCompoundUniqueInput
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    placement_id?: UuidFilter<"DailyLog"> | string
    weekly_submission_id?: UuidFilter<"DailyLog"> | string
    week_no?: IntFilter<"DailyLog"> | number
    log_date?: DateTimeFilter<"DailyLog"> | Date | string
    description?: StringFilter<"DailyLog"> | string
    image_url?: StringNullableFilter<"DailyLog"> | string | null
    created_timestamp?: DateTimeFilter<"DailyLog"> | Date | string
    placement?: XOR<PlacementScalarRelationFilter, PlacementWhereInput>
    weekly_submission?: XOR<WeeklySubmissionScalarRelationFilter, WeeklySubmissionWhereInput>
  }, "id" | "placement_id_log_date">

  export type DailyLogOrderByWithAggregationInput = {
    id?: SortOrder
    placement_id?: SortOrder
    weekly_submission_id?: SortOrder
    week_no?: SortOrder
    log_date?: SortOrder
    description?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_timestamp?: SortOrder
    _count?: DailyLogCountOrderByAggregateInput
    _avg?: DailyLogAvgOrderByAggregateInput
    _max?: DailyLogMaxOrderByAggregateInput
    _min?: DailyLogMinOrderByAggregateInput
    _sum?: DailyLogSumOrderByAggregateInput
  }

  export type DailyLogScalarWhereWithAggregatesInput = {
    AND?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    OR?: DailyLogScalarWhereWithAggregatesInput[]
    NOT?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DailyLog"> | string
    placement_id?: UuidWithAggregatesFilter<"DailyLog"> | string
    weekly_submission_id?: UuidWithAggregatesFilter<"DailyLog"> | string
    week_no?: IntWithAggregatesFilter<"DailyLog"> | number
    log_date?: DateTimeWithAggregatesFilter<"DailyLog"> | Date | string
    description?: StringWithAggregatesFilter<"DailyLog"> | string
    image_url?: StringNullableWithAggregatesFilter<"DailyLog"> | string | null
    created_timestamp?: DateTimeWithAggregatesFilter<"DailyLog"> | Date | string
  }

  export type WeeklySubmissionWhereInput = {
    AND?: WeeklySubmissionWhereInput | WeeklySubmissionWhereInput[]
    OR?: WeeklySubmissionWhereInput[]
    NOT?: WeeklySubmissionWhereInput | WeeklySubmissionWhereInput[]
    id?: UuidFilter<"WeeklySubmission"> | string
    placement_id?: UuidFilter<"WeeklySubmission"> | string
    week_no?: IntFilter<"WeeklySubmission"> | number
    status?: EnumStatusFilter<"WeeklySubmission"> | $Enums.Status
    placement?: XOR<PlacementScalarRelationFilter, PlacementWhereInput>
    daily_logs?: DailyLogListRelationFilter
    approvals?: LogBookApprovalListRelationFilter
  }

  export type WeeklySubmissionOrderByWithRelationInput = {
    id?: SortOrder
    placement_id?: SortOrder
    week_no?: SortOrder
    status?: SortOrder
    placement?: PlacementOrderByWithRelationInput
    daily_logs?: DailyLogOrderByRelationAggregateInput
    approvals?: LogBookApprovalOrderByRelationAggregateInput
  }

  export type WeeklySubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    placement_id_week_no?: WeeklySubmissionPlacement_idWeek_noCompoundUniqueInput
    AND?: WeeklySubmissionWhereInput | WeeklySubmissionWhereInput[]
    OR?: WeeklySubmissionWhereInput[]
    NOT?: WeeklySubmissionWhereInput | WeeklySubmissionWhereInput[]
    placement_id?: UuidFilter<"WeeklySubmission"> | string
    week_no?: IntFilter<"WeeklySubmission"> | number
    status?: EnumStatusFilter<"WeeklySubmission"> | $Enums.Status
    placement?: XOR<PlacementScalarRelationFilter, PlacementWhereInput>
    daily_logs?: DailyLogListRelationFilter
    approvals?: LogBookApprovalListRelationFilter
  }, "id" | "placement_id_week_no">

  export type WeeklySubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    placement_id?: SortOrder
    week_no?: SortOrder
    status?: SortOrder
    _count?: WeeklySubmissionCountOrderByAggregateInput
    _avg?: WeeklySubmissionAvgOrderByAggregateInput
    _max?: WeeklySubmissionMaxOrderByAggregateInput
    _min?: WeeklySubmissionMinOrderByAggregateInput
    _sum?: WeeklySubmissionSumOrderByAggregateInput
  }

  export type WeeklySubmissionScalarWhereWithAggregatesInput = {
    AND?: WeeklySubmissionScalarWhereWithAggregatesInput | WeeklySubmissionScalarWhereWithAggregatesInput[]
    OR?: WeeklySubmissionScalarWhereWithAggregatesInput[]
    NOT?: WeeklySubmissionScalarWhereWithAggregatesInput | WeeklySubmissionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WeeklySubmission"> | string
    placement_id?: UuidWithAggregatesFilter<"WeeklySubmission"> | string
    week_no?: IntWithAggregatesFilter<"WeeklySubmission"> | number
    status?: EnumStatusWithAggregatesFilter<"WeeklySubmission"> | $Enums.Status
  }

  export type LogBookApprovalWhereInput = {
    AND?: LogBookApprovalWhereInput | LogBookApprovalWhereInput[]
    OR?: LogBookApprovalWhereInput[]
    NOT?: LogBookApprovalWhereInput | LogBookApprovalWhereInput[]
    id?: UuidFilter<"LogBookApproval"> | string
    weekly_submission_id?: UuidFilter<"LogBookApproval"> | string
    supervisor_id?: UuidFilter<"LogBookApproval"> | string
    approval_timestamp?: DateTimeFilter<"LogBookApproval"> | Date | string
    cryptographic_signature_hash?: StringFilter<"LogBookApproval"> | string
    weekly_submission?: XOR<WeeklySubmissionScalarRelationFilter, WeeklySubmissionWhereInput>
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LogBookApprovalOrderByWithRelationInput = {
    id?: SortOrder
    weekly_submission_id?: SortOrder
    supervisor_id?: SortOrder
    approval_timestamp?: SortOrder
    cryptographic_signature_hash?: SortOrder
    weekly_submission?: WeeklySubmissionOrderByWithRelationInput
    supervisor?: UserOrderByWithRelationInput
  }

  export type LogBookApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogBookApprovalWhereInput | LogBookApprovalWhereInput[]
    OR?: LogBookApprovalWhereInput[]
    NOT?: LogBookApprovalWhereInput | LogBookApprovalWhereInput[]
    weekly_submission_id?: UuidFilter<"LogBookApproval"> | string
    supervisor_id?: UuidFilter<"LogBookApproval"> | string
    approval_timestamp?: DateTimeFilter<"LogBookApproval"> | Date | string
    cryptographic_signature_hash?: StringFilter<"LogBookApproval"> | string
    weekly_submission?: XOR<WeeklySubmissionScalarRelationFilter, WeeklySubmissionWhereInput>
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LogBookApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    weekly_submission_id?: SortOrder
    supervisor_id?: SortOrder
    approval_timestamp?: SortOrder
    cryptographic_signature_hash?: SortOrder
    _count?: LogBookApprovalCountOrderByAggregateInput
    _max?: LogBookApprovalMaxOrderByAggregateInput
    _min?: LogBookApprovalMinOrderByAggregateInput
  }

  export type LogBookApprovalScalarWhereWithAggregatesInput = {
    AND?: LogBookApprovalScalarWhereWithAggregatesInput | LogBookApprovalScalarWhereWithAggregatesInput[]
    OR?: LogBookApprovalScalarWhereWithAggregatesInput[]
    NOT?: LogBookApprovalScalarWhereWithAggregatesInput | LogBookApprovalScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LogBookApproval"> | string
    weekly_submission_id?: UuidWithAggregatesFilter<"LogBookApproval"> | string
    supervisor_id?: UuidWithAggregatesFilter<"LogBookApproval"> | string
    approval_timestamp?: DateTimeWithAggregatesFilter<"LogBookApproval"> | Date | string
    cryptographic_signature_hash?: StringWithAggregatesFilter<"LogBookApproval"> | string
  }

  export type FinalClearanceWhereInput = {
    AND?: FinalClearanceWhereInput | FinalClearanceWhereInput[]
    OR?: FinalClearanceWhereInput[]
    NOT?: FinalClearanceWhereInput | FinalClearanceWhereInput[]
    id?: UuidFilter<"FinalClearance"> | string
    placement_id?: UuidFilter<"FinalClearance"> | string
    coordinator_status?: EnumClearanceStatusFilter<"FinalClearance"> | $Enums.ClearanceStatus
    coordinator_cleared_at?: DateTimeNullableFilter<"FinalClearance"> | Date | string | null
    itf_official_id?: UuidNullableFilter<"FinalClearance"> | string | null
    itf_status?: EnumClearanceStatusFilter<"FinalClearance"> | $Enums.ClearanceStatus
    itf_cleared_at?: DateTimeNullableFilter<"FinalClearance"> | Date | string | null
    final_pdf_hash?: StringNullableFilter<"FinalClearance"> | string | null
    itf_stamp_hash?: StringNullableFilter<"FinalClearance"> | string | null
    clearance_timestamp?: DateTimeNullableFilter<"FinalClearance"> | Date | string | null
    placement?: XOR<PlacementScalarRelationFilter, PlacementWhereInput>
    itf_official?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type FinalClearanceOrderByWithRelationInput = {
    id?: SortOrder
    placement_id?: SortOrder
    coordinator_status?: SortOrder
    coordinator_cleared_at?: SortOrderInput | SortOrder
    itf_official_id?: SortOrderInput | SortOrder
    itf_status?: SortOrder
    itf_cleared_at?: SortOrderInput | SortOrder
    final_pdf_hash?: SortOrderInput | SortOrder
    itf_stamp_hash?: SortOrderInput | SortOrder
    clearance_timestamp?: SortOrderInput | SortOrder
    placement?: PlacementOrderByWithRelationInput
    itf_official?: UserOrderByWithRelationInput
  }

  export type FinalClearanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    placement_id?: string
    AND?: FinalClearanceWhereInput | FinalClearanceWhereInput[]
    OR?: FinalClearanceWhereInput[]
    NOT?: FinalClearanceWhereInput | FinalClearanceWhereInput[]
    coordinator_status?: EnumClearanceStatusFilter<"FinalClearance"> | $Enums.ClearanceStatus
    coordinator_cleared_at?: DateTimeNullableFilter<"FinalClearance"> | Date | string | null
    itf_official_id?: UuidNullableFilter<"FinalClearance"> | string | null
    itf_status?: EnumClearanceStatusFilter<"FinalClearance"> | $Enums.ClearanceStatus
    itf_cleared_at?: DateTimeNullableFilter<"FinalClearance"> | Date | string | null
    final_pdf_hash?: StringNullableFilter<"FinalClearance"> | string | null
    itf_stamp_hash?: StringNullableFilter<"FinalClearance"> | string | null
    clearance_timestamp?: DateTimeNullableFilter<"FinalClearance"> | Date | string | null
    placement?: XOR<PlacementScalarRelationFilter, PlacementWhereInput>
    itf_official?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "placement_id">

  export type FinalClearanceOrderByWithAggregationInput = {
    id?: SortOrder
    placement_id?: SortOrder
    coordinator_status?: SortOrder
    coordinator_cleared_at?: SortOrderInput | SortOrder
    itf_official_id?: SortOrderInput | SortOrder
    itf_status?: SortOrder
    itf_cleared_at?: SortOrderInput | SortOrder
    final_pdf_hash?: SortOrderInput | SortOrder
    itf_stamp_hash?: SortOrderInput | SortOrder
    clearance_timestamp?: SortOrderInput | SortOrder
    _count?: FinalClearanceCountOrderByAggregateInput
    _max?: FinalClearanceMaxOrderByAggregateInput
    _min?: FinalClearanceMinOrderByAggregateInput
  }

  export type FinalClearanceScalarWhereWithAggregatesInput = {
    AND?: FinalClearanceScalarWhereWithAggregatesInput | FinalClearanceScalarWhereWithAggregatesInput[]
    OR?: FinalClearanceScalarWhereWithAggregatesInput[]
    NOT?: FinalClearanceScalarWhereWithAggregatesInput | FinalClearanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FinalClearance"> | string
    placement_id?: UuidWithAggregatesFilter<"FinalClearance"> | string
    coordinator_status?: EnumClearanceStatusWithAggregatesFilter<"FinalClearance"> | $Enums.ClearanceStatus
    coordinator_cleared_at?: DateTimeNullableWithAggregatesFilter<"FinalClearance"> | Date | string | null
    itf_official_id?: UuidNullableWithAggregatesFilter<"FinalClearance"> | string | null
    itf_status?: EnumClearanceStatusWithAggregatesFilter<"FinalClearance"> | $Enums.ClearanceStatus
    itf_cleared_at?: DateTimeNullableWithAggregatesFilter<"FinalClearance"> | Date | string | null
    final_pdf_hash?: StringNullableWithAggregatesFilter<"FinalClearance"> | string | null
    itf_stamp_hash?: StringNullableWithAggregatesFilter<"FinalClearance"> | string | null
    clearance_timestamp?: DateTimeNullableWithAggregatesFilter<"FinalClearance"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementUncheckedCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementUncheckedCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementUncheckedCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceUncheckedCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUncheckedUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUncheckedUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUncheckedUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUncheckedUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    jon: string
    user: UserCreateNestedOneWithoutPassword_reset_tokensInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    user_id: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    jon: string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jon?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPassword_reset_tokensNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jon?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    user_id: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    jon: string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jon?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jon?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    user_id: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    user_id: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementCreateInput = {
    id?: string
    company_name: string
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    student: UserCreateNestedOneWithoutStudentPlacementsInput
    ind_supervisor: UserCreateNestedOneWithoutIndSupervisorPlacementsInput
    inst_coordinator?: UserCreateNestedOneWithoutInstCoordinatorPlacementsInput
    daily_logs?: DailyLogCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceCreateNestedOneWithoutPlacementInput
  }

  export type PlacementUncheckedCreateInput = {
    id?: string
    student_id: string
    company_name: string
    ind_supervisor_id: string
    inst_coordinator_id?: string | null
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    daily_logs?: DailyLogUncheckedCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionUncheckedCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceUncheckedCreateNestedOneWithoutPlacementInput
  }

  export type PlacementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentPlacementsNestedInput
    ind_supervisor?: UserUpdateOneRequiredWithoutIndSupervisorPlacementsNestedInput
    inst_coordinator?: UserUpdateOneWithoutInstCoordinatorPlacementsNestedInput
    daily_logs?: DailyLogUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    ind_supervisor_id?: StringFieldUpdateOperationsInput | string
    inst_coordinator_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_logs?: DailyLogUncheckedUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUncheckedUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUncheckedUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementCreateManyInput = {
    id?: string
    student_id: string
    company_name: string
    ind_supervisor_id: string
    inst_coordinator_id?: string | null
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
  }

  export type PlacementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    ind_supervisor_id?: StringFieldUpdateOperationsInput | string
    inst_coordinator_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogCreateInput = {
    id?: string
    week_no: number
    log_date: Date | string
    description: string
    image_url?: string | null
    created_timestamp?: Date | string
    placement: PlacementCreateNestedOneWithoutDaily_logsInput
    weekly_submission: WeeklySubmissionCreateNestedOneWithoutDaily_logsInput
  }

  export type DailyLogUncheckedCreateInput = {
    id?: string
    placement_id: string
    weekly_submission_id: string
    week_no: number
    log_date: Date | string
    description: string
    image_url?: string | null
    created_timestamp?: Date | string
  }

  export type DailyLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    placement?: PlacementUpdateOneRequiredWithoutDaily_logsNestedInput
    weekly_submission?: WeeklySubmissionUpdateOneRequiredWithoutDaily_logsNestedInput
  }

  export type DailyLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    weekly_submission_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogCreateManyInput = {
    id?: string
    placement_id: string
    weekly_submission_id: string
    week_no: number
    log_date: Date | string
    description: string
    image_url?: string | null
    created_timestamp?: Date | string
  }

  export type DailyLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    weekly_submission_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySubmissionCreateInput = {
    id?: string
    week_no: number
    status?: $Enums.Status
    placement: PlacementCreateNestedOneWithoutWeekly_submissionsInput
    daily_logs?: DailyLogCreateNestedManyWithoutWeekly_submissionInput
    approvals?: LogBookApprovalCreateNestedManyWithoutWeekly_submissionInput
  }

  export type WeeklySubmissionUncheckedCreateInput = {
    id?: string
    placement_id: string
    week_no: number
    status?: $Enums.Status
    daily_logs?: DailyLogUncheckedCreateNestedManyWithoutWeekly_submissionInput
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutWeekly_submissionInput
  }

  export type WeeklySubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    placement?: PlacementUpdateOneRequiredWithoutWeekly_submissionsNestedInput
    daily_logs?: DailyLogUpdateManyWithoutWeekly_submissionNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutWeekly_submissionNestedInput
  }

  export type WeeklySubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    daily_logs?: DailyLogUncheckedUpdateManyWithoutWeekly_submissionNestedInput
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutWeekly_submissionNestedInput
  }

  export type WeeklySubmissionCreateManyInput = {
    id?: string
    placement_id: string
    week_no: number
    status?: $Enums.Status
  }

  export type WeeklySubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type WeeklySubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type LogBookApprovalCreateInput = {
    id?: string
    approval_timestamp?: Date | string
    cryptographic_signature_hash: string
    weekly_submission: WeeklySubmissionCreateNestedOneWithoutApprovalsInput
    supervisor: UserCreateNestedOneWithoutApprovalsInput
  }

  export type LogBookApprovalUncheckedCreateInput = {
    id?: string
    weekly_submission_id: string
    supervisor_id: string
    approval_timestamp?: Date | string
    cryptographic_signature_hash: string
  }

  export type LogBookApprovalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
    weekly_submission?: WeeklySubmissionUpdateOneRequiredWithoutApprovalsNestedInput
    supervisor?: UserUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type LogBookApprovalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekly_submission_id?: StringFieldUpdateOperationsInput | string
    supervisor_id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
  }

  export type LogBookApprovalCreateManyInput = {
    id?: string
    weekly_submission_id: string
    supervisor_id: string
    approval_timestamp?: Date | string
    cryptographic_signature_hash: string
  }

  export type LogBookApprovalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
  }

  export type LogBookApprovalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekly_submission_id?: StringFieldUpdateOperationsInput | string
    supervisor_id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
  }

  export type FinalClearanceCreateInput = {
    id?: string
    coordinator_status?: $Enums.ClearanceStatus
    coordinator_cleared_at?: Date | string | null
    itf_status?: $Enums.ClearanceStatus
    itf_cleared_at?: Date | string | null
    final_pdf_hash?: string | null
    itf_stamp_hash?: string | null
    clearance_timestamp?: Date | string | null
    placement: PlacementCreateNestedOneWithoutClearanceInput
    itf_official?: UserCreateNestedOneWithoutClearancesInput
  }

  export type FinalClearanceUncheckedCreateInput = {
    id?: string
    placement_id: string
    coordinator_status?: $Enums.ClearanceStatus
    coordinator_cleared_at?: Date | string | null
    itf_official_id?: string | null
    itf_status?: $Enums.ClearanceStatus
    itf_cleared_at?: Date | string | null
    final_pdf_hash?: string | null
    itf_stamp_hash?: string | null
    clearance_timestamp?: Date | string | null
  }

  export type FinalClearanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coordinator_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    coordinator_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    itf_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_pdf_hash?: NullableStringFieldUpdateOperationsInput | string | null
    itf_stamp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clearance_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placement?: PlacementUpdateOneRequiredWithoutClearanceNestedInput
    itf_official?: UserUpdateOneWithoutClearancesNestedInput
  }

  export type FinalClearanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    coordinator_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    coordinator_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_official_id?: NullableStringFieldUpdateOperationsInput | string | null
    itf_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    itf_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_pdf_hash?: NullableStringFieldUpdateOperationsInput | string | null
    itf_stamp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clearance_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FinalClearanceCreateManyInput = {
    id?: string
    placement_id: string
    coordinator_status?: $Enums.ClearanceStatus
    coordinator_cleared_at?: Date | string | null
    itf_official_id?: string | null
    itf_status?: $Enums.ClearanceStatus
    itf_cleared_at?: Date | string | null
    final_pdf_hash?: string | null
    itf_stamp_hash?: string | null
    clearance_timestamp?: Date | string | null
  }

  export type FinalClearanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coordinator_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    coordinator_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    itf_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_pdf_hash?: NullableStringFieldUpdateOperationsInput | string | null
    itf_stamp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clearance_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FinalClearanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    coordinator_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    coordinator_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_official_id?: NullableStringFieldUpdateOperationsInput | string | null
    itf_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    itf_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_pdf_hash?: NullableStringFieldUpdateOperationsInput | string | null
    itf_stamp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clearance_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlacementListRelationFilter = {
    every?: PlacementWhereInput
    some?: PlacementWhereInput
    none?: PlacementWhereInput
  }

  export type LogBookApprovalListRelationFilter = {
    every?: LogBookApprovalWhereInput
    some?: LogBookApprovalWhereInput
    none?: LogBookApprovalWhereInput
  }

  export type FinalClearanceListRelationFilter = {
    every?: FinalClearanceWhereInput
    some?: FinalClearanceWhereInput
    none?: FinalClearanceWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type PlacementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogBookApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinalClearanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    jon?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    jon?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    jon?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DailyLogListRelationFilter = {
    every?: DailyLogWhereInput
    some?: DailyLogWhereInput
    none?: DailyLogWhereInput
  }

  export type WeeklySubmissionListRelationFilter = {
    every?: WeeklySubmissionWhereInput
    some?: WeeklySubmissionWhereInput
    none?: WeeklySubmissionWhereInput
  }

  export type FinalClearanceNullableScalarRelationFilter = {
    is?: FinalClearanceWhereInput | null
    isNot?: FinalClearanceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DailyLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklySubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlacementCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    company_name?: SortOrder
    ind_supervisor_id?: SortOrder
    inst_coordinator_id?: SortOrder
    company_address?: SortOrder
    company_contact?: SortOrder
    company_email?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type PlacementMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    company_name?: SortOrder
    ind_supervisor_id?: SortOrder
    inst_coordinator_id?: SortOrder
    company_address?: SortOrder
    company_contact?: SortOrder
    company_email?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type PlacementMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    company_name?: SortOrder
    ind_supervisor_id?: SortOrder
    inst_coordinator_id?: SortOrder
    company_address?: SortOrder
    company_contact?: SortOrder
    company_email?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PlacementScalarRelationFilter = {
    is?: PlacementWhereInput
    isNot?: PlacementWhereInput
  }

  export type WeeklySubmissionScalarRelationFilter = {
    is?: WeeklySubmissionWhereInput
    isNot?: WeeklySubmissionWhereInput
  }

  export type DailyLogPlacement_idLog_dateCompoundUniqueInput = {
    placement_id: string
    log_date: Date | string
  }

  export type DailyLogCountOrderByAggregateInput = {
    id?: SortOrder
    placement_id?: SortOrder
    weekly_submission_id?: SortOrder
    week_no?: SortOrder
    log_date?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_timestamp?: SortOrder
  }

  export type DailyLogAvgOrderByAggregateInput = {
    week_no?: SortOrder
  }

  export type DailyLogMaxOrderByAggregateInput = {
    id?: SortOrder
    placement_id?: SortOrder
    weekly_submission_id?: SortOrder
    week_no?: SortOrder
    log_date?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_timestamp?: SortOrder
  }

  export type DailyLogMinOrderByAggregateInput = {
    id?: SortOrder
    placement_id?: SortOrder
    weekly_submission_id?: SortOrder
    week_no?: SortOrder
    log_date?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_timestamp?: SortOrder
  }

  export type DailyLogSumOrderByAggregateInput = {
    week_no?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type WeeklySubmissionPlacement_idWeek_noCompoundUniqueInput = {
    placement_id: string
    week_no: number
  }

  export type WeeklySubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    placement_id?: SortOrder
    week_no?: SortOrder
    status?: SortOrder
  }

  export type WeeklySubmissionAvgOrderByAggregateInput = {
    week_no?: SortOrder
  }

  export type WeeklySubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    placement_id?: SortOrder
    week_no?: SortOrder
    status?: SortOrder
  }

  export type WeeklySubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    placement_id?: SortOrder
    week_no?: SortOrder
    status?: SortOrder
  }

  export type WeeklySubmissionSumOrderByAggregateInput = {
    week_no?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type LogBookApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    weekly_submission_id?: SortOrder
    supervisor_id?: SortOrder
    approval_timestamp?: SortOrder
    cryptographic_signature_hash?: SortOrder
  }

  export type LogBookApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    weekly_submission_id?: SortOrder
    supervisor_id?: SortOrder
    approval_timestamp?: SortOrder
    cryptographic_signature_hash?: SortOrder
  }

  export type LogBookApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    weekly_submission_id?: SortOrder
    supervisor_id?: SortOrder
    approval_timestamp?: SortOrder
    cryptographic_signature_hash?: SortOrder
  }

  export type EnumClearanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClearanceStatus | EnumClearanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClearanceStatus[] | ListEnumClearanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClearanceStatus[] | ListEnumClearanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClearanceStatusFilter<$PrismaModel> | $Enums.ClearanceStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FinalClearanceCountOrderByAggregateInput = {
    id?: SortOrder
    placement_id?: SortOrder
    coordinator_status?: SortOrder
    coordinator_cleared_at?: SortOrder
    itf_official_id?: SortOrder
    itf_status?: SortOrder
    itf_cleared_at?: SortOrder
    final_pdf_hash?: SortOrder
    itf_stamp_hash?: SortOrder
    clearance_timestamp?: SortOrder
  }

  export type FinalClearanceMaxOrderByAggregateInput = {
    id?: SortOrder
    placement_id?: SortOrder
    coordinator_status?: SortOrder
    coordinator_cleared_at?: SortOrder
    itf_official_id?: SortOrder
    itf_status?: SortOrder
    itf_cleared_at?: SortOrder
    final_pdf_hash?: SortOrder
    itf_stamp_hash?: SortOrder
    clearance_timestamp?: SortOrder
  }

  export type FinalClearanceMinOrderByAggregateInput = {
    id?: SortOrder
    placement_id?: SortOrder
    coordinator_status?: SortOrder
    coordinator_cleared_at?: SortOrder
    itf_official_id?: SortOrder
    itf_status?: SortOrder
    itf_cleared_at?: SortOrder
    final_pdf_hash?: SortOrder
    itf_stamp_hash?: SortOrder
    clearance_timestamp?: SortOrder
  }

  export type EnumClearanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClearanceStatus | EnumClearanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClearanceStatus[] | ListEnumClearanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClearanceStatus[] | ListEnumClearanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClearanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClearanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClearanceStatusFilter<$PrismaModel>
    _max?: NestedEnumClearanceStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PlacementCreateNestedManyWithoutStudentInput = {
    create?: XOR<PlacementCreateWithoutStudentInput, PlacementUncheckedCreateWithoutStudentInput> | PlacementCreateWithoutStudentInput[] | PlacementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutStudentInput | PlacementCreateOrConnectWithoutStudentInput[]
    createMany?: PlacementCreateManyStudentInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type PlacementCreateNestedManyWithoutInd_supervisorInput = {
    create?: XOR<PlacementCreateWithoutInd_supervisorInput, PlacementUncheckedCreateWithoutInd_supervisorInput> | PlacementCreateWithoutInd_supervisorInput[] | PlacementUncheckedCreateWithoutInd_supervisorInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutInd_supervisorInput | PlacementCreateOrConnectWithoutInd_supervisorInput[]
    createMany?: PlacementCreateManyInd_supervisorInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type PlacementCreateNestedManyWithoutInst_coordinatorInput = {
    create?: XOR<PlacementCreateWithoutInst_coordinatorInput, PlacementUncheckedCreateWithoutInst_coordinatorInput> | PlacementCreateWithoutInst_coordinatorInput[] | PlacementUncheckedCreateWithoutInst_coordinatorInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutInst_coordinatorInput | PlacementCreateOrConnectWithoutInst_coordinatorInput[]
    createMany?: PlacementCreateManyInst_coordinatorInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type LogBookApprovalCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<LogBookApprovalCreateWithoutSupervisorInput, LogBookApprovalUncheckedCreateWithoutSupervisorInput> | LogBookApprovalCreateWithoutSupervisorInput[] | LogBookApprovalUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: LogBookApprovalCreateOrConnectWithoutSupervisorInput | LogBookApprovalCreateOrConnectWithoutSupervisorInput[]
    createMany?: LogBookApprovalCreateManySupervisorInputEnvelope
    connect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
  }

  export type FinalClearanceCreateNestedManyWithoutItf_officialInput = {
    create?: XOR<FinalClearanceCreateWithoutItf_officialInput, FinalClearanceUncheckedCreateWithoutItf_officialInput> | FinalClearanceCreateWithoutItf_officialInput[] | FinalClearanceUncheckedCreateWithoutItf_officialInput[]
    connectOrCreate?: FinalClearanceCreateOrConnectWithoutItf_officialInput | FinalClearanceCreateOrConnectWithoutItf_officialInput[]
    createMany?: FinalClearanceCreateManyItf_officialInputEnvelope
    connect?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type PlacementUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PlacementCreateWithoutStudentInput, PlacementUncheckedCreateWithoutStudentInput> | PlacementCreateWithoutStudentInput[] | PlacementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutStudentInput | PlacementCreateOrConnectWithoutStudentInput[]
    createMany?: PlacementCreateManyStudentInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type PlacementUncheckedCreateNestedManyWithoutInd_supervisorInput = {
    create?: XOR<PlacementCreateWithoutInd_supervisorInput, PlacementUncheckedCreateWithoutInd_supervisorInput> | PlacementCreateWithoutInd_supervisorInput[] | PlacementUncheckedCreateWithoutInd_supervisorInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutInd_supervisorInput | PlacementCreateOrConnectWithoutInd_supervisorInput[]
    createMany?: PlacementCreateManyInd_supervisorInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type PlacementUncheckedCreateNestedManyWithoutInst_coordinatorInput = {
    create?: XOR<PlacementCreateWithoutInst_coordinatorInput, PlacementUncheckedCreateWithoutInst_coordinatorInput> | PlacementCreateWithoutInst_coordinatorInput[] | PlacementUncheckedCreateWithoutInst_coordinatorInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutInst_coordinatorInput | PlacementCreateOrConnectWithoutInst_coordinatorInput[]
    createMany?: PlacementCreateManyInst_coordinatorInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type LogBookApprovalUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<LogBookApprovalCreateWithoutSupervisorInput, LogBookApprovalUncheckedCreateWithoutSupervisorInput> | LogBookApprovalCreateWithoutSupervisorInput[] | LogBookApprovalUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: LogBookApprovalCreateOrConnectWithoutSupervisorInput | LogBookApprovalCreateOrConnectWithoutSupervisorInput[]
    createMany?: LogBookApprovalCreateManySupervisorInputEnvelope
    connect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
  }

  export type FinalClearanceUncheckedCreateNestedManyWithoutItf_officialInput = {
    create?: XOR<FinalClearanceCreateWithoutItf_officialInput, FinalClearanceUncheckedCreateWithoutItf_officialInput> | FinalClearanceCreateWithoutItf_officialInput[] | FinalClearanceUncheckedCreateWithoutItf_officialInput[]
    connectOrCreate?: FinalClearanceCreateOrConnectWithoutItf_officialInput | FinalClearanceCreateOrConnectWithoutItf_officialInput[]
    createMany?: FinalClearanceCreateManyItf_officialInputEnvelope
    connect?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlacementUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PlacementCreateWithoutStudentInput, PlacementUncheckedCreateWithoutStudentInput> | PlacementCreateWithoutStudentInput[] | PlacementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutStudentInput | PlacementCreateOrConnectWithoutStudentInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutStudentInput | PlacementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PlacementCreateManyStudentInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutStudentInput | PlacementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutStudentInput | PlacementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type PlacementUpdateManyWithoutInd_supervisorNestedInput = {
    create?: XOR<PlacementCreateWithoutInd_supervisorInput, PlacementUncheckedCreateWithoutInd_supervisorInput> | PlacementCreateWithoutInd_supervisorInput[] | PlacementUncheckedCreateWithoutInd_supervisorInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutInd_supervisorInput | PlacementCreateOrConnectWithoutInd_supervisorInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutInd_supervisorInput | PlacementUpsertWithWhereUniqueWithoutInd_supervisorInput[]
    createMany?: PlacementCreateManyInd_supervisorInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutInd_supervisorInput | PlacementUpdateWithWhereUniqueWithoutInd_supervisorInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutInd_supervisorInput | PlacementUpdateManyWithWhereWithoutInd_supervisorInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type PlacementUpdateManyWithoutInst_coordinatorNestedInput = {
    create?: XOR<PlacementCreateWithoutInst_coordinatorInput, PlacementUncheckedCreateWithoutInst_coordinatorInput> | PlacementCreateWithoutInst_coordinatorInput[] | PlacementUncheckedCreateWithoutInst_coordinatorInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutInst_coordinatorInput | PlacementCreateOrConnectWithoutInst_coordinatorInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutInst_coordinatorInput | PlacementUpsertWithWhereUniqueWithoutInst_coordinatorInput[]
    createMany?: PlacementCreateManyInst_coordinatorInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutInst_coordinatorInput | PlacementUpdateWithWhereUniqueWithoutInst_coordinatorInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutInst_coordinatorInput | PlacementUpdateManyWithWhereWithoutInst_coordinatorInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type LogBookApprovalUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<LogBookApprovalCreateWithoutSupervisorInput, LogBookApprovalUncheckedCreateWithoutSupervisorInput> | LogBookApprovalCreateWithoutSupervisorInput[] | LogBookApprovalUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: LogBookApprovalCreateOrConnectWithoutSupervisorInput | LogBookApprovalCreateOrConnectWithoutSupervisorInput[]
    upsert?: LogBookApprovalUpsertWithWhereUniqueWithoutSupervisorInput | LogBookApprovalUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: LogBookApprovalCreateManySupervisorInputEnvelope
    set?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    disconnect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    delete?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    connect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    update?: LogBookApprovalUpdateWithWhereUniqueWithoutSupervisorInput | LogBookApprovalUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: LogBookApprovalUpdateManyWithWhereWithoutSupervisorInput | LogBookApprovalUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: LogBookApprovalScalarWhereInput | LogBookApprovalScalarWhereInput[]
  }

  export type FinalClearanceUpdateManyWithoutItf_officialNestedInput = {
    create?: XOR<FinalClearanceCreateWithoutItf_officialInput, FinalClearanceUncheckedCreateWithoutItf_officialInput> | FinalClearanceCreateWithoutItf_officialInput[] | FinalClearanceUncheckedCreateWithoutItf_officialInput[]
    connectOrCreate?: FinalClearanceCreateOrConnectWithoutItf_officialInput | FinalClearanceCreateOrConnectWithoutItf_officialInput[]
    upsert?: FinalClearanceUpsertWithWhereUniqueWithoutItf_officialInput | FinalClearanceUpsertWithWhereUniqueWithoutItf_officialInput[]
    createMany?: FinalClearanceCreateManyItf_officialInputEnvelope
    set?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
    disconnect?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
    delete?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
    connect?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
    update?: FinalClearanceUpdateWithWhereUniqueWithoutItf_officialInput | FinalClearanceUpdateWithWhereUniqueWithoutItf_officialInput[]
    updateMany?: FinalClearanceUpdateManyWithWhereWithoutItf_officialInput | FinalClearanceUpdateManyWithWhereWithoutItf_officialInput[]
    deleteMany?: FinalClearanceScalarWhereInput | FinalClearanceScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type PlacementUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PlacementCreateWithoutStudentInput, PlacementUncheckedCreateWithoutStudentInput> | PlacementCreateWithoutStudentInput[] | PlacementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutStudentInput | PlacementCreateOrConnectWithoutStudentInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutStudentInput | PlacementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PlacementCreateManyStudentInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutStudentInput | PlacementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutStudentInput | PlacementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type PlacementUncheckedUpdateManyWithoutInd_supervisorNestedInput = {
    create?: XOR<PlacementCreateWithoutInd_supervisorInput, PlacementUncheckedCreateWithoutInd_supervisorInput> | PlacementCreateWithoutInd_supervisorInput[] | PlacementUncheckedCreateWithoutInd_supervisorInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutInd_supervisorInput | PlacementCreateOrConnectWithoutInd_supervisorInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutInd_supervisorInput | PlacementUpsertWithWhereUniqueWithoutInd_supervisorInput[]
    createMany?: PlacementCreateManyInd_supervisorInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutInd_supervisorInput | PlacementUpdateWithWhereUniqueWithoutInd_supervisorInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutInd_supervisorInput | PlacementUpdateManyWithWhereWithoutInd_supervisorInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type PlacementUncheckedUpdateManyWithoutInst_coordinatorNestedInput = {
    create?: XOR<PlacementCreateWithoutInst_coordinatorInput, PlacementUncheckedCreateWithoutInst_coordinatorInput> | PlacementCreateWithoutInst_coordinatorInput[] | PlacementUncheckedCreateWithoutInst_coordinatorInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutInst_coordinatorInput | PlacementCreateOrConnectWithoutInst_coordinatorInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutInst_coordinatorInput | PlacementUpsertWithWhereUniqueWithoutInst_coordinatorInput[]
    createMany?: PlacementCreateManyInst_coordinatorInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutInst_coordinatorInput | PlacementUpdateWithWhereUniqueWithoutInst_coordinatorInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutInst_coordinatorInput | PlacementUpdateManyWithWhereWithoutInst_coordinatorInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type LogBookApprovalUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<LogBookApprovalCreateWithoutSupervisorInput, LogBookApprovalUncheckedCreateWithoutSupervisorInput> | LogBookApprovalCreateWithoutSupervisorInput[] | LogBookApprovalUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: LogBookApprovalCreateOrConnectWithoutSupervisorInput | LogBookApprovalCreateOrConnectWithoutSupervisorInput[]
    upsert?: LogBookApprovalUpsertWithWhereUniqueWithoutSupervisorInput | LogBookApprovalUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: LogBookApprovalCreateManySupervisorInputEnvelope
    set?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    disconnect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    delete?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    connect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    update?: LogBookApprovalUpdateWithWhereUniqueWithoutSupervisorInput | LogBookApprovalUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: LogBookApprovalUpdateManyWithWhereWithoutSupervisorInput | LogBookApprovalUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: LogBookApprovalScalarWhereInput | LogBookApprovalScalarWhereInput[]
  }

  export type FinalClearanceUncheckedUpdateManyWithoutItf_officialNestedInput = {
    create?: XOR<FinalClearanceCreateWithoutItf_officialInput, FinalClearanceUncheckedCreateWithoutItf_officialInput> | FinalClearanceCreateWithoutItf_officialInput[] | FinalClearanceUncheckedCreateWithoutItf_officialInput[]
    connectOrCreate?: FinalClearanceCreateOrConnectWithoutItf_officialInput | FinalClearanceCreateOrConnectWithoutItf_officialInput[]
    upsert?: FinalClearanceUpsertWithWhereUniqueWithoutItf_officialInput | FinalClearanceUpsertWithWhereUniqueWithoutItf_officialInput[]
    createMany?: FinalClearanceCreateManyItf_officialInputEnvelope
    set?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
    disconnect?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
    delete?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
    connect?: FinalClearanceWhereUniqueInput | FinalClearanceWhereUniqueInput[]
    update?: FinalClearanceUpdateWithWhereUniqueWithoutItf_officialInput | FinalClearanceUpdateWithWhereUniqueWithoutItf_officialInput[]
    updateMany?: FinalClearanceUpdateManyWithWhereWithoutItf_officialInput | FinalClearanceUpdateManyWithWhereWithoutItf_officialInput[]
    deleteMany?: FinalClearanceScalarWhereInput | FinalClearanceScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPassword_reset_tokensInput = {
    create?: XOR<UserCreateWithoutPassword_reset_tokensInput, UserUncheckedCreateWithoutPassword_reset_tokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPassword_reset_tokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPassword_reset_tokensNestedInput = {
    create?: XOR<UserCreateWithoutPassword_reset_tokensInput, UserUncheckedCreateWithoutPassword_reset_tokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPassword_reset_tokensInput
    upsert?: UserUpsertWithoutPassword_reset_tokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPassword_reset_tokensInput, UserUpdateWithoutPassword_reset_tokensInput>, UserUncheckedUpdateWithoutPassword_reset_tokensInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutStudentPlacementsInput = {
    create?: XOR<UserCreateWithoutStudentPlacementsInput, UserUncheckedCreateWithoutStudentPlacementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentPlacementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIndSupervisorPlacementsInput = {
    create?: XOR<UserCreateWithoutIndSupervisorPlacementsInput, UserUncheckedCreateWithoutIndSupervisorPlacementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIndSupervisorPlacementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInstCoordinatorPlacementsInput = {
    create?: XOR<UserCreateWithoutInstCoordinatorPlacementsInput, UserUncheckedCreateWithoutInstCoordinatorPlacementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstCoordinatorPlacementsInput
    connect?: UserWhereUniqueInput
  }

  export type DailyLogCreateNestedManyWithoutPlacementInput = {
    create?: XOR<DailyLogCreateWithoutPlacementInput, DailyLogUncheckedCreateWithoutPlacementInput> | DailyLogCreateWithoutPlacementInput[] | DailyLogUncheckedCreateWithoutPlacementInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutPlacementInput | DailyLogCreateOrConnectWithoutPlacementInput[]
    createMany?: DailyLogCreateManyPlacementInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type WeeklySubmissionCreateNestedManyWithoutPlacementInput = {
    create?: XOR<WeeklySubmissionCreateWithoutPlacementInput, WeeklySubmissionUncheckedCreateWithoutPlacementInput> | WeeklySubmissionCreateWithoutPlacementInput[] | WeeklySubmissionUncheckedCreateWithoutPlacementInput[]
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutPlacementInput | WeeklySubmissionCreateOrConnectWithoutPlacementInput[]
    createMany?: WeeklySubmissionCreateManyPlacementInputEnvelope
    connect?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
  }

  export type FinalClearanceCreateNestedOneWithoutPlacementInput = {
    create?: XOR<FinalClearanceCreateWithoutPlacementInput, FinalClearanceUncheckedCreateWithoutPlacementInput>
    connectOrCreate?: FinalClearanceCreateOrConnectWithoutPlacementInput
    connect?: FinalClearanceWhereUniqueInput
  }

  export type DailyLogUncheckedCreateNestedManyWithoutPlacementInput = {
    create?: XOR<DailyLogCreateWithoutPlacementInput, DailyLogUncheckedCreateWithoutPlacementInput> | DailyLogCreateWithoutPlacementInput[] | DailyLogUncheckedCreateWithoutPlacementInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutPlacementInput | DailyLogCreateOrConnectWithoutPlacementInput[]
    createMany?: DailyLogCreateManyPlacementInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type WeeklySubmissionUncheckedCreateNestedManyWithoutPlacementInput = {
    create?: XOR<WeeklySubmissionCreateWithoutPlacementInput, WeeklySubmissionUncheckedCreateWithoutPlacementInput> | WeeklySubmissionCreateWithoutPlacementInput[] | WeeklySubmissionUncheckedCreateWithoutPlacementInput[]
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutPlacementInput | WeeklySubmissionCreateOrConnectWithoutPlacementInput[]
    createMany?: WeeklySubmissionCreateManyPlacementInputEnvelope
    connect?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
  }

  export type FinalClearanceUncheckedCreateNestedOneWithoutPlacementInput = {
    create?: XOR<FinalClearanceCreateWithoutPlacementInput, FinalClearanceUncheckedCreateWithoutPlacementInput>
    connectOrCreate?: FinalClearanceCreateOrConnectWithoutPlacementInput
    connect?: FinalClearanceWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutStudentPlacementsNestedInput = {
    create?: XOR<UserCreateWithoutStudentPlacementsInput, UserUncheckedCreateWithoutStudentPlacementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentPlacementsInput
    upsert?: UserUpsertWithoutStudentPlacementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentPlacementsInput, UserUpdateWithoutStudentPlacementsInput>, UserUncheckedUpdateWithoutStudentPlacementsInput>
  }

  export type UserUpdateOneRequiredWithoutIndSupervisorPlacementsNestedInput = {
    create?: XOR<UserCreateWithoutIndSupervisorPlacementsInput, UserUncheckedCreateWithoutIndSupervisorPlacementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIndSupervisorPlacementsInput
    upsert?: UserUpsertWithoutIndSupervisorPlacementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIndSupervisorPlacementsInput, UserUpdateWithoutIndSupervisorPlacementsInput>, UserUncheckedUpdateWithoutIndSupervisorPlacementsInput>
  }

  export type UserUpdateOneWithoutInstCoordinatorPlacementsNestedInput = {
    create?: XOR<UserCreateWithoutInstCoordinatorPlacementsInput, UserUncheckedCreateWithoutInstCoordinatorPlacementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstCoordinatorPlacementsInput
    upsert?: UserUpsertWithoutInstCoordinatorPlacementsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstCoordinatorPlacementsInput, UserUpdateWithoutInstCoordinatorPlacementsInput>, UserUncheckedUpdateWithoutInstCoordinatorPlacementsInput>
  }

  export type DailyLogUpdateManyWithoutPlacementNestedInput = {
    create?: XOR<DailyLogCreateWithoutPlacementInput, DailyLogUncheckedCreateWithoutPlacementInput> | DailyLogCreateWithoutPlacementInput[] | DailyLogUncheckedCreateWithoutPlacementInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutPlacementInput | DailyLogCreateOrConnectWithoutPlacementInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutPlacementInput | DailyLogUpsertWithWhereUniqueWithoutPlacementInput[]
    createMany?: DailyLogCreateManyPlacementInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutPlacementInput | DailyLogUpdateWithWhereUniqueWithoutPlacementInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutPlacementInput | DailyLogUpdateManyWithWhereWithoutPlacementInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type WeeklySubmissionUpdateManyWithoutPlacementNestedInput = {
    create?: XOR<WeeklySubmissionCreateWithoutPlacementInput, WeeklySubmissionUncheckedCreateWithoutPlacementInput> | WeeklySubmissionCreateWithoutPlacementInput[] | WeeklySubmissionUncheckedCreateWithoutPlacementInput[]
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutPlacementInput | WeeklySubmissionCreateOrConnectWithoutPlacementInput[]
    upsert?: WeeklySubmissionUpsertWithWhereUniqueWithoutPlacementInput | WeeklySubmissionUpsertWithWhereUniqueWithoutPlacementInput[]
    createMany?: WeeklySubmissionCreateManyPlacementInputEnvelope
    set?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
    disconnect?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
    delete?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
    connect?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
    update?: WeeklySubmissionUpdateWithWhereUniqueWithoutPlacementInput | WeeklySubmissionUpdateWithWhereUniqueWithoutPlacementInput[]
    updateMany?: WeeklySubmissionUpdateManyWithWhereWithoutPlacementInput | WeeklySubmissionUpdateManyWithWhereWithoutPlacementInput[]
    deleteMany?: WeeklySubmissionScalarWhereInput | WeeklySubmissionScalarWhereInput[]
  }

  export type FinalClearanceUpdateOneWithoutPlacementNestedInput = {
    create?: XOR<FinalClearanceCreateWithoutPlacementInput, FinalClearanceUncheckedCreateWithoutPlacementInput>
    connectOrCreate?: FinalClearanceCreateOrConnectWithoutPlacementInput
    upsert?: FinalClearanceUpsertWithoutPlacementInput
    disconnect?: FinalClearanceWhereInput | boolean
    delete?: FinalClearanceWhereInput | boolean
    connect?: FinalClearanceWhereUniqueInput
    update?: XOR<XOR<FinalClearanceUpdateToOneWithWhereWithoutPlacementInput, FinalClearanceUpdateWithoutPlacementInput>, FinalClearanceUncheckedUpdateWithoutPlacementInput>
  }

  export type DailyLogUncheckedUpdateManyWithoutPlacementNestedInput = {
    create?: XOR<DailyLogCreateWithoutPlacementInput, DailyLogUncheckedCreateWithoutPlacementInput> | DailyLogCreateWithoutPlacementInput[] | DailyLogUncheckedCreateWithoutPlacementInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutPlacementInput | DailyLogCreateOrConnectWithoutPlacementInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutPlacementInput | DailyLogUpsertWithWhereUniqueWithoutPlacementInput[]
    createMany?: DailyLogCreateManyPlacementInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutPlacementInput | DailyLogUpdateWithWhereUniqueWithoutPlacementInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutPlacementInput | DailyLogUpdateManyWithWhereWithoutPlacementInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type WeeklySubmissionUncheckedUpdateManyWithoutPlacementNestedInput = {
    create?: XOR<WeeklySubmissionCreateWithoutPlacementInput, WeeklySubmissionUncheckedCreateWithoutPlacementInput> | WeeklySubmissionCreateWithoutPlacementInput[] | WeeklySubmissionUncheckedCreateWithoutPlacementInput[]
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutPlacementInput | WeeklySubmissionCreateOrConnectWithoutPlacementInput[]
    upsert?: WeeklySubmissionUpsertWithWhereUniqueWithoutPlacementInput | WeeklySubmissionUpsertWithWhereUniqueWithoutPlacementInput[]
    createMany?: WeeklySubmissionCreateManyPlacementInputEnvelope
    set?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
    disconnect?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
    delete?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
    connect?: WeeklySubmissionWhereUniqueInput | WeeklySubmissionWhereUniqueInput[]
    update?: WeeklySubmissionUpdateWithWhereUniqueWithoutPlacementInput | WeeklySubmissionUpdateWithWhereUniqueWithoutPlacementInput[]
    updateMany?: WeeklySubmissionUpdateManyWithWhereWithoutPlacementInput | WeeklySubmissionUpdateManyWithWhereWithoutPlacementInput[]
    deleteMany?: WeeklySubmissionScalarWhereInput | WeeklySubmissionScalarWhereInput[]
  }

  export type FinalClearanceUncheckedUpdateOneWithoutPlacementNestedInput = {
    create?: XOR<FinalClearanceCreateWithoutPlacementInput, FinalClearanceUncheckedCreateWithoutPlacementInput>
    connectOrCreate?: FinalClearanceCreateOrConnectWithoutPlacementInput
    upsert?: FinalClearanceUpsertWithoutPlacementInput
    disconnect?: FinalClearanceWhereInput | boolean
    delete?: FinalClearanceWhereInput | boolean
    connect?: FinalClearanceWhereUniqueInput
    update?: XOR<XOR<FinalClearanceUpdateToOneWithWhereWithoutPlacementInput, FinalClearanceUpdateWithoutPlacementInput>, FinalClearanceUncheckedUpdateWithoutPlacementInput>
  }

  export type PlacementCreateNestedOneWithoutDaily_logsInput = {
    create?: XOR<PlacementCreateWithoutDaily_logsInput, PlacementUncheckedCreateWithoutDaily_logsInput>
    connectOrCreate?: PlacementCreateOrConnectWithoutDaily_logsInput
    connect?: PlacementWhereUniqueInput
  }

  export type WeeklySubmissionCreateNestedOneWithoutDaily_logsInput = {
    create?: XOR<WeeklySubmissionCreateWithoutDaily_logsInput, WeeklySubmissionUncheckedCreateWithoutDaily_logsInput>
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutDaily_logsInput
    connect?: WeeklySubmissionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlacementUpdateOneRequiredWithoutDaily_logsNestedInput = {
    create?: XOR<PlacementCreateWithoutDaily_logsInput, PlacementUncheckedCreateWithoutDaily_logsInput>
    connectOrCreate?: PlacementCreateOrConnectWithoutDaily_logsInput
    upsert?: PlacementUpsertWithoutDaily_logsInput
    connect?: PlacementWhereUniqueInput
    update?: XOR<XOR<PlacementUpdateToOneWithWhereWithoutDaily_logsInput, PlacementUpdateWithoutDaily_logsInput>, PlacementUncheckedUpdateWithoutDaily_logsInput>
  }

  export type WeeklySubmissionUpdateOneRequiredWithoutDaily_logsNestedInput = {
    create?: XOR<WeeklySubmissionCreateWithoutDaily_logsInput, WeeklySubmissionUncheckedCreateWithoutDaily_logsInput>
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutDaily_logsInput
    upsert?: WeeklySubmissionUpsertWithoutDaily_logsInput
    connect?: WeeklySubmissionWhereUniqueInput
    update?: XOR<XOR<WeeklySubmissionUpdateToOneWithWhereWithoutDaily_logsInput, WeeklySubmissionUpdateWithoutDaily_logsInput>, WeeklySubmissionUncheckedUpdateWithoutDaily_logsInput>
  }

  export type PlacementCreateNestedOneWithoutWeekly_submissionsInput = {
    create?: XOR<PlacementCreateWithoutWeekly_submissionsInput, PlacementUncheckedCreateWithoutWeekly_submissionsInput>
    connectOrCreate?: PlacementCreateOrConnectWithoutWeekly_submissionsInput
    connect?: PlacementWhereUniqueInput
  }

  export type DailyLogCreateNestedManyWithoutWeekly_submissionInput = {
    create?: XOR<DailyLogCreateWithoutWeekly_submissionInput, DailyLogUncheckedCreateWithoutWeekly_submissionInput> | DailyLogCreateWithoutWeekly_submissionInput[] | DailyLogUncheckedCreateWithoutWeekly_submissionInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutWeekly_submissionInput | DailyLogCreateOrConnectWithoutWeekly_submissionInput[]
    createMany?: DailyLogCreateManyWeekly_submissionInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type LogBookApprovalCreateNestedManyWithoutWeekly_submissionInput = {
    create?: XOR<LogBookApprovalCreateWithoutWeekly_submissionInput, LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput> | LogBookApprovalCreateWithoutWeekly_submissionInput[] | LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput[]
    connectOrCreate?: LogBookApprovalCreateOrConnectWithoutWeekly_submissionInput | LogBookApprovalCreateOrConnectWithoutWeekly_submissionInput[]
    createMany?: LogBookApprovalCreateManyWeekly_submissionInputEnvelope
    connect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
  }

  export type DailyLogUncheckedCreateNestedManyWithoutWeekly_submissionInput = {
    create?: XOR<DailyLogCreateWithoutWeekly_submissionInput, DailyLogUncheckedCreateWithoutWeekly_submissionInput> | DailyLogCreateWithoutWeekly_submissionInput[] | DailyLogUncheckedCreateWithoutWeekly_submissionInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutWeekly_submissionInput | DailyLogCreateOrConnectWithoutWeekly_submissionInput[]
    createMany?: DailyLogCreateManyWeekly_submissionInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type LogBookApprovalUncheckedCreateNestedManyWithoutWeekly_submissionInput = {
    create?: XOR<LogBookApprovalCreateWithoutWeekly_submissionInput, LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput> | LogBookApprovalCreateWithoutWeekly_submissionInput[] | LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput[]
    connectOrCreate?: LogBookApprovalCreateOrConnectWithoutWeekly_submissionInput | LogBookApprovalCreateOrConnectWithoutWeekly_submissionInput[]
    createMany?: LogBookApprovalCreateManyWeekly_submissionInputEnvelope
    connect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type PlacementUpdateOneRequiredWithoutWeekly_submissionsNestedInput = {
    create?: XOR<PlacementCreateWithoutWeekly_submissionsInput, PlacementUncheckedCreateWithoutWeekly_submissionsInput>
    connectOrCreate?: PlacementCreateOrConnectWithoutWeekly_submissionsInput
    upsert?: PlacementUpsertWithoutWeekly_submissionsInput
    connect?: PlacementWhereUniqueInput
    update?: XOR<XOR<PlacementUpdateToOneWithWhereWithoutWeekly_submissionsInput, PlacementUpdateWithoutWeekly_submissionsInput>, PlacementUncheckedUpdateWithoutWeekly_submissionsInput>
  }

  export type DailyLogUpdateManyWithoutWeekly_submissionNestedInput = {
    create?: XOR<DailyLogCreateWithoutWeekly_submissionInput, DailyLogUncheckedCreateWithoutWeekly_submissionInput> | DailyLogCreateWithoutWeekly_submissionInput[] | DailyLogUncheckedCreateWithoutWeekly_submissionInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutWeekly_submissionInput | DailyLogCreateOrConnectWithoutWeekly_submissionInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutWeekly_submissionInput | DailyLogUpsertWithWhereUniqueWithoutWeekly_submissionInput[]
    createMany?: DailyLogCreateManyWeekly_submissionInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutWeekly_submissionInput | DailyLogUpdateWithWhereUniqueWithoutWeekly_submissionInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutWeekly_submissionInput | DailyLogUpdateManyWithWhereWithoutWeekly_submissionInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type LogBookApprovalUpdateManyWithoutWeekly_submissionNestedInput = {
    create?: XOR<LogBookApprovalCreateWithoutWeekly_submissionInput, LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput> | LogBookApprovalCreateWithoutWeekly_submissionInput[] | LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput[]
    connectOrCreate?: LogBookApprovalCreateOrConnectWithoutWeekly_submissionInput | LogBookApprovalCreateOrConnectWithoutWeekly_submissionInput[]
    upsert?: LogBookApprovalUpsertWithWhereUniqueWithoutWeekly_submissionInput | LogBookApprovalUpsertWithWhereUniqueWithoutWeekly_submissionInput[]
    createMany?: LogBookApprovalCreateManyWeekly_submissionInputEnvelope
    set?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    disconnect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    delete?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    connect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    update?: LogBookApprovalUpdateWithWhereUniqueWithoutWeekly_submissionInput | LogBookApprovalUpdateWithWhereUniqueWithoutWeekly_submissionInput[]
    updateMany?: LogBookApprovalUpdateManyWithWhereWithoutWeekly_submissionInput | LogBookApprovalUpdateManyWithWhereWithoutWeekly_submissionInput[]
    deleteMany?: LogBookApprovalScalarWhereInput | LogBookApprovalScalarWhereInput[]
  }

  export type DailyLogUncheckedUpdateManyWithoutWeekly_submissionNestedInput = {
    create?: XOR<DailyLogCreateWithoutWeekly_submissionInput, DailyLogUncheckedCreateWithoutWeekly_submissionInput> | DailyLogCreateWithoutWeekly_submissionInput[] | DailyLogUncheckedCreateWithoutWeekly_submissionInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutWeekly_submissionInput | DailyLogCreateOrConnectWithoutWeekly_submissionInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutWeekly_submissionInput | DailyLogUpsertWithWhereUniqueWithoutWeekly_submissionInput[]
    createMany?: DailyLogCreateManyWeekly_submissionInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutWeekly_submissionInput | DailyLogUpdateWithWhereUniqueWithoutWeekly_submissionInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutWeekly_submissionInput | DailyLogUpdateManyWithWhereWithoutWeekly_submissionInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type LogBookApprovalUncheckedUpdateManyWithoutWeekly_submissionNestedInput = {
    create?: XOR<LogBookApprovalCreateWithoutWeekly_submissionInput, LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput> | LogBookApprovalCreateWithoutWeekly_submissionInput[] | LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput[]
    connectOrCreate?: LogBookApprovalCreateOrConnectWithoutWeekly_submissionInput | LogBookApprovalCreateOrConnectWithoutWeekly_submissionInput[]
    upsert?: LogBookApprovalUpsertWithWhereUniqueWithoutWeekly_submissionInput | LogBookApprovalUpsertWithWhereUniqueWithoutWeekly_submissionInput[]
    createMany?: LogBookApprovalCreateManyWeekly_submissionInputEnvelope
    set?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    disconnect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    delete?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    connect?: LogBookApprovalWhereUniqueInput | LogBookApprovalWhereUniqueInput[]
    update?: LogBookApprovalUpdateWithWhereUniqueWithoutWeekly_submissionInput | LogBookApprovalUpdateWithWhereUniqueWithoutWeekly_submissionInput[]
    updateMany?: LogBookApprovalUpdateManyWithWhereWithoutWeekly_submissionInput | LogBookApprovalUpdateManyWithWhereWithoutWeekly_submissionInput[]
    deleteMany?: LogBookApprovalScalarWhereInput | LogBookApprovalScalarWhereInput[]
  }

  export type WeeklySubmissionCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<WeeklySubmissionCreateWithoutApprovalsInput, WeeklySubmissionUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutApprovalsInput
    connect?: WeeklySubmissionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    connect?: UserWhereUniqueInput
  }

  export type WeeklySubmissionUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<WeeklySubmissionCreateWithoutApprovalsInput, WeeklySubmissionUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: WeeklySubmissionCreateOrConnectWithoutApprovalsInput
    upsert?: WeeklySubmissionUpsertWithoutApprovalsInput
    connect?: WeeklySubmissionWhereUniqueInput
    update?: XOR<XOR<WeeklySubmissionUpdateToOneWithWhereWithoutApprovalsInput, WeeklySubmissionUpdateWithoutApprovalsInput>, WeeklySubmissionUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    upsert?: UserUpsertWithoutApprovalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalsInput, UserUpdateWithoutApprovalsInput>, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type PlacementCreateNestedOneWithoutClearanceInput = {
    create?: XOR<PlacementCreateWithoutClearanceInput, PlacementUncheckedCreateWithoutClearanceInput>
    connectOrCreate?: PlacementCreateOrConnectWithoutClearanceInput
    connect?: PlacementWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClearancesInput = {
    create?: XOR<UserCreateWithoutClearancesInput, UserUncheckedCreateWithoutClearancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClearancesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumClearanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClearanceStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PlacementUpdateOneRequiredWithoutClearanceNestedInput = {
    create?: XOR<PlacementCreateWithoutClearanceInput, PlacementUncheckedCreateWithoutClearanceInput>
    connectOrCreate?: PlacementCreateOrConnectWithoutClearanceInput
    upsert?: PlacementUpsertWithoutClearanceInput
    connect?: PlacementWhereUniqueInput
    update?: XOR<XOR<PlacementUpdateToOneWithWhereWithoutClearanceInput, PlacementUpdateWithoutClearanceInput>, PlacementUncheckedUpdateWithoutClearanceInput>
  }

  export type UserUpdateOneWithoutClearancesNestedInput = {
    create?: XOR<UserCreateWithoutClearancesInput, UserUncheckedCreateWithoutClearancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClearancesInput
    upsert?: UserUpsertWithoutClearancesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClearancesInput, UserUpdateWithoutClearancesInput>, UserUncheckedUpdateWithoutClearancesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumClearanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClearanceStatus | EnumClearanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClearanceStatus[] | ListEnumClearanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClearanceStatus[] | ListEnumClearanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClearanceStatusFilter<$PrismaModel> | $Enums.ClearanceStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumClearanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClearanceStatus | EnumClearanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClearanceStatus[] | ListEnumClearanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClearanceStatus[] | ListEnumClearanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClearanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClearanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClearanceStatusFilter<$PrismaModel>
    _max?: NestedEnumClearanceStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PlacementCreateWithoutStudentInput = {
    id?: string
    company_name: string
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    ind_supervisor: UserCreateNestedOneWithoutIndSupervisorPlacementsInput
    inst_coordinator?: UserCreateNestedOneWithoutInstCoordinatorPlacementsInput
    daily_logs?: DailyLogCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceCreateNestedOneWithoutPlacementInput
  }

  export type PlacementUncheckedCreateWithoutStudentInput = {
    id?: string
    company_name: string
    ind_supervisor_id: string
    inst_coordinator_id?: string | null
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    daily_logs?: DailyLogUncheckedCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionUncheckedCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceUncheckedCreateNestedOneWithoutPlacementInput
  }

  export type PlacementCreateOrConnectWithoutStudentInput = {
    where: PlacementWhereUniqueInput
    create: XOR<PlacementCreateWithoutStudentInput, PlacementUncheckedCreateWithoutStudentInput>
  }

  export type PlacementCreateManyStudentInputEnvelope = {
    data: PlacementCreateManyStudentInput | PlacementCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PlacementCreateWithoutInd_supervisorInput = {
    id?: string
    company_name: string
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    student: UserCreateNestedOneWithoutStudentPlacementsInput
    inst_coordinator?: UserCreateNestedOneWithoutInstCoordinatorPlacementsInput
    daily_logs?: DailyLogCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceCreateNestedOneWithoutPlacementInput
  }

  export type PlacementUncheckedCreateWithoutInd_supervisorInput = {
    id?: string
    student_id: string
    company_name: string
    inst_coordinator_id?: string | null
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    daily_logs?: DailyLogUncheckedCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionUncheckedCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceUncheckedCreateNestedOneWithoutPlacementInput
  }

  export type PlacementCreateOrConnectWithoutInd_supervisorInput = {
    where: PlacementWhereUniqueInput
    create: XOR<PlacementCreateWithoutInd_supervisorInput, PlacementUncheckedCreateWithoutInd_supervisorInput>
  }

  export type PlacementCreateManyInd_supervisorInputEnvelope = {
    data: PlacementCreateManyInd_supervisorInput | PlacementCreateManyInd_supervisorInput[]
    skipDuplicates?: boolean
  }

  export type PlacementCreateWithoutInst_coordinatorInput = {
    id?: string
    company_name: string
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    student: UserCreateNestedOneWithoutStudentPlacementsInput
    ind_supervisor: UserCreateNestedOneWithoutIndSupervisorPlacementsInput
    daily_logs?: DailyLogCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceCreateNestedOneWithoutPlacementInput
  }

  export type PlacementUncheckedCreateWithoutInst_coordinatorInput = {
    id?: string
    student_id: string
    company_name: string
    ind_supervisor_id: string
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    daily_logs?: DailyLogUncheckedCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionUncheckedCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceUncheckedCreateNestedOneWithoutPlacementInput
  }

  export type PlacementCreateOrConnectWithoutInst_coordinatorInput = {
    where: PlacementWhereUniqueInput
    create: XOR<PlacementCreateWithoutInst_coordinatorInput, PlacementUncheckedCreateWithoutInst_coordinatorInput>
  }

  export type PlacementCreateManyInst_coordinatorInputEnvelope = {
    data: PlacementCreateManyInst_coordinatorInput | PlacementCreateManyInst_coordinatorInput[]
    skipDuplicates?: boolean
  }

  export type LogBookApprovalCreateWithoutSupervisorInput = {
    id?: string
    approval_timestamp?: Date | string
    cryptographic_signature_hash: string
    weekly_submission: WeeklySubmissionCreateNestedOneWithoutApprovalsInput
  }

  export type LogBookApprovalUncheckedCreateWithoutSupervisorInput = {
    id?: string
    weekly_submission_id: string
    approval_timestamp?: Date | string
    cryptographic_signature_hash: string
  }

  export type LogBookApprovalCreateOrConnectWithoutSupervisorInput = {
    where: LogBookApprovalWhereUniqueInput
    create: XOR<LogBookApprovalCreateWithoutSupervisorInput, LogBookApprovalUncheckedCreateWithoutSupervisorInput>
  }

  export type LogBookApprovalCreateManySupervisorInputEnvelope = {
    data: LogBookApprovalCreateManySupervisorInput | LogBookApprovalCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type FinalClearanceCreateWithoutItf_officialInput = {
    id?: string
    coordinator_status?: $Enums.ClearanceStatus
    coordinator_cleared_at?: Date | string | null
    itf_status?: $Enums.ClearanceStatus
    itf_cleared_at?: Date | string | null
    final_pdf_hash?: string | null
    itf_stamp_hash?: string | null
    clearance_timestamp?: Date | string | null
    placement: PlacementCreateNestedOneWithoutClearanceInput
  }

  export type FinalClearanceUncheckedCreateWithoutItf_officialInput = {
    id?: string
    placement_id: string
    coordinator_status?: $Enums.ClearanceStatus
    coordinator_cleared_at?: Date | string | null
    itf_status?: $Enums.ClearanceStatus
    itf_cleared_at?: Date | string | null
    final_pdf_hash?: string | null
    itf_stamp_hash?: string | null
    clearance_timestamp?: Date | string | null
  }

  export type FinalClearanceCreateOrConnectWithoutItf_officialInput = {
    where: FinalClearanceWhereUniqueInput
    create: XOR<FinalClearanceCreateWithoutItf_officialInput, FinalClearanceUncheckedCreateWithoutItf_officialInput>
  }

  export type FinalClearanceCreateManyItf_officialInputEnvelope = {
    data: FinalClearanceCreateManyItf_officialInput | FinalClearanceCreateManyItf_officialInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    jon: string
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    jon: string
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: PasswordResetTokenCreateManyUserInput | PasswordResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlacementUpsertWithWhereUniqueWithoutStudentInput = {
    where: PlacementWhereUniqueInput
    update: XOR<PlacementUpdateWithoutStudentInput, PlacementUncheckedUpdateWithoutStudentInput>
    create: XOR<PlacementCreateWithoutStudentInput, PlacementUncheckedCreateWithoutStudentInput>
  }

  export type PlacementUpdateWithWhereUniqueWithoutStudentInput = {
    where: PlacementWhereUniqueInput
    data: XOR<PlacementUpdateWithoutStudentInput, PlacementUncheckedUpdateWithoutStudentInput>
  }

  export type PlacementUpdateManyWithWhereWithoutStudentInput = {
    where: PlacementScalarWhereInput
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyWithoutStudentInput>
  }

  export type PlacementScalarWhereInput = {
    AND?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
    OR?: PlacementScalarWhereInput[]
    NOT?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
    id?: UuidFilter<"Placement"> | string
    student_id?: UuidFilter<"Placement"> | string
    company_name?: StringFilter<"Placement"> | string
    ind_supervisor_id?: UuidFilter<"Placement"> | string
    inst_coordinator_id?: UuidNullableFilter<"Placement"> | string | null
    company_address?: StringNullableFilter<"Placement"> | string | null
    company_contact?: StringNullableFilter<"Placement"> | string | null
    company_email?: StringNullableFilter<"Placement"> | string | null
    start_date?: DateTimeFilter<"Placement"> | Date | string
    end_date?: DateTimeFilter<"Placement"> | Date | string
  }

  export type PlacementUpsertWithWhereUniqueWithoutInd_supervisorInput = {
    where: PlacementWhereUniqueInput
    update: XOR<PlacementUpdateWithoutInd_supervisorInput, PlacementUncheckedUpdateWithoutInd_supervisorInput>
    create: XOR<PlacementCreateWithoutInd_supervisorInput, PlacementUncheckedCreateWithoutInd_supervisorInput>
  }

  export type PlacementUpdateWithWhereUniqueWithoutInd_supervisorInput = {
    where: PlacementWhereUniqueInput
    data: XOR<PlacementUpdateWithoutInd_supervisorInput, PlacementUncheckedUpdateWithoutInd_supervisorInput>
  }

  export type PlacementUpdateManyWithWhereWithoutInd_supervisorInput = {
    where: PlacementScalarWhereInput
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyWithoutInd_supervisorInput>
  }

  export type PlacementUpsertWithWhereUniqueWithoutInst_coordinatorInput = {
    where: PlacementWhereUniqueInput
    update: XOR<PlacementUpdateWithoutInst_coordinatorInput, PlacementUncheckedUpdateWithoutInst_coordinatorInput>
    create: XOR<PlacementCreateWithoutInst_coordinatorInput, PlacementUncheckedCreateWithoutInst_coordinatorInput>
  }

  export type PlacementUpdateWithWhereUniqueWithoutInst_coordinatorInput = {
    where: PlacementWhereUniqueInput
    data: XOR<PlacementUpdateWithoutInst_coordinatorInput, PlacementUncheckedUpdateWithoutInst_coordinatorInput>
  }

  export type PlacementUpdateManyWithWhereWithoutInst_coordinatorInput = {
    where: PlacementScalarWhereInput
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyWithoutInst_coordinatorInput>
  }

  export type LogBookApprovalUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: LogBookApprovalWhereUniqueInput
    update: XOR<LogBookApprovalUpdateWithoutSupervisorInput, LogBookApprovalUncheckedUpdateWithoutSupervisorInput>
    create: XOR<LogBookApprovalCreateWithoutSupervisorInput, LogBookApprovalUncheckedCreateWithoutSupervisorInput>
  }

  export type LogBookApprovalUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: LogBookApprovalWhereUniqueInput
    data: XOR<LogBookApprovalUpdateWithoutSupervisorInput, LogBookApprovalUncheckedUpdateWithoutSupervisorInput>
  }

  export type LogBookApprovalUpdateManyWithWhereWithoutSupervisorInput = {
    where: LogBookApprovalScalarWhereInput
    data: XOR<LogBookApprovalUpdateManyMutationInput, LogBookApprovalUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type LogBookApprovalScalarWhereInput = {
    AND?: LogBookApprovalScalarWhereInput | LogBookApprovalScalarWhereInput[]
    OR?: LogBookApprovalScalarWhereInput[]
    NOT?: LogBookApprovalScalarWhereInput | LogBookApprovalScalarWhereInput[]
    id?: UuidFilter<"LogBookApproval"> | string
    weekly_submission_id?: UuidFilter<"LogBookApproval"> | string
    supervisor_id?: UuidFilter<"LogBookApproval"> | string
    approval_timestamp?: DateTimeFilter<"LogBookApproval"> | Date | string
    cryptographic_signature_hash?: StringFilter<"LogBookApproval"> | string
  }

  export type FinalClearanceUpsertWithWhereUniqueWithoutItf_officialInput = {
    where: FinalClearanceWhereUniqueInput
    update: XOR<FinalClearanceUpdateWithoutItf_officialInput, FinalClearanceUncheckedUpdateWithoutItf_officialInput>
    create: XOR<FinalClearanceCreateWithoutItf_officialInput, FinalClearanceUncheckedCreateWithoutItf_officialInput>
  }

  export type FinalClearanceUpdateWithWhereUniqueWithoutItf_officialInput = {
    where: FinalClearanceWhereUniqueInput
    data: XOR<FinalClearanceUpdateWithoutItf_officialInput, FinalClearanceUncheckedUpdateWithoutItf_officialInput>
  }

  export type FinalClearanceUpdateManyWithWhereWithoutItf_officialInput = {
    where: FinalClearanceScalarWhereInput
    data: XOR<FinalClearanceUpdateManyMutationInput, FinalClearanceUncheckedUpdateManyWithoutItf_officialInput>
  }

  export type FinalClearanceScalarWhereInput = {
    AND?: FinalClearanceScalarWhereInput | FinalClearanceScalarWhereInput[]
    OR?: FinalClearanceScalarWhereInput[]
    NOT?: FinalClearanceScalarWhereInput | FinalClearanceScalarWhereInput[]
    id?: UuidFilter<"FinalClearance"> | string
    placement_id?: UuidFilter<"FinalClearance"> | string
    coordinator_status?: EnumClearanceStatusFilter<"FinalClearance"> | $Enums.ClearanceStatus
    coordinator_cleared_at?: DateTimeNullableFilter<"FinalClearance"> | Date | string | null
    itf_official_id?: UuidNullableFilter<"FinalClearance"> | string | null
    itf_status?: EnumClearanceStatusFilter<"FinalClearance"> | $Enums.ClearanceStatus
    itf_cleared_at?: DateTimeNullableFilter<"FinalClearance"> | Date | string | null
    final_pdf_hash?: StringNullableFilter<"FinalClearance"> | string | null
    itf_stamp_hash?: StringNullableFilter<"FinalClearance"> | string | null
    clearance_timestamp?: DateTimeNullableFilter<"FinalClearance"> | Date | string | null
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    user_id?: UuidFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    OR?: PasswordResetTokenScalarWhereInput[]
    NOT?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    id?: UuidFilter<"PasswordResetToken"> | string
    user_id?: UuidFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expires_at?: DateTimeFilter<"PasswordResetToken"> | Date | string
    created_at?: DateTimeFilter<"PasswordResetToken"> | Date | string
    jon?: StringFilter<"PasswordResetToken"> | string
  }

  export type UserCreateWithoutPassword_reset_tokensInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPassword_reset_tokensInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementUncheckedCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementUncheckedCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementUncheckedCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceUncheckedCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPassword_reset_tokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPassword_reset_tokensInput, UserUncheckedCreateWithoutPassword_reset_tokensInput>
  }

  export type UserUpsertWithoutPassword_reset_tokensInput = {
    update: XOR<UserUpdateWithoutPassword_reset_tokensInput, UserUncheckedUpdateWithoutPassword_reset_tokensInput>
    create: XOR<UserCreateWithoutPassword_reset_tokensInput, UserUncheckedCreateWithoutPassword_reset_tokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPassword_reset_tokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPassword_reset_tokensInput, UserUncheckedUpdateWithoutPassword_reset_tokensInput>
  }

  export type UserUpdateWithoutPassword_reset_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPassword_reset_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUncheckedUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUncheckedUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUncheckedUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUncheckedUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceCreateNestedManyWithoutItf_officialInput
    password_reset_tokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementUncheckedCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementUncheckedCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementUncheckedCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceUncheckedCreateNestedManyWithoutItf_officialInput
    password_reset_tokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUpdateManyWithoutItf_officialNestedInput
    password_reset_tokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUncheckedUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUncheckedUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUncheckedUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUncheckedUpdateManyWithoutItf_officialNestedInput
    password_reset_tokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStudentPlacementsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    indSupervisorPlacements?: PlacementCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentPlacementsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    indSupervisorPlacements?: PlacementUncheckedCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementUncheckedCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceUncheckedCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentPlacementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentPlacementsInput, UserUncheckedCreateWithoutStudentPlacementsInput>
  }

  export type UserCreateWithoutIndSupervisorPlacementsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementCreateNestedManyWithoutStudentInput
    instCoordinatorPlacements?: PlacementCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIndSupervisorPlacementsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementUncheckedCreateNestedManyWithoutStudentInput
    instCoordinatorPlacements?: PlacementUncheckedCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceUncheckedCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIndSupervisorPlacementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIndSupervisorPlacementsInput, UserUncheckedCreateWithoutIndSupervisorPlacementsInput>
  }

  export type UserCreateWithoutInstCoordinatorPlacementsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementCreateNestedManyWithoutInd_supervisorInput
    approvals?: LogBookApprovalCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstCoordinatorPlacementsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementUncheckedCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementUncheckedCreateNestedManyWithoutInd_supervisorInput
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutSupervisorInput
    clearances?: FinalClearanceUncheckedCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstCoordinatorPlacementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstCoordinatorPlacementsInput, UserUncheckedCreateWithoutInstCoordinatorPlacementsInput>
  }

  export type DailyLogCreateWithoutPlacementInput = {
    id?: string
    week_no: number
    log_date: Date | string
    description: string
    image_url?: string | null
    created_timestamp?: Date | string
    weekly_submission: WeeklySubmissionCreateNestedOneWithoutDaily_logsInput
  }

  export type DailyLogUncheckedCreateWithoutPlacementInput = {
    id?: string
    weekly_submission_id: string
    week_no: number
    log_date: Date | string
    description: string
    image_url?: string | null
    created_timestamp?: Date | string
  }

  export type DailyLogCreateOrConnectWithoutPlacementInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutPlacementInput, DailyLogUncheckedCreateWithoutPlacementInput>
  }

  export type DailyLogCreateManyPlacementInputEnvelope = {
    data: DailyLogCreateManyPlacementInput | DailyLogCreateManyPlacementInput[]
    skipDuplicates?: boolean
  }

  export type WeeklySubmissionCreateWithoutPlacementInput = {
    id?: string
    week_no: number
    status?: $Enums.Status
    daily_logs?: DailyLogCreateNestedManyWithoutWeekly_submissionInput
    approvals?: LogBookApprovalCreateNestedManyWithoutWeekly_submissionInput
  }

  export type WeeklySubmissionUncheckedCreateWithoutPlacementInput = {
    id?: string
    week_no: number
    status?: $Enums.Status
    daily_logs?: DailyLogUncheckedCreateNestedManyWithoutWeekly_submissionInput
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutWeekly_submissionInput
  }

  export type WeeklySubmissionCreateOrConnectWithoutPlacementInput = {
    where: WeeklySubmissionWhereUniqueInput
    create: XOR<WeeklySubmissionCreateWithoutPlacementInput, WeeklySubmissionUncheckedCreateWithoutPlacementInput>
  }

  export type WeeklySubmissionCreateManyPlacementInputEnvelope = {
    data: WeeklySubmissionCreateManyPlacementInput | WeeklySubmissionCreateManyPlacementInput[]
    skipDuplicates?: boolean
  }

  export type FinalClearanceCreateWithoutPlacementInput = {
    id?: string
    coordinator_status?: $Enums.ClearanceStatus
    coordinator_cleared_at?: Date | string | null
    itf_status?: $Enums.ClearanceStatus
    itf_cleared_at?: Date | string | null
    final_pdf_hash?: string | null
    itf_stamp_hash?: string | null
    clearance_timestamp?: Date | string | null
    itf_official?: UserCreateNestedOneWithoutClearancesInput
  }

  export type FinalClearanceUncheckedCreateWithoutPlacementInput = {
    id?: string
    coordinator_status?: $Enums.ClearanceStatus
    coordinator_cleared_at?: Date | string | null
    itf_official_id?: string | null
    itf_status?: $Enums.ClearanceStatus
    itf_cleared_at?: Date | string | null
    final_pdf_hash?: string | null
    itf_stamp_hash?: string | null
    clearance_timestamp?: Date | string | null
  }

  export type FinalClearanceCreateOrConnectWithoutPlacementInput = {
    where: FinalClearanceWhereUniqueInput
    create: XOR<FinalClearanceCreateWithoutPlacementInput, FinalClearanceUncheckedCreateWithoutPlacementInput>
  }

  export type UserUpsertWithoutStudentPlacementsInput = {
    update: XOR<UserUpdateWithoutStudentPlacementsInput, UserUncheckedUpdateWithoutStudentPlacementsInput>
    create: XOR<UserCreateWithoutStudentPlacementsInput, UserUncheckedCreateWithoutStudentPlacementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentPlacementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentPlacementsInput, UserUncheckedUpdateWithoutStudentPlacementsInput>
  }

  export type UserUpdateWithoutStudentPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    indSupervisorPlacements?: PlacementUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    indSupervisorPlacements?: PlacementUncheckedUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUncheckedUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUncheckedUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutIndSupervisorPlacementsInput = {
    update: XOR<UserUpdateWithoutIndSupervisorPlacementsInput, UserUncheckedUpdateWithoutIndSupervisorPlacementsInput>
    create: XOR<UserCreateWithoutIndSupervisorPlacementsInput, UserUncheckedCreateWithoutIndSupervisorPlacementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIndSupervisorPlacementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIndSupervisorPlacementsInput, UserUncheckedUpdateWithoutIndSupervisorPlacementsInput>
  }

  export type UserUpdateWithoutIndSupervisorPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUpdateManyWithoutStudentNestedInput
    instCoordinatorPlacements?: PlacementUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIndSupervisorPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUncheckedUpdateManyWithoutStudentNestedInput
    instCoordinatorPlacements?: PlacementUncheckedUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUncheckedUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutInstCoordinatorPlacementsInput = {
    update: XOR<UserUpdateWithoutInstCoordinatorPlacementsInput, UserUncheckedUpdateWithoutInstCoordinatorPlacementsInput>
    create: XOR<UserCreateWithoutInstCoordinatorPlacementsInput, UserUncheckedCreateWithoutInstCoordinatorPlacementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstCoordinatorPlacementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstCoordinatorPlacementsInput, UserUncheckedUpdateWithoutInstCoordinatorPlacementsInput>
  }

  export type UserUpdateWithoutInstCoordinatorPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUpdateManyWithoutInd_supervisorNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstCoordinatorPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUncheckedUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUncheckedUpdateManyWithoutInd_supervisorNestedInput
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutSupervisorNestedInput
    clearances?: FinalClearanceUncheckedUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DailyLogUpsertWithWhereUniqueWithoutPlacementInput = {
    where: DailyLogWhereUniqueInput
    update: XOR<DailyLogUpdateWithoutPlacementInput, DailyLogUncheckedUpdateWithoutPlacementInput>
    create: XOR<DailyLogCreateWithoutPlacementInput, DailyLogUncheckedCreateWithoutPlacementInput>
  }

  export type DailyLogUpdateWithWhereUniqueWithoutPlacementInput = {
    where: DailyLogWhereUniqueInput
    data: XOR<DailyLogUpdateWithoutPlacementInput, DailyLogUncheckedUpdateWithoutPlacementInput>
  }

  export type DailyLogUpdateManyWithWhereWithoutPlacementInput = {
    where: DailyLogScalarWhereInput
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyWithoutPlacementInput>
  }

  export type DailyLogScalarWhereInput = {
    AND?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    OR?: DailyLogScalarWhereInput[]
    NOT?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    id?: UuidFilter<"DailyLog"> | string
    placement_id?: UuidFilter<"DailyLog"> | string
    weekly_submission_id?: UuidFilter<"DailyLog"> | string
    week_no?: IntFilter<"DailyLog"> | number
    log_date?: DateTimeFilter<"DailyLog"> | Date | string
    description?: StringFilter<"DailyLog"> | string
    image_url?: StringNullableFilter<"DailyLog"> | string | null
    created_timestamp?: DateTimeFilter<"DailyLog"> | Date | string
  }

  export type WeeklySubmissionUpsertWithWhereUniqueWithoutPlacementInput = {
    where: WeeklySubmissionWhereUniqueInput
    update: XOR<WeeklySubmissionUpdateWithoutPlacementInput, WeeklySubmissionUncheckedUpdateWithoutPlacementInput>
    create: XOR<WeeklySubmissionCreateWithoutPlacementInput, WeeklySubmissionUncheckedCreateWithoutPlacementInput>
  }

  export type WeeklySubmissionUpdateWithWhereUniqueWithoutPlacementInput = {
    where: WeeklySubmissionWhereUniqueInput
    data: XOR<WeeklySubmissionUpdateWithoutPlacementInput, WeeklySubmissionUncheckedUpdateWithoutPlacementInput>
  }

  export type WeeklySubmissionUpdateManyWithWhereWithoutPlacementInput = {
    where: WeeklySubmissionScalarWhereInput
    data: XOR<WeeklySubmissionUpdateManyMutationInput, WeeklySubmissionUncheckedUpdateManyWithoutPlacementInput>
  }

  export type WeeklySubmissionScalarWhereInput = {
    AND?: WeeklySubmissionScalarWhereInput | WeeklySubmissionScalarWhereInput[]
    OR?: WeeklySubmissionScalarWhereInput[]
    NOT?: WeeklySubmissionScalarWhereInput | WeeklySubmissionScalarWhereInput[]
    id?: UuidFilter<"WeeklySubmission"> | string
    placement_id?: UuidFilter<"WeeklySubmission"> | string
    week_no?: IntFilter<"WeeklySubmission"> | number
    status?: EnumStatusFilter<"WeeklySubmission"> | $Enums.Status
  }

  export type FinalClearanceUpsertWithoutPlacementInput = {
    update: XOR<FinalClearanceUpdateWithoutPlacementInput, FinalClearanceUncheckedUpdateWithoutPlacementInput>
    create: XOR<FinalClearanceCreateWithoutPlacementInput, FinalClearanceUncheckedCreateWithoutPlacementInput>
    where?: FinalClearanceWhereInput
  }

  export type FinalClearanceUpdateToOneWithWhereWithoutPlacementInput = {
    where?: FinalClearanceWhereInput
    data: XOR<FinalClearanceUpdateWithoutPlacementInput, FinalClearanceUncheckedUpdateWithoutPlacementInput>
  }

  export type FinalClearanceUpdateWithoutPlacementInput = {
    id?: StringFieldUpdateOperationsInput | string
    coordinator_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    coordinator_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    itf_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_pdf_hash?: NullableStringFieldUpdateOperationsInput | string | null
    itf_stamp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clearance_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_official?: UserUpdateOneWithoutClearancesNestedInput
  }

  export type FinalClearanceUncheckedUpdateWithoutPlacementInput = {
    id?: StringFieldUpdateOperationsInput | string
    coordinator_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    coordinator_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_official_id?: NullableStringFieldUpdateOperationsInput | string | null
    itf_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    itf_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_pdf_hash?: NullableStringFieldUpdateOperationsInput | string | null
    itf_stamp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clearance_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlacementCreateWithoutDaily_logsInput = {
    id?: string
    company_name: string
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    student: UserCreateNestedOneWithoutStudentPlacementsInput
    ind_supervisor: UserCreateNestedOneWithoutIndSupervisorPlacementsInput
    inst_coordinator?: UserCreateNestedOneWithoutInstCoordinatorPlacementsInput
    weekly_submissions?: WeeklySubmissionCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceCreateNestedOneWithoutPlacementInput
  }

  export type PlacementUncheckedCreateWithoutDaily_logsInput = {
    id?: string
    student_id: string
    company_name: string
    ind_supervisor_id: string
    inst_coordinator_id?: string | null
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    weekly_submissions?: WeeklySubmissionUncheckedCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceUncheckedCreateNestedOneWithoutPlacementInput
  }

  export type PlacementCreateOrConnectWithoutDaily_logsInput = {
    where: PlacementWhereUniqueInput
    create: XOR<PlacementCreateWithoutDaily_logsInput, PlacementUncheckedCreateWithoutDaily_logsInput>
  }

  export type WeeklySubmissionCreateWithoutDaily_logsInput = {
    id?: string
    week_no: number
    status?: $Enums.Status
    placement: PlacementCreateNestedOneWithoutWeekly_submissionsInput
    approvals?: LogBookApprovalCreateNestedManyWithoutWeekly_submissionInput
  }

  export type WeeklySubmissionUncheckedCreateWithoutDaily_logsInput = {
    id?: string
    placement_id: string
    week_no: number
    status?: $Enums.Status
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutWeekly_submissionInput
  }

  export type WeeklySubmissionCreateOrConnectWithoutDaily_logsInput = {
    where: WeeklySubmissionWhereUniqueInput
    create: XOR<WeeklySubmissionCreateWithoutDaily_logsInput, WeeklySubmissionUncheckedCreateWithoutDaily_logsInput>
  }

  export type PlacementUpsertWithoutDaily_logsInput = {
    update: XOR<PlacementUpdateWithoutDaily_logsInput, PlacementUncheckedUpdateWithoutDaily_logsInput>
    create: XOR<PlacementCreateWithoutDaily_logsInput, PlacementUncheckedCreateWithoutDaily_logsInput>
    where?: PlacementWhereInput
  }

  export type PlacementUpdateToOneWithWhereWithoutDaily_logsInput = {
    where?: PlacementWhereInput
    data: XOR<PlacementUpdateWithoutDaily_logsInput, PlacementUncheckedUpdateWithoutDaily_logsInput>
  }

  export type PlacementUpdateWithoutDaily_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentPlacementsNestedInput
    ind_supervisor?: UserUpdateOneRequiredWithoutIndSupervisorPlacementsNestedInput
    inst_coordinator?: UserUpdateOneWithoutInstCoordinatorPlacementsNestedInput
    weekly_submissions?: WeeklySubmissionUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateWithoutDaily_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    ind_supervisor_id?: StringFieldUpdateOperationsInput | string
    inst_coordinator_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    weekly_submissions?: WeeklySubmissionUncheckedUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUncheckedUpdateOneWithoutPlacementNestedInput
  }

  export type WeeklySubmissionUpsertWithoutDaily_logsInput = {
    update: XOR<WeeklySubmissionUpdateWithoutDaily_logsInput, WeeklySubmissionUncheckedUpdateWithoutDaily_logsInput>
    create: XOR<WeeklySubmissionCreateWithoutDaily_logsInput, WeeklySubmissionUncheckedCreateWithoutDaily_logsInput>
    where?: WeeklySubmissionWhereInput
  }

  export type WeeklySubmissionUpdateToOneWithWhereWithoutDaily_logsInput = {
    where?: WeeklySubmissionWhereInput
    data: XOR<WeeklySubmissionUpdateWithoutDaily_logsInput, WeeklySubmissionUncheckedUpdateWithoutDaily_logsInput>
  }

  export type WeeklySubmissionUpdateWithoutDaily_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    placement?: PlacementUpdateOneRequiredWithoutWeekly_submissionsNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutWeekly_submissionNestedInput
  }

  export type WeeklySubmissionUncheckedUpdateWithoutDaily_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutWeekly_submissionNestedInput
  }

  export type PlacementCreateWithoutWeekly_submissionsInput = {
    id?: string
    company_name: string
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    student: UserCreateNestedOneWithoutStudentPlacementsInput
    ind_supervisor: UserCreateNestedOneWithoutIndSupervisorPlacementsInput
    inst_coordinator?: UserCreateNestedOneWithoutInstCoordinatorPlacementsInput
    daily_logs?: DailyLogCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceCreateNestedOneWithoutPlacementInput
  }

  export type PlacementUncheckedCreateWithoutWeekly_submissionsInput = {
    id?: string
    student_id: string
    company_name: string
    ind_supervisor_id: string
    inst_coordinator_id?: string | null
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    daily_logs?: DailyLogUncheckedCreateNestedManyWithoutPlacementInput
    clearance?: FinalClearanceUncheckedCreateNestedOneWithoutPlacementInput
  }

  export type PlacementCreateOrConnectWithoutWeekly_submissionsInput = {
    where: PlacementWhereUniqueInput
    create: XOR<PlacementCreateWithoutWeekly_submissionsInput, PlacementUncheckedCreateWithoutWeekly_submissionsInput>
  }

  export type DailyLogCreateWithoutWeekly_submissionInput = {
    id?: string
    week_no: number
    log_date: Date | string
    description: string
    image_url?: string | null
    created_timestamp?: Date | string
    placement: PlacementCreateNestedOneWithoutDaily_logsInput
  }

  export type DailyLogUncheckedCreateWithoutWeekly_submissionInput = {
    id?: string
    placement_id: string
    week_no: number
    log_date: Date | string
    description: string
    image_url?: string | null
    created_timestamp?: Date | string
  }

  export type DailyLogCreateOrConnectWithoutWeekly_submissionInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutWeekly_submissionInput, DailyLogUncheckedCreateWithoutWeekly_submissionInput>
  }

  export type DailyLogCreateManyWeekly_submissionInputEnvelope = {
    data: DailyLogCreateManyWeekly_submissionInput | DailyLogCreateManyWeekly_submissionInput[]
    skipDuplicates?: boolean
  }

  export type LogBookApprovalCreateWithoutWeekly_submissionInput = {
    id?: string
    approval_timestamp?: Date | string
    cryptographic_signature_hash: string
    supervisor: UserCreateNestedOneWithoutApprovalsInput
  }

  export type LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput = {
    id?: string
    supervisor_id: string
    approval_timestamp?: Date | string
    cryptographic_signature_hash: string
  }

  export type LogBookApprovalCreateOrConnectWithoutWeekly_submissionInput = {
    where: LogBookApprovalWhereUniqueInput
    create: XOR<LogBookApprovalCreateWithoutWeekly_submissionInput, LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput>
  }

  export type LogBookApprovalCreateManyWeekly_submissionInputEnvelope = {
    data: LogBookApprovalCreateManyWeekly_submissionInput | LogBookApprovalCreateManyWeekly_submissionInput[]
    skipDuplicates?: boolean
  }

  export type PlacementUpsertWithoutWeekly_submissionsInput = {
    update: XOR<PlacementUpdateWithoutWeekly_submissionsInput, PlacementUncheckedUpdateWithoutWeekly_submissionsInput>
    create: XOR<PlacementCreateWithoutWeekly_submissionsInput, PlacementUncheckedCreateWithoutWeekly_submissionsInput>
    where?: PlacementWhereInput
  }

  export type PlacementUpdateToOneWithWhereWithoutWeekly_submissionsInput = {
    where?: PlacementWhereInput
    data: XOR<PlacementUpdateWithoutWeekly_submissionsInput, PlacementUncheckedUpdateWithoutWeekly_submissionsInput>
  }

  export type PlacementUpdateWithoutWeekly_submissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentPlacementsNestedInput
    ind_supervisor?: UserUpdateOneRequiredWithoutIndSupervisorPlacementsNestedInput
    inst_coordinator?: UserUpdateOneWithoutInstCoordinatorPlacementsNestedInput
    daily_logs?: DailyLogUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateWithoutWeekly_submissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    ind_supervisor_id?: StringFieldUpdateOperationsInput | string
    inst_coordinator_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_logs?: DailyLogUncheckedUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUncheckedUpdateOneWithoutPlacementNestedInput
  }

  export type DailyLogUpsertWithWhereUniqueWithoutWeekly_submissionInput = {
    where: DailyLogWhereUniqueInput
    update: XOR<DailyLogUpdateWithoutWeekly_submissionInput, DailyLogUncheckedUpdateWithoutWeekly_submissionInput>
    create: XOR<DailyLogCreateWithoutWeekly_submissionInput, DailyLogUncheckedCreateWithoutWeekly_submissionInput>
  }

  export type DailyLogUpdateWithWhereUniqueWithoutWeekly_submissionInput = {
    where: DailyLogWhereUniqueInput
    data: XOR<DailyLogUpdateWithoutWeekly_submissionInput, DailyLogUncheckedUpdateWithoutWeekly_submissionInput>
  }

  export type DailyLogUpdateManyWithWhereWithoutWeekly_submissionInput = {
    where: DailyLogScalarWhereInput
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyWithoutWeekly_submissionInput>
  }

  export type LogBookApprovalUpsertWithWhereUniqueWithoutWeekly_submissionInput = {
    where: LogBookApprovalWhereUniqueInput
    update: XOR<LogBookApprovalUpdateWithoutWeekly_submissionInput, LogBookApprovalUncheckedUpdateWithoutWeekly_submissionInput>
    create: XOR<LogBookApprovalCreateWithoutWeekly_submissionInput, LogBookApprovalUncheckedCreateWithoutWeekly_submissionInput>
  }

  export type LogBookApprovalUpdateWithWhereUniqueWithoutWeekly_submissionInput = {
    where: LogBookApprovalWhereUniqueInput
    data: XOR<LogBookApprovalUpdateWithoutWeekly_submissionInput, LogBookApprovalUncheckedUpdateWithoutWeekly_submissionInput>
  }

  export type LogBookApprovalUpdateManyWithWhereWithoutWeekly_submissionInput = {
    where: LogBookApprovalScalarWhereInput
    data: XOR<LogBookApprovalUpdateManyMutationInput, LogBookApprovalUncheckedUpdateManyWithoutWeekly_submissionInput>
  }

  export type WeeklySubmissionCreateWithoutApprovalsInput = {
    id?: string
    week_no: number
    status?: $Enums.Status
    placement: PlacementCreateNestedOneWithoutWeekly_submissionsInput
    daily_logs?: DailyLogCreateNestedManyWithoutWeekly_submissionInput
  }

  export type WeeklySubmissionUncheckedCreateWithoutApprovalsInput = {
    id?: string
    placement_id: string
    week_no: number
    status?: $Enums.Status
    daily_logs?: DailyLogUncheckedCreateNestedManyWithoutWeekly_submissionInput
  }

  export type WeeklySubmissionCreateOrConnectWithoutApprovalsInput = {
    where: WeeklySubmissionWhereUniqueInput
    create: XOR<WeeklySubmissionCreateWithoutApprovalsInput, WeeklySubmissionUncheckedCreateWithoutApprovalsInput>
  }

  export type UserCreateWithoutApprovalsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementCreateNestedManyWithoutInst_coordinatorInput
    clearances?: FinalClearanceCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovalsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementUncheckedCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementUncheckedCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementUncheckedCreateNestedManyWithoutInst_coordinatorInput
    clearances?: FinalClearanceUncheckedCreateNestedManyWithoutItf_officialInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
  }

  export type WeeklySubmissionUpsertWithoutApprovalsInput = {
    update: XOR<WeeklySubmissionUpdateWithoutApprovalsInput, WeeklySubmissionUncheckedUpdateWithoutApprovalsInput>
    create: XOR<WeeklySubmissionCreateWithoutApprovalsInput, WeeklySubmissionUncheckedCreateWithoutApprovalsInput>
    where?: WeeklySubmissionWhereInput
  }

  export type WeeklySubmissionUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: WeeklySubmissionWhereInput
    data: XOR<WeeklySubmissionUpdateWithoutApprovalsInput, WeeklySubmissionUncheckedUpdateWithoutApprovalsInput>
  }

  export type WeeklySubmissionUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    placement?: PlacementUpdateOneRequiredWithoutWeekly_submissionsNestedInput
    daily_logs?: DailyLogUpdateManyWithoutWeekly_submissionNestedInput
  }

  export type WeeklySubmissionUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    daily_logs?: DailyLogUncheckedUpdateManyWithoutWeekly_submissionNestedInput
  }

  export type UserUpsertWithoutApprovalsInput = {
    update: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUpdateManyWithoutInst_coordinatorNestedInput
    clearances?: FinalClearanceUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUncheckedUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUncheckedUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUncheckedUpdateManyWithoutInst_coordinatorNestedInput
    clearances?: FinalClearanceUncheckedUpdateManyWithoutItf_officialNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlacementCreateWithoutClearanceInput = {
    id?: string
    company_name: string
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    student: UserCreateNestedOneWithoutStudentPlacementsInput
    ind_supervisor: UserCreateNestedOneWithoutIndSupervisorPlacementsInput
    inst_coordinator?: UserCreateNestedOneWithoutInstCoordinatorPlacementsInput
    daily_logs?: DailyLogCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionCreateNestedManyWithoutPlacementInput
  }

  export type PlacementUncheckedCreateWithoutClearanceInput = {
    id?: string
    student_id: string
    company_name: string
    ind_supervisor_id: string
    inst_coordinator_id?: string | null
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
    daily_logs?: DailyLogUncheckedCreateNestedManyWithoutPlacementInput
    weekly_submissions?: WeeklySubmissionUncheckedCreateNestedManyWithoutPlacementInput
  }

  export type PlacementCreateOrConnectWithoutClearanceInput = {
    where: PlacementWhereUniqueInput
    create: XOR<PlacementCreateWithoutClearanceInput, PlacementUncheckedCreateWithoutClearanceInput>
  }

  export type UserCreateWithoutClearancesInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalCreateNestedManyWithoutSupervisorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClearancesInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    role: $Enums.Role
    created_at?: Date | string
    studentPlacements?: PlacementUncheckedCreateNestedManyWithoutStudentInput
    indSupervisorPlacements?: PlacementUncheckedCreateNestedManyWithoutInd_supervisorInput
    instCoordinatorPlacements?: PlacementUncheckedCreateNestedManyWithoutInst_coordinatorInput
    approvals?: LogBookApprovalUncheckedCreateNestedManyWithoutSupervisorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    password_reset_tokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClearancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClearancesInput, UserUncheckedCreateWithoutClearancesInput>
  }

  export type PlacementUpsertWithoutClearanceInput = {
    update: XOR<PlacementUpdateWithoutClearanceInput, PlacementUncheckedUpdateWithoutClearanceInput>
    create: XOR<PlacementCreateWithoutClearanceInput, PlacementUncheckedCreateWithoutClearanceInput>
    where?: PlacementWhereInput
  }

  export type PlacementUpdateToOneWithWhereWithoutClearanceInput = {
    where?: PlacementWhereInput
    data: XOR<PlacementUpdateWithoutClearanceInput, PlacementUncheckedUpdateWithoutClearanceInput>
  }

  export type PlacementUpdateWithoutClearanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentPlacementsNestedInput
    ind_supervisor?: UserUpdateOneRequiredWithoutIndSupervisorPlacementsNestedInput
    inst_coordinator?: UserUpdateOneWithoutInstCoordinatorPlacementsNestedInput
    daily_logs?: DailyLogUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUpdateManyWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateWithoutClearanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    ind_supervisor_id?: StringFieldUpdateOperationsInput | string
    inst_coordinator_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_logs?: DailyLogUncheckedUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUncheckedUpdateManyWithoutPlacementNestedInput
  }

  export type UserUpsertWithoutClearancesInput = {
    update: XOR<UserUpdateWithoutClearancesInput, UserUncheckedUpdateWithoutClearancesInput>
    create: XOR<UserCreateWithoutClearancesInput, UserUncheckedCreateWithoutClearancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClearancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClearancesInput, UserUncheckedUpdateWithoutClearancesInput>
  }

  export type UserUpdateWithoutClearancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutSupervisorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClearancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentPlacements?: PlacementUncheckedUpdateManyWithoutStudentNestedInput
    indSupervisorPlacements?: PlacementUncheckedUpdateManyWithoutInd_supervisorNestedInput
    instCoordinatorPlacements?: PlacementUncheckedUpdateManyWithoutInst_coordinatorNestedInput
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutSupervisorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    password_reset_tokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlacementCreateManyStudentInput = {
    id?: string
    company_name: string
    ind_supervisor_id: string
    inst_coordinator_id?: string | null
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
  }

  export type PlacementCreateManyInd_supervisorInput = {
    id?: string
    student_id: string
    company_name: string
    inst_coordinator_id?: string | null
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
  }

  export type PlacementCreateManyInst_coordinatorInput = {
    id?: string
    student_id: string
    company_name: string
    ind_supervisor_id: string
    company_address?: string | null
    company_contact?: string | null
    company_email?: string | null
    start_date: Date | string
    end_date: Date | string
  }

  export type LogBookApprovalCreateManySupervisorInput = {
    id?: string
    weekly_submission_id: string
    approval_timestamp?: Date | string
    cryptographic_signature_hash: string
  }

  export type FinalClearanceCreateManyItf_officialInput = {
    id?: string
    placement_id: string
    coordinator_status?: $Enums.ClearanceStatus
    coordinator_cleared_at?: Date | string | null
    itf_status?: $Enums.ClearanceStatus
    itf_cleared_at?: Date | string | null
    final_pdf_hash?: string | null
    itf_stamp_hash?: string | null
    clearance_timestamp?: Date | string | null
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type PasswordResetTokenCreateManyUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    jon: string
  }

  export type PlacementUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ind_supervisor?: UserUpdateOneRequiredWithoutIndSupervisorPlacementsNestedInput
    inst_coordinator?: UserUpdateOneWithoutInstCoordinatorPlacementsNestedInput
    daily_logs?: DailyLogUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    ind_supervisor_id?: StringFieldUpdateOperationsInput | string
    inst_coordinator_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_logs?: DailyLogUncheckedUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUncheckedUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUncheckedUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    ind_supervisor_id?: StringFieldUpdateOperationsInput | string
    inst_coordinator_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementUpdateWithoutInd_supervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentPlacementsNestedInput
    inst_coordinator?: UserUpdateOneWithoutInstCoordinatorPlacementsNestedInput
    daily_logs?: DailyLogUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateWithoutInd_supervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    inst_coordinator_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_logs?: DailyLogUncheckedUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUncheckedUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUncheckedUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateManyWithoutInd_supervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    inst_coordinator_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementUpdateWithoutInst_coordinatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentPlacementsNestedInput
    ind_supervisor?: UserUpdateOneRequiredWithoutIndSupervisorPlacementsNestedInput
    daily_logs?: DailyLogUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateWithoutInst_coordinatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    ind_supervisor_id?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_logs?: DailyLogUncheckedUpdateManyWithoutPlacementNestedInput
    weekly_submissions?: WeeklySubmissionUncheckedUpdateManyWithoutPlacementNestedInput
    clearance?: FinalClearanceUncheckedUpdateOneWithoutPlacementNestedInput
  }

  export type PlacementUncheckedUpdateManyWithoutInst_coordinatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    ind_supervisor_id?: StringFieldUpdateOperationsInput | string
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    company_contact?: NullableStringFieldUpdateOperationsInput | string | null
    company_email?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogBookApprovalUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
    weekly_submission?: WeeklySubmissionUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type LogBookApprovalUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekly_submission_id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
  }

  export type LogBookApprovalUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekly_submission_id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
  }

  export type FinalClearanceUpdateWithoutItf_officialInput = {
    id?: StringFieldUpdateOperationsInput | string
    coordinator_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    coordinator_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    itf_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_pdf_hash?: NullableStringFieldUpdateOperationsInput | string | null
    itf_stamp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clearance_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    placement?: PlacementUpdateOneRequiredWithoutClearanceNestedInput
  }

  export type FinalClearanceUncheckedUpdateWithoutItf_officialInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    coordinator_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    coordinator_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    itf_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_pdf_hash?: NullableStringFieldUpdateOperationsInput | string | null
    itf_stamp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clearance_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FinalClearanceUncheckedUpdateManyWithoutItf_officialInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    coordinator_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    coordinator_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itf_status?: EnumClearanceStatusFieldUpdateOperationsInput | $Enums.ClearanceStatus
    itf_cleared_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    final_pdf_hash?: NullableStringFieldUpdateOperationsInput | string | null
    itf_stamp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clearance_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jon?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jon?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jon?: StringFieldUpdateOperationsInput | string
  }

  export type DailyLogCreateManyPlacementInput = {
    id?: string
    weekly_submission_id: string
    week_no: number
    log_date: Date | string
    description: string
    image_url?: string | null
    created_timestamp?: Date | string
  }

  export type WeeklySubmissionCreateManyPlacementInput = {
    id?: string
    week_no: number
    status?: $Enums.Status
  }

  export type DailyLogUpdateWithoutPlacementInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    weekly_submission?: WeeklySubmissionUpdateOneRequiredWithoutDaily_logsNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutPlacementInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekly_submission_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogUncheckedUpdateManyWithoutPlacementInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekly_submission_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklySubmissionUpdateWithoutPlacementInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    daily_logs?: DailyLogUpdateManyWithoutWeekly_submissionNestedInput
    approvals?: LogBookApprovalUpdateManyWithoutWeekly_submissionNestedInput
  }

  export type WeeklySubmissionUncheckedUpdateWithoutPlacementInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    daily_logs?: DailyLogUncheckedUpdateManyWithoutWeekly_submissionNestedInput
    approvals?: LogBookApprovalUncheckedUpdateManyWithoutWeekly_submissionNestedInput
  }

  export type WeeklySubmissionUncheckedUpdateManyWithoutPlacementInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type DailyLogCreateManyWeekly_submissionInput = {
    id?: string
    placement_id: string
    week_no: number
    log_date: Date | string
    description: string
    image_url?: string | null
    created_timestamp?: Date | string
  }

  export type LogBookApprovalCreateManyWeekly_submissionInput = {
    id?: string
    supervisor_id: string
    approval_timestamp?: Date | string
    cryptographic_signature_hash: string
  }

  export type DailyLogUpdateWithoutWeekly_submissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    placement?: PlacementUpdateOneRequiredWithoutDaily_logsNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutWeekly_submissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogUncheckedUpdateManyWithoutWeekly_submissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    placement_id?: StringFieldUpdateOperationsInput | string
    week_no?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogBookApprovalUpdateWithoutWeekly_submissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
    supervisor?: UserUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type LogBookApprovalUncheckedUpdateWithoutWeekly_submissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisor_id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
  }

  export type LogBookApprovalUncheckedUpdateManyWithoutWeekly_submissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisor_id?: StringFieldUpdateOperationsInput | string
    approval_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptographic_signature_hash?: StringFieldUpdateOperationsInput | string
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