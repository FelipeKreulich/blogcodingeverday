import React, { useContext, useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import axios from "axios";
import moment from "moment";
import { AuthContext } from './../context/authContext.jsx';
import DOMPurify from "dompurify";

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const baseURL = "http://localhost:8800/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/posts/${postId}`, { withCredentials: true });
        setPost(res.data);
      } catch (err) {
        console.log(err);
      };
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/posts/${postId}`, { withCredentials: true });
      navigate("/");
    } catch (err) {
      console.log(err);
    };
  };

  return (
    <div className="single">
      <div className="content animate__animated animate__backInLeft">
        <img src={`../uploads/${post?.img}`} alt="Post Image" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="User Image" />}
          <div className="info">
            <span>By: @{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (<div className="edit">
            <Link to={`/write?edit=${post.id}`} state={post}>
              <img src={Edit} alt="Edit" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="Delete" />
          </div>)}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        />
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
