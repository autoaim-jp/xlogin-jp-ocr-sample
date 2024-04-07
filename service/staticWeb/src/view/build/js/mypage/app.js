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

const main = async () => {
  a.lib.xdevkit.output.switchLoading(true)
  a.lib.monkeyPatch()

  const WAIT_FOR_LIST = ['upload3.ejs', 'nav-sidemenu-list.ejs', 'nav2.ejs']
  const waitMap = {}
  WAIT_FOR_LIST.forEach((component) => {
    waitMap[component] = false
  })

  window.addEventListener('ace-init', (event) => {
    console.log(`initialized: ${event.detail.from}`)
    waitMap[event.detail.from] = true
    if (Object.values(waitMap).every((done) => { return done })) {
      a.lib.xdevkit.output.switchLoading(false)
    }
  })
}

a.app = {
  main,
}

a.app.main()
window.a = a

