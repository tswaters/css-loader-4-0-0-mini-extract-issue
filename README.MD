# mini-css-extract-plugin & css-modules not working together

```
npm ci
```

```
$ npm start

> css-loader-4-0-0-mini-extract-issue@1.0.0 start D:\Code\css-loader-4-0-0-mini-extract-issue
> webpack --mode=development && node dist/index.js

Hash: 27487bcdda57bc5c318e
Version: webpack 4.44.0
Time: 215ms
Built at: 2020-07-26 1:24:30 p.m.
    Asset      Size  Chunks             Chunk Names
index.css  46 bytes   index  [emitted]  index
 index.js  4.35 KiB   index  [emitted]  index
Entrypoint index = index.css index.js
[./index.css] 39 bytes {index} [built]
[./index.js] 63 bytes {index} [built]
    + 1 hidden module
Child mini-css-extract-plugin node_modules/css-loader/dist/cjs.js??ref--4-1!index.css:
    Entrypoint mini-css-extract-plugin = *
    [./node_modules/css-loader/dist/cjs.js?!./index.css] ./node_modules/css-loader/dist/cjs.js??ref--4-1!./index.css 535 bytes {mini-css-extract-plugin} [built]
        + 1 hidden module
undefined
```

Comment out the mini-css-extract-plugin usages in webpack.config js

```
$ npm start

> css-loader-4-0-0-mini-extract-issue@1.0.0 start D:\Code\css-loader-4-0-0-mini-extract-issue
> webpack --mode=development && node dist/index.js

Hash: 4b2818aee950cc087e98
Version: webpack 4.44.0
Time: 190ms
Built at: 2020-07-26 1:24:04 p.m.
   Asset      Size  Chunks             Chunk Names
index.js  8.11 KiB   index  [emitted]  index
Entrypoint index = index.js
[./index.css] 535 bytes {index} [built]
[./index.js] 63 bytes {index} [built]
    + 1 hidden module
_3XqOJy6qcumHzvOwbivTQK
```

