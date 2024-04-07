import React, { useState } from 'react';
import StepOne from './form1';
import StepTwo from './form2';
import SubmitData from './submitData';
import StepThree from './form3';
import StepFour from './form4';
import StepFive from './form5';
import StepSix from './form6';
import StepSeven from './form7';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data) => {
    // Submit form data
    console.log('Form submitted:', data);
  };

  return (
    <div>
      {step === 1 && <StepOne data={formData} onNext={handleNext} />}
      {step === 2 && (
        <StepTwo data={formData} onPrevious={handlePrevious} onNext={handleNext} />
      )}
      {step === 3 && (
        <StepThree data={formData} onPrevious={handlePrevious} onNext={handleNext} />
      )}
      {step === 4 && (
        <StepFour data={formData} onPrevious={handlePrevious} onNext={handleNext} />
      )}
      {step === 5 && (
         <StepFive data={formData} onPrevious={handlePrevious} onNext={handleNext} />
      )}
      {step === 6 && (
         <StepSix data={formData} onPrevious={handlePrevious} onNext={handleNext} />
      )}
      {step === 7 && (
         <StepSeven data={formData} onPrevious={handlePrevious} onNext={handleNext} />
      )}
      {step === 8 && (
        <SubmitData data={formData} onPrevious={handlePrevious} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default MultiStepForm;

