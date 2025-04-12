import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <h1>Thisara Rupasinghe</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to Me</h2>
        <p>This is a modern, clean, and responsive design.</p>
        <button>Get Started</button>
      </section>

      <section className="features" id="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Feature 1</h3>
            <p>Discover amazing things with Feature 1.</p>
          </div>
          <div className="card">
            <h3>Feature 2</h3>
            <p>Explore the best of Feature 2.</p>
          </div>
          <div className="card">
            <h3>Feature 3</h3>
            <p>Enjoy great functionality with Feature 3.</p>
          </div>
        </div>
      </section>

      <footer className="App-footer">
        <p>&copy; 2025 My Attractive App | <a href="#contact">Contact Us</a></p>
      </footer>
    </div>
  );
}

export default App;
