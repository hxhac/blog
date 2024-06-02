

## mac


### [DEL] APP

```yaml

- type: Mac
  repo:
    - url: https://github.com/justinfrankel/licecap
      des: |
        GIF recorder, kap Instead of using the built-in qt screen recording function

        我选择 LICEcap，因为 LICEcap 支持定时 gif 截图，直接定时截取，就不需要手动截取了。LICEcap 只支持 gif 截图，但是响应很快。kap 功能很多（主要功能是 gif 截图 + 自定义截取 gif），但是用起来响应非常慢。

        LICEcap 相比之下，qt 的录屏功能更好，另外需要注意，实际上 qt 录屏后的 mov 文件就很小了，再转 gif 文件反而变大（举个例子，qt 录屏 1min 大概 15M，用了两个转 gif 工具，一个转完 9M 但是很糊，另一个转完 50M 清晰但是太大）


    - url: https://github.com/GothenburgBitFactory/taskwarrior
      des: 之前作为TODO管理用过一段时间（TODO管理尝试过），移除掉了，还是略麻烦，现在觉得直接用scratch记录是最方便的，最自由的。除了纯文本之外的其他方法都或多或少有些问题。把之前这部分的将近600行内容全部删掉了。

    - url: https://github.com/hoochanlon/Free-NTFS-for-Mac
      des: NTFS R/W for macOS. Support Intel/Apple Silicon now.

    - url: https://github.com/ZoraZora59/Get_Wifi_Password_On_MacOS
      des: Crack wifi password aircrack-ng. 用户与路由器建立连接是通过含有hash加密的密码握手包来确认身份的。那么如果得到握手包，获取到密码的hash值。那么通过跑字典比对hash值就可以得出密码的明文。we can also use GPU to execute "One-Way Hash Function"(EWSA, Elcomsoft Wireless Security Auditor, a pwd-pwn tool, support graphics-card).

    - url: https://github.com/matryer/xbar
      des: Menubar Management, similar tools like BitBar, hiddenbar, Billboard, SketchyBar

#    - url: https://github.com/pqrs-org/Karabiner-Elements
#      des: 键盘自定义工具
#    - url: https://github.com/johndbritton/teleport
#      des: 虚拟 KVM

    - url: https://github.com/rustdesk/rustdesk
      des: |
        Remote Desktop. rustdesk, software size within 22MB, support almost all platforms, and faster than TeamViewer. We used so much remote-desktop software, such as ToDesk, RustDesk, TeamViewer, AnyDesk, GoToMyPc, etc. Most of these support feats like Two-way desktop sharing(screens, keyboard, mouse, etc), File transfer, Clipboard sharing, etc.

        rustdesk其实也并没有之前看reddit上大家所说的那么快，尤其是不自己部署relay server的情况下，连接慢，还非常卡。支持远程唤醒（也就是在remote机器睡眠的情况下，晃动一下鼠标就能点亮显示器）。当然局域网下还是很快的，因为支持TCP-Tunneling嘛，直接内网打洞了。

#    - url: https://github.com/gnachman/iTerm2

    - url: https://github.com/Caldis/Mos
      des: Mos
    - url: https://github.com/MonitorControl/MonitorControl
      des: |
        调节显示器亮度，不用外置显示器就用不到了

        This software is used to control brightness of external display, cuz I dont
        use external display, so uninstall. And BTW I've tried to use commands or
        alfred-workflow, such as ddcctl, or `nriley/brightness`, instead of
        MonitorControl, but the experience is really sucks. We can't visualize the
        current brightness directly.

    - url: https://github.com/iina/iina
      des: |
        播放器客户端
        iina 现在不知道为啥有的时候很卡，卸载掉。之前使用过mpv和mac内置的quicktime，都不太好用。
        qt 不能播放文件列表，并且支持的视频格式太少。
        qt 的优点是支持录屏功能（包括影片录制和音频录制）和编辑视频。现在基本上没啥本地播放文件的需求了，如果需要的话，直接上传到 alist，直接在线播放。


    - url: https://github.com/PowerShell/PowerShell
      des: 一直以为是类似iTerm2这样的terminal，但是实际上是windows平台的，类似bash, zsh, fish这样的shell interpreter，所以就没啥意思了。当然，PowerShell6.0之后，也支持跨平台，并且添加了一些体验更好的feats。PowerShell通过alias来实现兼容一些bash的常用命令，比如 'cd -> Set-Location'，但是也就仅此而已了，意思不大。
    - url: https://github.com/MarioCatuogno/Clean-macOS
    - url: https://github.com/mac-cleanup/mac-cleanup-py
      des: Mac Cleaner. 这个比Clean-macOS好用点，不过都用不到了。普通OS本身就不适合有“对OS清洁有强迫症”的群体，所以比较什么cleaner对清洁更彻底，也就毫无意义了。平时用tencent-lemon就足够了。没必要求全责备。


```



```yaml

#- feat: 查找冲突快捷键
#  des: shortcutdetective

#- feat: PDF 编辑器
#  des: pdf-expert
#  des: 内置 PDF 浏览器够用了

#  des: 使用一个键盘和指点设备来控制多台 Mac
#- feat: 修改屏幕色温
#  des: flux

#  des: 不如 mac 内置的夜览，夜览就很好用了（并且实际上很长时间两个都没用，也没察觉到）
#- feat: PLIST 编辑器
#  des: PLIST Editor

#  des: >-
#    （编辑、查看和修改 plist 文件的 IDE）为啥删掉？
#
#    因为实在是个极低频的需求（几年都不用一次），目前用 vscode 的插件 Pretty XML（基于 plutil 命令实现）低成本解决该需求；另外这个
#    APP 不支持 brew 安装，不好统一管理。
#- feat: 邮箱软件
#  des: spark

#  des: 用来管理邮箱和 newsletter 的工具
#- feat: 风扇转速工具
#  des: macs-fan-control

#  des: ' tencent-lemon 已经集成风扇相关数据了，这个用不太到，平时也没什么需求自定义风扇转速。所以删掉。'
#- feat: 管家类工具
#- feat: 虚拟机工具
#  des: VirtualBox

#  des: >-
#    VirtualBox, VMWare Fusion, Parallel. All of these sucks, and if not dont
#    need a graphical interface, docker trashed these. BTW If need a graphical
#    interface, It's much better to buy a pay-per-use ECS, and destroy it than to
#    toss a VM
#- feat: 在线网盘
#  des: 坚果云

#  des: >-
#    Some time ago used Nutstore to sync code bidirectionally. I've also used
#    other cloud service like icloud, dropbox, google-cloud to implement similar
#    task.
#- feat: 文件压缩工具
#  des: maczip

#  des: 'replaced with mac built-in ''Archive'', and command like unrar, zip, 7z, etc.'
#- feat:

#- feat: 日历 APP
#  des: TinyCal
#  des: >-
#    TinyCal is much better than Itsycal in terms of functionality and
#    appearance, but it doesn't support installation using homebrew, so
#    uninstalled. Maybe built-in command cal is a better choice if just a basic
#    calender requirement, and we can also use 'Calendar APP' to check holiday.

```


```yaml

#- type: screenshot
#  repo:
#    - des: shottr
#    - des: cleanshot(subscription-payments)
#    - des: snip(tencent, not maintained)
#    - des: jietu(also tencent, not maintained)
#    - des: iShot(just another xnip, similar feats, and both are installed by homebrew)
#    - des: xnip
#  des: 尝试使用“mac内置截图工具”，支持全屏、自定义截图、延时截图和录屏。但是不支持滚动截图。默认图片类型PNG。可以通过命令修改默认的图片前缀、图片名中的时间戳、图片路径、图片类型。
```


```yaml
- type: IDE
  repo:
    - url: https://github.com/zed-industries/zed
      des: electron和atom的作者，使用rs的slint实现的IDE，但是感觉完全走偏了。一些基础功能如structure, 自定义快捷键, 数据库管理, git 之类的都没有，性能也很一般，反而提供一些类似space这样的协作开发（还内置了一个类似Discord的IM）功能。不是很理解。下午试用了一下zed，感觉很一般。但是可以等等看。
    - url: https://github.com/microsoft/vscode
      des: |
        晚上goland卡的我实在受不了，又试了下vscode，实话说真的太难用了。对UI不太适应，快捷键也不太顺手。

        搞了下调试golang，非常麻烦，远不如goland用起来舒服。

        可能这就是代价吧。以后有时间的话折腾折腾neovim，要不就足够精简，要不就用goland这种全家桶。vscode这种的就算了。
```



```yaml


    #- url: https://github.com/koekeishiya/yabai
    #  des: 平铺式窗口管理器 Windows Management Tool. 但是对我来说没啥用。

    - url: https://github.com/jesseduffield/lazygit
      des: |
        lazygit的定位是啥呢？相同功能的替代品太多了，不说Tower, SourceTree之类的GUI工具了，也不说直接命令行操作了，这两种都有点“没必要”。感觉各种IDE自带的VCS工具都比lazygit这种TUI要好用很多。
        能否认为lazygit其实是适配平时用neovim之类并没有内置VCS工具的IDE的coder的？
    - url: https://github.com/ranger/ranger
      des: ranger就是类似fzf, joshuto 这样的在terminal查看finder的工具
    # [Trending Neovim Plugins in 2024](https://dotfyle.com/neovim/plugins/trending)
    - url: https://github.com/neovim/neovim
    - url: https://github.com/AstroNvim/AstroNvim
    - url: https://github.com/NvChad/NvChad
    - url: https://github.com/LunarVim/LunarVim
    - url: https://github.com/qvacua/vimr


```







### shortcuts

```yaml

  cmd:
    - [CMD+opt+w, "关闭当前软件所有窗口"]
    - [CMD+opt+D, "切换 Dock 的显示隐藏"]
    - [CMD+opt+esc, "强制退出程序"]
    - [CMD+ 空格键 (我改成了“输入法切换”键，更符合自己的使用习惯), "切换输入法"]
    - [CMD+Shift+R, "浏览器强制刷新"]
    - [CMD+c, "复制"]
    - [CMD+option+v, "剪切"]
    - [在 finder 下直接 CMD+Shift+., "查看隐藏文件"]
    - [CMD+Shift+G, "根据路径查找文件"]
    - [CMD+backspace（退格键）, "删除文件的快捷键"]
    - [点击一张图片，按“空格键”打开，然后通过“方向键”来控制上一张图和下一张图, "预览图片"]
    - [CMD+z/CMD+Shift+z, "撤销和反撤销"]
    - [CMD+option+n, "新建 txt 文件"]
  qs:
    - 为啥handoff不能用了？fix？

# mac内置的 lookup 还挺好好用的，可以小窗查单词，如果字符串为网址，还能小窗preview网页。类似alfred的网页preview。可以Ctrl+直接点选该单词，或者CMD+Ctrl+D，都可以查询该单词。

# 三指拖移功能，可以直接拖拽窗口、选中文本、图片，相当于之前单指点按的所有操作的快捷操作。设置之后，需要使用四指进行窗口切换。

# mac 切换输入法时，光标左下角展示当前输入法 sonoma
```





## alfred

### alfred 在工具链中起到哪些作用?

在我的工具链中，重要性排序如下，mac 应用 > alfred > web 工具，使用频率也是同样排序（分别是平台、高频、低频）。
mac应用类似“平台”是重火力平台，alfred则类似单兵机枪，除此之外的低频操作（如数据处理、查文档等等），则直接部署到 web 端即可。

### alfred有哪些feats? 能替代掉哪些之前工具/APP?

- 自动多端同步
- 剪贴板 (Pin, PasteNow)
- snippets (SnippetsLab)
- universal-actions(copy-path, TerminalFinder)
- workflows
- 搜索本地文件(space, in, find(查找文件所在目录), open(打开文件))

### 为啥使用alfred，而不是其他launcher?

:::tip
Compare alfred, Raycast, Hammerspoon, KeyboardMaestro, wox, launchy. 尤其是比较一下alfred和raycast
:::


```yaml

# 启动器和自动化工具比较
launchers:
  - name: Maestro
    des: alfred 目前提供的模板还是不够灵活，不如Maestro的Prompt For Snippet。
  - name: Raycast
    des: Raycast Store(raycast官方wf), 内置支持查询 chrome 书签, 窗口调节。raycast 相当于和 alfred 打了个错位。alfred 是核心的 workflow 功能收费，raycast 对应的插件功能免费，但是其他一些功能收费，并且还不便宜，让人感觉不太值。raycast 的窗口更类似一个 APP，支持后退、下拉选择等功能，alfred 则完全是一个简单而强大的启动器，更 geek 一些。


  - name: Wox
    url: https://github.com/Wox-launcher/Wox
    des: 胜在开源，v1是C#实现的，只支持windows系统，v2是golang实现的（GUI基于Tauri + React），支持cross-platform，试用了一下，体验挺差的，不仅UI很丑，响应等各方面也不如alfred。plugins生态也很差，官网plugins列表上看到，v1的生态还行，但是plugins普遍都是10年前更新的了，v2又没生态，很尴尬。
  - name: Sol
    url: https://github.com/ospfranco/sol
    des: 基于ts实现，gh上只有不到2k的star
  - name: Hammerspoon
    url: https://github.com/Hammerspoon/hammerspoon
    des: 相比于alfred，其最大的feat是事件触发器，比如手动触发、事件触发（比如“连上公司 wifi 后自动静音”这样的自动化操作确实省心）、定时触发、条件触发。如果 mac 的 shortcut 支持自动化的话，也可以实现类似功能。另外需要注意hs只能用lua写plugin。可以参考 https://github.com/xiaojundebug/hammerspoon-config
  - name: AutoHotkey
    url: https://github.com/AutoHotkey/AutoHotkey
    des: ahk嘛，支持cross-platform，以其强大的热键功能、热字符串、宏录制和 GUI 控件创建而闻名，但是需要写ahk script来实现自定义脚本。
  - name: Flow.Launcher
    url: https://github.com/Flow-Launcher/Flow.Launcher
    des: fl只支持Windows，写plugin只支持C#, F#, Python, js和ts

```




### [DEL] workflow



```yaml

#    - url: https://github.com/hxhac/tldr-alfred
#      des: tldr 工具
#    - url: https://alfred.app/workflows/alfredapp/system-settings
#      des: System Settings. alfred官方workflow，用来快捷打开mac系统设置
#    - url: https://github.com/alanhg/alfred-workflows/tree/master/string-manipulation
#      des: string manipulation
#    - url: https://github.com/alfredapp/tinypng-workflow
#      des: 图片压缩工具. 用 TinyPNG 压缩图片，官方 workflow（作为 Universal Actions 使用）
#    - url: https://github.com/Coolnz/translate-alfredworkflow
#      des: 全局翻译工具
#    - url: https://github.com/TKkk-iOSer/wechat-alfred-workflow
#      des: 需要下载 third-party pkg/plugin to patch wechat.app, so sucks
#    - url: https://github.com/cage1016/alfred-timelog
#      des: "time tracker, a better time-tracker than [tech-branch/tsr: Simple csv-based timetracker for Raycast and Alfred](https://github.com/tech-branch/tsr)"
##    - url: https://github.com/paulsri/alfred-caffeinate
##      des: 防止机器休眠
##    - url: https://github.com/avxkim/alfred-caffeinate
#    - url: https://github.com/yohasebe/deepl-alfred-translate-rewrite-workflow
#      des: Deepl is easier to use than youdao, but it's too slow, It's no different from opening google-translate, and it's not as authentic as google-translate. So they were all deleted.
##    - url: https://github.com/wensonsmith/YoudaoTranslator
##      des: youdao-workflow is easy to use, but youdao-translate itself is hard to use. The Chinese-English translation is not very authentic, so it can only be used to translate words.
#    - url: https://github.com/vdesabou/alfred-spotify-mini-player
#      des: 想在mac上后台播放spotify，但是没啥好办法，chrome不支持后台webpage，也试过spotifyd，想用这个workflow需要下载APP，确实没辙。
#    - url: https://github.com/cage1016/alfred-devtoys
#      des: 反正就是一些常用操作，但是我确实用不太到，这类操作我更喜欢直接使用网页工具。另外，大部分类似工具都不如String Manipulation提供的齐全（Case switching, Un/Escape, Encode/Decode, Align），对我来说这些操作都太低频了。 # [String Manipulation - IntelliJ IDEs Plugin | Marketplace](https://plugins.jetbrains.com/plugin/2162-string-manipulation)


# And I deleted some workflows about gitlab, feishu, jetbrains, s3, google-drive, devdocs
```




## chrome



```yaml

- type: chrome
  repo:
    - url: https://github.com/ocyss/boos-helper
    des: Boss直聘助手，油猴脚本，用来批量投递简历。试用了一下，一般般吧，不算特别好用。也就比手动投递快点不多，并且不一定能投递成功。

    - url: https://github.com/xifangczy/cat-catch
      des: 猫抓，用来抓取本地视频什么的，我有 downie，不需要这个（猫抓搭配 downie 使用，嗅探到资源之后直接下载，避免在 downie 里自定义抓取）
    - url: https://github.com/brookhong/Surfingkeys
      des: Trying surfingKeys again, and it really sucks. I hate vim, and also nearly all operations surfingKeys supported have been supported by chrome itself. keyboard and mouse is just like man's both-hands, if you just use keyboard is like you just use left-hand fight against enemy. Maybe your left arm is strong enough to win in the end, but it's certainly not as comfortable as both hands.

#    - url: https://github.com/qoomon/chrome-tab-toggle-extension
#      des: shortcut to toggle through recent active tabs. 用另一个toggle switch tab的extension了



#    - url: https://github.com/scoful/N-Tab
#      des: 支持sync的OneTab
#    - des: OneTab
#      des: chrome 标签页管理
#    - des: Wappalyzer
#      des: 查看网页技术栈
#    - des: uBlacklist
#      des: 屏蔽搜索结果
#    - des: LeetCode Helper
#      des: 刷题必备
#    - des: Skip Redirect
#      des: 自动跳转中间页。不太好用，安装之后，很多网站的跳转都出问题了。
#    - des: EditThisCookie
#      des: 查看和编辑 Cookie
#    - des: JSON Formatter
#      des: 功能太单一，FeHelper前端助手 还是比这个好用太多了
#    - des: RSS Feed Reader
#      des: 可以在本地预览 rss，实话说还是很好用的，用完即删
#    - des: 智能网页大纲
#      des: 无非是用来看 gh 的 README 和公众号文档，但是这两个现在都内置 toc 了，所以也用不到了
#    - des: 图片助手 (ImageAssistant)
#    - des: Bookmarks cleanup
#      des: 清理书签坏链 我不用 chrome 书签，用不到删掉
#    - des: User-Agent Switcher for Chrome
#      des: 切换 UA 用的，有时搞爬虫有用，其实也用不太到
#    - des: Global Speed
#      des: 用来控制视频速度，其实用不太到
#    - des: Set Character Encoding
#      des: 切换字符集，用不到
#    - des: Axure RP Extension for Chrome
#      des: 用不到
#    - des: Disable HTML5 Autoplay
#      des: 用来禁止 h5 的音频和视频自动播放
#    - des: BlockSite
#      des: Block 指定网站
#    - des: Unsplash Instant
#      des: Tab 页主题工具，美化工具，没有实际功能。对我彻底没用了。

    - url: https://github.com/gildas-lormeau/SingleFile
      des: SingleFile. 网页单文件保存，chrome已经内置了保存为 `mhtml格式的单文件网页`，可以把网页内的图片、视频等媒体文件完全打包到一个单文件中，这个就没啥用了。

#    - des: GitZip
#      des: gh 文件下载，使用频率较低
#    - des: gitpod
#      des: 直接用 gh 自家的 codespaces 或者 gh.dev 代替了
#    - des: SourceGraph
#      des: gh 的 CR 工具，本身就不怎么用，现在 gh 也内置 CR 功能了，直接删掉了事
#    - des: Octotree
#      des: gh 文件树，gh 的 Code View 已经内置了，用不到了


```




### shortcuts

```yaml

# [Chrome keyboard shortcuts - Computer - Google Chrome Help](https://support.google.com/chrome/answer/157179)
  cmd:
    - [CMD+点击url, "在新 tab 打开该 url，不需要再右键操作了，操作效率更高"]
    - [CMD+shift+点击url, "在新 tab 打开该 url，并切换到新 tab"]
    - [shift+点击url, "在新窗口打开该 url，并切换到新窗口"]
    - [CMD+enter（而不是直接 enter）, "同样，搜索后不跳转到新标签页。在有大量搜索的场景下，效率很高，少了跳转和重复键入搜索词条的过程。"]
    - [CMD+n, "打开新窗口"]
    - [CMD+t, "打开新标签页"]
    - [CMD+shift+T, "重新打开上次关闭的标签页"]
    - [CMD+L, "跳转到地址栏"]
    - [CMD+d, "保存到书签"]
    - [CMD+r, "深度刷新"]
    - [CMD+y, "打开“历史记录”"]
    - [CMD+shift+j, "打开“下载内容“"]
    - [CMD+option+b, "Open the Bookmark Manager"]
    #    - ["CMD+shift+]", "跳转到下一个标签页"]
    #    - ["CMD+shift+[", "跳转到上一个标签页"]
    - [空格键, "向下滚动网页"]
    - [Shift + 滚轮, "水平滚动网页"]
    #    - ["", "side panel"]

    # 如果没有 Home 键 和 End 键
    - [Fn 键 + 方向左键, "Home 键"]
    - [Fn 键 + 方向上键, "PgUp 键"]
    - [Fn 键 + 方向下键, "PgDn 键"]
    - [Fn 键 + 方向右键, "End 键"]
# 全屏模式下隐藏tab栏
# chrome 怎么让某个tab页在后台运行？
```




## goland


### feats

```yaml
- type: goland
  feats:
    - feat: 接口调试
      des: postman, apifox
    - feat: 文件传输
      des: 支持 FTP 协议组（FTP/SFTP/FTPS）和 WebDAV，如果需要传输到 Google Drive 和 Dropbox 之类的云服务，还是需要 Transmit（当然也可以直接用rclone）。Transmit, Cyberduck
    - feat: 终端
      des: iterm2, warp-terminal
    - feat: git
      des: tower, lazygit
    - feat: database client
      des: 其实就是内置了 Datagrip，支持mongo(robo-3t), postgres(postbird), redis(Medis), mysql(Navicat, Sequel Pro)
    - feat: 笔记软件
      des: mweb/obsidian
    - feat: 便签工具(scratch)
      des: vscode/备忘录
    - feat: TODO 工具(TODO.md)
      des: 提醒事项/滴答清单
```


### plugins

```yaml
#    - url: https://github.com/AVSystem/intellij-hocon
#      des: HOCON
#    - des: React Buddy. 主要用来进行react代码生成和调试，好像挺好用的

#- url: https://github.com/dromara/fast-request
#  des: postman alternatives. waiting for support for goland, much easier to use than JetClient. 现在大部分，比如Insomnia或者bruno都标榜自己是lightweight alternatives，但是事实上这些玩意都是基于electron实现的，安装之后大多250M+，这也能吹自己轻量？ 意思不大，用apifox了

#- url: https://plugins.jetbrains.com/plugin/17058-taskfile
#  des: Taskfile plugin



```



### shortcuts


```yaml

  cmd:
    - [CMD+E, "用来 toggle切换最近编辑文件，体验极佳！！！（把“切换仅更改的文件”快捷键勾掉）"]
    - [CMD+ctrl+T, "给“显示临时文件”添加快捷键"]
    - [ctrl+option+上下方位键, "调整活动工具窗口大小（比如“终端窗口”）"]
    - [CMD+F 进行查找后，选择“范围查找”, "怎么在文档的部分文本中进行查找（也就是范围查找）？"]
    - [需要替换文本太多时，无法替换，使用CMD+R进行替换, "怎么进行整个项目的文本替换？"]
    - [CMD+shift+n, "创建临时文件"]
    - [CMD+shift+a 之后输入buffer, "创建临时 buffer（比之前用 vscode 作为临时编辑器强 1w 倍，支持跨项目使用、调试、语法高亮、文件历史记录等正常项目文件里的所有功能）"]
    - [双击shift, "查找所有"]
    - [cmd+option+l, "格式化代码"]
    - [cmd+x, "删除当前行"]
    - [cmd+d, "复制当前行"]
    - [cmd+ -/+, "收起/展开代码块"]
    - [cmd+shift+r, "全局替换"]
    - [cmd+fn+左/右, "文件头/文件尾"]
    - [fn + 上/下, "页面顶部/底部"]
    - [CMD+左/右, "行首/行尾"]
    - [CMD+L, "跳转行号"]
    - [CMD+K, "git 提交栏"]
    - [CMD+shift+K, "git 推送"]
    - [ctrl+r, "run"]
    - [ctrl+d, "debug"]
    - [CMD+esc, "隐藏当前活动栏（默认是 fn+esc，改键）"]
    - [CMD+opt+L, "当前页面 Reformat Code"]
    - [shift+ctrl+ 上/下 切换]
    - [CMD+shift+U, "uppercase"]
    - [CMD+fn+F12, "按文件结构导航 (used to search and track functions directly)"]

    # golang 相关快捷键
    - [opt+enter, 选择“生成构造函数”, "生成构造方法"]
    - [选中 struct 中该成员，opt+Enter，选择“生成 getter/setter”（只能私有属性能够生成，公开属性直接读写即可）, "生成 struct 中某个成员的 getter/setter"]
    - [鼠标点击到某个变量后，shift+f6即可（直接 opt+enter 可能无法修改）, "批量修改变量名"]


    #    # goland 快捷操作 struct
    - [把 json 直接复制到 goland 即可, "json直接转换成结构体"]
    - [ctrl+T+引入类型, "即可把结构体的内嵌结构体，转移到外部"]
    - [opt+enter+Change field name style in tags, "即可修改命名风格，为小驼峰"]
    - [opt+enter+Update key value in tags, "给所有 tag 添加omitempty等标签"]
    - [opt+enter+Add key to tags, " 给所有 tag 添加 key"]



    - des: 所有常用活动工具窗口的快捷键有哪些？
      kw: 项目窗口、git 提交窗口、git 窗口、终端窗口、数据库窗口

    - des: How to change the default tool window layout in IDEA?
      kw: From the "Window" menu, select "Store Current Layout as Default".
    - des: how to disable tool window in goland?
      kw: |
        Disable the "show tool window bars" in goland settings.
        Disable the "widescreen tool window layout"


# goland用regex进行批量替换？
# goland 怎么导出 sql 到一个文件？ # mysqldump，而不是“sql 导出
# goland 对比数据库字段？ # 内置工具，注意选择顺序（决定源库和目标库），会直接生成 sql
# tag list in goland, How to locate a certain tag?
# goland 怎么打 tag 和推送 tag（以及删除 tag 操作）？
# goland 怎么做 stage 操作？ goland 怎么 stash 和 unstash 操作？
# git blame 操作？查看文件的每一行最后的修改人？
# goland 怎么做 `discard unstaged changes` 操作（就是回滚本地未提交代码）？
# goland 怎么回滚本地已经 commit 的代码？
#
# structure 跟随光标的问题（切换文件时，右侧structure会回到最上面，而不是光标所在位置的structure），需要勾选 `Always Select Opened Element`
# When double-clicking cmd, the side tool windows will flash. 配置问题，直接在 `Settings | Advanced settings, User interface` 中勾选 `Disable double modifier` 就解决这个问题了
#
# goland内置Database插件有哪些高级功能？ # DDL, 列注释, 即时分析和快速修复, 查询计划(显示可视化), explain,
#
# 数据库的连接数据是跟项目一起的，如果删除项目，数据库连接就移除了，下次想使用，还要再输入账号密码进行登录，就非常烦人。
# 直接把某个数据库 `Mark Global` 就可以全局使用了，数据库连接也不会随着删除项目而删除，非常好用
```



## ios

```yaml

#- des: nPlayer
#- des: 高德地图
#  des: 比百度地图好用
#- des: 招商银行
#- des: 微信
#- des: 腾讯手机管家
#- des: Shadowrocket
#  des: 说实话我觉得这种工具都没啥意思，手机本身就不是用来干这个的 BoxJS, Quantumult X, Loon



#- name: 高驰COROS
##- des: ReadKit
#- name: 小宇宙
#- name: 随申办
#- name: 克拉壁纸
#- name: 米家
#- name: 自如
#- name: 华住会
#- name: 极光录音
#- name: Mealligram
#  name: 日常食物追踪
#- name: 速拼
#  name: 长截图APP，自动识别和拼接截图、滚动截图，直接录屏进行长截图，不需要再拼接
#- name: 识货
#- name: 美丽修行
#- name: 轻颜相机
#- name: 悦跑圈
#  name: 不如最酷好用
#- name: 微信读书
#  name: 章节的划分功能比用过的其他小说 APP 好用
#- name: OTA平台
#  name: 携程旅行
#- name: 本地生活APP
#  name: 美团
#  name: 几乎没怎么用过
#- name: 抓包工具
#  name: Stream
#  name: Thor没了之后只能用这个了
#- name: BOSS直聘
#- name: 支付宝


#- name: 淘宝
#- name: 闲鱼
#- name: 天天基金
#- name: 钉钉
#- name: 大众点评
#  name: 好用，但是实际使用频率不高
#- name: 饿了么
#- name: 工银融e联
#  name: 最近几年都没怎么用工行了
#- name: 滴答清单
#  name: 不用滴答清单了，自然也用不到APP
#- name: 计算器APP
#  name: Kalkyl
#- name: JSBox
#- name: 推送消息APP
#  name: Bark
#  name: 给手机推送消息。传统通知方式如邮件、聊天软件来做自动提醒还是略微麻烦。ServerChan, gotify, Tenta, IFTTT, MacroDroid
#- name: 剪贴板工具
#  name: Taio
#- name: 物品指南
#- name: 输入法APP
#  name: 微信键盘
#  des: |
#    占用的空间大，安装后未使用就将近 250MB
#
#    相比于内置输入法，优势在于：
#
#    - 拼写 Plus
#    - 在微信内使用微信表情更方便
#    - 有“光标位移”功能，在键盘上左右滑动即可快速切换光标位置
#    - “常用语”功能

#- des: 熊猫吃短信
#- des: 360 防骚扰大师

#- des: Arc Search
#  des: 确实不错，UI漂亮，交互更符合直觉。功能上，内置ADBlocker, "Browse for Me"功能可以概览多个信源，summarize功能也很好，可以快速概括文章。还是删掉了，还是不如safari好用。tab页切换太逆天了。

#- des: HTTPCatcher
#  des: 网球抓包，比Stream好用（导出HAR之后需要再解码）

#- des: Recorder PRO # 录音APP，还不错
```


