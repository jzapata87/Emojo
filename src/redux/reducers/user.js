const user = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER_INFO_SUCCEEDED":
      return {
        ...state,
          userInfo: action.data
      }
    case "GET_USER_FEED_SUCCEEDED":
      return {
        ...state,
          data: action.data
      }
    default:
      return state
  }
}



export default user
