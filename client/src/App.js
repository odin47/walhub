import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {getRepositorySearchList} from './redux/repositories/repositoryActions'
import Home from './views/Home';
import RepositoryDetails from './views/RepositoryDetails';
import Layout from './components/Layout/Layout';
import './App.scss';


function App() {
  const searchList = useSelector((state) => state.repositoryData.searchList)
  const dispatch = useDispatch()

  const handleSearch = (value) => {
    if(value && value.length > 0)
      dispatch(getRepositorySearchList(value))
  }

  return (
    <div>
      <Router>
        <Layout searchList={searchList} handleSearch={handleSearch}>
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/repository/:user/:repositoryName" exact element={<RepositoryDetails />}></Route>
            <Route>404 NOT FOUND!!</Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
