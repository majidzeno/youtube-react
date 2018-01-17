import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';
import SearchBox from './components/search_box';
import VideoList from './components/video_list';
import VideoPlayer from './components/video_player';
const API_KEY = 'AIzaSyAz0M3rktLIgv5jMODLwpcP8HnDAE-3OSk';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos : [],
      selectedVideo : null
    };
    this.onVideoSearch('casey neistat');
  }

  onVideoSearch(term){
    YTSearch({key:API_KEY, term : term },(videos) =>{
      this.setState({ 
        videos : videos , 
        selectedVideo : videos[0]
      });
    });
  }

  render() {
    const videoSearch  = _.debounce((term) => {this.onVideoSearch(term)}, 300);
    return (
      <div className="youtubeApp">
        <SearchBox onSearchTermChange = { videoSearch }/>
        <VideoPlayer video = {this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect = { selectedVideo =>this.setState({ selectedVideo })}
          videos = {this.state.videos}
        />
      </div>
    );
  }
}

export default App;
