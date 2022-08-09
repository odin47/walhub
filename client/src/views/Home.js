import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import {getTrendingRepositories} from '../redux/repositories/repositoryActions'
import Tile from '../components/Tile/Tile'
import Pagination from '../components/Pagination'
import styles from '../index.module.scss'

function Home() {
    const navigate = useNavigate()
    const repositoryList = useSelector((state) => state.repositoryData.repositoryList)
    const dispatch = useDispatch()
    const [state, setState] = useState({
      currentPage: 10
    })

    const handleBackward = () => {
      if(state.currentPage !== 10) {
        setState(state => ({currentPage: state.currentPage - 10}))
      }
    }

    const handleForward = () => {
      if(state.currentPage !== repositoryList.count) {
        setState(state => ({currentPage: state.currentPage + 10}))
      }

    }

    const handleDetails = (value) => {
      navigate(`/repository/${value}`, {replace: true})
    }

    useEffect(() => {
        dispatch(getTrendingRepositories(state.currentPage))
        window.scrollTo(0, 0)
    }, [state])

    return (
      <div>
        <div className={styles.homeContainer}>
          {
            repositoryList && repositoryList.data.length > 0 && repositoryList.data.map((item, index) => (
              <Tile 
                key={item.id}
                imageSrc={item.avatar_url}
                fullname={item.name}
                forksCount={item.forks_count}
                watcherCount={item.watchers_count}
                handleDetails={handleDetails}
              >
              </Tile>
            ))
          }
        </div>
        <Pagination
          count={repositoryList.count}
          currentPage={state.currentPage}
          handleBackward={handleBackward}
          handleForward={handleForward}
        />
      </div>
    );
}

export default Home;