import React, { useState, useEffect } from "react";
import "./MyCalendarComponent.scss";

const MyCalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [specialDays, setSpecialDays] = useState({
    "4-22": "Earth Day",
    // Add more special days here
  });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = currentDate.getDate();
  const thisMonth = currentDate.getMonth();
  const thisYear = currentDate.getFullYear();

  const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const generateDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="day empty">
          <div className="innerDay"></div>
        </div>
      );
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const dateKey = `${month + 1}-${i}`;
      const dayOfWeek = (firstDayOfMonth + i - 1) % 7;
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
      const isToday = year === thisYear && month === thisMonth && i === today;
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === i &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;

      let className = "day";
      if (isWeekend) className += " weekend";
      if (isToday && !isSelected) className += " today";
      if (isSelected) className += " selected";

      days.push(
        <div
          key={i}
          className={className}
          onClick={() => setSelectedDate(new Date(year, month, i))}
        >
          <div className="innerDay">
            {i}
            {specialDays[dateKey] && (
              <div className="special">{specialDays[dateKey]}</div>
            )}
          </div>
        </div>
      );
    }

    // Add remaining days from the next month
    const remainingDays = 7 - ((firstDayOfMonth + daysInMonth) % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(
          <div key={`next-${i}`} className="day next-month">
            <div className="innerDay"></div>
          </div>
        );
      }
    }

    return days;
  };

  return (
    <div className="mainCalendar">
      <div className="header2">
        <p className="monthYear">
          {monthNames[month]} {year}
        </p>
        <p className="specialDay">- Earth Day</p>
        <p className="specialDay">- Webinar</p>
      </div>
      <div className="weekdays">
        {dayNames.map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="days-grid">{generateDays()}</div>
    </div>
  );
};

export default MyCalendarComponent;
