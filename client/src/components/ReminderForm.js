import React, { useState } from 'react';

const ReminderForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, time, frequency, startDate, endDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre del recordatorio" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
      />
      {/* Aquí iría el selector de frecuencia */}
      <input 
        type="date" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
      />
      <input 
        type="date" 
        value={endDate} 
        onChange={(e) => setEndDate(e.target.value)} 
      />
      <button type="submit">Guardar recordatorio</button>
    </form>
  );
};

export default ReminderForm;
