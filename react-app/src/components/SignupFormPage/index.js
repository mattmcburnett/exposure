import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupFormPage.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] =useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("")
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false)


  useEffect(() => {
    let newErrors = {}
		if (username.length > 30) newErrors.username = "Username must be less than 30 characters"
    if (username.length < 5) newErrors.user = "Username must be more than 5 characters"
		if (password.length > 30) newErrors.password = "Password must be less than 30 characters"
    if (password.length < 6) newErrors.password = "Password must be 6 or more characters"
		if (email.length > 40) newErrors.email = "Email must be less than 40 characters"
    //big ol yikes on this email validation. just learn regex man...
    if(email) {
      if (!(email.split('').includes('@'))) {
        newErrors.email = "Please enter a valid email address"
      }
      if(email.split('').includes('@')) {
        if(!(email.split('@')[1].includes('.'))) newErrors.email = "Please enter a valid email address"
        if (email.split('@')[1].includes('.')) {
          if (!(email.split('@')[1].split('.')[0]) || !(email.split('@')[1].split('.')[1])) newErrors.email = "Please enter a valid email address"
        }
      }
    }
    if (firstName.length > 30) newErrors.firstName = 'First name must be less than 30 characters'
    if (lastName.length > 30) newErrors.lastName = 'Last name must be less than 30 characters'
    if (firstName.length < 1) newErrors.firstName = 'Please enter a first name'
    if (!lastName) newErrors.lastName = 'Please enter a last name'
    if (age < 13) newErrors.age = 'You must be over 13 to use Exposure'
    if (age > 120) newErrors.age = "Seems unlikely you're that old..."
		setErrors(newErrors)
	}, [username, password, email, firstName, lastName, age])
  if (sessionUser) return <Redirect to="/home" />;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (Object.values(errors).length) return;
    const data = await dispatch(signUp(username, email, password, firstName, lastName, age));
    if (data) {
      setErrors(data)
    }
  };
  // console.log(errors)

  return (
    <div id="signup-page-wrapper">
      <div id="signup-page-container">
        <div id="signup-page-form-container">
          <form id="signup-page-form" onSubmit={handleSubmit}>
            <i class="fa-solid fa-camera"></i>
            <h1>Sign up for Exposure</h1>
            {/* <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> */}
                {hasSubmitted === true && errors.firstName ? <p className="signup-errors">{errors.firstName}</p> : <div className="signup-errors"></div>}
              <label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First Name"
                />
              </label>
              {hasSubmitted === true && errors.lastName ? <p className="signup-errors">{errors.lastName}</p> : <div className="signup-errors"></div>}
              <label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last Name"
                />
              </label>
              {hasSubmitted === true && errors.email ? <p className="signup-errors">{errors.email}</p> : <div className="signup-errors"></div>}
              <label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
            </label>
            {hasSubmitted === true && errors.username ? <p className="signup-errors">{errors.username}</p> : <div className="signup-errors"></div>}
            <label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
              />
            </label>
            {hasSubmitted === true && errors.age ? <p className="signup-errors">{errors.age}</p> : <div className="signup-errors"></div>}
            <label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                placeholder="Your Age"
                // min={13}
              />
            </label>
            {hasSubmitted === true && errors.password ? <p className="signup-errors">{errors.password}</p> : <div className="signup-errors"></div>}
            <label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                // minLength={6}
              />
            </label>

            <button id="signup-button" type="submit">Sign Up</button>
          </form>
          <div id="form-bottom-text">
            <p>Already an Exposure Member?</p>
            <NavLink to='/login'><p id="reroute-to-login-link">Log in here.</p></NavLink>
          </div>
        </div>
      </div>
      <p id="signup-form-photo-credit">photo by Matt McBurnett</p>
    </div>
  );
}

export default SignupFormPage;
