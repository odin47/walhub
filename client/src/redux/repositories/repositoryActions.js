import {ReducerTypes} from './repositoryTypes'
import axios from 'axios'

const TOP_REPOSITORY_GITHUB_URL = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/repo/trending`
const REPOSITORY_LIST_URL = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/repo/search`
const REPOSITORY_DETAILS_URL = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/repo/details`

export const getTrendingRepositories = (value = 10) => async (dispatch) => {
    dispatch(setLoadingStatus(true))
    const response = await axios.get(`${TOP_REPOSITORY_GITHUB_URL}?currentPage=${value}`)
    dispatch({type: ReducerTypes.GET_TRENDING_REPOSITORIES, payload: response}) 
    dispatch(setLoadingStatus(false))
}

export const getRepositorySearchList = (value) => async (dispatch) => {
    dispatch(setLoadingStatus(true))
    if(value && value?.length > 0) {
        const response = await axios.get(`${REPOSITORY_LIST_URL}?searchKeyword=${value}&per_page=${process.env.REACT_APP_DEFAULT_PER_PAGE}`)
        dispatch({type: ReducerTypes.GET_REPOSITORY_SEARCH_LIST, payload: response}) 
    } else {
        dispatch({type: ReducerTypes.GET_REPOSITORY_SEARCH_LIST, payload: []})
    }
    dispatch(setLoadingStatus(false))
}

export const getRepositoryDetails = (value) => async (dispatch) => {
    dispatch(setLoadingStatus(true))
    const response = await axios.get(`${REPOSITORY_DETAILS_URL}?repoName=${value}`)
    dispatch({type: ReducerTypes.GET_REPOSITORY_DETAILS, payload: response})
    dispatch(setLoadingStatus(false))
}

export const setLoadingStatus = (value) => {
    return {type: ReducerTypes.SET_LOADING_STATUS, payload: value}
}