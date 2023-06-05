import React, { useState } from 'react';
// import { useMutation } from 'react-apollo';
// import { gql } from '@apollo/client';

import styles from './ContactUs.css';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    file: null;
    message: string;
}

// const SEND_CONTACT_MESSAGE = gql`
//   mutation SendContactMessage($input: ContactMessageInput!) {
//     sendContactMessage(input: $input) {
//       success
//     }
//   }
// `;

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        file: null,
        message: '',
    });
    //   const [sendContactMessage] = useMutation(CreateDocumentv2);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target as any;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (event: React.ChangeEvent) => {
        const { files } = event.target as any;
        if (files && files.length > 0) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                file: files[0],
            }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
        const variables = {
            dataEntity: 'CC',
         document: {document: formData},
        schema:'FormRathon'
        };
        console.log(variables);

        // try {
        //   const { data } = await sendContactMessage({ variables });

        //   if (data.sendContactMessage.success) {
        //     console.log('Contact message sent successfully!');
        //   } else {
        //     console.error('Failed to send contact message');
        //   }
        // } catch (error) {
        //   console.error('Error sending contact message:', error);
        // }
    };

    return (
        <div className={`${styles.contact_form}`}>
            <h1>Contact Us</h1>
            <h4>Please fill out the below form with your queries</h4>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.form_group}`}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={`${styles.form_group}`}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={`${styles.form_group}`}>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={`${styles.form_group}`}>
                    <label htmlFor="file">File Attachment:</label>
                    <input type="file" name="file" onChange={handleFileChange} />
                </div>
                <div className={`${styles.form_group}`}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
