import { BindingBuilder } from "./containerBuilder.ts";
import { Identifier, Provider } from "./type.ts";


export class ContainerCore{
    private registry = new Map<Identifier, Provider<unknown>>();
    private singleton = new Map<Identifier, unknown>();

    public bind(key: Identifier){
        if(this.registry.has(key)) throw new Error('provider cannot bind more than one with same name')
        this.registry.set(key, {instance: null, singleton: false})
        return new BindingBuilder(this.registry, key) 
    }
    public get<T>(key:Identifier): T {
        if(!this.registry.has(key)) throw new Error(`provider not found: ${String(key)}`)
        const prov = this.registry.get(key)
        if(prov!.singleton && this.singleton.has(key)) return this.singleton.get(key) as T
        const instance = new (prov!.instance as { new (): unknown })()
        if(prov!.singleton) this.singleton.set(key, instance)
        return instance as T
    }
}

