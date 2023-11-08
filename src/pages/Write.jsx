import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {

  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [resume, setResume] = useState(state?.resume || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const baseURL = "http://localhost:8800/api";

  const navigate = useNavigate()

  const upload = async () => {
    const baseURL = "http://localhost:8800/api";
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`${baseURL}/upload`, formData, {withCredentials: true});
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`${baseURL}/posts/${state.id}`, {
          title,
          resume,
          desc: value,
          cat,
          img: file ? imgUrl : "",
        }, { withCredentials: true })
        : await axios.post(`${baseURL}/posts/`, {
          title,
          resume,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        }, { withCredentials: true });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={resume} placeholder="Resume" onChange={(e) => setResume(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === "programacao"} name="cat" value="programacao" id="programacao" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="programacao">PROGRAMMING</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "front-end"} name="cat" value="front-end" id="front-end" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="front-end">FRONT-END</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "back-end"} name="cat" value="back-end" id="back-end" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="back-end">BACK-END</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "data-science"} name="cat" value="data-science" id="data-science" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="data-science">DATA SCIENCE</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "ux-design"} name="cat" value="ux-design" id="ux-design" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="ux-design">UX & DESIGN</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "mobile"} name="cat" value="mobile" id="mobile" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="mobile">MOBILE</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
