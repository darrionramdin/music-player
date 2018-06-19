import React from 'react';
import { css } from 'aphrodite';

import layout from '../Layout';
import SongsListTable from '../SongsListTable';

const SelectedAlbumSongsList = ({data}) => {
    const { songs } = data;
    return (
        <div className={css(layout.container)}>
            <SongsListTable data={songs} />
        </div>
    )
}
 
export default SelectedAlbumSongsList;