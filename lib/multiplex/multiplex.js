const NotExistMiddleware = require('../error/not-exist-middleware');
const errorHandel = require('../handler/error-handler');

function multiplex(
  condition,
  functions,
  errorHandler = errorHandel,
) {
  const functionMap = new Map(functions);

  return async (ctx, next) => {
    let evaluation = condition;
    if (typeof condition === 'function') {
      evaluation = await condition(ctx, next);
    }

    if (!functionMap.has(evaluation)) {
      errorHandler(ctx, new NotExistMiddleware());
      return;
    }

    const func = functionMap.get(evaluation);
    return await func(ctx, next);
  };
}

module.exports = multiplex;
