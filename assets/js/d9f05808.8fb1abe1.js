"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3783],{6677:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var s=i(4848),r=i(8453);const l={title:"\u4ee3\u7801\u89c4\u8303",last_update:{date:new Date("2024-09-14T00:00:00.000Z")}},c=void 0,t={id:"2024/code-spec",title:"\u4ee3\u7801\u89c4\u8303",description:"x",source:"@site/docs/2024/code-spec.md",sourceDirName:"2024",slug:"/2024/code-spec",permalink:"/2024/code-spec",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"XBPk3T",lastUpdatedAt:1726272e6,frontMatter:{title:"\u4ee3\u7801\u89c4\u8303",last_update:{date:"2024-09-14T00:00:00.000Z"}},sidebar:"zzz",previous:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/2024/Design-Pattern"},next:{title:"php.yml",permalink:"/2024/php"}},d={},h=[{value:"x",id:"x",level:2},{value:"[2024/9/1] \u300aUnix\u7f16\u7a0b\u827a\u672f\u300b 1.6 Unix\u54f2\u5b66\u57fa\u7840",id:"202491-unix\u7f16\u7a0b\u827a\u672f-16-unix\u54f2\u5b66\u57fa\u7840",level:2},{value:"[2024/9/1] \u300a\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b\u8bfb\u4e66\u7b14\u8bb0",id:"202491-\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u8bfb\u4e66\u7b14\u8bb0",level:2},{value:"\u300a100 Go Mistakes and How to Avoid Them\u300b",id:"100-go-mistakes-and-how-to-avoid-them",level:2},{value:"[2024-10-09]\u300a\u4ee3\u7801\u4e4b\u4e11\u300b",id:"2024-10-09\u4ee3\u7801\u4e4b\u4e11",level:2},{value:"[2024-10-10]\u300a\u91cd\u6784\uff1a\u6539\u5584\u65e2\u6709\u4ee3\u7801\u7684\u8bbe\u8ba1\u300b",id:"2024-10-10\u91cd\u6784\u6539\u5584\u65e2\u6709\u4ee3\u7801\u7684\u8bbe\u8ba1",level:2}];function a(n){const e={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"x",children:"x"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"\u6240\u6709\u7684\u4ee3\u7801\u89c4\u8303\u90fd\u5e94\u8be5\u5de5\u5177\u5316"}),"\uff0c\u4e43\u81f3\u5f00\u53d1\u89c4\u8303\u90fd\u5e94\u8be5\u5de5\u5177\u5316"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markdown",children:"- \u5de5\u7a0b\u89c4\u8303\uff08\u5de5\u7a0b\u7ed3\u6784\uff0c\u5206\u5c42\u65b9\u5f0f\u53ca\u547d\u540d\u7b49\u7b49\uff09\n- \u547d\u540d\u89c4\u8303\uff08\u63a5\u53e3\u3001\u7c7b\u3001\u65b9\u6cd5\u540d\u3001\u53d8\u91cf\u540d\u7b49\uff09\n- \u4ee3\u7801\u89c4\u8303\uff08\u62ec\u53f7\u3001\u7a7a\u683c\u3001\u6362\u884c\u3001\u7f29\u8fdb\u7b49\uff09\n- \u6ce8\u91ca\u89c4\u8303\uff08\u89c4\u5b9a\u5fc5\u8981\u7684\u6ce8\u91ca\uff09\n- \u65e5\u5fd7\u89c4\u8303\uff08\u5408\u7406\u7684\u8bb0\u5f55\u5fc5\u8981\u7684\u65e5\u5fd7\uff09\n- \u5404\u79cd\u63a8\u8350\u4e0e\u4e0d\u63a8\u8350\u7684\u4ee3\u7801\u793a\u4f8b\n\n---\n\n- \u6539\u5b8c\u4ee3\u7801\uff0c\u8bb0\u5f97\u81ea\u6d4b\n- \u4e0d\u8981\u76f8\u4fe1\u5ba2\u6237\u7aef\u7684\u4efb\u4f55\u53c2\u6570\uff0c\u65b9\u6cd5\u5165\u53c2\u5c3d\u91cf\u90fd\u68c0\u9a8c\uff0c\u6bd4\u5982\u5165\u53c2\u662f\u5426\u5141\u8bb8\u4e3a\u7a7a\uff0c\u5165\u53c2\u957f\u5ea6\u662f\u5426\u7b26\u5408\u4f60\u7684\u9884\u671f\u957f\u5ea6\n- \u505a\u597d\u5192\u70df\u6d4b\u8bd5\u3002\u4fee\u6539\u8001\u63a5\u53e3\u7684\u65f6\u5019\uff0c\u601d\u8003\u63a5\u53e3\u7684\u517c\u5bb9\u6027\n- \u5bf9\u4e8e\u590d\u6742\u7684\u4ee3\u7801\u903b\u8f91\uff0c\u6dfb\u52a0\u6e05\u695a\u7684\u6ce8\u91ca\n- \u4f7f\u7528\u5b8c IO \u8d44\u6e90\u6d41\uff0c\u9700\u8981\u5173\u95ed\n- \u4ee3\u7801\u91c7\u53d6\u63aa\u65bd\u907f\u514d\u8fd0\u884c\u65f6\u9519\u8bef\uff08\u5982\u6570\u7ec4\u8fb9\u754c\u6ea2\u51fa\u3001\u88ab\u96f6\u9664\u7b49\uff09\n- \u5c3d\u91cf\u4e0d\u5728\u5faa\u73af\u91cc\u8fdc\u7a0b\u8c03\u7528\u3001\u6216\u8005\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u4f18\u5148\u8003\u8651\u6279\u91cf\u8fdb\u884c\n- \u5199\u5b8c\u4ee3\u7801\uff0c\u8111\u6d1e\u4e00\u4e0b\u591a\u7ebf\u7a0b\u6267\u884c\u4f1a\u600e\u6837\uff0c\u6ce8\u610f\u5e76\u53d1\u4e00\u81f4\u6027\u95ee\u9898\n- \u83b7\u53d6\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u5148\u5224\u65ad\u5bf9\u8c61\u662f\u5426\u4e3a\u7a7a\n- \u591a\u7ebf\u7a0b\u5f02\u6b65\u4f18\u5148\u8003\u8651\u6070\u5f53\u7684\u7ebf\u7a0b\u6c60\uff0c\u800c\u4e0d\u662f new thread\uff0c\u540c\u65f6\u8003\u8651\u7ebf\u7a0b\u6c60\u662f\u5426\u9694\u79bb\n- \u624b\u52a8\u5199\u5b8c\u4ee3\u7801\u4e1a\u52a1\u7684 SQL\uff0c\u5148\u62ff\u53bb\u6570\u636e\u5e93\u8dd1\u4e00\u4e0b\uff0c\u540c\u65f6\u4e5f explain \u770b\u4e0b\u6267\u884c\u8ba1\u5212\n- \u8c03\u7528\u7b2c\u4e09\u65b9\u63a5\u53e3\uff0c\u9700\u8981\u8003\u8651\u5f02\u5e38\u5904\u7406\u3001\u5b89\u5168\u6027\u3001\u8d85\u65f6\u91cd\u8bd5\u8fd9\u51e0\u4e2a\u70b9\n   - \u5f02\u5e38\u5904\u7406\uff08\u6bd4\u5982\uff0c\u4f60\u8c03\u522b\u4eba\u7684\u63a5\u53e3\uff0c\u5982\u679c\u5f02\u5e38\u4e86\uff0c\u600e\u4e48\u5904\u7406\uff0c\u662f\u91cd\u8bd5\u8fd8\u662f\u5f53\u505a\u5931\u8d25\uff09\n   - \u8d85\u65f6\uff08\u6ca1\u6cd5\u9884\u4f30\u5bf9\u65b9\u63a5\u53e3\u4e00\u822c\u591a\u4e45\u8fd4\u56de\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e2a\u8d85\u65f6\u65ad\u5f00\u65f6\u95f4\uff0c\u4ee5\u4fdd\u62a4\u4f60\u7684\u63a5\u53e3\uff09\n   - \u91cd\u8bd5\u6b21\u6570\uff08\u4f60\u7684\u63a5\u53e3\u8c03\u5931\u8d25\uff0c\u9700\u4e0d\u9700\u8981\u91cd\u8bd5\uff0c\u9700\u8981\u7ad9\u5728\u4e1a\u52a1\u89d2\u5ea6\u4e0a\u601d\u8003\u8fd9\u4e2a\u95ee\u9898\uff09\n- \u63a5\u53e3\u9700\u8981\u8003\u8651\u5e42\u7b49\u6027\n- \u591a\u7ebf\u7a0b\u60c5\u51b5\u4e0b\uff0c\u8003\u8651\u7ebf\u6027\u5b89\u5168\u95ee\u9898\n- \u4e3b\u4ece\u5ef6\u8fdf\u95ee\u9898\u8003\u8651\n- \u4f7f\u7528\u7f13\u5b58\u7684\u65f6\u5019\uff0c\u8003\u8651\u7f13\u5b58\u8ddf DB \u7684\u4e00\u81f4\u6027\uff0c\u8fd8\u6709\uff08\u7f13\u5b58\u7a7f\u900f\u3001\u7f13\u5b58\u96ea\u5d29\u548c\u7f13\u5b58\u51fb\u7a7f\uff09\n\n---\n\n- \u7f3a\u5c11\u53d8\u66f4\u7684\u8bf4\u660e\n- \u6ee5\u7528\u5f02\u5e38\u6355\u83b7\n- \u8fc7\u5ea6\u76f8\u4fe1\u7b2c\u4e09\u65b9\u63a5\u53e3\u6216\u670d\u52a1\n- \u5904\u7406\u8fc7\u7a0b\u7f3a\u5c11\u9636\u6bb5\u6027\u7ed3\u679c\n- \u5df2\u6709\u7684 utils \u65b9\u6cd5\uff0c\u91cd\u590d\u9020\u8f6e\u5b50\n- \u4ee3\u7801\u8fc7\u4e8e\u590d\u6742\uff0c\u7f3a\u5c11\u5fc5\u8981\u6ce8\u91ca\uff0c\u540e\u4eba\u96be\u4ee5\u7ef4\u62a4\n- \u76ee\u5f55\u7ed3\u6784\u4e94\u82b1\u516b\u95e8\uff0c\u6742\u4e71\u4e0d\u582a\n- \u7ec4\u4ef6\u7c92\u5ea6\u8fc7\u5927\uff0cAPI \u6cdb\u6ee5\n- \u4f4e\u5185\u805a\u3001\u9ad8\u8026\u5408\n- \u62bd\u8c61\u4e0d\u591f\u3001\u903b\u8f91\u7ea0\u7f20\u2014\u2014High Level \u4e1a\u52a1\u903b\u8f91\u548c Low Level \u5b9e\u73b0\u903b\u8f91\u7ea0\u7f20\n- if...else \u4e4b\u7c7b\u7684 tradeoff \u65b9\u6848\u592a\u591a\uff0c\u725b\u76ae\u85d3\u4e00\u6837\n- \u6ca1\u6709\u505a\u597d\u4e25\u683c\u7684 cicd \u548c\u6d4b\u8bd5\u6d41\u7a0b\uff0c\u5c24\u5176\u662f\u5192\u70df\u6d4b\u8bd5\n\n"})}),"\n",(0,s.jsx)(e.h2,{id:"202491-unix\u7f16\u7a0b\u827a\u672f-16-unix\u54f2\u5b66\u57fa\u7840",children:"[2024/9/1] \u300aUnix\u7f16\u7a0b\u827a\u672f\u300b 1.6 Unix\u54f2\u5b66\u57fa\u7840"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markdown",children:"\u6a21\u5757\u539f\u5219\uff1a\u4f7f\u7528\u7b80\u6d01\u7684\u63a5\u53e3\u62fc\u5408\u7b80\u5355\u7684\u90e8\u4ef6\n\u7ec4\u5408\u539f\u5219\uff1a\u8bbe\u8ba1\u65f6\u8003\u8651\u62fc\u63a5\u7ec4\u5408\n\u7b80\u6d01\u539f\u5219\uff1a\u8bbe\u8ba1\u8981\u7b80\u6d01\uff0c\u590d\u6742\u5ea6\u80fd\u4f4e\u5219\u4f4e\n\u541d\u556c\u539f\u5219\uff1a\u9664\u975e\u5374\u65e0\u5b83\u6cd5\uff0c\u4e0d\u8981\u7f16\u5199\u5e9e\u5927\u7684\u7a0b\u5e8f\n\n\u6e05\u6670\u539f\u5219\uff1a\u6e05\u6670\u80dc\u4e8e\u673a\u5de7\n\u5206\u79bb\u539f\u5219\uff1a\u7b56\u7565\u540c\u673a\u5236\u5206\u79bb\uff0c\u63a5\u53e3\u540c\u5f15\u64ce\u5206\u79bb\n\u8868\u793a\u539f\u5219\uff1a\u628a\u77e5\u8bc6\u53e0\u5165\u6570\u636e\u4ee5\u6c42\u903b\u8f91\u8d28\u6734\u800c\u5065\u58ee\n\u751f\u6210\u539f\u5219\uff1a\u907f\u514d\u624b\u5de5hack\uff0c\u5c3d\u91cf\u7f16\u5199\u7a0b\u5e8f\u53bb\u751f\u6210\u7a0b\u5e8f\n\n\u901a\u4fd7\u539f\u5219\uff1a\u63a5\u53e3\u8bbe\u8ba1\u907f\u514d\u6807\u65b0\u7acb\u5f02\n\u900f\u660e\u6027\u539f\u5219\uff1a\u8bbe\u8ba1\u8981\u53ef\u89c1\uff0c\u4ee5\u4fbf\u5ba1\u67e5\u548c\u8c03\u8bd5\n\u7f04\u9ed8\u539f\u5219\uff1a\u5982\u679c\u4e00\u4e2a\u7a0b\u5e8f\u6ca1\u4ec0\u4e48\u597d\u8bf4\u7684\uff0c\u5c31\u4fdd\u6301\u6c89\u9ed8\n\u8865\u6551\u539f\u5219\uff1a\u51fa\u73b0\u5f02\u5e38\u65f6\uff0c\u9a6c\u4e0a\u9000\u51fa\u5e76\u7ed9\u51fa\u8db3\u591f\u9519\u8bef\u4fe1\u606f\n\n\u4f18\u5316\u539f\u5219\uff1a\u96d5\u7422\u524d\u5148\u5f97\u6709\u539f\u578b\uff0c\u8dd1\u4e4b\u524d\u5148\u5b66\u4f1a\u8d70\n\u591a\u6837\u539f\u5219\uff1a\u7edd\u4e0d\u76f8\u4fe1\u6240\u8c13\u201c\u4e0d\u4e8c\u6cd5\u95e8\u201d\u7684\u65ad\u8a00\uff08\u6307\u8f6f\u4ef6\u4f5c\u8005\u65e0\u6cd5\u9884\u60f3\u5230\u8f6f\u4ef6\u7684\u6240\u6709\u7528\u9014\uff09\n\n\u5065\u58ee\u539f\u5219\uff1a\u5065\u58ee\u6e90\u4e8e\u900f\u660e\u548c\u7b80\u6d01\n\u7ecf\u6d4e\u539f\u5219\uff1a\u5b81\u82b1\u673a\u5668\u4e00\u5206\uff0c\u4e0d\u82b1\u7a0b\u5e8f\u5458\u4e00\u79d2\n\u6269\u5c55\u539f\u5219\uff1a\u8bbe\u8ba1\u7740\u773c\u4e8e\u672a\u6765\uff0c\u672a\u6765\u603b\u6bd4\u9884\u60f3\u5feb\n\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7b80\u5355\u7684\u5206\u5206\u7c7b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"\u6a21\u5757\u3001\u7ec4\u5408\u3001\u7b80\u6d01\u3001\u541d\u556c\uff0c\u8bb2\u7684\u662f\u63a7\u5236\u7a0b\u5e8f\u590d\u6742\u5ea6\uff0c\u5c31\u662f\u6211\u4eec\u73b0\u5728\u8bf4\u7684\u6a21\u5757\u5316\uff0c\u9ad8\u5185\u805a\u4f4e\u8026\u5408\uff1b"}),"\n",(0,s.jsx)(e.p,{children:"\u6e05\u6670\u539f\u5219\uff0c\u6307\u51fa\u4ee3\u7801\u66f4\u662f\u7ed9\u4eba\u770b\u7684\uff0c\u6240\u4ee5\u6e05\u6670\u7684\u4ee3\u7801\u66f4\u6613\u4e8e\u7ef4\u62a4\u548c\u51cf\u5c11bug\uff1b\n\u5206\u79bb\u539f\u5219\uff0c\u6307\u7684\u5c31\u662f\u8868\u9a71\u52a8\u6cd5\uff1b\n\u8868\u793a\u539f\u5219\uff0c\u6307\u51fa\u4e86\u6570\u636e\u6bd4\u7f16\u7a0b\u903b\u8f91\u66f4\u52a0\u6e05\u6670\uff0c\u540c\u6837\u6307\u5411\u4e86\u5206\u79bb\u6570\u636e\uff1b\n\u751f\u6210\u539f\u5219\uff0c\u6307\u7528\u4ee3\u7801\u751f\u6210\u5b8c\u6210\u91cd\u590d\u52b3\u52a8\uff1b"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u4fd7\u3001\u900f\u660e\u6027\uff0c\u6307\u5411\u7a0b\u5e8f\u63a5\u53e3\u8bbe\u8ba1\uff1b\n\u7f04\u9ed8\u3001\u8865\u6551\uff0c\u6307\u5411\u7a0b\u5e8f\u884c\u4e3a\u8bbe\u8ba1\uff1b"}),"\n",(0,s.jsx)(e.p,{children:"\u4f18\u5316\u3001\u591a\u6837\uff0c\u8bf4\u51fa\u4e86\u90a3\u53e5\u540d\u8a00\uff1a\u8fc7\u65e9\u4f18\u5316\u662f\u4e07\u6076\u4e4b\u6e90\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5065\u58ee\u3001\u7ecf\u6d4e\u3001\u6269\u5c55\uff0c\u4e0e\u7a0b\u5e8f\u8bbe\u8ba1\u65f6\u7684\u7406\u5ff5\u76f8\u5173\u3002"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u770b\u5230\u4e0a\u9762\u7684\uff0c\u60f3\u5230\u4e86 OOP\u4e03\u5927\u539f\u5219\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5f00\u95ed\u539f\u5219 OCP"}),"\n",(0,s.jsx)(e.li,{children:"\u91cc\u6c0f\u66ff\u6362\u539f\u5219 LSP"}),"\n",(0,s.jsx)(e.li,{children:"\u4f9d\u8d56\u5012\u8f6c\u539f\u5219 DIP"}),"\n",(0,s.jsx)(e.li,{children:"\u5355\u4e00\u804c\u8d23\u539f\u5219 SRP"}),"\n",(0,s.jsx)(e.li,{children:"\u63a5\u53e3\u9694\u79bb\u539f\u5219 ISP"}),"\n",(0,s.jsx)(e.li,{children:"\u7ec4\u5408/\u805a\u5408\u590d\u7528\u539f\u5219 CARP"}),"\n",(0,s.jsx)(e.li,{children:"\u8fea\u7c73\u7279\u6cd5\u5219 LOD"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://cloud.tencent.com/developer/article/1650116",children:"\u8bbe\u8ba1\u6a21\u5f0f\u6982\u5ff5\u548c\u4e03\u5927\u539f\u5219-\u817e\u8baf\u4e91\u5f00\u53d1\u8005\u793e\u533a-\u817e\u8baf\u4e91"})}),"\n",(0,s.jsx)(e.h2,{id:"202491-\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u8bfb\u4e66\u7b14\u8bb0",children:"[2024/9/1] \u300a\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b\u8bfb\u4e66\u7b14\u8bb0"}),"\n",(0,s.jsx)(e.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662fRCM\u7684\u300a\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b\u5206\u4e3a\u4e24\u672c\uff0c\u4e00\u672c\u662f\u300aClean Code: A Handbook of Agile Software Craftsmanship\u300b\uff0c\u53e6\u4e00\u672c\u662f\u300aClean Coder: A Code of Conduct for Prof. Programmers\u300b"}),"\n",(0,s.jsx)(e.p,{children:"\u524d\u4e00\u672c\u662f\u6280\u672f\uff0c\u540e\u4e00\u672c\u662f\u8ba4\u77e5"}),"\n",(0,s.jsx)(e.p,{children:"\u524d\u4e00\u672c\u7684\u76f8\u5173\u7b14\u8bb0\u5f88\u591a\uff0c\u6bd4\u5982"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://juejin.cn/post/7153906550505996296",children:"\u300a\u4ee3\u7801\u6574\u6d01\u4e4b\u9053-Clean Code\u300b\u4e1a\u52a1\u67b6\u6784\u5e76\u4e0d\u7b80\u5355\uff0c\u53ea\u662f\u5f88\u591a\u5f00\u53d1\u540c\u5b66\u7406\u89e3\u7b80\u5355\u4e86\u800c\u5df2\u3002\u4e1a\u52a1\u67b6\u6784\u8bb2\u7a76\u5de5\u7a0b\u4ee3\u7801\u5728\u8fed\u4ee3\u8fc7\u7a0b\u4e2d - \u6398\u91d1"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/LiuPengKun1993/Articles/blob/master/contents/iOS%20Reading%20Notes/%E3%80%8A%E4%BB%A3%E7%A0%81%E6%95%B4%E6%B4%81%E4%B9%8B%E9%81%93%E3%80%8B%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0.md",children:"Articles/contents/iOS Reading Notes/\u300a\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b\u8bfb\u4e66\u7b14\u8bb0.md at master \xb7 LiuPengKun1993/Articles"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://wudashan.com/2017/05/03/Clean-Code-Read-Notes/",children:"\u300a\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b \u8bfb\u4e66\u7b14\u8bb0 - \u5434\u5927\u5c71\u7684\u535a\u5ba2 | Wudashan Blog"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://segmentfault.com/a/1190000019565037",children:"java - \u300a\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b\u8bfb\u4e66\u7b14\u8bb0 - \u4e2a\u4eba\u6587\u7ae0 - SegmentFault \u601d\u5426"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.modb.pro/db/416081",children:"\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u8bfb\u4e66\u7b14\u8bb0 - \u58a8\u5929\u8f6e"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.cnblogs.com/chnmig/p/17512187.html",children:"\u300a\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b \u8bfb\u4e66\u7b14\u8bb0(1-5) - ChnMig - \u535a\u5ba2\u56ed"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.mcaoyuan.com/archives/clean-code",children:"\u300a\u4ee3\u7801\u6574\u6d01\u4e4b\u9053\u300b\u8bfb\u4e66\u7b14\u8bb0 | \u9a6c\u8349\u539f \u306e Blog"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u540e\u4e00\u672c\u5219\u5f88\u5c11\u4eba\u63d0\u5230"}),"\n",(0,s.jsx)(e.p,{children:"\u5148\u8bf4\u6280\u672f\uff0c\u5176\u5b9e\u6ca1\u5565\u610f\u601d\uff0c\u5404\u79cdlinters\u5f88\u591a\uff0c\u4ee3\u7801\u4e0d\u7b26\u5408spec\uff0c\u90fd\u65e0\u6cd5commit\uff0c\u4e45\u800c\u4e45\u4e4b\u8fd9\u4e9bspec\u5c31\u5df2\u7ecf\u4e60\u4ee5\u4e3a\u5e38\u4e86\u3002\u65e0\u975e\u662f \u51fd\u6570\u548c\u53d8\u91cf\u7684\u547d\u540d\u3001\u51fd\u6570\u53c2\u6570\u3001\u6ce8\u91ca\u7684\u7528\u6cd5\u3001\u9519\u8bef\u5904\u7406 \u7b49\u65b9\u9762\u7684\u89c4\u8303\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u66f4\u591a\u8fd8\u662f\u8ba4\u77e5\u65b9\u9762\uff0c\u6709\u53e5\u8bdd\u662f\u201c\u9053\u7406\u90fd\u61c2\uff0c\u5374\u8fc7\u4e0d\u597d\u8fd9\u4e00\u751f\u201d\uff0c\u4ee3\u7801\u4e5f\u662f\u540c\u6837\uff0c\u201cspec\u90fd\u61c2\uff0c\u5374\u8fd8\u662f\u5199\u4e0d\u597d\u4ee3\u7801\u201d\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u81ea\u5df1\u53cd\u601d\u4e86\u4e00\u4e0b\uff0c\u6211\u4e5f\u5de5\u4f5c\u4e867\u5e74\u591a\u4e86\uff0c",(0,s.jsx)(e.em,{children:(0,s.jsx)(e.strong,{children:"\u7ecf\u624b\u8fc7\u7684\u9879\u76ee\u4ece\u6765\u90fd\u662f\u201c\u5f00\u5c40\u8c6a\u8a00\u58ee\u8bed\uff0c\u524d\u671f\u81ea\u8a00\u81ea\u8bed\uff0c\u4e2d\u671f\u6c89\u9ed8\u4e0d\u8bed\uff0c\u540e\u671f\u80e1\u8a00\u4e71\u8bed\uff0c\u7ed3\u675f\u6c61\u8a00\u79fd\u8bed\uff0c\u89c2\u4f17\u6b22\u58f0\u7b11\u8bed\u3002\u201d\uff0c\u65e0\u4e00\u4f8b\u5916\u3002"})})]}),"\n",(0,s.jsx)(e.p,{children:"\u524d\u4e24\u5929\u770b\u66f9\u6797\u7684\u300a\u65f6\u8bc4\u5199\u4f5c\u5341\u8bb2\u300b\u4e2d\u8bf4 \u201c\u4e2d\u56fd\u4eba\u666e\u904d\u7f3a\u4e4f\u804c\u4e1a\u7cbe\u795e\u201d"}),"\n",(0,s.jsx)(e.p,{children:"\u539f\u8bdd\u662f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markdown",children:"\u4e5f\u8bb8\u662f\u53d7\u5230\u90a3\u4e9b\u201c\u51fa\u4f4d\u8005\u201d\u6210\u540d\u7684\u523a\u6fc0\uff0c\u5982\u4eca\u4e0d\u5c11\u8bb0\u8005\u90fd\u7231\u5728\u65b0\u95fb\u4e8b\u4ef6\u4e2d\u4e89\u62a2\u51fa\u4f4d\uff0c\u4ee5\u6210\u4e3a\u65b0\u95fb\u4e3b\u89d2\u3001\u6bd4\u65b0\u95fb\u672c\u8eab\u66f4\u70ed\u4e3a\u8363\u3002\u8fd9\u5b9e\u9645\u4e0a\u662f\u8bb0\u8005\u7684\u5931\u804c\uff0c\u8bb0\u8005\u53ea\u662f\u65b0\u95fb\u4e8b\u4ef6\u51b7\u9759\u7684\u65c1\u89c2\u8005\u548c\u5fe0\u5b9e\u7684\u8bb0\u5f55\u8005\uff0c\u804c\u8d23\u662f\u8bb0\u5f55\u4f60\u770b\u5230\u7684\u771f\u76f8\uff0c\u5e76\u5f15\u8d77\u516c\u4f17\u5bf9\u4e8b\u5b9e\u7684\u5173\u6ce8\uff0c\u4ece\u800c\u4ee5\u62a5\u9053\u63a8\u52a8\u793e\u4f1a\u7684\u8fdb\u6b65\u3002\u516c\u4f17\u6ca1\u5173\u6ce8\u4f60\u7684\u62a5\u9053\uff0c\u800c\u628a\u773c\u5149\u96c6\u4e2d\u5230\u4f60\u4e2a\u4eba\u8eab\u4e0a\uff0c\u4f60\u62a5\u9053\u7684\u4e8b\u4ef6\u672a\u6210\u4e3a\u65b0\u95fb\uff0c\u800c\u4f60\u501f\u6b64\u6210\u4e86\u201c\u540d\u8bb0\u201d\u200b\uff0c\u8fd9\u5176\u5b9e\u662f\u8bb0\u8005\u7684\u5931\u8d25\u3002\u65b0\u95fb\u62a5\u9053\u4eba\uff0c\u53d8\u6210\u65b0\u95fb\u5f53\u4e8b\u4eba\uff0c\u8fd9\u4e0d\u662f\u8bb0\u8005\u53ef\u70ab\u8000\u7684\u8c08\u8d44\uff0c\u800c\u662f\u804c\u4e1a\u4e0a\u7684\u8d25\u7b14\u3002\u4ee4\u4eba\u5fe7\u8651\u7684\u662f\uff0c\u65b0\u95fb\u754c\u6d6e\u8e81\u4e4b\u98ce\u76db\u884c\uff0c\u4ee5\u975e\u62a5\u9053\u7684\u65b9\u5f0f\u6210\u4e3a\u201c\u540d\u8bb0\u201d\u7684\u4eba\u8d8a\u6765\u8d8a\u591a\u3002\n\n\u6bcf\u4e2a\u804c\u4e1a\u90fd\u6709\u8be5\u804c\u4e1a\u7684\u6838\u5fc3\u4f26\u7406\uff0c\u5bf9\u4e00\u4e2a\u4ece\u4e1a\u8005\u7684\u8bc4\u4ef7\u5e94\u57fa\u4e8e\u5728\u8fd9\u79cd\u6838\u5fc3\u4f26\u7406\u4e0a\u7684\u8868\u73b0\u3002\u6bd4\u5982\uff0c\u6211\u5bf9\u65b0\u95fb\u53d1\u8a00\u4eba\u7684\u7406\u89e3\u662f\uff0c\u8bc4\u4ef7\u4e00\u4e2a\u65b0\u95fb\u53d1\u8a00\u4eba\u804c\u4e1a\u8d21\u732e\u7684\u552f\u4e00\u6807\u51c6\u5c31\u662f\uff0c\u4f60\u53d1\u5e03\u8fc7\u591a\u5c11\u6709\u4ef7\u503c\u7684\u65b0\u95fb\u4fe1\u606f\uff0c\u5728\u6ee1\u8db3\u516c\u4f17\u77e5\u60c5\u6743\u4e0a\u6709\u8fc7\u600e\u6837\u7684\u8868\u73b0\u3002\u5bf9\u65b0\u95fb\u53d1\u8a00\u4eba\u6700\u6709\u529b\u7684\u6279\u8bc4\u83ab\u8fc7\u4e8e\uff1a\u4f60\u5728\u4efb\u671f\u95f4\uff0c\u5e76\u6ca1\u6709\u53d1\u8868\u8fc7\u591a\u5c11\u6709\u4ef7\u503c\u7684\u8a00\u8bba\uff0c\u5e76\u6ca1\u6709\u5728\u6c9f\u901a\u653f\u5e9c\u4e0e\u6c11\u4f17\u4e2d\u6709\u4ec0\u4e48\u4f5c\u4e3a\uff0c\u5e76\u6ca1\u6709\u53d1\u5e03\u8fc7\u4ec0\u4e48\u5927\u65b0\u95fb\u3002\u4f60\u6210\u4e3a\u540d\u4eba\uff0c\u662f\u4f60\u4e2a\u4eba\u7684\u5927\u6210\u529f\uff0c\u5374\u662f\u4f60\u804c\u4e1a\u4e0a\u7684\u5927\u5931\u8d25\u3002\u4f60\u6700\u5927\u7684\u5931\u8d25\u5728\u4e8e\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u95fb\u53d1\u8a00\u4eba\uff0c\u4e00\u6b21\u6b21\u5374\u6210\u4e3a\u65b0\u95fb\u5f53\u4e8b\u4eba\u3002\n\n...\n\n\u8bb8\u591a\u5b98\u5458\u6ca1\u6709\u4f5c\u4e3a\u4e00\u4e2a\u516c\u52a1\u5458\u201c\u670d\u52a1\u516c\u76ca\u201d\u7684\u804c\u4e1a\u7cbe\u795e\uff0c\u800c\u662f\u628a\u5b98\u5458\u5f53\u4f5c\u7ecf\u5546\u90a3\u6837\u5e72\uff1a\u4e3a\u5f53\u5b98\u6295\u5165\u4e86\u591a\u5c11\u8d44\u672c\uff0c\u5c31\u8981\u6210\u767e\u500d\u5730\u635e\u56de\u6765\u3002\u4ed6\u4eec\u7684\u804c\u4e1a\u4fe1\u6761\u4e0d\u662f\u4e3a\u516c\u4f17\u505a\u4e86\u591a\u5c11\u4e8b\uff0c\u800c\u662f\u4e3a\u81ea\u5df1\u548c\u5b50\u5973\u635e\u4e86\u591a\u5c11\u94b1\u3002\n\n\u8bb8\u591a\u5546\u4eba\u6ca1\u6709\u4f5c\u4e3a\u4e00\u4e2a\u5546\u4eba\u201c\u8c0b\u8d22\u4f46\u8d77\u7801\u4e0d\u80fd\u5bb3\u547d\u201d\u7684\u804c\u4e1a\u7cbe\u795e\uff0c\u4ed6\u4eec\u4ee5\u5bb3\u547d\u7684\u65b9\u5f0f\u53bb\u8c0b\u8d22\uff0c\u628a\u7ecf\u5546\u5f53\u4f5c\u6740\u4eba\u90a3\u4e48\u5e72\uff1a\u4e3a\u4e86\u591a\u8d5a\u94b1\uff0c\u4e0d\u60dc\u5f80\u5b9d\u5b9d\u5976\u7c89\u91cc\u52a0\u4e09\u805a\u6c30\u80fa\uff0c\u5f80\u706b\u817f\u4e0a\u52a0\u654c\u654c\u754f\uff0c\u7528\u5de5\u4e1a\u9152\u7cbe\u9020\u5047\u9152\uff0c\u7ed9\u5b69\u5b50\u6253\u8fc7\u671f\u75ab\u82d7\u3002\n\n\u8bb8\u591a\u5927\u5b66\u6821\u957f\u4e0d\u628a\u6821\u957f\u8eab\u4efd\u5f53\u4f5c\u6559\u80b2\u5bb6\uff0c\u800c\u662f\u5f53\u4f5c\u9886\u5bfc\uff0c\u8eab\u4e0a\u6beb\u65e0\u6559\u80b2\u5bb6\u7684\u6c14\u8d28\u548c\u80b2\u4eba\u8005\u7684\u5112\u96c5\uff0c\u800c\u662f\u5145\u6ee1\u5b98\u50da\u7684\u50b2\u6162\u548c\u5546\u4eba\u7684\u5e02\u4fa9\u3002\u8fd8\u6709\uff0c\u533b\u751f\u6ca1\u6709\u4e86\u533b\u751f\u6837\uff0c\u800c\u6210\u4e86\u9ad8\u4ef7\u836f\u54c1\u63a8\u9500\u8005\uff1b\u4e13\u5bb6\u5931\u53bb\u4e86\u77e5\u8bc6\u5206\u5b50\u7684\u5c0a\u4e25\uff0c\u50cf\u6f14\u5458\u90a3\u6837\u4ee5\u51fa\u4f4d\u7684\u8a00\u8bba\u8d62\u5f97\u638c\u58f0\uff1b\u6559\u6388\u4e0d\u597d\u597d\u6559\u4e66\u80b2\u4eba\uff0c\u5230\u5904\u8d70\u7a74\u8d5a\u51fa\u573a\u8d39\uff1b\u5b98\u5458\u5230\u9ad8\u6821\u5f53\u517c\u804c\u6559\u6388\uff0c\u516c\u52a1\u5458\u5230\u7164\u77ff\u5165\u80a1\u5f53\u5546\u4eba\u2026\u2026\n\n\u793e\u4f1a\u79e9\u5e8f\u4f9d\u8d56\u4e8e\u793e\u4f1a\u5206\u5de5\u7684\u6709\u5e8f\uff0c\u800c\u793e\u4f1a\u5206\u5de5\u53c8\u4f9d\u8d56\u4e8e\u6bcf\u4e2a\u884c\u4e1a\u7684\u4eba\u6309\u7167\u8fd9\u4e2a\u884c\u4e1a\u7684\u804c\u4e1a\u89c4\u8303\u53bb\u626e\u6f14\u81ea\u5df1\u7684\u89d2\u8272\uff0c\u6709\u5e8f\u5730\u5404\u53f8\u5176\u804c\u3002\u5f53\u4e0b\u8fd9\u4e2a\u793e\u4f1a\u6700\u5927\u7684\u95ee\u9898\uff0c\u6b63\u5728\u4e8e\u804c\u4e1a\u7cbe\u795e\u7684\u5931\u843d\u3002\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u786e\u5b9e\u5982\u6b64\uff0c\u4f46\u662f\u5ba2\u89c2\u5730\u8bf4\uff0c\u8fd9\u4e5f\u7edd\u975e\u662f\u4e2d\u56fd\u4eba\u5982\u4f55\u5982\u4f55\uff0c\u800c\u662f\u4eba\u7c7b\u666e\u904d\u7684\u6bdb\u75c5\u3002\u4e0d\u4e13\u5fc3\u3001\u4e09\u5fc3\u4e8c\u610f\u3002\u53e6\u5916\uff0c\u4e5f\u786e\u5b9e\u6709\u6211\u56fd\u793e\u4f1a\u7684\u95ee\u9898\uff0c\u4e00\u6765\u662f\u51e0\u5341\u5e74\u7684\u7ecf\u6d4e\u9ad8\u901f\u53d1\u5c55\uff0c\u786e\u5b9e\u6bcf\u4e2a\u4eba\u90fd\u6709\u9636\u7ea7\u8dc3\u8fc1\u7684\u5de8\u5927\u53ef\u80fd\u6027\uff0c\u6bcf\u4e2a\u4eba\u90fd\u60f3\u5f80\u4e0a\u722c\u3002\u53e6\u5916\uff0c\u57fa\u4e8e\u56fd\u5185\u4efb\u4f55\u8d44\u6e90\u5f80\u5f80\u7531\u4e0a\u800c\u4e0b\u5206\u914d\u7684\u57fa\u672c\u56fd\u60c5\uff0c\u4e5f\u5c31\u662f\u53ea\u8981\u5f80\u4e0a\u8d70\u4e00\u5c0f\u6b65\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u80fd\u591f\u83b7\u53d6\u6570\u500d\u4e8e\u5f53\u524d\u7684\u8d44\u6e90\uff0c\u8fd9\u70b9\u4e5f\u4e0d\u8bb3\u8a00\u3002\u5f53\u7136\uff0c\u8fd9\u4e2a\u5c31\u8dd1\u9898\u6709\u70b9\u8fdc\u4e86\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e4b\u6240\u4ee5\u516c\u53f8\u91cc\u7684\u9879\u76ee\u5168\u662f\u5c4e\u5c71\uff0c\u65e0\u975e\u662f\u56e0\u4e3a\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u81ea\u5df1\u4e0d\u4e13\u5fc3"}),"\n",(0,s.jsx)(e.li,{children:"team\u91cc\u5176\u4ed6\u540c\u5b66\u4e0d\u4e13\u5fc3\uff0c\u9879\u76ee\u4e5f\u4f1a\u5feb\u901f\u8150\u8d25\uff0c\u5927\u5bb6\u90fd\u4e00\u8d77\u5f97\u8fc7\u4e14\u8fc7"}),"\n",(0,s.jsx)(e.li,{children:"\u8001\u677f\u4e0d\u4e13\u5fc3\uff0c\u521b\u4e1a\u516c\u53f8\u7684leader\u8981\u4e00\u8fb9\u505a\u9879\u7ba1\uff0c\u4e00\u8fb9\u62c9\u6295\u8d44\u3002\u5927\u516c\u53f8\u91cc\u7684leader\u8981\u4e00\u8fb9\u505a\u9879\u7ba1\uff0c\u4e00\u8fb9pitch\u4ed6\u7684\u4e0a\u7ea7"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u5b9e\u5c31\u662f\u62fc\u591a\u591a\u7684\u4ef7\u503c\u89c2\u2014\u2014\u672c\u5206"}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u662f\u8fd9\u4e2a\u771f\u7684\u5f88\u96be"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u4e9b\u4e1c\u897f\u90fd\u6ca1\u529e\u6cd5\uff0c\u8bf4\u518d\u591a\u4e5f\u53ea\u662f\u53d1\u7262\u9a9a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5b9e\u8bdd\u8bf4\uff0c\u8fd9\u672c\u4e66\u5bf9\u6211\u771f\u7684\u5f88\u6709\u89e6\u52a8\uff0c\u56e0\u4e3a\u5728\u770b\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u53d1\u73b0\u6211\u51e0\u4e4e\u72af\u4e86\u4f5c\u8005\u63d0\u51fa\u7684\u6bcf\u4e00\u6761\u9519\u8bef\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5e76\u4e14\u8fd9\u79cd\u7528\u8bb2\u6545\u4e8b\u7684\u6587\u5b57\u5a13\u5a13\u9053\u6765\u7279\u522b\u597d"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u53ea\u770b\u76ee\u5f55\uff0c\u4e13\u4e1a\u4e3b\u4e49\u3001\u8bf4\u201c\u4e0d\u201d\u3001\u8bf4\u201c\u662f\u201d\u3001TDD\u3001kata\u3001\u9a8c\u6536\u6d4b\u8bd5...\uff0c\u6709\u54ea\u4e00\u6761\u6211\u6ca1\u505a\u5230\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u662f\u5177\u4f53\u770b\u5185\u5bb9\uff0c\u5c31\u53d1\u73b0\uff0c\u6211\u771f\u7684\u6ca1\u6709\u4e00\u6761\u505a\u5230\u4e86\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u771f\u7684\uff0c\u4e66\u4e2d\u7684\u6bcf\u4e2a\u95ee\u9898\u90fd\u503c\u5f97\u601d\u8003\uff0c\u81ea\u5df1\u662f\u5426\u771f\u7684\u505a\u5230\u4e86\uff0c\u6216\u8005\u8bf4\u4ec5\u4ec5\u662f\u66fe\u7ecf\u505a\u5230\u8fc7\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u505a\u5230\u548c\u505a\u5230\u8fc7\u662f\u4e24\u7801\u4e8b"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:(0,s.jsx)(e.strong,{children:"\u7efc\u4e0a\uff0c\u8fd9\u662f\u4e00\u672c\u5173\u4e8e\u201c\u4e13\u4e1a\u4e3b\u4e49\u201d\u7684\u4e66\uff0c\u662f\u901a\u8fc7\u4e00\u4e2a\u4e2a\u4f5c\u8005\u81ea\u5df1\u7ecf\u5386\u8fc7\u7684\u4e8b\u60c5\u548c\u9879\u76ee\uff0c\u6765\u544a\u8bc9\u6211\u4eec\u8fd9\u4e48\u505a\u53ef\u80fd\u4f1a\u66f4\u597d\u3002\u800c\u975e\u751f\u786c\u7684\u4e00\u6761\u6761\u51c6\u5219\u548c\u89c4\u8303\u3002\u6240\u4ee5\u4e5f\u5c31\u6ca1\u4ec0\u4e48\u597d\u603b\u7ed3\u7684\u3002"})})}),"\n",(0,s.jsx)(e.h2,{id:"100-go-mistakes-and-how-to-avoid-them",children:"\u300a100 Go Mistakes and How to Avoid Them\u300b"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://qcrao.com/post/100-go-mistakes-reading-notes/",children:"\u6df1\u5ea6\u9605\u8bfb\u4e4b\u300a100 Go Mistakes and How to Avoid Them\u300b | qcrao \u7684\u535a\u5ba2"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://www.luozhiyun.com/archives/797",children:"[\u957f\u6587]\u4ece\u300a100 Go Mistakes\u300b\u6211\u603b\u7ed3\u4e86\u4ec0\u4e48\uff1f - luozhiyun`s Blog"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markdown",children:"- \u4e0d\u8981\u8fb9\u904d\u5386 map \u8fb9\u5199\u5165 key\n- break \u53ef\u4ee5\u4f5c\u7528\u4e8e for, select, switch\u3002\u4f46\u662f\u53ea\u80fd\u8df3\u51fa\u4e00\u91cd\u5faa\u73af\uff0c\u56e0\u6b64\u8981\u6ce8\u610f\uff0cbreak \u662f\u5426\u8df3\u5230\u4e86\u4f60\u9884\u60f3\u7684\u5730\u65b9\u3002\u53ef\u4ee5\u7528 break with label \u6765\u89e3\u51b3\u3002\n- \u7528 TrimPrefix, TrimSuffix\uff0c\u800c\u4e0d\u662fTrimLeft, TrimRight\uff0c\u6709\u5751\u3002\n- \u5f53\u6211\u4eec\u8981\u8fd4\u56de\u4e00\u4e2a\u786e\u5b9a\u7684\u3001\u9884\u671f\u5185\u7684\u9519\u8bef\u65f6\uff0c\u5e94\u8be5\u8fd4\u56de\u4e00\u4e2a\u9884\u5148\u5b9a\u4e49\u7684 error value\uff0c\u4e5f\u88ab\u79f0\u4e3a sentinel error\uff1b\u5f53\u8fd4\u56de\u975e\u9884\u671f\u7684\u9519\u8bef\u65f6\uff0c\u8fd4\u56de\u7279\u5b9a\u7684 error type\u3002\u524d\u8005\u7528 errors.Is \u5224\u65ad\uff0c\u540e\u8005\u7528 errors.As \u5224\u65ad\u3002\n- context\u7684key\u8981\u7528\u9884\u5b9a\u4e49\u7684\uff08\u4e14\u79c1\u6709\u7684\uff09const\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u7528\u5b57\u7b26\u4e32\n- \u7528 map[K]struct{} \u8fd9\u79cd\u5f62\u5f0f\u6765\u8868\u793a set \u4e0d\u5149\u662f\u8282\u7701\u5185\u5b58\uff0c\u8fd8\u80fd\u660e\u786e\u8868\u8fbe\u51fa\u8fd9\u662f\u4e00\u4e2a set \u7684\u542b\u4e49\uff1b\u5982\u679c\u628a struct{} \u6362\u6210 bool \u610f\u4e49\u5c31\u6ca1\u8fd9\u4e48\u660e\u786e\u4e86\u3002\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7528validator\u505a\u5404\u79cd\u9a8c\u8bc1\uff0c\u505a\u597dvalidator\u5c42\uff0c\u53ef\u4ee5\u8282\u7701\u5f88\u591a\u4ee3\u7801\uff0c\u4e0d\u8981\u7528\u5404\u79cdif\u8fdb\u884c\u53c2\u6570\u9a8c\u8bc1\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7528\u597d\u64cd\u4f5c\u5404\u79cddatatype\u65f6\u5e94\u8be5\u505a\u597d\u7684\u7684\u4f18\u5316\uff0c\u4ee5\u53ca\u907f\u5751\u3002\u8fd9\u70b9\u76f8\u5173\u5185\u5bb9\u90a3\u4e2a\u5f88\u591a\uff0c\u4e0d\u591a\u8bf4\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7528\u5404\u79cdcode patterns\uff0c\u6bd4\u5982options, builder\u4e4b\u7c7b\u7684\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8fd8\u6709\u4e00\u4e9b kiss\u539f\u5219\u76f8\u5173\u7684\uff0c\u6bd4\u5982\u8bf4OOP\u7684SRP\uff0c\u5176\u5b9e\u5c31\u662f\u964d\u4f4e\uff08\u65b9\u6cd5\u7684\uff09\u9897\u7c92\u5ea6\u3002\u5982\u679c\u80fd\u591fSRP\u7684\u8bdd\uff0cfunc\u7684params\u672c\u8eab\u5c31\u4e0d\u4f1a\u592a\u591a\uff0c\u8fd9\u4e24\u4e2a\u662f\u76f8\u8f85\u76f8\u6210\u7684\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markdown",children:'- \u65b9\u6cd5\u91cc\u7684\u5165\u53c2\u8d85\u8fc7 2 \u4e2a\uff0c\u5c31\u7528 slice/dict \u4e4b\u7c7b\u7684\u590d\u5408\u6570\u636e\u7c7b\u578b\u6216\u8005\u53ef\u53d8\u53c2\u6570\n- \u51fd\u6570\u7684\u201c\u5355\u4e00\u804c\u8d23\u539f\u5219\u201d\uff0c\u4e00\u4e2a\u51fd\u6570\u53ea\u505a\u4e00\u4ef6\u4e8b\u60c5\uff0c\u628a\u51fd\u6570\u6700\u5c0f\u7c92\u5ea6\u5316\uff08\u4e0d\u8981\u4f7f\u7528 flag \u628a\u591a\u4e2a\u51fd\u6570\u5408\u5e76\u5230\u4e00\u4e2a\u51fd\u6570\u91cc\uff09\n- \u4f7f\u7528\u62bd\u8c61\u7c7b\u548c\u63a5\u53e3\u7c7b\uff0c\u4fbf\u4e8e\u7ba1\u7406\u5b9e\u4f53\u7c7b\n- \u5c3d\u91cf\u4f7f\u7528\u79c1\u6709 struct \u548c\u79c1\u6709\u65b9\u6cd5\uff0c\u9664\u975e\u5fc5\u8981\u4e0d\u516c\u5f00\n- *enum \u8981\u6ce8\u610f iota \u521d\u59cb\u503c\u8981\u548c\u6570\u636e\u8868\u4e2d\u8be5\u5b57\u6bb5\u9ed8\u8ba4\u503c\u76f8\u540c\uff0c\u5426\u5219\u5982\u679c\u7f3a\u5c11\u8be5\u53c2\u6570\uff0c\u4f1a\u6709\u95ee\u9898*\n\n---\n\n- \u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528 if\uff0c\u4e0d\u8981\u5d4c\u5957\u592a\u591a if\n  - if \u5982\u679c\u7528\u4e8e\u5165\u53c2\u9a8c\u8bc1\uff0c\u628a\u9a8c\u8bc1\u5de5\u4f5c\u5c01\u88c5\u6210\u4e00\u4e2a validator \u7c7b\u6216\u8005\u5c01\u88c5\u6210\u4e00\u4e2a\u5355\u72ec\u7684\u65b9\u6cd5\n  - \u5982\u679c if \u91cc\u5904\u7406\u7684\u903b\u8f91\u6bd4\u8f83\u7b80\u5355\uff1a\u627e if \u91cc\u8fd4\u56de\u6570\u636e\u7684\u5171\u540c\u70b9\uff0c\u5c01\u88c5\u6210\u5355\u72ec\u65b9\u6cd5\uff0c\u7edf\u4e00\u5904\u7406\n  - \u5982\u679c if \u91cc\u5904\u7406\u7684\u903b\u8f91\u6bd4\u8f83\u590d\u6742\uff1a*\u7528\u9762\u5411\u63a5\u53e3\u5f00\u53d1\uff0c\u628a\u4e0d\u540c\u7684 if \u5c01\u88c5\u6210\u8fd9\u4e2a\u63a5\u53e3\u7c7b\u7684\u4e0d\u540c\u5b9e\u73b0\u7c7b*\n- if \u5224\u65ad\u91cc\u80fd\u7528 bool \u5c31\u7528 bool\uff0c\u4e0d\u8981\u7528`isResize == "success"`\u8fd9\u6837\n- if \u91cc\u4e0d\u8981\u4f7f\u7528\u53cd\u4e49\uff0c\u903b\u8f91\u66f4\u6e05\u6670\n\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://mp.weixin.qq.com/s/X8c6ZIJdBFptYA9CRj6wnA",children:"Go\u4e2d\u7684\u4e00\u4e9b\u4f18\u5316\u7b14\u8bb0\uff0c\u7b80\u5355\u800c\u4e0d\u7b80\u5355"})}),"\n",(0,s.jsx)(e.h2,{id:"2024-10-09\u4ee3\u7801\u4e4b\u4e11",children:"[2024-10-09]\u300a\u4ee3\u7801\u4e4b\u4e11\u300b"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E4%BB%A3%E7%A0%81%E4%B9%8B%E4%B8%91",children:"\u4ee3\u7801\u4e4b\u4e11"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"2024-10-10\u91cd\u6784\u6539\u5584\u65e2\u6709\u4ee3\u7801\u7684\u8bbe\u8ba1",children:"[2024-10-10]\u300a\u91cd\u6784\uff1a\u6539\u5584\u65e2\u6709\u4ee3\u7801\u7684\u8bbe\u8ba1\u300b"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://book-refactoring2.ifmicro.com/",children:"\u7b80\u4ecb \xb7 \u91cd\u6784: \u6539\u5584\u65e2\u6709\u4ee3\u7801\u7684\u8bbe\u8ba1"})})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>t});var s=i(6540);const r={},l=s.createContext(r);function c(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);