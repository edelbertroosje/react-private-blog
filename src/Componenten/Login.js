import React from "react";

function Login({toggle, isAuth}) {

    return (
        <article>
            <h1>Login pagina</h1>
            <h4>Klik hier om {!isAuth ? "in te loggen" : "uit te loggen"}</h4>

                <button onClick={()=> toggle(!isAuth)}>{!isAuth ? "inlogen" : "uitlogen"}</button>
        </article>
    );
}
export default Login;