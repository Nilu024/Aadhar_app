import React, { useState } from 'react';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import './Auth.css';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const steps = {
    1: <StepOne nextStep={nextStep} updateFormData={updateFormData} />,
    2: <StepTwo nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />,
    3: <StepThree nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />,
    4: <StepFour prevStep={prevStep} formData={formData} />
  };

  return (
    <div className="auth-container">
      <h2>📝 Register - Step {step}</h2>
      {steps[step]}
    </div>
  );
};

export default Register;
