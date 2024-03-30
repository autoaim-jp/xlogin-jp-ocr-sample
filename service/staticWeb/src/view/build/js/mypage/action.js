export const getOnSubmitUploadForm = ({ uploadFile, registerRequestId }) => {
  return async () => {
    const uploadFileResult = await uploadFile()
    console.log({ uploadFileResult })
    const { requestId } = uploadFileResult
    registerRequestId({ requestId })
  }
}

export default {}

