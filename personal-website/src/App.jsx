import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import WelcomeMsg from './WelcomeMsg'
import Card from './Card'
import ProjectCard from './ProjectCard'

function App() {
  


  return (
    <div className='app-container'>
      
      <Navbar></Navbar>
      
      <WelcomeMsg></WelcomeMsg>
        
      <a className='headshot-container' href="/Colin_Gould_Resume_Current.pdf" target="_blank" rel="noopener noreferrer">
        <img className="headshot" src="/Colin_Gould_headshot.jpeg" alt="Headshot" />
        <span className='tooltip'>Resume/CV</span>
      </a>
      
      <div className='section-header'>
        <p className='message'>About Me</p>
      </div>
      <div className='card-container'>
      <Card 
          className="card-wide" 
          title={"Education & Involvement"} 
          imageUrl1={"/ba2b23cc0528cfebf7118a1ad0450afc.png"} 
          content1={"I study Applied Mathematics and Computer Engineering at Queen's University. This program has provided me with a rigorous mathematical background and a passion for its applications in machine learning and software engineering."}
          content2={"In my time at Queen's I have been a member of the Queen's Machine Learning Club (QMIND). With QMIND I have participated in machine learning research and development projects. I have also been a long-standing member of the Commerce and Engineering Environmental Conference (CEEC). CEEC is Canada's largest undergraduate sustainability conference. Most recently, I was the sponsorship director, leading a team of 4 coordinators."}
          imageUrl2={"/1688488232659.jpg"}
          imageUrl3={"/commerce_and_engineering_environmental_conference_ceec__logo.jpg"}
          >
          </Card>
      </div>
      <div className='section-header'>
        <p className='message header-message'>Projects</p>
        <p className='message sub-message'>Click to learn more!</p>
      </div>

      <div className='projects-container'>
        <a className='project-link' href="https://isaiahiruoha.github.io/arbitrage/#/" target="_blank" rel="noopener noreferrer">
          <ProjectCard title={"Cryptocurrency Arbitrage Pathfinding"} content1={""} imageUrl={"graph.png"} tooltipText={"Check out the website!"}></ProjectCard>
        </a>
        <a className='project-link' href="https://www.youtube.com/watch?v=9KXsTzVWBnI&ab_channel=ColinG" target="_blank" rel="noopener noreferrer">
          <ProjectCard title={"Bed Match Pro"} content1={""} imageUrl={"/hospital-bed.png"} tooltipText={"Check out the live demo!"} ></ProjectCard>
        </a>
      </div>
      <div className='section-header'>
        <p className='message'>Work Experience</p>
      </div>
      <Card title={"QTS Software Developer Intern - RBC Capital Markets"} content1={"In my time at Queen's I have been a member of the Queen's Machine Learning Club (QMIND). With QMIND I have participated in machine learning research and development projects. I have also been a long-standing member of the Commerce and Engineering Environmental Conference (CEEC). CEEC is Canada's largest undergraduate sustainability conference. Most recently, I was the sponsorship director, leading a team of 4 coordinators."}></Card>
      <Card title={"Outdoors"} content1={"I study Applied Mathematics and Computer Engineering at Queen's University."}></Card>
      
      <a href="https://www.flaticon.com/free-icons/graph" title="graph icons">Graph icons created by Mohamed Mbarki - Flaticon</a>
      <a href="https://www.flaticon.com/free-icons/hospital-bed" title="hospital bed icons">Hospital bed icons created by Freepik - Flaticon</a>
    </div>

  )
}

export default App;
