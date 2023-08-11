exports.handler = async (event, context) => {
  const version = context.functionVersion;

  const response = {
    statusCode: 200,
    headers: {
      'X-Deployment-Version': version
    },
    body: JSON.stringify('Hello from myFunction'),
  };

  return response;
};