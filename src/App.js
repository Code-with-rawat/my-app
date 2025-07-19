import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter , Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  // const [moding, setmoding] = useState('light');

  
  const showAlert = (Message,Type)=>{
      setAlert({
        msg: Message,
        type: Type
      })

      setTimeout(() => {
        setAlert(null);
      }, 3500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  // const toggleModing = () => {
  //     if (moding === 'light'){
  //       setmoding('red');
  //       document.body.style.backgroundColor = 'red';
  //     }
  //     else{
  //       setmoding('light');
  //       document.body.style.backgroundColor = 'white';
  //     }
  //    }
  return (
   <>
   <BrowserRouter>
  <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
    
    <Routes>
      <Route  exact path="/about" element={<About/>}/>
      <Route exact path="/" element={<TextForm heading='TextUtils - Word Counter' mode={mode} showAlert={showAlert}/>}/>
    </Routes>
     </div>
    </BrowserRouter>
  
   </>  
  );
}

export default App;
