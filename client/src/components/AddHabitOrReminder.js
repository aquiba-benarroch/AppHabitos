import React from 'react';

const AddHabitOrReminder = ({ onAddHabit, onAddReminder }) => {
  return (
    <div>
      <h2>¿Quieres agregar un hábito o un recordatorio para hoy?</h2>
      <button onClick={onAddHabit}>Hábito</button>
      <button onClick={onAddReminder}>Recordatorio</button>
    </div>
  );
};

export default AddHabitOrReminder;
