import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import WelcomeMsg from './WelcomeMsg'
import Card from './Card'
import ProjectCard from './ProjectCard'
import Carousel from './Carousel'

function App() {
  


  return (
    <>
        <div className='app-container'>
      
      <Navbar></Navbar>
      
      {/* <WelcomeMsg></WelcomeMsg> */}
        
      <div className='hero'>
        <div className='description'>
          <div>
            <div className='description-header'>
              <h2>Hi, I'm Colin</h2>
              <div className='icon-container'>
                <a className='icon-link' href="/Colin_Gould_Resume_Current.pdf" target="_blank" rel="noopener noreferrer">
                  <img className="icon" src="/curriculum-vitae.png" alt="Resume/CV" />
                </a>
                <a className='icon-link' href="20cvwg@queensu.ca">
                  <img className='icon' src="/email.png" alt="email" />
                </a>
                <a className='icon-link' href="https://github.com/ColinG03" target="_blank" rel="noopener noreferrer">
                  <img className="icon" src="/github-mark.png" alt="GitHub" />
                </a>
                <a className='icon-link' href="https://www.linkedin.com/in/colin-gould15/" target="_blank" rel="noopener noreferrer">
                  <img className="icon" src="/LI-In-Bug.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <br />
            <p>I am a Mathematics and Computer Engineering student at Queen's University</p>
            <br />
            <p>Currently, I'm working as a Software Developer Intern at RBC Capital Markets, on the Global Equity and Derivatives team. I am also doing machine learning research with QMIND, the Queen's Machine Learning Club. </p>
          </div>      
        </div>

        <a className='headshot-container' href="/Colin_Gould_Resume_Current.pdf" target="_blank" rel="noopener noreferrer">
          <img className="headshot" src="/Colin_Gould_headshot.jpeg" alt="Headshot" />
          <span className='tooltip tooltip-below' >Resume/CV</span>
        </a>
      </div>

      {/* <div className='section-header'>
        <p className='message'>Work Experience</p>
      </div>
      <Card title={"QTS Software Developer Intern - RBC Capital Markets"} content1={"In my time at Queen's I have been a member of the Queen's Machine Learning Club (QMIND). With QMIND I have participated in machine learning research and development projects. I have also been a long-standing member of the Commerce and Engineering Environmental Conference (CEEC). CEEC is Canada's largest undergraduate sustainability conference. Most recently, I was the sponsorship director, leading a team of 4 coordinators."}></Card>
      <Card title={"Canoe Guide - Camp Wanapitei"} content1={"I study Applied Mathematics and Computer Engineering at Queen's University."}></Card>
       */}
       {/* <div className='contact'>
        <h2>Let's Get In Touch!</h2>


       </div> */}
    </div>
      <div className='attributions'>
        <a className='attribution' href="https://www.flaticon.com/free-icons/graph" title="graph icons">Graph icons created by Mohamed Mbarki - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/hospital-bed" title="hospital bed icons">Hospital bed icons created by Freepik - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/laboratory" title="laboratory icons">Laboratory icons created by Freepik - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/lunch" title="lunch icons">Lunch icons created by Freepik - Flaticon / </a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/curriculum" title="curriculum icons">Curriculum icons created by Freepik - Flaticon</a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon</a>
        <a className='attribution' href="https://www.flaticon.com/free-icons/cg" title="cg icons">Cg icons created by shohanur.rahman13 - Flaticon</a>
      </div>
    </>

  )
}

export default App;
