import React from 'react';
// import { IntlProvider } from 'react-intl';
import { Router, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import history from './history';
import InfoLayout from './pages/InfoLayout';
// import Saving from './pages/Saving';
import SpendingLayout from './pages/SpendingLayout';
// import Tipcalc from './pages/Tipcalc';
// import Tips from './pages/Tips';
import './styles/App.scss';


function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Layout}>
        {/* <IntlProvider locale={locale}> */}
          {/* <Layout setLocale={setLocale} /> */}
          {/* <Route path="/" component={Layout} /> */}
        {/* </IntlProvider> */}
      </Route> 
      <Route path="/info" exact component={InfoLayout} />
      <Route path="/spending" component={SpendingLayout} />
      {/* <Route path="/savings" component={Saving} /> */}
      {/* <Route path="/tipcalc" component={Tipcalc} /> */}
      {/* <Route path="/info" component={InfoLayout}/> */}
      {/* <Route path="/tips" component={Tips} /> */}
    </Router>

  );
}

export default App;
