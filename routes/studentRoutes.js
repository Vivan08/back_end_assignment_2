import express from 'express';
import logger from '../middleware/logger.js';
import { getUsers, createUser, updateUser, getuser, deleteUser } from '../controllers/students.js';
const app = express();
app.use(logger);

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getuser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;