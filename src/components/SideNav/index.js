import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const SideNav = () => {
    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.container)}>
                <div className={css(styles.section)}>
                    <h1 className={css(styles.heading)}>Your Music</h1>
                    <div className={css(styles.menu)}>
                        <a className={css(styles.menuItem)} href="#/">Songs</a>
                        <a className={css(styles.menuItem)} href="#/">Albums</a>
                        <a className={css(styles.menuItem)} href="#/">Artists</a>
                        <a className={css(styles.menuItem)} href="#/">Local Files</a>
                    </div>
                </div>
                <div className={css(styles.section)}>
                    <h1 className={css(styles.heading)}>Playlists</h1>
                    <div className={css(styles.menu)}>
                        <a className={css(styles.menuItem)} href="#/">Starred</a>
                        <a className={css(styles.menuItem)} href="#/">Most Played</a>
                        <a className={css(styles.menuItem)} href="#/">Recently Played</a>
                        <a className={css(styles.menuItem)} href="#/">Discover Weekly</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        background: 'linear-gradient(to bottom right, #121315, #18191b)' 
        
    },

    section: {
        paddingTop: 30
    },

    heading: {
        fontSize: 19,
        fontWeight: 600,
        color: '#7d7d7d'
    },

    container: {
        height: '100%',
        margin: '0px 22px'
    },

    menu: {
        display: 'flex',
        flexDirection: 'column'
    },

    menuItem: {
        margin: '3px 0',
        fontSize: 13,
        fontWeight: 600,
        color: 'white',
        textDecoration: 'none'

    }
})
 
export default SideNav;