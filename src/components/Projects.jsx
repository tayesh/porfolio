import React from 'react';

const Projects = () => {
    return (
        <div className='lg:px-20'>
            <div className="hero bg-base-200  my-10 py-0 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row w-full justify-around items-start">
                    <img
                        src="https://i.ibb.co.com/x5L74dB/screencapture-localhost-5174-2024-08-31-00-14-14.png"
                        className="max-w-sm rounded-lg shadow-2xl mt-20" />
                    <div>
                        <h1 className="text-5xl font-bold text-end pr-12 mt-4">Travellers Valley</h1>
                        <p className="py-4 px-6 text-justify">
                            Travellers Valley, a platform for booking hotel rooms at a certain hotel. Its user-friendly interface allows you to effortlessly explore and reserve rooms that suit your needs. Key features include the ability to view available rooms, book your stay with just a few clicks, and share your experiences through room reviews. With secure login and logout functionalities, you can manage your bookings with ease. Additionally, admin panel ensures seamless management of room availability and user feedback, providing an exceptional experience for both guests and hotel staff.
                        </p>
                        <div className='flex justify-around items-start'>
                            <div>
                                <p className='text-2xl font-bold'>Key Featurs</p>
                                <ul className='list-disc pl-5'>
                                    <li>View Rooms</li>
                                    <li>Book Rooms</li>
                                    <li>Comment Reviews about Rooms</li>
                                    <li>Login</li>
                                    <li>Log out</li>
                                    <li>Admin panel</li>
                                    <li>Payment (Under Development)</li>


                                </ul>
                            </div>
                            <div>
                                <p className='text-2xl font-bold'>Technologies used</p>
                                <ul className='list-disc pl-5'>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>MongoDB</li>
                                    <li>Firebase</li>
                                    <li>Tailwind CSS</li>
                                    <li>HTML 5</li>


                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-10 justify-around my-5'>
                            <button className="btn ">Get Started</button>
                            <button className="btn ">Get Started</button>
                            <button className="btn ">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200  my-10 py-0 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around items-start">
                    <img
                        src="https://i.ibb.co.com/vJYHRwm/screencapture-localhost-5173-2024-08-30-23-51-08.png"
                        className="lg:max-w-sm rounded-lg shadow-2xl mt-20" />
                    <div>
                        <h1 className="text-5xl font-bold pl-6 mt-4">Book Vibe</h1>
                        <p className="py-4 px-6 text-justify">
                            Book Vibe, the ultimate destination for book lovers! Our platform allows you to easily browse and view a diverse selection of books. Enjoy the convenience of adding your favorite titles to your wishlist or shopping cart for seamless purchase later. With secure login and logout functionalities, managing your account is effortless. Plus, we're currently developing a secure payment feature to enhance your shopping experience. Join us and explore a world of literature at your fingertips!
                        </p>
                        <div className='flex justify-around items-start'>
                            <div>
                                <p className='text-2xl font-bold'>Key Featurs</p>
                                <ul className='list-disc pl-5'>
                                    <li>View Books</li>
                                    <li>Add Book to Wishlist</li>
                                    <li>Add Books to Cart</li>
                                    <li>Login</li>
                                    <li>Log out</li>
                                    <li>Payment (Under Development)</li>


                                </ul>
                            </div>
                            <div>
                                <p className='text-2xl font-bold'>Technologies used</p>
                                <ul className='list-disc pl-5'>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>MongoDB</li>
                                    <li>Firebase</li>
                                    <li>Tailwind CSS</li>
                                    <li>HTML 5</li>


                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-10 justify-around my-5'>
                            <button className="btn ">Get Started</button>
                            <button className="btn ">Get Started</button>
                            <button className="btn ">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200  my-10 py-0 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row w-full justify-around items-start">
                    <img
                        src="https://i.ibb.co.com/qmF6BcF/screencapture-localhost-5173-2024-10-10-19-48-16.png"
                        className="max-w-sm rounded-lg shadow-2xl mt-20" />
                    <div>
                        <h1 className="text-5xl font-bold text-end pr-12 mt-4">Painting Arena</h1>
                        <p className="py-4 px-6 text-justify">
                            Painting Arena, the perfect platform for art enthusiasts and artists alike! Browse and view a wide variety of paintings, or contribute your own artwork by adding new paintings to the collection. Easily manage your contributions with options to view all paintings, see your personal collection, update existing artwork, or remove paintings as needed. Secure login and logout functionalities ensure your account and artwork are well-protected. Dive into a vibrant community of art and creativity!
                        </p>
                        <div className='flex justify-around items-start'>
                            <div>
                                <p className='text-2xl font-bold'>Key Featurs</p>
                                <ul className='list-disc pl-5'>
                                    <li>View Paintings</li>
                                    <li>Add Paintings</li>
                                    <li>All Paintings</li>
                                    <li>My Paintings</li>
                                    <li>Update paintings</li>
                                    <li>Delete paintings</li>
                                    <li>Login</li>
                                    <li>Log out</li>


                                </ul>
                            </div>
                            <div>
                                <p className='text-2xl font-bold'>Technologies used</p>
                                <ul className='list-disc pl-5'>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>MongoDB</li>
                                    <li>Firebase</li>
                                    <li>Tailwind CSS</li>
                                    <li>HTML 5</li>


                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-10 justify-around my-5'>
                            <button className="btn ">Get Started</button>
                            <button className="btn ">Get Started</button>
                            <button className="btn ">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;