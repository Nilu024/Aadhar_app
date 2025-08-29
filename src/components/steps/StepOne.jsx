const StepOne = ({ nextStep, updateFormData }) => {
  const handleNext = (e) => {
    e.preventDefault();
    updateFormData({ name: e.target.name.value, email: e.target.email.value });
    nextStep();
  };

  return (
    <form onSubmit={handleNext} className="auth-form">
      <input name="name" placeholder="Full Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit">Next</button>
    </form>
  );
};

export default StepOne;
