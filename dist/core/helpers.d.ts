/**
 *
 * @description Function generator for *type guarding*
 * @param prop Property to check *(must be string or symbol)*
 * @param propType This property `type` alias primitive in string
 * @returns `Arrow function`, which returns `checkingVariable` is `T` *(boolean)*
 */
export declare function guardFactory<T>(prop: keyof T, propType: string | symbol): ((checkingVariable: unknown) => checkingVariable is T);
/**
 * @description Checks types of borrowed variables list
 * @param args List of values
 * @returns `boolean` - `true` if types are same, `false` if not
 */
export declare const isSameType: (...args: unknown[]) => boolean;
/**
 * @description Fucntion generator for custom conditional *type guarding*
 * @param callback Condition callback function
 * @returns `Arrow function`, which returns `checkingVariable` is `T` *(boolean)*
 */
export declare function conditionalGuardFactory<T>(callback: (entity: T) => boolean): ((checkingVariable: unknown) => checkingVariable is T);
