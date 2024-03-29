/* mypage/app.js */
import setting from '../_setting/index.js'
import * as lib from '../_lib/index.js'

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
  }))

  a.output.setOnSubmitUploadForm(argNamed({
    onSubmit: { onSubmitUploadForm },
  }))
}

const loadPermission = async () => {
  const splitPermissionListResult = await a.lib.common.input.fetchSplitPermissionList(a.setting.browserServerSetting.getValue('apiEndpoint'))
  a.output.showUploadForm(argNamed({
    param: { splitPermissionListResult },
  }))

  a.lib.xdevkit.output.reloadXloginLoginBtn(splitPermissionListResult?.result?.clientId)
}

const main = async () => {
  a.lib.xdevkit.output.switchLoading(true)
  a.lib.common.output.setOnClickNavManu()
  a.lib.monkeyPatch()

  a.app.loadUploadForm()

  a.app.loadPermission()

  setTimeout(() => {
    a.lib.xdevkit.output.switchLoading(false)
  }, 300)
}

a.app = {
  main,
  loadUploadForm,
  loadPermission,
}

a.app.main()

