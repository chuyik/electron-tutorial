指引
===

# 前言
1. 本教程基于 `create-desktop-apps`

2. 运行 `npm install electron-packager --save-dev`

# 设置
1. 设置 `package.json`
  ```javascript
    "build": "electron-packager . MyApp --platform=darwin --arch=x64 --version=0.28.3 --overwrite"
  ```

# 打包程序
1. 运行打包命令

  ```bash
  npm run build
  ```

2. （可选）打包程序代码

  `build` 名称加上 `--asar=true` 即可。

3. 其他设置

  参考：[https://github.com/maxogden/electron-packager](https://github.com/maxogden/electron-packager)
