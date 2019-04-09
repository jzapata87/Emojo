import { combineReducers } from 'redux'
import photo from './photo'
import user from './user'
import navigation from './navigation'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({photo, navigation, form: formReducer, user})
