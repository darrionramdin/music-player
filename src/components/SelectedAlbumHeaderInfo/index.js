import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const SelectedAlbumHeaderInfo = ({data}) => {
    const { name, artist} = data;
    return (
        <div>
            <h1 className={css(styles.title)}>{name}</h1>
            <p className={css(styles.author)}><span className={css(styles.light)}>Album by</span> <a href="#/" className={css(styles.link)}>{artist}</a></p>
        </div>
    )
}

const styles = StyleSheet.create({
    title: {
        margin: 0,
        fontSize: 18,
        fontWeight: 600
    },
    author: {
        margin: '4px 0 0 0',
        fontSize: 10,  
        fontStyle: 'italic' 
    },

    light: {
        opacity: 0.3
    },

    link: {
        fontWeight: 600,
        fontStyle: 'normal',  
        color: 'white',
        opacity: 1
    }
})
 
export default SelectedAlbumHeaderInfo;