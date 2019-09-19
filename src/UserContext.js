import React, { useState, useEffect, useRef } from "react";
import { auth } from "./firebase";
const UserContext = React.createContext();

function UserProvider(props) {
  const [user, setUser] = useState(null);
  let unsubscribe = useRef(null);
  useEffect(() => {
    unsubscribe.current = auth.onAuthStateChanged(user => {
      // console.log(user);

      setUser(user);
    });

    return () => {
      unsubscribe.current();
    };
  }, []);
  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
