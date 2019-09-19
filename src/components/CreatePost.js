import React, { useState } from "react";
import { firestore } from "../firebase";

function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const post = {
      title,
      content
    };

    await firestore
      .collection("posts")
      .add(post)
      .catch(err => console.error(err));

    setTitle("");
    setContent("");
    props.history.push("/");
  }
  const isDisabled = title === "" || content === "";
  return (
    <div className="addPost">
      <h2>create a post</h2>
      <form className="addPost-form">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="post title"
          className="add-form-control"
        />
        <textarea
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="post content"
          className="add-form-control"
          rows="10"
        ></textarea>

        <button
          type="submit"
          onClick={e => handleSubmit(e)}
          disabled={isDisabled}
          className="add-form-control"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
