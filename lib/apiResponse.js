'use strict';

exports.result = function(res, statusCode, errCode, msg, data) {
  var output = {
    meta: {
      errCode: errCode,
      msg: msg
    },
    data: data
  };
  res.status(statusCode).json(output);
};