/* mypage/app.js */
import setting from '../_setting/index.js'
import * as lib from '../_lib/index.js'
import * as _aline from '../_lib/_alpinejs/dist/cdn.min.js'

import * as core from './core.js'
import * as input from './input.js'
import * as action from './action.js'
import * as output from './output.js'

const asocial = {}
asocial.setting = setting
asocial.output = output
asocial.core = core
asocial.input = input
asocial.action = action
asocial.lib = lib

/* a is an alias of asocial */
const a = asocial

const loadUploadForm = () => {
  const uploadFile = a.output.getUploadFile(argNamed({
    browserServerSetting: a.setting.browserServerSetting.getList('apiEndpoint'),
    lib: [a.lib.common.output.postFormRequest],
  }))

  const onSubmitUploadForm = a.action.getOnSubmitUploadForm(argNamed({
    output: { uploadFile },
    core: [a.core.registerRequestId],
  }))

  a.output.setOnSubmitUploadForm(argNamed({
    onSubmit: { onSubmitUploadForm },
  }))
}

const startResponseLoader = async () => {
  const fetchResponseList = a.input.getFetchResponseList(argNamed({
    browserServerSetting: a.setting.browserServerSetting.getList('apiEndpoint'),
    lib: [a.lib.common.input.getRequest],
  }))

  await a.core.lookupResponse(argNamed({
    param: { fetchResponseList },
    output: [a.output.showOcrResult],
  }))

  setInterval(async () => {
    await a.core.lookupResponse(argNamed({
      param: { fetchResponseList },
      output: [a.output.showOcrResult],
    }))
  }, 2 * 1000)
}

const main = async () => {
  a.lib.xdevkit.output.switchLoading(true)
  // a.lib.common.output.setOnClickNavManu()
  a.lib.monkeyPatch()

  a.app.loadUploadForm()

  a.app.startResponseLoader()
  setTimeout(() => {
    a.lib.xdevkit.output.switchLoading(false)
  }, 300)
}

a.app = {
  main,
  loadUploadForm,
  startResponseLoader,
}

a.app.main()
window.a = a

