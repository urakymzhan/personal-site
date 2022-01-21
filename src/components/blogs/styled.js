import styled from "styled-components";

export const BlogWrapper = styled.div`
  text-align: left;
  color: var(--blogColor);
  padding-top: 20px;
  padding-bottom: 20px;
  h2 {
    color: var(--blogHeaderColor);
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
  text-align: center;

  & > div {
    margin-left: 10px;
  }
  .count {
    margin-top: -10px;
  }
  button {
    cursor: pointer;
  }
  .react-share__ShareCount {
    font-size: 9px;
    color: gray;
  }
`;

export const Button = styled.button`
  border: 1px solid #145e98;
  border: none;
  padding: 3px 10px;
  border-radius: 10px;
  box-shadow: -3px -1px 5px 2px lightgray;
  background: transparent;
  color: #145e98;
  margin-bottom: 10px;
`;

export const Aligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
