


## alfred

### alfred 在工具链中起到哪些作用？

在我的工具链中，重要性排序如下，mac 应用 > alfred > web 工具，使用频率也是同样排序（分别是平台、高频、低频）。
mac应用类似“平台”是重火力平台，alfred则类似单兵机枪，除此之外的低频操作（如数据处理、查文档等等），则直接部署到 web 端即可。

### alfred有哪些feats? 能替代掉哪些之前工具/APP?

- 自动多端同步
- 剪贴板 (Pin, PasteNow)
- snippets (SnippetsLab)
- universal-actions(copy-path, TerminalFinder)
- workflows
- 搜索本地文件(space, in, find(查找文件所在目录), open(打开文件))

### Compare alfred, Raycast, Hammerspoon, KeyboardMaestro, wox, launchy. 尤其是比较一下alfred和raycast

- Maestro. alfred 目前提供的模板还是不够灵活，不如Maestro的Prompt For Snippet
- Raycast. Raycast Store(raycast官方wf), 内置支持查询 chrome 书签, 窗口调节 # raycast 相当于和 alfred 打了个错位。alfred 是核心的 workflow 功能收费，raycast 对应的插件功能免费，但是其他一些功能收费，并且还不便宜，让人感觉不太值。 raycast 的窗口更类似一个 APP，支持后退、下拉选择等功能，alfred 则完全是一个简单而强大的启动器，更 geek 一些。
- [Wox-launcher/Wox](https://github.com/Wox-launcher/Wox) 胜在开源，v1是C#实现的，只支持windows系统，v2是golang实现的（GUI基于Tauri + React），支持cross-platform，试用了一下，体验挺差的，不仅UI很丑，响应等各方面也不如alfred。plugins生态也很差，官网plugins列表上看到，v1的生态还行，但是plugins普遍都是10年前更新的了，v2又没生态，很尴尬。
- [ospfranco/sol](https://github.com/ospfranco/sol) 基于ts实现，gh上只有不到2k的star
- [Hammerspoon/hammerspoon](https://github.com/Hammerspoon/hammerspoon). hs相比于alfred，其最大的feat是事件触发器，比如手动触发、事件触发（比如“连上公司 wifi 后自动静音”这样的自动化操作确实省心）、定时触发、条件触发。如果 mac 的 shortcut 支持自动化的话，也可以实现类似功能。另外需要注意hs只能用lua写plugin。可以参考 https://github.com/xiaojundebug/hammerspoon-config
- [AutoHotkey/AutoHotkey](https://github.com/AutoHotkey/AutoHotkey). 支持cross-platform，以其强大的热键功能、热字符串、宏录制和 GUI 控件创建而闻名，但是需要写ahk script来实现自定义脚本。
- [Flow-Launcher/Flow.Launcher](https://github.com/Flow-Launcher/Flow.Launcher). fl只支持Windows，写plugin只支持C#, F#, Python, js和ts。




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