import React from "react";
import posts from '../data/posts.json';
import {Link} from "react-router-dom";


function Blogpost(){

    return (
        <article>
        <h1>Blogpost overzicht pagina</h1>
            <h2>Aantal blogposts: {posts.length}</h2>
            <ul>
                {posts.map((post) => {
                    return<li key={post.id}><Link to={`/blog/${post.id}`} >{post.title}</Link></li>
                })}
            </ul>

        </article>
    )
}
export default Blogpost;