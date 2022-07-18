import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [Submitted, setSubmitted] = useState(false);

    if (Submitted) {
        return (
            <>
                <div className="end_section">
                    <h1 className="text_end">Thank you!</h1>
                    <p className="paragraph_end">We'll be in contact very soon!</p>
                </div>
            </>
        );
    }

    const Submit = () => {
        if (Name && Email && Message) {
            const serviceId = 'service_yh21zkn';
            const templateId = 'template_j2hbjri';
            const userId = 'A4J3ZqVLQLup3zoex';
            const templateParams = {
                Name,
                Email,
                Message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setSubmitted(true);
        } else {
            alert('Please fill in all fields.');
        }
    }


    return (
        <div className="contact_container">
            <div className="contact_content">
                <div className="contact_header">
                    <h1>Say hello</h1>
                </div>
                <div className="forms">
                    <div className="individual_form">
                        <input value={Name} placeholder="Your name" type="text" required className="form_name" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="individual_form">
                        <input value={Email} placeholder="Email" type="email" required className="form_name" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="individual_form">
                        <textarea value={Message} className="form_text" placeholder="Message" onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <div>
                        <button onClick={Submit} className="form_submit">Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact