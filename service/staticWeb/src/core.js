/* /core.js */
/**
 * @name コア機能を集約したファイル
 * @memberof file
 */

/* local setting */
const mod = {}

const init = (setting, output, input, lib) => {
  mod.setting = setting
  mod.output = output
  mod.input = input
  mod.lib = lib
}

const handleSplitPermissionList = async ({ splitPermissionList }) => {
  const clientId = mod.setting.xdevkitSetting.getValue('env.CLIENT_ID')
  const result = { splitPermissionList, clientId }

  const status = mod.setting.browserServerSetting.getValue('statusList.OK')

  const handleResult = { response: { status, result } }
  return handleResult
}

const handleUploadFile = async ({
  req, accessToken, multer, FormData, Readable,
}) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 2 * 1024 * 1024 },
  })

  const uploadResult = await new Promise((resolve) => {
    upload.single(mod.setting.getValue('key.FILE_UPLOAD'))(req, null, (error) => {
      if (error instanceof multer.MulterError) {
        return resolve({ error: true, message: error.message })
      } if (error) {
        return resolve({ error: true, message: 'unkown error' })
      }

      return resolve({ error: false, message: 'success' })
    })
  })
  logger.debug('handleUploadFile', { uploadResult })

  if (!req.file) {
    return { error: 'no image' }
  }

  const filePath = mod.setting.getValue('user.UPLOAD_IMG_FILE_PATH')
  const formData = new FormData()
  formData.append('file', Readable.from(req.file.buffer), { filename: filePath })

  const fileAddResponse = await mod.output.fileAddRequest(argNamed({
    param: { accessToken, formData },
    xdevkitSetting: mod.setting.xdevkitSetting.getList('api.API_VERSION', 'env.API_SERVER_ORIGIN', 'env.CLIENT_ID'),
    lib: [mod.lib.postFormRequest],
  }))
  const fileAddResponseJson = JSON.parse(fileAddResponse)
  logger.debug('handleUploadFile', { fileAddResponseJson })

  const { requestId } = fileAddResponseJson.result
  const handleResult = { response: { status: mod.setting.browserServerSetting.getValue('statusList.OK'), requestId } }
  return handleResult
}

const handleLookupResponseList = async ({ accessToken, requestIdListStr }) => {
  const responseListResponse = await mod.input.lookupResponseListRequest(argNamed({
    param: { accessToken, requestIdListStr },
    xdevkitSetting: mod.setting.xdevkitSetting.getList('api.API_VERSION', 'env.API_SERVER_ORIGIN', 'env.CLIENT_ID'),
    lib: [mod.lib.getRequest],
  }))

  console.log({ responseListResponse })

  if (!responseListResponse || !responseListResponse.data) {
    const status = mod.setting.browserServerSetting.getValue('statusList.INVALID_SESSION')
    const result = {}
    const handleResult = { response: { status, result } }
    return handleResult
  }

  const { result } = responseListResponse.data
  const status = mod.setting.browserServerSetting.getValue('statusList.OK')

  const handleResult = { response: { status, result } }
  return handleResult
}


const createResponse = ({ req, res, handleResult }) => {
  logger.debug('createResponse', { 'req.url': req.url, handleResult })
  // req.session.auth = handleResult.session

  const ERROR_PAGE = mod.setting.xdevkitSetting.getValue('url.ERROR_PAGE')
  const { redirect } = handleResult

  if (handleResult.response) {
    const json = handleResult.response
    return mod.output.endResponse({ res, json, ERROR_PAGE })
  }

  if (req.method === 'GET') {
    if (handleResult.redirect) {
      return mod.output.endResponse({ res, redirect: handleResult.redirect, ERROR_PAGE })
    }

    return mod.output.endResponse({ res, redirect: ERROR_PAGE, ERROR_PAGE })
  }

  if (redirect) {
    const json = { redirect }
    return mod.output.endResponse({ res, json, ERROR_PAGE })
  }

  const json = { redirect: ERROR_PAGE }
  return mod.output.endResponse({ res, json, ERROR_PAGE })
}

const handleInvalidSession = ({ req, res }) => {
  if (!req.session || !req.session.auth) {
    const status = mod.setting.browserServerSetting.getValue('statusList.INVALID_SESSION')
    return res.json({ status })
  }

  return null
}

export default {
  init,

  handleSplitPermissionList,

  handleUploadFile,
  handleLookupResponseList,

  createResponse,
  handleInvalidSession,
}

