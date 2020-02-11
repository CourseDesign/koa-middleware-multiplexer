const NotExistMiddleware = require('../error/not-exist-middleware');
const errorHandler = require('../handler/error-handler');

function multiplex(
  condition,
  functions,
  options = {
    errorHandler,
    checkExist: false,
  },
) {
  const functionMap = new Map(functions);

  return async (ctx, next) => {
    let evaluation = condition;
    if (typeof condition === 'function') {
      evaluation = await condition(ctx, next);
    }

    if (!functionMap.has(evaluation)) {
      if (options.checkExist) options.errorHandler(ctx, new NotExistMiddleware());
      return;
    }

    const func = functionMap.get(evaluation);
    return await func(ctx, next);
  };
}

module.exports = multiplex;
