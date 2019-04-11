export default function(emotion) {
    switch (emotion) {
      case 'HAPPY':
        return {
          ...state,
            photoUri: action.photo.uri,
            fileName: action.photo.fileName,
            type: action.photo.type
        }
      default:
        return null
  }
}
