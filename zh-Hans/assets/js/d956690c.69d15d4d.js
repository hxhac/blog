"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9371],{6745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=n(4848),r=n(8453);const l={title:"\u4e3a\u4ec0\u4e48\u5728CI\u4e2d\u5e94\u8be5\u7528pre-commit\u4ee3\u66fflinters?",last_update:{date:new Date("2024-07-31T00:00:00.000Z")}},s=void 0,o={id:"2024/pre-commit",title:"\u4e3a\u4ec0\u4e48\u5728CI\u4e2d\u5e94\u8be5\u7528pre-commit\u4ee3\u66fflinters?",description:"super-linter",source:"@site/docs/2024/pre-commit.md",sourceDirName:"2024",slug:"/2024/pre-commit",permalink:"/zh-Hans/2024/pre-commit",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"XBPk3T",lastUpdatedAt:1722384e6,frontMatter:{title:"\u4e3a\u4ec0\u4e48\u5728CI\u4e2d\u5e94\u8be5\u7528pre-commit\u4ee3\u66fflinters?",last_update:{date:"2024-07-31T00:00:00.000Z"}},sidebar:"zzz",previous:{title:"\u5e38\u7528mysql sql\u6574\u7406",permalink:"/zh-Hans/2024/sql"},next:{title:"\u8bae\u8bba\u6587",permalink:"/zh-Hans/2024/argumentative-writing"}},c={},m=[{value:"super-linter",id:"super-linter",level:2},{value:"pre-commit",id:"pre-commit",level:2},{value:"\u4e3a\u4ec0\u4e48\u63a8\u8350\u7528pre-commit\u4ee3\u66fflinters\u4f5c\u4e3aCI",id:"\u4e3a\u4ec0\u4e48\u63a8\u8350\u7528pre-commit\u4ee3\u66fflinters\u4f5c\u4e3aci",level:3},{value:"\u7528 pre-commit \u4ee3\u66ff husky",id:"\u7528-pre-commit-\u4ee3\u66ff-husky",level:3},{value:"\u76ee\u524d\u5728\u7528\u7684\u4e00\u4e9bpre-commit hooks",id:"\u76ee\u524d\u5728\u7528\u7684\u4e00\u4e9bpre-commit-hooks",level:3},{value:"\u7c7b\u4f3cpre-commit\u7684\u4e00\u4e9b\u5de5\u5177",id:"\u7c7b\u4f3cpre-commit\u7684\u4e00\u4e9b\u5de5\u5177",level:3},{value:"reviewdog",id:"reviewdog",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"super-linter",children:"super-linter"}),"\n",(0,i.jsx)(t.p,{children:"\u5404\u79cdlinters\u8ba9\u4eba\u6311\u82b1\u4e86\u773c\uff0c\u627e\u4e2a\u4e3b\u6d41\u7684linter\uff0c\u968f\u4fbf\u52a0\u51e0\u4e2afeats\u5c31\u53c8\u662f\u4e2a\u65b0linter\uff0c\u90fd\u6ca1\u5565\u610f\u601d"}),"\n",(0,i.jsx)(t.p,{children:"\u5176\u5b9e\u53ea\u9700\u8981\u7167\u7740super-liner\u5c31ok\u4e86\uff0c\u4e00\u4e2aALL-In-One\u7684linter\uff0c\u96c6\u6210\u4e86\u5404\u79cd\u4e3b\u6d41\u8bed\u8a00\u548c\u5de5\u5177\u7684linter"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="linters"',children:'- url: https://github.com/koalaman/shellcheck\n\n- url: https://github.com/adrienverge/yamllint\n  des: yamllint\n\n- url: https://github.com/ansible/ansible-lint\n  des: \u81ea\u52a8\u4fee\u590d lint \u65f6\u67e5\u51fa\u7684 fail. "ansible-lint --write"\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"super-linter\u65e2\u5e2e\u6211\u4eec\u7b5b\u9009\u4e86\u5404\u79cd\u8bed\u8a00\u548c\u670d\u52a1\u7684\u4e3b\u6d41linter\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u66f4\u6613\u7528\u7684\u4f7f\u7528\u65b9\u6cd5"})})}),"\n",(0,i.jsx)(t.p,{children:"\u4ee5markdownlint\u4e3a\u4f8b\uff0c\u4e4b\u524d\u6211\u9700\u8981\u81ea\u5df1\u7ef4\u62a4\u4e0a\u9762\u8fd9\u4e9brepo"}),"\n",(0,i.jsx)(t.p,{children:"\u4f46\u662f\u4f7f\u7528super-linter\u4e4b\u540e\uff0c\u53ea\u9700\u8981 super-linter -> markdownlint-cli -> markdownlint \u5c31\u53ef\u4ee5\u4e86\uff0c\u5b8c\u5168\u6ca1\u5fc5\u8981\u518d\u7ef4\u62a4\uff08\u6216\u8005star\uff09\u8fd9\u4e9brepo\u4e86"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="markdownlint"',children:"- url: https://github.com/DavidAnson/markdownlint\n  des: Markdownlint not support MDX, but it works actually, strangely enough.\n- url: https://github.com/igorshubovych/markdownlint-cli\n  des: Markdownlint Tool that docs using.\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u4e0a\u9762\u4e3e\u4e86\u4e2a\u786e\u5b9a\u4e86\u4f7f\u7528markdownlint\uff0c\u4f46\u662flinter cli\u548caction\u8fd8\u5206\u4e3a\u4e24\u4e2arepo\uff0c\u5f88\u96be\u7ef4\u62a4\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u4e0b\u9762\u5219\u662f\u6280\u672f\u9009\u578b\u7684\u95ee\u9898\uff0c\u540c\u6837\u662f scan secrets \u7684\u9700\u6c42\uff0c\u6709\u5404\u79cd\u5de5\u5177\u53ef\u4ee5\u9009\u62e9\uff0c\u90a3\u4e48\u54ea\u4e2a\u66f4\u597d\u7528\u5462\uff1f"}),"\n",(0,i.jsx)(t.p,{children:"\u5982\u679c\u770bsuper-linter\u7684\u8bdd\uff0c\u5c31\u4e00\u76ee\u4e86\u7136\u4e86\uff0c\u76f4\u63a5\u9009\u62e9gitleaks\u5c31\u5b8c\u4e8b\u4e86\uff0c\u5176\u4ed6\u7684\u51e0\u79cd\u90fd\u662f\u7279\u5b9a\u573a\u666f\u4e0b\u7684\u9009\u62e9\uff0c\u5e76\u4e0d\u4e3b\u6d41\u3002\u8fd9\u5c31super-linter\u7684\u7528\u5904\uff0c\u7528\u6765\u7b5b\u9009\u4e3b\u6d41linters\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="scan secrets"',children:"- url: https://github.com/gitleaks/gitleaks\n  des:\n\n- url: https://github.com/trufflesecurity/trufflehog\n  des: \u4e0egitleaks\u9887\u4e3a\u4e92\u8865\u7684\u4e00\u4e2asecrets scan\u5de5\u5177\uff0c\u4e0d\u540c\u4e8egitleaks\u8fd9\u79cd\u4e13\u6ce8\u4e8e\u626b\u63cf\u672c\u5730git repo\u4ee3\u7801\u7684\u5de5\u5177\uff0ctrufflehog\u7684feats\u5728\u4e8escan\u8fdc\u7a0brepo\uff0c\u8fd8\u652f\u6301\u626b\u63cfS3\u3001Postman\u3001Docker\u7b49\u670d\u52a1\u4e2d\u7684secrets\u3002trufflehog\u65e2\u662fcli\uff0c\u4e5f\u662fCI\n\n- url: https://github.com/thoughtworks/talisman\n  des: gitleaks\u672c\u8eab\u5c31\u53ef\u4ee5\u914d\u7f6e\u4e3apre-commit\uff0c\u4e3a\u5565\u8fd8\u9700\u8981tailsman\u5462?\n\n- url: https://github.com/byt3hx/jsleak\n  des: \u8ddfgitleaks\u8fd8\u4e0d\u592a\u4e00\u6837\uff0cjsleak\u53ea\u652f\u6301scan\u7f51\u7ad9\uff0c\u4e5f\u5c31\u662fmlc\u548csite sucker\u4e4b\u95f4\u7684\u533a\u522b\uff08\u672c\u5730\u626b\u63cf\u548c\u626b\u63cf\u7f51\u7ad9\uff09\n\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u4f46\u662f\u6bd4\u8f83\u53ef\u60dc\u7684\u662f\uff0csuper-lint\u4e0epre-commit\u76ee\u524d\u6ca1\u6709\u96c6\u6210"})})}),"\n",(0,i.jsxs)(t.p,{children:["\u6240\u4ee5\u5bf9\u6211\u6765\u8bf4\uff0c",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u6211\u5bf9super-lint\u7684\u5b9a\u4f4d\u662f\uff0c\u4e00\u4e2a\u66f4\u597d\u7684 awesome-linters\uff0c\u7528\u6765\u67e5\u770b\u5404\u79cd\u4e3b\u6d41linter"})})]}),"\n",(0,i.jsx)(t.h2,{id:"pre-commit",children:"pre-commit"}),"\n",(0,i.jsx)(t.h3,{id:"\u4e3a\u4ec0\u4e48\u63a8\u8350\u7528pre-commit\u4ee3\u66fflinters\u4f5c\u4e3aci",children:"\u4e3a\u4ec0\u4e48\u63a8\u8350\u7528pre-commit\u4ee3\u66fflinters\u4f5c\u4e3aCI"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"pre-commit \u662f\u5404\u79cd linter \u548c ci \u4e4b\u95f4\u7684 mediator\uff0c\u6216\u8005\u8bf4\u201c\u652f\u70b9\u201d"})})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u5728\u4f7f\u7528pre-commit\u4e4b\u524d\uff0c\u6211\u9700\u8981\u5728\u672c\u5730\u914d\u7f6e\u4e00\u5957\u6240\u6709linter\u7684cli\uff0c\u5728commit\u4e4b\u524d\u5148\u81ea\u5df1\u9884\u8dd1\u4e00\u4e0b\uff0c\u4fdd\u8bc1\u6ca1\u6709\u95ee\u9898\u4e4b\u540e\uff0c\u518dcommit\uff0c\u8fd9\u662f\u5728\u672c\u5730\u3002\u5728remote\u5462\uff0c\u5219\u9700\u8981\u5728CI\u91cc\uff08\u6309\u7167\u672c\u5730linter\uff09\u518d\u914d\u7f6e\u4e00\u5957\uff0c\u4fdd\u8bc1local\u548cremote\u7684linter\u4fdd\u6301\u4e00\u81f4\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u5c31\u5f15\u5165\u4e86\u7ef4\u62a4\u6210\u672c\uff0c\u65e0\u8bba\u60f3\u6539local\u8fd8\u662fremote\uff0c\u5bf9\u7aef\u90fd\u8981\u4fee\u6539\u3002\u5c31\u5f88\u9ebb\u70e6\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u5982\u679c\u4f7f\u7528pre-commit\u5c31\u4e0d\u9700\u8981\u8fd9\u4e48\u9ebb\u70e6\u4e86\uff0c\u914d\u7f6e\u4e4b\u540e\uff0c\u65e0\u8bbalocal\u548cremote\u90fd\u53ef\u4ee5\u5171\u7528\u4e00\u5957\u914d\u7f6e\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsxs)(t.strong,{children:["\u9664\u6b64\u4e4b\u5916\uff0cpre-commit\u8fd8\u652f\u6301\u8de8CI\uff0c\u6240\u6709workflow\u90fd\u96c6\u6210\u5230pre-commit\u4e86\uff0c\u65e0\u8bba\u6362\u4ec0\u4e48CI\uff0c\u53ea\u9700\u8981\u52a0\u4e00\u4e2a ",(0,i.jsx)(t.code,{children:"pre-commit run --all-files"})," \u5c31\u53ef\u4ee5\u4e86\u3002"]})})}),"\n",(0,i.jsxs)(t.p,{children:["\u4f17\u6240\u5468\u77e5\uff0c\u5404\u79cdCI\u7684workflow\u7684\u5199\u6cd5\u662f\u4e0d\u540c\u7684\uff0c\u6240\u4ee5\u5fc5\u7136\u5e26\u6765\u7ef4\u62a4\u6210\u672c\u3002",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u4e4b\u524d\u6ca1\u7528pre-commit\u7684\u65f6\u5019\uff0c\u6211\u9700\u8981\u7ef4\u6301\u81ea\u5df1\u5e38\u7528\u7684github actions\u548cgitlab CI\u4e24\u5957\u7528\u6765\u53d1\u5e03golang\u7684workflow\uff0c\u5c31\u5f88\u9ebb\u70e6\u3002\u6211\u73b0\u5728\u76f4\u63a5\u7528 Taskfile + Pre-commit \u5c31\u5b8c\u5168\u89e3\u51b3\u6389\u8fd9\u4e2a\u95ee\u9898\u4e86\u3002"})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"\u603b\u7ed3\u4e00\u4e0b\uff0c\u4f7f\u7528pre-commit\u4ee3\u66fflinter+CI\u7684\u597d\u5904\u5728\u4e8e\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u51cf\u5c11\u7ef4\u62a4\u6210\u672c\uff0c\u201c\u914d\u7f6e\u4e00\u6b21\uff0c\u591a\u5904\u4f7f\u7528\u201d\uff0c\u4e0d\u9700\u8981\u5728local\u548cremote\u518d\u914d\u7f6e\u4e86"}),"\n",(0,i.jsx)(t.li,{children:"\u8de8CI\u4f7f\u7528\uff0c\u540c\u6837\u51cf\u5c11\u7ef4\u62a4\u6210\u672c"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"\u7528-pre-commit-\u4ee3\u66ff-husky",children:"\u7528 pre-commit \u4ee3\u66ff husky"}),"\n",(0,i.jsx)(t.p,{children:"\u4e0a\u9762\u4ece\u66f4\u5b8f\u89c2\u7684\u89d2\u5ea6\u51fa\u53d1\uff0c\u89e3\u91ca\u4e86\u4e3a\u5565pre-commit\u76f8\u6bd4\u4e4b\u4e0b\u662f\u66f4\u597d\u7684\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsx)(t.p,{children:"\u4e0b\u9762\u4ece\u5fae\u89c2\u89d2\u5ea6\u51fa\u53d1\u804a\u804a"}),"\n",(0,i.jsx)(t.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u7ecf\u5178\u7684\u201c\u524d\u7aef\u9879\u76eepre-commit\u201d\u7684stack\uff1ahusky + commitlint + lint-staged"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"# - url: https://github.com/standard/standard\n# - url: https://github.com/eslint/eslint\n# - url: https://github.com/prettier/prettier\n\n- url: https://github.com/typicode/husky\n\n- url: https://github.com/lint-staged/lint-staged\n  des: Run linters on git staged files. \u4e5f\u5c31\u662f\u5728pre-commit\u65f6\u6267\u884cLinter\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u4e24\u70b9\uff0c\u4ec5\u9488\u5bf9staged\u4ee3\u7801\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u9879\u76ee\uff0c\u53e6\u5916\uff0c\u4f9d\u6258\u4e8e\u9879\u76ee\u7684package.json\uff0c\u6240\u4ee5\u4ec5\u9002\u914djs\u9879\u76ee\u3002\n\n- url: https://github.com/conventional-changelog/commitlint\n  des: \u7ed9 husky \u751f\u6210 commit-msg\n\n# [Cz\u5de5\u5177\u96c6\u4f7f\u7528\u4ecb\u7ecd - \u89c4\u8303Git\u63d0\u4ea4\u8bf4\u660e - \u6398\u91d1](https://juejin.cn/post/6844903831893966856)\n- url: https://github.com/commitizen/cz-cli\n  des: \u4e5f\u662fcommit-msg\uff0c\u57fa\u4e8ecommitizen\u5b9e\u73b0\u7684\uff0c\u53ef\u4ee5\u642d\u914dhusky\u4f7f\u7528\uff0c\u6240\u4ee5\u540c\u6837\u662f\u9002\u7528\u4e8ejs\u9879\u76ee\uff0c\u4e0d\u9002\u7528\u4e8e\u5176\u4ed6\u8bed\u8a00\u7684\u9879\u76ee\u3002\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u4f46\u662f\u5176\u4ed6\u8bed\u8a00\u7684\u5404\u79cd\u9879\u76ee\u5219\u6ca1\u6709\u8fd9\u4e48\u5b8c\u5907\u7684pre-commit\u65b9\u6848\u53ef\u4ee5\u9009\u62e9\uff0c\u80fd\u600e\u4e48\u529e\u5462?"}),"\n",(0,i.jsx)(t.p,{children:"\u6beb\u65e0\u7591\u95ee\u7684\uff0c\u4e0d\u5982\u6240\u6709\u8bed\u8a00\uff08\u5305\u62ecjs\uff09\u90fd\u7edf\u4e00\u7528pre-commit\u597d\u4e86\uff0c\u4e0d\u662f\u5417?"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"pre-commit\u662f\u6bd4husky\u66f4\u901a\u7528\u4e5f\u66f4\u5f3a\u5927\u7684\u9009\u62e9"})})}),"\n",(0,i.jsx)(t.h3,{id:"\u76ee\u524d\u5728\u7528\u7684\u4e00\u4e9bpre-commit-hooks",children:"\u76ee\u524d\u5728\u7528\u7684\u4e00\u4e9bpre-commit hooks"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"\n- url: https://github.com/jorisroovers/gitlint\n  des: git commit msg linter.\n  cmd:\n# - c: gitlint install-hook\n#   x: \u4f7f\u7528gitlint\u65f6\uff0c\u5fc5\u987b\u5148\u7528\u8fd9\u4e2a\u547d\u4ee4\u751f\u6210.git/hooks/commit-msg\uff0c\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\n# - c: gitlint uninstall-hook\n\n- url: https://github.com/pre-commit-ci/pre-commit-ci-config\n- url: https://github.com/igorshubovych/markdownlint-cli\n- url: https://github.com/adrienverge/yamllint\n- url: https://github.com/gitleaks/gitleaks\n- url: https://github.com/antonbabenko/pre-commit-terraform\n- url: https://github.com/golangci/golangci-lint\n- url: https://github.com/lietu/go-pre-commit\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"\u7c7b\u4f3cpre-commit\u7684\u4e00\u4e9b\u5de5\u5177",children:"\u7c7b\u4f3cpre-commit\u7684\u4e00\u4e9b\u5de5\u5177"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://blog.urth.org/2020/05/08/comparing-code-quality-meta-tools/",children:"Comparing Code Quality Meta Tools - House Absolute(ly Pointless)"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"\n- url: https://github.com/evilmartians/lefthook\n  des: golang\u5b9e\u73b0\uff0c\u5176\u5b9e\u5c31\u662flocal\u6a21\u5f0f\u7684pre-commit\n\n- url: https://github.com/sds/overcommit\n\n- url: https://github.com/houseabsolute/precious\n  des: ??? rust\u5b9e\u73b0\uff0c\u4f46\u662f\u6ca1\u4ec0\u4e48\u4eba\u7528\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u5bf9 lefthook \u6709\u70b9\u5174\u8da3\uff0c\u4f46\u662f\u8fd9\u51e0\u4e2a\u7684\u751f\u6001\u76ee\u524d\u6765\u8bf4\uff0c\u8ddfpre-commit\u8fd8\u662f\u6ca1\u6cd5\u6bd4"}),"\n",(0,i.jsx)(t.h3,{id:"reviewdog",children:"reviewdog"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"- url: https://github.com/reviewdog/reviewdog\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u6574\u7406gh.yml\u65f6\u770b\u5230\u4e4b\u524d\u7528\u8fc7\u7684reviewdog\uff0c\u60f3\u5230\u5176\u5b9ereviewdog\u548cpre-commit\u867d\u8bf4\u5728\u5404\u81ea\u5b98\u65b9des\u662f\u5b8c\u5168\u4e0d\u540c\u7684\uff0c\u4e00\u4e2a\u662f\u7528\u6765Code Review\u7684\uff0c\u4e00\u4e2a\u662f\u81ea\u5b9a\u4e49git hooks\u64cd\u4f5c\uff0c",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u4f46\u662f\u5b9e\u9645\u4e0a\u4ece\u529f\u80fd\u4e0a\u6765\u8bf4\uff0c\u4e8c\u8005\u6ca1\u5565\u533a\u522b\uff0c\u90fd\u53ef\u4ee5\u96c6\u6210\u5404\u79cdlinter\uff0c\u4e5f\u90fd\u652f\u6301\u5728\u5f00\u53d1\u73af\u5883\u3001CI\u4e2d\u4f7f\u7528\uff08\u5305\u62ec\u5728PR\u65f6\u89e6\u53d1\uff09"})})]}),"\n",(0,i.jsx)(t.p,{children:"\u4f46\u662f\u4e3a\u5565\u540e\u6765\u6ca1\u6709\u7ee7\u7eed\u4f7f\u7528reviewdog\uff0c\u800c\u662f\u8f6c\u7528pre-commit\u4e86\u5462\uff1f"}),"\n",(0,i.jsx)(t.p,{children:"reviewdog\u63d0\u4f9b\u4e86.reviewdog.yml\u548cCI\u4e24\u79cd\u65b9\u5f0f\u6765\u6267\u884crules\uff0c\u6211\u4eec\u53ef\u4ee5\u50cfpre-commit\u4e00\u6837\uff0c\u5728\u5f00\u53d1\u73af\u5883\u548cCI\u90fd\u590d\u7528.reviewdog.yml\uff08\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5404\u79cdacts\u6765\u4f18\u5316\u4f53\u9a8c\uff09\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["reviewdog\u7684\u914d\u7f6e\u6587\u4ef6.reviewdog.yml\u53ea\u652f\u6301local mode\uff0c\u4e0d\u652f\u6301\u50cfpre-commit\u90a3\u6837\u7684remote mode\uff0c",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\u5982\u679c\u53ea\u652f\u6301local mode\u7684\u8bdd\uff0c\u8fd9\u4e9bcli\u7684version\u5c31\u65e0\u6cd5\u901a\u8fc7git\u6765\u7ba1\u7406\u4e86\uff08\u5e76\u4e14CI\u91cc\u4e5f\u9700\u8981\u9010\u4e2a\u624b\u52a8\u5b89\u88c5\u8fd9\u4e9bcli\uff09\uff0c\u7ed9\u56e2\u961f\u5f00\u53d1\u5e26\u6765\u5f88\u591a\u9ebb\u70e6"})})]}),"\n",(0,i.jsxs)(t.li,{children:["reviewdog\u7684\u6838\u5fc3\u8fd8\u662fCI\uff0c\u53ef\u4ee5\u770b\u5230\u5176\u5b98\u65b9\u63d0\u4f9b\u4e86 ",(0,i.jsx)(t.a,{href:"https://github.com/reviewdog/reviewdog#public-reviewdog-github-actions",children:"public-reviewdog-github-actions"})," \u8fd9\u4e9bacts\uff0c\u4f46\u662f\u5176\u751f\u6001\u8fd8\u662f\u8fdc\u4e0d\u5982pre-commit"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u5f53\u7136\uff0c\u867d\u7136\u4e8c\u8005\u7684\u529f\u80fd\u5f88\u76f8\u4f3c\uff0c\u4f46\u662f\u5f52\u6839\u5230\u5e95\u5b9a\u4f4d\u8fd8\u662f\u4e0d\u540c\u7684"}),"\n",(0,i.jsx)(t.p,{children:"reviewdog\u7684\u72ec\u7279feats\uff08\u6216\u8005\u8bf4\u4f5c\u4e3aCode Review\u5de5\u5177\u7684feat\uff09\u662fcode suggest\uff08\u4e5f\u5c31\u662f\u5728PR\u548cMR\u64cd\u4f5c\u65f6\uff0c\u76f4\u63a5\u5728VCS\u4e2d\u63d0\u793a\u6709\u95ee\u9898\u7684\u4ee3\u7801\uff09\uff0c\u7528\u6237\u4f53\u9a8c\u66f4\u53cb\u597d\u3002"}),"\n",(0,i.jsx)(t.p,{children:"pre-commit\u867d\u7136\u4e5f\u80fd\u5728PR\u548cMR\u65f6\u5b9e\u73b0\u7c7b\u4f3c\u64cd\u4f5c\uff0c\u4f46\u662f\u7528\u6237\u4f53\u9a8c\u4e00\u5b9a\u662f\u4e0d\u5982reviewdog\u7684\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u4f46\u662f\u57fa\u4e8e\u4e0a\u8ff0\u7684\u4e24\u70b9\u539f\u56e0\uff0c\u4e2a\u4eba\u8ba4\u4e3a\u8fd8\u662fpre-commit\u7684\u6613\u7528\u6027\u548c\u901a\u7528\u6027\u66f4\u597d\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u4e0a\u9762\u5570\u91cc\u516b\u55e6\u4e00\u5806\uff0c\u603b\u4e4b\u4e00\u53e5\u8bdd\uff0cpre-commit\u662f\u771f\u6b63\u53ef\u4ee5\u505a\u5230\u201c\u4e00\u6b21\u914d\u7f6e\uff0c\u5230\u5904\u4f7f\u7528\u201d\u7684\u5de5\u5177\uff0c\u4e0d\u9700\u8981\u5728local\u548cremote\u518d\u914d\u7f6e\u4e86\uff0c\u4e5f\u4e0d\u9700\u8981\u8003\u8651\u201c\u8de8CI\u201d\u7684\u95ee\u9898\uff0c\u4e3b\u6253\u4e00\u4e2a\u7701\u5fc3\u3002"})})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(6540);const r={},l=i.createContext(r);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);