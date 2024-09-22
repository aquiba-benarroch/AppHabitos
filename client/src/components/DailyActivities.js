import React from 'react';

const DailyActivities = ({ reminders }) => {
    return (
      <div>
        <h2>Actividades del día</h2>
        {/* Verifica que reminders esté definido y que sea un array antes de hacer map */}
        {reminders && reminders.length > 0 ? (
          reminders.map((reminder, index) => (
            <div key={index}>{reminder.name}</div>
          ))
        ) : (
          <p>No hay recordatorios para hoy.</p>
        )}
      </div>
    );
  };  

export default DailyActivities;
