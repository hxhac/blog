


```yaml

- q: 聊聊gozero的zrpc是啥？基于grpc实现了哪些附加功能？
  x: |
    zrpc 是基于 grpc 的一个 rpc 框架，内置了服务注册、负载均衡、拦截器等模块。这个我们后面会通过源码来说明。
    zrpc 实现了 gRPC 的 resolver.Builder 接口和 balancer 接口，自定义了 resolver 和 balancer。
    zrpc 提供了丰富的拦截器功能，包括自适应降载、自适应熔断、权限验证、prometheus 指标收集等。

- q: gozero的redis只支持0库，因为默认支持redis-cluster
- q: 多级 goroutine 的异常捕获，怎么设计？
  x: |
    1. 微服务系统请求异常，应该隔离，不能让单个异常请求带崩整个进程。
    2. go-zero 自带了 RunSafe/GoSafe，用来防止单个异常请求导致进程崩溃。
    3. 需要监控，防止异常过量。
    4. fail fast 和故障隔离的矛盾
- q: 能否聊聊 gozero 的缓存的设计和案例
  x: |
    1. 分布式多 redis 集群，线上最大几十个集群为同一个服务提供缓存服务。
    2. `无缝扩容`和`无缝缩容`
    3. 不存在没有过期时间的缓存，避免大量不常使用的数据占用资源，默认一周。
    4. `缓存穿透`没有的数据会短暂缓存一分钟，`避免刷接口`或者`大量不存在的请求`拖跨系统。
    5. 缓存击穿。一个进程只会刷新一次同一个数据，避免热点数据被大量同时加载。
    6. 缓存雪崩。对缓存过期时间自动做了 jitter(抖动)，5% 的标准变差，使得一周的过期时间分布在 16 小时内，有效防止了雪崩。
    7. 自动缓存管理已经内置于 go-zero，我们可以通过 goctl 自动生成代码。
- q: 如果打算换 go-zero 框架重构业务，如何做好线上业务稳定安全用户无感切换？另外咨询下如何进行服务划分？
  x: |
    1. 逐步替换，从内到外。加个 proxy 来校对，校对一周后可以切换。
    2. 如果数据库重构，就需要做好新老同步。
    3. 服务划分按照业务来，遵循从粗到细的原则，避免一个 api 一个微服务。
    4. 数据拆分对于微服务来讲，尤为重要。上层好拆，数据难拆，尽可能保证按照业务来拆分数据。
- q: 微服务系统怎么拆分？
  x: |
    1. 先粗后细，切忌过细，切忌一个请求一个服务
    2. 横向拆分，而非纵向，一般不超过三层
    3. 单向调用，严禁循环调用
    4. 禁止接口类型透传
    5. 没有依赖关系的串行调用，改为并行调用
- q: gozero开发规范
  x: |
    - 请求最好单独配置，最好以 Req 开头。相应的，响应也单独配置，以Resp开头。
    - 如果我们修改了 api 文件，可以追加生成吗？
    - 同一个微服务的所有 api 文件，可以放在一起。比如说，用户系统，会涉及到登录相关操作、用户信息、关注和被关注等模块。这些模块可以加个 `group: friend`，就会自动生成到一个子文件夹。

    - 用好api的import，分开写，然后import到主api，不要写在一起（需要各自的 service name 相同）
    - api文件的@server，group, prefix, middleware


- q: ms架构下，gozero目录结构怎么组织最合理？goctl api/rpc生成的几个目录，分别有啥用？
  x: |
    internal/handler 目录：API 文件里定义的路由对应的 handler 实现
    internal/logic 目录：用来放每个路由对应的业务处理逻辑，之所以区分 handler 和 logic 是为了让业务处理部分尽可能减少依赖，把 HTTP requests 和逻辑处理代码隔离开，便于后续按需拆分成 RPC service
    internal/svc 目录：用来定义业务逻辑处理的依赖，我们可以在 main 里面创建依赖的资源，然后通过 ServiceContext 传递给 handler 和 logic
    internal/types 目录：定义了 API 请求和返回数据结构

- q: 添加配置
  x: |
    1. Add Config struct
    2. Add ServiceContext struct

- q: gozero的logging怎么配置
  x: |
    用 go-stash 代替 logstash
    filebeat 收集我们的业务日志，然后将日志输出到 kafka 中作为缓冲，go-stash 获取 kafka 中日志根据配置过滤字段，然后将过滤后的字段输出到 elasticsearch 中，最后由 kibana 负责呈现日志

- q: gozero怎么解决多环境下配置管理方案？给我具体代码
  x: |
    无非是两种方案
    - env + 各环境单独配置文件
    - 如果是ms的话，就需要etcd之类配置中心了，更安全（配置隔离，否则）并且实时生效，本身就适合低频修改但是需要保证分布式节点强一致性的需求。那就是viper+etcd嘛
```






## yagoz




