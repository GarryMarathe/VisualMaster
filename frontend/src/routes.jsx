import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import Signup from './Signup';

function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='/register' element={<Signup />} />
            </Routes>
        </Router>
    );
}
export default MyRoutes;