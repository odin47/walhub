import styles from './Table.module.scss'

const Table = ({data}) => {
  return (
    <table className={styles.tableContainer}>
        {
            data && data.length > 0 && data.map((item, index) => (
                <tr>
                    <td><span>{item.name}</span></td>
                    <td>{item.value}</td>
                </tr>
            ))
        }
    </table>
  )
}

export default Table