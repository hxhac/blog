



## ts


```yaml

- type: Typescript
  repo:
    - url: https://github.com/microsoft/TypeScript
      qs:
        - q: es
        - q: vue, Lifecycle Hooks
        - q: nuxt.js
        - q: react-hooks
        - q: How to set default parameter in ts?
        - q: Compare SPA and MPA.
          x: (SSR or CSR) (perf(首屏加载), SEO, route, state management)
        - q: How to evaluate Astro? # islands arch, MPA
    - url: https://github.com/TypeStrong/ts-node
      des: 用来在node环境执行ts代码
    - url: https://github.com/sudheerj/ECMAScript-features
      des: ES syntax. ECMA实际上是对所有js Engine(比如v8，而不只是interpreter)的spec，因为所谓的syntax本身就是Engine提供的。
      qs:
        - q: 变量声明和赋值 # var, let, const
        - q: class, extends, super
        - q: arrow functions
        - q: template string
        - q: default, rest arguments
        - q: 数组操作
        - q: 模块化
        - q: 异步编程 (Promise对象和异步操作, async/await异步函数)
        - q: 迭代器和生成器

```






```yaml

 - url: https://github.com/webpack/webpack
 - url: https://github.com/vitejs/vite
   des: 打包工具，better than gulp, grunt and webpack. vite 就是个更好用的 webpack，但是解决了 webpack 那些众所周知的问题，比如说打包速度慢、配置复杂之类的。
   qs:
     - q: Compare webpack, vite, babel, gulp, grunt?
```






## python


```yaml

- type: Python
  repo:
    - url: https://github.com/python/cpython
      qs:
        - q: python, What's GIL? pseudo multithreading
        - q: python, magic methods? datatype? `*args` and `**kwargs`? yield?
        - q: Compare event-driven network libs, twisted(python), golang(gnet, netpoll), java(netty, guava, akka)
        - q: pipenv = pip + pyenv + virtualenv
        - q: Why choose pytest instead of unittest that comes with python?
        - q: Compare the coroutine between python and golang? (scheduler, mapping)
    - url: https://github.com/PyO3/pyo3
      des: Rust bindings for the Python interpreter
    - url: https://github.com/pypa/pip
      cmd:
        - c: pip list
          x: 查看所有本地的pip包
        - c: pip freeze > requirements.txt
          x: 记录依赖
        - c: pip install -r requirements.txt
          x: 怎么通过`requirements.txt`安装拓展包？
        - c: pip uninstall
    - url: https://github.com/pypa/pipenv
      cmd:
        - c: pipenv install
          x: 安装虚拟环境或者第三方库，如果没有pipenv环境，就会创建环境
        - c: pipenv install <service>
          x: 如果已经有pipenv环境，则直接安装拓展包。比如 pipenv install scrapy。也可以直接安装多个pkg，比如 pipenv install flask flask-wtf
        - c: pipenv shell
          x: 激活虚拟环境
        - c: pipenv lock
          x: 锁定并生成Pipfile.lock文件
        - c: pipenv lock -r
          x: 生成requirements.txt文件
        - c: pipenv uninstall --all
          x: 卸载全部包并从Pipfile中移除
        - c: pipenv lock -r --dev > requirements.txt
          x: 生成requirements.txt文件
        - c: pipenv install -r requirements.txt
          x: 在pipenv下通过requirements.txt安装拓展包
        - c: pipenv open <xxx>
          x: 在浏览器中查看对应拓展包
        - c: pipenv graph
          x: 显示当前依赖关系图信息
        - c: pipenv check
          x: 检查安全漏洞
        - c: pipenv update
          x: 升级所有拓展
        - c: pipenv update <pkg>
          x: 升级某个拓展
    - url: https://github.com/conda/conda
      qs:
        - q: "@miniconda"
      cmd:
        - c: conda init zsh
        - c: conda config --show
        - c: conda create -n newenv python=3.9
          x: 创建名为newenv的新环境，并安装Python 3.9
        - c: conda env list
        - c: conda search <pkg>
        - c: conda update <pkg>
        - c: conda remove <pkg>
        - c: conda list
    - url: https://github.com/encode/starlette
      des: |
        和FastAPI一样，也是支持ASGI的python生态下的web框架，不同于比较常见的Django和Flask之类的WSGI框架，

        ASGI, WSGI, uWSGI

        FastCGI

        说白了都是Gateway Interface是吧，其实这个概念如果跟k8s串起来的话，就类似CNI, Container Network Interface这样的东西，相当于istio, apisix, linkerd之类的gateway的一个interface，这两个从功能上来说，给我的感觉很相近，但是具体有啥区别呢？

        各种的语言的GI只是用来包一个指定application的，但是CNI则可以用来包k8s的node（虽然本质上也是application）
    - url: https://github.com/hhatto/autopep8
      cmd:
        - c: autopep8 --in-place --recursive .
          x: autopep8 怎么格式化整个项目？

```



## cpp

```yaml

# cpp

- type: cpp
  repo:
    - url: https://github.com/bminor/glibc
      des: glibc
      qs:
        - q: Compare cpp and c?
        - q: cpp, memory (arena, heap, chunk, memory)
        - q: cpp20, changelog?
        - q: cpp, STL
        - q: cpp, virtual function, pure virtual function
    - url: https://github.com/llvm/llvm-project
      des: llvm
    - url: https://github.com/gcc-mirror/gcc
      des: gcc
    - url: https://github.com/FFmpeg/FFmpeg
      cmd:
        - c: ffmpeg -i concat:'<1.wav|...>' -c copy <output.wav>
          x: 合并多个音频文件，保持音频格式一致即可。例如 ffmpeg -i concat:"1.wav|2.wav|3.wav|4.wav" -c copy output.wav
        - c: ffmpeg -i <input.mp4> -vn -acodec copy <output.aac>
          x: 视频转换为音频，-vn 表示不处理视频流，-acodec copy 表示直接拷贝音频流，不做编解码
    - url: https://github.com/danmar/cppcheck
      des: cpp static analyze tool.
    - url: https://github.com/gperftools/gperftools
      des: = pprof for golang.

```


## lua


```yaml

- type: lua
  repo:
    - url: https://github.com/lua/lua
      qs:
        - q: lua, feats? #
        - q: Why lua is faster than others?
    - url: https://github.com/luarocks/luarocks
      des: lua package manager
    - url: https://github.com/LuaJIT/LuaJIT
    - url: https://github.com/luau-lang/luau

```


## zig


```yaml

- type: zig
  repo:
    - url: https://github.com/ziglang/zig
      qs:
        - q: "@comptime"
          d: https://kristoff.it/blog/what-is-zig-comptime/

```




## rust

```yaml

- type: rust
  repo:
    - url: https://github.com/rust-lang/rust
      qs:
        - q: trait
        - q: macro
        - q: error handle, unwrap or expect?
        - q: Tokio
        - q: rocket
    - url: https://github.com/jdx/mise
      des: Used to parse cli in rust. Similar with alecthomas/kong in golang.
    - url: https://github.com/tokio-rs/tokio
      des: = nettty, gnet, twisted.
    - url: https://github.com/loco-rs/loco
      des: 类似ruby的RoR、PHP的laravel、python的Django，内置了一些功能模块和generator（比如CURD）
    - url: https://github.com/rust-lang/rust-clippy
      des: 相当于 rust 的 linter
```




