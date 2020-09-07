import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Router, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import history from './history';
import Info from './pages/Info';
import Saving from './pages/Saving';
import Spending from './pages/Spending';
import Tipcalc from './pages/Tipcalc';
import Tips from './pages/Tips';
import './styles/App.scss';

function App() {
  const [locale, setLocale] = useState('en');
  return (
    <Router history={history}>
      <Route path="/">
        <IntlProvider locale={locale}>
          <Layout setLocale={setLocale} />
        </IntlProvider>
      </Route> 
      <Route path="/spending" component={Spending} />
      <Route path="/savings" component={Saving} />
      <Route path="/tipcalc" component={Tipcalc} />
      <Route path="/info" component={Info} />
      <Route path="/tips" component={Tips} />
    </Router>

  );
}

export default App;
