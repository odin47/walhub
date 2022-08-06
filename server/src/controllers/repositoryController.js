import {
    getTopRepositories as getTopRepositoriesService,
    getRepositoriesList as getRepositoriesListService,
    getRepositoryDetails as getRepositoryDetailsService
} from '../services/repositoryService.js';

const getTopRepositories = async (req, res) => {
    const result = await getTopRepositoriesService(req.query.currentPage)
    res.send(result)
}

const getRepositoriesList = async (req, res) => {
    const result = await getRepositoriesListService(req.query.searchKeyword)
    res.send(result)
}

const getRepositoryDetails = async (req, res) => {
    const result = await getRepositoryDetailsService(req.query.repoName)
    res.send(result)
}

export {
    getTopRepositories,
    getRepositoriesList,
    getRepositoryDetails
}