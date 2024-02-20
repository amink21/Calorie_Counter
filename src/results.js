// Results.js
import React from 'react';

const Results = ({ matches, onAddFood }) => {
  return (
    <div id="results" className="results">
      <ul className="results-list">
        {matches.map((item, index) => (
          <li key={index} className="results-item">{`${item.Display_Name} - Portion Size: ${parseInt(item.Portion_Amount)}, Portion: ${item.Portion_Display_Name}, Calories: ${parseInt(item.Calories)}`}
           <button className = "meal-button" onClick={() => onAddFood(item)}>Add</button>
          </li>
        ))}
      </ul>
      {matches.length === 0 && <p>No matches found.</p>}
    </div>
  );
};

export default Results;
