import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.imageContainer}>
                    <img src="logo.png" alt="logo" width="100%"/>
                    <span>wal_hub</span>
                </div>
            </div>
            <div className={styles.rightContainer}>
            </div>
        </div>
    </header>
  )
}

export default Header