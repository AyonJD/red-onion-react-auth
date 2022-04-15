import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* Nested Route */}
            <div className="nested flex justify-center mt-10">
                <Link className='mx-3 text-xl font-medium' to={"breakfast"}> Breakfast</Link>
                <Link className='mx-3 text-xl font-medium' to={"lunch"}> Lunch</Link>
                <Link className='mx-3 text-xl font-medium' to={"dinner"}> Dinner</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;