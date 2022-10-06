
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminLayout } from './Components/Layouts/AdminLayout';
import { AuthLayout } from './Components/Layouts/AuthLayout';
import { LoaderLayout } from './Components/Layouts/LoaderLayout';
import { MainLayout } from './Components/Layouts/MainLayout';
import { AboutusView } from './Components/Views/AboutusView';
import { LoginView } from './Components/Views/Admins/Auth/LoginView';
import { CatalogView } from './Components/Views/CatalogView';
import { ProductDetails } from './Components/Views/CatalogView/ProductDetails';
import { ContactsView } from './Components/Views/ContactsView';
import { ForpartnersView as ForpartnersView } from './Components/Views/ForpartnersView';
import { MainView } from './Components/Views/MainView';
import { Oops } from './Components/Views/Oops';
import { LanguageType } from './Configurations/globals';
import i18n from './Configurations/LangConfig';
import { useAppDispatch, useAppSelector } from './Redux/hooks/hooks';
import { GetAdmin } from './Redux/reducers/accountReducer/actions';

function App() {

  const dispatch = useAppDispatch();

  const [lang, setLang] = useState(() => {
    const local_lang = localStorage.getItem("lang");
    if (local_lang) {
        return local_lang;
    }
    else {
      localStorage.setItem("lang", LanguageType.EN);
      return LanguageType.EN;
    }
  });

  useEffect(() => {
    if (lang) {   
      i18n.changeLanguage(lang);
    }
    else {
      i18n.changeLanguage(LanguageType.EN);
    }
  }, [lang]);

  async function login() {
    if (localStorage.getItem('token')) {
      await dispatch(GetAdmin());
    }
  }

  useEffect(() => {
    login();
  }, []);

  const { auth, isLoading, error } = useAppSelector(state => state.accountReducer);

  return (
    <main className='min-h-screen h-screen overflow-x-hidden scroll scroll-smooth'>
      <Routes>
        <Route path='/' element={<LoaderLayout />}>
          <Route path='/' element={<MainLayout />} >
              <Route index element={<MainView />} />
              <Route path='catalog/:title' element={<CatalogView />} />
              <Route path='product/:article' element={<ProductDetails />}/>
              <Route path='about' element={<AboutusView />} />
              <Route path='for-partners' element={<ForpartnersView />} />
              <Route path='contact-us' element={<ContactsView />} />
          </Route>


          <Route path='login' element={<AuthLayout isPredicate={auth === null && localStorage.getItem("token") === null} elseReturn="/" ><Outlet/></AuthLayout>} >
            <Route index element={<LoginView />} />
          </Route>
          <Route path='for-admins' element={<AuthLayout isPredicate={auth !== null || localStorage.getItem("token") !== null} elseReturn="/login" ><AdminLayout /></AuthLayout>} >
            <Route index element={<ContactsView />} />
            <Route path="reports" element={<ContactsView />} />
          </Route>

          <Route path='*' element={<Oops />} />
        </Route>
        <Route path='*' element={<Oops />} />
      </Routes>
    </main>
  );
}

export default App;
