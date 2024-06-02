---
title: 从linters到pre-commit再到CI
date: 2024-06-01
tags: [devops, spec]
---



## linters


各种linters让人挑花了眼，找个主流的linter，随便加几个feats就又是个新linter，都没啥意思

其实只需要照着super-liner就ok了，一个ALL-In-One的linter，集成了各种主流语言和工具的linter

```yaml
    - url: https://github.com/DavidAnson/markdownlint
      des: Markdownlint not support MDX, but it works actually, strangely enough.
    - url: https://github.com/igorshubovych/markdownlint-cli
      des: Markdownlint Tool that docs using.

```


```yaml
    - url: https://github.com/trufflesecurity/trufflehog
      des: 与gitleaks颇为互补的一个secrets scan工具，不同于gitleaks这种专注于扫描本地git repo代码的工具，trufflehog的feats在于scan远程repo，还支持扫描S3、Postman、Docker等服务中的secrets。trufflehog既是cli，也是CI
      
    - url: https://github.com/gitleaks/gitleaks
      des:

    - url: https://github.com/thoughtworks/talisman
      des: gitleaks本身就可以配置为pre-commit，为啥还需要tailsman呢?
      
   - url: https://github.com/byt3hx/jsleak
      des: 跟gitleaks还不太一样，jsleak只支持scan网站，也就是mlc和site sucker之间的区别（本地扫描和扫描网站）


```

```yaml
    - url: https://github.com/koalaman/shellcheck
      des: Pretty Useful. Used to check shell scripts.
      
    - url: https://github.com/adrienverge/yamllint
      des: yamllint

    - url: https://github.com/ansible/ansible-lint
      des: 自动修复 lint 时查出的 fail. "ansible-lint --write"
```






## pre-commit

husky + commitlint + lint-staged

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


```


pre-commit是各种linter和ci之间的中间xxx，非常好用的


## goreleaser

:::tip
最早知道goreleaser，就是用来在ci时用来直接release到homebrew的

再之后发现可以用来代替我一直使用的 `antfu/changelogithub` + `softprops/action-gh-release`，用来把changelog直接release掉，才决定好好研究一下goreleaser

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
      - uses: actions/checkout@v4
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

```yaml

- url: https://github.com/antfu/changelogithub
  des: 可以用goreleaser的changelog代替

- url: https://github.com/release-it/release-it
  des: 

- url: https://github.com/softprops/action-gh-release

- url: https://github.com/semantic-release/semantic-release


```


需要付费(goreleaser PRO $6/Month)的feat

- docker-image (container registers like dockerhub, gcr, ghcr)
- announce (twitter, slack, discord and others)
- nightlies


```yaml

# docker-image


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


