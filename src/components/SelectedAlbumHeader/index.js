import React from 'react';

import SelectedAlbumHeaderInfo from '../SelectedAlbumHeaderInfo';

const SelectedAlbumHeader = () => {
    const style = {
        margin: 30
    }
    return (
        <div style={style}>
            <SelectedAlbumHeaderInfo />
        </div>
    )
}
 
export default SelectedAlbumHeader;