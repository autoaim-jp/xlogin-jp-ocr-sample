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
  }
}

/* show data */

/* show elm */
export const showMessage = ({ messageResult }) => {
  document.querySelector('#messageContent').value = messageResult.result.jsonContent
}

export const showUploadForm = ({ splitPermissionListResult }) => {
  const { splitPermissionList, clientId } = splitPermissionListResult.result
  if (splitPermissionList.required[`rw:${clientId}:tesseract`]) {
    document.querySelector('#uploadContainer').classList.remove('hidden')
    document.querySelector('#uploadedImgContainer').classList.remove('hidden')
  } else {
    document.querySelector('#uploadFilePermissionRequestContainer').classList.remove('hidden')
  }
}

export const showOcrResult = ({ resultText }) => {
  const ocrResultElm = document.querySelector('#ocrResult')
  ocrResultElm.value = resultText
}

