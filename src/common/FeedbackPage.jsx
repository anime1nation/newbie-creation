import React from 'react';
import { Link } from 'react-router-dom';
import './feedback.css';

export default function FeedbackPage(){
    return (
      <div id="Feedback_main">
        <p className='feedback-content'>
            Thank you for contacting  us we will respond you soon in within 24 hours.
            Rgards
            ________________
            Newbie Creations
        </p>
        <Link to={"/"}>
        <button className='button' >Back to Home</button>
        </Link>
        <div className='line'></div>
      </div>
    )
  }
