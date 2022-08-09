import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import Input from '../Input'
import styles from './Header.module.scss'

const Header = ({handleSearch, searchList}) => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.leftContainer}>
              <div className={styles.imageContainer}>
                <Link  to={'/'}>
                    <img src="/walmartLogo.svg" alt="logo" height={40} />
                </Link>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <Input listData={searchList.data} handleSearch={handleSearch}/>
            </div>
        </div>
    </header>
  )
}

Header.propTypes = {
  handleSearch: PropTypes.func,
  searchList: PropTypes.object
}

export default Header