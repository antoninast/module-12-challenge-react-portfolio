import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import NavTabs from './components/NavTabs/NavTabs.jsx';

function App() {
  return (
    <>
      <header>
        <h2>Antonina Stancheva</h2>
        <NavTabs />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
