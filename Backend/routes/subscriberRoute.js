import express from 'express';
import { createSubscriber, getAllSubscribers, deleteSubscriber } from '../controllers/subscriberController.js';

const router = express.Router();

router.post('/', createSubscriber);
router.get('/', getAllSubscribers);
router.delete('/:id', deleteSubscriber);

export default router;