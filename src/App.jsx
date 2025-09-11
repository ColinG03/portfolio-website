import './App.css';
import Navbar from './Navbar';
import Projects from './Projects';
import AboutMe from './AboutMe';

function App() {
  return (
    <>
      <div className='app-container'>
      
      <Navbar></Navbar>

      <div id="home">  
       <div className='hero'>
          <div className='description'>
            <div>
              <div className='description-header'>
                <h2>Hi, I'm Colin</h2>
                <div className='icon-container'>
                  <a className='icon-link' href="Colin_Gould_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src="curriculum-vitae.png" alt="Resume/CV" />
                  </a>
                  <a className='icon-link' href="mailto:20cvwg@queensu.ca">
                    <img className='icon' src="email.png" alt="email" target="_blank" rel="noopener noreferrer"/>
                  </a>
                  <a className='icon-link' href="https://github.com/ColinG03" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src="github-mark.png" alt="GitHub" />
                  </a>
                  <a className='icon-link' href="https://www.linkedin.com/in/colin-gould15/" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src="LI-In-Bug.png" alt="LinkedIn" />
                  </a>
                </div>
              </div>
              <div className='description-text'>
                  <p>I am a Mathematics and Computer Engineering student at Queen's University</p>
                  <br />
                  <p>I am currently helping to lead QMIND, the Queen's Machine Learning Club, as a Director of Design. I previously have worked as a Software Developer Intern at RBC Capital Markets, on the Global Equity and Derivatives team. </p>
              </div>
            </div>      
          </div>

          <a className='headshot-container' href="Colin_Gould_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
            <img className="headshot" src="Colin_Gould_headshot.jpeg" alt="Headshot" />
            <span className='tooltip tooltip-below' >Resume/CV</span>
          </a>
        </div>
      </div> 

    </div>
      <div className='attributions'>
        <a className='attribution' href="https://www.flaticon.com/free-icons/laboratory" title="laboratory icons">Laboratory icons created by Freepik - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/curriculum" title="curriculum icons">Curriculum icons created by Freepik - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon / </a>      
      </div>
    </>

  )
}

export default App;
