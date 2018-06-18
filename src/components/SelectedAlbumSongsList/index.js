import React from 'react';
import { css } from 'aphrodite';

import layout from '../Layout';
import SongsListTable from '../SongsListTable';

const SelectedAlbumSongsList = () => {
    return (
        <div className={css(layout.container)}>
            <SongsListTable />
        </div>
    )
}
 
export default SelectedAlbumSongsList;