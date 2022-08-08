import styles from './Button.module.scss';

const Button = ({children, handleAction, type='submit', color="primary"}) => {
    return (
        <button  className={`${styles[color]}`} type={type} onClick={handleAction}>
            {children}
        </button>
    )
}

export default Button