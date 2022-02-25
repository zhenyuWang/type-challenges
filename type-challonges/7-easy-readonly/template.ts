
// type MyReadonly<T> = any

// readonly tempalte
// interface User  {
  // readonly name:string
// }
//
// const xiaohong:User = {
  // name:'xiaohong'
// }
// xiaohong.name = '123'

// js
// function readonly(obj){
//   const res = {}
//   for(const key in obj){
//     res[`readonly-${key}`] = obj[key]
//   }
//   return res;
// }

/*
  1. 遍历 obj (js obj ts interface)
  2. 加上 readonly 关键字
  3. 通过 key 获取 obj(interface) 里面的值
  4. 返回 obj
*/


type MyReadonly<T> = {
  readonly [P in keyof T]:T[P];
}
