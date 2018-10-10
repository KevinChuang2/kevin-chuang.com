import React from 'react';
import Resume from './resume';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Home extends React.Component{
    render(){
        return (<p> Home Page </p>);
    }
}
class APIS extends React.Component{
    render(){
        return (
        <div>
            <p>API's will go here</p>
        </div>
        )
    }
}
class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <HashRouter>
            <div>
                  <h1>Kevin Chuang's Website</h1>
                  <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/resume">Resume</NavLink></li>
                    <li><NavLink to="/API">API's</NavLink></li>
                  </ul>
                  <div className="content" style={{backgroundColor: "#D3D3D3"}}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/API" component={APIS}/>
                  </div>
            </div>
        </HashRouter>
        );
    }
}
export default Main;

