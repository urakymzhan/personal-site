import React from 'react';
import './style/videos.css';

const Videos = () => {
  return (
    <div>
      <h2>Some clips where i teach students at bootcamps</h2>

      <section>
        <h3>TOPIC: HTML</h3>
        <iframe
          className="front-end-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dfvwSLq4e_o"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section>
        <h3>TOPIC: CSS</h3>
      </section>
      <section>
        <h3>TOPIC: JavaScript</h3>
      </section>
      <section>
        <h3>TOPIC: ReactJS</h3>
      </section>
      <section>
        <h3>TOPIC: CS Fundamentals</h3>
      </section>
    </div>
  );
};

export default Videos;
