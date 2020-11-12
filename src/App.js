import React, { Component } from 'react';
import './root.css';
import { Sidebar } from './components/dynamic';
import { Router } from './components/routes';
import { Footer } from './components/static';
import { BrowserRouter } from 'react-router-dom';
import ErroBoundary from './ErrorBoundary';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ErroBoundary>
          <Sidebar />
          <Router />
          <Footer />
        </ErroBoundary>
      </BrowserRouter>
    );
  }
}
export default App;
