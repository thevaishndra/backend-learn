class ApiError extends Error {
  constructor(
    statusCode, //representing type of error
    message = "Something went wrong", //people avoid this message because it doesn't give reference to any error
    errors = [], //array that can hold detailed information about multiple errors
    stack = "" //custom stack trace if not provided it captures the current stack trace
  ) {
    super(message); //whenever we override something
    this.statusCode = statusCode;
    this.data = null; //this object is focused on error handling rather than delivering data that's why it is set to null
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack; //stack trace provides insight into where the error originated
    } else {//if no custom stack trace is provided
      Error.captureStackTrace(this, this.constructor); //to generate one based on the current execution context
    }
  }
}

export {ApiError}