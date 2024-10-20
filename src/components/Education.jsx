import React from 'react';

const Education = () => {
    return (
        <div  className='grid lg:grid-cols-3 gap-5 lg:px-20 px-10 lg:my-20 my-10'>
            <div className='p-5 bg-teal-50 shadow-xl rounded-2xl'>
                <h2 className='text-2xl font-semibold'>B.Sc. Engineering in Computer Science and Engineering</h2>
                <p className='mt-5'>23<sup>rd</sup> May,2022 - Presnt</p>
                <p className='text-xl font-semibold text-gray-500'>Pabna University of Science and Technology</p>
            </div>
            <div className='p-5 bg-teal-50 shadow-xl rounded-2xl'>
                <h2 className='text-2xl font-semibold'>Higher Secondary Certificate in Science</h2>
                <p className='mt-5'>GPA-5.00, Dhaka Board(2020)</p>
                <p className='text-xl font-semibold text-gray-500'>Walinewaz Khan College, Kishoreganj</p>


            </div>
            <div className='p-5 bg-teal-50 shadow-xl rounded-2xl'>
                <h2 className='text-2xl font-semibold'>Secondary School Certificate in Science</h2>
                <p className='mt-5'>GPA-4.95, Dhaka Board(2017)</p>
                <p className='text-xl font-semibold text-gray-500'>Kishoreganj Zilla Ideal School, Kishoreganj</p>

            </div>

        </div>
    );
};

export default Education;