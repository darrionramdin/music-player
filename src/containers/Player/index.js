import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import YTPlayer from 'yt-player';

import IoIosPlay from 'react-icons/lib/io/ios-play';
import IoIosSkipbackward from 'react-icons/lib/io/ios-skipbackward';
import IoIosSkipforward from 'react-icons/lib/io/ios-skipforward';
import IoIosPause from 'react-icons/lib/io/ios-pause';

class Player extends Component {  
    state = {
        currentSong: this.props.player.id,
        isPlaying: false,
        isPaused: false,
        songProgress: 0,
        currentTime: 0,
        duration: 0
    } 

    componentDidMount() {
        this.player = new YTPlayer(this.refs.ytplayer);
        this.loadSong(this.state.currentSong);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.player.id !== prevState.currentSong){
          return { currentSong: nextProps.player.id};
       } else {
           return null;
       }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.player.id !== this.props.player.id){
          //Perform some operation here
          this.setState({currentSong: this.props.player.id});
          this.stopSong();
          this.loadSong(this.state.currentSong);
          this.playSong();
        }
      }

    loadSong = (song) => {
        if (this.refs.ytplayer) {
            this.player.load(song);
        }
        
    }

    getProgress = () => {
        this.interval = setInterval(() => {
                const progress = (this.player.getCurrentTime()/this.player.getDuration()) * 100;
                this.setState({ songProgress: progress, currentTime: `${Math.round(Math.floor(this.player.getCurrentTime()/60))}:${Math.round(this.player.getCurrentTime()%60)}` });
                console.log(this.state.currentTime);
        }, 1000)
    }

    stopSong = () => {
        this.player.stop();
    }

    playSong = () => {
        
        this.player.play();
        this.setState( { isPlaying: true } );
        this.player.on('playing', () => {
            this.setState( { duration: `${Math.round(Math.floor(this.player.getDuration()/60))}:${Math.round(this.player.getDuration()%60)}`} )
            this.getProgress();
        });
        this.player.on('ended', () => {
            clearInterval(this.interval);
        })
    }

    pauseSong = () => {
        this.player.pause();
        this.setState( { isPlaying: false } );
        clearInterval(this.interval);
    }

    render() {
        // If the loaded song is not the new song in the state, change the state to the the new song and play it.
        // if (this.props.player.id !== this.state.currentSong) {
        //     this.stopSong;
        //     this.loadSong(this.props.player.id);
        //     this.playSong;    
        //     this.setState( { currentSong: this.props.player.id } );
        // }    
        const { id, title, artist, album, albumArt } = this.props.player;
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
                        <div>
                            <IoIosSkipbackward color="white" size={18} />
                        </div>
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
                        <div>
                            <IoIosSkipforward color="white" size={18} />
                        </div>
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
        filter: 'blur(120px)',
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
        alignItems: 'center'
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
        alignItems: 'center'
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
        player: state.player
    }
}
 
export default connect(mapStateToProps)(Player);