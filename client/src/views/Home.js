import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTrendingRepositories} from '../redux/repositories/repositoryActions';

function Home() {
    const repositoryList = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTrendingRepositories())
    }, [])

    console.log(repositoryList);
  return (
    <div>HOME</div>
  );
}

export default Home;