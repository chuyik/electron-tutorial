指引
===

# 前言
1. 首先请安装 [Node.js](https://nodejs.org/)

2. 运行 `npm install electron-prebuilt --save-dev`

# 设置
1. 运行 `npm init`

2. 设置 `package.json`
  ```javascript
    "main": "app/index.js",
    "start": "electron ./app",
  ```

# 编写第一个 APP
1. 创建 `app/index.js`
  ```js
    var app = require('app')
    var BrowserWindow = require('browser-window')

    app.on('ready', function() {
      var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
      })

      mainWindow.loadUrl('file://' + __dirname + '/index.html')
    })
  ```

2. 创建 `app/index.html`
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Hello</title>
    </head>
    <body>
      Hi!
      <script type="text/javascript">
        require('./app.js')
      </script>
    </body>
  </html>
  ```

3. 创建 `app/app.js`
  ```js
  document.write('The current version of io.js ' + process.version)

  var fs = require('fs')
  var path = require('path')
  var contents = fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')

  alert(contents)
  ```

4. 运行程序
  ```bash
  npm start
  ```
