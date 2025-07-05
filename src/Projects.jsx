import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";
import Navbar from "./Navbar.jsx";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Compile",
      description: "An AI news and media aggregator that curates articles based on user preferences and interests.",
      image: "Compile_Demo.png",
      skills: ["Next.js", "Python", "PostgreSQL", "Pinecone", "DSPy", "Crawl4AI"],
      link: "https://compile-ui.vercel.app/home",
      imageFit: "cover",
    },
    {
      id: 2,
      title: "Chameleon",
      description: "an AI workflow application for content creators that repurposes long-form content into short-form, platform-optimized posts.",
      image: "chameleon.png",
      skills: ["Python", "Machine Learning", "TensorFlow", "React"],
      link: "https://devpost.com/software/chameleon-qpz6ru",
      imageFit: "cover",
    },
    {
      id: 3,
      title: "Cryptocurrency Arbitrage Pathfinding",
      description: "Used RL techniques to train a Graph Conv. Neural Net to find arbitrage opportunities in the crypto market.",
      image: "crypto_demo.png",
      skills: ["React", "Python", "PyTorch", "Flask", "GCNs", "MCTS", "RL"],
      link: "https://isaiahiruoha.github.io/arbitrage/#/",
      imageFit: "cover",
    },
    {
      id: 4,
      title: "Mechanistic Interpretability for LLM Jailbreak Prevention",
      description: "Preventing adversarial attacks on LLMs using a novel feature steering technique.",
      image: "jailbreaking.png",
      skills: ["Python", "PyTorch", "SAELens", "Gradio"],
      link: "https://drive.google.com/file/d/1Ov-0nKdaizbdKaXh8qTzVd0fzU6_8gG1/view",
      imageFit: "cover",
    },
    {
      id: 5,
      title: "Bed Match Pro",
      description: "Hack The Globe 2024 Submission: A healthcare optimization system designed to efficiently match patients with available hospital beds in real-time.",
      image: "hospital-bed.png",
      skills: ["React", "Python", "Flask"],
      link: "https://www.youtube.com/watch?v=9KXsTzVWBnI&ab_channel=ColinG",
      imageFit: "contain",
    },
    {
      id: 6,
      title: "Breast Cancer Classification",
      description: "A machine learning model for accurate breast cancer detection and classification using advanced image processing and deep learning techniques.",
      image: "microscope.png",
      skills: ["Python", "TensorFlow", "Keras"],
      link: "https://www.kaggle.com/code/colingould/siyung-cho-advanced-hackathon-starter-notebook",
      imageFit: "contain",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="projects-page">
        <div className="projects-container">
          <header className="projects-header">
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-subtitle">A collection of my recent work!</p>
          </header>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 