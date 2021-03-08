import { memo } from 'react'

import { useEffect, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { status as statusSelector } from './atom'
import isAuthenticated from './helpers/isAuthenticated'

const AuthUpdater = memo(
  () => {
    const [status, setStatus] = useRecoilState(statusSelector)

    const subscriber = useCallback(
      function (event: StorageEvent) {
        if (
          status !== isAuthenticated() &&
          event.storageArea === localStorage
        ) {
          setStatus(isAuthenticated())
        }
      },
      [status, setStatus]
    )

    useEffect(() => {
      window.addEventListener('storage', subscriber)
      return () => {
        window.removeEventListener('storage', subscriber)
      }
    }, [subscriber])

    return null
  },
  () => false
)

export default AuthUpdater
