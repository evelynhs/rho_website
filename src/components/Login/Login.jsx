import { useState } from 'react';
import './Login.css';
import Alumni from '../../routes/Alumni/Alumni';

function Login () {
  const[isVerified, setVerified] = useState(false);

  const checkPw = () => {
    const password = document.getElementById("password").value;

    if (password === "RDC30") {
      setVerified(true);
    } else {
      alert("Incorrect password.")
    }
  };

  return (
    <>
      {isVerified ? <Alumni/>
        :
        (
          <div className="loginpage">
            <h1>Howdy Alumni!</h1>
            <form onSubmit={checkPw}>
              <input type="password" id="password" name="password" />
              <button className="submit">enter</button>
              <label className="password">Password</label>
            </form>
          </div>
        )
      }
    </>
  )
}

export default Login;
