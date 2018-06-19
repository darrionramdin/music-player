import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SummaryTable from '../SummaryTable';

const SelectedAlbumDetails = ({data}) => {
    const { name, albumArt, released, songs, duration, description } = data;
    const songsCount = songs.length;
    const tableData = [
        {
            title: 'Released',
            data: released
        },
        {
            title: 'Songs',
            data: songsCount
        },
        {
            title: 'Duration',
            data: duration
        }
    ]
    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.imageContainer)}>
                <img 
                className={css(styles.image)}
                src={albumArt}
                alt={name} />
            </div>
            <SummaryTable data={tableData} />
            <p className={css(styles.description)}>
            {description} 
            </p>
        </div>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        borderRight: '2px solid #19181a'
    },

    imageContainer: {
        width: '100%',
        height: 'auto'
    },

    image: {
        width: '100%'
    },

    description: {
        padding: '0px 14px',
        fontSize: 10,
        opacity: 0.2
    }
})

//#19181a
 
export default SelectedAlbumDetails;