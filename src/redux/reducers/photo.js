



const photo = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_PHOTO_URI':
      return {
        ...state,
          uri: action.uri
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
    default:
      return state
  }
}

export default photo
