import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import styles from './Pagination.module.scss';

const Pagination = ({count, currentPage, handleBackward, handleForward}) => {
  return (
    <div className={styles.paginationContainer}>
        <Button handleAction={handleBackward}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <p>{currentPage} / {count}</p>
        <Button handleAction={handleForward}>
            <FontAwesomeIcon icon={faChevronRight} />
        </Button>
    </div>
  )
}

export default Pagination