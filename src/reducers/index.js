import { combineReducers } from 'redux';

import playerReducer from './reducer_player';
import selectedAlbumReducer from './reducer_selectedAlbum';

const rootReducer = combineReducers({
    player: playerReducer,
    selectedAlbum: selectedAlbumReducer
});

export default rootReducer;