import React from 'react';
// import { IntlProvider } from 'react-intl';
import { Router, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import history from './history';
import InfoLayout from './pages/InfoLayout';
// import Saving from './pages/Saving';
// import Spending from './pages/Spending';
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
      <Route path="/info" exact component={InfoLayout}>
        {/* <IntlProvider locale={locale}>
          <InfoLayout setLocale={setLocale} />
        </IntlProvider> */}
      </Route>
      {/* <Route path="/spending" component={Spending} />
      <Route path="/savings" component={Saving} />
      <Route path="/tipcalc" component={Tipcalc} />
      <Route path="/info" component={InfoLayout}/>
      <Route path="/tips" component={Tips} /> */}
    </Router>

  );
}

export default App;
