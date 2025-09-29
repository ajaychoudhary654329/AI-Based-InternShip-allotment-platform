// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LandingPage.css';
// import myimage from '../assets/corporate-affairs-logo.png';
// import myimage2 from "../assets/viksit-logo-2.jpeg";
// // import modijiIcon2 from '../assets/modiji-icon2.jpg';
// // FAQ Section
// import { useState } from 'react';

// const faqs = [
//   {
//     question: 'What is the PM Internship Scheme?',
//     answer: 'It is a government initiative to provide students with real-life industry experience through internships in top companies.'
//   },
//   {
//     question: 'Who is eligible for the scheme?',
//     answer: 'Students with ITI, Diploma, or Degree qualifications and aged between 18 to 24 years are eligible.'
//   },
//   {
//     question: 'What benefits do interns receive?',
//     answer: 'Interns receive a monthly stipend, insurance coverage, and valuable work experience.'
//   }
// ];

// function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(null);
//   return (
//     <section className="faq-section" style={{ maxWidth: '700px', margin: '3rem auto', background: 'white', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2rem' }}>
//       <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
//       {faqs.map((faq, idx) => (
//         <div key={idx} style={{ marginBottom: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
//           <button
//             onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//             style={{ display: 'flex', alignItems: 'center', width: '100%', background: 'none', border: 'none', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', color: '#06038D', justifyContent: 'space-between' }}
//           >
//             <span>{faq.question}</span>
//             <span style={{ fontSize: '1.5rem', transition: 'transform 0.2s', transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
//           </button>
//           {openIndex === idx && (
//             <div style={{ marginTop: '0.8rem', color: '#333', fontSize: '1rem', fontWeight: '400', transition: 'all 0.3s' }}>
//               {faq.answer}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// }

// // Add FAQSection to the end of LandingPage
// const OriginalLandingPage = LandingPage;
// const EnhancedLandingPage = (props) => (
//   <>
//     <OriginalLandingPage {...props} />
//     <FAQSection />
//   </>
// );

// // export default EnhancedLandingPage;
// const LandingPage = ({ onGetStarted }) => {
//   const navigate = useNavigate();
//   return (
//     <div className="landing-page">
//       {/* Animated Background Elements */}

//       {/* <img src={modijiIcon2} alt="Modiji" className="modiji-left" /> */}

//       <div className="animated-bg">
//         <div className="floating-shape shape-1"></div>
//         <div className="floating-shape shape-2"></div>
//         <div className="floating-shape shape-3"></div>
//         <div className="floating-shape shape-4"></div>
//         <div className="floating-shape shape-5"></div>
//       </div>

//       <div className="flag-bg"></div>

//       {/* Navigation Header */}
//       <nav className="nav-header">

//         <div className="nav-container">

//           <div className="logo">
//             {/* <span className="logo-icon"></span> */}
//             <img src={myimage} alt="Logo" className='corporate-logo' />

//           </div>

//           <div className='PM-internship-scheme'>
//             <h1> <b> PM  INTERNSHIP  SCHEME </b> </h1>
//           </div>
//           {/* <div className="nav-links">
//             <a href="#" className="nav-link active">Scheme</a>
//             <a href="#" className="nav-link">Student</a>
//             <a href="#" className="nav-link">Matches</a>
//             <a href="#" className="nav-link">Explore</a>
//             <a href="#" className="nav-link">Recruiter</a>
//             <a href="#" className="nav-link">Interview Prep</a>
//             <a href="#" className="nav-link">Chatbot</a>
//           </div> */}

//           <div className='viksit-logo'>
//             <img src={myimage2} alt="Logo" className='viksit-bharat' />
//           </div>

//         </div>

//       </nav>



//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <div className="hero-animation">
//             <div className="pulse-ring"></div>
//             <div className="pulse-ring delay-1"></div>
//             <div className="pulse-ring delay-2"></div>
//           </div>
//           <h1 className="hero-title">
//             Yuva Setu <span className="rocket">🚀</span>
//           </h1>
//           <p className="hero-subtitle">
//             AI-Powered platform connecting students with perfect Internship Opportunities
//           </p>
//           <div className="hero-buttons">
//             <button className="btn-get-started" onClick={onGetStarted}>
//               <span className="btn-text">Get Started</span>
//               <span className="btn-icon">→</span>
//             </button>

//             <button className="btn-get-started" onClick={() => navigate('/learn-more')}>
//               <span className="btn-text">Learn More 📚</span>
//             </button>

//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features-section">
//         <div className="features-container">
//           <div className="feature-card">
//             <div className="feature-card-inner">
//               <div className="feature-icon">💼</div>
//               <h3>Background</h3>
//               <p> ▪️The PM Internship Scheme aims to provide <b> valuable industry experience </b>
//                 to reduce the gap between the academic curriculum and practical work environment.
//               </p>
//               <p>
//                 ▪️  It Aims to provide <b>12 months real-life experience </b> in India's Top Companies.
//               </p>
//             </div>
//           </div>
//           <div className="feature-card">
//             <div className="feature-card-inner">
//               <div className="feature-icon">🎓</div>
//               <h3><em> Eligibility </em></h3>
//               <p> <b> ▪️ ITI: </b> Matriculation + ITI in relevant trade </p>
//               <p> <b> ▪️ Diploma:</b> Intermediate + AICTE-recognized diploma </p>
//               <p> <b> ▪️ Degree:</b> Bachelor’s degree from UGC/AICTE-recognized university </p>
//               <p> <b> ▪️ Age:</b> 18 to 24 years </p>
//             </div>
//           </div>
//           <div className="feature-card">
//             <div className="feature-card-inner">
//               <div className="feature-icon">🏛️</div>
//               <h3> <em> Insurance coverage & Benefits </em> </h3>
//               <p> </p>
//               <h4><b><u>Insurance coverage</u></b></h4>
//               <p> <b>▪️</b> Jyoti Bima Scheme , and  </p>
//               <p> <b> ▪️</b> Pradhan Mantri Suraksha Bima Yojana </p>
//               <p> </p>
//               <h4> <b><u> Benefits </u></b> </h4>
//               <p> <b> ▪️ ₹5,000</b> monthly stipend</p>
//               <p><b> ▪️</b> One-time payment of <b>₹6,000 </b> </p>
//               <p><b> ▪️</b> Gain real-life <b> work experience </b></p>

//             </div>
//           </div>
//           <div className="feature-card">
//             <div className="feature-card-inner">
//               <div className="feature-icon">📅</div>
//               <h3>Process Timeline</h3>
//               <p>Application: Jan-Feb, Selection: Mar-Apr, Internship: May-Jul</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
// import myimage from '../assets/corporate-affairs-logo.png';
import myimage2 from "../assets/viksit-logo-2.jpeg";
import myimage1 from "../assets/Ministry_of_Corporate_Affairs_India.svg.png";
import myimage3 from "../assets/Bisag-N2.png";
import myimage4 from "../assets/Yuva-setu.jpg";
// import modijiIcon2 from '../assets/modiji-icon2.jpg';

// FAQ data
const faqs = [
  {
    question: 'What is the PM Internship Scheme?',
    answer: 'It is a government initiative to provide students with real-life industry experience through internships in top companies.'
  },
  {
    question: 'Who is eligible for the scheme?',
    answer: 'Students with ITI, Diploma, or Degree qualifications and aged between 18 to 24 years are eligible.'
  },
  {
    question: 'What benefits do interns receive?',
    answer: 'Interns receive a monthly stipend, insurance coverage, and valuable work experience.'
  }
];

// FAQ component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="faq-section"
      style={{
        maxWidth: '700px',
        margin: '3rem auto',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 16px 80px rgba(6,3,141,0.25)',
        padding: '2rem'
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}
      >
        Frequently Asked Questions(FAQs)
      </h2>

      {faqs.map((faq, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: '1.2rem',
            borderBottom: '1px solid #eee',
            // className: "faq-item border border-gray-300 py-4 cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow",
            paddingBottom: '1rem',

          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              background: 'none',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              color: '#06038D',
              justifyContent: 'space-between'
            }}
          >
            <span>{faq.question}</span>
            <span
              style={{
                fontSize: '1.5rem',
                transition: 'transform 0.2s',
                transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)'
              }}
            >
              +
            </span>
          </button>

          {openIndex === idx && (
            <div
              style={{
                marginTop: '0.8rem',
                color: '#333',
                fontSize: '1rem',
                fontWeight: '400',
                transition: 'all 0.3s'
              }}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

// Footer Bar Component 

function FooterBar() {
  return (
    <footer
      style={{
        background: '#06338D',
        color: 'white',
        padding: '2rem 1rem',
        marginTop: '2rem',
        fontFamily: 'inherit',
      }}
    >
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Left: Logos and Social Media */}
        <div style={{ minWidth: 220 }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <img src={myimage1} alt="MCA" style={{ height: 52, background: 'white', borderRadius: 8 }} />
            <img src={myimage3} alt="BISAG-N" style={{ height: 52, width: 100, background: 'white', borderRadius: 8 }} />
          </div>
          <div style={{ marginBottom: '0.5rem', fontWeight: 500 }}>Social Media</div>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#FF0000" />
                <rect x="11" y="13" width="18" height="14" rx="4" fill="white" />
                <polygon points="18,18 25,20 18,22" fill="#FF0000" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <defs>
                  <radialGradient id="insta-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#FCAF45" />
                    <stop offset="50%" stopColor="#E1306C" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </radialGradient>
                </defs>
                <circle cx="20" cy="20" r="20" fill="url(#insta-gradient)" />
                <rect x="12" y="12" width="16" height="16" rx="6" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="20" cy="20" r="5" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="27" cy="15" r="1.5" fill="white" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#0A66C2" />
                <text x="13" y="30" fontSize="20" fill="white" fontFamily="Arial" fontWeight="bold">in</text>
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="black" />
                <text x="13" y="28" fontSize="22" fill="white" fontFamily="Arial" fontWeight="bold">X</text>
              </svg>
            </a>
          </div>
        </div>
        {/* Middle: Get to Know */}
        <div style={{ minWidth: 180 }}>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Get to Know</div>
          <div>Partner Companies</div>
          <div>Guidelines</div>
          <div>Manuals</div>
          <div>Videos</div>
          <div>Privacy Policy</div>
        </div>
        {/* Right: Contact Us */}
        <div style={{ minWidth: 220 }}>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Contact Us</div>
          <div>📍 A Wing, 5th Floor, Shastri Bhawan, Dr Rajendra Prasad Rd, New Delhi-110001</div>
          <br />
          <div>✉️ pminternship[at]mca.gov.in</div>
          <br />
          <div>📞 1800 11 6090</div>
        </div>
        {/* Visitor Counter and Copyright */}
        <div style={{ minWidth: 220, textAlign: 'right' }}>
          <div style={{ fontSize: 12, marginBottom: 8 }}>Build Version: 1758558855355</div>
          <div style={{
            background: 'orange',
            color: '#222',
            borderRadius: 20,
            padding: '0.5rem 1.2rem',
            fontWeight: 700,
            fontSize: 22,
            display: 'inline-block',
            marginBottom: 8,
          }}>
            0 <span style={{ fontSize: 14, fontWeight: 400 }}>Total Visitors</span>
          </div>
          <div style={{ fontSize: 14, marginBottom: 4 }}>
            This site is owned by <b>Ministry of Corporate Affairs.</b>
          </div>
          <div style={{ fontSize: 13 }}>
            © 2024 <b>PM-INTERNSHIP</b>, All Rights Reserved.<br />
            Technical collaboration with <b>BISAG-N</b>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Landing Page component
const LandingPage = ({ onGetStarted }) => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>

      <div className="flag-bg"></div>

      {/* Navigation Header */}
      <nav className="nav-header">
        <div className="nav-container">
          <div className="logo">
            <img src={myimage1} alt="Logo" className="corporate-logo" />
          </div>

          <div className="PM-internship-scheme">
            <h1>
              <b> PM INTERNSHIP SCHEME </b>
            </h1>
          </div>

          <div className="viksit-logo">
            <img src={myimage2} alt="Logo" className="viksit-bharat" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-animation">
            <div className="pulse-ring"></div>
            <div className="pulse-ring delay-1"></div>
            <div className="pulse-ring delay-2"></div>
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'B612', sans-serif" }}>
            Yuva Setu <span className="rocket"> 🚀</span>
          </h1>
          <p className="hero-subtitle">
            AI-Powered platform alloting best Internships to Students in India
          </p>
          <div className="hero-buttons">
            <button className="btn-get-started" onClick={onGetStarted}>
              <span className="btn-text">Get Started</span>
              <span className="btn-icon">→</span>
            </button>

            <button
              className="btn-get-started"
              onClick={() => navigate('/learn-more')}
            >
              <span className="btn-text">Learn More 📚</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-icon">💼</div>
              <h3>Background</h3>
              <p>
                ▪️The PM Internship Scheme aims to provide{' '}
                <b> valuable industry experience </b> to reduce the gap between
                the academic curriculum and practical work environment.
              </p>
              <p>
                ▪️ It aims to provide <b>12 months real-life experience </b> in
                India's Top Companies.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-icon">🎓</div>
              <h3>
                <em> Eligibility </em>
              </h3>
              <p>
                <b> ▪️ ITI: </b> Matriculation + ITI in relevant trade
              </p>
              <p>
                <b> ▪️ Diploma:</b> Intermediate + AICTE-recognized diploma
              </p>
              <p>
                <b> ▪️ Degree:</b> Bachelor’s degree from UGC/AICTE-recognized
                university
              </p>
              <p>
                <b> ▪️ Age:</b> 18 to 24 years
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-icon">🏛️</div>
              <h3>
                <em> Insurance coverage & Benefits </em>
              </h3>
              <h4>
                <b>
                  <u>Insurance coverage</u>
                </b>
              </h4>
              <p>
                <b>▪️</b> Jyoti Bima Scheme
              </p>
              <p>
                <b> ▪️</b> Pradhan Mantri Suraksha Bima Yojana
              </p>

              <h4>
                <b>
                  <u> Benefits </u>
                </b>
              </h4>
              <p>
                <b> ▪️ ₹5,000</b> monthly stipend
              </p>
              <p>
                <b> ▪️</b> One-time payment of <b>₹6,000 </b>
              </p>
              <p>
                <b> ▪️</b> Gain real-life <b> work experience </b>
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-icon">📅</div>
              <h3>Process Timeline</h3>
              <p>
                <span style={{ display: 'block', marginBottom: '0.5rem' }}>▪️<b> Application:</b> Jan-Feb</span>
                <span style={{ display: 'block', marginBottom: '0.5rem' }}>▪️<b> Selection:</b> Mar-Apr</span>
                <span style={{ display: 'block' }}>▪️<b> Internship:</b> May-Jul</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Enhanced component that adds FAQ section after LandingPage
const EnhancedLandingPage = (props) => (
  <>
    <LandingPage {...props} />
    <FAQSection />
    <FooterBar />
  </>
);

export default EnhancedLandingPage;