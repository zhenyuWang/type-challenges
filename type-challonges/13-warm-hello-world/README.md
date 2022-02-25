在Type Challenges中，我们使用类型系统本身来进行断言。

对于此挑战，您将需要更改以下代码以使测试通过(没有类型检查错误)。

```ts
// expected to be string
type HelloWorld = any
```

```ts
// you should make this work
type test = Expect<Equal<HelloWorld, string>>
```