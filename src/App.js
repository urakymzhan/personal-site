import React, { Component } from 'react';
import './root.css';
import { Sidebar, Router } from './components/dynamic';
import { Footer } from './components/static';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar />
        <Router />
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
