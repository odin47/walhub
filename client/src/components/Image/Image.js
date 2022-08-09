import PropTypes from 'prop-types'
import styles from './Image.module.scss'

const Image = ({data, name}) => {
    return (
        <img
            data-testid="image-test"
            className={styles.imageContainer}
            src={data}
            alt={name}
        />
    )
}

Image.propTypes = {
    data: PropTypes.string,
    name: PropTypes.string
}

export default Image;