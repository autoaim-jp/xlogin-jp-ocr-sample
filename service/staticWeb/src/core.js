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

  const filePath = mod.setting.getValue('user.PROFILE_FILE_PATH_WITHOUT_EXT')
  const formData = new FormData()
  formData.append('filePath', filePath)
  formData.append('owner', mod.setting.getValue('env.CLIENT_ID'))
  formData.append('file', Readable.from(req.file.buffer), { filename: filePath })

  const fileAddResponse = await mod.output.fileAddRequest(argNamed({
    param: { accessToken, formData },
    xdevkitSetting: mod.setting.xdevkitSetting.getList('api.API_VERSION', 'env.API_SERVER_ORIGIN', 'env.CLIENT_ID'),
    lib: [mod.lib.postFormRequest],
  }))
  logger.debug('handleUploadFile', { fileAddResponse })

  const handleResult = { response: { status: mod.setting.browserServerSetting.getValue('statusList.OK') } }
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

  createResponse,
  handleInvalidSession,
}

