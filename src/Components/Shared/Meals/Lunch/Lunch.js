import React from 'react';
import useMeals from '../../../../Hooks/useMeals';
import SingleMealCard from '../SingleMealCard';

const Lunch = () => {
    const { lunch } = useMeals([])
    console.log(lunch);
    return (
        <div>
            <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
                {
                    lunch.map(singleLunch => <SingleMealCard key={singleLunch.id} singleMeal={singleLunch}></SingleMealCard>)
                }
            </div>
        </div>
    );
};

export default Lunch;