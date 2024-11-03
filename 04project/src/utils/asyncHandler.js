// const asyncHandler = () => {}

//syntax1
// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message : err.message
//         })
//     }
// }



//asyncHandler is used to wrap any route handler function so that any unhandled 
//errors in requestHandler are caught and passed to the next middleware
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))//resolving the promise and catches the error and passes it to next error
    }
}

export { asyncHandler };