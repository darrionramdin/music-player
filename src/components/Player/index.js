import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import IoIosPlay from 'react-icons/lib/io/ios-play';
import IoIosSkipbackward from 'react-icons/lib/io/ios-skipbackward';
import IoIosSkipforward from 'react-icons/lib/io/ios-skipforward';

const Player = () => {
    const seekbarWidth = {       
        width: '50%',      
    };

    const bgImage = {   
        backgroundImage: 'url("https://i.pinimg.com/736x/93/0d/6a/930d6a65f42cf9b95353c1754b3bf3b7--chris-martin-chris-delia.jpg")'  
    };
    return (
        <div className={css(styles.player)}>
            <div style={seekbarWidth} className={css(styles.seekbar)}></div>
            <div className={css(styles.playerContent)}>           
                <div className={css(styles.songDetails)}>
                    <div className={css(styles.imageContainer)}>
                        <img 
                        className={css(styles.image)}
                        src="https://i.pinimg.com/736x/93/0d/6a/930d6a65f42cf9b95353c1754b3bf3b7--chris-martin-chris-delia.jpg" 
                        alt="Avicii - Levels"
                        />
                    </div>
                    <div>
                        <p className={css([styles.songDetail, styles.songTitle])}>Waves</p>
                        <p className={css(styles.songDetail)}>Kanye West</p>
                        <p className={css(styles.songDetail)}>The Life of Pablo</p>
                    </div>
                </div>
                <div className={css(styles.controls)}>
                    <div>
                        <IoIosSkipbackward color="white" size={18} />
                    </div>
                    <div className={css(styles.play)}>
                        <IoIosPlay color="white" size={18} />
                    </div>
                    <div>
                        <IoIosSkipforward color="white" size={18} />
                    </div>
                </div>
                <div className={css(styles.otherControls)}>
                    <div>
                        <span className={css(styles.currentTime)}>1:52 - 3:02</span>
                    </div>
                </div>
                <div style={bgImage} className={css(styles.bg)}></div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    seekbar: {
        height: 4,
        background: '#32cd65',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40
    },

    player: {
        width: '100%',
        gridColumn: 'span 3',
    },

    playerContent: {
        height: '100%',
        padding: '5px 8px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
        justifyItems: 'space-between',
        position: 'relative',
        overflow: 'hidden'
    },

    bg: {
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'blur(120px)',
        position: 'absolute',
    },

    imageContainer: {
        width: 55,
        height: 55
    },

    image: {
        width: '100%',
        height: '100%'
    },

    songDetails: {
        display: 'flex'
    },

    songDetail: {
        margin: '1px 14px',
        fontSize: 12,
        color: 'white'
    },

    songTitle: {
        fontWeight: 600
    },

    controls: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    play: {
        margin: '0px 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid white',
        padding: '8px 8px 8px 9px',
        borderRadius: 100
    },

    otherControls: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    currentTime: {
        fontSize: 10,
        opacity: 0.3,
        letterSpacing: '1px'
    }
});
 
export default Player;