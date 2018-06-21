import { combineReducers } from 'redux';

import playerReducer from './reducer_player';
import selectedAlbumReducer from './reducer_selectedAlbum';
import playlistReducer from './reducer_playlist';

const rootReducer = combineReducers({
    player: playerReducer,
    selectedAlbum: selectedAlbumReducer,
    playlist: playlistReducer
});

export default rootReducer;