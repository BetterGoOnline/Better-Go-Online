import Subscriber from "../models/subscriberModel.js";
import { sendContactFormEmail } from "../config/emailService.js";

export const sendContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if(!name || !email || !message){
            return res.status(400).json({
                message: "Please fill in all fields"
            })
        }

        const doesSubscriberExit = await Subscriber.findOne({email});
        if(!doesSubscriberExit){
            const subscriber = new Subscriber({name, email});
            const savedSubscriber = await subscriber.save();
            console.log(savedSubscriber);
        }
        sendContactFormEmail(name, email, message);
        res.status(200).json({ message: "Message sent successfully" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}