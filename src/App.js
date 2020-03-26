import React from 'react';
import Nav from './component/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './foundation/style.css';
function App() {
  return (
    <div>
      <Nav />
      <button type='button' class='btn btn-success'>
        Primary
      </button>
    </div>
  );
}

export default App;
