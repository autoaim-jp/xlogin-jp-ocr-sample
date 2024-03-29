/* /output.js */
const fileAddRequest = ({
  accessToken, CLIENT_ID, API_VERSION, API_SERVER_ORIGIN, postFormRequest, formData,
}) => {
  const path = `/api/${API_VERSION}/tesseract/request`

  return postFormRequest(CLIENT_ID, accessToken, API_SERVER_ORIGIN, path, formData)
}

/* to http client */
const endResponse = ({
  res, json, redirect, ERROR_PAGE,
}) => {
  if (redirect) {
    return res.redirect(redirect)
  } if (json) {
    return res.json(json)
  }
  return res.redirect(ERROR_PAGE)
}

export default {
  fileAddRequest,

  endResponse,
}

