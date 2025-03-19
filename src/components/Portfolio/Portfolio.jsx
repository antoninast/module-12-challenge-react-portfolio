import './Portfolio.css';
import project1Image from '../../assets/images/project-1.png';
import project2Image from '../../assets/images/project-2.png';
import groupProject from '../../assets/images/group-project.png'

function Portfolio() {
    const onProjectClick = (projectRepo) => {
        window.open(projectRepo, '_blank');
    }

    return (
        <div className="deployed-projects">
            <div className="project">
                <img src={project1Image} onClick={() => onProjectClick("https://antoninast.github.io/module-1-landing-page/")}/>
                <div>Landing Page</div>
            </div>
            <div className="project">
                <img src={project2Image} onClick={() => onProjectClick("https://antoninast.github.io/module-2-css-snippet-cheat-sheet/")}/>
                <div>CSS Cheatsheet</div>
            </div>
            <div className="project">
                <img src={groupProject} onClick={() => onProjectClick("https://p1t1-akcj.github.io/ProjectOne/")}/>
                <div>FlighPlan - group project</div>
            </div>
            <div className="project">
                <img src={project1Image} onClick={() => onProjectClick("https://antoninast.github.io/module-1-landing-page/")}/>
                <div>Landing Page</div>
            </div>
            <div className="project">
                <img src={project2Image} onClick={() => onProjectClick("https://antoninast.github.io/module-2-css-snippet-cheat-sheet/")}/>
                <div>CSS Cheatsheet</div>
            </div>
            <div className="project">
                <img src={groupProject} onClick={() => onProjectClick("https://p1t1-akcj.github.io/ProjectOne/")}/>
                <div>FlighPlan - group project</div>
            </div>
        </div>
    )
}

export default Portfolio;