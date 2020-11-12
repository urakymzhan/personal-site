import React from 'react';
import LayoutWrapper from '../utils/Layout';
import feedback from '../../assets/feedback.png';

export default function Certificates() {
  return (
    <LayoutWrapper>
      <div>
        <div style={{ marginBottom: '50px' }}>
          <h2>Certificates: </h2>
          <p>
            <a
              href="https://triplebyte.com/tb/ulan-rakymzhanov-utghljv/certificate/track/frontend"
              target="_blank"
            >
              {' '}
              Triplebyte: Front End Certificate
            </a>
          </p>
          <p>
            <a
              href="https://www.testdome.com/cert/7954e9cba7324ca1be99be879fc54fa1?a=true"
              target="_blank"
            >
              {' '}
              TestDome: PYTHON AND SQL CERTIFICATE
            </a>
          </p>
          <p>
            <a
              href="https://www.freecodecamp.org/certification/nextgenerationkg/responsive-web-design"
              target="_blank"
            >
              {' '}
              freeCodeCamp: Responsive Web Design Certificate
            </a>
          </p>
          <p>
            <a
              href="https://www.freecodecamp.org/certification/nextgenerationkg/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              {' '}
              freeCodeCamp: JavaScript Algorithms and Data Structures
            </a>
          </p>
        </div>
        <div>
          <h2>Personal feedback from students: </h2>
          <img
            src={feedback}
            alt="feedback img"
            style={{ width: '90%', height: 'auto' }}
          />
        </div>
        <p  style={{ color: "darkred" }}>This page still under construction!!!</p>
      </div>
    </LayoutWrapper>
  );
}
