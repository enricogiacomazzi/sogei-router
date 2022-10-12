import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Pag1 from './pages/Pag1';
import Pag2 from './pages/Pag2';
import Pag3 from './pages/Pag3';
import Pag4 from './pages/Pag4';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';


const App = () => {

  const lsLogged  = !!localStorage.getItem('refreshToken');
  const [logged, setLogged] = useState<boolean>(lsLogged);


  console.log(logged);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login onLogin={() => setLogged(true)}/>}/>
        <Route path='/' element={logged ? <Layout/> : <Navigate to="/login"/>}>
          <Route path='/' element={<Pag1/>}/>
          <Route path='/detail/:name' element={<Pag3/>}/>
          <Route path='/pag2' element={<Pag2/>}/>
          <Route path='/ciao' element={<Pag3/>}/>
          <Route path='/aaa' element={<Pag4/>}/>
        </Route>

        <Route path='*' element={<Pag2/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
