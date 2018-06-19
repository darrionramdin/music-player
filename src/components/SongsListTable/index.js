import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SongsListTableItem from '../SongsListTableItem';
import timerIcon from './assets/timer.png';

const SongsListTable = ({data}) => {
    return (
        <div>
            <header className={css(styles.header)}>
                <div className={css(styles.songHeader)}>Song</div>
                <div><img className={css(styles.icon)} src={timerIcon} alt="Duration"/></div>
            </header>
            <div>
                {
                    data ? data.map((song, index) => {
                        return (
                            <SongsListTableItem
                                key={song.id}
                                id={song.id} 
                                position={index} 
                                title={song.title}
                                artist={song.artist}
                                duration={song.duration}
                                album={song.album}
                                albumArt={song.albumArt}
                                isExplicit={song.isExplicit}
                                isPlaying={song.isPlaying} 
                            />
                        )
                    }) : <div>Loading...</div>
                }
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    table: {
        width: '100%'
    },

    header: {
        paddingBottom: 8,
        display: 'grid',
        gridTemplateColumns: '65px 485px auto',
        fontSize: 10.5,
        fontWeight: 400,
        textTransform: 'uppercase',
        opacity: 0.3
    },

    songHeader: {
        gridColumn: '2/3'
    },

    filler: {
        marginRight: 0
    },

    row: {
        borderTop: '1px solid #171719',
        borderBottom: ''
    },

    icon: {
        width: 'auto',
        height: 12
    }
})
 
export default SongsListTable;