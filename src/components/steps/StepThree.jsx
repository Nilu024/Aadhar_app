import React, { useState, useEffect } from 'react';

const getCachedData = () => {
  try {
    return JSON.parse(localStorage.getItem('formData')) || {};
  } catch {
    return {};
  }
};

const StepThree = ({ nextStep, prevStep, updateFormData }) => {
  const [formValues, setFormValues] = useState({ phone: '', city: '' });

  // Load cached data on mount
  useEffect(() => {
    const cached = getCachedData();
    setFormValues({
      phone: cached.phone || '',
      city: cached.city || '',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    const updated = { ...getCachedData(), ...formValues };
    localStorage.setItem('formData', JSON.stringify(updated));
    updateFormData(formValues);
    nextStep();
  };

  return (
    <form onSubmit={handleNext} className="auth-form">
      <input
        name="phone"
        placeholder="Phone Number"
        value={formValues.phone}
        onChange={handleChange}
        required
      />
      <input
        name="city"
        placeholder="City"
        value={formValues.city}
        onChange={handleChange}
        required
      />
      <div className="step-nav">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default StepThree;
