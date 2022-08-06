import express from 'express'
import repoRoute from './repositoryRoute.js';

const router = express.Router();

router.use('/repo', repoRoute)

export default router