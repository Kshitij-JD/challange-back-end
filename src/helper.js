
exports.response = (responseObject, status, message, body = null, status_code = 200) => {
  return responseObject.status(status_code).send({
      status: status ? 1 : 0,
      statusCode: status_code,
      message: message,
      data: body
  });
};