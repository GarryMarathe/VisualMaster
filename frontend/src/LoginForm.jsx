// import React, { useState } from 'react';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data.message);
//       } else {
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
      
//       <button onClick={handleLogin}>Login</button>
//       <br></br>
//       <span>Don't have account</span>
//       <a href="/register">
//         sign up
//         </a>
//     </div>
//   );
// }

// export default LoginForm;


import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

  

      if (response.ok) {
        const data = await response.json();
        // console.log('Data:', data);

        const access_token = data.access_token;
        console.log('Access Token:', access_token);

        // Store the JWT token in localStorage
        localStorage.setItem('access_token', access_token);

        // const headers = {
        //   'Authorization': `Bearer ${access_token}`,
        //   'Content-Type': 'application/json',
        // };

        // Redirect to a protected route or perform other actions
        // For example: window.location.href = '/dashboard';
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button onClick={handleLogin}>Login</button>
      <br></br>
      <span>Don't have an account</span>
      <a href="/">Sign up</a>
      {/* <Link to='/'>SignUp</Link> */}
    </div>
  );
}

export default LoginForm;
