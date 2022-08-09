import PropTypes from 'prop-types'
import styles from './Button.module.scss';

const Button = ({children, handleAction, type='submit', color="primary"}) => {
    return (
        <button  className={`${styles[color]}`} type={type} onClick={handleAction}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    handleAction: PropTypes.func,
    type: PropTypes.string,
    color: PropTypes.string
}

export default Button