/* mypage/input.js */

export const getFetchResponseList = ({ apiEndpoint, getRequest }) => {
  return ({ requestIdListStr }) => {
    const url = `${apiEndpoint}/response/list`
    const param = { requestIdListStr }
    return getRequest(url, param)
  }
}

export default {}

