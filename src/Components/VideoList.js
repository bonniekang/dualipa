import React from 'react';
import VideoItem from './VideoItem'
import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 20px;
    height: 700px;
`;

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItem onVideoSelect={onVideoSelect} video={video}/>
        )
    })
    return (
        <Container>
            {renderedList}
        </Container>
    )
}

export default VideoList