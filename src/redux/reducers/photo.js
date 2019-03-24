



const photo = (state = {}, action) => {

  switch (action.type) {
    case 'SAVE_PHOTO_URI':
      return {
        ...state,
          uri: action.uri
      }
    default:
      return state
  }
}

export default photo
