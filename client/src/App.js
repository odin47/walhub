import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './views/Home';
import RepositoryDetails from './views/RepositoryDetails';
import Layout from './components/Layout/Layout';
import './App.scss';


function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/repository/:repositoryId" exact element={<RepositoryDetails />}></Route>
            <Route>404 NOT FOUND!!</Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
