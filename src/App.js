import React from "react";
import { Sidebar } from "./components/dynamic";
import { Router } from "./components/routes";
import { Footer, BurgerMenu } from "./components/static";
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
