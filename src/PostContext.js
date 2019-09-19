import React, { useState, useEffect, useRef } from "react";
import { firestore } from "./firebase";
const PostContext = React.createContext();

function PostProvider(props) {
  const [posts, setPosts] = useState([]);
  let unsubscribe = useRef(null);
  useEffect(() => {
    unsubscribe.current = firestore.collection("posts").onSnapshot(snapshot => {
      const posts = snapshot.docs.map(doc => {
        const id = doc.id;
        return { ...doc.data(), id };
      });
      setPosts(posts);
    });
    return () => {
      unsubscribe.current();
    };
  }, []);
  return (
    <PostContext.Provider value={{ posts }}>
      {props.children}
    </PostContext.Provider>
  );
}

export { PostProvider, PostContext };
