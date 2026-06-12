import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <div className='app-container'>
      
      <Navbar></Navbar>

      <div id="home">  
       <div className='hero'>
          <div className='description'>
            <div>
              <div className='description-container'>
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
                    <p>
                      I'm a Software Engineer at{' '}
                      <a href="https://exa.ai" target="_blank" rel="noopener noreferrer">Exa</a>, building AI search systems.
                      <br/><br/>
                      I graduated from Queen's University with a degree in Applied Mathematics & Computer Engineering.
                    </p>
                </div>
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
