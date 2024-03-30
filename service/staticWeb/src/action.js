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

const getHandlerLookupResponseList = ({ handleInvalidSession, handleLookupResponseList, createResponse }) => {
  return async (req, res) => {
    if (handleInvalidSession({ req, res })) {
      return
    }

    const { accessToken } = req.session.auth
    const { requestIdListStr } = req.query

    const handleResult = await handleLookupResponseList({ accessToken, requestIdListStr })

    createResponse({ req, res, handleResult })
  }
}


export default {
  getHandlerSplitPermissionList,
  getHandlerUploadFile,
  getHandlerLookupResponseList,
}

