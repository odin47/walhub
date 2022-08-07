import {ReducerTypes} from './repositoryTypes'

const initialState = {
    searchList: {
        loading: false,
        data: []
    },
    repositoryList: {
        loading: false,
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
            searchList: payload
        }
        case ReducerTypes.GET_TRENDING_REPOSITORIES: return {
            ...state,
            repositoryList: payload
        }
        case ReducerTypes.GET_REPOSITORY_DETAILS: return {
            ...state,
            currentRepository: payload
        }
        default: return state
    }
}

export default repositoryReducer