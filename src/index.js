import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store.tsx';

// LAYOUT CSS
import "./assets/css/layouts/defaultLayout.css";

// details CSS
import "./assets/css/pages/newsDetails.css";

// COMPONENTS
import "./assets/css/components/Navbar/navbar.css";
// cards
import "./assets/css/components/Cards/NewsPopular/newsPopular.css";

// SEARCHER
import "./assets/css/components/Searcher/searcher.css";

// SECTION
import "./assets/css/components/Section/Popular/popularSection.css";

// RESPONSIVE
import "./assets/css/responsive.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
