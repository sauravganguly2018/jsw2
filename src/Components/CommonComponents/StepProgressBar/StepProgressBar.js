import React, { useState } from 'react';
import './StepProgressBar.css';

const StepProgressBar = ({ steps, currentStep }) => {

    console.log('steps: ',steps.data)
    console.log('currentStep step progress',currentStep)

    return (
        <div className='step-progress-container'>
            {steps.data.map((step, index) => (
                <div key={index} className={`step-item ${currentStep === index && "active"} ${index < currentStep && 'complete'}`}>
                    <div className='step'>{index + 1}</div>
                    <p className='step-text'>{step.action_event}</p>
                </div>
            ))}
        </div>
    );
};
export default StepProgressBar;
