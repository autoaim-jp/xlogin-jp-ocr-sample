/* mypage/core.js */
const requestIdList = {}

export const registerRequestId = ({ requestId }) => {
  if (!requestId) {
    return
  }
  requestIdList[requestId] = true
}

export const lookupResponse = async ({
  fetchResponseList, showOcrResult,
}) => {
  const requestIdListStr = Object.keys(requestIdList).join(',')
  if (requestIdListStr.length === 0) {
    return
  }
  const responseListResult = await fetchResponseList({ requestIdListStr })
  console.log({ responseListResult })
  if (!responseListResult || !responseListResult.result) {
    return
  }

  const updateList = {}
  Object.entries(responseListResult.result).forEach(([requestId, responseObj]) => {
    if (responseObj.waiting === true) {
      return
    }

    if (!responseObj.result || !responseObj.result.resultText) {
      return
    }
    updateList[requestId] = responseObj.result
    delete requestIdList[requestId]
  })

  if (Object.keys(updateList).length === 0) {
    return
  }

  const { resultText } = Object.values(updateList)[0]
  showOcrResult({ resultText })
}


export const _ = {}

