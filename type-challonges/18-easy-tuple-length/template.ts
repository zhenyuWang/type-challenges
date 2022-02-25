// type Length<T extends any> = any

/*
  判断传入参数是否是数组
  如果不是 return
  否则返回 arr.length

  function getLen(arr){
    if(Array.isArray(arr)) return arr.length
  }
*/

type Length<T extends readonly any[]> = T["length"]

// 因为测试 case 里面的值都是 const 声明，所以这里要用 readonly 约束
// 通过 ["length"] 获取 元组长度