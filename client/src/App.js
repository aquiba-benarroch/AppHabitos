import React, { useState } from 'react';
import HabitList from './components/HabitList';
import ProgressCircle from './components/ProgressCircle';
import DailyActivities from './components/DailyActivities';
import AddHabitOrReminder from './components/AddHabitOrReminder';
import HabitForm from './components/HabitForm';
import ReminderForm from './components/ReminderForm';
import MyHabits from './components/MyHabits';
import DailySchedule from './components/DailySchedule';

function App() {
  // Estado para gestionar los hábitos y recordatorios
  const [habits, setHabits] = useState([]);
  const [reminders, setReminders] = useState([]);

  // Función para agregar un hábito
  const addHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, completed: false }]); // Añade el hábito con el estado de completado en false
  };

  // Función para agregar un recordatorio
  const addReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  // Función para marcar un hábito como completado
  const toggleHabitCompletion = (index) => {
    const updatedHabits = habits.map((habit, i) => {
      if (i === index) {
        return { ...habit, completed: !habit.completed }; // Cambia el estado de completado
      }
      return habit;
    });
    setHabits(updatedHabits); // Actualiza el estado de los hábitos
  };

    // Función para cambiar el nombre de un hábito
  const handleHabitNameChange = (index, newName) => {
    const updatedHabits = habits.map((habit, i) => {
      if (i === index) {
        return { ...habit, name: newName };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  return (
    <div className="app-container">
      <h1>Gestión de Hábitos y Recordatorios</h1>
      
      {/* Componente para agregar un hábito o recordatorio */}
      <AddHabitOrReminder 
        onAddHabit={addHabit} 
        onAddReminder={addReminder} 
      />

      {/* Muestra el progreso general en los hábitos */}
      <ProgressCircle habits={habits} />

      {/* Lista de hábitos */}
      <HabitList 
        habits={habits} 
        onToggleCompletion={toggleHabitCompletion} 
        onHabitNameChange={handleHabitNameChange}
      />


      {/* Actividades del día (recordatorios) */}
      <DailyActivities reminders={reminders} />
      
      {/* Programación diaria (calendario para actividades del día) <DailySchedule reminders={reminders} /> */}
      
      {/* Muestra los hábitos registrados */}
      <MyHabits habits={habits} />
    </div>
  );
}

export default App;

