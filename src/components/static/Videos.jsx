import React from 'react';
import { VideosWrapper } from './styled';
import poster from '../../assets/poster.jpg';

const Videos = () => {
  return (
    <VideosWrapper>
      <div>
        <div className="image-container">
          <img src={poster} alt="poster" id="poster-image" />
        </div>
      </div>
      {/* <section>
        <h3>TOPIC: HTML</h3>
      </section> */}
      <section>
        <h1>CSS</h1>
        <h5>CSS: Flexbox part1</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/za6T2DX56TI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>CSS: Flexbox part2</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c8WviRJtffk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section>
        <h1>JavaScript</h1>
        <h5>JavaScript: Functions and Control Flow</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z55KCsvCN8c"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>JavaScript: Loops-Array-Objects</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CZ5Q4LR--S0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>JavaScript: Concepts part1</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AjBnx_p63G8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>JavaScript: Concepts part2</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NrUgqlP3h5w"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>JavaScript: Methods part1</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6mW0sdmrfAg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>JavaScript: Methods part2</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/viFJiQMrrfg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>JavaScript: ES6 Concepts</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H8shFQ7Wl4s"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>JavaScript: ES6 Pracitce</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OxHzrZopYgY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>JavaScript: DOM Practice</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yUUsHtUBOwE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h5>JavaScript: Memory Game Practice</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QAZrG1Rh0JE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section>
        <h1>ReactJS</h1>
        <h5>ReactJS: Conditional Rendering part1</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ozQXL-NV_mM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>ReactJS: Conditional Rendering part2</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vqw6ejnCfw4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h5>ReactJS: Lifecycles</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/59Z0eoEB9NI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h5>ReactJS: Movie depot Practice</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1arQepRwWD0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h5>ReactJS: World Clocks Practice</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zPDBvOE0PRo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h5>ReactJS: Counter Practice</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V-bP3b5NgT0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>ReactJS: Employees</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xxy1C5xWYWw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section>
        <h1>Computer Science Fundamentals</h1>
        <h5>Intro To Programming</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vt0ggsg2vaU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>Complete Terminal Tutorial</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/syDujrnZZ5Q"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h5>Complete Github Tutorial</h5>
        <iframe
          className="front-end-video"
          title="teaching video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tWDInMNFSsI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </VideosWrapper>
  );
};

export default Videos;
