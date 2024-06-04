import { useState } from 'react';
import './Calendar.css';

interface Event {
  date: Date;
  title: string;
  description?: string;
}

interface CalendarProps {
  events?: Event[];
  className?: string;
}

const Calendar = ({ events = [], className = '' }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek.map((day) => <div key={day} className="calendar-day-header">{day}</div>);
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 0; i < startDay; i++) {
      dates.push(<div key={`empty-${i}`} className="calendar-date empty"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const dayEvents = events.filter((event) => event.date.toDateString() === date.toDateString());
      dates.push(
        <div key={i} className="calendar-date">
          <span>{i}</span>
          {dayEvents.length > 0 && (
            <div className="calendar-events">
              {dayEvents.map((event, index) => (
                <div key={index} className="calendar-event">
                  {event.title}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    return dates;
  };

  return (
    <div className={`calendar ${className}`}>
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <span>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </span>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-body">
        <div className="calendar-days">{renderDaysOfWeek()}</div>
        <div className="calendar-dates">{renderDates()}</div>
      </div>
    </div>
  );
};

export default Calendar;
