export const getOnSubmitUploadForm = ({ uploadFile }) => {
  return () => {
    uploadFile()
  }
}

export default {}

