import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = (props) => {
    console.log(props.num)
    const user = useContext(MyContext)
  return (
    <>
    <div className='bg-green-500 py-20'>
      Mai ho don {user}  me hu Header
      <Nav num={props.num}/>
    </div>
    </>
  )
}

export default Header
