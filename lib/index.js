const multiplex = require('./multiplex');
const handler = require('./handler');

module.exports = {
 ...multiplex,
  handler,
};