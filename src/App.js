import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mail from './components/Mail';
import EmailList from './components/EmailList';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />

        <div className="app_body">
          <Sidebar />

          <Routes>
            <Route path='/' element={<EmailList />} />
            <Route path='/mail' element={<Mail />} />
          </Routes>
        </div>

      </div>
    </Router>


  );
}

export default App;
