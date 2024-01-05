// "use client";

// //import React from 'react'
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const page = ({params}) => {
//   const {id} = params;
//   const [users, setUsers] = useState([]);

//   const getUsers = async () => {
//     try {
//       const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
//       setUsers(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     // Automatically fetch data on component mount
//     getUsers()
//   }, [id]);
//     return (<>
    
//      <pre>{JSON.stringify(users,null,2) }</pre>
//      </>
//     )
// };

// export default page
