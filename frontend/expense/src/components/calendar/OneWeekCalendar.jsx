import React, { useState } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const OneWeekCalendar = () => {
    // Get the current date
    const [currentDate, setCurrentDate] = useState(new Date());

    // Function to get an array of days in the week
    const getDaysInWeek = (date) => {
        const daysInWeek = [];
        const currentDateCopy = new Date(date);

        // Start from the beginning of the week (Sunday) and go until the end (Saturday)
        for (let i = 0; i < 7; i++) {
            const currentDay = new Date(currentDateCopy);
            currentDay.setDate(date.getDate() - date.getDay() + i);
            daysInWeek.push(currentDay);
        }

        return daysInWeek;
    };

    // Function to handle fetching the previous week
    const handlePreviousWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 7);
        setCurrentDate(newDate);
    };

    // Function to handle fetching the next week
    const handleNextWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7);
        setCurrentDate(newDate);
    };

    // Map through the days in the week and render each day
    const weekDays = getDaysInWeek(currentDate).map((day, index) => {
        const isToday = day.toDateString() === new Date().toDateString();
        const dayClass = isToday ? 'today' : '';

        return (
            <div key={index} className={`day ${dayClass}`}>
                <div className="day-name">{day.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0)}</div>
                <div className="day-date">{day.getDate()}</div>
            </div>
        );
    });

    return (
        <div className="one-week-calendar">
            <div className="navigation-buttons">
                <div style={{ padding: '20px' }} onClick={handlePreviousWeek}>
                    <MdOutlineArrowBackIos />
                </div>
                <div className="month-year">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
                <div style={{ padding: '20px' }} onClick={handleNextWeek}>
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
            <div className="week-days">
                {weekDays}
            </div>
        </div>
    );
};

export default OneWeekCalendar;
