import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Signup/Signup'
import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Home from './Home/Home';
import NewNote from './NewNote/NewNote'

function user() {

  

  return (
   
    <div>

<Router>
<Route exact path='/'><Signup/> </Route>
<Route path='/login'> </Route>

<Route path='/signup'><Signup/> </Route>
<Route path='/home'> <Home/> </Route>
<Route path='/newNote'><NewNote/> </Route>

</Router>

    </div>
  );
}

export default user;
