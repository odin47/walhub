import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork, faEye } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image';
import styles from "./Tile.module.scss"

const Tile = ({ imageSrc, fullname, description, forksCount, watcherCount, handleDetails }) => {
  return (
    <div className={styles.tileContainer} onClick={() => handleDetails(fullname)}>
      <div className={styles.imageContainer}>
        <Image data={imageSrc} backgroundColor="pink"/>
      </div>
      <div className={styles.tileInfoContainer}>
        <div className={styles.tileHeader}>{fullname}</div>
        <p className={styles.tileSubHeader}>
        <div className={styles.countContainer}>
            <div>
                <FontAwesomeIcon icon={faCodeFork} /> {forksCount}
            </div>
            <div>
                <FontAwesomeIcon icon={faEye} /> {watcherCount}
            </div>
        </div>
        </p>
      </div>
    </div>
  )
}

export default Tile