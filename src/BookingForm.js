import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [formError, setFormError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    if (!date || !time || !guests || !occasion) {
      setIsFormValid(false);
      return false;
    }

    if (guests < 1 || guests > 10) {
      setFormError('Guests must be between 1 and 10.');
      setIsFormValid(false);
      return false;
    }

    setFormError('');
    setIsFormValid(true);
    return true;
  };

  useEffect(() => {
    validateForm();
  }, [date, time, guests, occasion]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formData = { date, time, guests, occasion };
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='reservationForm'>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
        min="1"
        max="10"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>


      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!isFormValid}
      />
      {formError && <p className="errorMessage">{formError}</p>}
    </form>
  );
}

export default BookingForm;
