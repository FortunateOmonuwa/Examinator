
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Examiner
 * 
 */
export type Examiner = $Result.DefaultSelection<Prisma.$ExaminerPayload>
/**
 * Model AuthManager
 * 
 */
export type AuthManager = $Result.DefaultSelection<Prisma.$AuthManagerPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model StudentExam
 * 
 */
export type StudentExam = $Result.DefaultSelection<Prisma.$StudentExamPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model ExamAttempt
 * 
 */
export type ExamAttempt = $Result.DefaultSelection<Prisma.$ExamAttemptPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT',
  EXAMINER: 'EXAMINER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ExamStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ExamStatus = (typeof ExamStatus)[keyof typeof ExamStatus]


export const QuestionType: {
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  MULTICHOICE: 'MULTICHOICE',
  TEXT: 'TEXT'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ExamStatus = $Enums.ExamStatus

export const ExamStatus: typeof $Enums.ExamStatus

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examiner`: Exposes CRUD operations for the **Examiner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examiners
    * const examiners = await prisma.examiner.findMany()
    * ```
    */
  get examiner(): Prisma.ExaminerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authManager`: Exposes CRUD operations for the **AuthManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthManagers
    * const authManagers = await prisma.authManager.findMany()
    * ```
    */
  get authManager(): Prisma.AuthManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentExam`: Exposes CRUD operations for the **StudentExam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentExams
    * const studentExams = await prisma.studentExam.findMany()
    * ```
    */
  get studentExam(): Prisma.StudentExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examAttempt`: Exposes CRUD operations for the **ExamAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamAttempts
    * const examAttempts = await prisma.examAttempt.findMany()
    * ```
    */
  get examAttempt(): Prisma.ExamAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Student: 'Student',
    Examiner: 'Examiner',
    AuthManager: 'AuthManager',
    UserProfile: 'UserProfile',
    Exam: 'Exam',
    StudentExam: 'StudentExam',
    Question: 'Question',
    Option: 'Option',
    ExamAttempt: 'ExamAttempt',
    Answer: 'Answer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "student" | "examiner" | "authManager" | "userProfile" | "exam" | "studentExam" | "question" | "option" | "examAttempt" | "answer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Examiner: {
        payload: Prisma.$ExaminerPayload<ExtArgs>
        fields: Prisma.ExaminerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExaminerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExaminerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload>
          }
          findFirst: {
            args: Prisma.ExaminerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExaminerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload>
          }
          findMany: {
            args: Prisma.ExaminerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload>[]
          }
          create: {
            args: Prisma.ExaminerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload>
          }
          createMany: {
            args: Prisma.ExaminerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExaminerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload>[]
          }
          delete: {
            args: Prisma.ExaminerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload>
          }
          update: {
            args: Prisma.ExaminerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload>
          }
          deleteMany: {
            args: Prisma.ExaminerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExaminerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExaminerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload>[]
          }
          upsert: {
            args: Prisma.ExaminerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminerPayload>
          }
          aggregate: {
            args: Prisma.ExaminerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExaminer>
          }
          groupBy: {
            args: Prisma.ExaminerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExaminerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExaminerCountArgs<ExtArgs>
            result: $Utils.Optional<ExaminerCountAggregateOutputType> | number
          }
        }
      }
      AuthManager: {
        payload: Prisma.$AuthManagerPayload<ExtArgs>
        fields: Prisma.AuthManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload>
          }
          findFirst: {
            args: Prisma.AuthManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload>
          }
          findMany: {
            args: Prisma.AuthManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload>[]
          }
          create: {
            args: Prisma.AuthManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload>
          }
          createMany: {
            args: Prisma.AuthManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload>[]
          }
          delete: {
            args: Prisma.AuthManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload>
          }
          update: {
            args: Prisma.AuthManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload>
          }
          deleteMany: {
            args: Prisma.AuthManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload>[]
          }
          upsert: {
            args: Prisma.AuthManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthManagerPayload>
          }
          aggregate: {
            args: Prisma.AuthManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthManager>
          }
          groupBy: {
            args: Prisma.AuthManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthManagerCountArgs<ExtArgs>
            result: $Utils.Optional<AuthManagerCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      StudentExam: {
        payload: Prisma.$StudentExamPayload<ExtArgs>
        fields: Prisma.StudentExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload>
          }
          findFirst: {
            args: Prisma.StudentExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload>
          }
          findMany: {
            args: Prisma.StudentExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload>[]
          }
          create: {
            args: Prisma.StudentExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload>
          }
          createMany: {
            args: Prisma.StudentExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload>[]
          }
          delete: {
            args: Prisma.StudentExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload>
          }
          update: {
            args: Prisma.StudentExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload>
          }
          deleteMany: {
            args: Prisma.StudentExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload>[]
          }
          upsert: {
            args: Prisma.StudentExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExamPayload>
          }
          aggregate: {
            args: Prisma.StudentExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentExam>
          }
          groupBy: {
            args: Prisma.StudentExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentExamCountArgs<ExtArgs>
            result: $Utils.Optional<StudentExamCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      ExamAttempt: {
        payload: Prisma.$ExamAttemptPayload<ExtArgs>
        fields: Prisma.ExamAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          findFirst: {
            args: Prisma.ExamAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          findMany: {
            args: Prisma.ExamAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>[]
          }
          create: {
            args: Prisma.ExamAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          createMany: {
            args: Prisma.ExamAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>[]
          }
          delete: {
            args: Prisma.ExamAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          update: {
            args: Prisma.ExamAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          deleteMany: {
            args: Prisma.ExamAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>[]
          }
          upsert: {
            args: Prisma.ExamAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          aggregate: {
            args: Prisma.ExamAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamAttempt>
          }
          groupBy: {
            args: Prisma.ExamAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<ExamAttemptCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit
    examiner?: ExaminerOmit
    authManager?: AuthManagerOmit
    userProfile?: UserProfileOmit
    exam?: ExamOmit
    studentExam?: StudentExamOmit
    question?: QuestionOmit
    option?: OptionOmit
    examAttempt?: ExamAttemptOmit
    answer?: AnswerOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    studentExams: number
    examAttempts: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentExams?: boolean | StudentCountOutputTypeCountStudentExamsArgs
    examAttempts?: boolean | StudentCountOutputTypeCountExamAttemptsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentExamWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountExamAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAttemptWhereInput
  }


  /**
   * Count Type ExaminerCountOutputType
   */

  export type ExaminerCountOutputType = {
    exams: number
  }

  export type ExaminerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exams?: boolean | ExaminerCountOutputTypeCountExamsArgs
  }

  // Custom InputTypes
  /**
   * ExaminerCountOutputType without action
   */
  export type ExaminerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminerCountOutputType
     */
    select?: ExaminerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExaminerCountOutputType without action
   */
  export type ExaminerCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    questions: number
    studentExams: number
    examAttempts: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ExamCountOutputTypeCountQuestionsArgs
    studentExams?: boolean | ExamCountOutputTypeCountStudentExamsArgs
    examAttempts?: boolean | ExamCountOutputTypeCountExamAttemptsArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountStudentExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentExamWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountExamAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAttemptWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    options: number
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuestionCountOutputTypeCountOptionsArgs
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type OptionCountOutputType
   */

  export type OptionCountOutputType = {
    answers: number
  }

  export type OptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | OptionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCountOutputType
     */
    select?: OptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type ExamAttemptCountOutputType
   */

  export type ExamAttemptCountOutputType = {
    answers: number
  }

  export type ExamAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | ExamAttemptCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * ExamAttemptCountOutputType without action
   */
  export type ExamAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttemptCountOutputType
     */
    select?: ExamAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamAttemptCountOutputType without action
   */
  export type ExamAttemptCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    options: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | AnswerCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    profileId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    profileId: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    profileId: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    profileId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    profileId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    profileId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    profileId: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
    studentExams?: boolean | Student$studentExamsArgs<ExtArgs>
    examAttempts?: boolean | Student$examAttemptsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    profileId?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profileId", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
    studentExams?: boolean | Student$studentExamsArgs<ExtArgs>
    examAttempts?: boolean | Student$examAttemptsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
      studentExams: Prisma.$StudentExamPayload<ExtArgs>[]
      examAttempts: Prisma.$ExamAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      profileId: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentExams<T extends Student$studentExamsArgs<ExtArgs> = {}>(args?: Subset<T, Student$studentExamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examAttempts<T extends Student$examAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, Student$examAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly profileId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.studentExams
   */
  export type Student$studentExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    where?: StudentExamWhereInput
    orderBy?: StudentExamOrderByWithRelationInput | StudentExamOrderByWithRelationInput[]
    cursor?: StudentExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentExamScalarFieldEnum | StudentExamScalarFieldEnum[]
  }

  /**
   * Student.examAttempts
   */
  export type Student$examAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    where?: ExamAttemptWhereInput
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    cursor?: ExamAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Examiner
   */

  export type AggregateExaminer = {
    _count: ExaminerCountAggregateOutputType | null
    _min: ExaminerMinAggregateOutputType | null
    _max: ExaminerMaxAggregateOutputType | null
  }

  export type ExaminerMinAggregateOutputType = {
    id: string | null
    name: string | null
    profileId: string | null
  }

  export type ExaminerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    profileId: string | null
  }

  export type ExaminerCountAggregateOutputType = {
    id: number
    name: number
    profileId: number
    _all: number
  }


  export type ExaminerMinAggregateInputType = {
    id?: true
    name?: true
    profileId?: true
  }

  export type ExaminerMaxAggregateInputType = {
    id?: true
    name?: true
    profileId?: true
  }

  export type ExaminerCountAggregateInputType = {
    id?: true
    name?: true
    profileId?: true
    _all?: true
  }

  export type ExaminerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examiner to aggregate.
     */
    where?: ExaminerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examiners to fetch.
     */
    orderBy?: ExaminerOrderByWithRelationInput | ExaminerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExaminerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examiners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examiners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examiners
    **/
    _count?: true | ExaminerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExaminerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExaminerMaxAggregateInputType
  }

  export type GetExaminerAggregateType<T extends ExaminerAggregateArgs> = {
        [P in keyof T & keyof AggregateExaminer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExaminer[P]>
      : GetScalarType<T[P], AggregateExaminer[P]>
  }




  export type ExaminerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminerWhereInput
    orderBy?: ExaminerOrderByWithAggregationInput | ExaminerOrderByWithAggregationInput[]
    by: ExaminerScalarFieldEnum[] | ExaminerScalarFieldEnum
    having?: ExaminerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExaminerCountAggregateInputType | true
    _min?: ExaminerMinAggregateInputType
    _max?: ExaminerMaxAggregateInputType
  }

  export type ExaminerGroupByOutputType = {
    id: string
    name: string
    profileId: string
    _count: ExaminerCountAggregateOutputType | null
    _min: ExaminerMinAggregateOutputType | null
    _max: ExaminerMaxAggregateOutputType | null
  }

  type GetExaminerGroupByPayload<T extends ExaminerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExaminerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExaminerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExaminerGroupByOutputType[P]>
            : GetScalarType<T[P], ExaminerGroupByOutputType[P]>
        }
      >
    >


  export type ExaminerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileId?: boolean
    exams?: boolean | Examiner$examsArgs<ExtArgs>
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
    _count?: boolean | ExaminerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examiner"]>

  export type ExaminerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examiner"]>

  export type ExaminerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examiner"]>

  export type ExaminerSelectScalar = {
    id?: boolean
    name?: boolean
    profileId?: boolean
  }

  export type ExaminerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profileId", ExtArgs["result"]["examiner"]>
  export type ExaminerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exams?: boolean | Examiner$examsArgs<ExtArgs>
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
    _count?: boolean | ExaminerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExaminerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type ExaminerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $ExaminerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Examiner"
    objects: {
      exams: Prisma.$ExamPayload<ExtArgs>[]
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      profileId: string
    }, ExtArgs["result"]["examiner"]>
    composites: {}
  }

  type ExaminerGetPayload<S extends boolean | null | undefined | ExaminerDefaultArgs> = $Result.GetResult<Prisma.$ExaminerPayload, S>

  type ExaminerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExaminerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExaminerCountAggregateInputType | true
    }

  export interface ExaminerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Examiner'], meta: { name: 'Examiner' } }
    /**
     * Find zero or one Examiner that matches the filter.
     * @param {ExaminerFindUniqueArgs} args - Arguments to find a Examiner
     * @example
     * // Get one Examiner
     * const examiner = await prisma.examiner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExaminerFindUniqueArgs>(args: SelectSubset<T, ExaminerFindUniqueArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Examiner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExaminerFindUniqueOrThrowArgs} args - Arguments to find a Examiner
     * @example
     * // Get one Examiner
     * const examiner = await prisma.examiner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExaminerFindUniqueOrThrowArgs>(args: SelectSubset<T, ExaminerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examiner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminerFindFirstArgs} args - Arguments to find a Examiner
     * @example
     * // Get one Examiner
     * const examiner = await prisma.examiner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExaminerFindFirstArgs>(args?: SelectSubset<T, ExaminerFindFirstArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examiner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminerFindFirstOrThrowArgs} args - Arguments to find a Examiner
     * @example
     * // Get one Examiner
     * const examiner = await prisma.examiner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExaminerFindFirstOrThrowArgs>(args?: SelectSubset<T, ExaminerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examiners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examiners
     * const examiners = await prisma.examiner.findMany()
     * 
     * // Get first 10 Examiners
     * const examiners = await prisma.examiner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examinerWithIdOnly = await prisma.examiner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExaminerFindManyArgs>(args?: SelectSubset<T, ExaminerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Examiner.
     * @param {ExaminerCreateArgs} args - Arguments to create a Examiner.
     * @example
     * // Create one Examiner
     * const Examiner = await prisma.examiner.create({
     *   data: {
     *     // ... data to create a Examiner
     *   }
     * })
     * 
     */
    create<T extends ExaminerCreateArgs>(args: SelectSubset<T, ExaminerCreateArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Examiners.
     * @param {ExaminerCreateManyArgs} args - Arguments to create many Examiners.
     * @example
     * // Create many Examiners
     * const examiner = await prisma.examiner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExaminerCreateManyArgs>(args?: SelectSubset<T, ExaminerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Examiners and returns the data saved in the database.
     * @param {ExaminerCreateManyAndReturnArgs} args - Arguments to create many Examiners.
     * @example
     * // Create many Examiners
     * const examiner = await prisma.examiner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Examiners and only return the `id`
     * const examinerWithIdOnly = await prisma.examiner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExaminerCreateManyAndReturnArgs>(args?: SelectSubset<T, ExaminerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Examiner.
     * @param {ExaminerDeleteArgs} args - Arguments to delete one Examiner.
     * @example
     * // Delete one Examiner
     * const Examiner = await prisma.examiner.delete({
     *   where: {
     *     // ... filter to delete one Examiner
     *   }
     * })
     * 
     */
    delete<T extends ExaminerDeleteArgs>(args: SelectSubset<T, ExaminerDeleteArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Examiner.
     * @param {ExaminerUpdateArgs} args - Arguments to update one Examiner.
     * @example
     * // Update one Examiner
     * const examiner = await prisma.examiner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExaminerUpdateArgs>(args: SelectSubset<T, ExaminerUpdateArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Examiners.
     * @param {ExaminerDeleteManyArgs} args - Arguments to filter Examiners to delete.
     * @example
     * // Delete a few Examiners
     * const { count } = await prisma.examiner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExaminerDeleteManyArgs>(args?: SelectSubset<T, ExaminerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examiners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examiners
     * const examiner = await prisma.examiner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExaminerUpdateManyArgs>(args: SelectSubset<T, ExaminerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examiners and returns the data updated in the database.
     * @param {ExaminerUpdateManyAndReturnArgs} args - Arguments to update many Examiners.
     * @example
     * // Update many Examiners
     * const examiner = await prisma.examiner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Examiners and only return the `id`
     * const examinerWithIdOnly = await prisma.examiner.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExaminerUpdateManyAndReturnArgs>(args: SelectSubset<T, ExaminerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Examiner.
     * @param {ExaminerUpsertArgs} args - Arguments to update or create a Examiner.
     * @example
     * // Update or create a Examiner
     * const examiner = await prisma.examiner.upsert({
     *   create: {
     *     // ... data to create a Examiner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Examiner we want to update
     *   }
     * })
     */
    upsert<T extends ExaminerUpsertArgs>(args: SelectSubset<T, ExaminerUpsertArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Examiners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminerCountArgs} args - Arguments to filter Examiners to count.
     * @example
     * // Count the number of Examiners
     * const count = await prisma.examiner.count({
     *   where: {
     *     // ... the filter for the Examiners we want to count
     *   }
     * })
    **/
    count<T extends ExaminerCountArgs>(
      args?: Subset<T, ExaminerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExaminerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Examiner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExaminerAggregateArgs>(args: Subset<T, ExaminerAggregateArgs>): Prisma.PrismaPromise<GetExaminerAggregateType<T>>

    /**
     * Group by Examiner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminerGroupByArgs} args - Group by arguments.
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
      T extends ExaminerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExaminerGroupByArgs['orderBy'] }
        : { orderBy?: ExaminerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExaminerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExaminerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Examiner model
   */
  readonly fields: ExaminerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Examiner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExaminerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exams<T extends Examiner$examsArgs<ExtArgs> = {}>(args?: Subset<T, Examiner$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Examiner model
   */
  interface ExaminerFieldRefs {
    readonly id: FieldRef<"Examiner", 'String'>
    readonly name: FieldRef<"Examiner", 'String'>
    readonly profileId: FieldRef<"Examiner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Examiner findUnique
   */
  export type ExaminerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    /**
     * Filter, which Examiner to fetch.
     */
    where: ExaminerWhereUniqueInput
  }

  /**
   * Examiner findUniqueOrThrow
   */
  export type ExaminerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    /**
     * Filter, which Examiner to fetch.
     */
    where: ExaminerWhereUniqueInput
  }

  /**
   * Examiner findFirst
   */
  export type ExaminerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    /**
     * Filter, which Examiner to fetch.
     */
    where?: ExaminerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examiners to fetch.
     */
    orderBy?: ExaminerOrderByWithRelationInput | ExaminerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examiners.
     */
    cursor?: ExaminerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examiners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examiners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examiners.
     */
    distinct?: ExaminerScalarFieldEnum | ExaminerScalarFieldEnum[]
  }

  /**
   * Examiner findFirstOrThrow
   */
  export type ExaminerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    /**
     * Filter, which Examiner to fetch.
     */
    where?: ExaminerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examiners to fetch.
     */
    orderBy?: ExaminerOrderByWithRelationInput | ExaminerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examiners.
     */
    cursor?: ExaminerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examiners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examiners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examiners.
     */
    distinct?: ExaminerScalarFieldEnum | ExaminerScalarFieldEnum[]
  }

  /**
   * Examiner findMany
   */
  export type ExaminerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    /**
     * Filter, which Examiners to fetch.
     */
    where?: ExaminerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examiners to fetch.
     */
    orderBy?: ExaminerOrderByWithRelationInput | ExaminerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examiners.
     */
    cursor?: ExaminerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examiners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examiners.
     */
    skip?: number
    distinct?: ExaminerScalarFieldEnum | ExaminerScalarFieldEnum[]
  }

  /**
   * Examiner create
   */
  export type ExaminerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    /**
     * The data needed to create a Examiner.
     */
    data: XOR<ExaminerCreateInput, ExaminerUncheckedCreateInput>
  }

  /**
   * Examiner createMany
   */
  export type ExaminerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Examiners.
     */
    data: ExaminerCreateManyInput | ExaminerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Examiner createManyAndReturn
   */
  export type ExaminerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * The data used to create many Examiners.
     */
    data: ExaminerCreateManyInput | ExaminerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Examiner update
   */
  export type ExaminerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    /**
     * The data needed to update a Examiner.
     */
    data: XOR<ExaminerUpdateInput, ExaminerUncheckedUpdateInput>
    /**
     * Choose, which Examiner to update.
     */
    where: ExaminerWhereUniqueInput
  }

  /**
   * Examiner updateMany
   */
  export type ExaminerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Examiners.
     */
    data: XOR<ExaminerUpdateManyMutationInput, ExaminerUncheckedUpdateManyInput>
    /**
     * Filter which Examiners to update
     */
    where?: ExaminerWhereInput
    /**
     * Limit how many Examiners to update.
     */
    limit?: number
  }

  /**
   * Examiner updateManyAndReturn
   */
  export type ExaminerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * The data used to update Examiners.
     */
    data: XOR<ExaminerUpdateManyMutationInput, ExaminerUncheckedUpdateManyInput>
    /**
     * Filter which Examiners to update
     */
    where?: ExaminerWhereInput
    /**
     * Limit how many Examiners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Examiner upsert
   */
  export type ExaminerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    /**
     * The filter to search for the Examiner to update in case it exists.
     */
    where: ExaminerWhereUniqueInput
    /**
     * In case the Examiner found by the `where` argument doesn't exist, create a new Examiner with this data.
     */
    create: XOR<ExaminerCreateInput, ExaminerUncheckedCreateInput>
    /**
     * In case the Examiner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExaminerUpdateInput, ExaminerUncheckedUpdateInput>
  }

  /**
   * Examiner delete
   */
  export type ExaminerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    /**
     * Filter which Examiner to delete.
     */
    where: ExaminerWhereUniqueInput
  }

  /**
   * Examiner deleteMany
   */
  export type ExaminerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examiners to delete
     */
    where?: ExaminerWhereInput
    /**
     * Limit how many Examiners to delete.
     */
    limit?: number
  }

  /**
   * Examiner.exams
   */
  export type Examiner$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Examiner without action
   */
  export type ExaminerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
  }


  /**
   * Model AuthManager
   */

  export type AggregateAuthManager = {
    _count: AuthManagerCountAggregateOutputType | null
    _avg: AuthManagerAvgAggregateOutputType | null
    _sum: AuthManagerSumAggregateOutputType | null
    _min: AuthManagerMinAggregateOutputType | null
    _max: AuthManagerMaxAggregateOutputType | null
  }

  export type AuthManagerAvgAggregateOutputType = {
    loginAttempts: number | null
  }

  export type AuthManagerSumAggregateOutputType = {
    loginAttempts: number | null
  }

  export type AuthManagerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshToken: string | null
    refreshTokenExpiresAt: Date | null
    isLoggedIn: boolean | null
    lastLoginAt: Date | null
    lastActivityAt: Date | null
    loginAttempts: number | null
    isLocked: boolean | null
    lockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthManagerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshToken: string | null
    refreshTokenExpiresAt: Date | null
    isLoggedIn: boolean | null
    lastLoginAt: Date | null
    lastActivityAt: Date | null
    loginAttempts: number | null
    isLocked: boolean | null
    lockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthManagerCountAggregateOutputType = {
    id: number
    userId: number
    refreshToken: number
    refreshTokenExpiresAt: number
    isLoggedIn: number
    lastLoginAt: number
    lastActivityAt: number
    loginAttempts: number
    isLocked: number
    lockedUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthManagerAvgAggregateInputType = {
    loginAttempts?: true
  }

  export type AuthManagerSumAggregateInputType = {
    loginAttempts?: true
  }

  export type AuthManagerMinAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    refreshTokenExpiresAt?: true
    isLoggedIn?: true
    lastLoginAt?: true
    lastActivityAt?: true
    loginAttempts?: true
    isLocked?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthManagerMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    refreshTokenExpiresAt?: true
    isLoggedIn?: true
    lastLoginAt?: true
    lastActivityAt?: true
    loginAttempts?: true
    isLocked?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthManagerCountAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    refreshTokenExpiresAt?: true
    isLoggedIn?: true
    lastLoginAt?: true
    lastActivityAt?: true
    loginAttempts?: true
    isLocked?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthManager to aggregate.
     */
    where?: AuthManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthManagers to fetch.
     */
    orderBy?: AuthManagerOrderByWithRelationInput | AuthManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthManagers
    **/
    _count?: true | AuthManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthManagerMaxAggregateInputType
  }

  export type GetAuthManagerAggregateType<T extends AuthManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthManager[P]>
      : GetScalarType<T[P], AggregateAuthManager[P]>
  }




  export type AuthManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthManagerWhereInput
    orderBy?: AuthManagerOrderByWithAggregationInput | AuthManagerOrderByWithAggregationInput[]
    by: AuthManagerScalarFieldEnum[] | AuthManagerScalarFieldEnum
    having?: AuthManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthManagerCountAggregateInputType | true
    _avg?: AuthManagerAvgAggregateInputType
    _sum?: AuthManagerSumAggregateInputType
    _min?: AuthManagerMinAggregateInputType
    _max?: AuthManagerMaxAggregateInputType
  }

  export type AuthManagerGroupByOutputType = {
    id: string
    userId: string
    refreshToken: string | null
    refreshTokenExpiresAt: Date | null
    isLoggedIn: boolean
    lastLoginAt: Date | null
    lastActivityAt: Date | null
    loginAttempts: number
    isLocked: boolean
    lockedUntil: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AuthManagerCountAggregateOutputType | null
    _avg: AuthManagerAvgAggregateOutputType | null
    _sum: AuthManagerSumAggregateOutputType | null
    _min: AuthManagerMinAggregateOutputType | null
    _max: AuthManagerMaxAggregateOutputType | null
  }

  type GetAuthManagerGroupByPayload<T extends AuthManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthManagerGroupByOutputType[P]>
            : GetScalarType<T[P], AuthManagerGroupByOutputType[P]>
        }
      >
    >


  export type AuthManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    refreshTokenExpiresAt?: boolean
    isLoggedIn?: boolean
    lastLoginAt?: boolean
    lastActivityAt?: boolean
    loginAttempts?: boolean
    isLocked?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authManager"]>

  export type AuthManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    refreshTokenExpiresAt?: boolean
    isLoggedIn?: boolean
    lastLoginAt?: boolean
    lastActivityAt?: boolean
    loginAttempts?: boolean
    isLocked?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authManager"]>

  export type AuthManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    refreshTokenExpiresAt?: boolean
    isLoggedIn?: boolean
    lastLoginAt?: boolean
    lastActivityAt?: boolean
    loginAttempts?: boolean
    isLocked?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authManager"]>

  export type AuthManagerSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    refreshTokenExpiresAt?: boolean
    isLoggedIn?: boolean
    lastLoginAt?: boolean
    lastActivityAt?: boolean
    loginAttempts?: boolean
    isLocked?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "refreshToken" | "refreshTokenExpiresAt" | "isLoggedIn" | "lastLoginAt" | "lastActivityAt" | "loginAttempts" | "isLocked" | "lockedUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["authManager"]>
  export type AuthManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type AuthManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type AuthManagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $AuthManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthManager"
    objects: {
      user: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      refreshToken: string | null
      refreshTokenExpiresAt: Date | null
      isLoggedIn: boolean
      lastLoginAt: Date | null
      lastActivityAt: Date | null
      loginAttempts: number
      isLocked: boolean
      lockedUntil: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authManager"]>
    composites: {}
  }

  type AuthManagerGetPayload<S extends boolean | null | undefined | AuthManagerDefaultArgs> = $Result.GetResult<Prisma.$AuthManagerPayload, S>

  type AuthManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthManagerCountAggregateInputType | true
    }

  export interface AuthManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthManager'], meta: { name: 'AuthManager' } }
    /**
     * Find zero or one AuthManager that matches the filter.
     * @param {AuthManagerFindUniqueArgs} args - Arguments to find a AuthManager
     * @example
     * // Get one AuthManager
     * const authManager = await prisma.authManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthManagerFindUniqueArgs>(args: SelectSubset<T, AuthManagerFindUniqueArgs<ExtArgs>>): Prisma__AuthManagerClient<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthManager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthManagerFindUniqueOrThrowArgs} args - Arguments to find a AuthManager
     * @example
     * // Get one AuthManager
     * const authManager = await prisma.authManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthManagerClient<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthManagerFindFirstArgs} args - Arguments to find a AuthManager
     * @example
     * // Get one AuthManager
     * const authManager = await prisma.authManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthManagerFindFirstArgs>(args?: SelectSubset<T, AuthManagerFindFirstArgs<ExtArgs>>): Prisma__AuthManagerClient<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthManager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthManagerFindFirstOrThrowArgs} args - Arguments to find a AuthManager
     * @example
     * // Get one AuthManager
     * const authManager = await prisma.authManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthManagerClient<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthManagers
     * const authManagers = await prisma.authManager.findMany()
     * 
     * // Get first 10 AuthManagers
     * const authManagers = await prisma.authManager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authManagerWithIdOnly = await prisma.authManager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthManagerFindManyArgs>(args?: SelectSubset<T, AuthManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthManager.
     * @param {AuthManagerCreateArgs} args - Arguments to create a AuthManager.
     * @example
     * // Create one AuthManager
     * const AuthManager = await prisma.authManager.create({
     *   data: {
     *     // ... data to create a AuthManager
     *   }
     * })
     * 
     */
    create<T extends AuthManagerCreateArgs>(args: SelectSubset<T, AuthManagerCreateArgs<ExtArgs>>): Prisma__AuthManagerClient<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthManagers.
     * @param {AuthManagerCreateManyArgs} args - Arguments to create many AuthManagers.
     * @example
     * // Create many AuthManagers
     * const authManager = await prisma.authManager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthManagerCreateManyArgs>(args?: SelectSubset<T, AuthManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthManagers and returns the data saved in the database.
     * @param {AuthManagerCreateManyAndReturnArgs} args - Arguments to create many AuthManagers.
     * @example
     * // Create many AuthManagers
     * const authManager = await prisma.authManager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthManagers and only return the `id`
     * const authManagerWithIdOnly = await prisma.authManager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthManager.
     * @param {AuthManagerDeleteArgs} args - Arguments to delete one AuthManager.
     * @example
     * // Delete one AuthManager
     * const AuthManager = await prisma.authManager.delete({
     *   where: {
     *     // ... filter to delete one AuthManager
     *   }
     * })
     * 
     */
    delete<T extends AuthManagerDeleteArgs>(args: SelectSubset<T, AuthManagerDeleteArgs<ExtArgs>>): Prisma__AuthManagerClient<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthManager.
     * @param {AuthManagerUpdateArgs} args - Arguments to update one AuthManager.
     * @example
     * // Update one AuthManager
     * const authManager = await prisma.authManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthManagerUpdateArgs>(args: SelectSubset<T, AuthManagerUpdateArgs<ExtArgs>>): Prisma__AuthManagerClient<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthManagers.
     * @param {AuthManagerDeleteManyArgs} args - Arguments to filter AuthManagers to delete.
     * @example
     * // Delete a few AuthManagers
     * const { count } = await prisma.authManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthManagerDeleteManyArgs>(args?: SelectSubset<T, AuthManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthManagers
     * const authManager = await prisma.authManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthManagerUpdateManyArgs>(args: SelectSubset<T, AuthManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthManagers and returns the data updated in the database.
     * @param {AuthManagerUpdateManyAndReturnArgs} args - Arguments to update many AuthManagers.
     * @example
     * // Update many AuthManagers
     * const authManager = await prisma.authManager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthManagers and only return the `id`
     * const authManagerWithIdOnly = await prisma.authManager.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthManager.
     * @param {AuthManagerUpsertArgs} args - Arguments to update or create a AuthManager.
     * @example
     * // Update or create a AuthManager
     * const authManager = await prisma.authManager.upsert({
     *   create: {
     *     // ... data to create a AuthManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthManager we want to update
     *   }
     * })
     */
    upsert<T extends AuthManagerUpsertArgs>(args: SelectSubset<T, AuthManagerUpsertArgs<ExtArgs>>): Prisma__AuthManagerClient<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthManagerCountArgs} args - Arguments to filter AuthManagers to count.
     * @example
     * // Count the number of AuthManagers
     * const count = await prisma.authManager.count({
     *   where: {
     *     // ... the filter for the AuthManagers we want to count
     *   }
     * })
    **/
    count<T extends AuthManagerCountArgs>(
      args?: Subset<T, AuthManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthManagerAggregateArgs>(args: Subset<T, AuthManagerAggregateArgs>): Prisma.PrismaPromise<GetAuthManagerAggregateType<T>>

    /**
     * Group by AuthManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthManagerGroupByArgs} args - Group by arguments.
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
      T extends AuthManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthManagerGroupByArgs['orderBy'] }
        : { orderBy?: AuthManagerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthManager model
   */
  readonly fields: AuthManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthManager model
   */
  interface AuthManagerFieldRefs {
    readonly id: FieldRef<"AuthManager", 'String'>
    readonly userId: FieldRef<"AuthManager", 'String'>
    readonly refreshToken: FieldRef<"AuthManager", 'String'>
    readonly refreshTokenExpiresAt: FieldRef<"AuthManager", 'DateTime'>
    readonly isLoggedIn: FieldRef<"AuthManager", 'Boolean'>
    readonly lastLoginAt: FieldRef<"AuthManager", 'DateTime'>
    readonly lastActivityAt: FieldRef<"AuthManager", 'DateTime'>
    readonly loginAttempts: FieldRef<"AuthManager", 'Int'>
    readonly isLocked: FieldRef<"AuthManager", 'Boolean'>
    readonly lockedUntil: FieldRef<"AuthManager", 'DateTime'>
    readonly createdAt: FieldRef<"AuthManager", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthManager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthManager findUnique
   */
  export type AuthManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    /**
     * Filter, which AuthManager to fetch.
     */
    where: AuthManagerWhereUniqueInput
  }

  /**
   * AuthManager findUniqueOrThrow
   */
  export type AuthManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    /**
     * Filter, which AuthManager to fetch.
     */
    where: AuthManagerWhereUniqueInput
  }

  /**
   * AuthManager findFirst
   */
  export type AuthManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    /**
     * Filter, which AuthManager to fetch.
     */
    where?: AuthManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthManagers to fetch.
     */
    orderBy?: AuthManagerOrderByWithRelationInput | AuthManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthManagers.
     */
    cursor?: AuthManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthManagers.
     */
    distinct?: AuthManagerScalarFieldEnum | AuthManagerScalarFieldEnum[]
  }

  /**
   * AuthManager findFirstOrThrow
   */
  export type AuthManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    /**
     * Filter, which AuthManager to fetch.
     */
    where?: AuthManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthManagers to fetch.
     */
    orderBy?: AuthManagerOrderByWithRelationInput | AuthManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthManagers.
     */
    cursor?: AuthManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthManagers.
     */
    distinct?: AuthManagerScalarFieldEnum | AuthManagerScalarFieldEnum[]
  }

  /**
   * AuthManager findMany
   */
  export type AuthManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    /**
     * Filter, which AuthManagers to fetch.
     */
    where?: AuthManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthManagers to fetch.
     */
    orderBy?: AuthManagerOrderByWithRelationInput | AuthManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthManagers.
     */
    cursor?: AuthManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthManagers.
     */
    skip?: number
    distinct?: AuthManagerScalarFieldEnum | AuthManagerScalarFieldEnum[]
  }

  /**
   * AuthManager create
   */
  export type AuthManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthManager.
     */
    data: XOR<AuthManagerCreateInput, AuthManagerUncheckedCreateInput>
  }

  /**
   * AuthManager createMany
   */
  export type AuthManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthManagers.
     */
    data: AuthManagerCreateManyInput | AuthManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthManager createManyAndReturn
   */
  export type AuthManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * The data used to create many AuthManagers.
     */
    data: AuthManagerCreateManyInput | AuthManagerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthManager update
   */
  export type AuthManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthManager.
     */
    data: XOR<AuthManagerUpdateInput, AuthManagerUncheckedUpdateInput>
    /**
     * Choose, which AuthManager to update.
     */
    where: AuthManagerWhereUniqueInput
  }

  /**
   * AuthManager updateMany
   */
  export type AuthManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthManagers.
     */
    data: XOR<AuthManagerUpdateManyMutationInput, AuthManagerUncheckedUpdateManyInput>
    /**
     * Filter which AuthManagers to update
     */
    where?: AuthManagerWhereInput
    /**
     * Limit how many AuthManagers to update.
     */
    limit?: number
  }

  /**
   * AuthManager updateManyAndReturn
   */
  export type AuthManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * The data used to update AuthManagers.
     */
    data: XOR<AuthManagerUpdateManyMutationInput, AuthManagerUncheckedUpdateManyInput>
    /**
     * Filter which AuthManagers to update
     */
    where?: AuthManagerWhereInput
    /**
     * Limit how many AuthManagers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthManager upsert
   */
  export type AuthManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthManager to update in case it exists.
     */
    where: AuthManagerWhereUniqueInput
    /**
     * In case the AuthManager found by the `where` argument doesn't exist, create a new AuthManager with this data.
     */
    create: XOR<AuthManagerCreateInput, AuthManagerUncheckedCreateInput>
    /**
     * In case the AuthManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthManagerUpdateInput, AuthManagerUncheckedUpdateInput>
  }

  /**
   * AuthManager delete
   */
  export type AuthManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    /**
     * Filter which AuthManager to delete.
     */
    where: AuthManagerWhereUniqueInput
  }

  /**
   * AuthManager deleteMany
   */
  export type AuthManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthManagers to delete
     */
    where?: AuthManagerWhereInput
    /**
     * Limit how many AuthManagers to delete.
     */
    limit?: number
  }

  /**
   * AuthManager without action
   */
  export type AuthManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    dateCreated: Date | null
    dateUpdated: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    dateCreated: Date | null
    dateUpdated: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    dateCreated: number
    dateUpdated: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    dateCreated?: true
    dateUpdated?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    dateCreated?: true
    dateUpdated?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    dateCreated?: true
    dateUpdated?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated: Date
    dateUpdated: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    authManager?: boolean | UserProfile$authManagerArgs<ExtArgs>
    examiner?: boolean | UserProfile$examinerArgs<ExtArgs>
    student?: boolean | UserProfile$studentArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "dateCreated" | "dateUpdated", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authManager?: boolean | UserProfile$authManagerArgs<ExtArgs>
    examiner?: boolean | UserProfile$examinerArgs<ExtArgs>
    student?: boolean | UserProfile$studentArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      authManager: Prisma.$AuthManagerPayload<ExtArgs> | null
      examiner: Prisma.$ExaminerPayload<ExtArgs> | null
      student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.Role
      dateCreated: Date
      dateUpdated: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authManager<T extends UserProfile$authManagerArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$authManagerArgs<ExtArgs>>): Prisma__AuthManagerClient<$Result.GetResult<Prisma.$AuthManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    examiner<T extends UserProfile$examinerArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$examinerArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends UserProfile$studentArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly email: FieldRef<"UserProfile", 'String'>
    readonly passwordHash: FieldRef<"UserProfile", 'String'>
    readonly role: FieldRef<"UserProfile", 'Role'>
    readonly dateCreated: FieldRef<"UserProfile", 'DateTime'>
    readonly dateUpdated: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile.authManager
   */
  export type UserProfile$authManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthManager
     */
    select?: AuthManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthManager
     */
    omit?: AuthManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthManagerInclude<ExtArgs> | null
    where?: AuthManagerWhereInput
  }

  /**
   * UserProfile.examiner
   */
  export type UserProfile$examinerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examiner
     */
    select?: ExaminerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examiner
     */
    omit?: ExaminerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminerInclude<ExtArgs> | null
    where?: ExaminerWhereInput
  }

  /**
   * UserProfile.student
   */
  export type UserProfile$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    stipulatedTime: number | null
  }

  export type ExamSumAggregateOutputType = {
    stipulatedTime: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    subject: string | null
    link: string | null
    creatorId: string | null
    enforceTimeLimit: boolean | null
    stipulatedTime: number | null
    dateCreated: Date | null
    dateUpdated: Date | null
    isPublic: boolean | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    subject: string | null
    link: string | null
    creatorId: string | null
    enforceTimeLimit: boolean | null
    stipulatedTime: number | null
    dateCreated: Date | null
    dateUpdated: Date | null
    isPublic: boolean | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    description: number
    subject: number
    link: number
    creatorId: number
    enforceTimeLimit: number
    stipulatedTime: number
    dateCreated: number
    dateUpdated: number
    isPublic: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    stipulatedTime?: true
  }

  export type ExamSumAggregateInputType = {
    stipulatedTime?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    subject?: true
    link?: true
    creatorId?: true
    enforceTimeLimit?: true
    stipulatedTime?: true
    dateCreated?: true
    dateUpdated?: true
    isPublic?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    subject?: true
    link?: true
    creatorId?: true
    enforceTimeLimit?: true
    stipulatedTime?: true
    dateCreated?: true
    dateUpdated?: true
    isPublic?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    subject?: true
    link?: true
    creatorId?: true
    enforceTimeLimit?: true
    stipulatedTime?: true
    dateCreated?: true
    dateUpdated?: true
    isPublic?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    title: string
    description: string
    subject: string
    link: string
    creatorId: string
    enforceTimeLimit: boolean
    stipulatedTime: number
    dateCreated: Date
    dateUpdated: Date
    isPublic: boolean
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    subject?: boolean
    link?: boolean
    creatorId?: boolean
    enforceTimeLimit?: boolean
    stipulatedTime?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    isPublic?: boolean
    creator?: boolean | ExaminerDefaultArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    studentExams?: boolean | Exam$studentExamsArgs<ExtArgs>
    examAttempts?: boolean | Exam$examAttemptsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    subject?: boolean
    link?: boolean
    creatorId?: boolean
    enforceTimeLimit?: boolean
    stipulatedTime?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    isPublic?: boolean
    creator?: boolean | ExaminerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    subject?: boolean
    link?: boolean
    creatorId?: boolean
    enforceTimeLimit?: boolean
    stipulatedTime?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    isPublic?: boolean
    creator?: boolean | ExaminerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    subject?: boolean
    link?: boolean
    creatorId?: boolean
    enforceTimeLimit?: boolean
    stipulatedTime?: boolean
    dateCreated?: boolean
    dateUpdated?: boolean
    isPublic?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "subject" | "link" | "creatorId" | "enforceTimeLimit" | "stipulatedTime" | "dateCreated" | "dateUpdated" | "isPublic", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | ExaminerDefaultArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    studentExams?: boolean | Exam$studentExamsArgs<ExtArgs>
    examAttempts?: boolean | Exam$examAttemptsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | ExaminerDefaultArgs<ExtArgs>
  }
  export type ExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | ExaminerDefaultArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      creator: Prisma.$ExaminerPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      studentExams: Prisma.$StudentExamPayload<ExtArgs>[]
      examAttempts: Prisma.$ExamAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      subject: string
      link: string
      creatorId: string
      enforceTimeLimit: boolean
      stipulatedTime: number
      dateCreated: Date
      dateUpdated: Date
      isPublic: boolean
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends ExaminerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExaminerDefaultArgs<ExtArgs>>): Prisma__ExaminerClient<$Result.GetResult<Prisma.$ExaminerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Exam$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentExams<T extends Exam$studentExamsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$studentExamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examAttempts<T extends Exam$examAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$examAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exam model
   */
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly description: FieldRef<"Exam", 'String'>
    readonly subject: FieldRef<"Exam", 'String'>
    readonly link: FieldRef<"Exam", 'String'>
    readonly creatorId: FieldRef<"Exam", 'String'>
    readonly enforceTimeLimit: FieldRef<"Exam", 'Boolean'>
    readonly stipulatedTime: FieldRef<"Exam", 'Int'>
    readonly dateCreated: FieldRef<"Exam", 'DateTime'>
    readonly dateUpdated: FieldRef<"Exam", 'DateTime'>
    readonly isPublic: FieldRef<"Exam", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam updateManyAndReturn
   */
  export type ExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam.questions
   */
  export type Exam$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Exam.studentExams
   */
  export type Exam$studentExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    where?: StudentExamWhereInput
    orderBy?: StudentExamOrderByWithRelationInput | StudentExamOrderByWithRelationInput[]
    cursor?: StudentExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentExamScalarFieldEnum | StudentExamScalarFieldEnum[]
  }

  /**
   * Exam.examAttempts
   */
  export type Exam$examAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    where?: ExamAttemptWhereInput
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    cursor?: ExamAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model StudentExam
   */

  export type AggregateStudentExam = {
    _count: StudentExamCountAggregateOutputType | null
    _avg: StudentExamAvgAggregateOutputType | null
    _sum: StudentExamSumAggregateOutputType | null
    _min: StudentExamMinAggregateOutputType | null
    _max: StudentExamMaxAggregateOutputType | null
  }

  export type StudentExamAvgAggregateOutputType = {
    timeSpent: number | null
    score: number | null
  }

  export type StudentExamSumAggregateOutputType = {
    timeSpent: number | null
    score: number | null
  }

  export type StudentExamMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    examId: string | null
    status: $Enums.ExamStatus | null
    startedAt: Date | null
    completedAt: Date | null
    timeSpent: number | null
    score: number | null
  }

  export type StudentExamMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    examId: string | null
    status: $Enums.ExamStatus | null
    startedAt: Date | null
    completedAt: Date | null
    timeSpent: number | null
    score: number | null
  }

  export type StudentExamCountAggregateOutputType = {
    id: number
    studentId: number
    examId: number
    status: number
    startedAt: number
    completedAt: number
    timeSpent: number
    score: number
    _all: number
  }


  export type StudentExamAvgAggregateInputType = {
    timeSpent?: true
    score?: true
  }

  export type StudentExamSumAggregateInputType = {
    timeSpent?: true
    score?: true
  }

  export type StudentExamMinAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    timeSpent?: true
    score?: true
  }

  export type StudentExamMaxAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    timeSpent?: true
    score?: true
  }

  export type StudentExamCountAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    timeSpent?: true
    score?: true
    _all?: true
  }

  export type StudentExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentExam to aggregate.
     */
    where?: StudentExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExams to fetch.
     */
    orderBy?: StudentExamOrderByWithRelationInput | StudentExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentExams
    **/
    _count?: true | StudentExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentExamMaxAggregateInputType
  }

  export type GetStudentExamAggregateType<T extends StudentExamAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentExam[P]>
      : GetScalarType<T[P], AggregateStudentExam[P]>
  }




  export type StudentExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentExamWhereInput
    orderBy?: StudentExamOrderByWithAggregationInput | StudentExamOrderByWithAggregationInput[]
    by: StudentExamScalarFieldEnum[] | StudentExamScalarFieldEnum
    having?: StudentExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentExamCountAggregateInputType | true
    _avg?: StudentExamAvgAggregateInputType
    _sum?: StudentExamSumAggregateInputType
    _min?: StudentExamMinAggregateInputType
    _max?: StudentExamMaxAggregateInputType
  }

  export type StudentExamGroupByOutputType = {
    id: string
    studentId: string
    examId: string
    status: $Enums.ExamStatus
    startedAt: Date | null
    completedAt: Date | null
    timeSpent: number
    score: number | null
    _count: StudentExamCountAggregateOutputType | null
    _avg: StudentExamAvgAggregateOutputType | null
    _sum: StudentExamSumAggregateOutputType | null
    _min: StudentExamMinAggregateOutputType | null
    _max: StudentExamMaxAggregateOutputType | null
  }

  type GetStudentExamGroupByPayload<T extends StudentExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentExamGroupByOutputType[P]>
            : GetScalarType<T[P], StudentExamGroupByOutputType[P]>
        }
      >
    >


  export type StudentExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeSpent?: boolean
    score?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentExam"]>

  export type StudentExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeSpent?: boolean
    score?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentExam"]>

  export type StudentExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeSpent?: boolean
    score?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentExam"]>

  export type StudentExamSelectScalar = {
    id?: boolean
    studentId?: boolean
    examId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeSpent?: boolean
    score?: boolean
  }

  export type StudentExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "examId" | "status" | "startedAt" | "completedAt" | "timeSpent" | "score", ExtArgs["result"]["studentExam"]>
  export type StudentExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type StudentExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type StudentExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $StudentExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentExam"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      exam: Prisma.$ExamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      examId: string
      status: $Enums.ExamStatus
      startedAt: Date | null
      completedAt: Date | null
      timeSpent: number
      score: number | null
    }, ExtArgs["result"]["studentExam"]>
    composites: {}
  }

  type StudentExamGetPayload<S extends boolean | null | undefined | StudentExamDefaultArgs> = $Result.GetResult<Prisma.$StudentExamPayload, S>

  type StudentExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentExamCountAggregateInputType | true
    }

  export interface StudentExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentExam'], meta: { name: 'StudentExam' } }
    /**
     * Find zero or one StudentExam that matches the filter.
     * @param {StudentExamFindUniqueArgs} args - Arguments to find a StudentExam
     * @example
     * // Get one StudentExam
     * const studentExam = await prisma.studentExam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentExamFindUniqueArgs>(args: SelectSubset<T, StudentExamFindUniqueArgs<ExtArgs>>): Prisma__StudentExamClient<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentExam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentExamFindUniqueOrThrowArgs} args - Arguments to find a StudentExam
     * @example
     * // Get one StudentExam
     * const studentExam = await prisma.studentExam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentExamFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentExamClient<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentExam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExamFindFirstArgs} args - Arguments to find a StudentExam
     * @example
     * // Get one StudentExam
     * const studentExam = await prisma.studentExam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentExamFindFirstArgs>(args?: SelectSubset<T, StudentExamFindFirstArgs<ExtArgs>>): Prisma__StudentExamClient<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentExam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExamFindFirstOrThrowArgs} args - Arguments to find a StudentExam
     * @example
     * // Get one StudentExam
     * const studentExam = await prisma.studentExam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentExamFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentExamClient<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentExams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentExams
     * const studentExams = await prisma.studentExam.findMany()
     * 
     * // Get first 10 StudentExams
     * const studentExams = await prisma.studentExam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentExamWithIdOnly = await prisma.studentExam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentExamFindManyArgs>(args?: SelectSubset<T, StudentExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentExam.
     * @param {StudentExamCreateArgs} args - Arguments to create a StudentExam.
     * @example
     * // Create one StudentExam
     * const StudentExam = await prisma.studentExam.create({
     *   data: {
     *     // ... data to create a StudentExam
     *   }
     * })
     * 
     */
    create<T extends StudentExamCreateArgs>(args: SelectSubset<T, StudentExamCreateArgs<ExtArgs>>): Prisma__StudentExamClient<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentExams.
     * @param {StudentExamCreateManyArgs} args - Arguments to create many StudentExams.
     * @example
     * // Create many StudentExams
     * const studentExam = await prisma.studentExam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentExamCreateManyArgs>(args?: SelectSubset<T, StudentExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentExams and returns the data saved in the database.
     * @param {StudentExamCreateManyAndReturnArgs} args - Arguments to create many StudentExams.
     * @example
     * // Create many StudentExams
     * const studentExam = await prisma.studentExam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentExams and only return the `id`
     * const studentExamWithIdOnly = await prisma.studentExam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentExamCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentExam.
     * @param {StudentExamDeleteArgs} args - Arguments to delete one StudentExam.
     * @example
     * // Delete one StudentExam
     * const StudentExam = await prisma.studentExam.delete({
     *   where: {
     *     // ... filter to delete one StudentExam
     *   }
     * })
     * 
     */
    delete<T extends StudentExamDeleteArgs>(args: SelectSubset<T, StudentExamDeleteArgs<ExtArgs>>): Prisma__StudentExamClient<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentExam.
     * @param {StudentExamUpdateArgs} args - Arguments to update one StudentExam.
     * @example
     * // Update one StudentExam
     * const studentExam = await prisma.studentExam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentExamUpdateArgs>(args: SelectSubset<T, StudentExamUpdateArgs<ExtArgs>>): Prisma__StudentExamClient<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentExams.
     * @param {StudentExamDeleteManyArgs} args - Arguments to filter StudentExams to delete.
     * @example
     * // Delete a few StudentExams
     * const { count } = await prisma.studentExam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentExamDeleteManyArgs>(args?: SelectSubset<T, StudentExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentExams
     * const studentExam = await prisma.studentExam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentExamUpdateManyArgs>(args: SelectSubset<T, StudentExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentExams and returns the data updated in the database.
     * @param {StudentExamUpdateManyAndReturnArgs} args - Arguments to update many StudentExams.
     * @example
     * // Update many StudentExams
     * const studentExam = await prisma.studentExam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentExams and only return the `id`
     * const studentExamWithIdOnly = await prisma.studentExam.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentExamUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentExam.
     * @param {StudentExamUpsertArgs} args - Arguments to update or create a StudentExam.
     * @example
     * // Update or create a StudentExam
     * const studentExam = await prisma.studentExam.upsert({
     *   create: {
     *     // ... data to create a StudentExam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentExam we want to update
     *   }
     * })
     */
    upsert<T extends StudentExamUpsertArgs>(args: SelectSubset<T, StudentExamUpsertArgs<ExtArgs>>): Prisma__StudentExamClient<$Result.GetResult<Prisma.$StudentExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExamCountArgs} args - Arguments to filter StudentExams to count.
     * @example
     * // Count the number of StudentExams
     * const count = await prisma.studentExam.count({
     *   where: {
     *     // ... the filter for the StudentExams we want to count
     *   }
     * })
    **/
    count<T extends StudentExamCountArgs>(
      args?: Subset<T, StudentExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentExamAggregateArgs>(args: Subset<T, StudentExamAggregateArgs>): Prisma.PrismaPromise<GetStudentExamAggregateType<T>>

    /**
     * Group by StudentExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExamGroupByArgs} args - Group by arguments.
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
      T extends StudentExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentExamGroupByArgs['orderBy'] }
        : { orderBy?: StudentExamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentExam model
   */
  readonly fields: StudentExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentExam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentExam model
   */
  interface StudentExamFieldRefs {
    readonly id: FieldRef<"StudentExam", 'String'>
    readonly studentId: FieldRef<"StudentExam", 'String'>
    readonly examId: FieldRef<"StudentExam", 'String'>
    readonly status: FieldRef<"StudentExam", 'ExamStatus'>
    readonly startedAt: FieldRef<"StudentExam", 'DateTime'>
    readonly completedAt: FieldRef<"StudentExam", 'DateTime'>
    readonly timeSpent: FieldRef<"StudentExam", 'Int'>
    readonly score: FieldRef<"StudentExam", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * StudentExam findUnique
   */
  export type StudentExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    /**
     * Filter, which StudentExam to fetch.
     */
    where: StudentExamWhereUniqueInput
  }

  /**
   * StudentExam findUniqueOrThrow
   */
  export type StudentExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    /**
     * Filter, which StudentExam to fetch.
     */
    where: StudentExamWhereUniqueInput
  }

  /**
   * StudentExam findFirst
   */
  export type StudentExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    /**
     * Filter, which StudentExam to fetch.
     */
    where?: StudentExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExams to fetch.
     */
    orderBy?: StudentExamOrderByWithRelationInput | StudentExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentExams.
     */
    cursor?: StudentExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentExams.
     */
    distinct?: StudentExamScalarFieldEnum | StudentExamScalarFieldEnum[]
  }

  /**
   * StudentExam findFirstOrThrow
   */
  export type StudentExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    /**
     * Filter, which StudentExam to fetch.
     */
    where?: StudentExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExams to fetch.
     */
    orderBy?: StudentExamOrderByWithRelationInput | StudentExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentExams.
     */
    cursor?: StudentExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentExams.
     */
    distinct?: StudentExamScalarFieldEnum | StudentExamScalarFieldEnum[]
  }

  /**
   * StudentExam findMany
   */
  export type StudentExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    /**
     * Filter, which StudentExams to fetch.
     */
    where?: StudentExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExams to fetch.
     */
    orderBy?: StudentExamOrderByWithRelationInput | StudentExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentExams.
     */
    cursor?: StudentExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExams.
     */
    skip?: number
    distinct?: StudentExamScalarFieldEnum | StudentExamScalarFieldEnum[]
  }

  /**
   * StudentExam create
   */
  export type StudentExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentExam.
     */
    data: XOR<StudentExamCreateInput, StudentExamUncheckedCreateInput>
  }

  /**
   * StudentExam createMany
   */
  export type StudentExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentExams.
     */
    data: StudentExamCreateManyInput | StudentExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentExam createManyAndReturn
   */
  export type StudentExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * The data used to create many StudentExams.
     */
    data: StudentExamCreateManyInput | StudentExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentExam update
   */
  export type StudentExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentExam.
     */
    data: XOR<StudentExamUpdateInput, StudentExamUncheckedUpdateInput>
    /**
     * Choose, which StudentExam to update.
     */
    where: StudentExamWhereUniqueInput
  }

  /**
   * StudentExam updateMany
   */
  export type StudentExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentExams.
     */
    data: XOR<StudentExamUpdateManyMutationInput, StudentExamUncheckedUpdateManyInput>
    /**
     * Filter which StudentExams to update
     */
    where?: StudentExamWhereInput
    /**
     * Limit how many StudentExams to update.
     */
    limit?: number
  }

  /**
   * StudentExam updateManyAndReturn
   */
  export type StudentExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * The data used to update StudentExams.
     */
    data: XOR<StudentExamUpdateManyMutationInput, StudentExamUncheckedUpdateManyInput>
    /**
     * Filter which StudentExams to update
     */
    where?: StudentExamWhereInput
    /**
     * Limit how many StudentExams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentExam upsert
   */
  export type StudentExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentExam to update in case it exists.
     */
    where: StudentExamWhereUniqueInput
    /**
     * In case the StudentExam found by the `where` argument doesn't exist, create a new StudentExam with this data.
     */
    create: XOR<StudentExamCreateInput, StudentExamUncheckedCreateInput>
    /**
     * In case the StudentExam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentExamUpdateInput, StudentExamUncheckedUpdateInput>
  }

  /**
   * StudentExam delete
   */
  export type StudentExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
    /**
     * Filter which StudentExam to delete.
     */
    where: StudentExamWhereUniqueInput
  }

  /**
   * StudentExam deleteMany
   */
  export type StudentExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentExams to delete
     */
    where?: StudentExamWhereInput
    /**
     * Limit how many StudentExams to delete.
     */
    limit?: number
  }

  /**
   * StudentExam without action
   */
  export type StudentExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExam
     */
    select?: StudentExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExam
     */
    omit?: StudentExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExamInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    examId: string | null
    required: boolean | null
    type: $Enums.QuestionType | null
    expectedAnswer: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    examId: string | null
    required: boolean | null
    type: $Enums.QuestionType | null
    expectedAnswer: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    examId: number
    required: number
    type: number
    expectedAnswer: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    examId?: true
    required?: true
    type?: true
    expectedAnswer?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    examId?: true
    required?: true
    type?: true
    expectedAnswer?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    examId?: true
    required?: true
    type?: true
    expectedAnswer?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    examId: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer: string | null
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    examId?: boolean
    required?: boolean
    type?: boolean
    expectedAnswer?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    examId?: boolean
    required?: boolean
    type?: boolean
    expectedAnswer?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    examId?: boolean
    required?: boolean
    type?: boolean
    expectedAnswer?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    examId?: boolean
    required?: boolean
    type?: boolean
    expectedAnswer?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "examId" | "required" | "type" | "expectedAnswer", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      options: Prisma.$OptionPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      examId: string
      required: boolean
      type: $Enums.QuestionType
      expectedAnswer: string | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Question$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly examId: FieldRef<"Question", 'String'>
    readonly required: FieldRef<"Question", 'Boolean'>
    readonly type: FieldRef<"Question", 'QuestionType'>
    readonly expectedAnswer: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.options
   */
  export type Question$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionMinAggregateOutputType = {
    id: string | null
    text: string | null
    questionId: string | null
    isCorrect: boolean | null
  }

  export type OptionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    questionId: string | null
    isCorrect: boolean | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    text: number
    questionId: number
    isCorrect: number
    _all: number
  }


  export type OptionMinAggregateInputType = {
    id?: true
    text?: true
    questionId?: true
    isCorrect?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    text?: true
    questionId?: true
    isCorrect?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    text?: true
    questionId?: true
    isCorrect?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: string
    text: string
    questionId: string
    isCorrect: boolean
    _count: OptionCountAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    questionId?: boolean
    isCorrect?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answers?: boolean | Option$answersArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    questionId?: boolean
    isCorrect?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    questionId?: boolean
    isCorrect?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    text?: boolean
    questionId?: boolean
    isCorrect?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "questionId" | "isCorrect", ExtArgs["result"]["option"]>
  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answers?: boolean | Option$answersArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type OptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      questionId: string
      isCorrect: boolean
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {OptionUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.updateManyAndReturn({
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
    updateManyAndReturn<T extends OptionUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Option$answersArgs<ExtArgs> = {}>(args?: Subset<T, Option$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'String'>
    readonly text: FieldRef<"Option", 'String'>
    readonly questionId: FieldRef<"Option", 'String'>
    readonly isCorrect: FieldRef<"Option", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option createManyAndReturn
   */
  export type OptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option updateManyAndReturn
   */
  export type OptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option.answers
   */
  export type Option$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
  }


  /**
   * Model ExamAttempt
   */

  export type AggregateExamAttempt = {
    _count: ExamAttemptCountAggregateOutputType | null
    _avg: ExamAttemptAvgAggregateOutputType | null
    _sum: ExamAttemptSumAggregateOutputType | null
    _min: ExamAttemptMinAggregateOutputType | null
    _max: ExamAttemptMaxAggregateOutputType | null
  }

  export type ExamAttemptAvgAggregateOutputType = {
    totalScore: number | null
  }

  export type ExamAttemptSumAggregateOutputType = {
    totalScore: number | null
  }

  export type ExamAttemptMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    examId: string | null
    startTime: Date | null
    submittedAt: Date | null
    totalScore: number | null
    responderEmal: string | null
    responderName: string | null
  }

  export type ExamAttemptMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    examId: string | null
    startTime: Date | null
    submittedAt: Date | null
    totalScore: number | null
    responderEmal: string | null
    responderName: string | null
  }

  export type ExamAttemptCountAggregateOutputType = {
    id: number
    studentId: number
    examId: number
    startTime: number
    submittedAt: number
    totalScore: number
    responderEmal: number
    responderName: number
    _all: number
  }


  export type ExamAttemptAvgAggregateInputType = {
    totalScore?: true
  }

  export type ExamAttemptSumAggregateInputType = {
    totalScore?: true
  }

  export type ExamAttemptMinAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    startTime?: true
    submittedAt?: true
    totalScore?: true
    responderEmal?: true
    responderName?: true
  }

  export type ExamAttemptMaxAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    startTime?: true
    submittedAt?: true
    totalScore?: true
    responderEmal?: true
    responderName?: true
  }

  export type ExamAttemptCountAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    startTime?: true
    submittedAt?: true
    totalScore?: true
    responderEmal?: true
    responderName?: true
    _all?: true
  }

  export type ExamAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAttempt to aggregate.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamAttempts
    **/
    _count?: true | ExamAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamAttemptMaxAggregateInputType
  }

  export type GetExamAttemptAggregateType<T extends ExamAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateExamAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamAttempt[P]>
      : GetScalarType<T[P], AggregateExamAttempt[P]>
  }




  export type ExamAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAttemptWhereInput
    orderBy?: ExamAttemptOrderByWithAggregationInput | ExamAttemptOrderByWithAggregationInput[]
    by: ExamAttemptScalarFieldEnum[] | ExamAttemptScalarFieldEnum
    having?: ExamAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamAttemptCountAggregateInputType | true
    _avg?: ExamAttemptAvgAggregateInputType
    _sum?: ExamAttemptSumAggregateInputType
    _min?: ExamAttemptMinAggregateInputType
    _max?: ExamAttemptMaxAggregateInputType
  }

  export type ExamAttemptGroupByOutputType = {
    id: string
    studentId: string | null
    examId: string
    startTime: Date | null
    submittedAt: Date
    totalScore: number | null
    responderEmal: string | null
    responderName: string | null
    _count: ExamAttemptCountAggregateOutputType | null
    _avg: ExamAttemptAvgAggregateOutputType | null
    _sum: ExamAttemptSumAggregateOutputType | null
    _min: ExamAttemptMinAggregateOutputType | null
    _max: ExamAttemptMaxAggregateOutputType | null
  }

  type GetExamAttemptGroupByPayload<T extends ExamAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], ExamAttemptGroupByOutputType[P]>
        }
      >
    >


  export type ExamAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    startTime?: boolean
    submittedAt?: boolean
    totalScore?: boolean
    responderEmal?: boolean
    responderName?: boolean
    student?: boolean | ExamAttempt$studentArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    answers?: boolean | ExamAttempt$answersArgs<ExtArgs>
    _count?: boolean | ExamAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAttempt"]>

  export type ExamAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    startTime?: boolean
    submittedAt?: boolean
    totalScore?: boolean
    responderEmal?: boolean
    responderName?: boolean
    student?: boolean | ExamAttempt$studentArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAttempt"]>

  export type ExamAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    startTime?: boolean
    submittedAt?: boolean
    totalScore?: boolean
    responderEmal?: boolean
    responderName?: boolean
    student?: boolean | ExamAttempt$studentArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAttempt"]>

  export type ExamAttemptSelectScalar = {
    id?: boolean
    studentId?: boolean
    examId?: boolean
    startTime?: boolean
    submittedAt?: boolean
    totalScore?: boolean
    responderEmal?: boolean
    responderName?: boolean
  }

  export type ExamAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "examId" | "startTime" | "submittedAt" | "totalScore" | "responderEmal" | "responderName", ExtArgs["result"]["examAttempt"]>
  export type ExamAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | ExamAttempt$studentArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    answers?: boolean | ExamAttempt$answersArgs<ExtArgs>
    _count?: boolean | ExamAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | ExamAttempt$studentArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type ExamAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | ExamAttempt$studentArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $ExamAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamAttempt"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      exam: Prisma.$ExamPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string | null
      examId: string
      startTime: Date | null
      submittedAt: Date
      totalScore: number | null
      responderEmal: string | null
      responderName: string | null
    }, ExtArgs["result"]["examAttempt"]>
    composites: {}
  }

  type ExamAttemptGetPayload<S extends boolean | null | undefined | ExamAttemptDefaultArgs> = $Result.GetResult<Prisma.$ExamAttemptPayload, S>

  type ExamAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamAttemptCountAggregateInputType | true
    }

  export interface ExamAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamAttempt'], meta: { name: 'ExamAttempt' } }
    /**
     * Find zero or one ExamAttempt that matches the filter.
     * @param {ExamAttemptFindUniqueArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamAttemptFindUniqueArgs>(args: SelectSubset<T, ExamAttemptFindUniqueArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamAttemptFindUniqueOrThrowArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptFindFirstArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamAttemptFindFirstArgs>(args?: SelectSubset<T, ExamAttemptFindFirstArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptFindFirstOrThrowArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamAttempts
     * const examAttempts = await prisma.examAttempt.findMany()
     * 
     * // Get first 10 ExamAttempts
     * const examAttempts = await prisma.examAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examAttemptWithIdOnly = await prisma.examAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamAttemptFindManyArgs>(args?: SelectSubset<T, ExamAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamAttempt.
     * @param {ExamAttemptCreateArgs} args - Arguments to create a ExamAttempt.
     * @example
     * // Create one ExamAttempt
     * const ExamAttempt = await prisma.examAttempt.create({
     *   data: {
     *     // ... data to create a ExamAttempt
     *   }
     * })
     * 
     */
    create<T extends ExamAttemptCreateArgs>(args: SelectSubset<T, ExamAttemptCreateArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamAttempts.
     * @param {ExamAttemptCreateManyArgs} args - Arguments to create many ExamAttempts.
     * @example
     * // Create many ExamAttempts
     * const examAttempt = await prisma.examAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamAttemptCreateManyArgs>(args?: SelectSubset<T, ExamAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamAttempts and returns the data saved in the database.
     * @param {ExamAttemptCreateManyAndReturnArgs} args - Arguments to create many ExamAttempts.
     * @example
     * // Create many ExamAttempts
     * const examAttempt = await prisma.examAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamAttempts and only return the `id`
     * const examAttemptWithIdOnly = await prisma.examAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamAttempt.
     * @param {ExamAttemptDeleteArgs} args - Arguments to delete one ExamAttempt.
     * @example
     * // Delete one ExamAttempt
     * const ExamAttempt = await prisma.examAttempt.delete({
     *   where: {
     *     // ... filter to delete one ExamAttempt
     *   }
     * })
     * 
     */
    delete<T extends ExamAttemptDeleteArgs>(args: SelectSubset<T, ExamAttemptDeleteArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamAttempt.
     * @param {ExamAttemptUpdateArgs} args - Arguments to update one ExamAttempt.
     * @example
     * // Update one ExamAttempt
     * const examAttempt = await prisma.examAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamAttemptUpdateArgs>(args: SelectSubset<T, ExamAttemptUpdateArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamAttempts.
     * @param {ExamAttemptDeleteManyArgs} args - Arguments to filter ExamAttempts to delete.
     * @example
     * // Delete a few ExamAttempts
     * const { count } = await prisma.examAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamAttemptDeleteManyArgs>(args?: SelectSubset<T, ExamAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamAttempts
     * const examAttempt = await prisma.examAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamAttemptUpdateManyArgs>(args: SelectSubset<T, ExamAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAttempts and returns the data updated in the database.
     * @param {ExamAttemptUpdateManyAndReturnArgs} args - Arguments to update many ExamAttempts.
     * @example
     * // Update many ExamAttempts
     * const examAttempt = await prisma.examAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamAttempts and only return the `id`
     * const examAttemptWithIdOnly = await prisma.examAttempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamAttempt.
     * @param {ExamAttemptUpsertArgs} args - Arguments to update or create a ExamAttempt.
     * @example
     * // Update or create a ExamAttempt
     * const examAttempt = await prisma.examAttempt.upsert({
     *   create: {
     *     // ... data to create a ExamAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamAttempt we want to update
     *   }
     * })
     */
    upsert<T extends ExamAttemptUpsertArgs>(args: SelectSubset<T, ExamAttemptUpsertArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptCountArgs} args - Arguments to filter ExamAttempts to count.
     * @example
     * // Count the number of ExamAttempts
     * const count = await prisma.examAttempt.count({
     *   where: {
     *     // ... the filter for the ExamAttempts we want to count
     *   }
     * })
    **/
    count<T extends ExamAttemptCountArgs>(
      args?: Subset<T, ExamAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAttemptAggregateArgs>(args: Subset<T, ExamAttemptAggregateArgs>): Prisma.PrismaPromise<GetExamAttemptAggregateType<T>>

    /**
     * Group by ExamAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptGroupByArgs} args - Group by arguments.
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
      T extends ExamAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamAttemptGroupByArgs['orderBy'] }
        : { orderBy?: ExamAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamAttempt model
   */
  readonly fields: ExamAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends ExamAttempt$studentArgs<ExtArgs> = {}>(args?: Subset<T, ExamAttempt$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends ExamAttempt$answersArgs<ExtArgs> = {}>(args?: Subset<T, ExamAttempt$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExamAttempt model
   */
  interface ExamAttemptFieldRefs {
    readonly id: FieldRef<"ExamAttempt", 'String'>
    readonly studentId: FieldRef<"ExamAttempt", 'String'>
    readonly examId: FieldRef<"ExamAttempt", 'String'>
    readonly startTime: FieldRef<"ExamAttempt", 'DateTime'>
    readonly submittedAt: FieldRef<"ExamAttempt", 'DateTime'>
    readonly totalScore: FieldRef<"ExamAttempt", 'Float'>
    readonly responderEmal: FieldRef<"ExamAttempt", 'String'>
    readonly responderName: FieldRef<"ExamAttempt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExamAttempt findUnique
   */
  export type ExamAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt findUniqueOrThrow
   */
  export type ExamAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt findFirst
   */
  export type ExamAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAttempts.
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAttempts.
     */
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * ExamAttempt findFirstOrThrow
   */
  export type ExamAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAttempts.
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAttempts.
     */
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * ExamAttempt findMany
   */
  export type ExamAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempts to fetch.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamAttempts.
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * ExamAttempt create
   */
  export type ExamAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamAttempt.
     */
    data: XOR<ExamAttemptCreateInput, ExamAttemptUncheckedCreateInput>
  }

  /**
   * ExamAttempt createMany
   */
  export type ExamAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamAttempts.
     */
    data: ExamAttemptCreateManyInput | ExamAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamAttempt createManyAndReturn
   */
  export type ExamAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many ExamAttempts.
     */
    data: ExamAttemptCreateManyInput | ExamAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAttempt update
   */
  export type ExamAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamAttempt.
     */
    data: XOR<ExamAttemptUpdateInput, ExamAttemptUncheckedUpdateInput>
    /**
     * Choose, which ExamAttempt to update.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt updateMany
   */
  export type ExamAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamAttempts.
     */
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyInput>
    /**
     * Filter which ExamAttempts to update
     */
    where?: ExamAttemptWhereInput
    /**
     * Limit how many ExamAttempts to update.
     */
    limit?: number
  }

  /**
   * ExamAttempt updateManyAndReturn
   */
  export type ExamAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * The data used to update ExamAttempts.
     */
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyInput>
    /**
     * Filter which ExamAttempts to update
     */
    where?: ExamAttemptWhereInput
    /**
     * Limit how many ExamAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAttempt upsert
   */
  export type ExamAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamAttempt to update in case it exists.
     */
    where: ExamAttemptWhereUniqueInput
    /**
     * In case the ExamAttempt found by the `where` argument doesn't exist, create a new ExamAttempt with this data.
     */
    create: XOR<ExamAttemptCreateInput, ExamAttemptUncheckedCreateInput>
    /**
     * In case the ExamAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamAttemptUpdateInput, ExamAttemptUncheckedUpdateInput>
  }

  /**
   * ExamAttempt delete
   */
  export type ExamAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter which ExamAttempt to delete.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt deleteMany
   */
  export type ExamAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAttempts to delete
     */
    where?: ExamAttemptWhereInput
    /**
     * Limit how many ExamAttempts to delete.
     */
    limit?: number
  }

  /**
   * ExamAttempt.student
   */
  export type ExamAttempt$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * ExamAttempt.answers
   */
  export type ExamAttempt$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * ExamAttempt without action
   */
  export type ExamAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    score: number | null
  }

  export type AnswerSumAggregateOutputType = {
    score: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    attemptId: string | null
    questionId: string | null
    score: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    attemptId: string | null
    questionId: string | null
    score: number | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    attemptId: number
    questionId: number
    textAnswer: number
    score: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    score?: true
  }

  export type AnswerSumAggregateInputType = {
    score?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
    score?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
    score?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
    textAnswer?: true
    score?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    attemptId: string
    questionId: string
    textAnswer: string[]
    score: number | null
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    textAnswer?: boolean
    score?: boolean
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    options?: boolean | Answer$optionsArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    textAnswer?: boolean
    score?: boolean
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    textAnswer?: boolean
    score?: boolean
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    textAnswer?: boolean
    score?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attemptId" | "questionId" | "textAnswer" | "score", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    options?: boolean | Answer$optionsArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | ExamAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      attempt: Prisma.$ExamAttemptPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      options: Prisma.$OptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attemptId: string
      questionId: string
      textAnswer: string[]
      score: number | null
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempt<T extends ExamAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamAttemptDefaultArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Answer$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Answer$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly attemptId: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly textAnswer: FieldRef<"Answer", 'String[]'>
    readonly score: FieldRef<"Answer", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.options
   */
  export type Answer$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profileId: 'profileId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ExaminerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profileId: 'profileId'
  };

  export type ExaminerScalarFieldEnum = (typeof ExaminerScalarFieldEnum)[keyof typeof ExaminerScalarFieldEnum]


  export const AuthManagerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshToken: 'refreshToken',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    isLoggedIn: 'isLoggedIn',
    lastLoginAt: 'lastLoginAt',
    lastActivityAt: 'lastActivityAt',
    loginAttempts: 'loginAttempts',
    isLocked: 'isLocked',
    lockedUntil: 'lockedUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthManagerScalarFieldEnum = (typeof AuthManagerScalarFieldEnum)[keyof typeof AuthManagerScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    dateCreated: 'dateCreated',
    dateUpdated: 'dateUpdated'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    subject: 'subject',
    link: 'link',
    creatorId: 'creatorId',
    enforceTimeLimit: 'enforceTimeLimit',
    stipulatedTime: 'stipulatedTime',
    dateCreated: 'dateCreated',
    dateUpdated: 'dateUpdated',
    isPublic: 'isPublic'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const StudentExamScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    examId: 'examId',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    timeSpent: 'timeSpent',
    score: 'score'
  };

  export type StudentExamScalarFieldEnum = (typeof StudentExamScalarFieldEnum)[keyof typeof StudentExamScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    examId: 'examId',
    required: 'required',
    type: 'type',
    expectedAnswer: 'expectedAnswer'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    questionId: 'questionId',
    isCorrect: 'isCorrect'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const ExamAttemptScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    examId: 'examId',
    startTime: 'startTime',
    submittedAt: 'submittedAt',
    totalScore: 'totalScore',
    responderEmal: 'responderEmal',
    responderName: 'responderName'
  };

  export type ExamAttemptScalarFieldEnum = (typeof ExamAttemptScalarFieldEnum)[keyof typeof ExamAttemptScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    attemptId: 'attemptId',
    questionId: 'questionId',
    textAnswer: 'textAnswer',
    score: 'score'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'ExamStatus'
   */
  export type EnumExamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamStatus'>
    


  /**
   * Reference to a field of type 'ExamStatus[]'
   */
  export type ListEnumExamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: UuidFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    profileId?: UuidFilter<"Student"> | string
    profile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
    studentExams?: StudentExamListRelationFilter
    examAttempts?: ExamAttemptListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    studentExams?: StudentExamOrderByRelationAggregateInput
    examAttempts?: ExamAttemptOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    profile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
    studentExams?: StudentExamListRelationFilter
    examAttempts?: ExamAttemptListRelationFilter
  }, "id" | "profileId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    profileId?: UuidWithAggregatesFilter<"Student"> | string
  }

  export type ExaminerWhereInput = {
    AND?: ExaminerWhereInput | ExaminerWhereInput[]
    OR?: ExaminerWhereInput[]
    NOT?: ExaminerWhereInput | ExaminerWhereInput[]
    id?: UuidFilter<"Examiner"> | string
    name?: StringFilter<"Examiner"> | string
    profileId?: UuidFilter<"Examiner"> | string
    exams?: ExamListRelationFilter
    profile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type ExaminerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    exams?: ExamOrderByRelationAggregateInput
    profile?: UserProfileOrderByWithRelationInput
  }

  export type ExaminerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId?: string
    AND?: ExaminerWhereInput | ExaminerWhereInput[]
    OR?: ExaminerWhereInput[]
    NOT?: ExaminerWhereInput | ExaminerWhereInput[]
    name?: StringFilter<"Examiner"> | string
    exams?: ExamListRelationFilter
    profile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id" | "profileId">

  export type ExaminerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    _count?: ExaminerCountOrderByAggregateInput
    _max?: ExaminerMaxOrderByAggregateInput
    _min?: ExaminerMinOrderByAggregateInput
  }

  export type ExaminerScalarWhereWithAggregatesInput = {
    AND?: ExaminerScalarWhereWithAggregatesInput | ExaminerScalarWhereWithAggregatesInput[]
    OR?: ExaminerScalarWhereWithAggregatesInput[]
    NOT?: ExaminerScalarWhereWithAggregatesInput | ExaminerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Examiner"> | string
    name?: StringWithAggregatesFilter<"Examiner"> | string
    profileId?: UuidWithAggregatesFilter<"Examiner"> | string
  }

  export type AuthManagerWhereInput = {
    AND?: AuthManagerWhereInput | AuthManagerWhereInput[]
    OR?: AuthManagerWhereInput[]
    NOT?: AuthManagerWhereInput | AuthManagerWhereInput[]
    id?: UuidFilter<"AuthManager"> | string
    userId?: UuidFilter<"AuthManager"> | string
    refreshToken?: StringNullableFilter<"AuthManager"> | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AuthManager"> | Date | string | null
    isLoggedIn?: BoolFilter<"AuthManager"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"AuthManager"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"AuthManager"> | Date | string | null
    loginAttempts?: IntFilter<"AuthManager"> | number
    isLocked?: BoolFilter<"AuthManager"> | boolean
    lockedUntil?: DateTimeNullableFilter<"AuthManager"> | Date | string | null
    createdAt?: DateTimeFilter<"AuthManager"> | Date | string
    updatedAt?: DateTimeFilter<"AuthManager"> | Date | string
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type AuthManagerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    isLoggedIn?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    loginAttempts?: SortOrder
    isLocked?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserProfileOrderByWithRelationInput
  }

  export type AuthManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AuthManagerWhereInput | AuthManagerWhereInput[]
    OR?: AuthManagerWhereInput[]
    NOT?: AuthManagerWhereInput | AuthManagerWhereInput[]
    refreshToken?: StringNullableFilter<"AuthManager"> | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AuthManager"> | Date | string | null
    isLoggedIn?: BoolFilter<"AuthManager"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"AuthManager"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"AuthManager"> | Date | string | null
    loginAttempts?: IntFilter<"AuthManager"> | number
    isLocked?: BoolFilter<"AuthManager"> | boolean
    lockedUntil?: DateTimeNullableFilter<"AuthManager"> | Date | string | null
    createdAt?: DateTimeFilter<"AuthManager"> | Date | string
    updatedAt?: DateTimeFilter<"AuthManager"> | Date | string
    user?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "id" | "userId">

  export type AuthManagerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    isLoggedIn?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    loginAttempts?: SortOrder
    isLocked?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthManagerCountOrderByAggregateInput
    _avg?: AuthManagerAvgOrderByAggregateInput
    _max?: AuthManagerMaxOrderByAggregateInput
    _min?: AuthManagerMinOrderByAggregateInput
    _sum?: AuthManagerSumOrderByAggregateInput
  }

  export type AuthManagerScalarWhereWithAggregatesInput = {
    AND?: AuthManagerScalarWhereWithAggregatesInput | AuthManagerScalarWhereWithAggregatesInput[]
    OR?: AuthManagerScalarWhereWithAggregatesInput[]
    NOT?: AuthManagerScalarWhereWithAggregatesInput | AuthManagerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AuthManager"> | string
    userId?: UuidWithAggregatesFilter<"AuthManager"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"AuthManager"> | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"AuthManager"> | Date | string | null
    isLoggedIn?: BoolWithAggregatesFilter<"AuthManager"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"AuthManager"> | Date | string | null
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"AuthManager"> | Date | string | null
    loginAttempts?: IntWithAggregatesFilter<"AuthManager"> | number
    isLocked?: BoolWithAggregatesFilter<"AuthManager"> | boolean
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"AuthManager"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuthManager"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthManager"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: UuidFilter<"UserProfile"> | string
    email?: StringFilter<"UserProfile"> | string
    passwordHash?: StringFilter<"UserProfile"> | string
    role?: EnumRoleFilter<"UserProfile"> | $Enums.Role
    dateCreated?: DateTimeFilter<"UserProfile"> | Date | string
    dateUpdated?: DateTimeFilter<"UserProfile"> | Date | string
    authManager?: XOR<AuthManagerNullableScalarRelationFilter, AuthManagerWhereInput> | null
    examiner?: XOR<ExaminerNullableScalarRelationFilter, ExaminerWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    authManager?: AuthManagerOrderByWithRelationInput
    examiner?: ExaminerOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    passwordHash?: StringFilter<"UserProfile"> | string
    role?: EnumRoleFilter<"UserProfile"> | $Enums.Role
    dateCreated?: DateTimeFilter<"UserProfile"> | Date | string
    dateUpdated?: DateTimeFilter<"UserProfile"> | Date | string
    authManager?: XOR<AuthManagerNullableScalarRelationFilter, AuthManagerWhereInput> | null
    examiner?: XOR<ExaminerNullableScalarRelationFilter, ExaminerWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "id" | "email">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserProfile"> | string
    email?: StringWithAggregatesFilter<"UserProfile"> | string
    passwordHash?: StringWithAggregatesFilter<"UserProfile"> | string
    role?: EnumRoleWithAggregatesFilter<"UserProfile"> | $Enums.Role
    dateCreated?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    dateUpdated?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: UuidFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    subject?: StringFilter<"Exam"> | string
    link?: StringFilter<"Exam"> | string
    creatorId?: UuidFilter<"Exam"> | string
    enforceTimeLimit?: BoolFilter<"Exam"> | boolean
    stipulatedTime?: IntFilter<"Exam"> | number
    dateCreated?: DateTimeFilter<"Exam"> | Date | string
    dateUpdated?: DateTimeFilter<"Exam"> | Date | string
    isPublic?: BoolFilter<"Exam"> | boolean
    creator?: XOR<ExaminerScalarRelationFilter, ExaminerWhereInput>
    questions?: QuestionListRelationFilter
    studentExams?: StudentExamListRelationFilter
    examAttempts?: ExamAttemptListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    link?: SortOrder
    creatorId?: SortOrder
    enforceTimeLimit?: SortOrder
    stipulatedTime?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    isPublic?: SortOrder
    creator?: ExaminerOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    studentExams?: StudentExamOrderByRelationAggregateInput
    examAttempts?: ExamAttemptOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    subject?: StringFilter<"Exam"> | string
    link?: StringFilter<"Exam"> | string
    creatorId?: UuidFilter<"Exam"> | string
    enforceTimeLimit?: BoolFilter<"Exam"> | boolean
    stipulatedTime?: IntFilter<"Exam"> | number
    dateCreated?: DateTimeFilter<"Exam"> | Date | string
    dateUpdated?: DateTimeFilter<"Exam"> | Date | string
    isPublic?: BoolFilter<"Exam"> | boolean
    creator?: XOR<ExaminerScalarRelationFilter, ExaminerWhereInput>
    questions?: QuestionListRelationFilter
    studentExams?: StudentExamListRelationFilter
    examAttempts?: ExamAttemptListRelationFilter
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    link?: SortOrder
    creatorId?: SortOrder
    enforceTimeLimit?: SortOrder
    stipulatedTime?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    isPublic?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Exam"> | string
    title?: StringWithAggregatesFilter<"Exam"> | string
    description?: StringWithAggregatesFilter<"Exam"> | string
    subject?: StringWithAggregatesFilter<"Exam"> | string
    link?: StringWithAggregatesFilter<"Exam"> | string
    creatorId?: UuidWithAggregatesFilter<"Exam"> | string
    enforceTimeLimit?: BoolWithAggregatesFilter<"Exam"> | boolean
    stipulatedTime?: IntWithAggregatesFilter<"Exam"> | number
    dateCreated?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    dateUpdated?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    isPublic?: BoolWithAggregatesFilter<"Exam"> | boolean
  }

  export type StudentExamWhereInput = {
    AND?: StudentExamWhereInput | StudentExamWhereInput[]
    OR?: StudentExamWhereInput[]
    NOT?: StudentExamWhereInput | StudentExamWhereInput[]
    id?: UuidFilter<"StudentExam"> | string
    studentId?: UuidFilter<"StudentExam"> | string
    examId?: UuidFilter<"StudentExam"> | string
    status?: EnumExamStatusFilter<"StudentExam"> | $Enums.ExamStatus
    startedAt?: DateTimeNullableFilter<"StudentExam"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"StudentExam"> | Date | string | null
    timeSpent?: IntFilter<"StudentExam"> | number
    score?: FloatNullableFilter<"StudentExam"> | number | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }

  export type StudentExamOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    timeSpent?: SortOrder
    score?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
  }

  export type StudentExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_examId?: StudentExamStudentIdExamIdCompoundUniqueInput
    AND?: StudentExamWhereInput | StudentExamWhereInput[]
    OR?: StudentExamWhereInput[]
    NOT?: StudentExamWhereInput | StudentExamWhereInput[]
    studentId?: UuidFilter<"StudentExam"> | string
    examId?: UuidFilter<"StudentExam"> | string
    status?: EnumExamStatusFilter<"StudentExam"> | $Enums.ExamStatus
    startedAt?: DateTimeNullableFilter<"StudentExam"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"StudentExam"> | Date | string | null
    timeSpent?: IntFilter<"StudentExam"> | number
    score?: FloatNullableFilter<"StudentExam"> | number | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }, "id" | "studentId_examId">

  export type StudentExamOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    timeSpent?: SortOrder
    score?: SortOrderInput | SortOrder
    _count?: StudentExamCountOrderByAggregateInput
    _avg?: StudentExamAvgOrderByAggregateInput
    _max?: StudentExamMaxOrderByAggregateInput
    _min?: StudentExamMinOrderByAggregateInput
    _sum?: StudentExamSumOrderByAggregateInput
  }

  export type StudentExamScalarWhereWithAggregatesInput = {
    AND?: StudentExamScalarWhereWithAggregatesInput | StudentExamScalarWhereWithAggregatesInput[]
    OR?: StudentExamScalarWhereWithAggregatesInput[]
    NOT?: StudentExamScalarWhereWithAggregatesInput | StudentExamScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StudentExam"> | string
    studentId?: UuidWithAggregatesFilter<"StudentExam"> | string
    examId?: UuidWithAggregatesFilter<"StudentExam"> | string
    status?: EnumExamStatusWithAggregatesFilter<"StudentExam"> | $Enums.ExamStatus
    startedAt?: DateTimeNullableWithAggregatesFilter<"StudentExam"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"StudentExam"> | Date | string | null
    timeSpent?: IntWithAggregatesFilter<"StudentExam"> | number
    score?: FloatNullableWithAggregatesFilter<"StudentExam"> | number | null
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: UuidFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    examId?: UuidFilter<"Question"> | string
    required?: BoolFilter<"Question"> | boolean
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    expectedAnswer?: StringNullableFilter<"Question"> | string | null
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    options?: OptionListRelationFilter
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    examId?: SortOrder
    required?: SortOrder
    type?: SortOrder
    expectedAnswer?: SortOrderInput | SortOrder
    exam?: ExamOrderByWithRelationInput
    options?: OptionOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    examId?: UuidFilter<"Question"> | string
    required?: BoolFilter<"Question"> | boolean
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    expectedAnswer?: StringNullableFilter<"Question"> | string | null
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    options?: OptionListRelationFilter
    answers?: AnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    examId?: SortOrder
    required?: SortOrder
    type?: SortOrder
    expectedAnswer?: SortOrderInput | SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    examId?: UuidWithAggregatesFilter<"Question"> | string
    required?: BoolWithAggregatesFilter<"Question"> | boolean
    type?: EnumQuestionTypeWithAggregatesFilter<"Question"> | $Enums.QuestionType
    expectedAnswer?: StringNullableWithAggregatesFilter<"Question"> | string | null
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: UuidFilter<"Option"> | string
    text?: StringFilter<"Option"> | string
    questionId?: UuidFilter<"Option"> | string
    isCorrect?: BoolFilter<"Option"> | boolean
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    question?: QuestionOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    text?: StringFilter<"Option"> | string
    questionId?: UuidFilter<"Option"> | string
    isCorrect?: BoolFilter<"Option"> | boolean
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Option"> | string
    text?: StringWithAggregatesFilter<"Option"> | string
    questionId?: UuidWithAggregatesFilter<"Option"> | string
    isCorrect?: BoolWithAggregatesFilter<"Option"> | boolean
  }

  export type ExamAttemptWhereInput = {
    AND?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    OR?: ExamAttemptWhereInput[]
    NOT?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    id?: UuidFilter<"ExamAttempt"> | string
    studentId?: UuidNullableFilter<"ExamAttempt"> | string | null
    examId?: UuidFilter<"ExamAttempt"> | string
    startTime?: DateTimeNullableFilter<"ExamAttempt"> | Date | string | null
    submittedAt?: DateTimeFilter<"ExamAttempt"> | Date | string
    totalScore?: FloatNullableFilter<"ExamAttempt"> | number | null
    responderEmal?: StringNullableFilter<"ExamAttempt"> | string | null
    responderName?: StringNullableFilter<"ExamAttempt"> | string | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type ExamAttemptOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    examId?: SortOrder
    startTime?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    totalScore?: SortOrderInput | SortOrder
    responderEmal?: SortOrderInput | SortOrder
    responderName?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type ExamAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    OR?: ExamAttemptWhereInput[]
    NOT?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    studentId?: UuidNullableFilter<"ExamAttempt"> | string | null
    examId?: UuidFilter<"ExamAttempt"> | string
    startTime?: DateTimeNullableFilter<"ExamAttempt"> | Date | string | null
    submittedAt?: DateTimeFilter<"ExamAttempt"> | Date | string
    totalScore?: FloatNullableFilter<"ExamAttempt"> | number | null
    responderEmal?: StringNullableFilter<"ExamAttempt"> | string | null
    responderName?: StringNullableFilter<"ExamAttempt"> | string | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type ExamAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    examId?: SortOrder
    startTime?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    totalScore?: SortOrderInput | SortOrder
    responderEmal?: SortOrderInput | SortOrder
    responderName?: SortOrderInput | SortOrder
    _count?: ExamAttemptCountOrderByAggregateInput
    _avg?: ExamAttemptAvgOrderByAggregateInput
    _max?: ExamAttemptMaxOrderByAggregateInput
    _min?: ExamAttemptMinOrderByAggregateInput
    _sum?: ExamAttemptSumOrderByAggregateInput
  }

  export type ExamAttemptScalarWhereWithAggregatesInput = {
    AND?: ExamAttemptScalarWhereWithAggregatesInput | ExamAttemptScalarWhereWithAggregatesInput[]
    OR?: ExamAttemptScalarWhereWithAggregatesInput[]
    NOT?: ExamAttemptScalarWhereWithAggregatesInput | ExamAttemptScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ExamAttempt"> | string
    studentId?: UuidNullableWithAggregatesFilter<"ExamAttempt"> | string | null
    examId?: UuidWithAggregatesFilter<"ExamAttempt"> | string
    startTime?: DateTimeNullableWithAggregatesFilter<"ExamAttempt"> | Date | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"ExamAttempt"> | Date | string
    totalScore?: FloatNullableWithAggregatesFilter<"ExamAttempt"> | number | null
    responderEmal?: StringNullableWithAggregatesFilter<"ExamAttempt"> | string | null
    responderName?: StringNullableWithAggregatesFilter<"ExamAttempt"> | string | null
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: UuidFilter<"Answer"> | string
    attemptId?: UuidFilter<"Answer"> | string
    questionId?: UuidFilter<"Answer"> | string
    textAnswer?: StringNullableListFilter<"Answer">
    score?: FloatNullableFilter<"Answer"> | number | null
    attempt?: XOR<ExamAttemptScalarRelationFilter, ExamAttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    options?: OptionListRelationFilter
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    textAnswer?: SortOrder
    score?: SortOrderInput | SortOrder
    attempt?: ExamAttemptOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    options?: OptionOrderByRelationAggregateInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    attemptId?: UuidFilter<"Answer"> | string
    questionId?: UuidFilter<"Answer"> | string
    textAnswer?: StringNullableListFilter<"Answer">
    score?: FloatNullableFilter<"Answer"> | number | null
    attempt?: XOR<ExamAttemptScalarRelationFilter, ExamAttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    options?: OptionListRelationFilter
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    textAnswer?: SortOrder
    score?: SortOrderInput | SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Answer"> | string
    attemptId?: UuidWithAggregatesFilter<"Answer"> | string
    questionId?: UuidWithAggregatesFilter<"Answer"> | string
    textAnswer?: StringNullableListFilter<"Answer">
    score?: FloatNullableWithAggregatesFilter<"Answer"> | number | null
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    profile: UserProfileCreateNestedOneWithoutStudentInput
    studentExams?: StudentExamCreateNestedManyWithoutStudentInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    profileId: string
    studentExams?: StudentExamUncheckedCreateNestedManyWithoutStudentInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: UserProfileUpdateOneRequiredWithoutStudentNestedInput
    studentExams?: StudentExamUpdateManyWithoutStudentNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    studentExams?: StudentExamUncheckedUpdateManyWithoutStudentNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    profileId: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type ExaminerCreateInput = {
    id?: string
    name: string
    exams?: ExamCreateNestedManyWithoutCreatorInput
    profile: UserProfileCreateNestedOneWithoutExaminerInput
  }

  export type ExaminerUncheckedCreateInput = {
    id?: string
    name: string
    profileId: string
    exams?: ExamUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type ExaminerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exams?: ExamUpdateManyWithoutCreatorNestedInput
    profile?: UserProfileUpdateOneRequiredWithoutExaminerNestedInput
  }

  export type ExaminerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    exams?: ExamUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ExaminerCreateManyInput = {
    id?: string
    name: string
    profileId: string
  }

  export type ExaminerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExaminerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthManagerCreateInput = {
    id?: string
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    isLoggedIn?: boolean
    lastLoginAt?: Date | string | null
    lastActivityAt?: Date | string | null
    loginAttempts?: number
    isLocked?: boolean
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserProfileCreateNestedOneWithoutAuthManagerInput
  }

  export type AuthManagerUncheckedCreateInput = {
    id?: string
    userId: string
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    isLoggedIn?: boolean
    lastLoginAt?: Date | string | null
    lastActivityAt?: Date | string | null
    loginAttempts?: number
    isLocked?: boolean
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthManagerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLoggedIn?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserProfileUpdateOneRequiredWithoutAuthManagerNestedInput
  }

  export type AuthManagerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLoggedIn?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthManagerCreateManyInput = {
    id?: string
    userId: string
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    isLoggedIn?: boolean
    lastLoginAt?: Date | string | null
    lastActivityAt?: Date | string | null
    loginAttempts?: number
    isLocked?: boolean
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthManagerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLoggedIn?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthManagerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLoggedIn?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated?: Date | string
    dateUpdated?: Date | string
    authManager?: AuthManagerCreateNestedOneWithoutUserInput
    examiner?: ExaminerCreateNestedOneWithoutProfileInput
    student?: StudentCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated?: Date | string
    dateUpdated?: Date | string
    authManager?: AuthManagerUncheckedCreateNestedOneWithoutUserInput
    examiner?: ExaminerUncheckedCreateNestedOneWithoutProfileInput
    student?: StudentUncheckedCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    authManager?: AuthManagerUpdateOneWithoutUserNestedInput
    examiner?: ExaminerUpdateOneWithoutProfileNestedInput
    student?: StudentUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    authManager?: AuthManagerUncheckedUpdateOneWithoutUserNestedInput
    examiner?: ExaminerUncheckedUpdateOneWithoutProfileNestedInput
    student?: StudentUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated?: Date | string
    dateUpdated?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamCreateInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    creator: ExaminerCreateNestedOneWithoutExamsInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    studentExams?: StudentExamCreateNestedManyWithoutExamInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    creatorId: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    studentExams?: StudentExamUncheckedCreateNestedManyWithoutExamInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    creator?: ExaminerUpdateOneRequiredWithoutExamsNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    studentExams?: StudentExamUpdateManyWithoutExamNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    studentExams?: StudentExamUncheckedUpdateManyWithoutExamNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    creatorId: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentExamCreateInput = {
    id?: string
    status?: $Enums.ExamStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeSpent: number
    score?: number | null
    student: StudentCreateNestedOneWithoutStudentExamsInput
    exam: ExamCreateNestedOneWithoutStudentExamsInput
  }

  export type StudentExamUncheckedCreateInput = {
    id?: string
    studentId: string
    examId: string
    status?: $Enums.ExamStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeSpent: number
    score?: number | null
  }

  export type StudentExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    student?: StudentUpdateOneRequiredWithoutStudentExamsNestedInput
    exam?: ExamUpdateOneRequiredWithoutStudentExamsNestedInput
  }

  export type StudentExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StudentExamCreateManyInput = {
    id?: string
    studentId: string
    examId: string
    status?: $Enums.ExamStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeSpent: number
    score?: number | null
  }

  export type StudentExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StudentExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
    exam: ExamCreateNestedOneWithoutQuestionsInput
    options?: OptionCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    examId: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    options?: OptionUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    examId: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OptionCreateInput = {
    id?: string
    text: string
    isCorrect: boolean
    question: QuestionCreateNestedOneWithoutOptionsInput
    answers?: AnswerCreateNestedManyWithoutOptionsInput
  }

  export type OptionUncheckedCreateInput = {
    id?: string
    text: string
    questionId: string
    isCorrect: boolean
    answers?: AnswerUncheckedCreateNestedManyWithoutOptionsInput
  }

  export type OptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
    answers?: AnswerUpdateManyWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUncheckedUpdateManyWithoutOptionsNestedInput
  }

  export type OptionCreateManyInput = {
    id?: string
    text: string
    questionId: string
    isCorrect: boolean
  }

  export type OptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamAttemptCreateInput = {
    id?: string
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
    student?: StudentCreateNestedOneWithoutExamAttemptsInput
    exam: ExamCreateNestedOneWithoutExamAttemptsInput
    answers?: AnswerCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptUncheckedCreateInput = {
    id?: string
    studentId?: string | null
    examId: string
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneWithoutExamAttemptsNestedInput
    exam?: ExamUpdateOneRequiredWithoutExamAttemptsNestedInput
    answers?: AnswerUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptCreateManyInput = {
    id?: string
    studentId?: string | null
    examId: string
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
  }

  export type ExamAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerCreateInput = {
    id?: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
    attempt: ExamAttemptCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    options?: OptionCreateNestedManyWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    attemptId: string
    questionId: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
    options?: OptionUncheckedCreateNestedManyWithoutAnswersInput
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempt?: ExamAttemptUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    options?: OptionUpdateManyWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    options?: OptionUncheckedUpdateManyWithoutAnswersNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: string
    attemptId: string
    questionId: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type UserProfileScalarRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type StudentExamListRelationFilter = {
    every?: StudentExamWhereInput
    some?: StudentExamWhereInput
    none?: StudentExamWhereInput
  }

  export type ExamAttemptListRelationFilter = {
    every?: ExamAttemptWhereInput
    some?: ExamAttemptWhereInput
    none?: ExamAttemptWhereInput
  }

  export type StudentExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
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

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExaminerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
  }

  export type ExaminerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
  }

  export type ExaminerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthManagerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    isLoggedIn?: SortOrder
    lastLoginAt?: SortOrder
    lastActivityAt?: SortOrder
    loginAttempts?: SortOrder
    isLocked?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthManagerAvgOrderByAggregateInput = {
    loginAttempts?: SortOrder
  }

  export type AuthManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    isLoggedIn?: SortOrder
    lastLoginAt?: SortOrder
    lastActivityAt?: SortOrder
    loginAttempts?: SortOrder
    isLocked?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthManagerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    isLoggedIn?: SortOrder
    lastLoginAt?: SortOrder
    lastActivityAt?: SortOrder
    loginAttempts?: SortOrder
    isLocked?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthManagerSumOrderByAggregateInput = {
    loginAttempts?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AuthManagerNullableScalarRelationFilter = {
    is?: AuthManagerWhereInput | null
    isNot?: AuthManagerWhereInput | null
  }

  export type ExaminerNullableScalarRelationFilter = {
    is?: ExaminerWhereInput | null
    isNot?: ExaminerWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
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

  export type ExaminerScalarRelationFilter = {
    is?: ExaminerWhereInput
    isNot?: ExaminerWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    link?: SortOrder
    creatorId?: SortOrder
    enforceTimeLimit?: SortOrder
    stipulatedTime?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    isPublic?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    stipulatedTime?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    link?: SortOrder
    creatorId?: SortOrder
    enforceTimeLimit?: SortOrder
    stipulatedTime?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    isPublic?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    link?: SortOrder
    creatorId?: SortOrder
    enforceTimeLimit?: SortOrder
    stipulatedTime?: SortOrder
    dateCreated?: SortOrder
    dateUpdated?: SortOrder
    isPublic?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    stipulatedTime?: SortOrder
  }

  export type EnumExamStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamStatusFilter<$PrismaModel> | $Enums.ExamStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ExamScalarRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type StudentExamStudentIdExamIdCompoundUniqueInput = {
    studentId: string
    examId: string
  }

  export type StudentExamCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrder
  }

  export type StudentExamAvgOrderByAggregateInput = {
    timeSpent?: SortOrder
    score?: SortOrder
  }

  export type StudentExamMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrder
  }

  export type StudentExamMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeSpent?: SortOrder
    score?: SortOrder
  }

  export type StudentExamSumOrderByAggregateInput = {
    timeSpent?: SortOrder
    score?: SortOrder
  }

  export type EnumExamStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExamStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamStatusFilter<$PrismaModel>
    _max?: NestedEnumExamStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    examId?: SortOrder
    required?: SortOrder
    type?: SortOrder
    expectedAnswer?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    examId?: SortOrder
    required?: SortOrder
    type?: SortOrder
    expectedAnswer?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    examId?: SortOrder
    required?: SortOrder
    type?: SortOrder
    expectedAnswer?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
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

  export type ExamAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    startTime?: SortOrder
    submittedAt?: SortOrder
    totalScore?: SortOrder
    responderEmal?: SortOrder
    responderName?: SortOrder
  }

  export type ExamAttemptAvgOrderByAggregateInput = {
    totalScore?: SortOrder
  }

  export type ExamAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    startTime?: SortOrder
    submittedAt?: SortOrder
    totalScore?: SortOrder
    responderEmal?: SortOrder
    responderName?: SortOrder
  }

  export type ExamAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    startTime?: SortOrder
    submittedAt?: SortOrder
    totalScore?: SortOrder
    responderEmal?: SortOrder
    responderName?: SortOrder
  }

  export type ExamAttemptSumOrderByAggregateInput = {
    totalScore?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ExamAttemptScalarRelationFilter = {
    is?: ExamAttemptWhereInput
    isNot?: ExamAttemptWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    textAnswer?: SortOrder
    score?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    score?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    score?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserProfileCreateWithoutStudentInput, UserProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutStudentInput
    connect?: UserProfileWhereUniqueInput
  }

  export type StudentExamCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentExamCreateWithoutStudentInput, StudentExamUncheckedCreateWithoutStudentInput> | StudentExamCreateWithoutStudentInput[] | StudentExamUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExamCreateOrConnectWithoutStudentInput | StudentExamCreateOrConnectWithoutStudentInput[]
    createMany?: StudentExamCreateManyStudentInputEnvelope
    connect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
  }

  export type ExamAttemptCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExamAttemptCreateWithoutStudentInput, ExamAttemptUncheckedCreateWithoutStudentInput> | ExamAttemptCreateWithoutStudentInput[] | ExamAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutStudentInput | ExamAttemptCreateOrConnectWithoutStudentInput[]
    createMany?: ExamAttemptCreateManyStudentInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type StudentExamUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentExamCreateWithoutStudentInput, StudentExamUncheckedCreateWithoutStudentInput> | StudentExamCreateWithoutStudentInput[] | StudentExamUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExamCreateOrConnectWithoutStudentInput | StudentExamCreateOrConnectWithoutStudentInput[]
    createMany?: StudentExamCreateManyStudentInputEnvelope
    connect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
  }

  export type ExamAttemptUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExamAttemptCreateWithoutStudentInput, ExamAttemptUncheckedCreateWithoutStudentInput> | ExamAttemptCreateWithoutStudentInput[] | ExamAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutStudentInput | ExamAttemptCreateOrConnectWithoutStudentInput[]
    createMany?: ExamAttemptCreateManyStudentInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserProfileUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserProfileCreateWithoutStudentInput, UserProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutStudentInput
    upsert?: UserProfileUpsertWithoutStudentInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutStudentInput, UserProfileUpdateWithoutStudentInput>, UserProfileUncheckedUpdateWithoutStudentInput>
  }

  export type StudentExamUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentExamCreateWithoutStudentInput, StudentExamUncheckedCreateWithoutStudentInput> | StudentExamCreateWithoutStudentInput[] | StudentExamUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExamCreateOrConnectWithoutStudentInput | StudentExamCreateOrConnectWithoutStudentInput[]
    upsert?: StudentExamUpsertWithWhereUniqueWithoutStudentInput | StudentExamUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentExamCreateManyStudentInputEnvelope
    set?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    disconnect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    delete?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    connect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    update?: StudentExamUpdateWithWhereUniqueWithoutStudentInput | StudentExamUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentExamUpdateManyWithWhereWithoutStudentInput | StudentExamUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentExamScalarWhereInput | StudentExamScalarWhereInput[]
  }

  export type ExamAttemptUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutStudentInput, ExamAttemptUncheckedCreateWithoutStudentInput> | ExamAttemptCreateWithoutStudentInput[] | ExamAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutStudentInput | ExamAttemptCreateOrConnectWithoutStudentInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutStudentInput | ExamAttemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExamAttemptCreateManyStudentInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutStudentInput | ExamAttemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutStudentInput | ExamAttemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type StudentExamUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentExamCreateWithoutStudentInput, StudentExamUncheckedCreateWithoutStudentInput> | StudentExamCreateWithoutStudentInput[] | StudentExamUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExamCreateOrConnectWithoutStudentInput | StudentExamCreateOrConnectWithoutStudentInput[]
    upsert?: StudentExamUpsertWithWhereUniqueWithoutStudentInput | StudentExamUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentExamCreateManyStudentInputEnvelope
    set?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    disconnect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    delete?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    connect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    update?: StudentExamUpdateWithWhereUniqueWithoutStudentInput | StudentExamUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentExamUpdateManyWithWhereWithoutStudentInput | StudentExamUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentExamScalarWhereInput | StudentExamScalarWhereInput[]
  }

  export type ExamAttemptUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutStudentInput, ExamAttemptUncheckedCreateWithoutStudentInput> | ExamAttemptCreateWithoutStudentInput[] | ExamAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutStudentInput | ExamAttemptCreateOrConnectWithoutStudentInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutStudentInput | ExamAttemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExamAttemptCreateManyStudentInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutStudentInput | ExamAttemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutStudentInput | ExamAttemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type ExamCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ExamCreateWithoutCreatorInput, ExamUncheckedCreateWithoutCreatorInput> | ExamCreateWithoutCreatorInput[] | ExamUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCreatorInput | ExamCreateOrConnectWithoutCreatorInput[]
    createMany?: ExamCreateManyCreatorInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type UserProfileCreateNestedOneWithoutExaminerInput = {
    create?: XOR<UserProfileCreateWithoutExaminerInput, UserProfileUncheckedCreateWithoutExaminerInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutExaminerInput
    connect?: UserProfileWhereUniqueInput
  }

  export type ExamUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ExamCreateWithoutCreatorInput, ExamUncheckedCreateWithoutCreatorInput> | ExamCreateWithoutCreatorInput[] | ExamUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCreatorInput | ExamCreateOrConnectWithoutCreatorInput[]
    createMany?: ExamCreateManyCreatorInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type ExamUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ExamCreateWithoutCreatorInput, ExamUncheckedCreateWithoutCreatorInput> | ExamCreateWithoutCreatorInput[] | ExamUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCreatorInput | ExamCreateOrConnectWithoutCreatorInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCreatorInput | ExamUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ExamCreateManyCreatorInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCreatorInput | ExamUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCreatorInput | ExamUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type UserProfileUpdateOneRequiredWithoutExaminerNestedInput = {
    create?: XOR<UserProfileCreateWithoutExaminerInput, UserProfileUncheckedCreateWithoutExaminerInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutExaminerInput
    upsert?: UserProfileUpsertWithoutExaminerInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutExaminerInput, UserProfileUpdateWithoutExaminerInput>, UserProfileUncheckedUpdateWithoutExaminerInput>
  }

  export type ExamUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ExamCreateWithoutCreatorInput, ExamUncheckedCreateWithoutCreatorInput> | ExamCreateWithoutCreatorInput[] | ExamUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCreatorInput | ExamCreateOrConnectWithoutCreatorInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCreatorInput | ExamUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ExamCreateManyCreatorInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCreatorInput | ExamUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCreatorInput | ExamUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type UserProfileCreateNestedOneWithoutAuthManagerInput = {
    create?: XOR<UserProfileCreateWithoutAuthManagerInput, UserProfileUncheckedCreateWithoutAuthManagerInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthManagerInput
    connect?: UserProfileWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type UserProfileUpdateOneRequiredWithoutAuthManagerNestedInput = {
    create?: XOR<UserProfileCreateWithoutAuthManagerInput, UserProfileUncheckedCreateWithoutAuthManagerInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthManagerInput
    upsert?: UserProfileUpsertWithoutAuthManagerInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutAuthManagerInput, UserProfileUpdateWithoutAuthManagerInput>, UserProfileUncheckedUpdateWithoutAuthManagerInput>
  }

  export type AuthManagerCreateNestedOneWithoutUserInput = {
    create?: XOR<AuthManagerCreateWithoutUserInput, AuthManagerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthManagerCreateOrConnectWithoutUserInput
    connect?: AuthManagerWhereUniqueInput
  }

  export type ExaminerCreateNestedOneWithoutProfileInput = {
    create?: XOR<ExaminerCreateWithoutProfileInput, ExaminerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: ExaminerCreateOrConnectWithoutProfileInput
    connect?: ExaminerWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutProfileInput = {
    create?: XOR<StudentCreateWithoutProfileInput, StudentUncheckedCreateWithoutProfileInput>
    connectOrCreate?: StudentCreateOrConnectWithoutProfileInput
    connect?: StudentWhereUniqueInput
  }

  export type AuthManagerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AuthManagerCreateWithoutUserInput, AuthManagerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthManagerCreateOrConnectWithoutUserInput
    connect?: AuthManagerWhereUniqueInput
  }

  export type ExaminerUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<ExaminerCreateWithoutProfileInput, ExaminerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: ExaminerCreateOrConnectWithoutProfileInput
    connect?: ExaminerWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<StudentCreateWithoutProfileInput, StudentUncheckedCreateWithoutProfileInput>
    connectOrCreate?: StudentCreateOrConnectWithoutProfileInput
    connect?: StudentWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AuthManagerUpdateOneWithoutUserNestedInput = {
    create?: XOR<AuthManagerCreateWithoutUserInput, AuthManagerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthManagerCreateOrConnectWithoutUserInput
    upsert?: AuthManagerUpsertWithoutUserInput
    disconnect?: AuthManagerWhereInput | boolean
    delete?: AuthManagerWhereInput | boolean
    connect?: AuthManagerWhereUniqueInput
    update?: XOR<XOR<AuthManagerUpdateToOneWithWhereWithoutUserInput, AuthManagerUpdateWithoutUserInput>, AuthManagerUncheckedUpdateWithoutUserInput>
  }

  export type ExaminerUpdateOneWithoutProfileNestedInput = {
    create?: XOR<ExaminerCreateWithoutProfileInput, ExaminerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: ExaminerCreateOrConnectWithoutProfileInput
    upsert?: ExaminerUpsertWithoutProfileInput
    disconnect?: ExaminerWhereInput | boolean
    delete?: ExaminerWhereInput | boolean
    connect?: ExaminerWhereUniqueInput
    update?: XOR<XOR<ExaminerUpdateToOneWithWhereWithoutProfileInput, ExaminerUpdateWithoutProfileInput>, ExaminerUncheckedUpdateWithoutProfileInput>
  }

  export type StudentUpdateOneWithoutProfileNestedInput = {
    create?: XOR<StudentCreateWithoutProfileInput, StudentUncheckedCreateWithoutProfileInput>
    connectOrCreate?: StudentCreateOrConnectWithoutProfileInput
    upsert?: StudentUpsertWithoutProfileInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutProfileInput, StudentUpdateWithoutProfileInput>, StudentUncheckedUpdateWithoutProfileInput>
  }

  export type AuthManagerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AuthManagerCreateWithoutUserInput, AuthManagerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthManagerCreateOrConnectWithoutUserInput
    upsert?: AuthManagerUpsertWithoutUserInput
    disconnect?: AuthManagerWhereInput | boolean
    delete?: AuthManagerWhereInput | boolean
    connect?: AuthManagerWhereUniqueInput
    update?: XOR<XOR<AuthManagerUpdateToOneWithWhereWithoutUserInput, AuthManagerUpdateWithoutUserInput>, AuthManagerUncheckedUpdateWithoutUserInput>
  }

  export type ExaminerUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<ExaminerCreateWithoutProfileInput, ExaminerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: ExaminerCreateOrConnectWithoutProfileInput
    upsert?: ExaminerUpsertWithoutProfileInput
    disconnect?: ExaminerWhereInput | boolean
    delete?: ExaminerWhereInput | boolean
    connect?: ExaminerWhereUniqueInput
    update?: XOR<XOR<ExaminerUpdateToOneWithWhereWithoutProfileInput, ExaminerUpdateWithoutProfileInput>, ExaminerUncheckedUpdateWithoutProfileInput>
  }

  export type StudentUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<StudentCreateWithoutProfileInput, StudentUncheckedCreateWithoutProfileInput>
    connectOrCreate?: StudentCreateOrConnectWithoutProfileInput
    upsert?: StudentUpsertWithoutProfileInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutProfileInput, StudentUpdateWithoutProfileInput>, StudentUncheckedUpdateWithoutProfileInput>
  }

  export type ExaminerCreateNestedOneWithoutExamsInput = {
    create?: XOR<ExaminerCreateWithoutExamsInput, ExaminerUncheckedCreateWithoutExamsInput>
    connectOrCreate?: ExaminerCreateOrConnectWithoutExamsInput
    connect?: ExaminerWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type StudentExamCreateNestedManyWithoutExamInput = {
    create?: XOR<StudentExamCreateWithoutExamInput, StudentExamUncheckedCreateWithoutExamInput> | StudentExamCreateWithoutExamInput[] | StudentExamUncheckedCreateWithoutExamInput[]
    connectOrCreate?: StudentExamCreateOrConnectWithoutExamInput | StudentExamCreateOrConnectWithoutExamInput[]
    createMany?: StudentExamCreateManyExamInputEnvelope
    connect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
  }

  export type ExamAttemptCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput> | ExamAttemptCreateWithoutExamInput[] | ExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutExamInput | ExamAttemptCreateOrConnectWithoutExamInput[]
    createMany?: ExamAttemptCreateManyExamInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type StudentExamUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<StudentExamCreateWithoutExamInput, StudentExamUncheckedCreateWithoutExamInput> | StudentExamCreateWithoutExamInput[] | StudentExamUncheckedCreateWithoutExamInput[]
    connectOrCreate?: StudentExamCreateOrConnectWithoutExamInput | StudentExamCreateOrConnectWithoutExamInput[]
    createMany?: StudentExamCreateManyExamInputEnvelope
    connect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
  }

  export type ExamAttemptUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput> | ExamAttemptCreateWithoutExamInput[] | ExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutExamInput | ExamAttemptCreateOrConnectWithoutExamInput[]
    createMany?: ExamAttemptCreateManyExamInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type ExaminerUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<ExaminerCreateWithoutExamsInput, ExaminerUncheckedCreateWithoutExamsInput>
    connectOrCreate?: ExaminerCreateOrConnectWithoutExamsInput
    upsert?: ExaminerUpsertWithoutExamsInput
    connect?: ExaminerWhereUniqueInput
    update?: XOR<XOR<ExaminerUpdateToOneWithWhereWithoutExamsInput, ExaminerUpdateWithoutExamsInput>, ExaminerUncheckedUpdateWithoutExamsInput>
  }

  export type QuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type StudentExamUpdateManyWithoutExamNestedInput = {
    create?: XOR<StudentExamCreateWithoutExamInput, StudentExamUncheckedCreateWithoutExamInput> | StudentExamCreateWithoutExamInput[] | StudentExamUncheckedCreateWithoutExamInput[]
    connectOrCreate?: StudentExamCreateOrConnectWithoutExamInput | StudentExamCreateOrConnectWithoutExamInput[]
    upsert?: StudentExamUpsertWithWhereUniqueWithoutExamInput | StudentExamUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: StudentExamCreateManyExamInputEnvelope
    set?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    disconnect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    delete?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    connect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    update?: StudentExamUpdateWithWhereUniqueWithoutExamInput | StudentExamUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: StudentExamUpdateManyWithWhereWithoutExamInput | StudentExamUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: StudentExamScalarWhereInput | StudentExamScalarWhereInput[]
  }

  export type ExamAttemptUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput> | ExamAttemptCreateWithoutExamInput[] | ExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutExamInput | ExamAttemptCreateOrConnectWithoutExamInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutExamInput | ExamAttemptUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamAttemptCreateManyExamInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutExamInput | ExamAttemptUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutExamInput | ExamAttemptUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type StudentExamUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<StudentExamCreateWithoutExamInput, StudentExamUncheckedCreateWithoutExamInput> | StudentExamCreateWithoutExamInput[] | StudentExamUncheckedCreateWithoutExamInput[]
    connectOrCreate?: StudentExamCreateOrConnectWithoutExamInput | StudentExamCreateOrConnectWithoutExamInput[]
    upsert?: StudentExamUpsertWithWhereUniqueWithoutExamInput | StudentExamUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: StudentExamCreateManyExamInputEnvelope
    set?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    disconnect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    delete?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    connect?: StudentExamWhereUniqueInput | StudentExamWhereUniqueInput[]
    update?: StudentExamUpdateWithWhereUniqueWithoutExamInput | StudentExamUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: StudentExamUpdateManyWithWhereWithoutExamInput | StudentExamUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: StudentExamScalarWhereInput | StudentExamScalarWhereInput[]
  }

  export type ExamAttemptUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput> | ExamAttemptCreateWithoutExamInput[] | ExamAttemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutExamInput | ExamAttemptCreateOrConnectWithoutExamInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutExamInput | ExamAttemptUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamAttemptCreateManyExamInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutExamInput | ExamAttemptUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutExamInput | ExamAttemptUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutStudentExamsInput = {
    create?: XOR<StudentCreateWithoutStudentExamsInput, StudentUncheckedCreateWithoutStudentExamsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentExamsInput
    connect?: StudentWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutStudentExamsInput = {
    create?: XOR<ExamCreateWithoutStudentExamsInput, ExamUncheckedCreateWithoutStudentExamsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutStudentExamsInput
    connect?: ExamWhereUniqueInput
  }

  export type EnumExamStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExamStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutStudentExamsNestedInput = {
    create?: XOR<StudentCreateWithoutStudentExamsInput, StudentUncheckedCreateWithoutStudentExamsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentExamsInput
    upsert?: StudentUpsertWithoutStudentExamsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentExamsInput, StudentUpdateWithoutStudentExamsInput>, StudentUncheckedUpdateWithoutStudentExamsInput>
  }

  export type ExamUpdateOneRequiredWithoutStudentExamsNestedInput = {
    create?: XOR<ExamCreateWithoutStudentExamsInput, ExamUncheckedCreateWithoutStudentExamsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutStudentExamsInput
    upsert?: ExamUpsertWithoutStudentExamsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutStudentExamsInput, ExamUpdateWithoutStudentExamsInput>, ExamUncheckedUpdateWithoutStudentExamsInput>
  }

  export type ExamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
  }

  export type OptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    upsert?: ExamUpsertWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutQuestionsInput, ExamUpdateWithoutQuestionsInput>, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type OptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutOptionsInput = {
    create?: XOR<AnswerCreateWithoutOptionsInput, AnswerUncheckedCreateWithoutOptionsInput> | AnswerCreateWithoutOptionsInput[] | AnswerUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionsInput | AnswerCreateOrConnectWithoutOptionsInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutOptionsInput = {
    create?: XOR<AnswerCreateWithoutOptionsInput, AnswerUncheckedCreateWithoutOptionsInput> | AnswerCreateWithoutOptionsInput[] | AnswerUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionsInput | AnswerCreateOrConnectWithoutOptionsInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuestionUpsertWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutOptionsInput, QuestionUpdateWithoutOptionsInput>, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type AnswerUpdateManyWithoutOptionsNestedInput = {
    create?: XOR<AnswerCreateWithoutOptionsInput, AnswerUncheckedCreateWithoutOptionsInput> | AnswerCreateWithoutOptionsInput[] | AnswerUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionsInput | AnswerCreateOrConnectWithoutOptionsInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutOptionsInput | AnswerUpsertWithWhereUniqueWithoutOptionsInput[]
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutOptionsInput | AnswerUpdateWithWhereUniqueWithoutOptionsInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutOptionsInput | AnswerUpdateManyWithWhereWithoutOptionsInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutOptionsNestedInput = {
    create?: XOR<AnswerCreateWithoutOptionsInput, AnswerUncheckedCreateWithoutOptionsInput> | AnswerCreateWithoutOptionsInput[] | AnswerUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionsInput | AnswerCreateOrConnectWithoutOptionsInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutOptionsInput | AnswerUpsertWithWhereUniqueWithoutOptionsInput[]
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutOptionsInput | AnswerUpdateWithWhereUniqueWithoutOptionsInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutOptionsInput | AnswerUpdateManyWithWhereWithoutOptionsInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutExamAttemptsInput = {
    create?: XOR<StudentCreateWithoutExamAttemptsInput, StudentUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutExamAttemptsInput
    connect?: StudentWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutExamAttemptsInput = {
    create?: XOR<ExamCreateWithoutExamAttemptsInput, ExamUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutExamAttemptsInput
    connect?: ExamWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutAttemptInput = {
    create?: XOR<AnswerCreateWithoutAttemptInput, AnswerUncheckedCreateWithoutAttemptInput> | AnswerCreateWithoutAttemptInput[] | AnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAttemptInput | AnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: AnswerCreateManyAttemptInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: XOR<AnswerCreateWithoutAttemptInput, AnswerUncheckedCreateWithoutAttemptInput> | AnswerCreateWithoutAttemptInput[] | AnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAttemptInput | AnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: AnswerCreateManyAttemptInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type StudentUpdateOneWithoutExamAttemptsNestedInput = {
    create?: XOR<StudentCreateWithoutExamAttemptsInput, StudentUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutExamAttemptsInput
    upsert?: StudentUpsertWithoutExamAttemptsInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutExamAttemptsInput, StudentUpdateWithoutExamAttemptsInput>, StudentUncheckedUpdateWithoutExamAttemptsInput>
  }

  export type ExamUpdateOneRequiredWithoutExamAttemptsNestedInput = {
    create?: XOR<ExamCreateWithoutExamAttemptsInput, ExamUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutExamAttemptsInput
    upsert?: ExamUpsertWithoutExamAttemptsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutExamAttemptsInput, ExamUpdateWithoutExamAttemptsInput>, ExamUncheckedUpdateWithoutExamAttemptsInput>
  }

  export type AnswerUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<AnswerCreateWithoutAttemptInput, AnswerUncheckedCreateWithoutAttemptInput> | AnswerCreateWithoutAttemptInput[] | AnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAttemptInput | AnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAttemptInput | AnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: AnswerCreateManyAttemptInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAttemptInput | AnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAttemptInput | AnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<AnswerCreateWithoutAttemptInput, AnswerUncheckedCreateWithoutAttemptInput> | AnswerCreateWithoutAttemptInput[] | AnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutAttemptInput | AnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutAttemptInput | AnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: AnswerCreateManyAttemptInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutAttemptInput | AnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutAttemptInput | AnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerCreatetextAnswerInput = {
    set: string[]
  }

  export type ExamAttemptCreateNestedOneWithoutAnswersInput = {
    create?: XOR<ExamAttemptCreateWithoutAnswersInput, ExamAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutAnswersInput
    connect?: ExamAttemptWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type OptionCreateNestedManyWithoutAnswersInput = {
    create?: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput> | OptionCreateWithoutAnswersInput[] | OptionUncheckedCreateWithoutAnswersInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutAnswersInput | OptionCreateOrConnectWithoutAnswersInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutAnswersInput = {
    create?: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput> | OptionCreateWithoutAnswersInput[] | OptionUncheckedCreateWithoutAnswersInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutAnswersInput | OptionCreateOrConnectWithoutAnswersInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type AnswerUpdatetextAnswerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ExamAttemptUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutAnswersInput, ExamAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutAnswersInput
    upsert?: ExamAttemptUpsertWithoutAnswersInput
    connect?: ExamAttemptWhereUniqueInput
    update?: XOR<XOR<ExamAttemptUpdateToOneWithWhereWithoutAnswersInput, ExamAttemptUpdateWithoutAnswersInput>, ExamAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type OptionUpdateManyWithoutAnswersNestedInput = {
    create?: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput> | OptionCreateWithoutAnswersInput[] | OptionUncheckedCreateWithoutAnswersInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutAnswersInput | OptionCreateOrConnectWithoutAnswersInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutAnswersInput | OptionUpsertWithWhereUniqueWithoutAnswersInput[]
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutAnswersInput | OptionUpdateWithWhereUniqueWithoutAnswersInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutAnswersInput | OptionUpdateManyWithWhereWithoutAnswersInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutAnswersNestedInput = {
    create?: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput> | OptionCreateWithoutAnswersInput[] | OptionUncheckedCreateWithoutAnswersInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutAnswersInput | OptionCreateOrConnectWithoutAnswersInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutAnswersInput | OptionUpsertWithWhereUniqueWithoutAnswersInput[]
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutAnswersInput | OptionUpdateWithWhereUniqueWithoutAnswersInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutAnswersInput | OptionUpdateManyWithWhereWithoutAnswersInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumExamStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamStatusFilter<$PrismaModel> | $Enums.ExamStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumExamStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamStatus | EnumExamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamStatus[] | ListEnumExamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExamStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExamStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamStatusFilter<$PrismaModel>
    _max?: NestedEnumExamStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
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

  export type UserProfileCreateWithoutStudentInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated?: Date | string
    dateUpdated?: Date | string
    authManager?: AuthManagerCreateNestedOneWithoutUserInput
    examiner?: ExaminerCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutStudentInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated?: Date | string
    dateUpdated?: Date | string
    authManager?: AuthManagerUncheckedCreateNestedOneWithoutUserInput
    examiner?: ExaminerUncheckedCreateNestedOneWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutStudentInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutStudentInput, UserProfileUncheckedCreateWithoutStudentInput>
  }

  export type StudentExamCreateWithoutStudentInput = {
    id?: string
    status?: $Enums.ExamStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeSpent: number
    score?: number | null
    exam: ExamCreateNestedOneWithoutStudentExamsInput
  }

  export type StudentExamUncheckedCreateWithoutStudentInput = {
    id?: string
    examId: string
    status?: $Enums.ExamStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeSpent: number
    score?: number | null
  }

  export type StudentExamCreateOrConnectWithoutStudentInput = {
    where: StudentExamWhereUniqueInput
    create: XOR<StudentExamCreateWithoutStudentInput, StudentExamUncheckedCreateWithoutStudentInput>
  }

  export type StudentExamCreateManyStudentInputEnvelope = {
    data: StudentExamCreateManyStudentInput | StudentExamCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ExamAttemptCreateWithoutStudentInput = {
    id?: string
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
    exam: ExamCreateNestedOneWithoutExamAttemptsInput
    answers?: AnswerCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptUncheckedCreateWithoutStudentInput = {
    id?: string
    examId: string
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptCreateOrConnectWithoutStudentInput = {
    where: ExamAttemptWhereUniqueInput
    create: XOR<ExamAttemptCreateWithoutStudentInput, ExamAttemptUncheckedCreateWithoutStudentInput>
  }

  export type ExamAttemptCreateManyStudentInputEnvelope = {
    data: ExamAttemptCreateManyStudentInput | ExamAttemptCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutStudentInput = {
    update: XOR<UserProfileUpdateWithoutStudentInput, UserProfileUncheckedUpdateWithoutStudentInput>
    create: XOR<UserProfileCreateWithoutStudentInput, UserProfileUncheckedCreateWithoutStudentInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutStudentInput, UserProfileUncheckedUpdateWithoutStudentInput>
  }

  export type UserProfileUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    authManager?: AuthManagerUpdateOneWithoutUserNestedInput
    examiner?: ExaminerUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    authManager?: AuthManagerUncheckedUpdateOneWithoutUserNestedInput
    examiner?: ExaminerUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type StudentExamUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentExamWhereUniqueInput
    update: XOR<StudentExamUpdateWithoutStudentInput, StudentExamUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentExamCreateWithoutStudentInput, StudentExamUncheckedCreateWithoutStudentInput>
  }

  export type StudentExamUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentExamWhereUniqueInput
    data: XOR<StudentExamUpdateWithoutStudentInput, StudentExamUncheckedUpdateWithoutStudentInput>
  }

  export type StudentExamUpdateManyWithWhereWithoutStudentInput = {
    where: StudentExamScalarWhereInput
    data: XOR<StudentExamUpdateManyMutationInput, StudentExamUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentExamScalarWhereInput = {
    AND?: StudentExamScalarWhereInput | StudentExamScalarWhereInput[]
    OR?: StudentExamScalarWhereInput[]
    NOT?: StudentExamScalarWhereInput | StudentExamScalarWhereInput[]
    id?: UuidFilter<"StudentExam"> | string
    studentId?: UuidFilter<"StudentExam"> | string
    examId?: UuidFilter<"StudentExam"> | string
    status?: EnumExamStatusFilter<"StudentExam"> | $Enums.ExamStatus
    startedAt?: DateTimeNullableFilter<"StudentExam"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"StudentExam"> | Date | string | null
    timeSpent?: IntFilter<"StudentExam"> | number
    score?: FloatNullableFilter<"StudentExam"> | number | null
  }

  export type ExamAttemptUpsertWithWhereUniqueWithoutStudentInput = {
    where: ExamAttemptWhereUniqueInput
    update: XOR<ExamAttemptUpdateWithoutStudentInput, ExamAttemptUncheckedUpdateWithoutStudentInput>
    create: XOR<ExamAttemptCreateWithoutStudentInput, ExamAttemptUncheckedCreateWithoutStudentInput>
  }

  export type ExamAttemptUpdateWithWhereUniqueWithoutStudentInput = {
    where: ExamAttemptWhereUniqueInput
    data: XOR<ExamAttemptUpdateWithoutStudentInput, ExamAttemptUncheckedUpdateWithoutStudentInput>
  }

  export type ExamAttemptUpdateManyWithWhereWithoutStudentInput = {
    where: ExamAttemptScalarWhereInput
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyWithoutStudentInput>
  }

  export type ExamAttemptScalarWhereInput = {
    AND?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
    OR?: ExamAttemptScalarWhereInput[]
    NOT?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
    id?: UuidFilter<"ExamAttempt"> | string
    studentId?: UuidNullableFilter<"ExamAttempt"> | string | null
    examId?: UuidFilter<"ExamAttempt"> | string
    startTime?: DateTimeNullableFilter<"ExamAttempt"> | Date | string | null
    submittedAt?: DateTimeFilter<"ExamAttempt"> | Date | string
    totalScore?: FloatNullableFilter<"ExamAttempt"> | number | null
    responderEmal?: StringNullableFilter<"ExamAttempt"> | string | null
    responderName?: StringNullableFilter<"ExamAttempt"> | string | null
  }

  export type ExamCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    questions?: QuestionCreateNestedManyWithoutExamInput
    studentExams?: StudentExamCreateNestedManyWithoutExamInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    studentExams?: StudentExamUncheckedCreateNestedManyWithoutExamInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutCreatorInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutCreatorInput, ExamUncheckedCreateWithoutCreatorInput>
  }

  export type ExamCreateManyCreatorInputEnvelope = {
    data: ExamCreateManyCreatorInput | ExamCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileCreateWithoutExaminerInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated?: Date | string
    dateUpdated?: Date | string
    authManager?: AuthManagerCreateNestedOneWithoutUserInput
    student?: StudentCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutExaminerInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated?: Date | string
    dateUpdated?: Date | string
    authManager?: AuthManagerUncheckedCreateNestedOneWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutExaminerInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutExaminerInput, UserProfileUncheckedCreateWithoutExaminerInput>
  }

  export type ExamUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutCreatorInput, ExamUncheckedUpdateWithoutCreatorInput>
    create: XOR<ExamCreateWithoutCreatorInput, ExamUncheckedCreateWithoutCreatorInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutCreatorInput, ExamUncheckedUpdateWithoutCreatorInput>
  }

  export type ExamUpdateManyWithWhereWithoutCreatorInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ExamScalarWhereInput = {
    AND?: ExamScalarWhereInput | ExamScalarWhereInput[]
    OR?: ExamScalarWhereInput[]
    NOT?: ExamScalarWhereInput | ExamScalarWhereInput[]
    id?: UuidFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    subject?: StringFilter<"Exam"> | string
    link?: StringFilter<"Exam"> | string
    creatorId?: UuidFilter<"Exam"> | string
    enforceTimeLimit?: BoolFilter<"Exam"> | boolean
    stipulatedTime?: IntFilter<"Exam"> | number
    dateCreated?: DateTimeFilter<"Exam"> | Date | string
    dateUpdated?: DateTimeFilter<"Exam"> | Date | string
    isPublic?: BoolFilter<"Exam"> | boolean
  }

  export type UserProfileUpsertWithoutExaminerInput = {
    update: XOR<UserProfileUpdateWithoutExaminerInput, UserProfileUncheckedUpdateWithoutExaminerInput>
    create: XOR<UserProfileCreateWithoutExaminerInput, UserProfileUncheckedCreateWithoutExaminerInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutExaminerInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutExaminerInput, UserProfileUncheckedUpdateWithoutExaminerInput>
  }

  export type UserProfileUpdateWithoutExaminerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    authManager?: AuthManagerUpdateOneWithoutUserNestedInput
    student?: StudentUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutExaminerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    authManager?: AuthManagerUncheckedUpdateOneWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileCreateWithoutAuthManagerInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated?: Date | string
    dateUpdated?: Date | string
    examiner?: ExaminerCreateNestedOneWithoutProfileInput
    student?: StudentCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutAuthManagerInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    dateCreated?: Date | string
    dateUpdated?: Date | string
    examiner?: ExaminerUncheckedCreateNestedOneWithoutProfileInput
    student?: StudentUncheckedCreateNestedOneWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutAuthManagerInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutAuthManagerInput, UserProfileUncheckedCreateWithoutAuthManagerInput>
  }

  export type UserProfileUpsertWithoutAuthManagerInput = {
    update: XOR<UserProfileUpdateWithoutAuthManagerInput, UserProfileUncheckedUpdateWithoutAuthManagerInput>
    create: XOR<UserProfileCreateWithoutAuthManagerInput, UserProfileUncheckedCreateWithoutAuthManagerInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutAuthManagerInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutAuthManagerInput, UserProfileUncheckedUpdateWithoutAuthManagerInput>
  }

  export type UserProfileUpdateWithoutAuthManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    examiner?: ExaminerUpdateOneWithoutProfileNestedInput
    student?: StudentUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutAuthManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    examiner?: ExaminerUncheckedUpdateOneWithoutProfileNestedInput
    student?: StudentUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type AuthManagerCreateWithoutUserInput = {
    id?: string
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    isLoggedIn?: boolean
    lastLoginAt?: Date | string | null
    lastActivityAt?: Date | string | null
    loginAttempts?: number
    isLocked?: boolean
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthManagerUncheckedCreateWithoutUserInput = {
    id?: string
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    isLoggedIn?: boolean
    lastLoginAt?: Date | string | null
    lastActivityAt?: Date | string | null
    loginAttempts?: number
    isLocked?: boolean
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthManagerCreateOrConnectWithoutUserInput = {
    where: AuthManagerWhereUniqueInput
    create: XOR<AuthManagerCreateWithoutUserInput, AuthManagerUncheckedCreateWithoutUserInput>
  }

  export type ExaminerCreateWithoutProfileInput = {
    id?: string
    name: string
    exams?: ExamCreateNestedManyWithoutCreatorInput
  }

  export type ExaminerUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    exams?: ExamUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type ExaminerCreateOrConnectWithoutProfileInput = {
    where: ExaminerWhereUniqueInput
    create: XOR<ExaminerCreateWithoutProfileInput, ExaminerUncheckedCreateWithoutProfileInput>
  }

  export type StudentCreateWithoutProfileInput = {
    id?: string
    name: string
    studentExams?: StudentExamCreateNestedManyWithoutStudentInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    studentExams?: StudentExamUncheckedCreateNestedManyWithoutStudentInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutProfileInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutProfileInput, StudentUncheckedCreateWithoutProfileInput>
  }

  export type AuthManagerUpsertWithoutUserInput = {
    update: XOR<AuthManagerUpdateWithoutUserInput, AuthManagerUncheckedUpdateWithoutUserInput>
    create: XOR<AuthManagerCreateWithoutUserInput, AuthManagerUncheckedCreateWithoutUserInput>
    where?: AuthManagerWhereInput
  }

  export type AuthManagerUpdateToOneWithWhereWithoutUserInput = {
    where?: AuthManagerWhereInput
    data: XOR<AuthManagerUpdateWithoutUserInput, AuthManagerUncheckedUpdateWithoutUserInput>
  }

  export type AuthManagerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLoggedIn?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthManagerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isLoggedIn?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminerUpsertWithoutProfileInput = {
    update: XOR<ExaminerUpdateWithoutProfileInput, ExaminerUncheckedUpdateWithoutProfileInput>
    create: XOR<ExaminerCreateWithoutProfileInput, ExaminerUncheckedCreateWithoutProfileInput>
    where?: ExaminerWhereInput
  }

  export type ExaminerUpdateToOneWithWhereWithoutProfileInput = {
    where?: ExaminerWhereInput
    data: XOR<ExaminerUpdateWithoutProfileInput, ExaminerUncheckedUpdateWithoutProfileInput>
  }

  export type ExaminerUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exams?: ExamUpdateManyWithoutCreatorNestedInput
  }

  export type ExaminerUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exams?: ExamUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type StudentUpsertWithoutProfileInput = {
    update: XOR<StudentUpdateWithoutProfileInput, StudentUncheckedUpdateWithoutProfileInput>
    create: XOR<StudentCreateWithoutProfileInput, StudentUncheckedCreateWithoutProfileInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutProfileInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutProfileInput, StudentUncheckedUpdateWithoutProfileInput>
  }

  export type StudentUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentExams?: StudentExamUpdateManyWithoutStudentNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentExams?: StudentExamUncheckedUpdateManyWithoutStudentNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ExaminerCreateWithoutExamsInput = {
    id?: string
    name: string
    profile: UserProfileCreateNestedOneWithoutExaminerInput
  }

  export type ExaminerUncheckedCreateWithoutExamsInput = {
    id?: string
    name: string
    profileId: string
  }

  export type ExaminerCreateOrConnectWithoutExamsInput = {
    where: ExaminerWhereUniqueInput
    create: XOR<ExaminerCreateWithoutExamsInput, ExaminerUncheckedCreateWithoutExamsInput>
  }

  export type QuestionCreateWithoutExamInput = {
    id?: string
    text: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
    options?: OptionCreateNestedManyWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutExamInput = {
    id?: string
    text: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutExamInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionCreateManyExamInputEnvelope = {
    data: QuestionCreateManyExamInput | QuestionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type StudentExamCreateWithoutExamInput = {
    id?: string
    status?: $Enums.ExamStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeSpent: number
    score?: number | null
    student: StudentCreateNestedOneWithoutStudentExamsInput
  }

  export type StudentExamUncheckedCreateWithoutExamInput = {
    id?: string
    studentId: string
    status?: $Enums.ExamStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeSpent: number
    score?: number | null
  }

  export type StudentExamCreateOrConnectWithoutExamInput = {
    where: StudentExamWhereUniqueInput
    create: XOR<StudentExamCreateWithoutExamInput, StudentExamUncheckedCreateWithoutExamInput>
  }

  export type StudentExamCreateManyExamInputEnvelope = {
    data: StudentExamCreateManyExamInput | StudentExamCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ExamAttemptCreateWithoutExamInput = {
    id?: string
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
    student?: StudentCreateNestedOneWithoutExamAttemptsInput
    answers?: AnswerCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptUncheckedCreateWithoutExamInput = {
    id?: string
    studentId?: string | null
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type ExamAttemptCreateOrConnectWithoutExamInput = {
    where: ExamAttemptWhereUniqueInput
    create: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput>
  }

  export type ExamAttemptCreateManyExamInputEnvelope = {
    data: ExamAttemptCreateManyExamInput | ExamAttemptCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ExaminerUpsertWithoutExamsInput = {
    update: XOR<ExaminerUpdateWithoutExamsInput, ExaminerUncheckedUpdateWithoutExamsInput>
    create: XOR<ExaminerCreateWithoutExamsInput, ExaminerUncheckedCreateWithoutExamsInput>
    where?: ExaminerWhereInput
  }

  export type ExaminerUpdateToOneWithWhereWithoutExamsInput = {
    where?: ExaminerWhereInput
    data: XOR<ExaminerUpdateWithoutExamsInput, ExaminerUncheckedUpdateWithoutExamsInput>
  }

  export type ExaminerUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: UserProfileUpdateOneRequiredWithoutExaminerNestedInput
  }

  export type ExaminerUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
  }

  export type QuestionUpdateManyWithWhereWithoutExamInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutExamInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: UuidFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    examId?: UuidFilter<"Question"> | string
    required?: BoolFilter<"Question"> | boolean
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    expectedAnswer?: StringNullableFilter<"Question"> | string | null
  }

  export type StudentExamUpsertWithWhereUniqueWithoutExamInput = {
    where: StudentExamWhereUniqueInput
    update: XOR<StudentExamUpdateWithoutExamInput, StudentExamUncheckedUpdateWithoutExamInput>
    create: XOR<StudentExamCreateWithoutExamInput, StudentExamUncheckedCreateWithoutExamInput>
  }

  export type StudentExamUpdateWithWhereUniqueWithoutExamInput = {
    where: StudentExamWhereUniqueInput
    data: XOR<StudentExamUpdateWithoutExamInput, StudentExamUncheckedUpdateWithoutExamInput>
  }

  export type StudentExamUpdateManyWithWhereWithoutExamInput = {
    where: StudentExamScalarWhereInput
    data: XOR<StudentExamUpdateManyMutationInput, StudentExamUncheckedUpdateManyWithoutExamInput>
  }

  export type ExamAttemptUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamAttemptWhereUniqueInput
    update: XOR<ExamAttemptUpdateWithoutExamInput, ExamAttemptUncheckedUpdateWithoutExamInput>
    create: XOR<ExamAttemptCreateWithoutExamInput, ExamAttemptUncheckedCreateWithoutExamInput>
  }

  export type ExamAttemptUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamAttemptWhereUniqueInput
    data: XOR<ExamAttemptUpdateWithoutExamInput, ExamAttemptUncheckedUpdateWithoutExamInput>
  }

  export type ExamAttemptUpdateManyWithWhereWithoutExamInput = {
    where: ExamAttemptScalarWhereInput
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyWithoutExamInput>
  }

  export type StudentCreateWithoutStudentExamsInput = {
    id?: string
    name: string
    profile: UserProfileCreateNestedOneWithoutStudentInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutStudentExamsInput = {
    id?: string
    name: string
    profileId: string
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutStudentExamsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentExamsInput, StudentUncheckedCreateWithoutStudentExamsInput>
  }

  export type ExamCreateWithoutStudentExamsInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    creator: ExaminerCreateNestedOneWithoutExamsInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutStudentExamsInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    creatorId: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutStudentExamsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutStudentExamsInput, ExamUncheckedCreateWithoutStudentExamsInput>
  }

  export type StudentUpsertWithoutStudentExamsInput = {
    update: XOR<StudentUpdateWithoutStudentExamsInput, StudentUncheckedUpdateWithoutStudentExamsInput>
    create: XOR<StudentCreateWithoutStudentExamsInput, StudentUncheckedCreateWithoutStudentExamsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentExamsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentExamsInput, StudentUncheckedUpdateWithoutStudentExamsInput>
  }

  export type StudentUpdateWithoutStudentExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: UserProfileUpdateOneRequiredWithoutStudentNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ExamUpsertWithoutStudentExamsInput = {
    update: XOR<ExamUpdateWithoutStudentExamsInput, ExamUncheckedUpdateWithoutStudentExamsInput>
    create: XOR<ExamCreateWithoutStudentExamsInput, ExamUncheckedCreateWithoutStudentExamsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutStudentExamsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutStudentExamsInput, ExamUncheckedUpdateWithoutStudentExamsInput>
  }

  export type ExamUpdateWithoutStudentExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    creator?: ExaminerUpdateOneRequiredWithoutExamsNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutStudentExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    creator: ExaminerCreateNestedOneWithoutExamsInput
    studentExams?: StudentExamCreateNestedManyWithoutExamInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    creatorId: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    studentExams?: StudentExamUncheckedCreateNestedManyWithoutExamInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutQuestionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type OptionCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect: boolean
    answers?: AnswerCreateNestedManyWithoutOptionsInput
  }

  export type OptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect: boolean
    answers?: AnswerUncheckedCreateNestedManyWithoutOptionsInput
  }

  export type OptionCreateOrConnectWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionCreateManyQuestionInputEnvelope = {
    data: OptionCreateManyQuestionInput | OptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
    attempt: ExamAttemptCreateNestedOneWithoutAnswersInput
    options?: OptionCreateNestedManyWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    attemptId: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
    options?: OptionUncheckedCreateNestedManyWithoutAnswersInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ExamUpsertWithoutQuestionsInput = {
    update: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    creator?: ExaminerUpdateOneRequiredWithoutExamsNestedInput
    studentExams?: StudentExamUpdateManyWithoutExamNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    studentExams?: StudentExamUncheckedUpdateManyWithoutExamNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutExamNestedInput
  }

  export type OptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
  }

  export type OptionUpdateManyWithWhereWithoutQuestionInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: UuidFilter<"Option"> | string
    text?: StringFilter<"Option"> | string
    questionId?: UuidFilter<"Option"> | string
    isCorrect?: BoolFilter<"Option"> | boolean
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: UuidFilter<"Answer"> | string
    attemptId?: UuidFilter<"Answer"> | string
    questionId?: UuidFilter<"Answer"> | string
    textAnswer?: StringNullableListFilter<"Answer">
    score?: FloatNullableFilter<"Answer"> | number | null
  }

  export type QuestionCreateWithoutOptionsInput = {
    id?: string
    text: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
    exam: ExamCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutOptionsInput = {
    id?: string
    text: string
    examId: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutOptionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
  }

  export type AnswerCreateWithoutOptionsInput = {
    id?: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
    attempt: ExamAttemptCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutOptionsInput = {
    id?: string
    attemptId: string
    questionId: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
  }

  export type AnswerCreateOrConnectWithoutOptionsInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutOptionsInput, AnswerUncheckedCreateWithoutOptionsInput>
  }

  export type QuestionUpsertWithoutOptionsInput = {
    update: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutOptionsInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutOptionsInput, AnswerUncheckedUpdateWithoutOptionsInput>
    create: XOR<AnswerCreateWithoutOptionsInput, AnswerUncheckedCreateWithoutOptionsInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutOptionsInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutOptionsInput, AnswerUncheckedUpdateWithoutOptionsInput>
  }

  export type AnswerUpdateManyWithWhereWithoutOptionsInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutOptionsInput>
  }

  export type StudentCreateWithoutExamAttemptsInput = {
    id?: string
    name: string
    profile: UserProfileCreateNestedOneWithoutStudentInput
    studentExams?: StudentExamCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutExamAttemptsInput = {
    id?: string
    name: string
    profileId: string
    studentExams?: StudentExamUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutExamAttemptsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutExamAttemptsInput, StudentUncheckedCreateWithoutExamAttemptsInput>
  }

  export type ExamCreateWithoutExamAttemptsInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    creator: ExaminerCreateNestedOneWithoutExamsInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    studentExams?: StudentExamCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutExamAttemptsInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    creatorId: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    studentExams?: StudentExamUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutExamAttemptsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutExamAttemptsInput, ExamUncheckedCreateWithoutExamAttemptsInput>
  }

  export type AnswerCreateWithoutAttemptInput = {
    id?: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    options?: OptionCreateNestedManyWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutAttemptInput = {
    id?: string
    questionId: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
    options?: OptionUncheckedCreateNestedManyWithoutAnswersInput
  }

  export type AnswerCreateOrConnectWithoutAttemptInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAttemptInput, AnswerUncheckedCreateWithoutAttemptInput>
  }

  export type AnswerCreateManyAttemptInputEnvelope = {
    data: AnswerCreateManyAttemptInput | AnswerCreateManyAttemptInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutExamAttemptsInput = {
    update: XOR<StudentUpdateWithoutExamAttemptsInput, StudentUncheckedUpdateWithoutExamAttemptsInput>
    create: XOR<StudentCreateWithoutExamAttemptsInput, StudentUncheckedCreateWithoutExamAttemptsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutExamAttemptsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutExamAttemptsInput, StudentUncheckedUpdateWithoutExamAttemptsInput>
  }

  export type StudentUpdateWithoutExamAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: UserProfileUpdateOneRequiredWithoutStudentNestedInput
    studentExams?: StudentExamUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutExamAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    studentExams?: StudentExamUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ExamUpsertWithoutExamAttemptsInput = {
    update: XOR<ExamUpdateWithoutExamAttemptsInput, ExamUncheckedUpdateWithoutExamAttemptsInput>
    create: XOR<ExamCreateWithoutExamAttemptsInput, ExamUncheckedCreateWithoutExamAttemptsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutExamAttemptsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutExamAttemptsInput, ExamUncheckedUpdateWithoutExamAttemptsInput>
  }

  export type ExamUpdateWithoutExamAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    creator?: ExaminerUpdateOneRequiredWithoutExamsNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    studentExams?: StudentExamUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutExamAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    studentExams?: StudentExamUncheckedUpdateManyWithoutExamNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutAttemptInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutAttemptInput, AnswerUncheckedUpdateWithoutAttemptInput>
    create: XOR<AnswerCreateWithoutAttemptInput, AnswerUncheckedCreateWithoutAttemptInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutAttemptInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutAttemptInput, AnswerUncheckedUpdateWithoutAttemptInput>
  }

  export type AnswerUpdateManyWithWhereWithoutAttemptInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAttemptInput>
  }

  export type ExamAttemptCreateWithoutAnswersInput = {
    id?: string
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
    student?: StudentCreateNestedOneWithoutExamAttemptsInput
    exam: ExamCreateNestedOneWithoutExamAttemptsInput
  }

  export type ExamAttemptUncheckedCreateWithoutAnswersInput = {
    id?: string
    studentId?: string | null
    examId: string
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
  }

  export type ExamAttemptCreateOrConnectWithoutAnswersInput = {
    where: ExamAttemptWhereUniqueInput
    create: XOR<ExamAttemptCreateWithoutAnswersInput, ExamAttemptUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    text: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
    exam: ExamCreateNestedOneWithoutQuestionsInput
    options?: OptionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    text: string
    examId: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type OptionCreateWithoutAnswersInput = {
    id?: string
    text: string
    isCorrect: boolean
    question: QuestionCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateWithoutAnswersInput = {
    id?: string
    text: string
    questionId: string
    isCorrect: boolean
  }

  export type OptionCreateOrConnectWithoutAnswersInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput>
  }

  export type ExamAttemptUpsertWithoutAnswersInput = {
    update: XOR<ExamAttemptUpdateWithoutAnswersInput, ExamAttemptUncheckedUpdateWithoutAnswersInput>
    create: XOR<ExamAttemptCreateWithoutAnswersInput, ExamAttemptUncheckedCreateWithoutAnswersInput>
    where?: ExamAttemptWhereInput
  }

  export type ExamAttemptUpdateToOneWithWhereWithoutAnswersInput = {
    where?: ExamAttemptWhereInput
    data: XOR<ExamAttemptUpdateWithoutAnswersInput, ExamAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type ExamAttemptUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneWithoutExamAttemptsNestedInput
    exam?: ExamUpdateOneRequiredWithoutExamAttemptsNestedInput
  }

  export type ExamAttemptUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    examId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    options?: OptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type OptionUpsertWithWhereUniqueWithoutAnswersInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutAnswersInput, OptionUncheckedUpdateWithoutAnswersInput>
    create: XOR<OptionCreateWithoutAnswersInput, OptionUncheckedCreateWithoutAnswersInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutAnswersInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutAnswersInput, OptionUncheckedUpdateWithoutAnswersInput>
  }

  export type OptionUpdateManyWithWhereWithoutAnswersInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutAnswersInput>
  }

  export type StudentExamCreateManyStudentInput = {
    id?: string
    examId: string
    status?: $Enums.ExamStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeSpent: number
    score?: number | null
  }

  export type ExamAttemptCreateManyStudentInput = {
    id?: string
    examId: string
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
  }

  export type StudentExamUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    exam?: ExamUpdateOneRequiredWithoutStudentExamsNestedInput
  }

  export type StudentExamUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StudentExamUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExamAttemptUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
    exam?: ExamUpdateOneRequiredWithoutExamAttemptsNestedInput
    answers?: AnswerUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamCreateManyCreatorInput = {
    id?: string
    title: string
    description: string
    subject?: string
    link: string
    enforceTimeLimit?: boolean
    stipulatedTime: number
    dateCreated?: Date | string
    dateUpdated?: Date | string
    isPublic?: boolean
  }

  export type ExamUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    questions?: QuestionUpdateManyWithoutExamNestedInput
    studentExams?: StudentExamUpdateManyWithoutExamNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    studentExams?: StudentExamUncheckedUpdateManyWithoutExamNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    enforceTimeLimit?: BoolFieldUpdateOperationsInput | boolean
    stipulatedTime?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionCreateManyExamInput = {
    id?: string
    text: string
    required: boolean
    type: $Enums.QuestionType
    expectedAnswer?: string | null
  }

  export type StudentExamCreateManyExamInput = {
    id?: string
    studentId: string
    status?: $Enums.ExamStatus
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    timeSpent: number
    score?: number | null
  }

  export type ExamAttemptCreateManyExamInput = {
    id?: string
    studentId?: string | null
    startTime?: Date | string | null
    submittedAt?: Date | string
    totalScore?: number | null
    responderEmal?: string | null
    responderName?: string | null
  }

  export type QuestionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentExamUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    student?: StudentUpdateOneRequiredWithoutStudentExamsNestedInput
  }

  export type StudentExamUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StudentExamUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumExamStatusFieldUpdateOperationsInput | $Enums.ExamStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExamAttemptUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneWithoutExamAttemptsNestedInput
    answers?: AnswerUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type ExamAttemptUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    responderEmal?: NullableStringFieldUpdateOperationsInput | string | null
    responderName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OptionCreateManyQuestionInput = {
    id?: string
    text: string
    isCorrect: boolean
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    attemptId: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
  }

  export type OptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUpdateManyWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    answers?: AnswerUncheckedUpdateManyWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempt?: ExamAttemptUpdateOneRequiredWithoutAnswersNestedInput
    options?: OptionUpdateManyWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    options?: OptionUncheckedUpdateManyWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnswerUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    attempt?: ExamAttemptUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnswerUncheckedUpdateManyWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnswerCreateManyAttemptInput = {
    id?: string
    questionId: string
    textAnswer?: AnswerCreatetextAnswerInput | string[]
    score?: number | null
  }

  export type AnswerUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    options?: OptionUpdateManyWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    options?: OptionUncheckedUpdateManyWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    textAnswer?: AnswerUpdatetextAnswerInput | string[]
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OptionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUncheckedUpdateManyWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
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