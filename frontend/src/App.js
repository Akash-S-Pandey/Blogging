import React from 'react'
import TopBar from '../src/components/topbar/TopBar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/settings/Settings'


                                          
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Password from './pages/password/Password'




export default function App() {
  const user = true;
  return (
    <Router>
      <TopBar/>
    <Switch>
    <Route exact path="/">
            <Home/>
    </Route>
    <Route path="/register">
           {user? <Home/> : <Register/>}
    </Route>
    <Route path="/login">
           {user?<Home/>: <Login/>}
    </Route>
    <Route path="/write">
           {user? <Write/>:<Register/>}
    </Route>
    <Route path="/setting">
            {user?<Setting/>:<Register/>}
    </Route>
    <Route path="/post">
    { user?<Single/>:<Home/>}  
    </Route>
    <Route path="/Profile">
    { user? <Settings/> :<Home/>}  
    </Route>
    <Route path='/password'>

      {user?<Register/>:<Password/>}
    </Route>
   

    </Switch>
    </Router>
  )
}
