import React, { useState } from 'react'
import ReactPlayer from "react-player"
import { withStyles, Fab } from "@material-ui/core"
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const styles = {
    videoContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop:"50px"
    },
    video: {
        margin: "20px"
    },
    mute: {
        position: "fixed",
        top:10,
        right:20


    }
}
function VideoHandler({ videos, classes }) {
    const [mute, setMute] = useState(false)
    const [playing, setPlaying] = useState(videos.map(_ => false))
    const playHandler = (index) => {
        setPlaying(playing.map((_, i) => index === i))
    }
    console.log(mute)
    return (
        <div className={classes.videoContainer}>
            {videos.map((url, index) => <ReactPlayer className={classes.video} url={url} playing={playing[index]} width="800px" volume="1" onPlay={() => playHandler(index)} muted={mute} />)}
            <Fab className={classes.mute} onClick={() => setMute(!mute)} >{mute ? <VolumeOffIcon /> : <VolumeUpIcon />}</Fab>
        </div>
    )
}
export default withStyles(styles)(VideoHandler)