import React from "react";
import Track from './Track';
import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(4, 1fr);
`;

const VideoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

const Text = styled.div`
    font-size: 90px;
    font-weight: bold;
    margin: 0 20px;
    color: #FD6BA5;
    transform: rotate(-20deg);
`;

const Player = props => {
    

    return (
        <div>
            <VideoContainer>
                <iframe width="1000" height="715" src="https://www.youtube.com/embed/BC19kwABFwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Text>Dua Lipa</Text>
            </VideoContainer>
            <Container>
            {props.items.map((item) => (
                <Track name={item.track.name} imageUrl={item.track.album.images[0].url} />
            ))}
            </Container>
        </div>
      );
}

export default Player;