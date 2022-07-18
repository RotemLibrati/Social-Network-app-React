import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    <Router>
        <Routes>
            <Route {...rest} render={props => !isAuthenticated && !loading ? (window.location.href = '/login') :
                (<Component {...props} />)} />
        </Routes>
    </Router>

)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);