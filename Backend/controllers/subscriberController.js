import Subscriber from '../models/subscriberModel.js';
import { sendThankYouSubscriberEmail } from '../config/brevoEmailService.js';

// Create a new subscriber
export const createSubscriber = async (req, res) => {
    try {
        const { name, email } = req.body;
        const subscriber = new Subscriber({ name, email });
        const savedSubscriber = await subscriber.save();
        await sendThankYouSubscriberEmail(name, email);
        res.status(201).json(savedSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all subscribers
export const getAllSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a subscriber
export const deleteSubscriber = async (req, res) => {
    try {
        const subscriber = await Subscriber.findByIdAndDelete(req.params.id);
        if (!subscriber) {
            return res.status(404).json({ message: 'Subscriber not found' });
        }
        res.status(200).json({ message: 'Subscriber deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

