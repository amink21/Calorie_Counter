// App.js
import React, { useState } from 'react';
import './App.css';
import jsonData from './foodData.json'; // Import JSON data

import SearchForm from './searchForm'; // Assuming you have a SearchForm component
import Results from './results'; // Assuming you have a Results component
import MealList from './mealList'; // Assuming you have a MealList component

const App = () => {
  const [matches, setMatches] = useState([]);
  const [mealItems, setMealItems] = useState([])

  const searchFood = (input) => {
    const inputLowerCase = input.toLowerCase().trim();
    if (!inputLowerCase) {
        alert('Please enter a search term.');
        return;
    }

    if (!jsonData || !Array.isArray(jsonData)) {
        console.error('JSON data is not available or is not in the expected format.');
        return;
    }

    const filteredMatches = jsonData.filter(item =>
        item && item.Display_Name.toLowerCase().includes(inputLowerCase)
    );

    setMatches(filteredMatches);
  };

  const clearSearch = () => {
    setMatches([]);
    setMealItems([]);
  };

  const addFoodToMeal = (foodItem) => {
    setMealItems([...mealItems, foodItem]);
  };

  const deleteMealItem = (index) => {
    const updatedMealItems = [...mealItems];
    updatedMealItems.splice(index, 1);
    setMealItems(updatedMealItems);
  };


  return (
    <div className="container">
      <h1 className="heading">Calorie Counter</h1>
      <SearchForm onSearch={searchFood} onClear={clearSearch} />
      <MealList mealItems={mealItems} onDelete={deleteMealItem}/>
      <Results matches={matches} onAddFood={addFoodToMeal} />
    </div>
  );
};

export default App;
