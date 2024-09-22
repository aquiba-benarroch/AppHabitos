import React from 'react';
import HabitItem from './HabitItem';

const HabitList = ({ habits, onToggleCompletion, onHabitNameChange }) => {
  return (
    <div className="habit-list">
      {habits.map((habit, index) => (
        <HabitItem 
          key={index} 
          habit={habit} 
          onToggle={() => onToggleCompletion(index)} 
          onNameChange={(newName) => onHabitNameChange(index, newName)} 
        />
      ))}
    </div>
  );
};

export default HabitList;
