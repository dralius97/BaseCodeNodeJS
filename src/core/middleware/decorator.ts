import { Either } from "../../domain/signal/railway.ts"


export const Middleware = <A extends unknown[], R> (fn: Function) => {
    return (
        value: (...args: A) => Promise<Either<R>>, 
        _context: ClassMethodDecoratorContext
    ) =>  async (...args:A): Promise<Either<R>> => {
        const validate = await fn(...args);
        if (validate.isLeft) return validate;
        return await value.apply(this, args);
    };
};