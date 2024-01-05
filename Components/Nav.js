import React from 'react'

const Nav = (props) => {
    console.log(props.num);
  return (
    <div className='p-2 bg-red-200  text-black py-14'>
      {props.num} me hu navigation
    </div>
    
  )
}

export default Nav
