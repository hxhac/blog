"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7191],{4718:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var c=l(4848),o=l(8453);const r={},i=void 0,t={id:"2024/container-network",title:"container-network",description:"calico",source:"@site/docs/2024/container-network.md",sourceDirName:"2024",slug:"/2024/container-network",permalink:"/2024/container-network",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"XBPk3T",lastUpdatedAt:17283731e5,frontMatter:{}},a={},d=[{value:"calico",id:"calico",level:2},{value:"calico arch",id:"calico-arch",level:3},{value:"calico works?",id:"calico-works",level:3},{value:"flannel",id:"flannel",level:2}];function s(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"calico",children:"calico"}),"\n",(0,c.jsx)(e.h3,{id:"calico-arch",children:"calico arch"}),"\n",(0,c.jsx)(e.p,{children:"calico \u5305\u62ec\u5982\u4e0b\u91cd\u8981\u7ec4\u4ef6\uff1aFelix\uff0cetcd\uff0cBGP Client\uff0cBGP Route Reflector\u3002\u4e0b\u9762\u5206 \u522b\u8bf4\u660e\u4e00\u4e0b\u8fd9\u4e9b\u7ec4\u4ef6\u3002"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"Felix\uff1a\u4e3b\u8981\u8d1f\u8d23\u8def\u7531\u914d\u7f6e\u4ee5\u53caACLS\u89c4\u5219\u7684\u914d\u7f6e\u4ee5\u53ca\u4e0b\u53d1\uff0c\u5b83\u5b58\u5728\u5728\u6bcf\u4e2anode\u8282\u70b9\u4e0a\u3002"}),"\n",(0,c.jsx)(e.li,{children:"etcd\uff1a\u5206\u5e03\u5f0f\u952e\u503c\u5b58\u50a8\uff0c\u4e3b\u8981\u8d1f\u8d23\u7f51\u7edc\u5143\u6570\u636e\u4e00\u81f4\u6027\uff0c\u786e\u4fddCalico\u7f51\u7edc\u72b6\u6001\u7684\u51c6\u786e\u6027\uff0c\u53ef\u4ee5\u4e0ekubernetes\u5171\u7528\uff1b"}),"\n",(0,c.jsx)(e.li,{children:"BGPClient\uff08BIRD\uff09\uff0c\u4e3b\u8981\u8d1f\u8d23\u628a Felix\u5199\u5165 kernel\u7684\u8def\u7531\u4fe1\u606f\u5206\u53d1\u5230\u5f53\u524d Calico \u7f51 \u7edc\uff0c\u786e\u4fdd workload\u95f4\u7684\u901a\u4fe1\u7684\u6709\u6548\u6027\uff1b"}),"\n",(0,c.jsx)(e.li,{children:"BGPRoute Reflector\uff08BIRD\uff09\uff0c\u5927\u89c4\u6a21\u90e8\u7f72\u65f6\u4f7f\u7528\uff0c\u6452\u5f03\u6240\u6709\u8282\u70b9\u4e92\u8054\u7684mesh\u6a21\u5f0f\uff0c\u901a \u8fc7\u4e00\u4e2a\u6216\u8005\u591a\u4e2a BGPRoute Reflector \u6765\u5b8c\u6210\u96c6\u4e2d\u5f0f\u7684\u8def\u7531\u5206\u53d1"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u901a\u8fc7\u5c06\u6574\u4e2a\u4e92\u8054\u7f51\u7684\u53ef\u6269\u5c55IP\u7f51\u7edc\u539f\u5219\u538b\u7f29\u5230\u6570\u636e\u4e2d\u5fc3\u7ea7\u522b\uff0cCalico\u5728\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8282\u70b9\u5229\u7528Linuxkernel \u5b9e\u73b0\u4e86\u4e00\u4e2a\u9ad8\u6548\u7684 vRouter\u6765\u8d1f\u8d23\u6570\u636e\u8f6c\u53d1\uff0c\u800c\u6bcf\u4e2avRouter\u901a \u8fc7BGP\u534f\u8bae\u8d1f\u8d23\u628a\u81ea\u5df1\u4e0a\u8fd0\u884c\u7684 workload\u7684\u8def\u7531\u4fe1\u606f\u5411\u6574\u4e2aCalico \u7f51\u7edc\u5185\u4f20\u64ad\uff0c"}),"\n",(0,c.jsx)(e.p,{children:"\u5c0f\u89c4\u6a21\u90e8\u7f72\u53ef\u4ee5\u76f4\u63a5\u4e92\u8054\uff0c\u5927\u89c4\u6a21\u4e0b\u53ef\u901a\u8fc7\u6307\u5b9a\u7684BGProute reflector \u6765\u5b8c\u6210\u3002\u8fd9\u6837\u4fdd\u8bc1\u6700\u7ec8\u6240\u6709\u7684workload\u4e4b\u95f4\u7684\u6570\u636e\u6d41\u91cf\u90fd\u662f\u901a\u8fc7IP\u5305\u7684\u65b9\u5f0f\u5b8c\u6210\u4e92\u8054\u7684\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"calico-works",children:"calico works?"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90fd\u8fd0\u884c\u4e00\u4e2a\u540d\u4e3a calico-node \u7684\u4ee3\u7406\u7a0b\u5e8f\uff0c\u8be5\u7a0b\u5e8f\u8d1f\u8d23\u865a\u62df\u7f51\u7edc\u7684\u521b\u5efa\u548c\u7ba1\u7406\u3002"}),"\n",(0,c.jsx)(e.li,{children:"Calico \u4f7f\u7528 BGP\uff08Border Gateway Protocol\uff09\u534f\u8bae\u6765\u8def\u7531\u5bb9\u5668\u4e4b\u95f4\u7684\u6d41\u91cf\uff0c\u5b83\u5229\u7528\u8282\u70b9\u4e0a\u7684\u8def\u7531\u8868\u6765\u786e\u5b9a\u6d41\u91cf\u7684\u8def\u5f84\u3002"}),"\n",(0,c.jsx)(e.li,{children:"Calico \u8fd8\u652f\u6301\u7f51\u7edc\u7b56\u7565\uff0c\u5141\u8bb8\u7ba1\u7406\u5458\u5b9a\u4e49\u7f51\u7edc\u8bbf\u95ee\u63a7\u5236\u89c4\u5219\uff0c\u4ee5\u786e\u4fdd\u5bb9\u5668\u4e4b\u95f4\u7684\u5b89\u5168\u901a\u4fe1\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"flannel",children:"flannel"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-markdown",children:"\nFlannel \u5b9e\u8d28\u4e0a\u662f\u4e00\u79cd\u201c\u8986\u76d6\u7f51\u7edc\uff08overlay network\uff09\u201d\uff0c\u4e5f\u5c31\u662f\u5c06TCP\u6570\u636e\u5305\u88c5\u5728\u53e6 \u4e00\u79cd\u7f51\u7edc\u5305\u91cc\u9762\u8fdb\u884c\u8def\u7531\u8f6c\u53d1\u548c\u901a\u4fe1\uff0c\u76ee\u524d\u5df2\u7ecf\u652f\u6301UDP\u3001VxLAN\u3001AWS VPC\u548cGCE\u8def\u7531\u7b49\u6570\u636e\u8f6c\u53d1\u65b9\u5f0f\u3002\n\n\u9ed8\u8ba4\u7684\u8282\u70b9\u95f4\u6570\u636e\u901a\u4fe1\u65b9\u5f0f\u662fUDP\u8f6c\u53d1\u3002\n\n\u6570\u636e\u4ece\u6e90\u5bb9\u5668\u4e2d\u53d1\u51fa\u540e\uff0c\u7ecf\u7531\u6240\u5728\u4e3b\u673a\u7684docker0\u865a\u62df\u7f51\u5361\u8f6c\u53d1\u5230flannel0\u865a\u62df\u7f51\u5361\uff08\u5148\u53ef\u4ee5\u4e0d\u7ecf\u8fc7docker0\u7f51\u5361\uff0c\u4f7f\u7528cni\u6a21\u5f0f\uff09\uff0c\u8fd9\u662f\u4e2aP2P\u7684\u865a\u62df\u7f51\u5361\uff0cflanneld\u670d\u52a1\u76d1\u542c\u5728\u7f51\u5361\u7684\u53e6\u5916\u4e00\u7aef\u3002\n\nFlannel \u901a\u8fc7 Etcd\u670d\u52a1\u7ef4\u62a4\u4e86\u4e00\u5f20\u8282\u70b9\u95f4\u7684\u8def\u7531\u8868\uff0c\u8be6\u7ec6\u8bb0\u5f55\u4e86\u5404\u8282\u70b9\u5b50\u7f51\u7f51\u6bb5\u3002\n\n\u6e90\u4e3b\u673a\u7684flanneld\u670d\u52a1\u5c06\u539f\u672c\u7684\u6570\u636e\u5185\u5bb9UDP\u5c01\u88c5\u540e\u6839\u636e\u81ea\u5df1\u7684\u8def\u7531\u8868\u6295\u9012\u7ed9\u76ee\u7684\u8282\u70b9\u7684flanneld\u670d\u52a1\uff0c\u6570\u636e\u5230\u8fbe\u4ee5\u540e\u88ab\u89e3\u5305\uff0c\u7136\u540e\u76f4\u63a5\u8fdb\u5165\u76ee\u7684\u8282\u70b9\u7684flannel0\u865a\u62df\u7f51\u5361\uff0c\u7136\u540e\u88ab\u8f6c\u53d1\u5230\u76ee\u7684\u4e3b\u673a\u7684docker0\u865a\u62df\u7f51\u5361\uff0c\u6700\u540e\u5c31\u50cf\u672c\u673a\u5bb9\u5668\u901a\u4fe1\u4e00\u4e0b\u7684\u6709\n\ndocker0 \u8def\u7531\u5230\u8fbe\u76ee\u6807\u5bb9\u5668\u3002\n\nflannel \u5728\u8fdb\u884c\u8def\u7531\u8f6c\u53d1\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u5c01\u5305\u89e3\u5305\u7684\u64cd\u4f5c\uff0c\u8fd9\u6837\u6d6a\u8d39\u4e86CPU\u7684\u8ba1\u7b97\u8d44\u6e90\u3002\n\n"})}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90fd\u8fd0\u884c\u4e00\u4e2a\u540d\u4e3a flanneld \u7684\u4ee3\u7406\u7a0b\u5e8f\uff0c\u8be5\u7a0b\u5e8f\u8d1f\u8d23\u521b\u5efa\u548c\u7ba1\u7406\u865a\u62df\u7f51\u7edc\u3002"}),"\n",(0,c.jsx)(e.li,{children:"flanneld \u4e3a\u6bcf\u4e2a\u8282\u70b9\u5206\u914d\u4e00\u4e2a\u552f\u4e00\u7684\u5b50\u7f51\uff08\u79f0\u4e3a flannel \u5b50\u7f51\uff09\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u5f53\u5bb9\u5668\u521b\u5efa\u65f6\uff0cflanneld \u4f1a\u4e3a\u5bb9\u5668\u5206\u914d\u4e00\u4e2a\u552f\u4e00\u7684 IP \u5730\u5740\uff0c\u5e76\u5c06\u5176\u8def\u7531\u5230 flannel \u5b50\u7f51\u4e0a\u7684\u5176\u4ed6\u8282\u70b9\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-markdown",children:"Flannel \u4f1a\u5728\u6bcf\u4e00\u4e2a\u5bbf\u4e3b\u673a\u4e0a\u8fd0\u884c\u540d\u4e3a flanneld \u4ee3\u7406\uff0c\u5176\u8d1f\u8d23\u4e3a\u5bbf\u4e3b\u673a\u9884\u5148\u5206\u914d\u4e00\u4e2aSubnet \u5b50\u7f51\uff0c\u5e76\u4e3a Pod \u5206\u914dip\u5730\u5740\u3002Flannel \u4f7f\u7528 Kubernetes \u6216 etcd \u6765\u5b58\u50a8\u7f51\u7edc\u914d\u7f6e\u3001\u5206\u914d\u7684\u5b50\u7f51\u548c\u4e3b\u673a\u516c\u5171 ip \u7b49\u4fe1\u606f\uff0c\u6570\u636e\u5305\u5219\u901a\u8fc7 VXLAN\u3001UDP \u6216 host-gw \u8fd9\u4e9b\u7c7b\u578b\u7684\u540e\u7aef\u673a\u5236\u8fdb\u884c\u8f6c\u53d1\u3002\n\n\u5bf9\u6bd4\u4e09\u79cd\u7f51\u7edc\uff0cudp \u4e3b\u8981\u662f\u5229\u7528 tun \u8bbe\u5907\u6765\u6a21\u62df\u4e00\u4e2a\u865a\u62df\u7f51\u7edc\u8fdb\u884c\u901a\u4fe1\uff1bvxlan \u6a21\u5f0f\u4e3b\u8981\u662f\u5229\u7528 vxlan \u5b9e\u73b0\u4e00\u4e2a\u4e09\u5c42\u7684\u8986\u76d6\u7f51\u7edc\uff0c\u5229\u7528 flannel1 \u8fd9\u4e2a vtep \u8bbe\u5907\u6765\u8fdb\u884c\u5c01\u62c6\u5305\uff0c\u7136\u540e\u8fdb\u884c\u8def\u7531\u8f6c\u53d1\u5b9e\u73b0\u901a\u4fe1\uff1b\u800c host-gw \u7f51\u7edc\u5219\u66f4\u4e3a\u76f4\u63a5\uff0c\u76f4\u63a5\u6539\u53d8\u4e8c\u5c42\u7f51\u7edc\u7684\u8def\u7531\u4fe1\u606f\uff0c\u5b9e\u73b0\u6570\u636e\u5305\u7684\u8f6c\u53d1\uff0c\u4ece\u800c\u7701\u53bb\u4e2d\u95f4\u5c42\uff0c\u901a\u4fe1\u6548\u7387\u66f4\u9ad8\u3002\n"})}),"\n",(0,c.jsx)(e.p,{children:"pull\u673a\u5236\uff0c\u5206\u914dsubnet\u5b50\u7f51\uff0c\u5206\u4e3astorage\u548cbackend\u4e24\u90e8\u5206"})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(s,{...n})}):s(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>i,x:()=>t});var c=l(6540);const o={},r=c.createContext(o);function i(n){const e=c.useContext(r);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),c.createElement(r.Provider,{value:e},n.children)}}}]);