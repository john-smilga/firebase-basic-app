import React, { useState } from "react";
import { firestore } from "../firebase";

function CreatePost(props) {
  console.log(props);

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
    <div>
      <h2>create a post</h2>
      <form>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button
          type="submit"
          onClick={e => handleSubmit(e)}
          disabled={isDisabled}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
