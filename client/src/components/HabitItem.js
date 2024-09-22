import React from 'react';

const HabitItem = ({ habit, onToggle, onNameChange }) => {
  return (
    <div className="habit-item">
      <label>
        <input 
          type="checkbox" 
          checked={habit.completed} 
          onChange={onToggle} 
        />
        <input 
          type="text" 
          value={habit.name} 
          onChange={(e) => onNameChange(e.target.value)} 
          placeholder="Escribe el nombre del hábito" 
        />
      </label>
    </div>
  );
};

export default HabitItem;
