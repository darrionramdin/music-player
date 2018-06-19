const initialState = {
    name: 'Stories',
    artist: 'Avicii',
    description: 'No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. Rooms he doors there ye aware in by shall.',
    released: '2018',
    duration: '59 Min',
    albumArt: 'https://i.pinimg.com/736x/93/0d/6a/930d6a65f42cf9b95353c1754b3bf3b7--chris-martin-chris-delia.jpg',
    songs: [
        {
            id: 'EgxHqMpK1Nw',
            title: 'Levels',
            artist: 'Avicii',
            album: 'Stories',
            albumArt: 'https://i.pinimg.com/736x/93/0d/6a/930d6a65f42cf9b95353c1754b3bf3b7--chris-martin-chris-delia.jpg',
            duration: '3:02',
            isExplicit: false,
            isPlaying: false,
        },
    
        {
            id: '6uFcOfNPPtE',
            title: 'Rapture',
            artist: 'Nadia Ali (Avicii Remix)',
            album: 'Stories',
            albumArt: 'http://www.nadiaali.com/wp-content/uploads/2012/11/Nadia-Ali-Queen-of-Clubs-Diamond-Edition.jpg',
            duration: '3:02',
            isExplicit: false,
            isPlaying: false,
        }
    ]
}

export default function(state=initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}