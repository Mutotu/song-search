import { useState } from "react";

let DUMMY_DATA = { username: "test", password: "123" };
const DEFAULT_VALUE = { username: "", password: "" };
const Login = () => {
  const [userInfo, setUserInfo] = useState(DEFAULT_VALUE);
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInfo.username === DUMMY_DATA.username &&
      userInfo.password === DUMMY_DATA.password
    ) {
      console.log("Logged in");
      localStorage.setItem("username", userInfo.username);
    } else console.log("userInfo:", userInfo);
  };

  return (
    <div>
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Username
          <input
            type='text'
            name='username'
            value={userInfo.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            name='password'
            value={userInfo.password}
            onChange={handleChange}
          />
        </label>

        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Login;
