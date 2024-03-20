import React, { useState, useCallback } from 'react';
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha,
} from 'react-google-recaptcha-v3';

// Replace this with your actual site key
const siteKey = 'YOUR_SITE_KEY';

interface FormData {
    name: string;
    email: string;
}

const MyForm = () => {
    const [token, setToken] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!token) {
            console.error('reCaptcha verification failed');
            return;
        }

        // Simulate sending form data to server with reCaptcha token
        const response = await fetch('/submit-form', {
            method: 'POST',
            body: JSON.stringify({ ...formData, token }),
        });

        console.log('Form submission response:', response);

        // Clear form data after successful submission
        setFormData({ name: '', email: '' });
        setToken(null);
    };

    const verifyRecaptchaCallback = useCallback((newToken: string) => {
        setToken(newToken);
    }, []);

    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <GoogleReCaptcha onVerify={verifyRecaptchaCallback} />
                <button type="submit">Submit</button>
            </form>
        </GoogleReCaptchaProvider>
    );
};

export default MyForm;
