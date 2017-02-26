指引
===

# 前言
1. 本教程基于 [create-desktop-apps](https://github.com/chuyik/electron-tutorial/blob/master/create-desktop-apps/README.md)

2. 运行 `npm install electron-packager --save-dev`

# 设置
1. 设置 `package.json`

  ```bash
    "build": "electron-packager . MyApp --platform=darwin --arch=x64 --version=0.28.3 --overwrite"
  ```

# 打包程序
1. 运行打包命令

  ```bash
  npm run build
  ```
  
  注： 如果想打包程序代码，在 `build` 后面加上 `--asar=true` 即可。

2. 更多设置

  参考：[https://github.com/maxogden/electron-packager](https://github.com/maxogden/electron-packager)
