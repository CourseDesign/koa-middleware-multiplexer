function errorHandel(ctx, error) {
  ctx.response.status = error.status || error.statusCode || 500;
  ctx.response.body = { message: error.message || 'Undefined error' };
}

module.exports = errorHandel;
