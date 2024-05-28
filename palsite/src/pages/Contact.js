import React from 'react';
import './Contact.css'; // Make sure to import the CSS file

export default function Contact() {
    return(
        <div>
            <h1>Contact</h1>
            <h5>
                email: <a href="mailto:michaelfc8841@gmail.com" className="contact-link">michaelfc8841@gmail.com</a>
            </h5>
            <h5>
                github: <a href="https://github.com/pal4569" target="_blank" rel="noopener noreferrer" className="contact-link">pal4569</a>
            </h5>
        </div>
    )
}
