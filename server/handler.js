const respondWithResult = (res, data, statusCode) => {
    statusCode = statusCode || 200;
    return res.status(statusCode).json({...data, code: statusCode});
};

const handleError = (res, err, statusCode) => {
    statusCode = statusCode || 500;
    res.status(statusCode).json({message: err.message, code: statusCode});
};

module.exports = {
    respondWithResult,
    handleError
};