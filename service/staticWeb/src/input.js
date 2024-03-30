/* /input.js */
const lookupResponseListRequest = async ({
  accessToken, CLIENT_ID, API_VERSION, API_SERVER_ORIGIN, getRequest, requestIdListStr,
}) => {
  const origin = API_SERVER_ORIGIN
  const path = `/api/${API_VERSION}/tesseract/response`
  const param = { requestIdListStr }
  return getRequest(CLIENT_ID, accessToken, origin, path, param)
}


export default {
  lookupResponseListRequest,
}

