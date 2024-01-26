export type OmitPartial<T, TOmit extends keyof T> = T extends object ? {
    [P in keyof Omit<T, TOmit>]?: T[P];
} : T;