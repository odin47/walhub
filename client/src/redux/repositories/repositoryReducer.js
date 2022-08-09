import {ReducerTypes} from './repositoryTypes'

const initialState = {
    loading: false,
    searchList: {
        loading: false,
        data: []
    },
    repositoryList: {
        loading: false,
        count: 0,
        data: []
    },
    currentRepository: {
        loading: false,
        data: {}
    }
}

const repositoryReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ReducerTypes.GET_REPOSITORY_SEARCH_LIST: return {
            ...state,
            searchList: {
                ...state.searchList,
                data: payload.data
            }
        }
        case ReducerTypes.GET_TRENDING_REPOSITORIES: return {
            ...state,
            repositoryList: {
                ...state.repositoryList,
                count: payload.data.count,
                data: payload.data.items
            }
        }
        case ReducerTypes.GET_REPOSITORY_DETAILS: return {
            ...state,
            currentRepository: {
                ...state.currentRepository,
                data: payload?.data? payload.data : []
            }
        }
        case ReducerTypes.SET_LOADING_STATUS: return {
            ...state,
            loading: payload
        }
        default: return state
    }
}

export default repositoryReducer