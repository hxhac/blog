---
title: 优化代码质量：从linters到pre-commit再到CI
date: 2024-06-01
tags: [devops, spec]
---



## super-linter

:::tip
各种linters让人挑花了眼，找个主流的linter，随便加几个feats就又是个新linter，都没啥意思

其实只需要照着super-liner就ok了，一个ALL-In-One的linter，集成了各种主流语言和工具的linter


<details>
<summary>linters</summary>

```yaml
- url: https://github.com/koalaman/shellcheck
  des: Pretty Useful. Used to check shell scripts.

- url: https://github.com/adrienverge/yamllint
  des: yamllint

- url: https://github.com/ansible/ansible-lint
  des: 自动修复 lint 时查出的 fail. "ansible-lint --write"
```

</details>

***super-linter既帮我们筛选了各种语言和服务的主流linter，并且提供了更易用的使用方法***

:::


以markdownlint为例，之前我需要自己维护下面这些repo

但是使用super-linter之后，只需要 super-linter -> markdownlint-cli -> markdownlint 就可以了

完全没必要维护（或者star）以下这些repo

<details>
<summary>markdownlint</summary>


```yaml
- url: https://github.com/DavidAnson/markdownlint
  des: Markdownlint not support MDX, but it works actually, strangely enough.
- url: https://github.com/igorshubovych/markdownlint-cli
  des: Markdownlint Tool that docs using.

```

</details>


上面举了个确定了使用markdownlint，但是linter cli和action还分为两个repo，很难维护的问题。

下面则是技术选型的问题，同样是 scan secrets 的需求，有各种工具可以选择，那么哪个更好用呢？

如果看super-linter的话，就一目了然了，直接选择gitleaks就完事了，其他的几种都是特定场景下的选择，并不主流。

这就super-linter的用处

<details>
<summary>scan secrets</summary>


```yaml
- url: https://github.com/gitleaks/gitleaks
  des:

- url: https://github.com/trufflesecurity/trufflehog
  des: 与gitleaks颇为互补的一个secrets scan工具，不同于gitleaks这种专注于扫描本地git repo代码的工具，trufflehog的feats在于scan远程repo，还支持扫描S3、Postman、Docker等服务中的secrets。trufflehog既是cli，也是CI

- url: https://github.com/thoughtworks/talisman
  des: gitleaks本身就可以配置为pre-commit，为啥还需要tailsman呢?

- url: https://github.com/byt3hx/jsleak
  des: 跟gitleaks还不太一样，jsleak只支持scan网站，也就是mlc和site sucker之间的区别（本地扫描和扫描网站）

```

</details>



:::danger

但是比较可惜的是，super-lint与pre-commit目前没有集成

所以对我来说，***我对super-lint的定位是，一个更好的 awesome-linters，用来查看各种主流linter***

:::



## pre-commit

:::tip
***pre-commit是各种linter和ci之间的mediator，或者说“支点”***

在使用pre-commit之前，我需要在本地配置一套所有linter的cli，在commit之前先自己预跑一下，保证没有问题之后，再commit，这是在本地。在remote呢，则需要在CI里（按照本地linter）再配置一套，保证local和remote的linter保持一致。

可以看到，这就引入了维护成本，无论想改local还是remote，对端都要修改。就很麻烦。

如果使用pre-commit就不需要这么麻烦了，配置之后，无论local和remote都可以共用一套配置。

除此之外，pre-commit还支持跨CI，所有workflow都集成到pre-commit了，无论换什么CI，只需要加一个 `pre-commit run --all-files` 就可以了。

众所周知，各种CI的workflow的写法是不同的，所以必然带来维护成本。之前没用pre-commit的时候，我需要维持自己常用的github actions和gitlab CI的两套用来发布golang的workflow，就很麻烦。我现在直接用 Taskfile + Pre-commit 就完全解决掉这个问题了。

---

总结一下，使用pre-commit代替linter+CI的好处在于：

- 减少维护成本，配置一次，多处使用，不需要在local和remote再配置了
- 跨CI使用，同样减少维护成本

:::


上面从更宏观的角度出发，解释了为啥pre-commit相比之下是更好的解决方案

下面从微观角度出发聊聊

下面是一个经典的“前端项目pre-commit”的stack



<details>
<summary>husky + commitlint + lint-staged</summary>

```yaml
- url: https://github.com/standard/standard
- url: https://github.com/eslint/eslint
- url: https://github.com/prettier/prettier


- url: https://github.com/typicode/husky
  des: |
    用来自动化生成各种git hooks，相当于简化了之前需要手写各种git hooks的流程，但是比较鸡肋。需要注意的是，husky只适用于前端项目，因为需要搭配package.json使用。
    还需要注意的是，git hooks是本地文件，不会推送到remote，所以就很鸡肋了，并无法起到我们预想中的“规范团队开发流程”的作用，用husky就可以避免这个问题
    和commitlint一起卸载了，所有这些git hooks都不如pre-commit好用

- url: https://github.com/lint-staged/lint-staged
  des: Run linters on git staged files. 也就是在pre-commit时执行Linter，但是需要注意两点，仅针对staged代码，而不是整个项目，另外，依托于项目的package.json，所以仅适配js项目。

- url: https://github.com/conventional-changelog/commitlint
  des: 给 husky 生成 commit-msg

# [Cz工具集使用介绍 - 规范Git提交说明 - 掘金](https://juejin.cn/post/6844903831893966856)
- url: https://github.com/commitizen/cz-cli
  des: 也是commit-msg，基于commitizen实现的，可以搭配husky使用，所以同样是适用于js项目，不适用于其他语言的项目。

```

</details>

但是其他语言的各种项目则没有这么完备的pre-commit方案可以选择，能怎么办呢?

毫无疑问的，不如所有语言（包括js）都统一用pre-commit好了，不是吗?

pre-commit是比husky更通用也更强大的选择


### BP

```yaml

- q: pre-commit 应该使用remote还是local?
  x: 当然是remote，团队开发时，如果使用local的cli，无法通过git来管理version，就会导致很多问题。

- q: 大型项目每次commit要做全量pre-commit非常耗时，怎么只做staged代码的pre-commit?


```



### [2024/6/3]


[Comparing Code Quality Meta Tools - House Absolute(ly Pointless)](https://blog.urth.org/2020/05/08/comparing-code-quality-meta-tools/)

```yaml

- url: https://github.com/evilmartians/lefthook
  des: golang实现，其实就是local模式的pre-commit

- url: https://github.com/sds/overcommit

- url: https://github.com/houseabsolute/precious
  des: ??? rust实现，但是没什么人用

```

对 lefthook 有点兴趣，但是这几个的生态目前来说，跟pre-commit还是没法比



### [2024/6/5] reviewdog


```yaml
- url: https://github.com/reviewdog/reviewdog
```

整理gh.yml时看到之前用过的reviewdog，想到其实reviewdog和pre-commit虽说在各自官方des是完全不同的，一个是用来Code Review的，一个是自定义git hooks操作，***但是实际上从功能上来说，二者没啥区别，都可以集成各种linter，也都支持在开发环境、CI中使用（包括在PR时触发）***


:::tip

但是为啥后来没有继续使用reviewdog，而是转用pre-commit了呢？

reviewdog提供了.reviewdog.yml和CI两种方式来执行rules，我们可以像pre-commit一样，在开发环境和CI都复用.reviewdog.yml（也可以使用各种acts来优化体验），但是需要注意的是：

- reviewdog的配置文件.reviewdog.yml只支持local mode，不支持像pre-commit那样的remote mode，***这里需要注意的是如果只支持local mode的话，这些cli的version就无法通过git来管理了（并且CI里也需要逐个手动安装这些cli），给团队开发带来很多麻烦***
- reviewdog的核心还是CI，可以看到其官方提供了 [public-reviewdog-github-actions](https://github.com/reviewdog/reviewdog#public-reviewdog-github-actions) 这些acts，但是其生态还是远不如pre-commit


:::



当然，虽然二者的功能很相似，但是归根到底定位还是不同的

reviewdog的独特feats（或者说作为Code Review工具的feat）是code suggest（也就是在PR和MR操作时，直接在VCS中提示有问题的代码），用户体验更友好。

pre-commit虽然也能在PR和MR时实现类似操作，但是用户体验一定是不如reviewdog的。

但是基于上述的两点原因，个人认为还是pre-commit的易用性和通用性更好。





## Build Tools (Taskfile)

:::tip
Makefile之类的Build Tools和CI或者Pre-Commit之类的工具，也是强相关的

```yaml

- url: https://github.com/go-task/task
- url: https://github.com/casey/just
  des: 某种Makefile或者Taskfile，没发现有什么比较特别的feats
- url: https://github.com/dnaeon/makefile-graph
  des: 用来生成Makefile依赖图的
```

目前主流的Build Tool就makefile, taskfile, just这三种

翻了几篇 "taskfile vs just" 的post，普遍认为没啥区别，just的feats，Taskfile基本上都支持（比如跨平台、env、错误提示、易于调试等等），随便选哪个都可以。

因为我更喜欢yaml，所以我肯定选择Taskfile了

:::












## goreleaser

:::tip
最早知道goreleaser，就是用来在ci时用来直接release到homebrew的

再之后发现可以用来代替我一直使用的 `antfu/changelogithub` + `softprops/action-gh-release`，用来把changelog直接展示到release，才决定好好研究一下goreleaser

<details>
<summary>对比两种写法</summary>

```mdx-code-block
<Tabs>
<TabItem value="changelogithub + action-gh-release">
```

```yaml
jobs:
  changelog:
    name: changelog
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
      - uses: actions/setup-node@main
        with:
          node-version: 18
          cache: yarn
      - run: npx changelogithub
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    release:
    name: release
    runs-on: ubuntu-latest
    steps:
      - uses: softprops/action-gh-release@v1
        if: startsWith(github.ref, 'refs/tags/')
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          draft: false
          prerelease: false
          generate_release_notes: true

```

```mdx-code-block
</TabItem>
<TabItem value="goreleaser">
```

```yaml
jobs:
  release:
    name: release
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
     with:
       fetch-depth: 0
      - uses: actions/setup-go@main
      - uses: goreleaser/goreleaser-action@v5
        if: startsWith(github.ref, 'refs/tags/')
        with:
          version: latest
          args: release --clean
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

```mdx-code-block
</TabItem>
</Tabs>
```

</details>

可以看到goreleaser确实能够简化很多workflow

:::


### 用goreleaser替换其他CI

支持如下feat:

- homebrew (and tap)
- release (gh, gitea, gitlab)
- snapshots
- gh packages
- linux pkg (AUR, snapcraft, .deb, .rpm...)
- 上传到s3 (and compatible storage), AWS S3, GCS, Azure Storage...
- changelog
- 兼容所有主流CI (github actions, gitlab CI, Drone, Jenkins, ...)


用goreleaser就可以代替之前常用的


```mdx-code-block
<Tabs>
<TabItem value="release + changelog">
```

```yaml

- url: https://github.com/antfu/changelogithub
  des: 可以用goreleaser的changelog代替
- url: https://github.com/git-chglog/git-chglog
  des: 用来自动生成格式化 CHANGELOG，类似 antfu/changelogithub，但是可以通过配置和模板，自定义


- url: https://github.com/release-it/release-it
  des:

- url: https://github.com/softprops/action-gh-release

- url: https://github.com/semantic-release/semantic-release


```

```mdx-code-block
</TabItem>
<TabItem value="s3">
```

```yaml

- url: https://github.com/bonaysoft/uptoc
  des: 用来把文件传到S3, Google Storage, Qiniu, cos, Aliyun OSS的工具。比较常见的使用场景是把前端打包好的dist传到CDN上。


```

```mdx-code-block
</TabItem>
</Tabs>
```




需要付费(goreleaser PRO $6/Month)的feat

- docker-image (container registers like dockerhub, gcr, ghcr)
- announce (twitter, slack, discord and others)
- nightlies


```mdx-code-block
<Tabs>
<TabItem value="Docker Image">
```

```yaml

# docker-image

- url: https://github.com/docker/login-action
  des: Used to login DockerHub
- url: https://github.com/docker/build-push-action
  des: Used to push image to DockerHub. Usually used with login-action.
- url: https://github.com/aliyun/acr-login
  des: Used to login ACR(Aliyun Container Registries)
- url: https://github.com/hhyasdf/image-sync-action
  des: 基于 image-syncer 实现，用来同步一些基于Docker Registry的服务（比如ACR, DockerHub, Quay, Harbor） What should be noted that it is not a two-way synchronization, but supports synchronizing an image to multiple docker-registries. The main usage scenario of this tool is to directly synchronize the packaged image to multiple platforms during release. There is no need to write a separate job for each docker-registry as before. Using this, we can directly synchronize to multiple platforms. goreleaser has done similar, but accroding this post , goreleaser only supports dockerhub, gcr and ghcr.

- url: https://github.com/ad-m/github-push-action
  des: push, push to repo itself, we can also push to another repo

```

```mdx-code-block
</TabItem>
<TabItem value="announce">
```

```yaml

# docker-image


```

```mdx-code-block
</TabItem>
</Tabs>
```



## github-actions


```yaml
- type: ghac-issue
  repo:
    - url: https://github.com/alstr/todo-to-issue-action
      des: 用来把 IDEA 里的 TODO 同步到 issue就像开发项目那样，每解决掉一个问题就直接 close 掉对应的 issue（通过 gh 的 issue 来管理 TODO，也更加方便，便于回溯（没有这个的话，完成后直接在 docs 里删除该 TODO，没有留痕））
    - url: https://github.com/ribtoks/tdg-github-action
    - url: https://github.com/actions-cool/issues-similarity-analysis
      des: check duplicates
    - url: https://github.com/actions/stale
      des: automatically close timeout-issues

    - url: https://github.com/actions-cool/issues-helper
      des: same with `actions/stale`, automatically close issues without reply
    - url: https://github.com/JasonEtco/create-an-issue
      des: 定时创建 issue
    - url: https://github.com/imjohnbo/issue-bot
      des: 定时创建 issue

    - url: https://github.com/lannonbr/issue-label-manager-action
      des: issue 标签. 管理 issue 的 label
    - url: https://github.com/crazy-max/ghaction-github-labeler
      des: issue 标签.
    - url: https://github.com/srvaroa/labeler
      des: issue 标签. Label manager for PRs and Issues based on configurable conditions

    - url: https://github.com/JasonEtco/create-an-issue
      des: 根据 template 创建 issue. A GitHub Action for creating a new issue from a template file.
    - url: https://github.com/lowply/issue-from-template
      des: 根据 template 创建 issue. opens an issue from an issue template

    - url: https://github.com/brcrista/summarize-issues
      des: issue 数据汇总. Pretty useful. Used to summarize issues in repo, need to assign tags in config-file.
    - url: https://github.com/ethomson/issue-dashboard
      des: issue 数据汇总. another issues-summary workflow, not need to assign tags, but need to add 'issue_query', in order to implement a similar but more flexible query-mechanism.


- type: ghac-PR
  repo:
    - url: https://github.com/actions/labeler
      des: PR label.
    - url: https://github.com/peter-evans/create-pull-request
    - url: https://github.com/peter-evans/dockerhub-description
      des: 把 README 同步到 dockerhub
    - url: https://github.com/readmeio/rdme
      des: rdme. 把接口文档同步到 README
```




## code quality



```yaml

# 代码质量检查工具 (sonarqube, codacy)
## 通常包括 测试覆盖率、代码安全漏洞、代码质量(代码重复、可读性...)

- url: https://github.com/SonarSource/sonarqube
  des: sonarqube

- url: https://github.com/codacy/codacy-coverage-reporter
  des: codacy

---

# 测试覆盖率 (codecov, coveralls)
## codecov比coveralls好用很多

- url: https://github.com/codecov/codecov-action
  des: 支持几乎全部CI
- url: https://github.com/codecov/self-hosted


---

# 依赖管理

- url: https://github.com/dependabot/dependabot-core
  des: dependabot. github原生集成dependabot，我们也可以在gitlab中使用dependabot

- url: https://github.com/renovatebot/renovate
  des: just install renovate apps in gh-repos, it will auto-generate a "Dependency Dashboard" issue. 用来直接fetch最新的dependency，前端用这个比较多，但是这个其实支持几乎所有语言。dependabot不支持gitea，可以用renovate代替


---

# 代码安全漏洞
## 其实就是找pkg的CVE嘛

- url: https://github.com/github/codeql
  des: codeql
- url: https://github.com/github/codeql-action
  des: codeql

```

以上基本上列举了目前各方面的几个主流code quality工具，项目无论开源项目都能使用

:::tip

综合来说，可以看到，SQ的feats更多，基本上覆盖了下面的那些个工具，但是各种社区中对SQ的评价都比较低，普遍认为FPR偏高，并且无法找到真正的bug

所以如果更侧重于测试覆盖率，使用CodeCov是个更好的选择

:::
