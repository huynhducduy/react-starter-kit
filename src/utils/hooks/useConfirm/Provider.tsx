import { ReactNode, useState, useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { confirmAtom } from './'

export interface ConfirmComponentProps {
  isShow: boolean
  title: string
  body: React.ReactNode
  onConfirm: () => void
  onHide: () => void
  isProcessing: boolean
}

interface ConfirmProviderProps {
  ConfirmComponent: React.ComponentType<ConfirmComponentProps>
  children: ReactNode
}

const Provider = ({
  ConfirmComponent,
  children,
}: ConfirmProviderProps): ReactNode => {
  const confirmData = useRecoilValue(confirmAtom)
  const setConfirmData = useSetRecoilState(confirmAtom)
  const [isProcessing, setIsProcessing] = useState(false)

  const onConfirm = useCallback(() => {
    setIsProcessing(true)
    Promise.resolve(confirmData.onConfirm()).finally(() => {
      setConfirmData((data) => ({
        ...data,
        show: false,
      }))
      setIsProcessing(false)
    })
  }, [confirmData, setConfirmData])

  const onHide = useCallback(() => {
    Promise.resolve(confirmData.onHide()).finally(() => {
      setConfirmData((data) => ({
        ...data,
        show: false,
      }))
    })
  }, [confirmData, setConfirmData])

  return (
    <>
      {children}
      <ConfirmComponent
        isShow={confirmData.show}
        title={confirmData.title}
        body={confirmData.body}
        onConfirm={onConfirm}
        onHide={onHide}
        isProcessing={isProcessing}
      />
    </>
  )
}

export default Provider
