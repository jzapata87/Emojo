



const photo = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_PHOTO_URI':
      return {
        ...state,
          photoUri: action.photo.uri,
          fileName: action.photo.fileName,
          type: action.photo.type
      }
    case 'FETCH_REQUESTED_ASYNC':
      return {
        ...state,
          loading: "isLoading"
      }
    case 'FETCH_SUCCEEDED':
      return {
        ...state,
          data: action.data,
          loading: "isLoaded"
      }
    case 'FETCH_FAILED':
      return {
        ...state,
          error: action.error
      }
    case 'CAPTURE':
      return {
        ...state,
          capture: action.capture
      }
    case 'SAVE_NEW_URI':
      return {
        ...state,
          newUri: action.newUri
      }
    case 'CHANGE_TEXT':
      return {
        ...state,
          comment: action.text
      }
    case 'SHARE_SUCCEEDED':
      return {
        ...state,
          shareData: action.data
      }
    case 'SHARE_FAILED':
      return {
        ...state,
          shareError: action.error
      }
    default:
      return state
  }
}

export default photo
