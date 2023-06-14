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
  const [errors, setErrors] = useState([]);


  // useEffect(() => {
  //   setErrors({})

	// 	if (username.length > 30) errors.username = "Username must be less than 30 characters"
  //   if (username.length < 5) errors.user = "Username msut be more than 5 characters"
	// 	if (password.length > 30) errors.password = "Password must be less than 30 characters"
  //   if (password.length < 6) errors.password = "Password must be 6 or more characters"
	// 	if (email.length > 40) errors.email = "Email must be less than 40 characters"
  //   if (firstName.length > 30) errors.firstName = 'First name must be less than 30 characters'
  //   if (lastName.length > 30) errors.lastName = 'Last name must be less than 30 characters'
  //   if (age < 13) errors.age = 'You must be over 13 to use Exposure'
  //   if (age > 120) errors.age = "Seems unlikely you're that old..."
  //   console.log(errors.firstName)

	// 	setErrors(errors)


	// }, [username, password, email, firstName, lastName, age])
  if (sessionUser) return <Redirect to="/" />;


  const handleSubmit = async (e) => {
    e.preventDefault();

        const data = await dispatch(signUp(username, email, password, firstName, lastName, age));
        if (data) {
          setErrors(data)
        }


  };

  return (
    <div id="signup-page-wrapper">
      <div id="signup-page-container">
        <div id="signup-page-form-container">

          <form id="signup-page-form" onSubmit={handleSubmit}>
            <i class="fa-solid fa-camera"></i>
            <h1>Sign up for Exposure</h1>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
                {/* {errors.firstName && <p>{errors.firstName}</p>} */}
              <label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First Name"
                />
              </label>
              {/* {errors.lastName ? <p>{errors.lastName}</p> : <div></div>} */}
              <label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last Name"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
            </label>
            <label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
              />
            </label>
            <label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                placeholder="Your Age"
              />
            </label>
            <label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
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
