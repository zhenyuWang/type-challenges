// type First<T extends any[]> = any

/*
要做的就是返回数组的第一个元素
要注意的是如果是一个空数组，返回 never

function first(arr){
  return arr[0]||never
}
*/

// 1. 通过 T extends [] 判断 T 是否是空数组
// type First<T extends any[]> = T extends [] ? never : T[0];


// 2. 获取 tuple 的 length 判断是不是 0
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 3. 判断 T[0] 是否在 T 里面
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 4. 通过 infer 解构 const [first,...others] = arr
type First<T extends any[]> = T extends [infer First, ... infer Others]?First:never;