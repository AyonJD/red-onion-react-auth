import React from 'react';
import useMeals from '../../../Hooks/useMeals';
import SingleBreakfast from './SingleBreakfast';

const Breakfast = () => {
    const { breakfast } = useMeals()
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
            {
                breakfast.map(singleBreakfast => <SingleBreakfast key={singleBreakfast.id} singleMeal={singleBreakfast}></SingleBreakfast>)
            }
        </div>
    );
};

export default Breakfast;