const StepTwo = ({ nextStep, prevStep, updateFormData }) => {
  const handleNext = (e) => {
    e.preventDefault();
    updateFormData({ role: e.target.role.value });
    nextStep();
  };

  return (
    <form onSubmit={handleNext} className="auth-form">
      <select name="role" required>
        <option value="">Select Role</option>
        <option value="individual">Individual</option>
        <option value="ngo">NGO</option>
        <option value="social_worker">Social Worker</option>
      </select>
      <div className="step-nav">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default StepTwo;
