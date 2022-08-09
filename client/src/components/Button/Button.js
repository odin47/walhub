import PropTypes from 'prop-types'
import styles from './Button.module.scss';

const Button = ({children, handleAction, type, color}) => {
    return (
        <button data-testid="button-test" className={`${styles[color]}`} type={type} onClick={handleAction}>
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

Button.defaultProps = {
    type: 'submit',
    color: 'primary'
}

export default Button