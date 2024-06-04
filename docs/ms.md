



## k8s

### x


```yaml


- type: k8s-cluster-management
  repo:
    - url: https://github.com/lima-vm/lima
      des: KVM
    - url: https://github.com/abiosoft/colima
      des: colima的proxy太折磨了，现在会自动detect proxy，所以就不需要手动配置proxy了，但是能够detect到，不意味着能成功使用，所以启动之后最好再docker pull alpine看看docker能否成功fetch image
      cmd:
        - c: colima restart
        - c: colima start && colima start --kubernetes
        - c: colima status
        - c: colima start --runtime containerd
        - c: colima template
          x: Setting the default config
        - c: colima list
        - c: colima start --edit
        - c: colima stop
        - c: colima start --cpu 4 --memory 6 --disk 100 --vm-type=qemu --mount-type=sshfs --dns=1.1.1.1
        - c: colima start --mount $HOME/project:/project:w
          x: Mounting Volumes
        - c: colima delete
          x: delete colima and all settings
    - url: https://github.com/kubernetes/minikube
      des: 内置了k8s dashboard，非常棒，可以完美替换掉colima+k8s dashboard，并且解决了很多colima的小毛病。
      cmd:
        - c: minikube dashboard
          x: 启动 Minikube 的 Kubernetes dashboard
        - c: minikube start --driver=docker --container-runtime=docker
          x: 使用 Docker 作为虚拟化程序和容器运行时启动 Minikube
        - c: eval $(minikube docker-env)
          x: 设置环境变量，使得 Docker 能够构建和运行 Minikube 中的镜像
        - c: minikube addons list
          x: 列出所有可用的 Minikube 插件（addons）

    - url: https://github.com/orbstack/orbstack
      des: OrbStack 和 colima + minikube
    - url: https://github.com/k3s-io/k3s
      des: By removing dispensable feats (legacy, alpha, non-default, in-tree plugins) and using lightweight components (e.g. sqlite3 instead of etcd3) they achieved a significant downsizing. This results in a single binary with a size of around 60 MB.
    - url: https://github.com/kubernetes-sigs/kind
      des: As the name suggests it moves the cluster into Docker containers. This leads to a significantly faster startup speed compared to spawning VM.
    - url: https://github.com/kubernetes/kubeadm
    - url: https://github.com/portainer/portainer
    - url: https://github.com/derailed/k9s
      des: Used to manage k8s cluster. A TUI tool. 如果是中小集群的话，用k9s也是个好选择. k9s的快捷操作确实比用web管理要爽. k9s还支持插件机制，我们可以用插件来添加自定义命令。但是还是喜欢点开即看的UI，不习惯这种还要再输入命令，才能看到的，所以就没怎么用了。如果Goland支持（像database的query一样）直接把terminal默认放到editor区使用就更好了。否则查看类似k9s这种大量信息的cli工具就不太方便。
      cmd:
        - c: k9s version
        - c: k9s info
          x: To get info about K9s runtime (logs, configs, etc..)
        - c: k9s help
          x: List all available CLI options
        - c: k9s -n mycoolns
          x: To run K9s in a given namespace
        - c: k9s --context coolCtx
          x: Start K9s in an existing KubeConfig context
        - c: k9s --readonly
          x: Start K9s in readonly mode - with all cluster modification commands disabled
    - url: https://github.com/rancher/rancher
      des: rancher是用来管理k8s cluster的，如果只是用来作为开发环境使用，可能不是个好主意。
    - url: https://github.com/kubesphere/kubesphere
      des: KubeSphere、Rancher 都有商业公司运作，为了增加黏性，都会具有一定入侵性。KubeSphere 要求子集群安装最小化的 KubeSphere，Racher 要求安装 Agent。KubeSphere 针对的是开发全场景，Racher 针对的是集群运维管理。
  qs:
    - q: Compare minikube, kubeadm, rancher, kind and k3s? (scalability)



```



## monitor


### Compares

```yaml
- url: https://github.com/zabbix/zabbix

- url: https://github.com/DataDog/datadog-agent
- url: https://github.com/zorkian/go-datadog-api
  des: Golang client for the Datadog API
- url: https://github.com/DataDog/datadog-api-client-go
  des: Golang client for the Datadog API


```