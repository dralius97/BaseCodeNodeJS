import { ContainerCore } from "./containerCore.ts";

class Container {
    private static container: ContainerCore | null = null;
    static set(instance: ContainerCore) {
        this.container = instance;
    }
    static get(): ContainerCore{
        if (!this.container) throw new Error("Container belum diinisialisasi");
        return this.container;
    }
}

export { Container }