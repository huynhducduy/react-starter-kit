import logo from 'assets/logo.svg'
import { useCallback, useState } from 'react'
import styles from './style.module.css'

function App() {
  const [text, setText] = useState<string | undefined>('sample text')

  const onTextChange = useCallback((e: { target: { value: string } }) => {
    setText(e.target.value)
  }, [])

function App() {
  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input
          type="text"
          className={styles['App-input']}
          value={text}
          onChange={onTextChange}
        />
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
