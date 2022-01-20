import React from "react";
import { Sidebar } from "./components/dynamic";
import { Router } from "./components/routes";
import { Footer } from "./components/static";
import { BrowserRouter } from "react-router-dom";
import ErroBoundary from "./ErrorBoundary";

const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <BrowserRouter>
      <ErroBoundary>
        <div ref={node}>
          <BurgerMenu open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
        </div>
        <Router />
        <Footer open={open} />
      </ErroBoundary>
    </BrowserRouter>
  );
};
export default App;

function BurgerMenu({ open, setOpen }) {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9,
        // background: open ? "#fff" : "transparent",
        left: "20px",
        top: "20px",
        width: "30px",
        height: "30px",
      }}
      open={open}
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <img
          src={require("./assets/menu-close-64.png").default}
          className="menu-icon"
          alt="circle menu close"
          style={{ height: "100%", width: "100%", background: "#fff" }}
        />
      ) : (
        <img
          src={require("./assets/menu-open-50.png").default}
          className="menu-icon"
          alt="circle menu open"
          style={{ height: "100%", width: "100%" }}
        />
      )}
    </div>
  );
}
