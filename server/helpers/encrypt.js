const crypto = require('crypto');


function hashPass (input, key) {
  return crypto.createHmac('sha256', key).update(input).digest('hex');
}



module.exports = hashPass
