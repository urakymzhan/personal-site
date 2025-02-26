import styled from "styled-components";

export const BlogWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  font-family: var(--blogFont);
  text-align: left;
  color: var(--blogColor);
  padding-top: 20px;
  padding-bottom: 20px;
  h1,
  h2,
  h3,
  h4 {
    color: var(--blogHeaderColor);
  }
  em {
    color: #118ab2;
    font-size: 0.8rem;
  }
  strong {
    font-weight: 900;
    color: #000;
  }
  img {
    width: 100%;
    max-height: 340px;
    object-fit: cover;
  }
  .page-nav-icons {
    color: #4682b4;
    font-size: 28px;
    font-weight: 900;
    cursor: pointer;
  }
  /** Media query for small screens **/
  @media (max-width: 768px) {
      max-width: 90%;
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
  align-items: baseline;
  justify-content: space-between;
`;
