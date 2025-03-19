import './Footer.css';

function Footer() {
    const onLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/antoninad/', '_blank');
    }

    const onGitHubClick = () => {
        window.open('https://github.com/antoninast', '_blank');
    }

    return(
        <footer>
            <div onClick={() => onLinkedInClick()}><a>LinkedIn account</a></div>
            <div onClick={() => onGitHubClick()}><a>GitHub account</a></div>
        </footer>
    )
}

export default Footer;
