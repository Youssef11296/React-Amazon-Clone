import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase/Config";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [passowrd, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, passowrd)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, passowrd)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <form>
          <div className="login__formInput">
            <label>E-mail</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__formInput">
            <label>Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="login__formInput">
            <label>Password</label>
            <input
              required
              type="password"
              value={passowrd}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>
        <div className="login__createAccount">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            nostrum recusandae, ex aliquam esse excepturi dolores!
          </p>
          <button onClick={register}>Create an Amazon account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
