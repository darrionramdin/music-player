import React from 'react';

import SelectedAlbumDetails from '../SelectedAlbumDetails';
import SelectedAlbumHeader from '../SelectedAlbumHeader';
import SelectedAlbumSongsList from '../SelectedAlbumSongsList';

const SelectedAlbum = () => {
    const style = {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '200px auto',
    }
    return (
        <div style={style}>
            <SelectedAlbumDetails />
            <div>
                <SelectedAlbumHeader />
                <SelectedAlbumSongsList />
            </div>
        </div>
    )
}
 
export default SelectedAlbum;