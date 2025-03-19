import './Portfolio.css';
import project1Image from '../../assets/images/project-1.png';
import project2Image from '../../assets/images/project-2.png';
import groupProject from '../../assets/images/group-project.png'
import Project from '../Project/Project';

function Portfolio() {
    const projects = [
        {
            image: project1Image,
            url: "https://antoninast.github.io/module-1-landing-page/",
            title: "Landing Page",
            repositoryUrl: "https://github.com/antoninast/module-1-landing-page"
        },
        {
            image: project2Image,
            url: "https://antoninast.github.io/module-2-css-snippet-cheat-sheet//",
            title: "CSS Cheatsheet",
            repositoryUrl: "https://github.com/antoninast/module-2-css-snippet-cheat-sheet"
        },
        {
            image: groupProject,
            url: "https://p1t1-akcj.github.io/ProjectOne/",
            title: "FlighPlan - group project",
            repositoryUrl: "https://github.com/antoninast/ProjectOne-Flightplan"
        },
        {
            image: project1Image,
            url: "https://antoninast.github.io/module-1-landing-page/",
            title: "Landing Page",
            repositoryUrl: "https://github.com/antoninast/module-1-landing-page"
        },
        {
            image: project2Image,
            url: "https://antoninast.github.io/module-2-css-snippet-cheat-sheet//",
            title: "CSS Cheatsheet",
            repositoryUrl: "https://github.com/antoninast/module-2-css-snippet-cheat-sheet"
        },
        {
            image: groupProject,
            url: "https://p1t1-akcj.github.io/ProjectOne/",
            title: "FlighPlan - group project",
            repositoryUrl: "https://github.com/antoninast/ProjectOne-Flightplan"
        },
    ];

    return (
        <div className="deployed-projects">
            {projects.map((project) => {
                return (<Project
                        image={project.image}
                        url={project.url}
                        title={project.title}
                        repositoryUrl={project.repositoryUrl}
                    />
                )
            })}
        </div>
    )
}

export default Portfolio;