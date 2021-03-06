export const savePhotoUri = photo => ({

  type: 'SAVE_PHOTO_URI',
  photo
})

export const saveNavState = route => ({
  type: 'SAVE_NAVIGATION_STATE',
  route
})

export const fetchBoundingBoxAsync = (uri) => ({
  type: 'FETCH_REQUESTED',
  uri

})

export const saveNewUri = uri => ({
  type: 'SAVE_NEW_URI',
  newUri: uri
})

export const handleChangeText = text => ({
  type: 'CHANGE_TEXT',
  text
})

export const sharePhoto = (uri, fileName, imageType, id) => ({
  type: 'SHARE_STARTED',
  uri,
  fileName,
  imageType,
  id
})

export const getUserInfo = token => ({
  type: 'GET_USER_INFO',
  token
})
