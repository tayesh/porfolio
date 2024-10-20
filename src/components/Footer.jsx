import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='mt-32 bg-teal-100 py-10'>
            <h2 className='text-3xl font-semibold arima_uniquifier text-center'>Get in touch</h2>
            <div className='text-3xl flex justify-center gap-12 my-10'>
                <FaSquareFacebook />
                <FaGithub />
                <FaInstagramSquare />
            </div>
            <p className='text-xl font-semibold text-center'>Copyright © All rights reserved by Ittihad Hasnat Tayesh</p>
        </div>
    );
};

export default Footer;