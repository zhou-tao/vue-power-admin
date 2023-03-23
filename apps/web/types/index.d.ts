declare type UnDefable<T> = T | undefined
declare type Nullable<T> = T | null
declare type NonNullable<T> = T extends null | undefined ? never : T
declare type Recordable<T = any> = Record<string, T>
declare type MaybeRef<T> = T | Ref<T>
declare type TimeoutID = Node.Timeout | null
