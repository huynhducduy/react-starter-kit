import { useCallback, useState, memo, useEffect } from 'react'
import styles from './styles.module.scss'

import logo from 'assets/logo.svg'

import toast from 'utils/toast'
import useConfirm from 'utils/hooks/useConfirm'
import { useSetMetaData } from 'utils/hooks/useMetaData'
import { useTranslation } from 'react-i18next'

import LanguageChanger from 'components/LanguageChanger'

const BigListPureComponent = memo(
  (props: { someProp: React.CSSProperties }) => {
    return <div style={props.someProp}></div>
  }
)

function App() {
  const setTitle = useSetMetaData('title')

  const confirm = useConfirm()
  const { t } = useTranslation()
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
      onCancel: () => alert('canceled'),
    })
  }, [confirm])

  const changeTitle = useCallback(() => {
    setTitle(value)
  }, [value, setTitle])

  useEffect(() => {
    setTitle('Home')
  }, [setTitle])

  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <h2>{t('Welcome to React')}</h2>
        <input
          className={styles['App-input']}
          value={value}
          onChange={handleInput}
        ></input>
        <button onClick={changeTitle}>Update title</button>
        <button onClick={handleToast}>Toast</button>
        <button onClick={handleConfirm}>Confirm</button>
        <LanguageChanger />
        <BigListPureComponent someProp={{}} />
      </header>
    </div>
  )
}

export default App
