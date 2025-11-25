import { Either } from "../../domain/signal/railway.ts"

export const Perf = <A extends unknown[], R>(
    value: (...args: A) => Promise<Either<R>>, 
    context: ClassMethodDecoratorContext
    ) => (...args:A): Promise<Either<R>> => {

    const start = performance.now()
    const resutl = value.apply(this, args)
    const end = performance.now()

    console.log(`${String(context.name)} executed in ${end - start}ms`)
    
    return resutl
}