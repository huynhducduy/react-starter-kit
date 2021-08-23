import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

import type { ConfirmDataType } from './atom'
import confirmAtom from './atom'

interface ConfirmType {
  (props: ConfirmDataType): void
}

interface UseConfirmType {
  (): ConfirmType
}

const useConfirm: UseConfirmType = () => {
  const setConfirmData = useSetRecoilState(confirmAtom)

  const confirm: ConfirmType = ({
    title = '',
    body = null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConfirm = function () {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel = function () {},
  }) => {
    new Promise((res, rej) => {
      setConfirmData({
        show: true,
        title,
        body,
        onConfirm: () => {
          res(undefined)
          return onConfirm()
        },
        onCancel: () => {
          rej()
          return onCancel()
        },
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
    }).catch(() => {})
  }

  return useCallback(confirm, [setConfirmData])
}

export default useConfirm
export { default as Provider } from './Provider'
export type { ConfirmComponentProps } from './Provider'
