import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from "styled-components";

const Header =  styled.header`
font-size: 50px;
font-weight: bold;
color: #FD6BA5;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100px;
display: flex;
align-items: center;
background-color: rgba(20, 20, 20, 0.8);
z-index: 10;
box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List =  styled.ul`
display: flex;
`;
const Item =  styled.li`
width: 180px;
height: 100px;
text-align: center;
border-bottom: 3px solid ${props => (props.current ? "#FD6BA5" : "transparent")};
transition: border-bottom 0.5s ease-in-out;
`;
const Nav =  styled(Link)`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/"} >
                <Nav to="/">Dualipa</Nav>
            </Item>
            <Item current={pathname === "/video"} >
                <Nav to="/video">Video</Nav>
            </Item>
            <Item current={pathname === "/tour"} >
                <Nav to="/tour">Tour</Nav>
            </Item>
        </List>
    </Header>
)) 