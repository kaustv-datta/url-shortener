import React from 'react';

import Header from '../../components/Header';
import SubmitContainer from '../SubmitContainer';
import URLListContainer from '../URLListContainer';

import './App.css';

const App = () => (
  <section id="app-container">
    <Header />
    <SubmitContainer />
    <URLListContainer />
  </section>
);

export default App;
