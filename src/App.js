import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Alert from './components/Alert';

const App = ()=> {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000000';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }



  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar mode={mode} toggleMode={toggleMode}/> 
        <Alert alert={alert}/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <>
        <Switch>
        <Route exact path="/" element={<News setProgress={setProgress} mode={mode} showAlert={showAlert} apikey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route exact path="/business" element={<News setProgress={setProgress} mode={mode} showAlert={showAlert} apikey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route> 
          <Route exact path="/entertainment" element={<News setProgress={setProgress} mode={mode} showAlert={showAlert} apikey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} mode={mode} showAlert={showAlert} apikey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route> 
          <Route exact path="/science" element={<News setProgress={setProgress} mode={mode} showAlert={showAlert} apikey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route> 
          <Route exact path="/sports" element={<News setProgress={setProgress} mode={mode} showAlert={showAlert} apikey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route> 
          <Route exact path="/technology" element={<News setProgress={setProgress} mode={mode} showAlert={showAlert} apikey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
          </Switch>
        </>
        </Router>
      </div>
    )
 
}

export default App;

