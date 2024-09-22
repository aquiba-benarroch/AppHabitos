import React from 'react';

const DailySchedule = ({ schedule }) => {
  return (
    <div>
      <h2>Hoy</h2>
      <ul>
        {schedule.map((activity, index) => (
          <li key={index}>
            {activity.time} - {activity.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailySchedule;
