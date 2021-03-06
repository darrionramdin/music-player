import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectedAlbumDetails from '../../components/SelectedAlbumDetails';
import SelectedAlbumHeader from '../../components/SelectedAlbumHeader';
import SelectedAlbumSongsList from '../../components/SelectedAlbumSongsList';
import { playSong } from '../../actions/actions_player'; 
import { loadList } from '../../actions/actions_playlist'; 

class SelectedAlbum extends Component {
    render(){
        const style = {
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '200px auto',
        }

        const data = this.props.selectedAlbum;
        return (
            <div style={style}>
                <SelectedAlbumDetails data={data} />
                <div>
                    <SelectedAlbumHeader data={data} />
                    <SelectedAlbumSongsList data={data} />
                </div>
            </div>
        )
    }   
}

function mapStateToProps(state) {
    return {
        selectedAlbum: state.selectedAlbum
    }
}
 
export default connect(mapStateToProps, { playSong, loadList })(SelectedAlbum);