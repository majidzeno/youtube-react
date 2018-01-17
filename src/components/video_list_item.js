import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li className = "videoListItem" onClick = { () => onVideoSelect(video)}>
			<div className="media">
				<div className="media__thumbnail">
					<img className="media__image" src={imageUrl} alt="videoThumbnail"/>
				</div>
				<div className="media__body">
					<div className="media__heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	)
}

export default VideoListItem ;