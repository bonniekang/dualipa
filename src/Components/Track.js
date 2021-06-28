import React from 'react';
import styled from "styled-components"

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    height: 400px;
    width: 300px;
    background-position: center center;
    transition: opacity 0.2s linear;
`;

const Title = styled.div`
font-size: 15px;
font-weight: bold;
color:#FD6BA5;
    top: 200px;
    right: 5px;
    opacity: 0;
    display: block;
    margin-bottom: 5px;
    position: absolute;
    transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
    height: 400px;
    width: 300px;
    margin-bottom: 5px;
    position: relative;
    &:hover{
        ${Image}{
            opacity: 0.3;
        }
        ${Title}{
            opacity: 1;
        }
    };
`;


const Track = props => {
    return (
        <Container>
            <ImageContainer>
                <Image bgUrl={props.imageUrl} />
                <Title>{props.name}</Title>
            </ImageContainer>
        </Container>
    )
}


export default Track;