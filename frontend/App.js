import React from 'react';
import About from './About';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import FormPage from './FormPage';
import ViewSubmissions from './ViewSubmissions';

function App() {
  return (
    <Router>
      
      <div>
        <nav style={{ padding: '1rem', background: '#ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}> Home</Link>
        <Link to="/about" style={{marginRight:'1rem'}}>About</Link>
        <Link to="/submissions">View Submissions</Link>
    </nav>
        <h1 style={{textAlign:'center'}}>WELCOME TO E-COMMERCE WEBSITE </h1>
      </div>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/submissions" element={<ViewSubmissions />} />
      </Routes>
    </Router>
  );
}

export default App;
