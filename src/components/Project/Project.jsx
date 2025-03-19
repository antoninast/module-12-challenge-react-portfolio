import './Project.css';

function Project({ image, url, title }) {
    const onProjectClick = (projectRepo) => {
        window.open(projectRepo, '_blank');
    }

    return (
        <div className="project">
            <img src={image} onClick={() => onProjectClick(url)}/>
            <div className='title'>{title}</div>
        </div>
    );
}

export default Project;
