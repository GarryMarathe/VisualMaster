import React from 'react';

function Signout() {
  const handleSignout = async () => {
    try {
      const response = await fetch('http://localhost:5000/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        
        // Perform any client-side cleanup or redirection as needed
      } else {
        console.error('Signout failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Signout</h2>
      <button onClick={handleSignout}>Signout</button>
    </div>
  );
}

export default Signout;


// import React from 'react';
// import axios from 'axios';

// function Signout() {
//   const handleSignout = async () => {
//     try {
//       const response = await axios.post('/signout');
//       console.log(response.data.message);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signout</h2>
//       <button onClick={handleSignout}>Signout</button>
//     </div>
//   );
// }

// export default Signout;
