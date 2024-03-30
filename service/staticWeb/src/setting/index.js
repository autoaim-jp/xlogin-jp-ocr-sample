/* /setting/index.js */
import xdevkitSetting from './xdevkitSetting.js'
import browserServerSetting from './browserServerSetting.js'

const setting = {}

setting.server = {}
setting.server.PUBLIC_BUILD_DIR = 'view/build'
setting.server.PUBLIC_STATIC_DIR = 'view/static'

setting.key = {}
setting.key.FILE_UPLOAD = 'file'

setting.user = {}
setting.user.UPLOAD_IMG_FILE_PATH = '/upload.img'

setting.xdevkitSetting = xdevkitSetting
setting.browserServerSetting = browserServerSetting

const init = (env) => {
  xdevkitSetting.init(env)

  setting.env = {}
  setting.env.CLIENT_ID = env.CLIENT_ID
  setting.env.SERVER_ORIGIN = env.SERVER_ORIGIN
  setting.env.SESSION_SECRET = env.SESSION_SECRET
  setting.env.TLS_KEY_PATH = env.TLS_KEY_PATH
  setting.env.TLS_CERT_PATH = env.TLS_CERT_PATH
  setting.env.SERVER_PORT = env.SERVER_PORT
}

const getList = (...keyList) => {
  /* eslint-disable no-param-reassign */
  const constantList = keyList.reduce((prev, key) => {
    let value = setting
    for (const keySplit of key.split('.')) {
      value = value[keySplit]
    }
    prev[key.slice(key.lastIndexOf('.') + 1)] = value
    return prev
  }, {})
  for (const key of keyList) {
    if (constantList[key.slice(key.lastIndexOf('.') + 1)] === undefined) {
      throw new Error(`[error] undefined setting constant: ${key}`)
    }
  }
  return constantList
}


const getValue = (key) => {
  let value = setting
  for (const keySplit of key.split('.')) {
    value = value[keySplit]
  }
  return value
}


export default {
  init,
  getList,
  getValue,
  xdevkitSetting,
  browserServerSetting,
}

