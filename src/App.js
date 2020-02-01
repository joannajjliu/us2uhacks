import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main style={{marginTop: '64px'}}>
        <p>This is the page content</p>
      </main> 
    </div>
  );
}

export default App;
