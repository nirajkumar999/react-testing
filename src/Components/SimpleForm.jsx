import React, { useState } from 'react';

// npm install react-datepicker --save
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


const SimpleForm = () => {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(null);
  const [submittedDate, setSubmittedDate] = useState(null);
  const [minTime, setMinTime] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);

    // Check if the selected date is today
    if (isToday(date)) {
      setMinTime(new Date()); // Set minTime to the current time
    } else {
      setMinTime(new Date(0, 0, 0, 0, 0)); // Set minTime to '00:00'
    }
  };

  
  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate!=null && 
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  };


  const formatDate = (date) => {
    try {
      if (date === null) {
        return 'Invalid Date';
      }
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  };


  // const minTime = new Date();
  // minTime.setSeconds(0); // Set seconds to 0 to align with the time intervals

  // const maxTime = new Date();
  // maxTime.setHours(23, 59, 59);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    setSubmittedDate(startDate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="startdatetime">Select Date and Time:</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            showIcon
            todayButton="Today"
            shouldCloseOnSelect={false}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption={<FontAwesomeIcon icon={faClock} />}


            dateFormat="dd/MM/yyyy HH:mm"
            minDate={new Date()} // Restrict selection to future dates
            // minTime={minTime}
            // maxTime={maxTime}
            minTime={minTime}
            maxTime={new Date(0, 0, 0, 23, 59)}
            placeholderText="Select Date and Time"
            isClearable={true}
            fixedHeight
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedDate && (
        <div>
          <h2>Submitted Date and Time:</h2>
          <p>{formatDate(submittedDate)}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleForm;
