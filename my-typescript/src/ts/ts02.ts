export {};
interface Dictionary<T = any> {
  [key: string]: T;
}
interface Widget {
  id: string;
  name: string;
}
type StrDict = Dictionary<Widget>;
let ss:StrDict={
    'we':{
        id:'',
        name: '2'
      }
}

