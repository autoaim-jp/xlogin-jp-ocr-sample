/* /action.js */
const getHandlerSplitPermissionList = ({ handleInvalidSession, handleSplitPermissionList, createResponse }) => {
  return async (req, res) => {
    if (handleInvalidSession({ req, res })) {
      return
    }

    const { splitPermissionList } = req.session.auth

    const handleResult = await handleSplitPermissionList({ splitPermissionList })

    createResponse({ req, res, handleResult })
  }
}

const getHandlerUploadFile = ({
  handleUploadFile, createResponse, multer, FormData, Readable,
}) => {
  return async (req, res) => {
    const { accessToken } = req.session.auth

    const handleResult = await handleUploadFile({
      req, accessToken, multer, FormData, Readable,
    })

    createResponse({ req, res, handleResult })
  }
}

export default {
  getHandlerSplitPermissionList,
  getHandlerUploadFile,
}

