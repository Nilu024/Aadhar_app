import { useState, useEffect } from "react";

const getCachedData = () => {
  try {
    return JSON.parse(localStorage.getItem("formData")) || {};
  } catch {
    return {};
  }
};

const StepOne = ({ nextStep, updateFormData }) => {
  const [formValues, setFormValues] = useState({ name: "", email: "" });

  // Load cached data on mount
  useEffect(() => {
    const cached = getCachedData();
    setFormValues((prev) => ({
      ...prev,
      name: cached.name || "",
      email: cached.email || "",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formValues));
    updateFormData(formValues);
    nextStep();
  };

  return (
    <form onSubmit={handleNext} className="auth-form">
      <input
        name="name"
        placeholder="Full Name"
        value={formValues.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formValues.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Next</button>
    </form>
  );
};

export default StepOne;
