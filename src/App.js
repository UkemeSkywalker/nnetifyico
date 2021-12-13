import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  console.log(user);

  return (
    
    <div className="App">
      {!user ? (
        <Login />
        
      ) : (
        <>
          <div className="container">
            < Sidebar/>
            < Dashboard /> 
          </div>
        </>
    )}
    </div>
  );
}

export default App;
