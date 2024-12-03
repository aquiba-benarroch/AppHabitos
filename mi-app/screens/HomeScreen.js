// screens/HomeScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import AddHabitOrReminder from '../components/AddHabitOrReminder';
import ProgressCircle from '../components/ProgressCircle';
import HabitList from '../components/HabitList';
import DailyActivities from '../components/DailyActivities';
import MyHabits from '../components/MyHabits';

function HomeScreen({ navigation, habits, reminders, addHabit, addReminder, toggleHabitCompletion, handleHabitNameChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Hábitos y Recordatorios</Text>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps='handled'>
        <AddHabitOrReminder 
          onAddHabit={addHabit} 
          onAddReminder={addReminder} 
        />

        <ProgressCircle habits={habits} />

        <HabitList 
          habits={habits} 
          onToggleCompletion={toggleHabitCompletion} 
          onHabitNameChange={handleHabitNameChange}
        />

        <DailyActivities reminders={reminders} />

        <MyHabits habits={habits} />

        <Button
          title="Ir a Pantalla de Hábitos"
          onPress={() => navigation.navigate('Habits')}
        />
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

export default HomeScreen;

