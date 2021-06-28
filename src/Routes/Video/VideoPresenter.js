import React from 'react';
import VideoList from '../../Components/VideoList'
import VideoDetail from '../../Components/VideoDetail'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const VideoPresenter = ({ videos, selectedVideo, onVideoSelect }) => {
    return (
        <Container>
            <VideoDetail video={selectedVideo} />
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
        </Container>
    )
}



export default VideoPresenter;