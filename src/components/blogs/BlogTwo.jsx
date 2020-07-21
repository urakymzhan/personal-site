import React, { useState, useEffect } from "react";
import blogtwo from './content/blogtwo.md';
import ReactMarkdown from 'react-markdown';
import './style/blogtwo.css';

function BlogTwo() {

    const [blog, setBlogTwo] = useState('');

    useEffect(() => {
        fetch(blogtwo).then((response) => response.text()).then((text) => {
            setBlogTwo({ blog: text })
          })
    }, [])
    return (
        <div className="blog2">
            <ReactMarkdown source={blog.blog}/>
        </div>
    );
}

export default BlogTwo;