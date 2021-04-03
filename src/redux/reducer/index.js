import {combineReducers} from 'redux';
import todos from './todos'
import reducer_2 from './user'
// import other reducers here

export default combineReducers({
    todos: todos,
    r2: reducer_2,
    // other reducers will come here
})