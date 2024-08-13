//This is actually a wrapper function that I have made in order to execute the async await function for connecting the database swiftly.
export {asyncHandler}


const asyncHandler =(fn) => async (req,res,next)=>{ // This is actually a wrapper function
    try{
        await fn(req,res,next)
    } catch(error){
        res.status(err.code || 500).json({
            succes: false,
            message: err.message
        })
    }
}