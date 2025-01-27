import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';

function Main() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed-booking');
    } else {
      alert('There was an error with your reservation.');
    }
  };

  useEffect(() => {
    const today = new Date();
    initializeTimes(today);
  }, []);

  const initializeTimes = async (date) => {
    const availableTimes = await fetchAPI(date);
    setAvailableTimes(availableTimes);
  };

  const updateTimes = (date) => {
    initializeTimes(date);
  };

  return (
    <div className='bookingPage'>
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
        updateTimes={updateTimes}
      />
    </div>
  );
}

export default Main;
