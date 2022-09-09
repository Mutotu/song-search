import { useState } from "react";

const DEFAULT_VALUE = { username: "", password: "", rePassword: "" };
const Signup = () => {
  const [userInfo, setUserInfo] = useState(DEFAULT_VALUE);
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.password !== userInfo.rePassword)
      console.log("Passwords don't match");
    else console.log("userInfo:", userInfo);
  };

  return (
    <div>
      <h1>Sign in </h1>
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
        <label htmlFor='rePassword'>
          Re-enter password
          <input
            type='password'
            name='rePassword'
            value={userInfo.rePassword}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Signup;
