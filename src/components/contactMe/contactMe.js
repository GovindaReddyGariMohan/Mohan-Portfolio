import './contactMe.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';
import Footer from '../footer/footer';
const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7z6plr9', 'template_ef7qmre', form.current, {
                publicKey: 'dMC8v5w_pFNGfHJVj',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };
    return (
        <>
            <div className="contactMe">
                <div className='contact-me-page-title'>Let's Talk <br />About Your Project</div>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='input-details'>
                            <input type='text' className='text' placeholder='Enter Your Name' name='user_name' required />
                            <input type="email" className='email' placeholder='Enter Your Email ' name='user_email' required />
                        </div>
                        <div className='message'>
                            <textarea placeholder='Message...' className='text-area' name='message' ></textarea>
                        </div>
                        <button className='pointer' type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;