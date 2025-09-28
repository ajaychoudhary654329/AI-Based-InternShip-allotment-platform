import React, { useState } from 'react';
import './StudentDashboard.css';

const StudentDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('resume');
  const [activeMainTab, setActiveMainTab] = useState('dashboard');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'resume':
        return (
          <div className="tab-content resume-upload">
            <div className="content-header">
              <h2>📄 Resume Upload</h2>
              <p>Upload your resume for AI-powered analysis and matching</p>
            </div>
            <div className="upload-area">
              <div className="upload-zone">
                <div className="upload-icon">📁</div>
                <h3>Drag & Drop your resume here</h3>
                <p>or click to browse files</p>
                <button className="upload-btn">Choose File</button>
              </div>
              <div className="upload-tips">
                <h4>Tips for better results:</h4>
                <ul>
                  <li>Use PDF format for best compatibility</li>
                  <li>Include relevant skills and projects</li>
                  <li>Keep it under 2MB</li>
                  <li>Use standard fonts and formatting</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="tab-content profile-info">
            <div className="content-header">
              <h2>👤 Profile Information</h2>
              <p>Complete your profile to get better matches</p>
            </div>
            <div className="profile-form">
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-grid">
                  <input type="text" placeholder="Full Name" />
                  <input type="email" placeholder="Email" />
                  <input type="tel" placeholder="Phone Number" />
                  <input type="text" placeholder="Location" />
                </div>
              </div>
              <div className="form-section">
                <h3>Education</h3>
                <div className="form-grid">
                  <input type="text" placeholder="University/College" />
                  <input type="text" placeholder="Degree" />
                  <input type="text" placeholder="Major/Field of Study" />
                  <input type="number" placeholder="Graduation Year" />
                </div>
              </div>
              <div className="form-section">
                <h3>Skills & Interests</h3>
                <textarea placeholder="List your technical skills, programming languages, tools, etc."></textarea>
                <textarea placeholder="Areas of interest for internships"></textarea>
              </div>
              <button className="save-btn">Save Profile</button>
            </div>
          </div>
        );
      case 'ats':
        return (
          <div className="tab-content ats-evaluation">
            <div className="content-header">
              <h2>🤖 ATS Evaluation</h2>
              <p>Get your resume analyzed by our AI-powered ATS system</p>
            </div>
            <div className="ats-dashboard">
              <div className="ats-score">
                <div className="score-circle">
                  <div className="score-number">85</div>
                  <div className="score-label">ATS Score</div>
                </div>
              </div>
              <div className="ats-breakdown">
                <div className="breakdown-item">
                  <span className="item-label">Keyword Match</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '78%'}}></div>
                  </div>
                  <span className="item-score">78%</span>
                </div>
                <div className="breakdown-item">
                  <span className="item-label">Format Compatibility</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '92%'}}></div>
                  </div>
                  <span className="item-score">92%</span>
                </div>
                <div className="breakdown-item">
                  <span className="item-label">Content Quality</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '85%'}}></div>
                  </div>
                  <span className="item-score">85%</span>
                </div>
              </div>
              <div className="ats-suggestions">
                <h4>Improvement Suggestions:</h4>
                <ul>
                  <li>Add more relevant keywords for your target roles</li>
                  <li>Include quantifiable achievements</li>
                  <li>Optimize section headings for ATS parsing</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderMainContent = () => {
    switch (activeMainTab) {
      case 'dashboard':
        return (
          <div className="dashboard-main">
            <div className="dashboard-tabs">
              <button 
                className={`tab-btn ${activeTab === 'resume' ? 'active' : ''}`}
                onClick={() => setActiveTab('resume')}
              >
                📄 Resume Upload
              </button>
              <button 
                className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                👤 Profile Information
              </button>
              <button 
                className={`tab-btn ${activeTab === 'ats' ? 'active' : ''}`}
                onClick={() => setActiveTab('ats')}
              >
                🤖 ATS Evaluation
              </button>
            </div>
            {renderTabContent()}
          </div>
        );
      case 'explore':
        return (
          <div className="explore-content">
            <div className="content-header">
              <h2>🔍 Explore Opportunities</h2>
              <p>Discover internships on various platforms with success rate predictions</p>
            </div>
            <div className="platform-grid">
              <div className="platform-card">
                <div className="platform-header">
                  <img src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Internshala" />
                  <h3>Internshala</h3>
                </div>
                <div className="success-rate">
                  <span className="rate-label">Success Rate</span>
                  <span className="rate-value">78%</span>
                </div>
                <div className="platform-stats">
                  <div className="stat">
                    <span>Active Internships</span>
                    <span>2,450</span>
                  </div>
                  <div className="stat">
                    <span>Your Matches</span>
                    <span>156</span>
                  </div>
                </div>
                <button className="explore-btn">Explore Now</button>
              </div>
              
              <div className="platform-card">
                <div className="platform-header">
                  <img src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Naukri" />
                  <h3>Naukri.com</h3>
                </div>
                <div className="success-rate">
                  <span className="rate-label">Success Rate</span>
                  <span className="rate-value">65%</span>
                </div>
                <div className="platform-stats">
                  <div className="stat">
                    <span>Active Internships</span>
                    <span>1,890</span>
                  </div>
                  <div className="stat">
                    <span>Your Matches</span>
                    <span>89</span>
                  </div>
                </div>
                <button className="explore-btn">Explore Now</button>
              </div>

              <div className="platform-card">
                <div className="platform-header">
                  <img src="https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="LinkedIn" />
                  <h3>LinkedIn</h3>
                </div>
                <div className="success-rate">
                  <span className="rate-label">Success Rate</span>
                  <span className="rate-value">82%</span>
                </div>
                <div className="platform-stats">
                  <div className="stat">
                    <span>Active Internships</span>
                    <span>3,200</span>
                  </div>
                  <div className="stat">
                    <span>Your Matches</span>
                    <span>234</span>
                  </div>
                </div>
                <button className="explore-btn">Explore Now</button>
              </div>

              <div className="platform-card">
                <div className="platform-header">
                  <img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Company Portals" />
                  <h3>Company Portals</h3>
                </div>
                <div className="success-rate">
                  <span className="rate-label">Success Rate</span>
                  <span className="rate-value">71%</span>
                </div>
                <div className="platform-stats">
                  <div className="stat">
                    <span>Active Internships</span>
                    <span>1,560</span>
                  </div>
                  <div className="stat">
                    <span>Your Matches</span>
                    <span>67</span>
                  </div>
                </div>
                <button className="explore-btn">Explore Now</button>
              </div>
            </div>
          </div>
        );
      case 'matches':
        return (
          <div className="matches-content">
            <div className="content-header">
              <h2>🎯 Your Matches</h2>
              <p>Internships that match your skills and profile</p>
            </div>
            <div className="matches-grid">
              <div className="match-card high-match">
                <div className="match-score">95%</div>
                <div className="match-info">
                  <h3>Full Stack Developer Intern</h3>
                  <p className="company">TechCorp Solutions</p>
                  <div className="match-skills">
                    <span className="skill">React</span>
                    <span className="skill">Node.js</span>
                    <span className="skill">MongoDB</span>
                  </div>
                  <div className="match-details">
                    <span>📍 Remote</span>
                    <span>💰 ₹25,000/month</span>
                    <span>⏰ 6 months</span>
                  </div>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>

              <div className="match-card medium-match">
                <div className="match-score">87%</div>
                <div className="match-info">
                  <h3>Data Science Intern</h3>
                  <p className="company">Analytics Pro</p>
                  <div className="match-skills">
                    <span className="skill">Python</span>
                    <span className="skill">Machine Learning</span>
                    <span className="skill">SQL</span>
                  </div>
                  <div className="match-details">
                    <span>📍 Bangalore</span>
                    <span>💰 ₹30,000/month</span>
                    <span>⏰ 4 months</span>
                  </div>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>

              <div className="match-card medium-match">
                <div className="match-score">82%</div>
                <div className="match-info">
                  <h3>UI/UX Design Intern</h3>
                  <p className="company">Creative Studios</p>
                  <div className="match-skills">
                    <span className="skill">Figma</span>
                    <span className="skill">Adobe XD</span>
                    <span className="skill">Prototyping</span>
                  </div>
                  <div className="match-details">
                    <span>📍 Mumbai</span>
                    <span>💰 ₹20,000/month</span>
                    <span>⏰ 3 months</span>
                  </div>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          </div>
        );
      case 'interview':
        return (
          <div className="interview-prep-content">
            <div className="content-header">
              <h2>🎤 Interview Preparation</h2>
              <p>Course-specific preparation materials and question banks</p>
            </div>
            <div className="prep-categories">
              <div className="category-card">
                <div className="category-icon">📊</div>
                <h3>Data Science</h3>
                <div className="category-content">
                  <div className="nptel-section">
                    <h4>NPTEL Lectures</h4>
                    <ul>
                      <li>Introduction to Data Science</li>
                      <li>Machine Learning Fundamentals</li>
                      <li>Statistical Analysis</li>
                    </ul>
                  </div>
                  <div className="questions-section">
                    <h4>Interview Questions (250+)</h4>
                    <p>Python, Statistics, ML Algorithms, Case Studies</p>
                  </div>
                  <button className="start-prep-btn">Start Preparation</button>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">💻</div>
                <h3>Full Stack Development</h3>
                <div className="category-content">
                  <div className="nptel-section">
                    <h4>NPTEL Lectures</h4>
                    <ul>
                      <li>Web Technologies</li>
                      <li>Database Management</li>
                      <li>Software Engineering</li>
                    </ul>
                  </div>
                  <div className="questions-section">
                    <h4>Interview Questions (300+)</h4>
                    <p>JavaScript, React, Node.js, System Design</p>
                  </div>
                  <button className="start-prep-btn">Start Preparation</button>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">🔒</div>
                <h3>Cybersecurity</h3>
                <div className="category-content">
                  <div className="nptel-section">
                    <h4>NPTEL Lectures</h4>
                    <ul>
                      <li>Network Security</li>
                      <li>Cryptography</li>
                      <li>Ethical Hacking</li>
                    </ul>
                  </div>
                  <div className="questions-section">
                    <h4>Interview Questions (200+)</h4>
                    <p>Security Protocols, Penetration Testing, Risk Assessment</p>
                  </div>
                  <button className="start-prep-btn">Start Preparation</button>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">📈</div>
                <h3>Marketing</h3>
                <div className="category-content">
                  <div className="nptel-section">
                    <h4>NPTEL Lectures</h4>
                    <ul>
                      <li>Digital Marketing</li>
                      <li>Consumer Behavior</li>
                      <li>Brand Management</li>
                    </ul>
                  </div>
                  <div className="questions-section">
                    <h4>Interview Questions (180+)</h4>
                    <p>Marketing Strategy, Analytics, Campaign Management</p>
                  </div>
                  <button className="start-prep-btn">Start Preparation</button>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">💼</div>
                <h3>Sales</h3>
                <div className="category-content">
                  <div className="nptel-section">
                    <h4>NPTEL Lectures</h4>
                    <ul>
                      <li>Sales Management</li>
                      <li>Customer Relationship</li>
                      <li>Negotiation Skills</li>
                    </ul>
                  </div>
                  <div className="questions-section">
                    <h4>Interview Questions (150+)</h4>
                    <p>Sales Process, CRM, Client Management</p>
                  </div>
                  <button className="start-prep-btn">Start Preparation</button>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">💰</div>
                <h3>Finance</h3>
                <div className="category-content">
                  <div className="nptel-section">
                    <h4>NPTEL Lectures</h4>
                    <ul>
                      <li>Financial Management</li>
                      <li>Investment Analysis</li>
                      <li>Risk Management</li>
                    </ul>
                  </div>
                  <div className="questions-section">
                    <h4>Interview Questions (220+)</h4>
                    <p>Financial Modeling, Valuation, Market Analysis</p>
                  </div>
                  <button className="start-prep-btn">Start Preparation</button>
                </div>
              </div>

              <div className="category-card">
                <div className="category-icon">🤖</div>
                <h3>AI/ML</h3>
                <div className="category-content">
                  <div className="nptel-section">
                    <h4>NPTEL Lectures</h4>
                    <ul>
                      <li>Artificial Intelligence</li>
                      <li>Deep Learning</li>
                      <li>Natural Language Processing</li>
                    </ul>
                  </div>
                  <div className="questions-section">
                    <h4>Interview Questions (280+)</h4>
                    <p>ML Algorithms, Neural Networks, AI Ethics</p>
                  </div>
                  <button className="start-prep-btn">Start Preparation</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'chatbot':
        return (
          <div className="chatbot-content">
            <div className="content-header">
              <h2>🤖 AI Career Assistant</h2>
              <p>Get instant answers to your career and job-related questions</p>
            </div>
            <div className="chatbot-container">
              <div className="chat-messages">
                <div className="message bot-message">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <p>Hello! I'm your AI Career Assistant. I can help you with:</p>
                    <ul>
                      <li>Job search strategies</li>
                      <li>Resume optimization</li>
                      <li>Interview preparation</li>
                      <li>Career guidance</li>
                      <li>Skill development recommendations</li>
                    </ul>
                    <p>What would you like to know?</p>
                  </div>
                </div>
              </div>
              <div className="chat-input-container">
                <input 
                  type="text" 
                  placeholder="Ask me anything about careers, jobs, or internships..."
                  className="chat-input"
                />
                <button className="send-btn">
                  <span>Send</span>
                  <span className="send-icon">📤</span>
                </button>
              </div>
              <div className="quick-questions">
                <h4>Quick Questions:</h4>
                <div className="question-chips">
                  <button className="question-chip">How to write a good resume?</button>
                  <button className="question-chip">Best skills for data science?</button>
                  <button className="question-chip">How to prepare for technical interviews?</button>
                  <button className="question-chip">What are trending job roles?</button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return renderTabContent();
    }
  };

  return (
    <div className="student-dashboard">
      <div className="dashboard-bg">
        <div className="bg-particle particle-1"></div>
        <div className="bg-particle particle-2"></div>
        <div className="bg-particle particle-3"></div>
      </div>
      
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <span className="brand-icon">🚀</span>
          <span className="brand-text">SmartMatch Student</span>
        </div>
        <div className="nav-links">
          <button 
            className={`nav-link ${activeMainTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveMainTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`nav-link ${activeMainTab === 'explore' ? 'active' : ''}`}
            onClick={() => setActiveMainTab('explore')}
          >
            Explore
          </button>
          <button 
            className={`nav-link ${activeMainTab === 'matches' ? 'active' : ''}`}
            onClick={() => setActiveMainTab('matches')}
          >
            Matches
          </button>
          <button 
            className={`nav-link ${activeMainTab === 'interview' ? 'active' : ''}`}
            onClick={() => setActiveMainTab('interview')}
          >
            Interview Prep
          </button>
          <button 
            className={`nav-link ${activeMainTab === 'chatbot' ? 'active' : ''}`}
            onClick={() => setActiveMainTab('chatbot')}
          >
            Chatbot
          </button>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </nav>

      <main className="dashboard-content">
        {renderMainContent()}
      </main>
    </div>
  );
};

export default StudentDashboard;