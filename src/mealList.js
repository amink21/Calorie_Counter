
import React from 'react';

const MealList = ({ mealItems, onDelete}) => {

    // Calculate total calories
    const totalCalories = mealItems.reduce((total, item) => {
      // Ensure item.Calories is a number before adding
      const calories = isNaN(item.Calories) ? 0 : parseInt(item.Calories);
      return total + calories;
    }, 0);

    const handleDelete = (index) => {
        onDelete(index);
      };

  return (
    <div id="meal-list">
      <h2>Meal</h2>
      <ul className='meal-list'>
        {mealItems.map((item, index) => (
          <li key={index} className='meal-item'>
            {`${item.Display_Name} - Portion Size: ${parseInt(item.Portion_Amount)}, Calories: ${parseInt(item.Calories)}`}
            <button className="meal-button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p className='totalCal'>Total Calories: {totalCalories}</p>
    </div>
  );
};


export default MealList;