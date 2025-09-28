import React, { useState } from 'react';
import './RecruiterDashboard.css';

const RecruiterDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="overview-content">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3>1,247</h3>
                  <p>Total Candidates</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📋</div>
                <div className="stat-info">
                  <h3>23</h3>
                  <p>Active Postings</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <h3>156</h3>
                  <p>Successful Hires</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <h3>4.8</h3>
                  <p>Company Rating</p>
                </div>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">📝</div>
                  <div className="activity-details">
                    <p><strong>New Application</strong> - Full Stack Developer</p>
                    <span>2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">👤</div>
                  <div className="activity-details">
                    <p><strong>Profile Viewed</strong> - Sarah Johnson</p>
                    <span>4 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">🎯</div>
                  <div className="activity-details">
                    <p><strong>New Match</strong> - Data Science Intern</p>
                    <span>6 hours ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="top-candidates">
              <h3>Top Matched Candidates</h3>
              <div className="candidates-grid">
                <div className="candidate-card">
                  <div className="candidate-avatar">👨‍💻</div>
                  <div className="candidate-info">
                    <h4>Alex Kumar</h4>
                    <p>Full Stack Developer</p>
                    <div className="candidate-skills">
                      <span>React</span>
                      <span>Node.js</span>
                      <span>Python</span>
                    </div>
                    <div className="match-score">95% Match</div>
                  </div>
                  <button className="view-profile-btn">View Profile</button>
                </div>

                <div className="candidate-card">
                  <div className="candidate-avatar">👩‍💻</div>
                  <div className="candidate-info">
                    <h4>Priya Sharma</h4>
                    <p>Data Scientist</p>
                    <div className="candidate-skills">
                      <span>Python</span>
                      <span>ML</span>
                      <span>SQL</span>
                    </div>
                    <div className="match-score">92% Match</div>
                  </div>
                  <button className="view-profile-btn">View Profile</button>
                </div>

                <div className="candidate-card">
                  <div className="candidate-avatar">👨‍🎨</div>
                  <div className="candidate-info">
                    <h4>Rahul Patel</h4>
                    <p>UI/UX Designer</p>
                    <div className="candidate-skills">
                      <span>Figma</span>
                      <span>Adobe XD</span>
                      <span>Prototyping</span>
                    </div>
                    <div className="match-score">88% Match</div>
                  </div>
                  <button className="view-profile-btn">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'postings':
        return (
          <div className="postings-content">
            <div className="content-header">
              <h2>📋 Internship Postings</h2>
              <button className="create-posting-btn">+ Create New Posting</button>
            </div>
            <div className="postings-list">
              <div className="posting-card active">
                <div className="posting-header">
                  <h3>Full Stack Developer Intern</h3>
                  <span className="status-badge active">Active</span>
                </div>
                <div className="posting-details">
                  <p>📍 Remote • 💰 ₹25,000/month • ⏰ 6 months</p>
                  <p>Applications: 45 • Matches: 12</p>
                </div>
                <div className="posting-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="view-btn">View Applications</button>
                </div>
              </div>

              <div className="posting-card">
                <div className="posting-header">
                  <h3>Data Science Intern</h3>
                  <span className="status-badge active">Active</span>
                </div>
                <div className="posting-details">
                  <p>📍 Bangalore • 💰 ₹30,000/month • ⏰ 4 months</p>
                  <p>Applications: 67 • Matches: 18</p>
                </div>
                <div className="posting-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="view-btn">View Applications</button>
                </div>
              </div>

              <div className="posting-card">
                <div className="posting-header">
                  <h3>UI/UX Design Intern</h3>
                  <span className="status-badge draft">Draft</span>
                </div>
                <div className="posting-details">
                  <p>📍 Mumbai • 💰 ₹20,000/month • ⏰ 3 months</p>
                  <p>Applications: 0 • Matches: 0</p>
                </div>
                <div className="posting-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="publish-btn">Publish</button>
                </div>
              </div>
            </div>
          </div>
        );
      // case 'candidates':

      case 'candidates':
        return (
          <div className="candidates-content">
            <div className="content-header">
              <h2>👥 Candidate Pool</h2>
              <div className="search-filters">
                <input
                  type="text"
                  placeholder="Search candidates..."
                  className="search-input"
                />
                <select className="filter-select">
                  <option>All Skills</option>
                  <option>Full Stack</option>
                  <option>Data Science</option>
                  <option>UI/UX</option>
                </select>
              </div>
            </div>

            <div className="candidates-table">
              <div className="table-header">
                <div>Candidate</div>
                <div>Skills</div>
                <div>Experience</div>
                <div>Match Score</div>
                <div>Actions</div>
              </div>

              {/* Row 1 */}
              <div className="table-row">
                <div className="candidate-cell">
                  <div className="candidate-avatar">👨‍💻</div>
                  <div>
                    <h4>Alex Kumar</h4>
                    <p>alex.kumar@email.com</p>
                  </div>
                </div>
                <div className="skills-cell">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                </div>
                <div className="experience-cell">2 years</div>
                <div className="match-cell">95%</div>
                <div className="actions-cell">
                  <button className="action-btn">View</button>
                  <button className="action-btn primary">Contact</button>
                </div>
              </div>

              {/* Row 2 */}
              <div className="table-row">
                <div className="candidate-cell">
                  <div className="candidate-avatar">👩‍💻</div>
                  <div>
                    <h4>Priya Sharma</h4>
                    <p>priya.sharma@email.com</p>
                  </div>
                </div>
                <div className="skills-cell">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">ML</span>
                  <span className="skill-tag">SQL</span>
                </div>
                <div className="experience-cell">1.5 years</div>
                <div className="match-cell">92%</div>
                <div className="actions-cell">
                  <button className="action-btn">View</button>
                  <button className="action-btn primary">Contact</button>
                </div>
              </div>
            </div>

          </div>
        );

      //   return (
      //     <div className="candidates-content">
      //       <div className="content-header">
      //         <h2>👥 Candidate Pool</h2>
      //         <div className="search-filters">
      //           <input type="text" placeholder="Search candidates..." className="search-input" />
      //           <select className="filter-select">
      //             <option>All Skills</option>
      //             <option>Full Stack</option>
      //             <option>Data Science</option>
      //             <option>UI/UX</option>
      //           </select>
      //         </div>
      //       </div>
      //       <div className="candidates-table">
      //         <div className="table-header">
      //           <span>Candidate</span>
      //           <span>Skills</span>
      //           <span>Experience</span>
      //           <span>Match Score</span>
      //           <span>Actions</span>
      //         </div>
      //         {/* Candidate 1 */}
      //         <div className="table-row">
      //           {/* Candidate */}
      //           <div className="candidate-cell" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      //             <div className="candidate-avatar">👨‍💻</div>
      //             <div>
      //               <h4>Alex Kumar</h4>
      //               <p>alex.kumar@email.com</p>
      //             </div>
      //           </div>
      //           {/* Skills */}
      //           <div className="skills-cell" style={{ display: 'flex', gap: '0.5rem' }}>
      //             <span className="skill-tag">React</span>
      //             <span className="skill-tag">Node.js</span>
      //             <span className="skill-tag">Python</span>
      //           </div>
      //           {/* Experience */}
      //           <div style={{ display: 'flex', alignItems: 'center' }}>2 years</div>
      //           {/* Match Score */}
      //           <div className="match-cell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      //             <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>95%</span>
      //           </div>
      //           {/* Actions */}
      //           <div className="actions-cell" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
      //             <button className="action-btn">View</button>
      //             <button className="action-btn primary">Contact</button>
      //           </div>
      //         </div>
      //         <div className="table-row">
      //           {/* Candidate */}
      //           <div className="candidate-cell" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      //             <div className="candidate-avatar">👩‍💻</div>
      //             <div>
      //               <h4>Priya Sharma</h4>
      //               <p>priya.sharma@email.com</p>
      //             </div>
      //           </div>
      //           {/* Skills */}
      //           <div className="skills-cell" style={{ display: 'flex', gap: '0.5rem' }}>
      //             <span className="skill-tag">Python</span>
      //             <span className="skill-tag">ML</span>
      //             <span className="skill-tag">SQL</span>
      //           </div>
      //           {/* Experience */}
      //           <div style={{ display: 'flex', alignItems: 'center' }}>1.5 years</div>
      //           {/* Match Score */}
      //           <div className="match-cell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      //             <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>92%</span>
      //           </div>
      //           {/* Actions */}
      //           <div className="actions-cell" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
      //             <button className="action-btn">View</button>
      //             <button className="action-btn primary">Contact</button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   );
      case 'analytics':
        return (
          <div className="analytics-content">
            <div className="content-header">
              <h2>📊 Analytics & Insights</h2>
            </div>
            <div className="analytics-grid">
              <div className="chart-card">
                <h3>Application Trends</h3>
                <div className="chart-placeholder">
                  <div className="trend-line"></div>
                  <p>📈 Applications increased by 23% this month</p>
                </div>
              </div>
              <div className="chart-card">
                <h3>Top Skills in Demand</h3>
                <div className="skills-chart">
                  <div className="skill-bar">
                    <span>React</span>
                    <div className="bar"><div className="fill" style={{ width: '85%' }}></div></div>
                  </div>
                  <div className="skill-bar">
                    <span>Python</span>
                    <div className="bar"><div className="fill" style={{ width: '78%' }}></div></div>
                  </div>
                  <div className="skill-bar">
                    <span>Node.js</span>
                    <div className="bar"><div className="fill" style={{ width: '65%' }}></div></div>
                  </div>
                </div>
              </div>
              <div className="chart-card">
                <h3>Hiring Success Rate</h3>
                <div className="success-metrics">
                  <div className="metric">
                    <span className="metric-value">78%</span>
                    <span className="metric-label">Interview Success</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">65%</span>
                    <span className="metric-label">Offer Acceptance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="recruiter-dashboard">
      <div className="dashboard-bg">
        <div className="bg-wave wave-1"></div>
        <div className="bg-wave wave-2"></div>
        <div className="bg-wave wave-3"></div>
      </div>

      <nav className="dashboard-nav">
        <div className="nav-brand">
          <span className="brand-icon">💼</span>
          <span className="brand-text">SmartMatch Recruiter</span>
        </div>
        <div className="nav-links">
          <button
            className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`nav-link ${activeTab === 'postings' ? 'active' : ''}`}
            onClick={() => setActiveTab('postings')}
          >
            Internship Postings
          </button>
          <button
            className={`nav-link ${activeTab === 'candidates' ? 'active' : ''}`}
            onClick={() => setActiveTab('candidates')}
          >
            Candidates
          </button>
          <button
            className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </button>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </nav>

      <main className="dashboard-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default RecruiterDashboard;