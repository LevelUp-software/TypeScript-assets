export type PickPartial<T, TPick extends keyof T> = T extends object ? {
    [P in keyof Pick<T, TPick>]?: T[P];
}: T;