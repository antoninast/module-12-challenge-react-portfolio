import './Project.css';

function Project({ image, url, title, repositoryUrl }) {
    const onProjectClick = () => {
        window.open(url, '_blank');
    }
    
    const onGitHubLinkClick = () => {
        window.open(repositoryUrl, '_blank');
    }

    return (
        <div className="project">
            <div className='title'>{title}</div>
            <img src={image} onClick={() => onProjectClick(url)}/>
            <div className='github-url' onClick={() => onGitHubLinkClick()}><a>GitHub Link</a></div>
        </div>
    );
}

export default Project;
