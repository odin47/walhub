import PropTypes from 'prop-types'
import {convertString} from '../../utils/convertStrings';
import styles from './Table.module.scss'

const Table = ({data}) => {
  return (
    <table data-testid="table-test" className={styles.tableContainer}>
        <tbody>
        {
            data && data.length > 0 && data.map((item, index) => (
                <tr key={`${index}-${item.name}`}>
                    <td><span>{convertString(item.name, "_", " ")}</span></td>
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