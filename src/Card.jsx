import React from 'react';
import Cards from './cards';
import mountain from './assets/mountain.jpg';
import forest from './assets/forest.jpg';
import beach from "./assets/beach.jpg";

const Card = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap' }}>
      <Cards
        title="Mountains"
        description="Explore the serene beauty of snowy peaks."
        image="mountain.jpg"
      />
      <Cards
        title="Forest"
        description="Wander through lush green trails and quiet woods."
        image="forest.jpg"
      />
      <Cards
        title="Beach"
        description="Relax by the waves and golden sands."
        image="beach.jpg"
      />
    </div>
  );
};

export default Card;