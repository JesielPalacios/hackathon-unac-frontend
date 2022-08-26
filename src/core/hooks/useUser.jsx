import React, { useCallback, useContext, useState } from 'react'
import { Context } from '../context/UserContext'
import {loginService, getUserPhotoService} from '../../services/user.service'

export const useUser = () => {
  const { isAuth, activateAuth, removeAuth, sidebar, showSidebar } =
    useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false })
      loginService({ email, password })
        .then((jwt) => {
          activateAuth(jwt)
          setState({ loading: false, error: false })
        })
        .catch((err) => {
          removeAuth()
          setState({ loading: false, error: true })
          console.error(err)
        })
    },
    [activateAuth]
  )

  const getUserPhoto = useCallback(() => {
    setState({ loading: true, error: false })
    getUserPhotoService(photoId).then(

      activateAuth(jwt),
      setState({ loading: false, error: false })
      
    )
    get({ email, password })
      .then((jwt) => {
        activateAuth(jwt)
        setState({ loading: false, error: false })
      })
      .catch((err) => {
        removeAuth()
        setState({ loading: false, error: true })
        console.error(err)
      })
  }, [activateAuth])

  return {
    login,
    logout: removeAuth,
    isAuth,
    loading: state.loading,
    error: state.error,
    sidebar,
    showSidebar,
  }
}
