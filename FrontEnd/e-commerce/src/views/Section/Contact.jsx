import React from 'react'
import Field from '../../components/Field';
// import Button from '../../components/Button';
// import { useNavigate } from 'react-router-dom';

export default function Contact() {

    // const navegate = useNavigate()
    return (
        <section className="bg-gray-200 p-8 m-12 rounded-3xl">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <form className="space-y-4">
                            <div>
                                <Field
                                    label="Name "
                                    Id="name"
                                    placeholder="Enter you name"
                                    type="text"
                                    Name="name"
                                />
                            </div>
                            <div>
                                <Field
                                    label="Email "
                                    Id="email"
                                    placeholder="Enter you email"
                                    type="email"
                                    Name="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-800 font-semibold">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                {/* <Button
                                    buttonName={'send message'}
                                    action={navegate('/home')}
                                /> */}
                            </div>
                        </form>
                    </div>
                    <div>
                        <address className="text-gray-800">
                            <h3 className="text-xl font-semibold mb-4">Our Address</h3>
                            <p>123 Main Street</p>
                            <p>City, State ZIP</p>
                            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                            <p>Phone: <a href="tel:(123) 456-7890">(123) 456-7890</a></p>
                        </address>
                    </div>
                </div>
            </div>
        </section>
    );
}
