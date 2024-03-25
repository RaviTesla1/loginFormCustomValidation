import { useState } from "react";

function App() {
  const [loginData,setLoginData] = useState({
    userName:"",
    password:""
  })
  const [error,setError] = useState({
    userName:"",
    password:""
  })
  // const [Error, setError] = useState("");

  const handleChange = (e) => {
    const {name,value} = e.target;
    setLoginData({
      ...loginData,
      [name] : value
    })
    // e.target.value.length <= 4 ? setError("Email Required") : setError("");
    console.warn(name,value)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setError(prevState => ({
      ...prevState,
      userName: loginData.userName.length <= 4 ? "Error" : "",
      password: loginData.password.length <= 4 ? "Error" : ""
    }));
  };
  return (
    <form style={{ margin: "50px" }} onSubmit={handleSubmit}>
      <input
       type="text"
        name="userName"
        placeholder="Username"
        value={loginData.userName}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{error.userName}</p>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      />
            <p style={{ color: "red" }}>{error.password}</p>
      <button type="submit" style={{ marginLeft: "10px" }}>
        Submit
      </button>
    </form>
  );
}

export default App;
