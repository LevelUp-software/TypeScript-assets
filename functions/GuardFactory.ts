export function guardFactory<T>(prop: keyof T, propTypeStringAlias: string | symbol): ((checkingVariable: unknown) => checkingVariable is T) {
    return (checkingVariable: unknown): checkingVariable is T => {
        return typeof (checkingVariable as Required<T>)[prop as keyof T] === propTypeStringAlias;
    }
}