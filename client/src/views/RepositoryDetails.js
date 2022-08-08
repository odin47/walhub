import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {getRepositoryDetails, getRepositorySearchList} from '../redux/repositories/repositoryActions'
import Image from '../components/Image';
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
            <Image data={repositoryDetails?.data?.owner?.avatar_url}/>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.dataContainer}>
            <span>Name:</span> {repositoryDetails.data.name}
          </div>
          <div className={styles.dataContainer}>
            <span>Full Name:</span> {repositoryDetails.data.full_name}
          </div>
          <div className={styles.dataContainer}>
            <span>Description:</span> {repositoryDetails.data.description}
          </div>
          <div className={styles.dataContainer}>
            <span>Clone URL:</span> {repositoryDetails.data.clone_url}
          </div>
          <div className={styles.dataContainer}>
            <span>Forks Count:</span> {repositoryDetails.data.forks}
          </div>
          <div className={styles.dataContainer}>
            <span>Open Issues:</span> {repositoryDetails.data.open_issues}
          </div>
          <div className={styles.dataContainer}>
            <span>Subscribers Count:</span> {repositoryDetails.data.subscribers_count}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryDetails;