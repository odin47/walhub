import {ReducerTypes} from './repositoryTypes'
import axios from 'axios'

const TOP_REPOSITORY_GITHUB_URL = `http://localhost:3000/api/v1/repo/trending`
const REPOSITORY_LIST_URL = `http://localhost:3000/api/v1/repo/search`
const REPOSITORY_DETAILS_URL = `http://localhost:3000/api/v1/repo/details`

export const getTrendingRepositories = (value = 10) => async (dispatch) => {
    const response = await axios.get(`${TOP_REPOSITORY_GITHUB_URL}?currentPage=${value}`)
    dispatch({type: ReducerTypes.GET_TRENDING_REPOSITORIES, payload: response}) 
}

export const getRepositorySearchList = (value) => async (dispatch) => {
    if(value && value?.length > 0) {
        const response = await axios.get(`${REPOSITORY_LIST_URL}?searchKeyword=${value}&per_page=10`)
        dispatch({type: ReducerTypes.GET_REPOSITORY_SEARCH_LIST, payload: response}) 
    } else {
        dispatch({type: ReducerTypes.GET_REPOSITORY_SEARCH_LIST, payload: []})
    }
}

export const getRepositoryDetails = (value) => async (dispatch) => {
    const response = await axios.get(`${REPOSITORY_DETAILS_URL}?repoName=${value}`)
    dispatch({type: ReducerTypes.GET_REPOSITORY_DETAILS, payload: response}) 
}