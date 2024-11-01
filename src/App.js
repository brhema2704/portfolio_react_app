import './App.css';

import React from 'react';
import './App.css';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      description: 'Personal Portfolio website',
      url: '#'
    },
    {
      id: 2,
      title: 'Calculator',
      description: 'Simple math calculator',
      url: '#'
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <nav>
        
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home">
        <h1>Welcome to my portfolio website!</h1>
        <p>Here you can find information about me and my projects.</p>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>Hi, my name is Hema BR and I'm a student at Anna University also I'm a junior FullStack developer.</p>
      </section>
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;

