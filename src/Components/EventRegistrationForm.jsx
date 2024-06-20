import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateForm';

const EventRegistrationForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);
  const [isGuest, setIsGuest] = useState(false);

  function submit() {
    alert(`Form submitted successfully!\n${JSON.stringify(values, null, 2)}`);
  }

  return (
    <div className="form-container">
      <h2>Event Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name || ''}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email || ''}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={values.age || ''}
            onChange={handleChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div>
          <label>Are you attending with a guest?</label>
          <div>
            <label>
              <input
                type="radio"
                name="isGuest"
                value="yes"
                checked={isGuest}
                onChange={() => setIsGuest(true)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isGuest"
                value="no"
                checked={!isGuest}
                onChange={() => setIsGuest(false)}
              />
              No
            </label>
          </div>
        </div>
        {isGuest && (
          <div>
            <label htmlFor="guestName">Guest Name</label>
            <input
              type="text"
              name="guestName"
              id="guestName"
              value={values.guestName || ''}
              onChange={handleChange}
            />
            {errors.guestName && <p className="error">{errors.guestName}</p>}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
