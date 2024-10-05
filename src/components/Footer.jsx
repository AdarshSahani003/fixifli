import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8 bottom-0 p-4">
            <div className="max-w-screen-lg mx-auto min-w-screen-sm px-4">
                {/* Company Logo */}
                <div className="flex items-center mb-8">
                    <img src="https://via.placeholder.com/150/3498db/ffffff?text=Logo" alt="Company Logo" className="h-12 mr-3" />
                    <span className="text-2xl font-semibold">fixifli</span>
                </div>
                <div className="flex flex-wrap justify-between">

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 gap-8 mb-4">
                        <div>
                            <h5 className="font-bold mb-2">Company</h5>
                            <ul>
                                <li><a href="/about" className="hover:text-blue-600">About us</a></li>
                                <li><a href="/terms" className="hover:text-blue-600">Terms & Conditions</a></li>
                                <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
                                <li><a href="/customers" className="hover:text-blue-600">For Customers</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h5 className="font-bold mb-2">Resources</h5>
                            <ul>
                                <li><a href="/categories" className="hover:text-blue-600">Categories Near You</a></li>
                                <li><a href="/contact" className="hover:text-blue-600">Contact Us</a></li>
                                <li><a href="/partners" className="hover:text-blue-600">For Partners</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Professional Registration and Social Links */}

                    <div>
                        <h5 className="font-bold mb-2">Get Involved</h5>
                        <ul>
                            <li><a href="/register" className="hover:text-blue-600">Register as a Professional</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-2">Follow Us</h5>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><FaTwitter /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><FaLinkedin /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="mt-4 border-t border-gray-300 pt-2 text-center h-4 text-sm">
                    <p>© Copyright 2024 Fixifli. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;