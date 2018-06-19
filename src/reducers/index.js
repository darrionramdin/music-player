import { combineReducers } from 'redux';

import playerReducer from './reducer_player';

const rootReducer = combineReducers({
    player: playerReducer
});

export default rootReducer;