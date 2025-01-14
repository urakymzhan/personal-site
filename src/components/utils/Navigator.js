// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

/**
 * Used in Blogs Pages
 */
const Navigator = (props) => {
  // let navigate = useNavigate();
  return (
    <Div>
      {/* <Button type="button" onClick={() => navigate(-1)}>
        go back
      </Button> */}
      {props.children}
    </Div>
  );
};

export default Navigator;

// const Div = styled.div`
//   text-align: left;
//   padding-top: 10px;
//   padding-bottom: 10px;
// `;

// const Button = styled.button`
//   border: 1px solid #145e98;
//   border: none;
//   padding: 3px 10px;
//   border-radius: 10px;
//   box-shadow: -3px -1px 5px 2px lightgray;
//   background: transparent;
//   color: #145e98;
//   margin-bottom: 10px;
// `;
