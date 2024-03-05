"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conditionalGuardFactory = exports.isSameType = exports.guardFactory = void 0;
/**
 *
 * @description Function generator for *type guarding*
 * @param prop Property to check *(must be string or symbol)*
 * @param propType This property `type` alias primitive in string
 * @returns `Arrow function`, which returns `checkingVariable` is `T` *(boolean)*
 */
function guardFactory(prop, propType) {
    return (checkingVariable) => {
        return typeof checkingVariable[prop] === propType;
    };
}
exports.guardFactory = guardFactory;
/**
 * @description Checks types of borrowed variables list
 * @param args List of values
 * @returns `boolean` - `true` if types are same, `false` if not
 */
const isSameType = (...args) => {
    for (let i = 1; i < args.length; i++) {
        if (typeof args[i] === typeof args[i - 1])
            continue;
        return false;
    }
    return true;
};
exports.isSameType = isSameType;
/**
 * @description Fucntion generator for custom conditional *type guarding*
 * @param callback Condition callback function
 * @returns `Arrow function`, which returns `checkingVariable` is `T` *(boolean)*
 */
function conditionalGuardFactory(callback) {
    return (checkingVariable) => {
        return callback(checkingVariable);
    };
}
exports.conditionalGuardFactory = conditionalGuardFactory;
