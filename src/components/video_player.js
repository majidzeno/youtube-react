import React from 'react';

const VideoPlayer =({video}) => {
	if (!video) {
		return <div className="">Loading ... </div>
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}` ; 

	return(
		<div className="videoPlayer">
			<div className="videoPlayer__frame">
				<iframe src={url} frameborder="0"></iframe>
			</div>
			<div className="videoPlayer__details">
				<div className="videoPlayer__title">{video.snippet.title}</div>
				<div className="videoPlayer__description">{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoPlayer;