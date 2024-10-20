
const Navbar = () => {
    return (
        <div className='w-full text-2xl flex justify-around py-7 bg-gradient-to-r from-teal-50 to-teal-300'>
            <h2 className='text-3xl font-bold'>Portfolio</h2>
            <div className='flex gap-10'>
                <p>Introduction</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Education</p>
                <p>Vision</p>
                <p>Contact</p>
            </div>
            
        </div>
    );
};

export default Navbar;