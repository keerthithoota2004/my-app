import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils - Light Mode';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TestUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
