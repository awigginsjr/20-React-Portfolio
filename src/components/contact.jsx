// src/components/contact.jsx

// import { useState } from 'react'; // Import the useState hook from React

// import axios from 'axios'; // Import the axios library

// const Contact = () => {
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' }); // Add the useState hook to manage the form data
//     const { name, email, message } = formState; // Destructure the formState object
//     const [errorAlert, setAlertMessage] = useState(''); // Add the useState hook to manage the error message

//     const handleChange = (e) => { // Define the handleChange function
//         if (e.target.name === 'email') { // Check if the target name is email
//             const isValid = validateEmail(e.target.value); // Set the isValid variable equal to the result of the validateEmail function
//             if (!isValid) { // Check if the email is not valid
//                 setAlertMessage('Invalid Email.'); // Set the error message to 'Invalid Email.'
//             } else { // If the email is valid
//                 setAlertMessage(''); // Clear the error message
//             }
//         } else { // If the target name is not email
//             if (!e.target.value.length) { // Check if the target value is empty
//                 setAlertMessage(`${e.target.name} is required.`); // Set the error message to the target name plus 'is required.'
//             } else { // If the target value is not empty
//                 setAlertMessage('');  // Clear the error message
//             }
//         }
//         if (!errorAlert) { // Check if there is no error message
//             setFormState({ ...formState, [e.target.name]: e.target.value }); // Update the formState object with the new value
//         }
//     };

//     const handleSubmit = (e) => { // Define the handleSubmit function
//         e.preventDefault(); // Prevent the default form submission behavior
//         console.log(formState); // Log the formState object to the console

//         axios
//         .post("https://getform.io/f/blljjllb", { // Make a POST request to the getform.io API
//             message: message, // Pass the message
//             name: name, // Pass the name
//             email: email, // Pass the email
//         },
//         { headers: {'Accept': 'application/json'}})

//         .then(response => console.log(response))
//         .catch(error => console.log(error))
//     };

//     const validateEmail = (email) => { // Define the validateEmail function
//         const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Define the regular expression for validating email addresses
//         return regEx.test(email); // Return the result of testing the email against the regular expression
//     };

//     return ( // Return the following content to be rendered in the browser window
//         <section>
//             <form id="contact-form" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email Address:</label>
//                     <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="message">Message:</label>
//                     <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//                 </div>
//                 {errorAlert && (
//                     <div>
//                         <p className="error-text">{errorAlert}</p>
//                     </div>
//                 )}
//                 <button data-testid="button" type="submit">Submit</button>
//             </form>
//         </section>
//     );
// }

// export default Contact; // Export the Contact component

import { useState } from 'react'; // Import the useState hook from React
import axios from 'axios'; //   Import the axios library

const Contact = () => { // Define the Contact component
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorAlert, setAlertMessage] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => { // Define the handleChange function
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setAlertMessage('Invalid Email.');
            } else {
                setAlertMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setAlertMessage(`${e.target.name} is required.`);
            } else {
                setAlertMessage('');
            }
        }
        if (!errorAlert) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => { // Define the handleSubmit function
        e.preventDefault();

        axios.post("https://getform.io/f/blljjllb", { // Make a POST request to the getform.io API
                message: message,
                name: name,
                email: email,
            },
            { headers: { 'Accept': 'application/json' } })  // Set the headers for the request
            .then(response => {
                console.log(response);
                setSubmitMessage('Your message has been sent successfully!'); // Set the success message
                setFormState({ name: '', email: '', message: '' }); // Clear the form fields after successful submission
            })
            .catch(error => { // Catch any errors
                console.log(error);
                setSubmitMessage('There was an error sending your message.'); // Set the error message
            });
    };

    const validateEmail = (email) => { // Define the validateEmail function
        const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regEx.test(email);
    };

    return ( // Return the following content to be rendered in the browser window
        <section>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Please enter your full Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Please provide your Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Please provide your Message below:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorAlert && (
                    <div>
                        <p className="error-text">{errorAlert}</p>
                    </div>
                )}
                {submitMessage && (
                    <div>
                        <p className="submit-message">{submitMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact; // Export the Contact component
