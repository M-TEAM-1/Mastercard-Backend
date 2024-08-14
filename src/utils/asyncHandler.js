//This is actually a wrapper function that I have made in order to execute the async await function for connecting the database swiftly.
const asyncHandler=(requestHandler) =>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}




export {asyncHandler}