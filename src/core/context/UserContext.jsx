import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const Context = createContext()

const Provider = ({ children }) => {
  const history = useHistory()
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const [sidebar, setSidebar] = useState(true)

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      return window.sessionStorage.removeItem('token')
    },
    sidebar,
    showSidebar: () => setSidebar(!sidebar),
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer,
}
