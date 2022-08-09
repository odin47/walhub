import PropTypes from 'prop-types'
import styles from './Table.module.scss'

const Table = ({data}) => {
  return (
    <table className={styles.tableContainer}>
        <tbody>
        {
            data && data.length > 0 && data.map((item, index) => (
                <tr key={`${index}-${item.name}`}>
                    <td><span>{item.name}</span></td>
                    <td>{item.value}</td>
                </tr>
            ))
        }
        </tbody>
    </table>
  )
}

Table.propTypes = {
    data: PropTypes.array
}
  

export default Table