
import SibApiV3Sdk from "sib-api-v3-sdk";

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;
console.log(apiKey.apiKey);


export const sendThankYouSubscriberEmail = async (name, email) => {
    try {
        const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
        const sendSmtpEmail = {
            sender: { email: "bettergoonline100@gmail.com", name: "BetterGoOnline" },
            to: [{ email: email, name: name }],
            subject: "Thank You for Subscribing!",
            htmlContent: `
                <h2>Welcome to BetterGoOnline!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for subscribing to our newsletter. We're excited to have you join our community!</p>
                <p>Best regards,<br>BetterGoOnline Team</p>
            `
        };
  
        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent successfully:', result);
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

// ... Contact stuff ...
export const sendContactFormEmail = async (name, email, message) => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const emailData = {
        sender: { email: "bettergoonline100@gmail.com", name: "BetterGoOnline Contact Form" },
        to: [{ email: "bettergoonline100@gmail.com" }], // Your email where you want to receive contact form submissions
        subject: `New Contact Form Submission from ${name}`,
        htmlContent: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
        replyTo: { email: email }
    };

    try {
        await apiInstance.sendTransacEmail(emailData);
        console.log("✅ Contact form email sent successfully!");
    } catch (error) {
        console.error("❌ Contact form email sending failed:", error);
        throw error;
    }
};

export const sendThankYouEmail = async (name, email) => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const emailData = {
        sender: { email: "bettergoonline100@gmail.com", name: "BetterGoOnline" },
        to: [{ email: email }],
        subject: "Thank You for Contacting Better Go Online",
        htmlContent: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Thank You ${name}!</h2>
                <p>We have received your message and appreciate you taking the time to contact us.</p>
                <p>Our team will review your message and get back to you as soon as possible.</p>
                <br>
                <p><strong>Hey, do you feel like everyone is moving at lightspeed, while you are stuck in the same place, don't worry you can do it too by going online, BETTER GO ONLINE</strong></p>
                <p>Contact us if you also want to go online</p>
                <br>
                <p>Best regards,</p>
                <p>Better Go Online Team</p>
            </div>
        `
    };

    try {
        await apiInstance.sendTransacEmail(emailData);
        console.log("✅ Thank you email sent successfully!");
    } catch (error) {
        console.error("❌ Thank you email sending failed:", error);
        throw error;
    }
}

export const sendContactReplay = async (name, email, message) => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const emailData = {
        sender: { email: "bettergoonline100@gmail.com", name: "BetterGoOnline" },
        to: [{ email: email }],
        subject: "Thank You for Contacting Better Go Online",
        htmlContent: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Thank You ${name}!</h2>
                <p>${message}</p>
                <br>
                <p><strong>Hey, do you feel like everyone is moving at lightspeed, while you are stuck in the same place, don't worry you can do it too by going online, BETTER GO ONLINE</strong></p>
                <p>Contact us if you also want to go online</p>
                <br>
                <p>Best regards,</p>
                <p>Better Go Online Team</p>
            </div>
        `
    };

    try {
        await apiInstance.sendTransacEmail(emailData);
        console.log("✅ Thank you email sent successfully!");
    } catch (error) {
        console.error("❌ Thank you email sending failed:", error);
        throw error;
    }
};
