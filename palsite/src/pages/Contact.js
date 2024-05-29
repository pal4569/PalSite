import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import orbSound from '../assets/orb.mp3'; // Adjust the path as necessary

export default function Contact() {
    const playSound = () => {
        const audio = new Audio(orbSound);
        audio.play();
    };

    return (
        <div>
            <h1>Contact</h1>
            <h5>
                <FontAwesomeIcon icon={faEnvelope} /> email: <a href="mailto:michaelfc8841@gmail.com" className="contact-link" onClick={playSound}>michaelfc8841@gmail.com</a>
            </h5>
            <h5 className="margin-left-git">
                <FontAwesomeIcon icon={faGithub} /> github: <a href="https://github.com/pal4569" target="_blank" rel="noopener noreferrer" className="contact-link" onClick={playSound}>pal4569</a>
            </h5>
            <h5 className="margin-left-linkedin">
                <FontAwesomeIcon icon={faLinkedin} /> linkedin: <a href="https://www.linkedin.com/in/michael-f-callahan/" target="_blank" rel="noopener noreferrer" className="contact-link" onClick={playSound}>Michael F Callahan</a>
            </h5>
            <h5 className="margin-left-leet">
                <FontAwesomeIcon icon={faCode} /> leetcode: <a href="https://leetcode.com/u/pal4569/" target="_blank" rel="noopener noreferrer" className="contact-link" onClick={playSound}>pal4569</a>
            </h5>
        </div>
    );
}
