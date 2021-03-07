import { memo } from 'react'
import styles from './style.module.css'

const Loader = memo(() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>Loading...</div>
    </div>
  )
})

export default Loader
