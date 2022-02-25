// type MyPick<T, K> = any

/*
  1. 要做的是什么
    第一个参数可以理解为对象
    第二个参数可以理解为 key 数组
    要做的就是把对象中所有在 key 数组中出现的属性拷贝到一个新的对象
  2. 怎么做
    2-1. 创建一个新的对象
    2-2. 遍历 key 数组，将对象中该属性拷贝到新的对象中

  js 实现
  const obj = {
    name:'running snail',
    age:18,
    sex:1
  }
  function pick(obj,keys){
    const res = {}
    keys.forEach(key => {
      if(key in obj) res[key] = obj[key]
    })
    return res;
  }
*/

type MyPick<T, K extends keyof T> = {
  [P in K]:T[P];
}

/*
K extends T 表示 K 应该存在于 T 中，但是因为 T 是一个 interface，所以我们要通过 keyof 将
interface Todo {
  title: string
  description: string
  completed: boolean
}
转为类似 ["title","description","completed"] 这种形式

ts 中可以用 in 遍历 集合，然后用一个变量接收
所以 [P in K] 的含义就是： 遍历 K，获取每一个 key，并用 P 变量接收
然后通过 T[P] 拿到 T 中该 key 的值
*/