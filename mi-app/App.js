import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HabitList from './components/HabitList';
import ProgressCircle from './components/ProgressCircle';
import DailyActivities from './components/DailyActivities';
import AddHabitOrReminder from './components/AddHabitOrReminder';
import MyHabits from './components/MyHabits';

function App() {
  const [habits, setHabits] = useState([]);
  const [reminders, setReminders] = useState([]);

  const addHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, completed: false }]);
  };

  const addReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  const toggleHabitCompletion = (index) => {
    const updatedHabits = habits.map((habit, i) => {
      if (i === index) {
        return { ...habit, completed: !habit.completed };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

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
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Hábitos y Recordatorios</Text>

      <AddHabitOrReminder 
        onAddHabit={addHabit} 
        onAddReminder={addReminder} 
      />

      <ProgressCircle habits={habits} />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <HabitList 
          habits={habits} 
          onToggleCompletion={toggleHabitCompletion} 
          onHabitNameChange={handleHabitNameChange}
        />

        <DailyActivities reminders={reminders} />

        <MyHabits habits={habits} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  scrollViewContent: {
    flexGrow: 1, // Permite que el contenido de ScrollView crezca según su contenido
    paddingBottom: 16, // Espacio en la parte inferior
  },
});

export default App;

