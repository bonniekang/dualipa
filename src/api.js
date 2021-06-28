import axios from "axios";


    // Get an Artist's Top Tracks 



    // Get an Artist's Albums 
export const albums = {
    
    }


// youtube video api

export const youtubeApi = axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 20,
        key: 'AIzaSyCS2-Wtbc0kY8Gmu7aqBVdN3pKSDgForCg',
    }
})

