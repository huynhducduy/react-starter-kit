import { useState, useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import confirmAtom from './atom'

export interface ConfirmComponentProps {
  show: boolean
  title: string
  body: React.ReactNode
  onConfirm: () => void
  onCancel: () => void
  isProcessing: boolean
}

interface ConfirmProvider {
  (props: {
    ConfirmComponent: React.ComponentType<ConfirmComponentProps>
    children: JSX.Element
  }): JSX.Element
}

const Provider: ConfirmProvider = ({ ConfirmComponent, children }) => {
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

  const onCancel = useCallback(() => {
    Promise.resolve(confirmData.onCancel()).finally(() => {
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
        show={confirmData.show}
        title={confirmData.title}
        body={confirmData.body}
        onConfirm={onConfirm}
        onCancel={onCancel}
        isProcessing={isProcessing}
      />
    </>
  )
}

export default Provider
