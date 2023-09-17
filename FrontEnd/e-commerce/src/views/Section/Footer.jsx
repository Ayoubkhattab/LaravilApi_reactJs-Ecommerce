import React from 'react'
import { AiFillFacebook, AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                        <address>
                            123 Main Street<br />
                            City, State ZIP<br />
                            <a href="#">info@example.com</a><br />
                            <a href="#">(123) 456-7890</a>
                        </address>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                        <AiFillFacebook className="text-xl font-semibold mb-2" />
                        <AiOutlineWhatsApp className="text-xl font-semibold mb-2" />
                        <AiOutlineInstagram className="text-xl font-semibold mb-2" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
