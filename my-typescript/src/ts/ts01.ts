export{}
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
  
type TodoPreview = Pick<Todo, "title" | "completed">;
  
const todo: TodoPreview = {
title: "Clean room",
completed: false
};


interface Example {
    a: string;
    b: string | number;
    c: () => void;
    d: {};
  }
  type ConditionalPick<T, K> = {
    [P in keyof T as (T[P] extends K ? P : never)]: T[P]
  }
  
  // 测试用例：
  type StringKeysOnly = ConditionalPick<Example, string>;
  //=> {a: string}