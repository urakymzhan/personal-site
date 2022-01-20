import styled from "styled-components";

const BlogWrapper = styled.div`
  text-align: left;
  h2 {
    color: rgb(105, 102, 102);
  }
  li:nth-child(even) {
    color: #94095f;
  }
  em {
    color: #118ab2;
  }
  // pre {
  //   background: black;
  //   padding: 10px;
  // }
  // code {
  //   color: lightgray;
  //   background: black;
  //   // padding: 5px;
  // }
`;

export default BlogWrapper;
