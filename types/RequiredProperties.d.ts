export type RequiredProperties<T, TProps extends keyof T> = T extends object ?
    Required<Pick<T, TProps>> &
    Omit<T, TProps> : T;
