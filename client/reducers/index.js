/**
* ************************************
*
* @module  index.js
* @author
* @date
* @description simply a place to combine reducers
*
* ************************************
*/

import { combineReducers } from 'redux';

// import reducers
import timerReducer from './timerReducer'; 

// combine reducers
const reducers = combineReducers({
   timer: timerReducer,
});

export default reducers;