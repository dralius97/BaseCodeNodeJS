import { Container } from "../../core/DI/container.ts";
import { Middleware } from "../../core/middleware/middleware.ts";
import { HttpResponseFormatter } from "../HttpResponseFormatter/index.ts";
import { TYPE } from "../../domain/DI/type.ts";

export const binding = () => {
    const container = Container.get()
    
    container.bind(TYPE.Middleware).to(Middleware).singleton()
    container.bind(TYPE.HttpResponseFormatter).to(HttpResponseFormatter).singleton()
}
