
import Images from '../../assets/index.js';


const photo = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_PHOTO_URI':
      return {
        ...state,
          photoUri: action.photo.uri,
          fileName: action.photo.fileName,
          type: action.photo.type
      }
    case 'FETCH_REQUESTED_ASYNC':
      return {
        ...state,
          loading: "isLoading"
      }
    case 'FETCH_SUCCEEDED':
      return {
        ...state,
          emotion: emotion(action.data.Emotions),
          data: action.data.BoundingBox,
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
    case 'CHANGE_TEXT':
      return {
        ...state,
          comment: action.text
      }
    case 'SHARE_SUCCEEDED':
      return {
        ...state,
          shareData: action.data
      }
    case 'SHARE_FAILED':
      return {
        ...state,
          shareError: action.error
      }
    default:
      return state
  }
}

function emotion(data) {
   const emotion =  data.reduce((max, obj) => obj.Confidence > max.Confidence ? obj : max);

   return emotionToFileName(emotion)
}

function emotionToFileName(emotion) {
    console.log(emotion.Type)
    switch (emotion.Type) {
      case 'HAPPY':
        return Images.happy
      case 'CONFUSED':
        return Images.confused
      case 'DISGUSTED':
        return Images.disgusted
      case 'ANGRY':
        return Images.angry
      case 'SAD':
        return Images.sad
      default:
        return null
  }
}

export default photo
