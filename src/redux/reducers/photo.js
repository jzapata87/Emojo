



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
          loading: true
      }
    case 'FETCH_SUCCEEDED':
      return {
        ...state,
          data: action.data
      }
    case 'FETCH_FAILED':
      return {
        ...state,
          error: action.error
      }
    default:
      return state
  }
}

export default photo
