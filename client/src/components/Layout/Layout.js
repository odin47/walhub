import React from 'react'
import Footer from "../Footer"
import Header from "../Header"
import styles from "./Layout.module.scss"

const Layout = ({children, handleSearch, searchList}) => {
  return (
    <div className={styles.container}>
        <Header searchList={searchList} handleSearch={handleSearch}/>
            <>
                {children}
            </>
        <Footer />
    </div>
  )
}

export default Layout