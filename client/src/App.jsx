import React from 'react';
// import { IntlProvider } from 'react-intl';
import { Router, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import history from './history';
import InfoLayout from './pages/InfoLayout';
import Saving from './pages/SavingLayout';
import SpendingLayout from './pages/SpendingLayout';
import Tipcalc from './pages/CalcLayout';
import Tips from './pages/TipsLayout';
import './styles/App.scss';

// class App extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };
//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);
//     return body;
//   };
//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
//     this.setState({ responseToPost: body });
//   };
//   render() {
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
        <Route path="/savings" component={Saving} />
        <Route path="/tipcalc" component={Tipcalc} />
        <Route path="/tips" component={Tips} />
      </Router>

    );
  }


export default App;
