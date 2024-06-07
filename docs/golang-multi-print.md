---
title: 多线程轮流打印问题
---


```yaml


# qs: "多线程轮流打印问题(固定值打印和非固定值打印)" # 这几个都可以分别用 chan、mutex、wg和atomic实现一下
- type: 多线程轮流打印问题
  tag: *tag
  repo:
    - qs: 实现两个协程，其中一个产生随机数并写入到 chan 中，另一个从 chan 中读取，并打印出来，最终输出 5 个随机数

    - qs: 假设有 4 个协程，分别编号为 1/2/3/4，每秒钟会有一个协程打印出自己的编号，现在要求输出编号总是按照 1/2/3/4 这样的顺序打印，共打印 100 次
      url: https://go.dev/play/p/qbZsYAKlj07
    - qs: 编写一个程序，开启 3 个线程，这 3 个线程的 ID 分别为 A、B、C，每个线程将自己的 ID 在屏幕上打印 10 遍，要求输出结果必须按 ABC 的顺序显示；如：ABCABC...依次递推
    - qs: 轮流打印 dog pig cat，共打印 10 次？
    - qs: 两个人 bob 和 annie，互相喊对方的名字 10 次后，最终 bob 对 annie 说 bye bye？
    - qs: 10 个线程依次打印 1-10,11-20 直到 100？
    - qs: 三个线程交替打印至 100：线程 1 打印 1、4、7，线程 2 打印 2、5、8，线程 3 打印 3、6、9，一直打印到 100 结束
    - qs: 如何让 10 个线程按照顺序打印 0123456789？
    - qs: 怎么开 10 个线程，每个线程打印 1000 个数字，要按照顺序从 1 打印到 1w？


    - qs: 使用两个协程交替打印序列，一个协程打印数字，另一个协程打印字母，最终效果如下`1A2B...26Z`
      url: https://go.dev/play/p/MbuQWq-kwl8
    - qs: 用三个线程，顺序打印字母 A-Z，输出结果是 1A 2B 3C 1D 2E...打印完毕最后输出一个 OK
    - qs: 给一个数组，并发交替打印奇数和偶数，请分别用 chan、sync 和原子操作实现？


```



:::tip

可以看到，就是两种variants

:::



```go

func main() {
 inChan := make(chan int)
 outChan := make(chan int)

 go func() {
  for i := 0; i < 5; i++ {
   inChan <- rand.IntN(99)
  }
  close(inChan)
 }()

 go func(inChan chan int) {
  for in := range inChan {
   outChan <- in
   time.Sleep(time.Second)
  }
  close(outChan)
 }(inChan)

 for v := range outChan {
  fmt.Println(v)
 }
}
```



```markdown
// 假设有 4 个协程，分别编号为 1/2/3/4; 每秒钟会有一个协程打印出自己的编号; 现在要求输出编号总是按照 1/2/3/4 这样的顺序打印; 共打印 100 次;
```


```mdx-code-block
<Tabs>
<TabItem value="">
```

```go

// 我自己实现的，最简单版本
func main() {
 inChan := make(chan int)
 outChan := make(chan int)

 go func() {
  for i := 0; i < 100; i++ {
   vx := []int{1, 2, 3, 4}
   for _, v := range vx {
    inChan <- v
   }

   // for i := 0; i < num; i++ {
   //  inChan <- num
   // }
  }
  close(inChan)
 }()

 go func(inChan <-chan int) {
  for v := range inChan {
   outChan <- v
   time.Sleep(time.Second)
  }

  // for  {
  //  token := <- inChan
  //  time.Sleep(time.Second)
  //  outChan <- token
  // }

  close(outChan)
 }(inChan)

 for out := range outChan {
  fmt.Println(out)
 }
}

```

```mdx-code-block
</TabItem>
<TabItem value="">
```

```go

// 小优化，封装了一下
func main() {
 nums := pubNums(1, 2, 3, 4)
 nu := subNums(nums)
 for n := range nu {
  fmt.Println(n)
 }
}

func pubNums(nums ...int) <-chan int {
 out := make(chan int)
 go func() {
  for i := 0; i < 100; i++ {
   for _, num := range nums {
    out <- num
    time.Sleep(time.Second)
   }
  }
  close(out)
 }()
 return out
}

func subNums(in <-chan int) <-chan int {
 out := make(chan int)
 go func() {
  for ik := range in {
   fmt.Println(ik)
  }
  close(out)
 }()
 return out
}

```

```mdx-code-block
</TabItem>
<TabItem value="">
```

```go

type token struct{}

// [channel 实战应用，这篇就够了！ - SegmentFault 思否](https://segmentfault.com/a/1190000039056339)

// 优化2
func main() {
 num := 4

 var chs []chan token
 for i := 0; i < num; i++ {
  chs = append(chs, make(chan token, 1))
 }
 for j := 0; j < num; j++ {
  go worker(j, chs[j], chs[(j+1)%num])
 }

 chs[0] <- token{}
 select {}
}

func worker(id int, ch chan token, next chan token) {
 for {
  token := <-ch
  fmt.Println(id + 1)
  time.Sleep(time.Second)
  next <- token
 }
}

```

```mdx-code-block
</TabItem>
</Tabs>
```


## x

```mdx-code-block
<Tabs>
<TabItem value="">
```

```go

// 1A2B...26Z
func main() {
 numberCh := make(chan int)
 letterCh := make(chan rune)

 var wg sync.WaitGroup
 wg.Add(2)

 go func() {
  defer wg.Done()
  for i := 1; i <= 26; i++ {
   fmt.Print(<-numberCh)
   fmt.Print(string(<-letterCh))
  }
 }()

 go func() {
  defer wg.Done()
  for i := 'A'; i <= 'Z'; i++ {
   numberCh <- int(i - 'A' + 1)
   letterCh <- i
  }
 }()

 wg.Wait()
 close(numberCh)
 close(letterCh)

 fmt.Println()
}

```

```mdx-code-block
</TabItem>
<TabItem value="">
```

```go

// 2A 3B 1C 2D 3E 1F 2G 3H 1I 2J 3K 1L 2M 3N 1O 2P 3Q 1R 2S 3T 1U 2V 3W 1X 2Y 3Z OK
// 1A 2B 3C 1D 2E 3F 1G 2H 3I 1J 2K 3L 1M 2N 3O 1P 2Q 3R 1S 2T 3U 1V 2W 3X 1Y 2Z OK
func printz() {
 var wg sync.WaitGroup
 wg.Add(3)

 letterCh := make(chan rune)
 numberCh := make(chan int)

 go func() {
  defer wg.Done()
  for i := 0; i < 26; i++ {
   fmt.Printf("%d%c ", <-numberCh, <-letterCh)
  }
 }()

 go func() {
  defer wg.Done()
  for i := 1; i <= 26; i++ {
   vi := i % 3
   if vi == 0 {
    vi = 3
   }
   numberCh <- vi
  }
 }()

 go func() {
  defer wg.Done()
  for i := 'A'; i <= 'Z'; i++ {
   letterCh <- i
  }
 }()

 wg.Wait()
 close(numberCh)
 close(letterCh)

 fmt.Println("OK")
}

```

```mdx-code-block
</TabItem>
</Tabs>
```



```yaml
# 并发笔试题
# - [lengocgiang/trivial_concurrency_exercises](https://github.com/lengocgiang/trivial_concurrency_exercises)
#- [mtyurt/go-concurrency-exercise: Solutions to Golang concurrency exercises](https://github.com/mtyurt/go-concurrency-exercise)
#- daily-walk
#- dinner
#- internet-cafe
```