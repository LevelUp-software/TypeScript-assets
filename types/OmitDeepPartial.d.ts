import { DeepPartial } from "./DeepPartial";

export type OmitDeepPartial<T, TOmit extends keyof T> = T extends object ? {
    [P in keyof Omit<T, TOmit>]?: DeepPartial<T[P]>;
} : T;