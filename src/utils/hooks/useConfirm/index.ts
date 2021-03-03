import { useCallback } from 'react'

import { atom, useSetRecoilState } from 'recoil'

export const confirmAtom = atom({
  key: 'confirm',
  default: {
    title: 'Confirmation',
    body: null as React.ReactNode,
    show: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConfirm: (): void => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onHide: (): void => {},
  },
})

function useConfirm(): ({
  title,
  body,
  onConfirm,
  onCancel,
}: {
  title: string
  body: React.ReactNode
  onConfirm?: () => void
  onCancel?: () => void
}) => void {
  const setConfirmData = useSetRecoilState(confirmAtom)

  function confirm({
    title = '',
    body = null as React.ReactNode,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConfirm = function () {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel = function () {},
  }) {
    new Promise((res, rej) => {
      setConfirmData({
        show: true,
        title,
        body,
        onConfirm: () => {
          res(undefined)
          return onConfirm()
        },
        onHide: () => {
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
