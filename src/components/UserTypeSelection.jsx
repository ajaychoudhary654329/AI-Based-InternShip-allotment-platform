import React from 'react';
import './UserTypeSelection.css';

const UserTypeSelection = ({ onUserTypeSelect, onBack }) => {
  return (
    <div className="user-type-selection">
      <div className="selection-container">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        
        <div className="selection-content">
          <h2>Choose Your Role</h2>
          <p>Please select how you'd like to use our platform</p>
          
          <div className="user-type-cards">
            <div 
              className="user-type-card student-card"
              onClick={() => onUserTypeSelect('student')}
            >
              <div className="card-icon">🎓</div>
              <h3>I'm a Student</h3>
              <p>Looking for internship opportunities to kickstart my career</p>
              <ul className="features-list">
                <li>Browse internship opportunities</li>
                <li>AI-powered matching</li>
                <li>Track applications</li>
                <li>Interview preparation</li>
              </ul>
            </div>
            
            <div 
              className="user-type-card recruiter-card"
              onClick={() => onUserTypeSelect('recruiter')}
            >
              <div className="card-icon">💼</div>
              <h3>I'm a Recruiter</h3>
              <p>Searching for talented students for internship positions</p>
              <ul className="features-list">
                <li>Post internship openings</li>
                <li>Review student profiles</li>
                <li>Smart candidate matching</li>
                <li>Streamlined hiring process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;