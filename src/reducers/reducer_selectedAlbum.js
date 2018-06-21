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
        },
    
        {
            id: '6uFcOfNPPtE',
            title: 'Rapture',
            artist: 'Nadia Ali (Avicii Remix)',
            album: 'Stories',
            albumArt: 'http://www.nadiaali.com/wp-content/uploads/2012/11/Nadia-Ali-Queen-of-Clubs-Diamond-Edition.jpg',
            duration: '3:02',
            isExplicit: false,
        },
        {
            id: 'TlaE2x3vffw',
            title: 'Enough is Enough' ,
            artist: 'Avicii',
            album: 'Stories',
            albumArt: 'https://images.genius.com/8bf17422923aa898a0da84cc5ed286bc.1000x1000x1.png',
            duration: '5:39',
            isExplicit: false,
        },
    
        {
            id: 'CC1u6VaakVI',
            title: 'Seek Bromance',
            artist: 'Avicii',
            album: 'Stories',
            albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/SeekBromance.jpg/220px-SeekBromance.jpg',
            duration: '3:24',
            isExplicit: true,
        },

        {
            id: 'Iq6gCapM9gk',
            title: 'Wake Me Up',
            artist: 'Avicii',
            album: 'Stories',
            albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Avicii_Wake_Me_Up_Official_Single_Cover.png/220px-Avicii_Wake_Me_Up_Official_Single_Cover.png',
            duration: '3:24',
            isExplicit: false,
        },

        {
            id: 'vQ3XgMKAgxc',
            title: 'Lonely Together',
            artist: 'Avicii (ft. Rita Ora)',
            album: 'Stories',
            albumArt: 'https://www.musicmania.cz/images/1yQ6LgUTkExFMBA.jpg',
            duration: '3:04',
            isExplicit: false,
        },

        {
            id: 'Wb5VOQexMBU',
            title: 'You Make Me',
            artist: 'Avicii',
            album: 'Stories',
            albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Avicii_-_%22You_Make_Me%22_%28Single%29.jpg/220px-Avicii_-_%22You_Make_Me%22_%28Single%29.jpg',
            duration: '3:59',
            isExplicit: false,
        }
    ]
}

export default function(state=initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}