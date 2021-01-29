import React, { createContext, useState } from 'react';
import { BrowserRouter as Router,
  Route, 
 Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Error from './Components/Error/Error';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/RegisterFrom/Register';
import AdminPannel from './Pages/Admin/AdminPannel';
import Home from './Pages/Home';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [volunteer, setVolunteer] = useState([]);
  return (
    <UserContext.Provider  value={{ loggedInUser, setLoggedInUser, volunteer, setVolunteer }} >
     
    <Router>
       <Switch>

         
        
         <PrivateRoute exact path="/register/:name">
           <Register></Register>
         </PrivateRoute>
        
        < Route path="/Auth">
          <Auth> </Auth>
         </Route>
         <PrivateRoute path="/adminPannel">
         <AdminPannel></AdminPannel>
         </PrivateRoute>
         <Route exact path="/">
         <Home> </Home>
        </Route>
        
        <Route path="*">
           <Error></Error>
          </Route>
        </Switch>
       </Router>

  </UserContext.Provider>
       
       
    
  );
}

export default App;
