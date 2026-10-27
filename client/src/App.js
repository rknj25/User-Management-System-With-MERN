import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Add from './Pages/Add';
import View from './Pages/View';
import Edit from './Pages/Edit';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/view' element={<View/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
