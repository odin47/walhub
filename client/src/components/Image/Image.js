import styles from './Image.module.scss'

const Image = ({data, name, title, backgroundColor, loading, draggable}) => {
    return (
        <img
            className={styles.imageContainer}
            src={data}
            alt={name}
        />
    )
}

export default Image;