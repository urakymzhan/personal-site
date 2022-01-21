import styled from "styled-components";

export const BlogWrapper = styled.div`
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
  img {
    width: 100%;
  }
`;

export const ShareButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  button {
    margin-left: 10px;
    cursor: pointer;
  }
`;
