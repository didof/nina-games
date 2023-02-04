// TODO[learn] Declare as .d.ts

export type Go<T, K> = [T, null] | [null, K]
export type GoOk<T> = [T, true] | [null, false]
export type GoErr<T> = Go<T, Error>
