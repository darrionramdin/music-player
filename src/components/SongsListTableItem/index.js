import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import speakerIcon from './assets/speaker.png';

const SongsListTableItem = (props) => {
    const {position, title, duration, isExplicit, isPlaying} = props;
    return (
        <div className={css(styles.item)}>
            <div className={css([styles.flex, styles.order])}>
                <div>+</div>
                {
                    isPlaying ? <div className={css(styles.isPlayingIconContainer)}><img className={css(styles.isPlayingIcon)} src={speakerIcon} alt="Is Playing"/></div> : <div>{position}</div>
                }       
            </div>
            <div className={css([styles.flex, styles.songInfo])}>
                <div>
                    <span className={css(isPlaying ? [styles.title, styles.isPlaying]: styles.title)}>{title}</span>
                </div>
                {
                    isExplicit ? <div className={css(styles.explicitTag)}>
                        <span>Explicit</span>
                    </div> : <div></div>
                }
                
            </div>
            <div>
                <span className={css(isPlaying ? [styles.duration, styles.isPlaying] : styles.duration)}>{duration}</span>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    item: {
        height: 28,
        padding: '3px 0',
        display : 'grid',
        gridTemplateColumns: '50px 495px auto',
        borderTop: '1px solid #404040',
        cursor: 'pointer',
        transition: '0.15s ease-in-out',
        ':hover' : {
            opacity: 0.8
        }
    },

    flex: {
        display: 'flex',
        alignItems: 'center',
    },

    order: {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 10.5,
        color: '#404040'
    },

    songInfo: {
        margin: '0px 15px',
        display: 'flex',
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 12,
        fontWeight: 600
    },

    duration: {
        fontSize: 12,
        opacity: 0.3
    },

    explicitTag: {
        padding: '2px 12px',
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#404040',
        border: '1px solid #404040',
        borderRadius: 20
    },

    isPlaying: {
        color: '#32cd65',
        opacity: 1
    },

    isPlayingIconContainer: {
        width: 16,
        height: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32cd65',
        borderRadius: 100
    },

    isPlayingIcon: {
        width: 'auto',
        height: '50%'
    }
})
 
export default SongsListTableItem;