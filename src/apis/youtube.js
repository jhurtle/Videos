import axios from 'axios';

const KEY = 'AIzaSyCij5MpD5in0laoM9TXX54Hwk9t9SB6Bu8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})