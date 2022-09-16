import React from "react";
import {Link, useParams} from "react-router-dom";
import posts from '../data/posts.json';




function Blog() {
    const {blogId} = useParams();
    const blogs = posts.find((blog) => {
        return blog.id === blogId
    })

    return (
        <article>
            <h1>dit is Blog</h1>
            <h2>{blogs.title}</h2>
            <h3>{blogs.date}</h3>
            <p>{blogs.content}</p>
            <button><Link to="/blogpost">terug naar blogpost</Link></button>
        </article>
    );
}

export default Blog;