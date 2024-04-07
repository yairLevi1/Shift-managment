import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const WeekTable = () => {
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const daysOfWeek = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];
    const currentDay = date.getDay();
    const startOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - currentDay);

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + i);
      weekDays.push({
        date: day.getDate(),
        dayOfWeek: daysOfWeek[i],
      });
    }

    setDays(weekDays);
  }, [date]);

  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };

  return (
    <div>
      <h1>טבלה שבועית</h1>
      <input type="date" value={date.toISOString().split("T")[0]} onChange={handleDateChange} />
      <table>
        <thead>
          <tr>
            <th>יום</th>
            <th>תאריך</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day.date}>
              <td>{day.dayOfWeek}</td>
              <td>{day.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
        <Link to="/">
          <button>דף הבית</button>
        </Link>
    </div>
  );
};

export default WeekTable;
