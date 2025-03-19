import { useState } from "react";
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState({
        name: '',
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };
    
    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
          setError({
            name: name,
            message:`${name.charAt(0).toUpperCase() + name.slice(1)} is required`
          });
        } else if (name === 'email') {
            const checkEmail = value.split('').find((char) => char === '@');
            if (!checkEmail) {
                setError({
                    name: 'email',
                    message: 'The email you have entered is not valid'
                })
            } else {
                setError({
                    name: '',
                    message: ''
                });
            }
        } else {
          setError({
            name: '',
            message: ''
          });
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-form">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={error.name === 'name' ? 'error-alert' : ''}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={error.name === 'email' ? 'error-alert' : ''}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      className={error.name === 'message' ? 'error-alert' : ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    ></textarea> 
                </div>
                <div>{!!error.name.length && <p className="error">{error.message}</p>}</div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;