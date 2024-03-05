/**
 * 
 * @description Function generator for *type guarding*
 * @param prop Property to check *(must be string or symbol)*
 * @param propType This property `type` alias primitive in string
 * @returns `Arrow function`, which returns `checkingVariable` is `T` *(boolean)*
 */
export function guardFactory<T>(prop: keyof T, propType: string | symbol): 
((checkingVariable: unknown) => checkingVariable is T) {
    return (checkingVariable: unknown): checkingVariable is T => {
        return typeof (checkingVariable as Required<T>)[prop as keyof T] === propType;
    }
}

/**
 * @description Checks types of borrowed variables list
 * @param args List of values
 * @returns `boolean` - `true` if types are same, `false` if not
 */
export const isSameType = (...args: unknown[]): boolean => {
    for (let i = 1; i < args.length; i++) {
        if (typeof args[i] === typeof args[i - 1]) continue;
        return false;
    }
    return true;
}

/**
 * @description Fucntion generator for custom conditional *type guarding*
 * @param callback Condition callback function
 * @returns `Arrow function`, which returns `checkingVariable` is `T` *(boolean)*
 */
export function conditionalGuardFactory<T>(callback: (entity: T) => boolean): 
((checkingVariable: unknown) => checkingVariable is T) {
    return (checkingVariable: unknown): checkingVariable is T => {
        return callback(checkingVariable as T);
    }
}
