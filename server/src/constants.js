import dotenv from 'dotenv'

dotenv.config()

const NODE_API_PORT = process.env.PORT
const GITHUB_API_URL = process.env.API_GITHUB_URL
const PER_PAGE_RESULTS = 10
const CURRENT_PAGE = 1
const DEFAULT_SEARCH_KEYWORD = 'Hello World'
const DEFAULT_REPO_NAME = 'odin47/blog-deepak'

export {
    NODE_API_PORT,
    GITHUB_API_URL,
    PER_PAGE_RESULTS,
    CURRENT_PAGE,
    DEFAULT_SEARCH_KEYWORD,
    DEFAULT_REPO_NAME
}