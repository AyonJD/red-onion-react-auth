import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* Nested Route */}
            <div className="nested flex justify-center">
                <Link className='mx-3 text-xl' to={"breakfast"}> Breakfast</Link>
                <Link className='mx-3 text-xl' to={"lunch"}> Lunch</Link>
                <Link className='mx-3 text-xl' to={"dinner"}> Dinner</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;