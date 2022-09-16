import React from "react";
import {Link} from "react-router-dom";

function Login(){
    return (
        <article>
            <h1>Login pagina</h1>
            <h4>Klik hier om in te loggen</h4>
        <button ><Link to="/">Inloggen</Link></button>
        </article>
    );
}
export default Login;