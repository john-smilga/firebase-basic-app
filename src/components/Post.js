import React from "react";
import { firestore } from "../firebase";

const Post = ({ title, content, id }) => {
  return (
    <div className="post">
      <h4>{title}</h4>
      <h6>{content}</h6>
      <button onClick={() => firestore.doc(`posts/${id}`).delete()}>
        delete
      </button>
    </div>
  );
};

export default Post;
