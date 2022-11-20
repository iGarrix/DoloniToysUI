import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './Redux/store/store';
import setup from './Configurations/axios/interceptor.setup';
import { GetLanguage, IGlobalData } from './Configurations/globals';

const store = setupStore();
setup(store);

let global_data: IGlobalData = {
  language: GetLanguage(),
};

export const GlobalValues = React.createContext(global_data);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalValues.Provider value={global_data}>
        <App />
      </GlobalValues.Provider>
    </Provider>
  </BrowserRouter>
);
reportWebVitals();
