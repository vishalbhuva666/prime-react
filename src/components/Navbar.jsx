import React from 'react';
import { Button } from 'primereact/button';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Resume from './Resume';
var FileSaver = require('file-saver');

const Navbar = () => {

    const downloadResume = async () => {
        const blob = await pdf((<Resume />)).toBlob();
        const pdfName = `AhirVishal.pdf`;
        saveAs(blob, pdfName);
    }
    const downloadImage = async () => {
        FileSaver.saveAs(require('../img/vishal.JPG'), "AhirVishal.jpg");
    }

    return (
        <>
            {/* <div>
                <div style={{ height: '200px', backgroundImage: `url(${require('../img/vishal.JPG')})` }}></div >
                <div className="px-4 py-5 md:px-6 lg:px-8 surface-section">
                    <div className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between relative" style={{ marginTop: '-2rem', top: '-70px', marginBottom: '-70px' }}>
                        <div><div className="mb-3 surface-card shadow-2 flex align-items-center justify-content-center" style={{ width: '140px', height: '140px', borderRadius: '10px' }}>
                            <img src={require('../img/vishal.JPG')} alt="Image" width="70" height="70" />
                        </div><div className="text-900 text-3xl font-medium mb-3">Company Name</div>
                            <p className="mt-0 mb-3 text-700 text-xl">Vitae tortor condimentum lacinia quis vel eros.</p>
                            <div className="text-600 font-medium"><span>Software | USA | 15523 Followers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="grid grid-nogutter surface-0 text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1" onClick={() => downloadImage()}>Ahir Vishal</span>
                        <div className="text-6xl text-primary font-bold mb-3">Software Developer</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Experienced in web and mobile app development using JavaScript, SharePoint, React, and Node.js. Skilled in agile methodologies and collaborative teamwork. Strong problem-solving abilities with a commitment to continuous learning.</p>

                        <Button label="Go to Site" type="button" className="p-button-outlined shadow-none" onClick={() => window.open('https://ahirvishal.netlify.app/')} />
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden cursor-pointer" onClick={() => downloadResume()}>
                    <img src={require('../img/vishal.JPG')} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
        </>
    );
};

export default Navbar;