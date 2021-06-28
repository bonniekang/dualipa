import React from 'react';
import styled from "styled-components"

const VideoBox = styled.div`
    margin: 0 20px;
    width: 700px;
    display: flex;

`;

const Video = styled.iframe`
    width: 700px;
    height: 500px;
`;

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <VideoBox>
            <Video title="video player" src={videoSrc} />
        </VideoBox>
    )
}

export default VideoDetail