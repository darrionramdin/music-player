import { PLAY_SONG } from './actionTypes';

export function playSong(song) {
    return {
        type: PLAY_SONG,
        payload: song
    }
};