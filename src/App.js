import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Welcome from './components/welcome/Welcome'
import Clock from './components/clock/Clock'
import Contact from './components/contact/Contact'
import Navigation from './components/navigation/Navigation'
import './App.css'
import { NotFound } from './components/NotFound'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigation/>

        
       
        <Switch>
          <Route exact
          path="/" 
          render={(props) => <Welcome {...props} name="Sir"/>}/>
        

          <Route exact
          path="/welcome/:name" 
          render={(props) => <Welcome {...props} name="Sir"/>}/>
      
          <Route path="/clock" component={Clock}/>
     
          <Route path="/contact" component={Contact}/>
          
          <Route component={NotFound}/>
        </Switch>
       

          

      </div>
    )
  }
}

export default App;
