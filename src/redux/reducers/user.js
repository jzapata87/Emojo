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
    case "GET_FEED":
      return {
        ...state,
          feed: action.data,
          isFetched: false
      }
    case "GET_FEED_SUCCEEDED":
      return {
        ...state,
          feed: action.data,
          isFetched: true
      }
    default:
      return state
  }
}



export default user
