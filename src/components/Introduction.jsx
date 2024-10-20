import React from 'react';
import { FaDownload } from "react-icons/fa6";

const Introduction = () => {
    return (
        <div id='intro' className='flex lg:flex-row flex-col-reverse justify-around items-center py-10 bg-gradient-to-r from-teal-300 to-teal-50 h-auto lg:h-[75vh]'>
            <div className='lg:w-1/2 w-full px-5 lg:px-0 text-center lg:text-left'>
                <h2 className='text-3xl lg:text-5xl my-3'>Ittihad Hasnat</h2>
                <p className='text-xl lg:text-3xl text-gray-600 my-3'>Fullstack Developer</p>
                <p className='text-sm lg:text-base'>I'm a full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I create dynamic and user-friendly web applications, handling everything from responsive front-end interfaces to efficient back-end solutions. With a focus on modern development practices, I aim to deliver high-quality software that meets user needs and business goals.</p>
                <div className='flex items-center gap-2 bg-slate-50 w-[150px] justify-center rounded p-1 mt-5 mx-auto lg:mx-0'>
                    <FaDownload />
                    <a href='https://drive.google.com/uc?id=1Pd77wU7Epd1-5GtsQk6kJ0kmYzmePFsm&export=download' className='text-xl'>Resume</a>
                </div>
            </div>
            <div className='p-1 rounded-full flex justify-center items-center w-full lg:w-auto mb-5 lg:mb-0'>
                <img src="https://i.ibb.co.com/LNkDDVc/IMG-20240421-105705.png" className='w-[200px] lg:w-[300px] rounded-full z-10' alt="Profile" />
            </div>
        </div>

    );
};

export default Introduction;