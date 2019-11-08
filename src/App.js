import React, { Component } from "react";
import "./App.css"
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'


class App extends Component {
  render() {
    return (
      <>
        <Sidebar/>
        <Footer/>
      </>
    );
  }
}
export default App;


