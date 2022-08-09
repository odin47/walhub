import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer data-testid="footer-test" className={styles.footer}>
      <p>Made with <span>❤</span> by Deepak Podili Devendra</p>
    </footer>
  )
}

export default Footer