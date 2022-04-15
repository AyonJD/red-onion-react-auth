import React from 'react';
import { Link } from 'react-router-dom';

const SingleBreakfast = ({ singleMeal }) => {
    const { img, name, details, price } = singleMeal;
    console.log(img);
    return (
        <div>

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link to="#">
                    <img className="rounded-t-lg" src={img} alt="" />
                </Link>
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>

                </div>
            </div>

        </div>
    );
};

export default SingleBreakfast;