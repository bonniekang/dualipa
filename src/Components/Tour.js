import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

const Button = styled.a`
    border-radius: 15px;
    background-color: #FD6BA5;
    padding: 10px; 50px;
    border: none;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
`;
const Info = styled.div`
color: #FD6BA5;
opacity: 0.7;
`;

const Date = styled.div`
    padding: 5px 0;
    
`;

const Artist = styled.div`
padding: 5px 0;
color: white;
`;

const Location = styled.div`
padding: 5px 0;
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    width: 50%;
    padding-bottom: 40px;
    border-bottom: 2px dashed white;
`;


const Tour = props => (
    <Container>
        <Box>
            <Info>
                <Date>{props.tour.date}</Date>
                <Artist>{props.tour.artist}</Artist>
                <Location>{props.tour.location}</Location>
            </Info>
            <Button href={'https://www.songkick.com/search?utf8=%E2%9C%93&type=initial&query=dua+lipa'}>Buy ticket</Button>
        </Box>
    </Container>
)

Tour.propTypes = {
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}

export default Tour;