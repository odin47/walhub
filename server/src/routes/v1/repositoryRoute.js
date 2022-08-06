import express from 'express'
import {
    getTopRepositories,
    getRepositoriesList,
    getRepositoryDetails
} from '../../controllers/repositoryController.js'

const router = express.Router();

router.get('/trending', getTopRepositories)
router.get('/search', getRepositoriesList)
router.get('/details', getRepositoryDetails)

export default router