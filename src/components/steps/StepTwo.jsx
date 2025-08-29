import React, { useState, useEffect } from 'react';

const getCachedData = () => {
  try {
    return JSON.parse(localStorage.getItem('formData')) || {};
  } catch {
    return {};
  }
};

const StepTwo = ({ nextStep, prevStep, updateFormData }) => {
  const [role, setRole] = useState('{role}');

  // Load cached role on mount
  useEffect(() => {
    const cached = getCachedData();
    if (cached.role) {
      setRole(cached.role);
    }
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    const updated = { role };
    localStorage.setItem('formData', JSON.stringify({ ...getCachedData(), ...updated }));
    updateFormData(updated); // Ensure parent state is updated
    nextStep();
  };

  return (
    <form onSubmit={handleNext} className="auth-form">
      <select
        name="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      >
        <option value="">Select Role</option>
        <option value="individual">Individual</option>
        <option value="ngo">NGO</option>
        <option value="social_worker">Social Worker</option>
      </select>

      <div className="step-nav">
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="submit">
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
