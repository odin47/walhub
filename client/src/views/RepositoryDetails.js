import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {getRepositoryDetails, getRepositorySearchList} from '../redux/repositories/repositoryActions'
import Image from '../components/Image'
import Table from '../components/Table'
import styles from '../index.module.scss'

function RepositoryDetails() {
  const {user, repositoryName} = useParams()
  const repositoryDetails = useSelector((state) => state.repositoryData.currentRepository)
  const dispatch = useDispatch()

  useEffect(() => {
    if(typeof user !== 'undefined' && typeof repositoryName !== 'undefined') {
      dispatch(getRepositoryDetails(`${user}/${repositoryName}`))
    }
    dispatch(getRepositorySearchList(''))
  }, [user, repositoryName])

  return (
    <div className={styles.repositoryDetailsContainer}>
      <div className={styles.childContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.imageContainer}>
            <Image data={repositoryDetails?.data?.avatarUrl}/>
          </div>
        </div>
        <Table data={repositoryDetails?.data?.description}/> 
      </div>
    </div>
  );
}

export default RepositoryDetails;