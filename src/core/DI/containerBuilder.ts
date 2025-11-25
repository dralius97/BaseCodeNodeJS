import { Class, Identifier, Provider } from "./type.ts"

export class BindingBuilder {
  constructor(private container: Map<Identifier, Provider<unknown>>, private key){}
  
  to<T>(ctor: Class<T>){
    this.container.set(this.key, { instance: ctor, singleton: false })
    return this
  }

  singleton(){
    const existingProvider = this.container.get(this.key)
    this.container.delete(this.key)
    this.container.set(this.key, { instance: existingProvider!.instance, singleton: true })
    return this
  }
}