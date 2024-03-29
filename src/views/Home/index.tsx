import styles from './styles.module.scss'
import logo from 'assets/logo.svg'

import { useCallback, useState, memo, useEffect } from 'react'
import toast from 'utils/toast'
import useConfirm from 'utils/hooks/useConfirm'
import { useSetMetaData } from 'utils/hooks/useMetaData'
import { useTranslation } from 'react-i18next'
import LanguageChanger from 'components/LanguageChanger'
import { useQuery } from 'react-query'
import request from 'request'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BigListPureComponent = memo(
  (props: { someProp: React.CSSProperties }) => {
    return <div style={props.someProp}></div>
  }
)

function App() {
  const setTitle = useSetMetaData('title')

  const confirm = useConfirm()
  const { t } = useTranslation()
  const [pageTitle, setPageTitle] = useState<string>('')

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPageTitle(e.target.value)
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
    setTitle(pageTitle)
  }, [pageTitle, setTitle])

  useEffect(() => {
    setTitle('Home')
  }, [setTitle])

  const { isLoading, error, data } = useQuery<Record<string, string>, boolean>(
    'repoData',
    () =>
      request<Record<string, string>>({ to: '/test' })
        .then((res) => {
          return res.data
        })
        .catch((err) => {
          throw err
        })
  )

  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <LazyLoadImage
          src={logo}
          className={styles['App-logo']}
          alt="logo"
          effect="opacity"
        />
        <h2>{t('Welcome to React')}</h2>
        <input
          className={styles['App-input']}
          value={pageTitle}
          onChange={handleInput}
        ></input>
        <button onClick={changeTitle}>Update title</button>
        <button onClick={handleToast}>Toast</button>
        <button onClick={handleConfirm}>Confirm</button>
        <LanguageChanger />
        <BigListPureComponent someProp={{}} />
        <pre>
          {isLoading
            ? 'Loading...'
            : error
            ? 'Error!'
            : JSON.stringify(data, null, 2)}
        </pre>
      </header>
    </div>
  )
}

export default App
