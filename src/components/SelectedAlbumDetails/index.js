import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SummaryTable from '../SummaryTable';

const SelectedAlbumDetails = () => {
    const tableData = [
        {
            title: 'Released',
            data: '2018'
        },
        {
            title: 'Songs',
            data: '19'
        },
        {
            title: 'Duration',
            data: '59 Min'
        }
    ]
    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.imageContainer)}>
                <img 
                className={css(styles.image)}
                src="https://i.pinimg.com/736x/93/0d/6a/930d6a65f42cf9b95353c1754b3bf3b7--chris-martin-chris-delia.jpg"
                alt="Avicii - Stories" />
            </div>
            <SummaryTable data={tableData} />
            <p className={css(styles.description)}>
            No depending be convinced in unfeeling he. 
            Excellence she unaffected and too sentiments her. 
            Rooms he doors there ye aware in by shall. 
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