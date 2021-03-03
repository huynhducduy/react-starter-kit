import { useCallback, useState, memo } from 'react'
import styles from './style.module.scss'

import logo from 'assets/logo.svg'

import toast from 'utils/toast'
import useConfirm from 'utils/hooks/useConfirm'

const BigListPureComponent = memo(
  (props: { someProp: React.CSSProperties }) => {
    return <div style={props.someProp}></div>
  }
)

function App() {
  const confirm = useConfirm()
  const [value, setValue] = useState<string>('')

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const handleToast = useCallback(() => {
    toast.success('This is a success toast')
  }, [])

  const handleConfirm = useCallback(() => {
    confirm({
      title: 'Confirmation',
      body: <>Do you wanna do it?</>,
      onConfirm: () =>
        new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
          alert('confirmed')
        }),
    })
  }, [confirm])

  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input
          className={styles['App-input']}
          value={value}
          onChange={handleInput}
        ></input>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleToast}>Toast</button>
        <button onClick={handleConfirm}>Confirm</button>
        <BigListPureComponent someProp={{}} />
      </header>
    </div>
  )
}

export default App
