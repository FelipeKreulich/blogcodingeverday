import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = ({cat}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const baseURL = "http://localhost:8800/api";
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/posts/?cat=${cat}`, {withCredentials: true});
        setPosts(res.data);
      } catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, [cat]);

  return (
    <div className="menu animate__animated animate__backInRight">
      <h1>Other posts you may like</h1>
      {posts.map((post)=>(
        <div className="post" key={post.id}>
          <LazyLoadImage effect="blur" src={`../uploads/${post.img}`} alt="Post" />
          <h2>{post.title}</h2>
          <Link to={`/post/${post.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
