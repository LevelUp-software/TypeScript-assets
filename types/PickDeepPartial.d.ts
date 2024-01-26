import { DeepPartial } from "./DeepPartial";

export type PickDeepPartial<T, TPick extends keyof T> = T extends object ? {
    [P in keyof Pick<T, TPick>]?: DeepPartial<T[P]>;
}: T;