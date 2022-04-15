import React from 'react';
import useMeals from '../../../Hooks/useMeals';
import SingleBreakfast from './SingleBreakfast';

const Breakfast = () => {
    const { breakfast } = useMeals()
    return (
        <div>
            {
                breakfast.map(singleBreakfast => <SingleBreakfast key={singleBreakfast.id} singleMeal={singleBreakfast}></SingleBreakfast>)
            }
        </div>
    );
};

export default Breakfast;