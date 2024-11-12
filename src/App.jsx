import './App.css';
import Navbar from './Navbar';
import Projects from './Projects';
import AboutMe from './AboutMe';

function App() {
  


  return (
    <>
        <div className='app-container'>
      
      <Navbar></Navbar>

      <div id="home"></div>   
      <div className='hero'>
        <div className='description'>
          <div>
            <div className='description-header'>
              <h2>Hi, I'm Colin</h2>
              <div className='icon-container'>
                <a className='icon-link' href="/Colin_Gould_Resume_Current.pdf" target="_blank" rel="noopener noreferrer">
                  <img className="icon" src="/portfolio-website/curriculum-vitae.png" alt="Resume/CV" />
                </a>
                <a className='icon-link' href="20cvwg@queensu.ca">
                  <img className='icon' src="/portfolio-website/email.png" alt="email" />
                </a>
                <a className='icon-link' href="https://github.com/ColinG03" target="_blank" rel="noopener noreferrer">
                  <img className="icon" src="/portfolio-website/github-mark.png" alt="GitHub" />
                </a>
                <a className='icon-link' href="https://www.linkedin.com/in/colin-gould15/" target="_blank" rel="noopener noreferrer">
                  <img className="icon" src="/portfolio-website/LI-In-Bug.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <br />
            <p>I am a Mathematics and Computer Engineering student at Queen's University</p>
            <br />
            <p>Currently, I'm working as a Software Developer Intern at RBC Capital Markets, on the Global Equity and Derivatives team. I am also doing machine learning research with QMIND, the Queen's Machine Learning Club. </p>
          </div>      
        </div>

        <a className='headshot-container' href="/portfolio-website/Colin_Gould_Resume_Current.pdf" target="_blank" rel="noopener noreferrer">
          <img className="headshot" src="/portfolio-website/Colin_Gould_headshot.jpeg" alt="Headshot" />
          <span className='tooltip tooltip-below' >Resume/CV</span>
        </a>
      </div>

      <div id="about-me"></div>
        <div className='section-header'>
          <p className='message header-message'>About Me</p>
        </div>
        <AboutMe />
      

      <div id="projects"></div>
        <Projects />
 

    </div>
      <div className='attributions'>
        <a className='attribution' href="https://www.flaticon.com/free-icons/graph" title="graph icons">Graph icons created by Mohamed Mbarki - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/hospital-bed" title="hospital bed icons">Hospital bed icons created by Freepik - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/laboratory" title="laboratory icons">Laboratory icons created by Freepik - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/lunch" title="lunch icons">Lunch icons created by Freepik - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/curriculum" title="curriculum icons">Curriculum icons created by Freepik - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon / </a>      
      </div>
    </>

  )
}

export default App;
