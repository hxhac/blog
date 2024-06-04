




## VCS


```yaml
- type: VCS
  repo:
    - url: https://github.com/gitlabhq/gitlabhq
      des: gitlab
    - url: https://github.com/harness/gitness
      des: 就是之前的 Drone, will support for essential feats like code hosting, pull requests, code reviews and more. 也就是说之后会变成类似gitea或者gogs之类的VCS。如果需要查看Drone，可以切换到该branch查看。
    - url: https://github.com/go-gitea/gitea
      doc: https://docs.gitea.cn/
      des: gitea actions直接兼容ghac
    - url: https://github.com/gogs/gogs
      des: gogs本身不支持CI，只能使用第三方
    - url: https://github.com/theonedev/onedev
      des: ??? 基于java实现的，试用了一下，功能很全（内置支持CICD, kanban, packages, CR, git blame...），但是感觉一般
    - url: https://github.com/goharbor/harbor
      des: 其他 Image Manager/Docker Registry 还有Portus, Quay之类的，通常这类服务都直接集成在VCS了，所以不单独添加type
  qs:
    - q: 5人小团队用什么VCS更有性价比？比较几种常用VCS平台 gh, ghe, gitea, gogs
      x: (经验复用, 人均费用, cicd, ) 小团队直接白嫖 gh，等 ghac 的时间不够了，就直接自建，ghe毫无意义
```


[Compared to other Git hosting | Gitea Documentation](https://docs.gitea.com/next/installation/comparison)

:::tip
我选择gitea（而不是gitlab）作为团队的VCS
:::





## ~~运维面板~~

```yaml

- url: https://github.com/1Panel-dev/1Panel
  key: true
  des: 运维面板，类似之前的宝塔什么的
- url: https://github.com/admpub/nging

- url: https://github.com/webmin/webmin

- url: https://github.com/cockpit-project/cockpit
```








## IaC

```yaml

#- type: IaC-pulumi
#  repo:
#    - url: https://github.com/pulumi/pulumi
#    - url: https://github.com/pulumi/pulumi-tf-provider-boilerplate
#      des: Boilerplate code for Terraform provider-backed Pulumi packages. pulumi 的 provider 都是基于 tf 包，通过pulumi-tf-provider-boilerplate打包获得 (从而兼容 tf 的所有 provider)
#    - url: https://github.com/pulumi/pulumi-terraform-bridge
#      des: 用来把tf转成pulumi
#    - url: https://github.com/pulumi/pulumictl

```
