import React, {useState} from "react";
import {Link} from "react-router-dom";

function Login(){
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    console.log(isAuthenticated)
     // const history = useHistory();
    //
    // function isloggedIn(){
    //     history.push("/")
    //
    //
    // }
    return (
        <article>
            <h1>Login pagina</h1>
            <h4>Klik hier om in te loggen</h4>
        <button
            type="button"
            onClick={()=>toggleIsAuthenticated(isAuthenticated)}
        ><Link to="/">inloggen</Link></button>
        </article>
    );
}
export default Login;