import React, { useState } from "react";

const HabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      addHabit({ name: habitName, completed: false });
      setHabitName(""); // Limpiar el campo después de agregar
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nuevo hábito"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type="submit">Agregar Hábito</button>
    </form>
  );
};

export default HabitForm;
