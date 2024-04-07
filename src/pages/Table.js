import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function WeeklyTable() {
  const [days, setDays] = useState([
    { day: 'ראשון', text: '' },
    { day: 'שני', text: '' },
    { day: 'שלישי', text: '' },
    { day: 'רביעי', text: '' },
    { day: 'חמישי', text: '' },
    { day: 'שישי', text: '' },
    { day: 'שבת', text: '' },
  ]);

  const handleDayClick = (dayIndex, cellIndex) => {
    // עדכן את הטקסט של היום שנלחץ
    const newDays = [...days];
    newDays[dayIndex].text = `יום ${dayIndex + 1}, תאריך ${cellIndex + 1} נלחץ!`;
    setDays(newDays);
  };

  return (
    <div className="weekly-table">
      <thead>
        <tr>
          {days.map((day) => (
            <th key={day.day} className="day-header">
              {day.day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {days.map((day, dayIndex) => (
          <tr key={day.day}>
            {Array(7).fill(0).map((_, cellIndex) => (
              <td key={`${dayIndex}-${cellIndex}`} className="day-cell" onClick={() => handleDayClick(dayIndex, cellIndex)}>
                <span className="day-text">{day.text}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <br />
        <Link to="/">
          <button>דף הבית</button>
        </Link>
    </div>
  );
};

export default WeeklyTable;




