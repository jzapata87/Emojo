export const savePhotoUri = uri => ({

  type: 'SAVE_PHOTO_URI',
  uri
})

export const saveNavState = route => ({
  type: 'SAVE_NAVIGATION_STATE',
  route
})

export const fetchBoundingBoxAsync = (uri) => ({
  type: 'FETCH_REQUESTED',
  uri

})
