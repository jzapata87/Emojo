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

export const emojiMounted = () => ({
  type: 'EMOJI_MOUNTED',

})

export const saveNewUri = uri => ({
  type: 'SAVE_NEW_URI',
  newUri: uri
})
