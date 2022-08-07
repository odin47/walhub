import {combineReducers} from 'redux'
import repositoryReducer from './repositories/repositoryReducer'


const reducers = combineReducers({
    repositoryData: repositoryReducer
})

export default reducers
