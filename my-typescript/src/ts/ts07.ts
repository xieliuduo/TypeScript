export interface AA{
    a:string
    b:number
}
export interface BB{
    // c:string
    a:number
    b:number
}

type CC=AA[keyof AA] //string|number
type DD=AA[keyof BB] 

interface T1 {
    name: string,
    sex: string,
  }
  
  interface T2 {
    sex: number,
  }
  
  /**
   * @example
   * T3 = {name: string, sex: number, age: number}
   */
  interface T3 extends T1, T2 {
    age: number,
  }
  
