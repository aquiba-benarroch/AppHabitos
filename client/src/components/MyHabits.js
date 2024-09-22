import React from 'react';

const MyHabits = ({ habits }) => {
  return (
    <div>
      <h2>Mis hábitos</h2>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            <strong>{habit.name}</strong>: {habit.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyHabits;
