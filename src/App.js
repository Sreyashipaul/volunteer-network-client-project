import React, { createContext, useState } from 'react';
import { BrowserRouter as Router,
  Route, 
 Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
export const UserContext = createContext()
function App() {
  const [user,setUser] = useState({isSignedUp:true})
  return (
    <UserContext.Provider  value={[user,setUser]}>
    <Router>
       <Switch>
          <Route  path="/home">
            <Home></Home>
          </Route>
         
         <Route exact path="/">
          <Home></Home>
        </Route>
        </Switch>
       </Router>

  </UserContext.Provider>
       
       
    
  );
}

export default App;
