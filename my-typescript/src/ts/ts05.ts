export interface Person {
    name: string;
    age: number;
  }
  
  const sem: Person = { name: 'lbj', age: 30 };
  type Sem= typeof sem; // -> Person
  
  function toArray(x: number): Array<number> {
    return [x];
  }
  
  let  Func = typeof toArray;
  console.log(Func)