import './AboutMe.css';
import personalPhoto from '../../assets/images/personal-photo.jpg';

function AboutMe() {
    return (
        <div className='about-me'>
            <img src={personalPhoto} alt='new photo' />
            <div className='bio'>
                <div className='short-bio'>I’m a passionate developer set to graduate from the Columbia Engineering Bootcamp in June 2025. With hands-on experience in full-stack development, I am eager to apply my skills in real-world projects and continue learning. Currently seeking exciting opportunities to contribute, collaborate, and grow in a dynamic development environment. Open to work and ready to make an impact!</div>
                <div className='key-skills'>
                    <h3>Key Technical Skills:</h3>
                    <ul>
                        <li><b>Programming Languages:</b> JavaScript, TypeScript</li>
                        <li><b>Front-End Development:</b> React</li>
                        <li><b>Back-End Development:</b> Node.js, Express.js</li>
                        <li><b>Database Management:</b> SQL</li>
                        <li><b>Additional Skills:</b> Prompt Engineering</li>
                    </ul>    
                </div>
            </div>
        </div>
    )
}

export default AboutMe;