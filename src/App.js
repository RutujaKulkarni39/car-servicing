import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './User';
import Navbar from './Navbar'
import Record from './Record';
import Form1 from './Form1';
import Already from './Already';
import Sub from './Sub';
import Newuser from './Newuser';
import Newaccount from './Newaccount';
import Search from './Search';
import Alluser from './Alluser';
import Searchcar from './Searchcar';
import All from './All';




const App = () => {
  return (
    <div>
      
        
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path='/user' element={<User/>}></Route>
        <Route exact path='/record' element={<Record/>}></Route>
        <Route exact path='/already' element={<Already/>}></Route>
        <Route exact path='/form1' element={<Form1/>}></Route>
        <Route exact path='/sub' element={<Sub/>}></Route>
        <Route exact path='/newuser' element={<Newuser/>}></Route>
        <Route exact path='/newaccount' element={<Newaccount/>}></Route>
        <Route exact path='/search' element={<Search/>}></Route>
        <Route exact path='/alluser' element={<Alluser/>}></Route>
        <Route exact path='/searchcar' element={<Searchcar/>}></Route>
        <Route exact path='/all' element={<All/>}></Route>
        
        </Routes>
      </Router>
      
        
    </div>
  )
}

export default App
