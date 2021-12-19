export interface Dictionary<T = any> {
  [key: string]: T;
}

type StrDict = Dictionary<string>;

type DictMember<T> = T extends Dictionary<infer V> ? V : never;

type StrDictMember = DictMember<StrDict>; // string

// infer 相当于定义了一个 变量 可以接受一个 泛型T