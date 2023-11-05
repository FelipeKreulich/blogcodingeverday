import React, { useContext, useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import axios from "axios";
import moment from "moment";
import { AuthContext } from './../context/authContext.jsx';

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const baseURL = "http://localhost:8800/api";
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/posts/${postId}`, {withCredentials: true});
        setPost(res.data);
      } catch(err) {
        console.log(err);
      };
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const baseURL = "http://localhost:8800/api";
      await axios.delete(`${baseURL}/posts/${postId}`, {withCredentials: true});
      navigate("/");
    } catch(err) {
      console.log(err);
    };
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="Post Image" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="User Image" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (<div className="edit">
            <Link to="/write?edit=2">
              <img src={Edit} alt="Edit" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="Delete" />
          </div>)}
        </div>
        <h1>{post.title}</h1>
        <p>
          {post.desc}
        </p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
