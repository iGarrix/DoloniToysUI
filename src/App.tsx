import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { Oops } from './Components/Views/Oops';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='*' element={<Oops />} />
        </Route>
        {/* <Route path='*' element={<>Oops</>} /> */}
      </Routes>
    </main>
  );
}

export default App;
