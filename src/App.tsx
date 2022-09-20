import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoaderLayout } from './Components/Layouts/LoaderLayout';
import { MainLayout } from './Components/Layouts/MainLayout';
import { AboutusView } from './Components/Views/AboutusView';
import { CatalogView } from './Components/Views/CatalogView';
import { ProductDetails } from './Components/Views/CatalogView/ProductDetails';
import { ContactsView } from './Components/Views/ContactsView';
import { ForpartnersView } from './Components/Views/ForpartnersView';
import { MainView } from './Components/Views/MainView';
import { Oops } from './Components/Views/Oops';

function App() {
  return (
    <main className='min-h-screen h-screen overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<LoaderLayout />}>
          <Route path='/' element={<MainLayout />} >
              <Route index element={<MainView />} />
              <Route path='catalog/:title' element={<CatalogView />} />
              <Route path='product/:article' element={<ProductDetails />}/>
              <Route path='about' element={<AboutusView />} />
              <Route path='partners' element={<ForpartnersView />} />
              <Route path='contact-us' element={<ContactsView />} />

          </Route>
          <Route path='*' element={<Oops />} />
        </Route>
        <Route path='*' element={<>Oops</>} />
      </Routes>
    </main>
  );
}

export default App;
