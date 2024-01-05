"use client"
//import { Chilanka } from 'next/font/google'
import React, { createContext } from 'react'
 export const MyContext = createContext()
const Context = ({children}) => {
    const username = "Kaustubh Sagale"
  return (
    <div>
      <MyContext.Provider value={username}>
        {children}
      </MyContext.Provider>
    </div>
  )
}

export default Context
