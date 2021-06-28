import React from "react";
import VideoPresenter from "./VideoPresenter.js";
import { youtubeApi } from "../../api.js";

export default class extends React.Component{

    state = { videos: [], selectedVideo: null }

    async componentDidMount(){
        const response = await youtubeApi.get('/search', {
            params: {
                q: 'dualipa'
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }



    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        const { videos, selectedVideo } = this.state;
        return (
            <VideoPresenter videos={videos} selectedVideo={selectedVideo} onVideoSelect={this.onVideoSelect} />
        )
    }
}