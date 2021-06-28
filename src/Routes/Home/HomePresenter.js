import { render } from '@testing-library/react';
import React, {Component} from 'react';
import * as $ from "jquery";
import Player from '../../Components/Player';
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Login = styled.a`
    padding: 20px 30px;
    font-size: 25px;
    background-color: #FD6BA5;
    border-radius: 50px;
    font-weight: bold;
`;

const REACT_APP_CLIENT_ID='69309b51593b49968e777b03b4be2909';
const REACT_APP_AUTHORIZE_URL='https://accounts.spotify.com/authorize?';
const REACT_APP_REDIRECT_URL='https://bonniekang.github.io/dualipa/';
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "playlist-read-private",
    ];

// Get the code of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";



class HomePresenter extends Component {
    constructor(){
        super();
        this.state = {
            token: null,
            items: []
          };
      
          this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
          this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        // Set token
        let _token = hash.access_token;
        if (_token) {
          // Set token
          this.setState({
            token: _token
          });
          this.getCurrentlyPlaying(_token);
        }
        // set interval for polling every 5 seconds
        this.interval = setInterval(() => this.tick(), 5000);
      }

    componentWillUnmount() {
        // clear the interval to save resources
        clearInterval(this.interval);
      }

    tick() {
        if(this.state.token) {
          this.getCurrentlyPlaying(this.state.token);
        }
      }
      

      getCurrentlyPlaying(token) {
        // Make a call using the token
        $.ajax({
          url: "https://api.spotify.com/v1/playlists/6r1YL1bMrhdxPZ8I4gvJ0X/tracks",
          type: "GET",
          beforeSend: xhr => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
          },
          success: data => {
            
            console.log(data);
            this.setState({
              items: data.items,
            });
          }
        });
      }

    render(){
        return (
            <Container>
                {!this.state.token && (
                <Login
                href={`${REACT_APP_AUTHORIZE_URL}client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                >
                Login to Spotify
                </Login>
            )}
            {this.state.token && !this.state.no_data && (
                <Player
              items={this.state.items}

            />
            )}
            </Container>
        )
    }
}



export default HomePresenter;