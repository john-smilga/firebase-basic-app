import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { signInWithGoogle, signOut } from "../firebase";
const Login = () => {
  const { user } = useContext(UserContext);
  // console.log(user);

  if (!user) {
    return (
      <div>
        <button className="btn-login" onClick={signInWithGoogle}>
          Login
        </button>
      </div>
    );
  }
  return (
    <div>
      <span>hello, {user.displayName}</span>
      <button className="btn-login" onClick={signOut}>
        Logout
      </button>
    </div>
  );
};

export default Login;
