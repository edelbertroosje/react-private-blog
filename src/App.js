import React, {useState} from 'react';
import './App.css';
import Home from "./Componenten/Home";
import Login from "./Componenten/Login";
import Blog from "./Componenten/Blog";
import Blogpost from "./Componenten/Blogpost";
import {NavLink, Switch, Route, Redirect} from "react-router-dom";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    console.log(isAuthenticated)

    return (
        <div>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    {isAuthenticated === true && <li><NavLink to="/blogpost">Blogpost</NavLink></li>}
                    <li><NavLink to="/login">{!isAuthenticated ? "inlogen" : "Uitlogen"}</NavLink></li>

                </ul>
            </nav>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/login"><Login isAuth={ isAuthenticated} toggle={toggleIsAuthenticated}/></Route>
                <Route path="/Blogpost">
                    {isAuthenticated === true ? <Blogpost/> : <Redirect to="/"/>}
                </Route>
                <Route path="/Blog/:blogId"><Blog/></Route>

            </Switch>
        </div>
    )
}

export default App;
