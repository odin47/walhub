import Spinner from '../Spinner'
import styles from './Overlay.module.scss'

const Overlay = () => {
  return (
    <div data-testid="overlay-test" className={styles.overlayContainer}>
        <Spinner />
    </div>
  )
}

export default Overlay