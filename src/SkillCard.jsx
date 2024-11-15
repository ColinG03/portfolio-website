import './SkillCard.css';

const SkillCard = () => {
    return (
        <div className="skills">
            <h2>Technical Skills</h2>


            <div className='skill-container'>
                <div class="dropdown">
                    <button class="dropbtn">
                        <div>C#</div>
                        <div className='arrow'>&#10216;</div>
                    </button>
                    <div class="dropdown-content">
                        <a>.NET</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                        <div>Javascript</div>
                        <div className='arrow'>&#10216;</div>
                    </button>
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
                    <button class="dropbtn">
                        <div>Python</div>
                        <div className='arrow'>&#10216;</div>
                    </button>
                    <div class="dropdown-content">
                        <a>Flask</a>
                        <a>Tensorflow</a>
                        <a>PyTorch</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                        <div>SQL</div>
                        <div className='arrow'>&#10216;</div>
                    </button>
                    <div class="dropdown-content">
                        <a>MSSQL</a>
                        <a>MySql</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">C/C++</button>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                        <div>Developer Tools</div>
                        <div className='arrow'>&#10216;</div>
                    </button>
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