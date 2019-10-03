import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Defect from '../src/assiment/detable.jsx';
import Project from '../src/assiment/protable.jsx';
import Employee from '../src/assiment/emptable.jsx';
import Back1 from '../src/assiment/addview.jsx'
import Back2 from '../src/assiment/addview.jsx'
import Back3 from '../src/assiment/addview.jsx'
import Add1 from '../src/assiment/defadd.jsx'
import Add2 from '../src/assiment/proadd.jsx'
import Add3 from '../src/assiment/empadd.jsx'
import Addback1 from '../src/assiment/detable.jsx'
import Addback2 from '../src/assiment/protable.jsx'
import Addback3 from '../src/assiment/emptable.jsx'

import { BrowserRouter , Switch, Route } from "react-router-dom";


ReactDOM.render( <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/> 
        <Route path='/viewDefect' component={Defect}/>
        <Route path='/viewProject' component={Project}/>
        <Route path='/viewEmployee' component={Employee}/>
        <Route path='/viewBack1' component={Back1}/>
        <Route path='/viewBack2' component={Back2}/>
        <Route path='/viewBack3' component={Back3}/>
        <Route path='/viewAdd1' component={Add1}/>
        <Route path='/viewAdd2' component={Add2}/>
        <Route path='/viewAdd3' component={Add3}/>
        <Route path='/viewAddback1' component={Addback1}/>
        <Route path='/viewAddback2' component={Addback2}/>
        <Route path='/viewAddback3' component={Addback3}/>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

