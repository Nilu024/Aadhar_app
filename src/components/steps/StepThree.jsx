const StepThree = ({ nextStep, prevStep, updateFormData }) => {
  const handleNext = (e) => {
    e.preventDefault();
    updateFormData({ phone: e.target.phone.value, city: e.target.city.value });
    nextStep();
  };

  return (
    <form onSubmit={handleNext} className="auth-form">
      <input name="phone" placeholder="Phone Number" required />
      <input name="city" placeholder="City" required />
      <div className="step-nav">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default StepThree;
