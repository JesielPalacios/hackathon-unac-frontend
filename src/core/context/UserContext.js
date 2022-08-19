import React, { createContext, useState } from 'react'

export const Context = createContext({})

export const UserContextProvider = ({ children }) => {
  const [jwt, setJWT] = useState(() => localStorage.getItem('jwt'))

  return (
    <Context.Provider
      value={{
        jwt,
        setJWT
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
