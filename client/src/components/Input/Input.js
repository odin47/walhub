import PropTypes from 'prop-types'
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import useDebounce from '../../hooks/useDebounce';
import InputStyles from './Input.module.scss'

const Input = ({listData, handleSearch}) => {

    const [state, setState] = useState('')
    const debounceSearch = useDebounce(state, 500)

    useEffect(() => {
        if(state.length > 2)
            handleSearch(state)
    }, [debounceSearch])

    return (
        <div data-testid="input-test" className={InputStyles.container}>
            <input onChange={(ev) => setState(ev.target.value)} value={state} />
            {
                listData && listData.length > 0 && <ul>
                {
                    listData && listData.length > 0 && listData.map((item, index) => (
                        <li key={`${index}-${item}`}><Link to={`/repository/${item.name}`}>{item.name}</Link></li>
                    ))
                }
            </ul>
            }
            
        </div>
    )
}

Input.propTypes = {
    listData: PropTypes.array,
    handleSearch: PropTypes.func
}

export default Input