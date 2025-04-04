import { Resend } from 'resend';
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY); // Replace with your Resend API key

export const sendThankYouSubscriberEmail = async (name, email) => {
    try {
        const result = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "bettergoonline100@gmail.com",
            subject: 'Someone subrscibed',
            html: `
                <h2>Someone subrscibed</h2>
                <p>Name: ${name}, email: ${email}</p>
            `
        });
        console.log('✅ Subscription email sent successfully!');
        return result;
    } catch (error) {
        console.error('❌ Subscription email failed:', error);
        throw error;
    }
};

export const sendContactFormEmail = async (name, email, message) => {
    try {
        const result = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "bettergoonline100@gmail.com",
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });
        console.log('✅ Contact form email sent successfully!');
        return result;
    } catch (error) {
        console.error('❌ Contact form email failed:', error);
        throw error;
    }
};
