
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode , setMode ] = useState('dark');
  const [alert , setAlert ] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled" , "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled" , "success");
    }
  }
  return (
    <>
    {/* <Router>
      <Navbar title="TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/> 
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<TextForm heading="Enter your text" mode={mode} showAlert={showAlert}/>} />
      </Routes>
      </Router> */}
       <Navbar title="TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter your text" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;