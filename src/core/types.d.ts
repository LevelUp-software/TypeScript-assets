export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type FromArray<T> = T extends (infer U)[] ? U : T;

export type OmitDeepPartial<T, TOmit extends keyof T> = T extends object ? {
    [P in keyof Omit<T, TOmit>]?: DeepPartial<T[P]>;
} : T;

export type OmitPartial<T, TOmit extends keyof T> = T extends object ? {
    [P in keyof Omit<T, TOmit>]?: T[P];
} : T;

export type PickDeepPartial<T, TPick extends keyof T> = T extends object ? {
    [P in keyof Pick<T, TPick>]?: DeepPartial<T[P]>;
}: T;

export type PickPartial<T, TPick extends keyof T> = T extends object ? {
    [P in keyof Pick<T, TPick>]?: T[P];
}: T;

export type RequiredProperties<T, TProps extends keyof T> = T extends object ?
    Required<Pick<T, TProps>> &
    Omit<T, TProps> : T;
