import PropTypes from 'prop-types'
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

Layout.propTypes = {
  children: PropTypes.node,
  handleSearch: PropTypes.func,
  searchList: PropTypes.object
}

export default Layout