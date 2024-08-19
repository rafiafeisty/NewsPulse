
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

const App=()=> {
 const pageSize=9;
  const [progress, setProgress]=useState(0);
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      /> 
        <Routes>
        <Route exact path="/" element={<Navigate to="/general" />} />
          <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} category="general"/>}/>
             <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} category="business"/>}/>
             <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} category="entertainment"/>}/>
             <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} category="sports"/>}/>
             <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} category="health"/>}/>
             <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} category="science"/>}/>
             <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
}
export default App;