import { Left, Right } from "../signal/railway.ts";

export interface UploadedFile {
  filename: string;
  mimetype: string;
  encoding?: string;
  size: number;
  buffer: Buffer;
  tempFilePath?: string;
  stream?: NodeJS.ReadableStream;
}


export interface HttpResponse {
    status(code:number): this;
    json(data:Record<string, unknown>): void;
    send(data: unknown): void;
    setHeader(name:string, value:string): void;
    setLocals( key: string, value:unknown ): void;
    getLocals( key: string ): unknown;
}
export interface HttpRequest {
    method: string;
    path: string;
    headers: Record<string, string> | string[];
    query?: Record<string, string>;
    params?: Record<string, string>;
    body?: unknown;
    files?: Record<string, UploadedFile> | UploadedFile[]; 
}


export type HttpHandler<T = unknown> = (req: HttpRequest, res: HttpResponse) => Promise<Right<T>> | Promise<Left>

