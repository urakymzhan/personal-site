import React from "react";
import feedback from "../../assets/feedback.png";

export default function Certificates() {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "50px" }}>
        <h2>Certificates: </h2>
        <p>
          <a
            href="https://courses.edx.org/certificates/cf4e31605add4ddf9217e60e187a8c26"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            IBM: Python for AI and Development Project [2021]
          </a>
        </p>
        <p>
          <a
            href="https://triplebyte.com/tb/ulan-rakymzhanov-utghljv/certificate/track/frontend"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Triplebyte: Front End Certificate [2020]
          </a>
        </p>
        <p>
          <a
            href="https://www.testdome.com/cert/7954e9cba7324ca1be99be879fc54fa1?a=true"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            TestDome: PYTHON AND SQL CERTIFICATE [2019]
          </a>
        </p>
        <p>
          <a
            href="https://www.freecodecamp.org/certification/nextgenerationkg/responsive-web-design"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            freeCodeCamp: Responsive Web Design Certificate [2019]
          </a>
        </p>
        <p>
          <a
            href="https://www.freecodecamp.org/certification/nextgenerationkg/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            freeCodeCamp: JavaScript Algorithms and Data Structures [2019]
          </a>
        </p>
      </div>

      <div>
        <h2>Feedbacks from my first students: </h2>
        <img
          src={feedback}
          alt="feedback img"
          style={{ width: "90%", height: "auto" }}
        />
      </div>
    </div>
  );
}
