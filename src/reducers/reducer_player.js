import { PLAY_SONG } from '../actions/actionTypes';

// const initialState = {
//     id: 'EgxHqMpK1Nw',
//     title: 'Levels',
//     artist: 'Avicii',
//     album: 'Stories',
//     albumArt: 'https://i.pinimg.com/736x/93/0d/6a/930d6a65f42cf9b95353c1754b3bf3b7--chris-martin-chris-delia.jpg'
// }

const initialState = {
    id: 'EgxHqMpK1Nw',
    title: 'Levels',
    artist: 'Avicii',
    album: 'Stories',
    albumArt: 'https://i.pinimg.com/736x/93/0d/6a/930d6a65f42cf9b95353c1754b3bf3b7--chris-martin-chris-delia.jpg'
}

export default function(state=initialState, action) {
    switch(action.type) {
        case PLAY_SONG:
            return action.payload;
        default:
            return state;
    }
}