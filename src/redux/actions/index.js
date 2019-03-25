export const savePhotoUri = uri => ({
  type: 'SAVE_PHOTO_URI',
  uri
})

export const saveNavState = route => ({
  type: 'SAVE_NAVIGATION_STATE',
  route
})
