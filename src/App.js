import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
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

            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/profiles' element={<Profiles />} />
            <Route exact path='/profile/:id' element={<Profile />} />


            {/* </section> */}

          </Routes>

          <Alert />
        </React.Fragment>
      </Router >
      <PrivateRoute exact path='/dashboard' element={<Dashboard />} />
      <PrivateRoute exact path='/create-profile' element={<CreateProfile />} />
      <PrivateRoute exact path='/edit-profile' element={<EditProfile />} />
      <PrivateRoute exact path='/add-experience' element={<AddExperience />} />
      <PrivateRoute exact path='/add-education' element={<AddEducation />} />
      <PrivateRoute exact path='/posts' element={<Posts />} />
      <PrivateRoute exact path='/posts/:id' element={<Post />} />
    </Provider>
  );
}

export default App;
