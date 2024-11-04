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
                    <a href="#">.NET</a>
                </div>
                </div>
                <div class="dropdown">
                <button class="dropbtn">Javascript</button>
                <div class="dropdown-content">
                    <a href="#">React</a>
                    <a href="#">Angular</a>
                    <a href="#">Node.js</a>
                    <a href="#">Express.js</a>
                    <a href="#">Sequelize</a>
                </div>
                </div>
                <div class="dropdown">
                <button class="dropbtn">Java</button>
                </div>
                <div class="dropdown">
                <button class="dropbtn">Python</button>
                <div class="dropdown-content">
                    <a href="#">Flask</a>
                    <a href="#">Tensorflow</a>
                    <a href="#">PyTorch</a>
                </div>
                </div>
                <div class="dropdown">
                <button class="dropbtn">SQL</button>
                <div class="dropdown-content">
                    <a href="#">MSSQL</a>
                    <a href="#">MySql</a>
                </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default SkillCard;