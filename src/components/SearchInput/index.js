import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import searchIcon from './assets/search.png';

class SearchInput extends Component {
    state = {
        value: ''
    }

    handleInputChange = (event) => {
        this.setState({ value: event.target.value })
    }

    render() { 
        return ( 
            <div className={css(styles.searchInput)}>
                <img
                className={css(styles.icon)} 
                src={searchIcon} 
                alt="Search" />
                <input
                onChange={this.handleInputChange}
                value={this.state.value} 
                className={css(styles.inputField)}
                type="text" 
                placeholder="Search music" />
            </div>
         )
    }
}

const styles = StyleSheet.create({
    searchInput: {
        width: '85%',
        display: 'flex',
        alignItems: 'center'
    },

    icon: {
        width: 15,
        height: 15
    },

    inputField: {
        margin: '0px 10px',
        fontSize: '0.8rem',
        border: 0,
        background: 0,
        color: 'white',
        opacity: 0.4,
        transition: 'opacity 0.15s ease-in-out',
        ':focus' : {
            outline: 0,
            opacity: 1,
        },
        '::placeholder' : {
            color: 'white'
        }
    }
})
 
export default SearchInput;