import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SongsListTableItem from '../SongsListTableItem';
import timerIcon from './assets/timer.png';

const SongsListTable = () => {
    return (
        <div>
            <header className={css(styles.header)}>
                <div className={css(styles.songHeader)}>Song</div>
                <div><img className={css(styles.icon)} src={timerIcon} alt="Duration"/></div>
            </header>
            <div>
                <SongsListTableItem 
                    position="01" 
                    title="Levels" 
                    duration="3:00"
                    isExplicit
                    isPlaying 
                />
                <SongsListTableItem 
                    position="02" 
                    title="Rapture (Avicii Remix)" 
                    duration="2:40" 
                />
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