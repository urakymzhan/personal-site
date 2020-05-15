import React, { Component } from "react";
import "./styles/App.css"
import { Sidebar, Content } from './components/dynamic';
import { Footer } from './components/static';
import { BrowserRouter } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar/>
        <Content />
        <Footer/>
      </BrowserRouter>
    );
  }
}
export default App;


