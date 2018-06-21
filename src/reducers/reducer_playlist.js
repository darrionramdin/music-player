import { LOAD_LIST } from '../actions/actionTypes';

export default function(state=[], action) {
    switch(action.type) {
        case LOAD_LIST:
        console.log(action.payload.songs);
            return action.payload.songs
        default:
            return state;
    }
}