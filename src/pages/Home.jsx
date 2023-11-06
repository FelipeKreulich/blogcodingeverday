import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from 'axios';

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const baseURL = "http://localhost:8800/api";
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/posts${cat}`, { withCredentials: true });
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts animate__animated animate__backInLeft">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <LazyLoadImage effect="blur" src={`../uploads/${post.img}`} alt="Post" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <Link to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;