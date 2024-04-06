/* create elm */

/* request */
export const getUploadFile = ({ apiEndpoint, postFormRequest }) => {
  const url = `${apiEndpoint}/form/upload`
  return () => {
    const profileImageInputElm = document.querySelector('#profileImageInput')
    const file = profileImageInputElm.files[0]
    const formData = new FormData()
    formData.append('file', file)
    return postFormRequest(url, formData)
  }
}


/* onClick */

/* onSubmit */
export const setOnSubmitUploadForm = ({ onSubmitUploadForm }) => {
  const uploadProfileFormElm = document.querySelector('#uploadProfileForm')
  uploadProfileFormElm.onsubmit = (e) => {
    e.preventDefault()
    onSubmitUploadForm()
    window.dispatchEvent(new CustomEvent('ace-banner', { detail: { isVisible: true, title: '[成功]', message: 'ファイルをアップロードしました。' }, bubbles: true }))
  }
}

/* show data */

/* show elm */
export const showMessage = ({ messageResult }) => {
  document.querySelector('#messageContent').value = messageResult.result.jsonContent
}

export const showOcrResult = ({ resultText }) => {
  const ocrResultElm = document.querySelector('#ocrResult')
  ocrResultElm.value = resultText
  window.dispatchEvent(new CustomEvent('ace-banner', { detail: { isVisible: true, title: '[成功]', message: 'テキストの読み取りに成功しました。' }, bubbles: true }))
}

