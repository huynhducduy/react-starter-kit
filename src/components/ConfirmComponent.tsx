import { ConfirmComponentProps } from 'utils/hooks/useConfirm'

const ConfirmComponent = ({
  title = 'Confirm on removal',
  body,
  isShow,
  onHide,
  onConfirm,
  isProcessing = false,
}: ConfirmComponentProps) => {
  console.log('render')
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
        display: !isShow ? 'none' : 'flex',
        backgroundColor: '#fff',
      }}
    >
      <div>
        <div>{title}</div>
        <div>{body}</div>
        <div>
          <button onClick={onHide}>No</button>
          <button onClick={onConfirm}>Yes</button>
          {isProcessing && 'Processing...'}
        </div>
      </div>
    </div>
  )
}

export default ConfirmComponent
