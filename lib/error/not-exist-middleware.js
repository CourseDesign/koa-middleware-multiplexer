class NotExistMiddleware {
  constructor(message = 'Not exist middleware.') {
    this.message = message;
    this.status = 500;
  }
}

module.exports = NotExistMiddleware;
