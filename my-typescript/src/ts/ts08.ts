export interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    break(): void;
  }
  
  type AnimalFn = (arg: Animal) => void
  type DogFn = (arg: Dog) => void
  
  let Eg1: AnimalFn;
  let Eg2: DogFn;
  // 不再可以赋值了，
  // AnimalFn = DogFn不可以赋值了, Animal = Dog是可以的
  Eg1 = Eg2;
  // 反过来可以
  Eg2 = Eg1;
  
  