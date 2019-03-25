const navigation = (state = {}, action) => {

  switch (action.type) {
    case 'SAVE_NAVIGATION_STATE':
      return {
        ...state,
          route: action.route
      }
    default:
      return state
  }
}

export default navigation
