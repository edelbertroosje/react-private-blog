import React, {useState} from 'react';
import './App.css';
import Home from "./Componenten/Home";
import Login from "./Componenten/Login";
import Blog from "./Componenten/Blog";
import Blogpost from "./Componenten/Blogpost";
import { NavLink, Switch, Route} from "react-router-dom";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <div>
            <nav>
                <ul>
                    <li ><NavLink to="/">Home</NavLink></li>
                    <li ><NavLink to="/login">Login</NavLink></li>
                    <li ><NavLink to="/blogpost">Blogpost</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/login"><Login/></Route>
                <Route path="/Blogpost"><Blogpost/></Route>
                <Route path="/Blog/:blogId"><Blog/></Route>

            </Switch>
        </div>
    );
}

export default App;
