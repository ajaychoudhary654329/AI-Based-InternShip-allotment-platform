// // import React from 'react';


// // export default App;
// import React, { useState } from 'react';
// import './App.css';
// import LandingPage from './components/LandingPage';
// import UserTypeSelection from './components/UserTypeSelection';
// import AuthPage from './components/AuthPage';
// import StudentDashboard from './components/StudentDashboard';
// import RecruiterDashboard from './components/RecruiterDashboard';

// function App() {
//   const [currentPage, setCurrentPage] = useState('landing');
//   const [userType, setUserType] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleGetStarted = () => {
//     setCurrentPage('userTypeSelection');
//   };

//   const handleUserTypeSelect = (type) => {
//     setUserType(type);
//     setCurrentPage('auth');
//   };

//   const handleBackToLanding = () => {
//     setCurrentPage('landing');
//     setUserType(null);
//   };

//   const handleBackToUserSelection = () => {
//     setCurrentPage('userTypeSelection');
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     if (userType === 'student') {
//       setCurrentPage('studentDashboard');
//     } else {
//       setCurrentPage('recruiterDashboard');
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setCurrentPage('landing');
//     setUserType(null);
//   };

//   return (
//     <div className="app">
//       {currentPage === 'landing' && (
//         <LandingPage onGetStarted={handleGetStarted} />
//       )}
//       {currentPage === 'userTypeSelection' && (
//         <UserTypeSelection
//           onUserTypeSelect={handleUserTypeSelect}
//           onBack={handleBackToLanding}
//         />
//       )}
//       {currentPage === 'auth' && (
//         <AuthPage
//           userType={userType}
//           onBack={handleBackToUserSelection}
//           onLogin={handleLogin}
//         />
//       )}
//       {currentPage === 'studentDashboard' && (
//         <StudentDashboard onLogout={handleLogout} />
//       )}
//       {currentPage === 'recruiterDashboard' && (
//         <RecruiterDashboard onLogout={handleLogout} />
//       )}
//     </div>
//   );
// }

// export default App;


// --------------
// new code 

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import UserTypeSelection from './components/UserTypeSelection';
import AuthPage from './components/AuthPage';
import StudentDashboard from './components/StudentDashboard';
import RecruiterDashboard from './components/RecruiterDashboard';
import LearnMore from './components/LearnMore';

function App() {
  const [userType, setUserType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Use useNavigate inside a wrapper component
  function AppRoutes() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
      navigate('/user-type-selection');
    };

    const handleUserTypeSelect = (type) => {
      setUserType(type);
      navigate('/auth');
    };

    const handleBackToLanding = () => {
      setUserType(null);
      navigate('/');
    };

    const handleBackToUserSelection = () => {
      navigate('/user-type-selection');
    };

    const handleLogin = () => {
      setIsLoggedIn(true);
      if (userType === 'student') {
        navigate('/student-dashboard');
      } else {
        navigate('/recruiter-dashboard');
      }
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
      setUserType(null);
      navigate('/');
    };

    return (
      <Routes>
        <Route path="/" element={<LandingPage onGetStarted={handleGetStarted} />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/user-type-selection" element={
          <UserTypeSelection
            onUserTypeSelect={handleUserTypeSelect}
            onBack={handleBackToLanding}
          />
        } />
        <Route path="/auth" element={
          <AuthPage
            userType={userType}
            onBack={handleBackToUserSelection}
            onLogin={handleLogin}
          />
        } />
        <Route path="/student-dashboard" element={<StudentDashboard onLogout={handleLogout} />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard onLogout={handleLogout} />} />
      </Routes>
    );
  }

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;