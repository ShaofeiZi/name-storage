# [nameStorage](https://github.com/ShaofeiZi/nameStorage)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ShaofeiZi/nameStorage/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/ShaofeiZi/nameStorage.svg?branch=master)](https://travis-ci.org/ShaofeiZi/nameStorage)
[![Coveralls](https://img.shields.io/coveralls/ShaofeiZi/nameStorage.svg)](https://coveralls.io/github/ShaofeiZi/nameStorage)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/@fly/name-storage)
[![NPM downloads](http://img.shields.io/npm/dm/nameStorage.svg?style=flat-square)](http://www.npmtrends.com/@fly/name-storage)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/ShaofeiZi/nameStorage.svg)](http://isitmaintained.com/project/ShaofeiZi/nameStorage "Percentage of issues still open")


## :star: 特性

nameStorage 是类似 sessionStroage 的键值对数据存储工具，但是可以跨域。

nameStorage 适用于同一窗口内跨页面数据存储与传递。

技术上，nameStorage 使用 window.name 存储数据。
数据的生存周期为窗口会话的生存周期，同一个窗口可以通过 nameStorage 共享数据。



## :open_file_folder: 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## :rocket: 使用者指南

通过npm下载安装代码

```bash
$ npm install --save @fly/name-storage
```

如果你是node环境

```js
var base = require('@fly/name-storage');
```

如果你是webpack等环境

```js
import base from '@fly/name-storage';
```

如果你是requirejs环境

```js
requirejs(['node_modules/@fly/name-storage/dist/index.aio.js'], function (base) {
    // xxx
})
```

如果你是浏览器环境

```html
<script src="node_modules/@fly/name-storage/dist/index.aio.js"></script>
```

## :bookmark_tabs: 文档
[API](./doc/api.md)

## :kissing_heart: 贡献者指南
首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```

> 注意：浏览器环境需要手动测试，位于`test/browser`

修改 package.json 中的版本号，修改 README.md 中的版本号，修改 CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

## 贡献者列表

[contributors](https://github.com/ShaofeiZi/nameStorage/graphs/contributors)

## :gear: 更新日志
[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表
[TODO.md](./TODO.md)