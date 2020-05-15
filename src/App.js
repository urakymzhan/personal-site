import React, { Component } from "react";
import "./styles/App.css"
import { Sidebar, Content } from './components/dynamic';
import { Footer } from './components/static';
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Sidebar/>
        <Content />
        <Footer/>
      </Router>
    );
  }
}
export default App;


