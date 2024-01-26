/**
 * @description Checks validity of same type of multiple variables
 * @param args (variables with posible same type), place in any order `isSameType(val1, val2, val3)`
 * @returns `boolean` value of validity
 */
export const isSameType = (...args: unknown[]): boolean => {
    for (let i = 1; i < args.length; i++) {
        if (typeof args[i] === typeof args[i - 1]) continue;
        return false;
    }
    return true;
}
