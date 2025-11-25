import { HttpHandler, HttpRequest, HttpResponse } from "../../domain/http/http.ts"
import { Left, Right } from "../../domain/signal/railway.ts"

export class Middleware {
    private middleware: Map<string|symbol, Function[]>
    constructor(){
        this.middleware = new Map()
    }
    add(key:string|symbol, fnChain: HttpHandler[]){
        this.middleware.set(key, fnChain)
    }
    execute = (key: string|symbol) => async (req:HttpRequest,res:HttpResponse): Promise<Right<unknown> | Left | void> => {
        if(!this.middleware.has(key)) return
        const md = this.middleware.get(key)
        let result: Right<unknown> | Left = new Right('mdw pass')
        for (const fn of md!) {
            result = await fn(req,res)
            if(result instanceof Left){
                break
            }
        }
        return result
    }
}

