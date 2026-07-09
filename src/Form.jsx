import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");

  function handleNext() {
    setError("");
    if (currentStep === 1) {
      const isValid =
        firstName.trim().length >= 2 && /^[A-Za-z]+$/.test(firstName.trim());
      if (!isValid) {
        setError("First name must contain at least 2 letters");
        return;
      }
    }
    if (currentStep === 2) {
      const isValid =
        lastName.trim().length >= 2 && /^[A-Za-z]+$/.test(lastName.trim());
      if (!isValid) {
        setError("Last name must contain at least 2 letters");
        return;
      }
    }
    if (currentStep === 3) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(email.trim());
      if (!isValid) {
        setError("Invalid Email");
        return;
      }
    }

    if (currentStep === 4) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      const isValid = passwordRegex.test(password);
      if (!isValid) {
        setError("Invalid Password");
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  }

  return (
    <div className="form-container">
      <h1>Form Validation</h1>
      <form>
        <div className="form-section">
          {currentStep >= 1 && (
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter first name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
          )}

          {currentStep >= 2 && (
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          )}

          {currentStep >= 3 && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          )}

          {currentStep >= 4 && (
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          )}
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleNext}>
          Next
        </button>
        {currentStep > 3 && (
          <button type="button" className="submit-btn">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
