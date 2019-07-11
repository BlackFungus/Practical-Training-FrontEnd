import { combineReducers } from 'redux'
import {user} from './user.redux'
import {personData} from './personData.redux.js'
import { topic } from './topic.redux'



export default combineReducers({user,personData,topic})