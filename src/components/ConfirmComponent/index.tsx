import { ConfirmComponentProps } from 'utils/hooks/useConfirm'

const ConfirmComponent = ({
  title = 'Confirm on removal',
  body,
  show,
  onCancel,
  onConfirm,
  isProcessing = false,
}: ConfirmComponentProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        display: !show ? 'none' : 'flex',
        backgroundColor: '#fff',
      }}
    >
      <div>
        <div>{title}</div>
        <div>{body}</div>
        <div>
          <button onClick={onCancel}>No</button>
          <button onClick={onConfirm}>Yes</button>
          {isProcessing && 'Processing...'}
        </div>
      </div>
    </div>
  )
}

export default ConfirmComponent
