import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
// Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>

        <React.Fragment>

          <Navbar />

          <Routes>


            <Route exact path='/' element={<Landing />} />

            {/* <section className='container'> */}

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            {/* </section> */}

          </Routes>
          <Alert />
        </React.Fragment>
      </Router >
    </Provider>
  );
}

export default App;
