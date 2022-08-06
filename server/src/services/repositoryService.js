import axios from 'axios'
import {
    GITHUB_API_URL,
    PER_PAGE_RESULTS,
    CURRENT_PAGE,
    DEFAULT_SEARCH_KEYWORD,
    DEFAULT_REPO_NAME
} from '../constants.js'

const TOP_REPOSITORY_GITHUB_URL = `${GITHUB_API_URL}/search/repositories?q=stars:>500&sort=stars&per_page=${PER_PAGE_RESULTS}`
const REPOSITORY_LIST_URL = `${GITHUB_API_URL}/search/repositories`
const REPOSITORY_DETAILS_URL = `${GITHUB_API_URL}/repos`

const getTopRepositories = async (currentPage = CURRENT_PAGE) => {
    const rawResult = await axios.get(`${TOP_REPOSITORY_GITHUB_URL}&page=${currentPage}`)
    const modifiedResult = rawResult.data.items.map(item => {
        return {
            id: item.id,
            name: item.full_name,
            description: item.description,
            stargazers_count: item.stargazers_count,
            watchers_count: item.watchers_count,
            avatar_url: item.owner.avatar_url
        }
    })
    return modifiedResult
}

const getRepositoriesList = async (searchKeyword = DEFAULT_SEARCH_KEYWORD) => {
    const rawResult = await axios.get(`${REPOSITORY_LIST_URL}?q=${searchKeyword}+in:name&per_page=${PER_PAGE_RESULTS}`)
    const modifiedResult = rawResult.data.items.map(item => {
        return {
            id: item.id,
            name: item.full_name
        }
    });    
    return modifiedResult
}

const getRepositoryDetails = async (repoName = DEFAULT_REPO_NAME) => {
    const rawResult = await axios.get(`${REPOSITORY_DETAILS_URL}/${repoName}`) 
    return rawResult.data
}

export {
    getTopRepositories,
    getRepositoriesList,
    getRepositoryDetails
}