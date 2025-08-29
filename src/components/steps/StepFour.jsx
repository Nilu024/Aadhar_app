const StepFour = ({ prevStep, formData }) => {
  const handleSubmit = () => {
    console.log('Final Data:', formData);
    // Submit to backend
  };

  return (
    <div className="auth-form">
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Role:</strong> {formData.role}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <div className="step-nav">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default StepFour;
