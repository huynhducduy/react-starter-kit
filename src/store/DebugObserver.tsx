// https://recoiljs.org/docs/guides/dev-tools/

import { useRecoilSnapshot } from 'recoil'
import { useEffect } from 'react'

function DebugObserver() {
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.debug('The following atoms were modified:')
      for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
        console.debug(node.key, snapshot.getLoadable(node))
      }
    }
  }, [snapshot])

  return null
}

export default DebugObserver
