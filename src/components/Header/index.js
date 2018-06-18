import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import layout from '../Layout';
import SearchInput from '../SearchInput';
import ProfileDropdown from '../ProfileDropdown';

const Header = () => {
    return (
        <div className={css(styles.header)}>
            <div className={css([layout.container, styles.layout])}>
                <div className={css(styles.windowButtons)}>
                    <div className={css([styles.button, styles.close])}></div>
                    <div className={css([styles.button, styles.expand])}></div>
                    <div className={css([styles.button, styles.minimize])}></div>
                </div>
                <SearchInput />
                <ProfileDropdown />
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '42px',
        gridColumn: 'span 3',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#161719'

    },

    layout: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    windowButtons: {
        display: 'flex'
    },

    button: {
        width: 10,
        height: 10,
        margin: '0px 4px',
        borderRadius: 20,
    },

    close: {
        background: '#ff6966',
    },

    expand: {
        background: '#fcba41'
    },

    minimize: {
        background: '#35c949'
    }
})
 
export default Header;