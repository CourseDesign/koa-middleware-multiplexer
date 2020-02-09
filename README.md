# Koa Middleware Multiplexer

![](https://img.shields.io/npm/dm/koa-params-extractor.png?style=flat-square)

**Multiplex Koa's middleware.**

​    

## Install

```shell
$ npm i koa-middleware-multiplexer
```

​    

## Usage

```js
const multiplexer = require('koa-middleware-multiplexer');

router.post('/user', multiplexer.multiplex(
  (ctx) => ctx.query.type,
  [
    ['admin', signUpAdmin],
    ['user', signUpUser],
  ],
));
```

​    

### multiplex

```js
function multiplex(condition, functions, errorHandler = errorHandel)
```

​    

### Error Handel

```js
function errorHandel(ctx, error) {
  ctx.response.status = error.status || error.statusCode || 500;
  ctx.response.body = { message: error.message || 'Undefined error' };
}
```

