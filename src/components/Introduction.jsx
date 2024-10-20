import React from 'react';
import { FaDownload } from "react-icons/fa6";

const Introduction = () => {
    return (
        <div className='flex justify-around items-center py-10 bg-gradient-to-r from-teal-300 to-teal-50 h-[75vh]'>
            <div className='w-1/2'>
                <h2 className='text-5xl my-3'>Ittihad Hasnat</h2>
                <p className='text-3xl text-gray-600 my-3'>Fullstack Developer</p>
                <p>I'm a full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I create dynamic and user-friendly web applications, handling everything from responsive front-end interfaces to efficient back-end solutions. With a focus on modern development practices, I aim to deliver high-quality software that meets user needs and business goals.</p>
                <div className='flex items-center gap-2 bg-slate-50 w-[150px] justify-center rounded p-1 mt-5'>
                    <FaDownload />
                    <p className='text-xl'>Resume</p>
                </div>
            </div>
            <div className='p-1 rounded-full flex justify-center items-center '>
                <img src="https://i.ibb.co.com/LNkDDVc/IMG-20240421-105705.png" className='w-[300px] rounded-full z-10' alt="" />
            </div>


        </div>
    );
};

export default Introduction;