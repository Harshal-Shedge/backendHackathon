function createErrorResult(error) {
    return { status: 'error', error }
  }
  
  function createSuccessResult(data) {
    return { status: 'success', data }
  }

module.exports={
    createErrorResult,
    createSuccessResult,
}