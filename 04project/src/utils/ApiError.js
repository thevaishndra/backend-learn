class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",//people avoid this message because it doesn't give reference to any error
        error =  [],
        stack = "",
    ){}
}