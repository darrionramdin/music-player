import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import YTPlayer from 'yt-player';

import IoIosPlay from 'react-icons/lib/io/ios-play';
import IoIosPause from 'react-icons/lib/io/ios-pause';
import { playSong } from '../../actions/actions_player';

class Player extends Component {  
    state = {
        songsList: [],
        currentSong: '' ,
        isPlaying: false,
        isPaused: false,
        songProgress: 0,
        currentTime: 0,
        duration: 0,
        currentPos: 1
    } 

    // On Mount, create the iframe and load the song in it.
    componentDidMount() {
        this.setState({ 
            songsList: this.props.selectedAlbum.songs,
            currentSong: this.props.player.id
        })
        this.player = new YTPlayer(this.refs.ytplayer);
        this.loadSong(this.state.currentSong);
    }

    // When the component leaves, clear the interval
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Recieve new props when props is updated
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.player.id !== prevState.currentSong){
          return { currentSong: nextProps.player.id};
       } else {
           return null;
       }
    }

    // When props is updated, load the song provided and play it.
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.player.id !== this.props.player.id){
          //Perform some operation here
          this.setState({currentSong: this.props.player.id});
          this.stopSong();
          this.loadSong(this.state.currentSong);
          this.playSong();
        }
      }

    // Loads the song into the iframe
    loadSong = (song) => {
        if (this.refs.ytplayer) {
            this.player.load(song);
        }       
    }

    // Get the progress time of the song in the format m:s
    getProgress = () => {
        this.interval = setInterval(() => {
            if(this.state.isPlaying){
                const progress = (this.player.getCurrentTime()/this.player.getDuration()) * 100;
                this.setState({ 
                    songProgress: progress, currentTime: `${Math.round(Math.floor(this.player.getCurrentTime()/60))}:${Math.round(this.player.getCurrentTime()%60)}`,
                    duration: `${Math.round(Math.floor(this.player.getDuration()/60))}:${Math.round(this.player.getDuration()%60)}` 
                });
            } 
        }, 1000)
    }
    
    // Call the iFrame play function
    playSong = () => {   
        this.setState( { isPlaying: true } );
        clearInterval(this.interval);  
        this.player.play();
        this.getProgress();
    }

    stopSong = () => {
        this.player.stop();
    }

    // Pause the iframe
    pauseSong = () => {      
        this.setState( { isPlaying: false } );
        clearInterval(this.interval);
        this.player.pause();
        clearInterval(this.interval);    
    }

    // Increment the position counter
    increasePos = () => {
        this.setState( { currentPos: this.state.currentPos + 1 } );
    }

    // Decrement the position counter
    decreasePos = () => {
        this.setState( { currentPos: this.state.currentPos - 1 } );
    }

    // Reset the position counter
    resetPos = () => {
        this.setState( { currentPos: 0 } )
    }

    // Skip To Another Song in the list of songs provided by the album
    skipSong = () => {
        clearInterval(this.interval); 
        if (this.state.currentPos < this.props.selectedAlbum.songs.length -1) {
            this.increasePos();
            this.props.playSong(this.props.selectedAlbum.songs[this.state.currentPos]);  
        } else {
            this.resetPos();
            this.props.playSong(this.props.selectedAlbum.songs[this.state.currentPos]);  
        }
        
    }

    // Go back To previous Song in the list of songs provided by the album
    prevSong = () => {
        if (this.state.currentPos > 0) {
            this.decreasePos();
            this.props.playSong(this.props.selectedAlbum.songs[this.state.currentPos]);
        }
    }

    render() {
        const {title, artist, album, albumArt } = this.props.player;
        const { isPlaying } = this.state;

        const seekbarWidth = {       
            width: `${this.state.songProgress}%`, 
            transition: 'width 0.3s ease-in'  
        };
    
        const bgImage = {   
            backgroundImage: `url("${albumArt}")`
        };

        return (
            <div className={css(styles.player)}>
                <div style={seekbarWidth} className={css(styles.seekbar)}></div>
                <div className={css(styles.playerContent)}>           
                    <div className={css(styles.songDetails)}>
                        <div className={css(styles.imageContainer)}>
                            <img 
                            className={css(styles.image)}
                            src={albumArt}
                            alt="Avicii - Levels"
                            />
                        </div>
                        <div>
                            <p className={css([styles.songDetail, styles.songTitle])}>{title}</p>
                            <p className={css(styles.songDetail)}>{artist}</p>
                            <p className={css(styles.songDetail)}>{album}</p>
                        </div>
                    </div>
                    <div className={css(styles.controls)}>
                        {/* <div onClick={this.prevSong}>
                            <IoIosSkipbackward color="white" size={18} />
                        </div> */}
                        {
                            isPlaying ? 
                            <div onClick={this.pauseSong} className={css(styles.play)}>
                                <IoIosPause color="white" size={18} />
                            </div>
                            :
                            <div onClick={this.playSong} className={css(styles.play)}>
                                <IoIosPlay color="white" size={18} />
                            </div>
                        }
                        {/* <div onClick={this.skipSong}>
                            <IoIosSkipforward color="white" size={18} />
                        </div> */}
                    </div>
                    <div className={css(styles.otherControls)}>
                        <div>
                            <span className={css(styles.currentTime)}>{this.state.currentTime} - {this.state.duration}</span>
                        </div>
                    </div>
                    <div style={bgImage} className={css(styles.bg)}></div>
                    <div className={css(styles.ytframe)}>
                       <div ref="ytplayer">
                       </div> 
                    </div>
                </div>
            </div>
        )
    }
   
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
        overflow: 'hidden',
    },

    bg: {
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'blur(80px)',
        position: 'absolute',
        zIndex: 1
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
        alignItems: 'center',
        zIndex: 2
    },

    play: {
        margin: '0px 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid white',
        padding: '8px 8px 8px 9px',
        borderRadius: 100,
        zIndex: 2
    },

    otherControls: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },

    currentTime: {
        fontSize: 10,
        opacity: 0.3,
        letterSpacing: '1px'
    },

    ytframe: {
        display: 'none'
    }
});

function mapStateToProps(state) {
    return {
        player: state.player,
        selectedAlbum: state.selectedAlbum
    }
}
 
export default connect(mapStateToProps, { playSong })(Player);