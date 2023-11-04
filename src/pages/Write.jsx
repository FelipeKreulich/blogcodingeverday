import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder="Title" />
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
          <input style={{display:"none"}} type="file" id="file" />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="programacao" id="programacao" />
            <label htmlFor="programacao">PROGRAMMING</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="front-end" id="front-end" />
            <label htmlFor="front-end">FRONT-END</label>
            </div>
          <div className="cat">
            <input type="radio" name="cat" value="back-end" id="back-end" />
            <label htmlFor="back-end">BACK-END</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="data-science" id="data-science" />
            <label htmlFor="data-science">DATA SCIENCE</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="ux-design" id="ux-design" />
            <label htmlFor="ux-design">UX & DESIGN</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="mobile" id="mobile" />
            <label htmlFor="mobile">MOBILE</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
