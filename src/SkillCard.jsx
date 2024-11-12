import './SkillCard.css';

const SkillCard = () => {
    return (
        <div className="skills">
            <h2>Technical Skills</h2>


            <div className='skill-container'>
                <div class="dropdown">
                <button class="dropbtn">C/C++</button>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">C#</button>
                    <div class="dropdown-content">
                        <a>.NET</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Javascript</button>
                    <div class="dropdown-content">
                        <a>React</a>
                        <a>Angular</a>
                        <a>Node.js</a>
                        <a>Express.js</a>
                        <a>Sequelize</a>
                    </div>
                </div>
                    <div class="dropdown">
                    <button class="dropbtn">Java</button>
                    </div>
                <div class="dropdown">
                    <button class="dropbtn">Python</button>
                    <div class="dropdown-content">
                        <a>Flask</a>
                        <a>Tensorflow</a>
                        <a>PyTorch</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">SQL</button>
                    <div class="dropdown-content">
                        <a>MSSQL</a>
                        <a>MySql</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Developer Tools</button>
                    <div class="dropdown-content">
                        <a>Git/Github</a>
                        <a>Jira</a>
                        <a>Confluence</a>
                        <a>Postman</a>
                        <a>Visual Studio</a>
                        <a>VS Code</a>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default SkillCard;