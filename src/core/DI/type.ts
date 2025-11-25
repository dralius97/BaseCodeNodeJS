export type Class<T = unknown> = abstract new (...args: unknown[]) => T;
export type Provider<T> = {
  instance: Class<T> | null
  singleton?: boolean,
};
export type Identifier = string | symbol