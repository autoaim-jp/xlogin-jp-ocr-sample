const __create = Object.create
const __defProp = Object.defineProperty
const __getOwnPropDesc = Object.getOwnPropertyDescriptor
const __getOwnPropNames = Object.getOwnPropertyNames
const __getProtoOf = Object.getPrototypeOf
const __hasOwnProp = Object.prototype.hasOwnProperty
const __commonJS = (cb, mod) => {
  return function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports
  }
}
const __export = (target, all) => {
  for (const name in all) __defProp(target, name, { get: all[name], enumerable: true })
}
const __copyProps = (to, from, except, desc) => {
  if (from && typeof from === 'object' || typeof from === 'function') {
    for (const key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, { get: () => { return from[key] }, enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable })
  }
  return to
}
const __toESM = (mod, isNodeMode, target) => {
  return (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', { value: mod, enumerable: true }) : target,
    mod,
  ))
}
const __toCommonJS = (mod) => { return __copyProps(__defProp({}, '__esModule', { value: true }), mod) }

// node_modules/@vue/shared/dist/shared.cjs.js
const require_shared_cjs = __commonJS({
  'node_modules/@vue/shared/dist/shared.cjs.js': function (exports) {
    Object.defineProperty(exports, '__esModule', { value: true })
    function makeMap(str, expectsLowerCase) {
      const map = /* @__PURE__ */ Object.create(null)
      const list = str.split(',')
      for (let i = 0; i < list.length; i++) {
        map[list[i]] = true
      }
      return expectsLowerCase ? (val) => { return !!map[val.toLowerCase()] } : (val) => { return !!map[val] }
    }
    const PatchFlagNames = {
      [
      1
      /* TEXT */
      ]: 'TEXT',
      [
      2
      /* CLASS */
      ]: 'CLASS',
      [
      4
      /* STYLE */
      ]: 'STYLE',
      [
      8
      /* PROPS */
      ]: 'PROPS',
      [
      16
      /* FULL_PROPS */
      ]: 'FULL_PROPS',
      [
      32
      /* HYDRATE_EVENTS */
      ]: 'HYDRATE_EVENTS',
      [
      64
      /* STABLE_FRAGMENT */
      ]: 'STABLE_FRAGMENT',
      [
      128
      /* KEYED_FRAGMENT */
      ]: 'KEYED_FRAGMENT',
      [
      256
      /* UNKEYED_FRAGMENT */
      ]: 'UNKEYED_FRAGMENT',
      [
      512
      /* NEED_PATCH */
      ]: 'NEED_PATCH',
      [
      1024
      /* DYNAMIC_SLOTS */
      ]: 'DYNAMIC_SLOTS',
      [
      2048
      /* DEV_ROOT_FRAGMENT */
      ]: 'DEV_ROOT_FRAGMENT',
      [
      -1
      /* HOISTED */
      ]: 'HOISTED',
      [
      -2
      /* BAIL */
      ]: 'BAIL',
    }
    const slotFlagsText = {
      [
      1
      /* STABLE */
      ]: 'STABLE',
      [
      2
      /* DYNAMIC */
      ]: 'DYNAMIC',
      [
      3
      /* FORWARDED */
      ]: 'FORWARDED',
    }
    const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'
    const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED)
    const range = 2
    function generateCodeFrame(source, start2 = 0, end = source.length) {
      let lines = source.split(/(\r?\n)/)
      const newlineSequences = lines.filter((_, idx) => { return idx % 2 === 1 })
      lines = lines.filter((_, idx) => { return idx % 2 === 0 })
      let count = 0
      const res = []
      for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0)
        if (count >= start2) {
          for (let j = i - range; j <= i + range || end > count; j++) {
            if (j < 0 || j >= lines.length) continue
            const line = j + 1
            res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`)
            const lineLength = lines[j].length
            const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0
            if (j === i) {
              const pad = start2 - (count - (lineLength + newLineSeqLength))
              const length = Math.max(1, end > count ? lineLength - pad : end - start2)
              res.push(`   |  ${' '.repeat(pad)}${'^'.repeat(length)}`)
            } else if (j > i) {
              if (end > count) {
                const length = Math.max(Math.min(end - count, lineLength), 1)
                res.push(`   |  ${'^'.repeat(length)}`)
              }
              count += lineLength + newLineSeqLength
            }
          }
          break
        }
      }
      return res.join('\n')
    }
    const specialBooleanAttrs = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly'
    const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs)
    const isBooleanAttr2 = /* @__PURE__ */ makeMap(`${specialBooleanAttrs},async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`)
    const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/
    const attrValidationCache = {}
    function isSSRSafeAttrName(name) {
      if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name]
      }
      const isUnsafe = unsafeAttrCharRE.test(name)
      if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`)
      }
      return attrValidationCache[name] = !isUnsafe
    }
    const propsToAttrMap = {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv',
    }
    const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap('animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width')
    const isKnownAttr = /* @__PURE__ */ makeMap('accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap')
    function normalizeStyle(value) {
      if (isArray(value)) {
        const res = {}
        for (let i = 0; i < value.length; i++) {
          const item = value[i]
          const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item)
          if (normalized) {
            for (const key in normalized) {
              res[key] = normalized[key]
            }
          }
        }
        return res
      } if (isObject(value)) {
        return value
      }
    }
    const listDelimiterRE = /;(?![^(]*\))/g
    const propertyDelimiterRE = /:(.+)/
    function parseStringStyle(cssText) {
      const ret = {}
      cssText.split(listDelimiterRE).forEach((item) => {
        if (item) {
          const tmp = item.split(propertyDelimiterRE)
          tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim())
        }
      })
      return ret
    }
    function stringifyStyle(styles) {
      let ret = ''
      if (!styles) {
        return ret
      }
      for (const key in styles) {
        const value = styles[key]
        const normalizedKey = key.startsWith('--') ? key : hyphenate(key)
        if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
          ret += `${normalizedKey}:${value};`
        }
      }
      return ret
    }
    function normalizeClass(value) {
      let res = ''
      if (isString(value)) {
        res = value
      } else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const normalized = normalizeClass(value[i])
          if (normalized) {
            res += `${normalized} `
          }
        }
      } else if (isObject(value)) {
        for (const name in value) {
          if (value[name]) {
            res += `${name} `
          }
        }
      }
      return res.trim()
    }
    const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot'
    const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view'
    const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr'
    const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS)
    const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS)
    const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS)
    const escapeRE = /["'&<>]/
    function escapeHtml(string) {
      const str = `${string}`
      const match = escapeRE.exec(str)
      if (!match) {
        return str
      }
      let html = ''
      let escaped
      let index
      let lastIndex = 0
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escaped = '&quot;'
            break
          case 38:
            escaped = '&amp;'
            break
          case 39:
            escaped = '&#39;'
            break
          case 60:
            escaped = '&lt;'
            break
          case 62:
            escaped = '&gt;'
            break
          default:
            continue
        }
        if (lastIndex !== index) {
          html += str.substring(lastIndex, index)
        }
        lastIndex = index + 1
        html += escaped
      }
      return lastIndex !== index ? html + str.substring(lastIndex, index) : html
    }
    const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g
    function escapeHtmlComment(src) {
      return src.replace(commentStripRE, '')
    }
    function looseCompareArrays(a, b) {
      if (a.length !== b.length) return false
      let equal = true
      for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i])
      }
      return equal
    }
    function looseEqual(a, b) {
      if (a === b) return true
      let aValidType = isDate(a)
      let bValidType = isDate(b)
      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false
      }
      aValidType = isArray(a)
      bValidType = isArray(b)
      if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false
      }
      aValidType = isObject(a)
      bValidType = isObject(b)
      if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
          return false
        }
        const aKeysCount = Object.keys(a).length
        const bKeysCount = Object.keys(b).length
        if (aKeysCount !== bKeysCount) {
          return false
        }
        for (const key in a) {
          const aHasKey = a.hasOwnProperty(key)
          const bHasKey = b.hasOwnProperty(key)
          if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
            return false
          }
        }
      }
      return String(a) === String(b)
    }
    function looseIndexOf(arr, val) {
      return arr.findIndex((item) => { return looseEqual(item, val) })
    }
    const toDisplayString = (val) => {
      return val == null ? '' : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val)
    }
    var replacer = (_key, val) => {
      if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
            entries[`${key} =>`] = val2
            return entries
          }, {}),
        }
      } if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()],
        }
      } if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val)
      }
      return val
    }
    const babelParserDefaultPlugins = [
      'bigInt',
      'optionalChaining',
      'nullishCoalescingOperator',
    ]
    const EMPTY_OBJ = Object.freeze({})
    const EMPTY_ARR = Object.freeze([])
    const NOOP = () => {
    }
    const NO = () => { return false }
    const onRE = /^on[^a-z]/
    const isOn = (key) => { return onRE.test(key) }
    const isModelListener = (key) => { return key.startsWith('onUpdate:') }
    const extend = Object.assign
    const remove = (arr, el) => {
      const i = arr.indexOf(el)
      if (i > -1) {
        arr.splice(i, 1)
      }
    }
    const { hasOwnProperty } = Object.prototype
    const hasOwn = (val, key) => { return hasOwnProperty.call(val, key) }
    var { isArray } = Array
    var isMap = (val) => { return toTypeString(val) === '[object Map]' }
    var isSet = (val) => { return toTypeString(val) === '[object Set]' }
    var isDate = (val) => { return val instanceof Date }
    const isFunction = (val) => { return typeof val === 'function' }
    var isString = (val) => { return typeof val === 'string' }
    const isSymbol = (val) => { return typeof val === 'symbol' }
    var isObject = (val) => { return val !== null && typeof val === 'object' }
    const isPromise = (val) => {
      return isObject(val) && isFunction(val.then) && isFunction(val.catch)
    }
    const objectToString = Object.prototype.toString
    var toTypeString = (value) => { return objectToString.call(value) }
    const toRawType = (value) => {
      return toTypeString(value).slice(8, -1)
    }
    var isPlainObject = (val) => { return toTypeString(val) === '[object Object]' }
    const isIntegerKey = (key) => { return isString(key) && key !== 'NaN' && key[0] !== '-' && `${parseInt(key, 10)}` === key }
    const isReservedProp = /* @__PURE__ */ makeMap(
      // the leading comma is intentional so empty string "" is also included
      ',key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
    )
    const cacheStringFunction = (fn) => {
      const cache = /* @__PURE__ */ Object.create(null)
      return (str) => {
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
      }
    }
    const camelizeRE = /-(\w)/g
    const camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c) => { return (c ? c.toUpperCase() : '') })
    })
    const hyphenateRE = /\B([A-Z])/g
    var hyphenate = cacheStringFunction((str) => { return str.replace(hyphenateRE, '-$1').toLowerCase() })
    const capitalize = cacheStringFunction((str) => { return str.charAt(0).toUpperCase() + str.slice(1) })
    const toHandlerKey = cacheStringFunction((str) => { return (str ? `on${capitalize(str)}` : '') })
    const hasChanged = (value, oldValue) => { return value !== oldValue && (value === value || oldValue === oldValue) }
    const invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](arg)
      }
    }
    const def = (obj, key, value) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value,
      })
    }
    const toNumber = (val) => {
      const n = parseFloat(val)
      return isNaN(n) ? val : n
    }
    let _globalThis
    const getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {})
    }
    exports.EMPTY_ARR = EMPTY_ARR
    exports.EMPTY_OBJ = EMPTY_OBJ
    exports.NO = NO
    exports.NOOP = NOOP
    exports.PatchFlagNames = PatchFlagNames
    exports.babelParserDefaultPlugins = babelParserDefaultPlugins
    exports.camelize = camelize
    exports.capitalize = capitalize
    exports.def = def
    exports.escapeHtml = escapeHtml
    exports.escapeHtmlComment = escapeHtmlComment
    exports.extend = extend
    exports.generateCodeFrame = generateCodeFrame
    exports.getGlobalThis = getGlobalThis
    exports.hasChanged = hasChanged
    exports.hasOwn = hasOwn
    exports.hyphenate = hyphenate
    exports.invokeArrayFns = invokeArrayFns
    exports.isArray = isArray
    exports.isBooleanAttr = isBooleanAttr2
    exports.isDate = isDate
    exports.isFunction = isFunction
    exports.isGloballyWhitelisted = isGloballyWhitelisted
    exports.isHTMLTag = isHTMLTag
    exports.isIntegerKey = isIntegerKey
    exports.isKnownAttr = isKnownAttr
    exports.isMap = isMap
    exports.isModelListener = isModelListener
    exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp
    exports.isObject = isObject
    exports.isOn = isOn
    exports.isPlainObject = isPlainObject
    exports.isPromise = isPromise
    exports.isReservedProp = isReservedProp
    exports.isSSRSafeAttrName = isSSRSafeAttrName
    exports.isSVGTag = isSVGTag
    exports.isSet = isSet
    exports.isSpecialBooleanAttr = isSpecialBooleanAttr
    exports.isString = isString
    exports.isSymbol = isSymbol
    exports.isVoidTag = isVoidTag
    exports.looseEqual = looseEqual
    exports.looseIndexOf = looseIndexOf
    exports.makeMap = makeMap
    exports.normalizeClass = normalizeClass
    exports.normalizeStyle = normalizeStyle
    exports.objectToString = objectToString
    exports.parseStringStyle = parseStringStyle
    exports.propsToAttrMap = propsToAttrMap
    exports.remove = remove
    exports.slotFlagsText = slotFlagsText
    exports.stringifyStyle = stringifyStyle
    exports.toDisplayString = toDisplayString
    exports.toHandlerKey = toHandlerKey
    exports.toNumber = toNumber
    exports.toRawType = toRawType
    exports.toTypeString = toTypeString
  },
})

// node_modules/@vue/shared/index.js
const require_shared = __commonJS({
  'node_modules/@vue/shared/index.js': function (exports, module2) {
    if (false) {
      module2.exports = null
    } else {
      module2.exports = require_shared_cjs()
    }
  },
})

// node_modules/@vue/reactivity/dist/reactivity.cjs.js
const require_reactivity_cjs = __commonJS({
  'node_modules/@vue/reactivity/dist/reactivity.cjs.js': function (exports) {
    Object.defineProperty(exports, '__esModule', { value: true })
    const shared = require_shared()
    const targetMap = /* @__PURE__ */ new WeakMap()
    const effectStack = []
    let activeEffect
    const ITERATE_KEY = Symbol('iterate')
    const MAP_KEY_ITERATE_KEY = Symbol('Map key iterate')
    function isEffect(fn) {
      return fn && fn._isEffect === true
    }
    function effect3(fn, options = shared.EMPTY_OBJ) {
      if (isEffect(fn)) {
        fn = fn.raw
      }
      const effect4 = createReactiveEffect(fn, options)
      if (!options.lazy) {
        effect4()
      }
      return effect4
    }
    function stop2(effect4) {
      if (effect4.active) {
        cleanup(effect4)
        if (effect4.options.onStop) {
          effect4.options.onStop()
        }
        effect4.active = false
      }
    }
    let uid = 0
    function createReactiveEffect(fn, options) {
      const effect4 = function reactiveEffect() {
        if (!effect4.active) {
          return fn()
        }
        if (!effectStack.includes(effect4)) {
          cleanup(effect4)
          try {
            enableTracking()
            effectStack.push(effect4)
            activeEffect = effect4
            return fn()
          } finally {
            effectStack.pop()
            resetTracking()
            activeEffect = effectStack[effectStack.length - 1]
          }
        }
      }
      effect4.id = uid++
      effect4.allowRecurse = !!options.allowRecurse
      effect4._isEffect = true
      effect4.active = true
      effect4.raw = fn
      effect4.deps = []
      effect4.options = options
      return effect4
    }
    function cleanup(effect4) {
      const { deps } = effect4
      if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
          deps[i].delete(effect4)
        }
        deps.length = 0
      }
    }
    let shouldTrack = true
    const trackStack = []
    function pauseTracking() {
      trackStack.push(shouldTrack)
      shouldTrack = false
    }
    function enableTracking() {
      trackStack.push(shouldTrack)
      shouldTrack = true
    }
    function resetTracking() {
      const last = trackStack.pop()
      shouldTrack = last === void 0 ? true : last
    }
    function track(target, type, key) {
      if (!shouldTrack || activeEffect === void 0) {
        return
      }
      let depsMap = targetMap.get(target)
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map())
      }
      let dep = depsMap.get(key)
      if (!dep) {
        depsMap.set(key, dep = /* @__PURE__ */ new Set())
      }
      if (!dep.has(activeEffect)) {
        dep.add(activeEffect)
        activeEffect.deps.push(dep)
        if (activeEffect.options.onTrack) {
          activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key,
          })
        }
      }
    }
    function trigger(target, type, key, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target)
      if (!depsMap) {
        return
      }
      const effects = /* @__PURE__ */ new Set()
      const add2 = (effectsToAdd) => {
        if (effectsToAdd) {
          effectsToAdd.forEach((effect4) => {
            if (effect4 !== activeEffect || effect4.allowRecurse) {
              effects.add(effect4)
            }
          })
        }
      }
      if (type === 'clear') {
        depsMap.forEach(add2)
      } else if (key === 'length' && shared.isArray(target)) {
        depsMap.forEach((dep, key2) => {
          if (key2 === 'length' || key2 >= newValue) {
            add2(dep)
          }
        })
      } else {
        if (key !== void 0) {
          add2(depsMap.get(key))
        }
        switch (type) {
          case 'add':
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY))
              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY))
              }
            } else if (shared.isIntegerKey(key)) {
              add2(depsMap.get('length'))
            }
            break
          case 'delete':
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY))
              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY))
              }
            }
            break
          case 'set':
            if (shared.isMap(target)) {
              add2(depsMap.get(ITERATE_KEY))
            }
            break
        }
      }
      const run = (effect4) => {
        if (effect4.options.onTrigger) {
          effect4.options.onTrigger({
            effect: effect4,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget,
          })
        }
        if (effect4.options.scheduler) {
          effect4.options.scheduler(effect4)
        } else {
          effect4()
        }
      }
      effects.forEach(run)
    }
    const isNonTrackableKeys = /* @__PURE__ */ shared.makeMap('__proto__,__v_isRef,__isVue')
    const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => { return Symbol[key] }).filter(shared.isSymbol))
    const get2 = /* @__PURE__ */ createGetter()
    const shallowGet = /* @__PURE__ */ createGetter(false, true)
    const readonlyGet = /* @__PURE__ */ createGetter(true)
    const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true)
    const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations()
    function createArrayInstrumentations() {
      const instrumentations = {}
;['includes', 'indexOf', 'lastIndexOf'].forEach((key) => {
        instrumentations[key] = function (...args) {
          const arr = toRaw2(this)
          for (let i = 0, l = this.length; i < l; i++) {
            track(arr, 'get', `${i}`)
          }
          const res = arr[key](...args)
          if (res === -1 || res === false) {
            return arr[key](...args.map(toRaw2))
          }
          return res
        }
      })
      ;['push', 'pop', 'shift', 'unshift', 'splice'].forEach((key) => {
        instrumentations[key] = function (...args) {
          pauseTracking()
          const res = toRaw2(this)[key].apply(this, args)
          resetTracking()
          return res
        }
      })
      return instrumentations
    }
    function createGetter(isReadonly2 = false, shallow = false) {
      return function get3(target, key, receiver) {
        if (key === '__v_isReactive') {
          return !isReadonly2
        } if (key === '__v_isReadonly') {
          return isReadonly2
        } if (key === '__v_raw' && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
          return target
        }
        const targetIsArray = shared.isArray(target)
        if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
          return Reflect.get(arrayInstrumentations, key, receiver)
        }
        const res = Reflect.get(target, key, receiver)
        if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
          return res
        }
        if (!isReadonly2) {
          track(target, 'get', key)
        }
        if (shallow) {
          return res
        }
        if (isRef(res)) {
          const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key)
          return shouldUnwrap ? res.value : res
        }
        if (shared.isObject(res)) {
          return isReadonly2 ? readonly(res) : reactive3(res)
        }
        return res
      }
    }
    const set2 = /* @__PURE__ */ createSetter()
    const shallowSet = /* @__PURE__ */ createSetter(true)
    function createSetter(shallow = false) {
      return function set3(target, key, value, receiver) {
        let oldValue = target[key]
        if (!shallow) {
          value = toRaw2(value)
          oldValue = toRaw2(oldValue)
          if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
            oldValue.value = value
            return true
          }
        }
        const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key)
        const result = Reflect.set(target, key, value, receiver)
        if (target === toRaw2(receiver)) {
          if (!hadKey) {
            trigger(target, 'add', key, value)
          } else if (shared.hasChanged(value, oldValue)) {
            trigger(target, 'set', key, value, oldValue)
          }
        }
        return result
      }
    }
    function deleteProperty(target, key) {
      const hadKey = shared.hasOwn(target, key)
      const oldValue = target[key]
      const result = Reflect.deleteProperty(target, key)
      if (result && hadKey) {
        trigger(target, 'delete', key, void 0, oldValue)
      }
      return result
    }
    function has(target, key) {
      const result = Reflect.has(target, key)
      if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, 'has', key)
      }
      return result
    }
    function ownKeys(target) {
      track(target, 'iterate', shared.isArray(target) ? 'length' : ITERATE_KEY)
      return Reflect.ownKeys(target)
    }
    const mutableHandlers = {
      get: get2,
      set: set2,
      deleteProperty,
      has,
      ownKeys,
    }
    const readonlyHandlers = {
      get: readonlyGet,
      set(target, key) {
        {
          console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target)
        }
        return true
      },
      deleteProperty(target, key) {
        {
          console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target)
        }
        return true
      },
    }
    const shallowReactiveHandlers = /* @__PURE__ */ shared.extend({}, mutableHandlers, {
      get: shallowGet,
      set: shallowSet,
    })
    const shallowReadonlyHandlers = /* @__PURE__ */ shared.extend({}, readonlyHandlers, {
      get: shallowReadonlyGet,
    })
    const toReactive = (value) => { return (shared.isObject(value) ? reactive3(value) : value) }
    const toReadonly = (value) => { return (shared.isObject(value) ? readonly(value) : value) }
    const toShallow = (value) => { return value }
    const getProto = (v) => { return Reflect.getPrototypeOf(v) }
    function get$1(target, key, isReadonly2 = false, isShallow = false) {
      target = target[
        '__v_raw'
        /* RAW */
      ]
      const rawTarget = toRaw2(target)
      const rawKey = toRaw2(key)
      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, 'get', key)
      }
      !isReadonly2 && track(rawTarget, 'get', rawKey)
      const { has: has2 } = getProto(rawTarget)
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive
      if (has2.call(rawTarget, key)) {
        return wrap(target.get(key))
      } if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey))
      } if (target !== rawTarget) {
        target.get(key)
      }
    }
    function has$1(key, isReadonly2 = false) {
      const target = this[
        '__v_raw'
        /* RAW */
      ]
      const rawTarget = toRaw2(target)
      const rawKey = toRaw2(key)
      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, 'has', key)
      }
      !isReadonly2 && track(rawTarget, 'has', rawKey)
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey)
    }
    function size(target, isReadonly2 = false) {
      target = target[
        '__v_raw'
        /* RAW */
      ]
      !isReadonly2 && track(toRaw2(target), 'iterate', ITERATE_KEY)
      return Reflect.get(target, 'size', target)
    }
    function add(value) {
      value = toRaw2(value)
      const target = toRaw2(this)
      const proto = getProto(target)
      const hadKey = proto.has.call(target, value)
      if (!hadKey) {
        target.add(value)
        trigger(target, 'add', value, value)
      }
      return this
    }
    function set$1(key, value) {
      value = toRaw2(value)
      const target = toRaw2(this)
      const { has: has2, get: get3 } = getProto(target)
      let hadKey = has2.call(target, key)
      if (!hadKey) {
        key = toRaw2(key)
        hadKey = has2.call(target, key)
      } else {
        checkIdentityKeys(target, has2, key)
      }
      const oldValue = get3.call(target, key)
      target.set(key, value)
      if (!hadKey) {
        trigger(target, 'add', key, value)
      } else if (shared.hasChanged(value, oldValue)) {
        trigger(target, 'set', key, value, oldValue)
      }
      return this
    }
    function deleteEntry(key) {
      const target = toRaw2(this)
      const { has: has2, get: get3 } = getProto(target)
      let hadKey = has2.call(target, key)
      if (!hadKey) {
        key = toRaw2(key)
        hadKey = has2.call(target, key)
      } else {
        checkIdentityKeys(target, has2, key)
      }
      const oldValue = get3 ? get3.call(target, key) : void 0
      const result = target.delete(key)
      if (hadKey) {
        trigger(target, 'delete', key, void 0, oldValue)
      }
      return result
    }
    function clear() {
      const target = toRaw2(this)
      const hadItems = target.size !== 0
      const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target)
      const result = target.clear()
      if (hadItems) {
        trigger(target, 'clear', void 0, void 0, oldTarget)
      }
      return result
    }
    function createForEach(isReadonly2, isShallow) {
      return function forEach(callback, thisArg) {
        const observed = this
        const target = observed[
          '__v_raw'
          /* RAW */
        ]
        const rawTarget = toRaw2(target)
        const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive
        !isReadonly2 && track(rawTarget, 'iterate', ITERATE_KEY)
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed)
        })
      }
    }
    function createIterableMethod(method, isReadonly2, isShallow) {
      return function (...args) {
        const target = this[
          '__v_raw'
          /* RAW */
        ]
        const rawTarget = toRaw2(target)
        const targetIsMap = shared.isMap(rawTarget)
        const isPair = method === 'entries' || method === Symbol.iterator && targetIsMap
        const isKeyOnly = method === 'keys' && targetIsMap
        const innerIterator = target[method](...args)
        const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive
        !isReadonly2 && track(rawTarget, 'iterate', isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY)
        return {
          // iterator protocol
          next() {
            const { value, done } = innerIterator.next()
            return done ? { value, done } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done,
            }
          },
          // iterable protocol
          [Symbol.iterator]() {
            return this
          },
        }
      }
    }
    function createReadonlyMethod(type) {
      return function (...args) {
        {
          const key = args[0] ? `on key "${args[0]}" ` : ''
          console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this))
        }
        return type === 'delete' ? false : this
      }
    }
    function createInstrumentations() {
      const mutableInstrumentations2 = {
        get(key) {
          return get$1(this, key)
        },
        get size() {
          return size(this)
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false),
      }
      const shallowInstrumentations2 = {
        get(key) {
          return get$1(this, key, false, true)
        },
        get size() {
          return size(this)
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true),
      }
      const readonlyInstrumentations2 = {
        get(key) {
          return get$1(this, key, true)
        },
        get size() {
          return size(this, true)
        },
        has(key) {
          return has$1.call(this, key, true)
        },
        add: createReadonlyMethod(
          'add',
          /* ADD */
        ),
        set: createReadonlyMethod(
          'set',
          /* SET */
        ),
        delete: createReadonlyMethod(
          'delete',
          /* DELETE */
        ),
        clear: createReadonlyMethod(
          'clear',
          /* CLEAR */
        ),
        forEach: createForEach(true, false),
      }
      const shallowReadonlyInstrumentations2 = {
        get(key) {
          return get$1(this, key, true, true)
        },
        get size() {
          return size(this, true)
        },
        has(key) {
          return has$1.call(this, key, true)
        },
        add: createReadonlyMethod(
          'add',
          /* ADD */
        ),
        set: createReadonlyMethod(
          'set',
          /* SET */
        ),
        delete: createReadonlyMethod(
          'delete',
          /* DELETE */
        ),
        clear: createReadonlyMethod(
          'clear',
          /* CLEAR */
        ),
        forEach: createForEach(true, true),
      }
      const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator]
      iteratorMethods.forEach((method) => {
        mutableInstrumentations2[method] = createIterableMethod(method, false, false)
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false)
        shallowInstrumentations2[method] = createIterableMethod(method, false, true)
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true)
      })
      return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2,
      ]
    }
    const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations()
    function createInstrumentationGetter(isReadonly2, shallow) {
      const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations
      return (target, key, receiver) => {
        if (key === '__v_isReactive') {
          return !isReadonly2
        } if (key === '__v_isReadonly') {
          return isReadonly2
        } if (key === '__v_raw') {
          return target
        }
        return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver)
      }
    }
    const mutableCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, false),
    }
    const shallowCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, true),
    }
    const readonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, false),
    }
    const shallowReadonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, true),
    }
    function checkIdentityKeys(target, has2, key) {
      const rawKey = toRaw2(key)
      if (rawKey !== key && has2.call(target, rawKey)) {
        const type = shared.toRawType(target)
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === 'Map' ? ' as keys' : ''}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
      }
    }
    var reactiveMap = /* @__PURE__ */ new WeakMap()
    var shallowReactiveMap = /* @__PURE__ */ new WeakMap()
    var readonlyMap = /* @__PURE__ */ new WeakMap()
    var shallowReadonlyMap = /* @__PURE__ */ new WeakMap()
    function targetTypeMap(rawType) {
      switch (rawType) {
        case 'Object':
        case 'Array':
          return 1
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
          return 2
        default:
          return 0
      }
    }
    function getTargetType(value) {
      return value[
        '__v_skip'
        /* SKIP */
      ] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value))
    }
    function reactive3(target) {
      if (target && target[
        '__v_isReadonly'
        /* IS_READONLY */
      ]) {
        return target
      }
      return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap)
    }
    function shallowReactive(target) {
      return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap)
    }
    function readonly(target) {
      return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap)
    }
    function shallowReadonly(target) {
      return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap)
    }
    function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
      if (!shared.isObject(target)) {
        {
          console.warn(`value cannot be made reactive: ${String(target)}`)
        }
        return target
      }
      if (target[
        '__v_raw'
        /* RAW */
      ] && !(isReadonly2 && target[
        '__v_isReactive'
        /* IS_REACTIVE */
      ])) {
        return target
      }
      const existingProxy = proxyMap.get(target)
      if (existingProxy) {
        return existingProxy
      }
      const targetType = getTargetType(target)
      if (targetType === 0) {
        return target
      }
      const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers)
      proxyMap.set(target, proxy)
      return proxy
    }
    function isReactive2(value) {
      if (isReadonly(value)) {
        return isReactive2(value[
          '__v_raw'
          /* RAW */
        ])
      }
      return !!(value && value[
        '__v_isReactive'
        /* IS_REACTIVE */
      ])
    }
    function isReadonly(value) {
      return !!(value && value[
        '__v_isReadonly'
        /* IS_READONLY */
      ])
    }
    function isProxy(value) {
      return isReactive2(value) || isReadonly(value)
    }
    function toRaw2(observed) {
      return observed && toRaw2(observed[
        '__v_raw'
        /* RAW */
      ]) || observed
    }
    function markRaw(value) {
      shared.def(value, '__v_skip', true)
      return value
    }
    const convert = (val) => { return (shared.isObject(val) ? reactive3(val) : val) }
    function isRef(r) {
      return Boolean(r && r.__v_isRef === true)
    }
    function ref(value) {
      return createRef(value)
    }
    function shallowRef(value) {
      return createRef(value, true)
    }
    const RefImpl = class {
      constructor(value, _shallow = false) {
        this._shallow = _shallow
        this.__v_isRef = true
        this._rawValue = _shallow ? value : toRaw2(value)
        this._value = _shallow ? value : convert(value)
      }

      get value() {
        track(toRaw2(this), 'get', 'value')
        return this._value
      }

      set value(newVal) {
        newVal = this._shallow ? newVal : toRaw2(newVal)
        if (shared.hasChanged(newVal, this._rawValue)) {
          this._rawValue = newVal
          this._value = this._shallow ? newVal : convert(newVal)
          trigger(toRaw2(this), 'set', 'value', newVal)
        }
      }
    }
    function createRef(rawValue, shallow = false) {
      if (isRef(rawValue)) {
        return rawValue
      }
      return new RefImpl(rawValue, shallow)
    }
    function triggerRef(ref2) {
      trigger(toRaw2(ref2), 'set', 'value', ref2.value)
    }
    function unref(ref2) {
      return isRef(ref2) ? ref2.value : ref2
    }
    const shallowUnwrapHandlers = {
      get: (target, key, receiver) => { return unref(Reflect.get(target, key, receiver)) },
      set: (target, key, value, receiver) => {
        const oldValue = target[key]
        if (isRef(oldValue) && !isRef(value)) {
          oldValue.value = value
          return true
        }
        return Reflect.set(target, key, value, receiver)
      },
    }
    function proxyRefs(objectWithRefs) {
      return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers)
    }
    const CustomRefImpl = class {
      constructor(factory) {
        this.__v_isRef = true
        const { get: get3, set: set3 } = factory(() => { return track(this, 'get', 'value') }, () => { return trigger(this, 'set', 'value') })
        this._get = get3
        this._set = set3
      }

      get value() {
        return this._get()
      }

      set value(newVal) {
        this._set(newVal)
      }
    }
    function customRef(factory) {
      return new CustomRefImpl(factory)
    }
    function toRefs(object) {
      if (!isProxy(object)) {
        console.warn('toRefs() expects a reactive object but received a plain one.')
      }
      const ret = shared.isArray(object) ? new Array(object.length) : {}
      for (const key in object) {
        ret[key] = toRef(object, key)
      }
      return ret
    }
    const ObjectRefImpl = class {
      constructor(_object, _key) {
        this._object = _object
        this._key = _key
        this.__v_isRef = true
      }

      get value() {
        return this._object[this._key]
      }

      set value(newVal) {
        this._object[this._key] = newVal
      }
    }
    function toRef(object, key) {
      return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key)
    }
    const ComputedRefImpl = class {
      constructor(getter, _setter, isReadonly2) {
        this._setter = _setter
        this._dirty = true
        this.__v_isRef = true
        this.effect = effect3(getter, {
          lazy: true,
          scheduler: () => {
            if (!this._dirty) {
              this._dirty = true
              trigger(toRaw2(this), 'set', 'value')
            }
          },
        })
        this[
          '__v_isReadonly'
          /* IS_READONLY */
        ] = isReadonly2
      }

      get value() {
        const self2 = toRaw2(this)
        if (self2._dirty) {
          self2._value = this.effect()
          self2._dirty = false
        }
        track(self2, 'get', 'value')
        return self2._value
      }

      set value(newValue) {
        this._setter(newValue)
      }
    }
    function computed(getterOrOptions) {
      let getter
      let setter
      if (shared.isFunction(getterOrOptions)) {
        getter = getterOrOptions
        setter = () => {
          console.warn('Write operation failed: computed value is readonly')
        }
      } else {
        getter = getterOrOptions.get
        setter = getterOrOptions.set
      }
      return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set)
    }
    exports.ITERATE_KEY = ITERATE_KEY
    exports.computed = computed
    exports.customRef = customRef
    exports.effect = effect3
    exports.enableTracking = enableTracking
    exports.isProxy = isProxy
    exports.isReactive = isReactive2
    exports.isReadonly = isReadonly
    exports.isRef = isRef
    exports.markRaw = markRaw
    exports.pauseTracking = pauseTracking
    exports.proxyRefs = proxyRefs
    exports.reactive = reactive3
    exports.readonly = readonly
    exports.ref = ref
    exports.resetTracking = resetTracking
    exports.shallowReactive = shallowReactive
    exports.shallowReadonly = shallowReadonly
    exports.shallowRef = shallowRef
    exports.stop = stop2
    exports.toRaw = toRaw2
    exports.toRef = toRef
    exports.toRefs = toRefs
    exports.track = track
    exports.trigger = trigger
    exports.triggerRef = triggerRef
    exports.unref = unref
  },
})

// node_modules/@vue/reactivity/index.js
const require_reactivity = __commonJS({
  'node_modules/@vue/reactivity/index.js': function (exports, module2) {
    if (false) {
      module2.exports = null
    } else {
      module2.exports = require_reactivity_cjs()
    }
  },
})

// packages/alpinejs/builds/module.js
const module_exports = {}
__export(module_exports, {
  Alpine: () => { return src_default },
  default: () => { return module_default },
})
module.exports = __toCommonJS(module_exports)

// packages/alpinejs/src/scheduler.js
let flushPending = false
let flushing = false
const queue = []
let lastFlushedIndex = -1
function scheduler(callback) {
  queueJob(callback)
}
function queueJob(job) {
  if (!queue.includes(job)) queue.push(job)
  queueFlush()
}
function dequeueJob(job) {
  const index = queue.indexOf(job)
  if (index !== -1 && index > lastFlushedIndex) queue.splice(index, 1)
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true
    queueMicrotask(flushJobs)
  }
}
function flushJobs() {
  flushPending = false
  flushing = true
  for (let i = 0; i < queue.length; i++) {
    queue[i]()
    lastFlushedIndex = i
  }
  queue.length = 0
  lastFlushedIndex = -1
  flushing = false
}

// packages/alpinejs/src/reactivity.js
let reactive
let effect
let release
let raw
let shouldSchedule = true
function disableEffectScheduling(callback) {
  shouldSchedule = false
  callback()
  shouldSchedule = true
}
function setReactivityEngine(engine) {
  reactive = engine.reactive
  release = engine.release
  effect = (callback) => {
    return engine.effect(callback, {
      scheduler: (task) => {
        if (shouldSchedule) {
          scheduler(task)
        } else {
          task()
        }
      },
    })
  }
  raw = engine.raw
}
function overrideEffect(override) {
  effect = override
}
function elementBoundEffect(el) {
  let cleanup = () => {
  }
  const wrappedEffect = (callback) => {
    const effectReference = effect(callback)
    if (!el._x_effects) {
      el._x_effects = /* @__PURE__ */ new Set()
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => { return i() })
      }
    }
    el._x_effects.add(effectReference)
    cleanup = () => {
      if (effectReference === void 0) return
      el._x_effects.delete(effectReference)
      release(effectReference)
    }
    return effectReference
  }
  return [wrappedEffect, () => {
    cleanup()
  }]
}
function watch(getter, callback) {
  let firstTime = true
  let oldValue
  const effectReference = effect(() => {
    const value = getter()
    JSON.stringify(value)
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue)
        oldValue = value
      })
    } else {
      oldValue = value
    }
    firstTime = false
  })
  return () => { return release(effectReference) }
}

// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(
    new CustomEvent(name, {
      detail,
      bubbles: true,
      // Allows events to pass the shadow DOM barrier.
      composed: true,
      cancelable: true,
    }),
  )
}

// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
  if (typeof ShadowRoot === 'function' && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => { return walk(el2, callback) })
    return
  }
  let skip = false
  callback(el, () => { return skip = true })
  if (skip) return
  let node = el.firstElementChild
  while (node) {
    walk(node, callback, false)
    node = node.nextElementSibling
  }
}

// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args)
}

// packages/alpinejs/src/lifecycle.js
let started = false
function start() {
  if (started) warn('Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.')
  started = true
  if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?")
  dispatch(document, 'alpine:init')
  dispatch(document, 'alpine:initializing')
  startObservingMutations()
  onElAdded((el) => { return initTree(el, walk) })
  onElRemoved((el) => { return destroyTree(el) })
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => { return handle() })
  })
  const outNestedComponents = (el) => { return !closestRoot(el.parentElement, true) }
  Array.from(document.querySelectorAll(allSelectors().join(','))).filter(outNestedComponents).forEach((el) => {
    initTree(el)
  })
  dispatch(document, 'alpine:initialized')
}
const rootSelectorCallbacks = []
const initSelectorCallbacks = []
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => { return fn() })
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => { return fn() })
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback)
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback)
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors()
    if (selectors.some((selector) => { return element.matches(selector) })) return true
  })
}
function findClosest(el, callback) {
  if (!el) return
  if (callback(el)) return el
  if (el._x_teleportBack) el = el._x_teleportBack
  if (!el.parentElement) return
  return findClosest(el.parentElement, callback)
}
function isRoot(el) {
  return rootSelectors().some((selector) => { return el.matches(selector) })
}
const initInterceptors = []
function interceptInit(callback) {
  initInterceptors.push(callback)
}
function initTree(el, walker = walk, intercept = () => {
}) {
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      intercept(el2, skip)
      initInterceptors.forEach((i) => { return i(el2, skip) })
      directives(el2, el2.attributes).forEach((handle) => { return handle() })
      el2._x_ignore && skip()
    })
  })
}
function destroyTree(root, walker = walk) {
  walker(root, (el) => {
    cleanupAttributes(el)
    cleanupElement(el)
  })
}

// packages/alpinejs/src/mutation.js
const onAttributeAddeds = []
const onElRemoveds = []
const onElAddeds = []
function onElAdded(callback) {
  onElAddeds.push(callback)
}
function onElRemoved(el, callback) {
  if (typeof callback === 'function') {
    if (!el._x_cleanups) el._x_cleanups = []
    el._x_cleanups.push(callback)
  } else {
    callback = el
    onElRemoveds.push(callback)
  }
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback)
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups) el._x_attributeCleanups = {}
  if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = []
  el._x_attributeCleanups[name].push(callback)
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups) return
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => { return i() })
      delete el._x_attributeCleanups[name]
    }
  })
}
function cleanupElement(el) {
  if (el._x_cleanups) {
    while (el._x_cleanups.length) el._x_cleanups.pop()()
  }
}
const observer = new MutationObserver(onMutate)
let currentlyObserving = false
function startObservingMutations() {
  observer.observe(document, {
    subtree: true, childList: true, attributes: true, attributeOldValue: true,
  })
  currentlyObserving = true
}
function stopObservingMutations() {
  flushObserver()
  observer.disconnect()
  currentlyObserving = false
}
const queuedMutations = []
function flushObserver() {
  const records = observer.takeRecords()
  queuedMutations.push(() => { return records.length > 0 && onMutate(records) })
  const queueLengthWhenTriggered = queuedMutations.length
  queueMicrotask(() => {
    if (queuedMutations.length === queueLengthWhenTriggered) {
      while (queuedMutations.length > 0) queuedMutations.shift()()
    }
  })
}
function mutateDom(callback) {
  if (!currentlyObserving) return callback()
  stopObservingMutations()
  const result = callback()
  startObservingMutations()
  return result
}
let isCollecting = false
let deferredMutations = []
function deferMutations() {
  isCollecting = true
}
function flushAndStopDeferringMutations() {
  isCollecting = false
  onMutate(deferredMutations)
  deferredMutations = []
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations)
    return
  }
  let addedNodes = /* @__PURE__ */ new Set()
  let removedNodes = /* @__PURE__ */ new Set()
  let addedAttributes = /* @__PURE__ */ new Map()
  let removedAttributes = /* @__PURE__ */ new Map()
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver) continue
    if (mutations[i].type === 'childList') {
      mutations[i].addedNodes.forEach((node) => { return node.nodeType === 1 && addedNodes.add(node) })
      mutations[i].removedNodes.forEach((node) => { return node.nodeType === 1 && removedNodes.add(node) })
    }
    if (mutations[i].type === 'attributes') {
      const el = mutations[i].target
      const name = mutations[i].attributeName
      const { oldValue } = mutations[i]
      const add = () => {
        if (!addedAttributes.has(el)) addedAttributes.set(el, [])
        addedAttributes.get(el).push({ name, value: el.getAttribute(name) })
      }
      const remove = () => {
        if (!removedAttributes.has(el)) removedAttributes.set(el, [])
        removedAttributes.get(el).push(name)
      }
      if (el.hasAttribute(name) && oldValue === null) {
        add()
      } else if (el.hasAttribute(name)) {
        remove()
        add()
      } else {
        remove()
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs)
  })
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => { return i(el, attrs) })
  })
  for (const node of removedNodes) {
    if (addedNodes.has(node)) continue
    onElRemoveds.forEach((i) => { return i(node) })
    destroyTree(node)
  }
  addedNodes.forEach((node) => {
    node._x_ignoreSelf = true
    node._x_ignore = true
  })
  for (const node of addedNodes) {
    if (removedNodes.has(node)) continue
    if (!node.isConnected) continue
    delete node._x_ignoreSelf
    delete node._x_ignore
    onElAddeds.forEach((i) => { return i(node) })
    node._x_ignore = true
    node._x_ignoreSelf = true
  }
  addedNodes.forEach((node) => {
    delete node._x_ignoreSelf
    delete node._x_ignore
  })
  addedNodes = null
  removedNodes = null
  addedAttributes = null
  removedAttributes = null
}

// packages/alpinejs/src/scope.js
function scope(node) {
  return mergeProxies(closestDataStack(node))
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)]
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => { return i !== data2 })
  }
}
function closestDataStack(node) {
  if (node._x_dataStack) return node._x_dataStack
  if (typeof ShadowRoot === 'function' && node instanceof ShadowRoot) {
    return closestDataStack(node.host)
  }
  if (!node.parentNode) {
    return []
  }
  return closestDataStack(node.parentNode)
}
function mergeProxies(objects) {
  return new Proxy({ objects }, mergeProxyTrap)
}
var mergeProxyTrap = {
  ownKeys({ objects }) {
    return Array.from(
      new Set(objects.flatMap((i) => { return Object.keys(i) })),
    )
  },
  has({ objects }, name) {
    if (name == Symbol.unscopables) return false
    return objects.some(
      (obj) => { return Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name) },
    )
  },
  get({ objects }, name, thisProxy) {
    if (name == 'toJSON') return collapseProxies
    return Reflect.get(
      objects.find(
        (obj) => { return Reflect.has(obj, name) },
      ) || {},
      name,
      thisProxy,
    )
  },
  set({ objects }, name, value, thisProxy) {
    const target = objects.find(
      (obj) => { return Object.prototype.hasOwnProperty.call(obj, name) },
    ) || objects[objects.length - 1]
    const descriptor = Object.getOwnPropertyDescriptor(target, name)
    if ((descriptor == null ? void 0 : descriptor.set) && (descriptor == null ? void 0 : descriptor.get)) return Reflect.set(target, name, value, thisProxy)
    return Reflect.set(target, name, value)
  },
}
function collapseProxies() {
  const keys = Reflect.ownKeys(this)
  return keys.reduce((acc, key) => {
    acc[key] = Reflect.get(this, key)
    return acc
  }, {})
}

// packages/alpinejs/src/interceptor.js
function initInterceptors2(data2) {
  const isObject = (val) => { return typeof val === 'object' && !Array.isArray(val) && val !== null }
  const recurse = (obj, basePath = '') => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
      if (enumerable === false || value === void 0) return
      if (typeof value === 'object' && value !== null && value.__v_skip) return
      const path = basePath === '' ? key : `${basePath}.${key}`
      if (typeof value === 'object' && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key)
      } else if (isObject(value) && value !== obj && !(value instanceof Element)) {
        recurse(value, path)
      }
    })
  }
  return recurse(data2)
}
function interceptor(callback, mutateObj = () => {
}) {
  const obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => { return get(data2, path) }, (value) => { return set(data2, path, value) }, path, key)
    },
  }
  mutateObj(obj)
  return (initialValue) => {
    if (typeof initialValue === 'object' && initialValue !== null && initialValue._x_interceptor) {
      const initialize = obj.initialize.bind(obj)
      obj.initialize = (data2, path, key) => {
        const innerValue = initialValue.initialize(data2, path, key)
        obj.initialValue = innerValue
        return initialize(data2, path, key)
      }
    } else {
      obj.initialValue = initialValue
    }
    return obj
  }
}
function get(obj, path) {
  return path.split('.').reduce((carry, segment) => { return carry[segment] }, obj)
}
function set(obj, path, value) {
  if (typeof path === 'string') path = path.split('.')
  if (path.length === 1) obj[path[0]] = value
  else if (path.length === 0) throw error
  else {
    if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value)

    obj[path[0]] = {}
    return set(obj[path[0]], path.slice(1), value)
  }
}

// packages/alpinejs/src/magics.js
const magics = {}
function magic(name, callback) {
  magics[name] = callback
}
function injectMagics(obj, el) {
  Object.entries(magics).forEach(([name, callback]) => {
    let memoizedUtilities = null
    function getUtilities() {
      if (memoizedUtilities) {
        return memoizedUtilities
      }
      const [utilities, cleanup] = getElementBoundUtilities(el)
      memoizedUtilities = { interceptor, ...utilities }
      onElRemoved(el, cleanup)
      return memoizedUtilities
    }
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, getUtilities())
      },
      enumerable: false,
    })
  })
  return obj
}

// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args)
  } catch (e) {
    handleError(e, el, expression)
  }
}
function handleError(error2, el, expression = void 0) {
  error2 = Object.assign(
    error2 != null ? error2 : { message: 'No error message given.' },
    { el, expression },
  )
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? `Expression: "${expression}"\n\n` : ''}`, el)
  setTimeout(() => {
    throw error2
  }, 0)
}

// packages/alpinejs/src/evaluator.js
let shouldAutoEvaluateFunctions = true
function dontAutoEvaluateFunctions(callback) {
  const cache = shouldAutoEvaluateFunctions
  shouldAutoEvaluateFunctions = false
  const result = callback()
  shouldAutoEvaluateFunctions = cache
  return result
}
function evaluate(el, expression, extras = {}) {
  let result
  evaluateLater(el, expression)((value) => { return result = value }, extras)
  return result
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args)
}
var theEvaluatorFunction = normalEvaluator
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator
}
function normalEvaluator(el, expression) {
  const overriddenMagics = {}
  injectMagics(overriddenMagics, el)
  const dataStack = [overriddenMagics, ...closestDataStack(el)]
  const evaluator = typeof expression === 'function' ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el)
  return tryCatch.bind(null, el, expression, evaluator)
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    const result = func.apply(mergeProxies([scope2, ...dataStack]), params)
    runIfTypeOfFunction(receiver, result)
  }
}
const evaluatorMemo = {}
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression]
  }
  const AsyncFunction = Object.getPrototypeOf(async () => {
  }).constructor
  const rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression
  const safeAsyncFunction = () => {
    try {
      const func2 = new AsyncFunction(
        ['__self', 'scope'],
        `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`,
      )
      Object.defineProperty(func2, 'name', {
        value: `[Alpine] ${expression}`,
      })
      return func2
    } catch (error2) {
      handleError(error2, el, expression)
      return Promise.resolve()
    }
  }
  const func = safeAsyncFunction()
  evaluatorMemo[expression] = func
  return func
}
function generateEvaluatorFromString(dataStack, expression, el) {
  const func = generateFunctionFromString(expression, el)
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    func.result = void 0
    func.finished = false
    const completeScope = mergeProxies([scope2, ...dataStack])
    if (typeof func === 'function') {
      const promise = func(func, completeScope).catch((error2) => { return handleError(error2, el, expression) })
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el)
        func.result = void 0
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el)
        }).catch((error2) => { return handleError(error2, el, expression) }).finally(() => { return func.result = void 0 })
      }
    }
  }
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (shouldAutoEvaluateFunctions && typeof value === 'function') {
    const result = value.apply(scope2, params)
    if (result instanceof Promise) {
      result.then((i) => { return runIfTypeOfFunction(receiver, i, scope2, params) }).catch((error2) => { return handleError(error2, el, value) })
    } else {
      receiver(result)
    }
  } else if (typeof value === 'object' && value instanceof Promise) {
    value.then((i) => { return receiver(i) })
  } else {
    receiver(value)
  }
}

// packages/alpinejs/src/directives.js
let prefixAsString = 'x-'
function prefix(subject = '') {
  return prefixAsString + subject
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix
}
const directiveHandlers = {}
function directive(name, callback) {
  directiveHandlers[name] = callback
  return {
    before(directive2) {
      if (!directiveHandlers[directive2]) {
        console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`)
        return
      }
      const pos = directiveOrder.indexOf(directive2)
      directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf('DEFAULT'), 0, name)
    },
  }
}
function directives(el, attributes, originalAttributeOverride) {
  attributes = Array.from(attributes)
  if (el._x_virtualDirectives) {
    let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => { return { name, value } })
    const staticAttributes = attributesOnly(vAttributes)
    vAttributes = vAttributes.map((attribute) => {
      if (staticAttributes.find((attr) => { return attr.name === attribute.name })) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`,
        }
      }
      return attribute
    })
    attributes = attributes.concat(vAttributes)
  }
  const transformedAttributeMap = {}
  const directives2 = attributes.map(toTransformedAttributes((newName, oldName) => { return transformedAttributeMap[newName] = oldName })).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority)
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2)
  })
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => { return !outNonAlpineAttributes(attr) })
}
let isDeferringHandlers = false
const directiveHandlerStacks = /* @__PURE__ */ new Map()
let currentHandlerStackKey = Symbol()
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true
  const key = Symbol()
  currentHandlerStackKey = key
  directiveHandlerStacks.set(key, [])
  const flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length) directiveHandlerStacks.get(key).shift()()
    directiveHandlerStacks.delete(key)
  }
  const stopDeferring = () => {
    isDeferringHandlers = false
    flushHandlers()
  }
  callback(flushHandlers)
  stopDeferring()
}
function getElementBoundUtilities(el) {
  const cleanups = []
  const cleanup = (callback) => { return cleanups.push(callback) }
  const [effect3, cleanupEffect] = elementBoundEffect(el)
  cleanups.push(cleanupEffect)
  const utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el),
  }
  const doCleanup = () => { return cleanups.forEach((i) => { return i() }) }
  return [utilities, doCleanup]
}
function getDirectiveHandler(el, directive2) {
  const noop = () => {
  }
  let handler4 = directiveHandlers[directive2.type] || noop
  const [utilities, cleanup] = getElementBoundUtilities(el)
  onAttributeRemoved(el, directive2.original, cleanup)
  const fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf) return
    handler4.inline && handler4.inline(el, directive2, utilities)
    handler4 = handler4.bind(handler4, el, directive2, utilities)
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4()
  }
  fullHandler.runCleanups = cleanup
  return fullHandler
}
const startingWith = (subject, replacement) => {
  return ({ name, value }) => {
    if (name.startsWith(subject)) name = name.replace(subject, replacement)
    return { name, value }
  }
}
const into = (i) => { return i }
function toTransformedAttributes(callback = () => {
}) {
  return ({ name, value }) => {
    const { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry)
    }, { name, value })
    if (newName !== name) callback(newName, name)
    return { name: newName, value: newValue }
  }
}
var attributeTransformers = []
function mapAttributes(callback) {
  attributeTransformers.push(callback)
}
function outNonAlpineAttributes({ name }) {
  return alpineAttributeRegex().test(name)
}
var alpineAttributeRegex = () => { return new RegExp(`^${prefixAsString}([^:^.]+)\\b`) }
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({ name, value }) => {
    const typeMatch = name.match(alpineAttributeRegex())
    const valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/)
    const modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
    const original = originalAttributeOverride || transformedAttributeMap[name] || name
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => { return i.replace('.', '') }),
      expression: value,
      original,
    }
  }
}
const DEFAULT = 'DEFAULT'
var directiveOrder = [
  'ignore',
  'ref',
  'data',
  'id',
  'anchor',
  'bind',
  'init',
  'for',
  'model',
  'modelable',
  'transition',
  'show',
  'if',
  DEFAULT,
  'teleport',
]
function byPriority(a, b) {
  const typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type
  const typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB)
}

// packages/alpinejs/src/nextTick.js
const tickStack = []
let isHolding = false
function nextTick(callback = () => {
}) {
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks()
    })
  })
  return new Promise((res) => {
    tickStack.push(() => {
      callback()
      res()
    })
  })
}
function releaseNextTicks() {
  isHolding = false
  while (tickStack.length) tickStack.shift()()
}
function holdNextTicks() {
  isHolding = true
}

// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(' '))
  } if (typeof value === 'object' && value !== null) {
    return setClassesFromObject(el, value)
  } if (typeof value === 'function') {
    return setClasses(el, value())
  }
  return setClassesFromString(el, value)
}
function setClassesFromString(el, classString) {
  const split = (classString2) => { return classString2.split(' ').filter(Boolean) }
  const missingClasses = (classString2) => { return classString2.split(' ').filter((i) => { return !el.classList.contains(i) }).filter(Boolean) }
  const addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes)
    return () => {
      el.classList.remove(...classes)
    }
  }
  classString = classString === true ? classString = '' : classString || ''
  return addClassesAndReturnUndo(missingClasses(classString))
}
function setClassesFromObject(el, classObject) {
  const split = (classString) => { return classString.split(' ').filter(Boolean) }
  const forAdd = Object.entries(classObject).flatMap(([classString, bool]) => { return (bool ? split(classString) : false) }).filter(Boolean)
  const forRemove = Object.entries(classObject).flatMap(([classString, bool]) => { return (!bool ? split(classString) : false) }).filter(Boolean)
  const added = []
  const removed = []
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i)
      removed.push(i)
    }
  })
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i)
      added.push(i)
    }
  })
  return () => {
    removed.forEach((i) => { return el.classList.add(i) })
    added.forEach((i) => { return el.classList.remove(i) })
  }
}

// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
  if (typeof value === 'object' && value !== null) {
    return setStylesFromObject(el, value)
  }
  return setStylesFromString(el, value)
}
function setStylesFromObject(el, value) {
  const previousStyles = {}
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key]
    if (!key.startsWith('--')) {
      key = kebabCase(key)
    }
    el.style.setProperty(key, value2)
  })
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute('style')
    }
  })
  return () => {
    setStyles(el, previousStyles)
  }
}
function setStylesFromString(el, value) {
  const cache = el.getAttribute('style', value)
  el.setAttribute('style', value)
  return () => {
    el.setAttribute('style', cache || '')
  }
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// packages/alpinejs/src/utils/once.js
function once(callback, fallback = () => {
}) {
  let called = false
  return function () {
    if (!called) {
      called = true
      callback.apply(this, arguments)
    } else {
      fallback.apply(this, arguments)
    }
  }
}

// packages/alpinejs/src/directives/x-transition.js
directive('transition', (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === 'function') expression = evaluate2(expression)
  if (expression === false) return
  if (!expression || typeof expression === 'boolean') {
    registerTransitionsFromHelper(el, modifiers, value)
  } else {
    registerTransitionsFromClassString(el, expression, value)
  }
})
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, '')
  const directiveStorageMap = {
    enter: (classes) => {
      el._x_transition.enter.during = classes
    },
    'enter-start': (classes) => {
      el._x_transition.enter.start = classes
    },
    'enter-end': (classes) => {
      el._x_transition.enter.end = classes
    },
    leave: (classes) => {
      el._x_transition.leave.during = classes
    },
    'leave-start': (classes) => {
      el._x_transition.leave.start = classes
    },
    'leave-end': (classes) => {
      el._x_transition.leave.end = classes
    },
  }
  directiveStorageMap[stage](classString)
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles)
  const doesntSpecify = !modifiers.includes('in') && !modifiers.includes('out') && !stage
  const transitioningIn = doesntSpecify || modifiers.includes('in') || ['enter'].includes(stage)
  const transitioningOut = doesntSpecify || modifiers.includes('out') || ['leave'].includes(stage)
  if (modifiers.includes('in') && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => { return index < modifiers.indexOf('out') })
  }
  if (modifiers.includes('out') && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => { return index > modifiers.indexOf('out') })
  }
  const wantsAll = !modifiers.includes('opacity') && !modifiers.includes('scale')
  const wantsOpacity = wantsAll || modifiers.includes('opacity')
  const wantsScale = wantsAll || modifiers.includes('scale')
  const opacityValue = wantsOpacity ? 0 : 1
  const scaleValue = wantsScale ? modifierValue(modifiers, 'scale', 95) / 100 : 1
  const delay = modifierValue(modifiers, 'delay', 0) / 1e3
  const origin = modifierValue(modifiers, 'origin', 'center')
  const property = 'opacity, transform'
  const durationIn = modifierValue(modifiers, 'duration', 150) / 1e3
  const durationOut = modifierValue(modifiers, 'duration', 75) / 1e3
  const easing = 'cubic-bezier(0.4, 0.0, 0.2, 1)'
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing,
    }
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`,
    }
    el._x_transition.enter.end = {
      opacity: 1,
      transform: 'scale(1)',
    }
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing,
    }
    el._x_transition.leave.start = {
      opacity: 1,
      transform: 'scale(1)',
    }
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`,
    }
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition) {
    el._x_transition = {
      enter: { during: defaultValue, start: defaultValue, end: defaultValue },
      leave: { during: defaultValue, start: defaultValue, end: defaultValue },
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end,
        }, before, after)
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end,
        }, before, after)
      },
    }
  }
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (el, value, show, hide) {
  const nextTick2 = document.visibilityState === 'visible' ? requestAnimationFrame : setTimeout
  const clickAwayCompatibleShow = () => { return nextTick2(show) }
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow()
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow()
    }
    return
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => { return resolve(hide) })
    el._x_transitioning && el._x_transitioning.beforeCancel(() => { return reject({ isFromCancelledTransition: true }) })
  }) : Promise.resolve(hide)
  queueMicrotask(() => {
    const closest = closestHide(el)
    if (closest) {
      if (!closest._x_hideChildren) closest._x_hideChildren = []
      closest._x_hideChildren.push(el)
    } else {
      nextTick2(() => {
        const hideAfterChildren = (el2) => {
          const carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren),
          ]).then(([i]) => { return i() })
          delete el2._x_hidePromise
          delete el2._x_hideChildren
          return carry
        }
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition) throw e
        })
      })
    }
  })
}
function closestHide(el) {
  const parent = el.parentNode
  if (!parent) return
  return parent._x_hidePromise ? parent : closestHide(parent)
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning) el._x_transitioning.cancel()
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before()
    after()
    return
  }
  let undoStart; let undoDuring; let
    undoEnd
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2)
    },
    during() {
      undoDuring = setFunction(el, during)
    },
    before,
    end() {
      undoStart()
      undoEnd = setFunction(el, end)
    },
    after,
    cleanup() {
      undoDuring()
      undoEnd()
    },
  })
}
function performTransition(el, stages) {
  let interrupted; let reachedBefore; let
    reachedEnd
  const finish = once(() => {
    mutateDom(() => {
      interrupted = true
      if (!reachedBefore) stages.before()
      if (!reachedEnd) {
        stages.end()
        releaseNextTicks()
      }
      stages.after()
      if (el.isConnected) stages.cleanup()
      delete el._x_transitioning
    })
  })
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback)
    },
    cancel: once(function () {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()()
      }

      finish()
    }),
    finish,
  }
  mutateDom(() => {
    stages.start()
    stages.during()
  })
  holdNextTicks()
  requestAnimationFrame(() => {
    if (interrupted) return
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1e3
    const delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, '').replace('s', '')) * 1e3
    if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1e3
    mutateDom(() => {
      stages.before()
    })
    reachedBefore = true
    requestAnimationFrame(() => {
      if (interrupted) return
      mutateDom(() => {
        stages.end()
      })
      releaseNextTicks()
      setTimeout(el._x_transitioning.finish, duration + delay)
      reachedEnd = true
    })
  })
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1) return fallback
  const rawValue = modifiers[modifiers.indexOf(key) + 1]
  if (!rawValue) return fallback
  if (key === 'scale') {
    if (isNaN(rawValue)) return fallback
  }
  if (key === 'duration' || key === 'delay') {
    const match = rawValue.match(/([0-9]+)ms/)
    if (match) return match[1]
  }
  if (key === 'origin') {
    if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ')
    }
  }
  return rawValue
}

// packages/alpinejs/src/clone.js
let isCloning = false
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => { return (isCloning ? fallback(...args) : callback(...args)) }
}
function onlyDuringClone(callback) {
  return (...args) => { return isCloning && callback(...args) }
}
const interceptors = []
function interceptClone(callback) {
  interceptors.push(callback)
}
function cloneNode(from, to) {
  interceptors.forEach((i) => { return i(from, to) })
  isCloning = true
  dontRegisterReactiveSideEffects(() => {
    initTree(to, (el, callback) => {
      callback(el, () => {
      })
    })
  })
  isCloning = false
}
let isCloningLegacy = false
function clone(oldEl, newEl) {
  if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack
  isCloning = true
  isCloningLegacy = true
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl)
  })
  isCloning = false
  isCloningLegacy = false
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false
  const shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3)) return skip()
      hasRunThroughFirstEl = true
      callback(el3, skip)
    })
  }
  initTree(el, shallowWalker)
}
function dontRegisterReactiveSideEffects(callback) {
  const cache = effect
  overrideEffect((callback2, el) => {
    const storedEffect = cache(callback2)
    release(storedEffect)
    return () => {
    }
  })
  callback()
  overrideEffect(cache)
}

// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings) el._x_bindings = reactive({})
  el._x_bindings[name] = value
  name = modifiers.includes('camel') ? camelCase(name) : name
  switch (name) {
    case 'value':
      bindInputValue(el, value)
      break
    case 'style':
      bindStyles(el, value)
      break
    case 'class':
      bindClasses(el, value)
      break
    case 'selected':
    case 'checked':
      bindAttributeAndProperty(el, name, value)
      break
    default:
      bindAttribute(el, name, value)
      break
  }
}
function bindInputValue(el, value) {
  if (el.type === 'radio') {
    if (el.attributes.value === void 0) {
      el.value = value
    }
    if (window.fromModel) {
      if (typeof value === 'boolean') {
        el.checked = safeParseBoolean(el.value) === value
      } else {
        el.checked = checkedAttrLooseCompare(el.value, value)
      }
    }
  } else if (el.type === 'checkbox') {
    if (Number.isInteger(value)) {
      el.value = value
    } else if (!Array.isArray(value) && typeof value !== 'boolean' && ![null, void 0].includes(value)) {
      el.value = String(value)
    } else if (Array.isArray(value)) {
      el.checked = value.some((val) => { return checkedAttrLooseCompare(val, el.value) })
    } else {
      el.checked = !!value
    }
  } else if (el.tagName === 'SELECT') {
    updateSelect(el, value)
  } else {
    if (el.value === value) return
    el.value = value === void 0 ? '' : value
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses) el._x_undoAddedClasses()
  el._x_undoAddedClasses = setClasses(el, value)
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles) el._x_undoAddedStyles()
  el._x_undoAddedStyles = setStyles(el, value)
}
function bindAttributeAndProperty(el, name, value) {
  bindAttribute(el, name, value)
  setPropertyIfChanged(el, name, value)
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name)
  } else {
    if (isBooleanAttr(name)) value = name
    setIfChanged(el, name, value)
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value)
  }
}
function setPropertyIfChanged(el, propName, value) {
  if (el[propName] !== value) {
    el[propName] = value
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return `${value2}`
  })
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value)
  })
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => { return char.toUpperCase() })
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB
}
function safeParseBoolean(rawValue) {
  if ([1, '1', 'true', 'on', 'yes', true].includes(rawValue)) {
    return true
  }
  if ([0, '0', 'false', 'off', 'no', false].includes(rawValue)) {
    return false
  }
  return rawValue ? Boolean(rawValue) : null
}
function isBooleanAttr(attrName) {
  const booleanAttributes = [
    'disabled',
    'checked',
    'required',
    'readonly',
    'open',
    'selected',
    'autofocus',
    'itemscope',
    'multiple',
    'novalidate',
    'allowfullscreen',
    'allowpaymentrequest',
    'formnovalidate',
    'autoplay',
    'controls',
    'loop',
    'muted',
    'playsinline',
    'default',
    'ismap',
    'reversed',
    'async',
    'defer',
    'nomodule',
  ]
  return booleanAttributes.includes(attrName)
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !['aria-pressed', 'aria-checked', 'aria-expanded', 'aria-selected'].includes(name)
}
function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name]
  return getAttributeBinding(el, name, fallback)
}
function extractProp(el, name, fallback, extract = true) {
  if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name]
  if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
    const binding = el._x_inlineBindings[name]
    binding.extract = extract
    return dontAutoEvaluateFunctions(() => {
      return evaluate(el, binding.expression)
    })
  }
  return getAttributeBinding(el, name, fallback)
}
function getAttributeBinding(el, name, fallback) {
  const attr = el.getAttribute(name)
  if (attr === null) return typeof fallback === 'function' ? fallback() : fallback
  if (attr === '') return true
  if (isBooleanAttr(name)) {
    return !![name, 'true'].includes(attr)
  }
  return attr
}

// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
  let timeout
  return function () {
    const context = this; const
      args = arguments
    const later = function () {
      timeout = null
      func.apply(context, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
  let inThrottle
  return function () {
    const context = this; const
      args = arguments
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => { return inThrottle = false }, limit)
    }
  }
}

// packages/alpinejs/src/entangle.js
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
  let firstRun = true
  let outerHash
  let innerHash
  const reference = effect(() => {
    const outer = outerGet()
    const inner = innerGet()
    if (firstRun) {
      innerSet(cloneIfObject(outer))
      firstRun = false
    } else {
      const outerHashLatest = JSON.stringify(outer)
      const innerHashLatest = JSON.stringify(inner)
      if (outerHashLatest !== outerHash) {
        innerSet(cloneIfObject(outer))
      } else if (outerHashLatest !== innerHashLatest) {
        outerSet(cloneIfObject(inner))
      } else {
      }
    }
    outerHash = JSON.stringify(outerGet())
    innerHash = JSON.stringify(innerGet())
  })
  return () => {
    release(reference)
  }
}
function cloneIfObject(value) {
  return typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : value
}

// packages/alpinejs/src/plugin.js
function plugin(callback) {
  const callbacks = Array.isArray(callback) ? callback : [callback]
  callbacks.forEach((i) => { return i(alpine_default) })
}

// packages/alpinejs/src/store.js
let stores = {}
let isReactive = false
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores)
    isReactive = true
  }
  if (value === void 0) {
    return stores[name]
  }
  stores[name] = value
  if (typeof value === 'object' && value !== null && value.hasOwnProperty('init') && typeof value.init === 'function') {
    stores[name].init()
  }
  initInterceptors2(stores[name])
}
function getStores() {
  return stores
}

// packages/alpinejs/src/binds.js
const binds = {}
function bind2(name, bindings) {
  const getBindings = typeof bindings !== 'function' ? () => { return bindings } : bindings
  if (name instanceof Element) {
    return applyBindingsObject(name, getBindings())
  }
  binds[name] = getBindings

  return () => {
  }
}
function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args)
        }
      },
    })
  })
  return obj
}
function applyBindingsObject(el, obj, original) {
  const cleanupRunners = []
  while (cleanupRunners.length) cleanupRunners.pop()()
  let attributes = Object.entries(obj).map(([name, value]) => { return { name, value } })
  const staticAttributes = attributesOnly(attributes)
  attributes = attributes.map((attribute) => {
    if (staticAttributes.find((attr) => { return attr.name === attribute.name })) {
      return {
        name: `x-bind:${attribute.name}`,
        value: `"${attribute.value}"`,
      }
    }
    return attribute
  })
  directives(el, attributes, original).map((handle) => {
    cleanupRunners.push(handle.runCleanups)
    handle()
  })
  return () => {
    while (cleanupRunners.length) cleanupRunners.pop()()
  }
}

// packages/alpinejs/src/datas.js
const datas = {}
function data(name, callback) {
  datas[name] = callback
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args)
        }
      },
      enumerable: false,
    })
  })
  return obj
}

// packages/alpinejs/src/alpine.js
const Alpine = {
  get reactive() {
    return reactive
  },
  get release() {
    return release
  },
  get effect() {
    return effect
  },
  get raw() {
    return raw
  },
  version: '3.13.8',
  flushAndStopDeferringMutations,
  dontAutoEvaluateFunctions,
  disableEffectScheduling,
  startObservingMutations,
  stopObservingMutations,
  setReactivityEngine,
  onAttributeRemoved,
  onAttributesAdded,
  closestDataStack,
  skipDuringClone,
  onlyDuringClone,
  addRootSelector,
  addInitSelector,
  interceptClone,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  interceptInit,
  setEvaluator,
  mergeProxies,
  extractProp,
  findClosest,
  onElRemoved,
  closestRoot,
  destroyTree,
  interceptor,
  // INTERNAL: not public API and is subject to change without major release.
  transition,
  // INTERNAL
  setStyles,
  // INTERNAL
  mutateDom,
  directive,
  entangle,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  // INTERNAL
  cloneNode,
  // INTERNAL
  bound: getBinding,
  $data: scope,
  watch,
  walk,
  data,
  bind: bind2,
}
var alpine_default = Alpine

// packages/alpinejs/src/index.js
const import_reactivity10 = __toESM(require_reactivity())

// packages/alpinejs/src/magics/$nextTick.js
magic('nextTick', () => { return nextTick })

// packages/alpinejs/src/magics/$dispatch.js
magic('dispatch', (el) => { return dispatch.bind(dispatch, el) })

// packages/alpinejs/src/magics/$watch.js
magic('watch', (el, { evaluateLater: evaluateLater2, cleanup }) => {
  return (key, callback) => {
    const evaluate2 = evaluateLater2(key)
    const getter = () => {
      let value
      evaluate2((i) => { return value = i })
      return value
    }
    const unwatch = watch(getter, callback)
    cleanup(unwatch)
  }
})

// packages/alpinejs/src/magics/$store.js
magic('store', getStores)

// packages/alpinejs/src/magics/$data.js
magic('data', (el) => { return scope(el) })

// packages/alpinejs/src/magics/$root.js
magic('root', (el) => { return closestRoot(el) })

// packages/alpinejs/src/magics/$refs.js
magic('refs', (el) => {
  if (el._x_refs_proxy) return el._x_refs_proxy
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el))
  return el._x_refs_proxy
})
function getArrayOfRefObject(el) {
  const refObjects = []
  findClosest(el, (i) => {
    if (i._x_refs) refObjects.push(i._x_refs)
  })
  return refObjects
}

// packages/alpinejs/src/ids.js
const globalIdMemo = {}
function findAndIncrementId(name) {
  if (!globalIdMemo[name]) globalIdMemo[name] = 0
  return ++globalIdMemo[name]
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name]) return true
  })
}
function setIdRoot(el, name) {
  if (!el._x_ids) el._x_ids = {}
  if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name)
}

// packages/alpinejs/src/magics/$id.js
magic('id', (el, { cleanup }) => {
  return (name, key = null) => {
    const cacheKey = `${name}${key ? `-${key}` : ''}`
    return cacheIdByNameOnElement(el, cacheKey, cleanup, () => {
      const root = closestIdRoot(el, name)
      const id = root ? root._x_ids[name] : findAndIncrementId(name)
      return key ? `${name}-${id}-${key}` : `${name}-${id}`
    })
  }
})
interceptClone((from, to) => {
  if (from._x_id) {
    to._x_id = from._x_id
  }
})
function cacheIdByNameOnElement(el, cacheKey, cleanup, callback) {
  if (!el._x_id) el._x_id = {}
  if (el._x_id[cacheKey]) return el._x_id[cacheKey]
  const output = callback()
  el._x_id[cacheKey] = output
  cleanup(() => {
    delete el._x_id[cacheKey]
  })
  return output
}

// packages/alpinejs/src/magics/$el.js
magic('el', (el) => { return el })

// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic('Focus', 'focus', 'focus')
warnMissingPluginMagic('Persist', 'persist', 'persist')
function warnMissingPluginMagic(name, magicName, slug) {
  magic(magicName, (el) => { return warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el) })
}

// packages/alpinejs/src/directives/x-modelable.js
directive('modelable', (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup }) => {
  const func = evaluateLater2(expression)
  const innerGet = () => {
    let result
    func((i) => { return result = i })
    return result
  }
  const evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`)
  const innerSet = (val) => {
    return evaluateInnerSet(() => {
    }, { scope: { __placeholder: val } })
  }
  const initialValue = innerGet()
  innerSet(initialValue)
  queueMicrotask(() => {
    if (!el._x_model) return
    el._x_removeModelListeners.default()
    const outerGet = el._x_model.get
    const outerSet = el._x_model.set
    const releaseEntanglement = entangle(
      {
        get() {
          return outerGet()
        },
        set(value) {
          outerSet(value)
        },
      },
      {
        get() {
          return innerGet()
        },
        set(value) {
          innerSet(value)
        },
      },
    )
    cleanup(releaseEntanglement)
  })
})

// packages/alpinejs/src/directives/x-teleport.js
directive('teleport', (el, { modifiers, expression }, { cleanup }) => {
  if (el.tagName.toLowerCase() !== 'template') warn('x-teleport can only be used on a <template> tag', el)
  const target = getTarget(expression)
  const clone2 = el.content.cloneNode(true).firstElementChild
  el._x_teleport = clone2
  clone2._x_teleportBack = el
  el.setAttribute('data-teleport-template', true)
  clone2.setAttribute('data-teleport-target', true)
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone2.addEventListener(eventName, (e) => {
        e.stopPropagation()
        el.dispatchEvent(new e.constructor(e.type, e))
      })
    })
  }
  addScopeToNode(clone2, {}, el)
  const placeInDom = (clone3, target2, modifiers2) => {
    if (modifiers2.includes('prepend')) {
      target2.parentNode.insertBefore(clone3, target2)
    } else if (modifiers2.includes('append')) {
      target2.parentNode.insertBefore(clone3, target2.nextSibling)
    } else {
      target2.appendChild(clone3)
    }
  }
  mutateDom(() => {
    placeInDom(clone2, target, modifiers)
    initTree(clone2)
    clone2._x_ignore = true
  })
  el._x_teleportPutBack = () => {
    const target2 = getTarget(expression)
    mutateDom(() => {
      placeInDom(el._x_teleport, target2, modifiers)
    })
  }
  cleanup(() => { return clone2.remove() })
})
const teleportContainerDuringClone = document.createElement('div')
function getTarget(expression) {
  const target = skipDuringClone(() => {
    return document.querySelector(expression)
  }, () => {
    return teleportContainerDuringClone
  })()
  if (!target) warn(`Cannot find x-teleport element for selector: "${expression}"`)
  return target
}

// packages/alpinejs/src/directives/x-ignore.js
const handler = () => {
}
handler.inline = (el, { modifiers }, { cleanup }) => {
  modifiers.includes('self') ? el._x_ignoreSelf = true : el._x_ignore = true
  cleanup(() => {
    modifiers.includes('self') ? delete el._x_ignoreSelf : delete el._x_ignore
  })
}
directive('ignore', handler)

// packages/alpinejs/src/directives/x-effect.js
directive('effect', skipDuringClone((el, { expression }, { effect: effect3 }) => {
  effect3(evaluateLater(el, expression))
}))

// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
  let listenerTarget = el
  let handler4 = (e) => { return callback(e) }
  const options = {}
  const wrapHandler = (callback2, wrapper) => { return (e) => { return wrapper(callback2, e) } }
  if (modifiers.includes('dot')) event = dotSyntax(event)
  if (modifiers.includes('camel')) event = camelCase2(event)
  if (modifiers.includes('passive')) options.passive = true
  if (modifiers.includes('capture')) options.capture = true
  if (modifiers.includes('window')) listenerTarget = window
  if (modifiers.includes('document')) listenerTarget = document
  if (modifiers.includes('debounce')) {
    const nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait'
    const wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250
    handler4 = debounce(handler4, wait)
  }
  if (modifiers.includes('throttle')) {
    const nextModifier = modifiers[modifiers.indexOf('throttle') + 1] || 'invalid-wait'
    const wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250
    handler4 = throttle(handler4, wait)
  }
  if (modifiers.includes('prevent')) {
    handler4 = wrapHandler(handler4, (next, e) => {
      e.preventDefault()
      next(e)
    })
  } if (modifiers.includes('stop')) {
    handler4 = wrapHandler(handler4, (next, e) => {
      e.stopPropagation()
      next(e)
    })
  } if (modifiers.includes('self')) {
    handler4 = wrapHandler(handler4, (next, e) => {
      e.target === el && next(e)
    })
  } if (modifiers.includes('away') || modifiers.includes('outside')) {
    listenerTarget = document
    handler4 = wrapHandler(handler4, (next, e) => {
      if (el.contains(e.target)) return
      if (e.target.isConnected === false) return
      if (el.offsetWidth < 1 && el.offsetHeight < 1) return
      if (el._x_isShown === false) return
      next(e)
    })
  }
  if (modifiers.includes('once')) {
    handler4 = wrapHandler(handler4, (next, e) => {
      next(e)
      listenerTarget.removeEventListener(event, handler4, options)
    })
  }
  handler4 = wrapHandler(handler4, (next, e) => {
    if (isKeyEvent(event)) {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return
      }
    }
    next(e)
  })
  listenerTarget.addEventListener(event, handler4, options)
  return () => {
    listenerTarget.removeEventListener(event, handler4, options)
  }
}
function dotSyntax(subject) {
  return subject.replace(/-/g, '.')
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => { return char.toUpperCase() })
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject)
}
function kebabCase2(subject) {
  if ([' ', '_'].includes(
    subject,
  )) return subject
  return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase()
}
function isKeyEvent(event) {
  return ['keydown', 'keyup'].includes(event)
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !['window', 'document', 'prevent', 'stop', 'once', 'capture'].includes(i)
  })
  if (keyModifiers.includes('debounce')) {
    const debounceIndex = keyModifiers.indexOf('debounce')
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1)
  }
  if (keyModifiers.includes('throttle')) {
    const debounceIndex = keyModifiers.indexOf('throttle')
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1)
  }
  if (keyModifiers.length === 0) return false
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false
  const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super']
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => { return keyModifiers.includes(modifier) })
  keyModifiers = keyModifiers.filter((i) => { return !selectedSystemKeyModifiers.includes(i) })
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === 'cmd' || modifier === 'super') modifier = 'meta'
      return e[`${modifier}Key`]
    })
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (keyToModifiers(e.key).includes(keyModifiers[0])) return false
    }
  }
  return true
}
function keyToModifiers(key) {
  if (!key) return []
  key = kebabCase2(key)
  const modifierToKeyMap = {
    ctrl: 'control',
    slash: '/',
    space: ' ',
    spacebar: ' ',
    cmd: 'meta',
    esc: 'escape',
    up: 'arrow-up',
    down: 'arrow-down',
    left: 'arrow-left',
    right: 'arrow-right',
    period: '.',
    equal: '=',
    minus: '-',
    underscore: '_',
  }
  modifierToKeyMap[key] = key
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key) return modifier
  }).filter((modifier) => { return modifier })
}

// packages/alpinejs/src/directives/x-model.js
directive('model', (el, { modifiers, expression }, { effect: effect3, cleanup }) => {
  let scopeTarget = el
  if (modifiers.includes('parent')) {
    scopeTarget = el.parentNode
  }
  const evaluateGet = evaluateLater(scopeTarget, expression)
  let evaluateSet
  if (typeof expression === 'string') {
    evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`)
  } else if (typeof expression === 'function' && typeof expression() === 'string') {
    evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`)
  } else {
    evaluateSet = () => {
    }
  }
  const getValue = () => {
    let result
    evaluateGet((value) => { return result = value })
    return isGetterSetter(result) ? result.get() : result
  }
  const setValue = (value) => {
    let result
    evaluateGet((value2) => { return result = value2 })
    if (isGetterSetter(result)) {
      result.set(value)
    } else {
      evaluateSet(() => {
      }, {
        scope: { __placeholder: value },
      })
    }
  }
  if (typeof expression === 'string' && el.type === 'radio') {
    mutateDom(() => {
      if (!el.hasAttribute('name')) el.setAttribute('name', expression)
    })
  }
  const event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input'
  const removeListener = isCloning ? () => {
  } : on(el, event, modifiers, (e) => {
    setValue(getInputValue(el, modifiers, e, getValue()))
  })
  if (modifiers.includes('fill')) {
    if ([void 0, null, ''].includes(getValue()) || el.type === 'checkbox' && Array.isArray(getValue())) {
      setValue(
        getInputValue(el, modifiers, { target: el }, getValue()),
      )
    }
  }
  if (!el._x_removeModelListeners) el._x_removeModelListeners = {}
  el._x_removeModelListeners.default = removeListener
  cleanup(() => { return el._x_removeModelListeners.default() })
  if (el.form) {
    const removeResetListener = on(el.form, 'reset', [], (e) => {
      nextTick(() => { return el._x_model && el._x_model.set(el.value) })
    })
    cleanup(() => { return removeResetListener() })
  }
  el._x_model = {
    get() {
      return getValue()
    },
    set(value) {
      setValue(value)
    },
  }
  el._x_forceModelUpdate = (value) => {
    if (value === void 0 && typeof expression === 'string' && expression.match(/\./)) value = ''
    window.fromModel = true
    mutateDom(() => { return bind(el, 'value', value) })
    delete window.fromModel
  }
  effect3(() => {
    const value = getValue()
    if (modifiers.includes('unintrusive') && document.activeElement.isSameNode(el)) return
    el._x_forceModelUpdate(value)
  })
})
function getInputValue(el, modifiers, event, currentValue) {
  return mutateDom(() => {
    if (event instanceof CustomEvent && event.detail !== void 0) return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value
    if (el.type === 'checkbox') {
      if (Array.isArray(currentValue)) {
        let newValue = null
        if (modifiers.includes('number')) {
          newValue = safeParseNumber(event.target.value)
        } else if (modifiers.includes('boolean')) {
          newValue = safeParseBoolean(event.target.value)
        } else {
          newValue = event.target.value
        }
        return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => { return !checkedAttrLooseCompare2(el2, newValue) })
      }
      return event.target.checked
    } if (el.tagName.toLowerCase() === 'select' && el.multiple) {
      if (modifiers.includes('number')) {
        return Array.from(event.target.selectedOptions).map((option) => {
          const rawValue = option.value || option.text
          return safeParseNumber(rawValue)
        })
      } if (modifiers.includes('boolean')) {
        return Array.from(event.target.selectedOptions).map((option) => {
          const rawValue = option.value || option.text
          return safeParseBoolean(rawValue)
        })
      }
      return Array.from(event.target.selectedOptions).map((option) => {
        return option.value || option.text
      })
    }
    let newValue
    if (el.type === 'radio') {
      if (event.target.checked) {
        newValue = event.target.value
      } else {
        newValue = currentValue
      }
    } else {
      newValue = event.target.value
    }
    if (modifiers.includes('number')) {
      return safeParseNumber(newValue)
    } if (modifiers.includes('boolean')) {
      return safeParseBoolean(newValue)
    } if (modifiers.includes('trim')) {
      return newValue.trim()
    }
    return newValue
  })
}
function safeParseNumber(rawValue) {
  const number = rawValue ? parseFloat(rawValue) : null
  return isNumeric2(number) ? number : rawValue
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject)
}
function isGetterSetter(value) {
  return value !== null && typeof value === 'object' && typeof value.get === 'function' && typeof value.set === 'function'
}

// packages/alpinejs/src/directives/x-cloak.js
directive('cloak', (el) => { return queueMicrotask(() => { return mutateDom(() => { return el.removeAttribute(prefix('cloak')) }) }) })

// packages/alpinejs/src/directives/x-init.js
addInitSelector(() => { return `[${prefix('init')}]` })
directive('init', skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === 'string') {
    return !!expression.trim() && evaluate2(expression, {}, false)
  }
  return evaluate2(expression, {}, false)
}))

// packages/alpinejs/src/directives/x-text.js
directive('text', (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  const evaluate2 = evaluateLater2(expression)
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.textContent = value
      })
    })
  })
})

// packages/alpinejs/src/directives/x-html.js
directive('html', (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  const evaluate2 = evaluateLater2(expression)
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.innerHTML = value
        el._x_ignoreSelf = true
        initTree(el)
        delete el._x_ignoreSelf
      })
    })
  })
})

// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(':', into(prefix('bind:'))))
const handler2 = (el, {
  value, modifiers, expression, original,
}, { effect: effect3, cleanup }) => {
  if (!value) {
    const bindingProviders = {}
    injectBindingProviders(bindingProviders)
    const getBindings = evaluateLater(el, expression)
    getBindings((bindings) => {
      applyBindingsObject(el, bindings, original)
    }, { scope: bindingProviders })
    return
  }
  if (value === 'key') return storeKeyForXFor(el, expression)
  if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
    return
  }
  const evaluate2 = evaluateLater(el, expression)
  effect3(() => {
    return evaluate2((result) => {
      if (result === void 0 && typeof expression === 'string' && expression.match(/\./)) {
        result = ''
      }
      mutateDom(() => { return bind(el, value, result, modifiers) })
    })
  })
  cleanup(() => {
    el._x_undoAddedClasses && el._x_undoAddedClasses()
    el._x_undoAddedStyles && el._x_undoAddedStyles()
  })
}
handler2.inline = (el, { value, modifiers, expression }) => {
  if (!value) return
  if (!el._x_inlineBindings) el._x_inlineBindings = {}
  el._x_inlineBindings[value] = { expression, extract: false }
}
directive('bind', handler2)
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression
}

// packages/alpinejs/src/directives/x-data.js
addRootSelector(() => { return `[${prefix('data')}]` })
directive('data', (el, { expression }, { cleanup }) => {
  if (shouldSkipRegisteringDataDuringClone(el)) return
  expression = expression === '' ? '{}' : expression
  const magicContext = {}
  injectMagics(magicContext, el)
  const dataProviderContext = {}
  injectDataProviders(dataProviderContext, magicContext)
  let data2 = evaluate(el, expression, { scope: dataProviderContext })
  if (data2 === void 0 || data2 === true) data2 = {}
  injectMagics(data2, el)
  const reactiveData = reactive(data2)
  initInterceptors2(reactiveData)
  const undo = addScopeToNode(el, reactiveData)
  reactiveData.init && evaluate(el, reactiveData.init)
  cleanup(() => {
    reactiveData.destroy && evaluate(el, reactiveData.destroy)
    undo()
  })
})
interceptClone((from, to) => {
  if (from._x_dataStack) {
    to._x_dataStack = from._x_dataStack
    to.setAttribute('data-has-alpine-state', true)
  }
})
function shouldSkipRegisteringDataDuringClone(el) {
  if (!isCloning) return false
  if (isCloningLegacy) return true
  return el.hasAttribute('data-has-alpine-state')
}

// packages/alpinejs/src/directives/x-show.js
directive('show', (el, { modifiers, expression }, { effect: effect3 }) => {
  const evaluate2 = evaluateLater(el, expression)
  if (!el._x_doHide) {
    el._x_doHide = () => {
      mutateDom(() => {
        el.style.setProperty('display', 'none', modifiers.includes('important') ? 'important' : void 0)
      })
    }
  }
  if (!el._x_doShow) {
    el._x_doShow = () => {
      mutateDom(() => {
        if (el.style.length === 1 && el.style.display === 'none') {
          el.removeAttribute('style')
        } else {
          el.style.removeProperty('display')
        }
      })
    }
  }
  const hide = () => {
    el._x_doHide()
    el._x_isShown = false
  }
  const show = () => {
    el._x_doShow()
    el._x_isShown = true
  }
  const clickAwayCompatibleShow = () => { return setTimeout(show) }
  const toggle = once(
    (value) => { return (value ? show() : hide()) },
    (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === 'function') {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide)
      } else {
        value ? clickAwayCompatibleShow() : hide()
      }
    },
  )
  let oldValue
  let firstTime = true
  effect3(() => {
    return evaluate2((value) => {
      if (!firstTime && value === oldValue) return
      if (modifiers.includes('immediate')) value ? clickAwayCompatibleShow() : hide()
      toggle(value)
      oldValue = value
      firstTime = false
    })
  })
})

// packages/alpinejs/src/directives/x-for.js
directive('for', (el, { expression }, { effect: effect3, cleanup }) => {
  const iteratorNames = parseForExpression(expression)
  const evaluateItems = evaluateLater(el, iteratorNames.items)
  const evaluateKey = evaluateLater(
    el,
    // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || 'index',
  )
  el._x_prevKeys = []
  el._x_lookup = {}
  effect3(() => { return loop(el, iteratorNames, evaluateItems, evaluateKey) })
  cleanup(() => {
    Object.values(el._x_lookup).forEach((el2) => { return el2.remove() })
    delete el._x_prevKeys
    delete el._x_lookup
  })
})
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  const isObject = (i) => { return typeof i === 'object' && !Array.isArray(i) }
  const templateEl = el
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => { return i + 1 })
    }
    if (items === void 0) items = []
    const lookup = el._x_lookup
    let prevKeys = el._x_prevKeys
    const scopes = []
    const keys = []
    if (isObject(items)) {
      items = Object.entries(items).map(([key, value]) => {
        const scope2 = getIterationScopeVariables(iteratorNames, value, key, items)
        evaluateKey((value2) => {
          if (keys.includes(value2)) warn('Duplicate key on x-for', el)
          keys.push(value2)
        }, { scope: { index: key, ...scope2 } })
        scopes.push(scope2)
      })
    } else {
      for (let i = 0; i < items.length; i++) {
        const scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items)
        evaluateKey((value) => {
          if (keys.includes(value)) warn('Duplicate key on x-for', el)
          keys.push(value)
        }, { scope: { index: i, ...scope2 } })
        scopes.push(scope2)
      }
    }
    const adds = []
    const moves = []
    const removes = []
    const sames = []
    for (let i = 0; i < prevKeys.length; i++) {
      const key = prevKeys[i]
      if (keys.indexOf(key) === -1) removes.push(key)
    }
    prevKeys = prevKeys.filter((key) => { return !removes.includes(key) })
    let lastKey = 'template'
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const prevIndex = prevKeys.indexOf(key)
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key)
        adds.push([lastKey, i])
      } else if (prevIndex !== i) {
        const keyInSpot = prevKeys.splice(i, 1)[0]
        const keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0]
        prevKeys.splice(i, 0, keyForSpot)
        prevKeys.splice(prevIndex, 0, keyInSpot)
        moves.push([keyInSpot, keyForSpot])
      } else {
        sames.push(key)
      }
      lastKey = key
    }
    for (let i = 0; i < removes.length; i++) {
      const key = removes[i]
      if (lookup[key]._x_effects) {
        lookup[key]._x_effects.forEach(dequeueJob)
      }
      lookup[key].remove()
      lookup[key] = null
      delete lookup[key]
    }
    for (let i = 0; i < moves.length; i++) {
      const [keyInSpot, keyForSpot] = moves[i]
      const elInSpot = lookup[keyInSpot]
      const elForSpot = lookup[keyForSpot]
      const marker = document.createElement('div')
      mutateDom(() => {
        if (!elForSpot) warn('x-for ":key" is undefined or invalid', templateEl, keyForSpot, lookup)
        elForSpot.after(marker)
        elInSpot.after(elForSpot)
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl)
        marker.before(elInSpot)
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl)
        marker.remove()
      })
      elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)])
    }
    for (let i = 0; i < adds.length; i++) {
      const [lastKey2, index] = adds[i]
      let lastEl = lastKey2 === 'template' ? templateEl : lookup[lastKey2]
      if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl
      const scope2 = scopes[index]
      const key = keys[index]
      const clone2 = document.importNode(templateEl.content, true).firstElementChild
      const reactiveScope = reactive(scope2)
      addScopeToNode(clone2, reactiveScope, templateEl)
      clone2._x_refreshXForScope = (newScope) => {
        Object.entries(newScope).forEach(([key2, value]) => {
          reactiveScope[key2] = value
        })
      }
      mutateDom(() => {
        lastEl.after(clone2)
        skipDuringClone(() => { return initTree(clone2) })()
      })
      if (typeof key === 'object') {
        warn('x-for key cannot be an object, it must be a string or an integer', templateEl)
      }
      lookup[key] = clone2
    }
    for (let i = 0; i < sames.length; i++) {
      lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])])
    }
    templateEl._x_prevKeys = keys
  })
}
function parseForExpression(expression) {
  const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
  const stripParensRE = /^\s*\(|\)\s*$/g
  const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
  const inMatch = expression.match(forAliasRE)
  if (!inMatch) return
  const res = {}
  res.items = inMatch[2].trim()
  const item = inMatch[1].replace(stripParensRE, '').trim()
  const iteratorMatch = item.match(forIteratorRE)
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, '').trim()
    res.index = iteratorMatch[1].trim()
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim()
    }
  } else {
    res.item = item
  }
  return res
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  const scopeVariables = {}
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    const names = iteratorNames.item.replace('[', '').replace(']', '').split(',').map((i) => { return i.trim() })
    names.forEach((name, i) => {
      scopeVariables[name] = item[i]
    })
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === 'object') {
    const names = iteratorNames.item.replace('{', '').replace('}', '').split(',').map((i) => { return i.trim() })
    names.forEach((name) => {
      scopeVariables[name] = item[name]
    })
  } else {
    scopeVariables[iteratorNames.item] = item
  }
  if (iteratorNames.index) scopeVariables[iteratorNames.index] = index
  if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items
  return scopeVariables
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject)
}

// packages/alpinejs/src/directives/x-ref.js
function handler3() {
}
handler3.inline = (el, { expression }, { cleanup }) => {
  const root = closestRoot(el)
  if (!root._x_refs) root._x_refs = {}
  root._x_refs[expression] = el
  cleanup(() => { return delete root._x_refs[expression] })
}
directive('ref', handler3)

// packages/alpinejs/src/directives/x-if.js
directive('if', (el, { expression }, { effect: effect3, cleanup }) => {
  if (el.tagName.toLowerCase() !== 'template') warn('x-if can only be used on a <template> tag', el)
  const evaluate2 = evaluateLater(el, expression)
  const show = () => {
    if (el._x_currentIfEl) return el._x_currentIfEl
    const clone2 = el.content.cloneNode(true).firstElementChild
    addScopeToNode(clone2, {}, el)
    mutateDom(() => {
      el.after(clone2)
      skipDuringClone(() => { return initTree(clone2) })()
    })
    el._x_currentIfEl = clone2
    el._x_undoIf = () => {
      walk(clone2, (node) => {
        if (node._x_effects) {
          node._x_effects.forEach(dequeueJob)
        }
      })
      clone2.remove()
      delete el._x_currentIfEl
    }
    return clone2
  }
  const hide = () => {
    if (!el._x_undoIf) return
    el._x_undoIf()
    delete el._x_undoIf
  }
  effect3(() => {
    return evaluate2((value) => {
      value ? show() : hide()
    })
  })
  cleanup(() => { return el._x_undoIf && el._x_undoIf() })
})

// packages/alpinejs/src/directives/x-id.js
directive('id', (el, { expression }, { evaluate: evaluate2 }) => {
  const names = evaluate2(expression)
  names.forEach((name) => { return setIdRoot(el, name) })
})
interceptClone((from, to) => {
  if (from._x_ids) {
    to._x_ids = from._x_ids
  }
})

// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith('@', into(prefix('on:'))))
directive('on', skipDuringClone((el, { value, modifiers, expression }, { cleanup }) => {
  const evaluate2 = expression ? evaluateLater(el, expression) : () => {
  }
  if (el.tagName.toLowerCase() === 'template') {
    if (!el._x_forwardEvents) el._x_forwardEvents = []
    if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value)
  }
  const removeListener = on(el, value, modifiers, (e) => {
    evaluate2(() => {
    }, { scope: { $event: e }, params: [e] })
  })
  cleanup(() => { return removeListener() })
}))

// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective('Collapse', 'collapse', 'collapse')
warnMissingPluginDirective('Intersect', 'intersect', 'intersect')
warnMissingPluginDirective('Focus', 'trap', 'focus')
warnMissingPluginDirective('Mask', 'mask', 'mask')
function warnMissingPluginDirective(name, directiveName, slug) {
  directive(directiveName, (el) => { return warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el) })
}

// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator)
alpine_default.setReactivityEngine({
  reactive: import_reactivity10.reactive, effect: import_reactivity10.effect, release: import_reactivity10.stop, raw: import_reactivity10.toRaw,
})
var src_default = alpine_default

// packages/alpinejs/builds/module.js
var module_default = src_default
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alpine,
})
