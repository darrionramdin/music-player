import React from 'react';

import SelectedAlbumHeaderInfo from '../SelectedAlbumHeaderInfo';

const SelectedAlbumHeader = ({data}) => {
    const style = {
        margin: 30
    }
    return (
        <div style={style}>
            <SelectedAlbumHeaderInfo data={data} />
        </div>
    )
}
 
export default SelectedAlbumHeader;