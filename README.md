# Introduction

> 此书主要相关内容为：管理那些事儿，研发效率那些事儿

## GitBook 使用教程

> GitBook 是一个基于 Node.js 的命令行工具，支持 Markdown 和 AsciiDoc 两种语法格式，可以输出 HTML、PDF、eBook 等格式的电子书

- 安装 [node v10.16.0+](https://nodejs.org/en/)

> 由于 gitbook 是基于 node.js 的，所以在安装 gitbook 之前需要先安装 node。

```bash
  npm install -g gitbook-cli
```

- 检验是否安装成功

```bash
gitbook - V
```

- 使用

> 新建一个文件夹，如 myBooks，并在该文件夹目录下执行以下操作。

- 初始化

```bash
  gitbook init
```

- 启动 gitbook

```bash
  gitbook serve
```

> 执行完上述命令后根据提示在浏览器地址栏中输入 http://localhost:4000 访问即可看见基本的效果

- 生成 \_book 文件夹

```bash
  gitbook build
```

- 部署到github
  - 新建gh-pages分支
  - 提交 build后的 _book 目录，对应提交到github 的 gh-pages 分支 下根目录 docs

> 代码结构如图：
![avatar](./asset/img/github-gh-pages.jpg)
> 部署设置如图:
![avatar](./asset/img/github-gh-pages02.jpg)

- 目录编写

> gitbook 的目录结构主要由 SUMMARY.md 文件决定，它通过 Markdown 中的列表语法来表示文件的父子关系，简单的示例如下所示。

```docs

# 目录

* [Introduction](README.md)
* [研发效率实战](tech-develop-notebook/README.md)
    * [代码评审](tech-develop-notebook/chapter01/firstSection.md)
        * [gitLab code review](tech-develop-notebook/chapter01/gitLab-code-review.md)
        * [gerrit 审查](tech-develop-notebook/chapter01/gerrit.md)
        * [phabricator 审查](tech-develop-notebook/chapter01/phabricator.md)
    * [流程优化](tech-develop-notebook/chapter02/firstSection.md)
* [程序员工作实战](tech-coder-notebook/README.md)
    * [以终为始](tech-coder-notebook/chapter01/README.md)
    * [持续集成](tech-coder-notebook/chapter02/README.md)
* [技术领导实战](tech-lead-notebook/README.md)
    * [第一篇：你的能力模型决定你的职位](tech-lead-notebook/chapter01/firstSection.md)
    * [第二篇：技术领导者的核心能力](tech-lead-notebook/chapter01/secondSection.md)

```

- 目录生成

> 目录编写完成之后，在命令行中输入如下命令，执行完成后再次启动项目即可预览最终效果。

```javascript
  gitbook init
```

> GitBook 会查找 SUMMARY.md 文件中描述的目录和文件，如果没有则会将其创建。

- Gitbook 常用命令

```javascript
  npm install gitbook-cli -g

  gitbook ls ：列出本地安装版本；

  gitbook current ：列出当前使用版本；

  gitbook ls-remote ：列出远程可使用版本；

  gitbook fetch 2.6.9 ：安装2.6.9版本；

  gitbook uninstall 2.6.9 ：卸载指定版本；

  gitbook update 2.6.9 ：更新到指定版本，没有指定版本则到最新；

  gitbook install ：安装当前项目所需插件；

  gitbook build ：构建成Html文件，默认在_book目录下；

  gitbook serve：启动服务；

  gitbook pdf ：输出pdf电子书；

  gitbook epub：输出epub电子书；

  gitbook mobi ：输出mobi电子书；

```
