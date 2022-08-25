import React, { useCallback, useContext, useState } from 'react'
import { Context } from '../context/UserContext'
import {
  createMatterCancellationService,
  getMatterCancellationsService,
} from '../../services/matterCancellation.service'
import { actionType } from '../redux/store/types/matterCancellationsTypes'

export const useMatterCancellation = () => {
  const { isAuth } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const createMatterCancellation = useCallback(
    ({
      subjectToCancel,
      teacher,
      lastDateOfClassAttendance,
      studentSignature,
    }) => {
      setState({ loading: true, error: false })

      createMatterCancellationService({
        subjectToCancel,
        teacher,
        lastDateOfClassAttendance,
        studentSignature,
        token: isAuth,
      }).catch((err) => {
        setState({ loading: false, error: true })
        console.error(err)
      })
    },
    []
  )

  const getMatterCancellation = useCallback(() => {
    return getMatterCancellationsService({ token: isAuth })
  }, [])

  return {
    loading: state.loading,
    error: state.error,
    createMatterCancellation,
    getMatterCancellation,
    token: isAuth
  }
}
