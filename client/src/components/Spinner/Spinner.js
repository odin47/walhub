import styles from './Spinner.module.scss';

function Spinner() {
  return (
    <div data-testid="spinner-test" className={styles.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner