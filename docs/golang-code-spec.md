
## Golang Code Specs


[Effective Go - The Go Programming Language](https://go.dev/doc/effective_go)

[50 Shades of Go: Traps, Gotchas, and Common Mistakes for New Golang Devs](https://golang50shad.es/)

---

少用继承，多用组合：*尽量优先选择组合而不是继承的方式*

链式调用最多三层，尽量避免多层链式调用：链式调用写起来和用起来都很爽，但是一旦出问题，很难定位问题

```markdown
- 方法里的入参超过 2 个，就用 slice/dict 之类的复合数据类型或者可变参数
- 函数的“单一职责原则”，一个函数只做一件事情，把函数最小粒度化
  - 不要使用 bool 值把多个函数合并到一个函数里
- 使用抽象类和接口类，便于管理实体类
- 尽量使用私有 struct 和私有方法，除非必要不公开

---

- 尽量不要使用 if，不要嵌套太多 if
  - if 如果用于入参验证，把验证工作封装成一个 validator 类或者封装成一个单独的方法
  - 如果 if 里处理的逻辑比较简单：找 if 里返回数据的共同点，封装成单独方法，统一处理
  - 如果 if 里处理的逻辑比较复杂：*用面向接口开发，把不同的 if 封装成这个接口类的不同实现类*
- if 判断里能用 bool 就用 bool，不要用`isResize == "success"`这样
- if 里不要使用反义，逻辑更清晰

```

---


***[Go 中的一些优化笔记，简单而不简单](https://mp.weixin.qq.com/s/X8c6ZIJdBFptYA9CRj6wnA)***


---


***[Tencent/secguide: 面向开发人员梳理的代码安全指南](https://github.com/Tencent/secguide)*** 总结的非常到位，已经很全了

[uber-go/guide: The Uber Go Style Guide.](https://github.com/uber-go/guide)

```markdown
- 内存管理
  - 【必须】切片长度校验
  - 【必须】nil 指针判断
  - 【必须】整数安全
  - 【必须】make 分配长度验证：在进行 make 分配内存时，需要对外部可控的长度进行校验，防止程序 panic；
  - 【必须】禁止 SetFinalizer 和指针循环引用同时使用
  - 【必须】禁止重复释放 channel
  - 【必须】确保每个协程都能退出
  - 【推荐】不使用 unsafe 包
- 文件操作
  - 路径穿越检查
  - 文件访问权限
- 系统接口
- 通信安全
  - 网络通信采用 TLS 协议
  - TLS 启用证书验证
- 敏感数据保护
  - 敏感信息访问
  - 敏感数据输出
  - 敏感数据存储
  - 异常处理和日志记录
- 加密解密
  - 不得硬编码密码/密钥
  - 密钥存储安全
  - 不使用弱密码算法
- 正则表达式
```



---

```markdown

- 输入校验，必须对入参进行校验
- SQL 操作
  - 使用 GORM 等 ORM 执行 sql 操作，如果使用`database/sql`必须使用 prepare/query 预编译并绑定变量
  - 使用参数化查询，禁止拼接 sql 语句，另外对于传入参数用于 order by 或者表名的需要通过校验
- 网络请求
- Web 跨域
- 响应输出
- 会话管理
- 访问控制
- 并发保护

```


---

- *不要对 HTTP 客户端硬编码*
- *不要引入全局变量*
- *返回 struct，而不是 interface*
- *使用配置结构体来避免修改我们的 API* (Options模式)
- [不要写破坏性的 Go 库](https://mp.weixin.qq.com/s?__biz=MzAxMTA4Njc0OQ==&mid=2651450350&idx=2&sn=3dd4cf2d90419c0543b66ab951edeb29)

---


:::tip

总结一下，几个最基本的

- 用validator做各种验证，可以节省很多代码，不要用各种if进行参数验证。
- 用好操作各种datatype时应该做好的的优化，以及避坑。这点相关内容那个很多，不多说。
- 用各种code patterns，比如options, builder之类的。
- 还有一些 kiss原则相关的，比如说OOP的SRP，其实就是降低（方法的）颗粒度。如果能够SRP的话，func的params本身就不会太多，这两个是相辅相成的。

:::



《100 Go mistakes and how to avoid them》



![100gomistakes.png](pix/x/100gomistakes.png)


- [深度阅读之《100 Go Mistakes and How to Avoid Them》 | qcrao 的博客](https://qcrao.com/post/100-go-mistakes-reading-notes/)
- [[长文]从《100 Go Mistakes》我总结了什么？ - luozhiyun`s Blog](https://www.luozhiyun.com/archives/797)

---


有哪些写代码的好习惯？有哪些典型的坏代码的味道？


```markdown

*所有的代码规范都应该工具化*，乃至开发规范都应该工具化

- 工程规范（工程结构，分层方式及命名等等）
- 命名规范（接口、类、方法名、变量名等）
- 代码规范（括号、空格、换行、缩进等）
- 注释规范（规定必要的注释）
- 日志规范（合理的记录必要的日志）
- 各种推荐与不推荐的代码示例

---

- 改完代码，记得自测
- 不要相信客户端的任何参数，方法入参尽量都检验，比如入参是否允许为空，入参长度是否符合你的预期长度
- 做好冒烟测试。修改老接口的时候，思考接口的兼容性
- 对于复杂的代码逻辑，添加清楚的注释
- 使用完 IO 资源流，需要关闭
- 代码采取措施避免运行时错误（如数组边界溢出、被零除等）
- 尽量不在循环里远程调用、或者数据库操作，优先考虑批量进行
- 写完代码，脑洞一下多线程执行会怎样，注意并发一致性问题
- 获取对象的属性，先判断对象是否为空
- 多线程异步优先考虑恰当的线程池，而不是 new thread，同时考虑线程池是否隔离
- 手动写完代码业务的 SQL，先拿去数据库跑一下，同时也 explain 看下执行计划
- 调用第三方接口，需要考虑异常处理、安全性、超时重试这几个点
  - 异常处理（比如，你调别人的接口，如果异常了，怎么处理，是重试还是当做失败）
  - 超时（没法预估对方接口一般多久返回，一般设置个超时断开时间，以保护你的接口）
  - 重试次数（你的接口调失败，需不需要重试，需要站在业务角度上思考这个问题）
- 接口需要考虑幂等性
  - 查询操作
  - 唯一索引
  - token 机制，防止重复提交
  - 数据库的 delete 删除操作
  - 乐观锁
  - 悲观锁
  - Redis、zookeeper 分布式锁（以前抢红包需求，用了 Redis 分布式锁）
  - 状态机幂等
- 多线程情况下，考虑线性安全问题
- 主从延迟问题考虑
- 使用缓存的时候，考虑缓存跟 DB 的一致性，还有（缓存穿透、缓存雪崩和缓存击穿）

---

- 缺少变更的说明
- 滥用异常捕获
- 过度相信第三方接口或服务
- 处理过程缺少阶段性结果
- 已有的 utils 方法，重复造轮子
- 代码过于复杂，缺少必要注释，后人难以维护
- 目录结构五花八门，杂乱不堪
- 组件粒度过大，API 泛滥
- 低内聚、高耦合
- 抽象不够、逻辑纠缠——High Level 业务逻辑和 Low Level 实现逻辑纠缠
- if...else 之类的 tradeoff 方案太多，牛皮藓一样
- 没有做好严格的 cicd 和测试流程，尤其是冒烟测试


```

- 尽量使用指针，指针传参效率更高
- *尽量不要使用全局变量*，尽量用常量，如果必须要用变量，也要给定作用域
- 不要使用 init 函数，用普通函数代替，并显式调用
- 一定不要使用`log.Fatal`/`log.Fatalf`/`log.Panic`打印错误日志，因为遇到错误会直接 exit 退出，出大事
- `连接池`，记得关闭文件、数据库连接、socket 连接、api 连接等资源，太多 conn 会导致 too many open files(拓展包的底层通常都有处理，但是也要注意)
- *enum 要注意 iota 初始值要和数据表中该字段默认值相同，否则如果缺少该参数，会有问题*

---

```markdown
- rand.Intn(0) 会 panic
- 用`make([]string, len(src))`+`r[i] = strings.ToLower(s)`代替`短声明+append`: 多维 map，赋值之前记得初始化其嵌套层
- `make([]string, len(tokens))`如果确定最终 slice 或 map 长度，用 make 定义，不确定长度的用短声明定义
  - `make([]string, 0, len(tokens))`
  - 空切片和 nil 切片是不一样的
  - 不允许创建容量小于长度的切片
- 向 nil channel 里写数据怎么样，会阻塞，向 nil channel 取数据阻塞，向 close channel 写会 panic, 取会返回 0 值。
- defer、panic、recover: panic 相当于 exception，recover 相当于 catch，golang 的异常捕获一般在 defer 里进行
```

- Unmarshal(non-pointer map[string]string) 问题 [json: Unmarshal(non-pointer map[string]string) 问题 - 掘金](https://juejin.cn/post/7063739889812144159)







![100gomistakes](pix/x/100gomistakes.png)



[touchid/touchid.go at master · mritd/touchid](https://github.com/mritd/touchid/blob/master/touchid.go)

```go
type DeviceType string

const (
 DeviceTypeAny               DeviceType = "any"
 DeviceTypeWatch             DeviceType = "watch"
 DeviceTypeBiometrics        DeviceType = "biometrics"
 DeviceTypeBiometricsOrWatch DeviceType = "biometrics_watch"
)

func Auth(dType DeviceType, reason string) (bool, error) {
 switch dType {
 case DeviceTypeAny:
  return Authenticate(1, reason)
 case DeviceTypeWatch:
  return Authenticate(2, reason)
 case DeviceTypeBiometrics:
  return Authenticate(3, reason)
 case DeviceTypeBiometricsOrWatch:
  return Authenticate(4, reason)
 default:
  return false, errors.New("invalid device type")
 }
}

```



