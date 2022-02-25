// type TupleToObject<T extends readonly any[]> = any

/*
  1. typeof 将 js 的东西转为 ts 的东西
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  typeof tuple = readonly ["tesla", "model 3", "model X", "model Y"]

  这里要注意，如果没有 as const，typeof tuple = string[]
  是因为用 const 声明的值是不变的，所以 ts 是直接拿的值，如果不是const，是直接拿的类型
*/

// js
// function TupleToObject(array){
//   const obj = {}
//   array.forEeach(val => {
//     obj[val] = val
//   })
//   return obj;
// }

type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]] : P;
}

// 通过 [number] 对元组类型遍历
// 因为 key 值不能是复杂数据类型，所以在输入的时候要校验一下数组中的值只能是 number | string | symbol