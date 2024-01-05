// "use client"
// import React, { useState } from 'react'
// //two way binding
// const page = () => {
//   const [username,setUsername] = useState("")
//   return (
//     <>
//     <h1 className='mb-5 text-2xl'> ENTER YOUR NAME: 
//     </h1>
//     <form>
//       <input type='text' className='border-2 bg-zinc-200 px-4 py-2 text-xl'
//       value={username}
//       onChange={(e) => {
//         setUsername(e.target.value)
//         console.log(username)
//       }}
      
//       />
//     </form>
//     </>
   
//   )
// }

// export default page

//Dynamic Routing

// "use client";
// import axios from 'axios';
// import { fromJSON } from 'postcss';
// import React, { useEffect, useState } from 'react';

// const Page = () => {
//   const [users, setUsers] = useState([]);

//   const getUsers = async () => {
//     try {
//       const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
//       setUsers(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     // Automatically fetch data on component mount
//     getUsers();
//   }, []);

//   return (
//     <>
//       <button onClick={getUsers} className='bg-green-600 text-white rounded px-40 align-middle accent-lime-300 py-11 font-extrabold font-serif'>
//         Get Data
//       </button>
//       <div className='p-8 bg-red-200 mt-5'>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               {user.name} --- <a href={`/${user.id}`}>Explore</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Page;




//Context API
// "use client"
// import Header from '@/Components/Header'
// import Nav from '@/Components/Nav'
// import React, { useState } from 'react'


// const page = (props) => {
//  const [num,setnum] = useState(10)
//   return (
//     <div className='bg-green-200 p-5'>
//       <>
//  this is Header!!!!
//    <Header num={num}/>
//    {/* //<Nav num={props.num}/> */}
//    </>
//     </div>
//   )
// }

// export default page

// "use client"
// import Header from '@/Components/Header'
// import { MyContext } from '@/Helper/Context'
// import React, { useContext } from 'react'

// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user)

//   return (<>
//     <div className='bg-yellow-300'>
//       me hu Home page {user}
//       <Header/>
//     </div>
//     <div className='bg-gray-500 py-40'>
//        me hu 2nd div
//     </div>

//     </>
//   )
// }

// export default page





// //React Toastify
// "use client"
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
// const page = () => {
// const notify=()=>{
  
//   toast.success('🦄 Wow so easy!', {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//     });
//     toast("login successful")
// }
//   return (
//     <div>
//       <button onClick={notify} className='rounded bg-black text-white px-12 py-3 align-middle '>Login</button>
//   <ToastContainer/>

//     </div>
//   )
// }

// export default page





// //how to do server side rendering
// "use client"
// import axios from 'axios'
// import React, { useState } from 'react'

// const page = () => {
//   const [userdata,setUserdata] = useState("")
//   const [num,setnum] = useState(10)
//   const getdata = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list")
// const a = JSON.stringify(response.data)
//     console.log(a)
//    setUserdata(a)
//   }
//   return (
//     <div>
//       <button onClick={getdata}>click</button>
//       <br/>
//       {userdata}
//     </div>
//   )
// }

// export default page






//Deployment
import React from 'react'

const page = () => {
  return (
    <div>
      Deployment
    </div>
  )
}

export default page
