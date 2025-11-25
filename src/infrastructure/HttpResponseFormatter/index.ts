import { HttpResponse } from "../../domain/http/http.ts";
import { Left, Right } from "../../domain/signal/railway.ts";

export class HttpResponseFormatter {
    sendError(error:unknown, res: HttpResponse){
        if(error instanceof Left) {
            return res.status(error.code).json({
                message: error.message,
            })
        }
        if(error instanceof Error){
            return res.status(500).json({
                message: error.message || 'Internal Server Error!'
            })
        }
    }
    sendResponse<T>(response:Right<T>, res:HttpResponse){
        return res.status(response.code).json({
            message: response.message,
            data: response.data
        })
    }
}