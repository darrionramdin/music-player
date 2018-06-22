import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../Header';
import SelectedAlbum from '../../containers/SelectedAlbum';
import Player from '../../containers/Player';
import SideNav from '../SideNav';

class App extends Component {
  render() {
    return (
      <div className={css(styles.screen)}>
        <div className={css(styles.layout)}>
          <Header />
          <div></div> 
          <SideNav />
          <SelectedAlbum />
          <Player />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    width: '1120px',
    height: '700px',
    background: '#121315',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.2)',
    overflow: 'hidden'
  },

  layout: {
    height: '100%',
    width: '100%',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: '72px 210px auto',
    gridAutoRows: 'min-content 590px auto'
  }
})

export default App;
