import React from 'react';
import { VideosWrapper } from './styled';
import poster from '../../assets/poster.jpg';
import {teachingVideos} from './dataStore';

const Videos = () => {
  return (
    <VideosWrapper>
      <div>
        <div className="image-container">
          <img src={poster} alt="poster" id="poster-image" />
        </div>
      </div>
      <h4>Many videos are hidden from public...</h4>
      {
        teachingVideos && teachingVideos.map(video => {
          return (
            <section>
            <h1>{video.concept}</h1>
            {
              video.videos && video.videos.map(singleVideo => {
                return (
                  <>
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
                  </>
                )
              })
            }
          </section>
          )
        })
      }
    </VideosWrapper>
  );
};

export default Videos;


