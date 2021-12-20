import React from 'react';
import { VideosWrapper } from './styled';
import { teachingVideos } from './dataStore';

const Videos = () => {
  return (
    <VideosWrapper>
      <h4>Old videos when i first started teaching people.</h4>
      {teachingVideos &&
        teachingVideos.map((video, idx) => {
          return (
            <section key={idx}>
              <h1>{video.concept}</h1>
              {video.videos &&
                video.videos.map((singleVideo, i) => {
                  return (
                    <div key={i}>
                      <h5>{singleVideo.title}</h5>
                      <iframe
                        className="front-end-video"
                        title="teaching video"
                        width="560"
                        height="315"
                        src={singleVideo.source}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
            </section>
          );
        })}
    </VideosWrapper>
  );
};

export default Videos;
