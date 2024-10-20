import React, { useState } from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from 'emailjs-com';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.send(
          'service_se9rn8g',
          'template_66300kl',
          formData,
          'Q4CVTopiXPkPFm5SZ' 
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
        })
        .catch((error) => {
          console.log('FAILED...', error);
          alert('Failed to send email. Please try again.');
        });
    
        // Clear the form
        setFormData({ name: '', email: '', message: '' });
      };
    return (
        <div className='grid lg:grid-cols-2 gap-10 lg:px-20 px-10'>
            <div className='flex flex-col items-start justify-center gap-5 bg-teal-50 rounded-2xl shadow-xl p-10'>
                <h2 className='text-3xl font-semibold border-b-2 pb-5 border-black w-3/4'>Contact</h2>

                <div className='text-xl flex justify-start gap-5 items-center'>
                    <FaPhoneVolume />
                    <p>+8801775348910</p>

                </div>
                <div className='text-xl flex justify-start gap-5  items-center'>
                    <IoMdMail />
                    <p>tayeshhasnat@gmail.com</p>
                </div>
                <div className='text-xl flex justify-start gap-5  items-center'>
                    <FaLocationDot />
                    <p className='text-xl'>32, Kishoreganj Sadar, Kishoreganj</p>

                </div>

            </div>
            <div className='flex flex-col gap-5 items-center bg-teal-50 rounded-2xl shadow-xl p-10'>
                <form onSubmit={sendEmail} className="">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="input input-bordered flex items-center gap-2 max-w-xs w-full mt-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                            type="email"
                            className="grow"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </label>
                    <textarea
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-3"
                    ></textarea>
                    <button
                        type="submit"
                        className="btn max-w-xs w-full text-xl bg-teal-400 text-white mt-5"
                    >
                        Send Mail
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Contact;