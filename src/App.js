import React, { Component } from "react";
import "./App.css"
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import Content from './components/Content.jsx'
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


