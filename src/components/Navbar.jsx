import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Resume from './Resume';
var FileSaver = require('file-saver');

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme && storedTheme !== 'light') {
            setTheme(storedTheme);
            const link = document.getElementById('theme-link');
            if (link) {
                link.href = `${process.env.PUBLIC_URL}/themes/lara-${storedTheme}-cyan/theme.css`;
            }
        }
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        const link = document.getElementById('theme-link');
        if (link) {
            link.href = `${process.env.PUBLIC_URL}/themes/lara-${nextTheme}-cyan/theme.css`;
        }
        localStorage.setItem('theme', nextTheme);
    };

    const downloadResume = async () => {
        const blob = await pdf((<Resume />)).toBlob();
        const pdfName = `AhirVishal.pdf`;
        saveAs(blob, pdfName);
    }
    const downloadImage = async () => {
        FileSaver.saveAs(require('../img/vishal.JPG'), "AhirVishal.jpg");
    }

    return (
        <div className="min-h-screen flex flex-column">
            {/* Sticky Glass Navbar */}
            <nav className="glass-header flex justify-content-between align-items-center px-4 py-3 md:px-6 lg:px-8 mb-4">
                <div className="flex align-items-center gap-2">
                    <span className="text-2xl font-bold text-gradient cursor-pointer" onClick={() => window.location.reload()}>
                        AV
                    </span>
                </div>
                <div className="flex align-items-center gap-3">
                    <Button
                        icon={theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'}
                        rounded
                        text
                        severity="secondary"
                        aria-label="Toggle Theme"
                        onClick={toggleTheme}
                        className="transition-transform hover:rotate-180 transition-duration-500"
                    />
                    <Button
                        label="Visit Site"
                        icon="pi pi-external-link"
                        className="p-button-outlined p-button-sm md:p-button-normal"
                        onClick={() => window.open('https://ahirvishal.netlify.app/')}
                    />
                </div>
            </nav>

            {/* Hero Section */}
            <div className="grid grid-nogutter align-items-center flex-grow-1 px-4 md:px-6 lg:px-8 pb-6">
                <div className="col-12 md:col-6 p-4 animate-fade-in-up">
                    <section className="flex flex-column align-items-center md:align-items-start text-center md:text-left">
                        <span className="text-xl text-primary font-medium mb-2">Hello, I'm</span>
                        <h1
                            className="text-6xl md:text-7xl font-bold mb-2 mt-0 text-gradient cursor-pointer select-none"
                            onClick={() => downloadImage()}
                            title="Click to download image"
                        >
                            Ahir Vishal
                        </h1>
                        <div className="text-3xl md:text-4xl font-semibold mb-4 text-color-secondary">
                            Software Developer
                        </div>
                        <p className="text-lg text-color-secondary line-height-3 mb-6 max-w-30rem">
                            Building digital experiences with modern web technologies.
                            Specializing in React, Node.js, and scalable architecture.
                        </p>

                        <div className="flex gap-3">
                            <Button
                                label="Download Resume"
                                icon="pi pi-download"
                                className="p-button-rounded p-button-lg shadow-4 hover:shadow-6 transition-all transition-duration-300"
                                onClick={() => downloadResume()}
                            />
                            <Button
                                label="Contact Me"
                                icon="pi pi-envelope"
                                className="p-button-outlined p-button-rounded p-button-lg"
                                onClick={() => window.location.href = 'mailto:contact@example.com'}
                            />
                        </div>
                    </section>
                </div>

                <div className="col-12 md:col-6 flex justify-content-center align-items-center p-4">
                    <div className="hero-image-container animate-float">
                        <img
                            src={require('../img/vishal.JPG')}
                            alt="Ahir Vishal"
                            className="w-20rem h-20rem md:w-30rem md:h-30rem border-circle shadow-8 object-cover glass-card"
                            style={{ padding: '0.5rem' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;