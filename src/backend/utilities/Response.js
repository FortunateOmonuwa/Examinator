class Response {
  constructor({ message, isSuccessful, body, resultCode, error }) {
    this.message = message;
    this.isSuccessful = isSuccessful;
    this.body = body;
    this.resultCode = resultCode;
    this.error = error;
  }

  static Successful({
    message = "Operation successful",
    body = null,
    resultCode = 200,
  } = {}) {
    return new Response({
      message,
      isSuccessful: true,
      body,
      resultCode,
      error: null,
    });
  }

  static Unsuccessful({
    message = "Operation failed",
    error = null,
    resultCode = 400,
    body = null,
  } = {}) {
    return new Response({
      message,
      isSuccessful: false,
      body,
      resultCode,
      error,
    });
  }
}
export default Response;
