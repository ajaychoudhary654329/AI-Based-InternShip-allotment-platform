import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = ({ userType, onBack, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    organization: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onLogin();
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
    onLogin();
  };

  const handlePhoneLogin = () => {
    console.log('Phone login');
    onLogin();
  };
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      organization: ''
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-animation">
        <div className="auth-particle particle-1"></div>
        <div className="auth-particle particle-2"></div>
        <div className="auth-particle particle-3"></div>
        <div className="auth-particle particle-4"></div>
      </div>

      <div className="auth-container">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>

        <div className="auth-content">
          <div className="auth-header">
            <div className="user-type-indicator">
              <span className="type-icon">
                {userType === 'student' ? '🎓' : '💼'}
              </span>
              <span className="type-text">
                {userType === 'student' ? 'Student' : 'Recruiter'} Portal
              </span>
            </div>
            <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p>
              {isLogin
                ? `Sign in to your ${userType} account`
                : `Join our platform as a ${userType}`
              }
            </p>
          </div>

          {/* Unified Login UI for both student and recruiter */}
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && userType === 'recruiter' && (
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {(!isLogin && userType === 'recruiter') && (
              <div className="form-group">
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization/Company"
                  value={formData.organization}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {!isLogin && userType === 'recruiter' && (
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            <button type="submit" className="auth-submit-btn">
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <span className="btn-arrow">→</span>
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <button className="social-login-btn google-btn" onClick={handleGoogleLogin}>
            <span className="social-icon">🔍</span>
            Continue with Google
            <span className="btn-arrow">→</span>
          </button>

          <button className="social-login-btn phone-btn" onClick={handlePhoneLogin}>
            <span className="social-icon">📱</span>
            Continue with Phone Number
            <span className="btn-arrow">→</span>
          </button>

          <div className="auth-toggle">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className="toggle-btn"
                onClick={toggleMode}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          {isLogin && (
            <div className="forgot-password">
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;