import React from 'react';
import './ProgressCircle.css';

const ProgressCircle = ({ habits }) => {
  // Calcular el porcentaje de hábitos completados
  const totalHabits = habits.length;
  const completedHabits = habits.filter(habit => habit.completed).length;
  const completionRate = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;

  const percentage = Math.round(completionRate); // Redondear el porcentaje

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (completionRate / 100) * circumference;

  return (
    <div className="progress-circle-container">
      <svg width="120" height="120" className="progress-circle">
        <circle
          className="progress-circle-bg"
          stroke="lightgrey"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className="progress-circle-fg"
          stroke="blue"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        {/* Texto centrado, pero rotado 90 grados para alinearse verticalmente */}
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dy=".3em"
          fontSize="20px"
          fill="black"
          transform="rotate(90, 60, 60)"  // Rotamos el texto 90 grados alrededor del centro del círculo
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  );
};

export default ProgressCircle;
