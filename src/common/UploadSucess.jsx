import React from 'react';
import './feedback.css';

export default function UploadSucess(){
    return (
      <div id="Feedback_main">
        <p className='feedback-content'>
            Sucessfully uploaded 
        </p>
        <button className='button' onClick={() => window.location.reload(false)}>Upload More</button>
        <div className='line'></div>
      </div>
    )
  }
