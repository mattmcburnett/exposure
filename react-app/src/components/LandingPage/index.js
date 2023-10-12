import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import './LandingPage.css';
import ImageOne from './background-array-1.jpg';
import ImageTwo from './background-array-2.jpg';
import ImageThree from './background-array-3.jpg';
import ImageFour from './background-array-4.jpg';
import ImageFive from './background-array-5.jpg';
import ImageSix from './background-image-6.jpg';
import Dev from './climbing-prof.jpg'



function LandingPage() {

    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory()
    const [backgroundImage, setBackgroundImage] = useState(ImageSix)
    let state = 0;

    const backgroundArray = [
        ImageSix,
        ImageOne,
        ImageTwo,
        ImageThree,
        ImageFour,
        ImageFive,
    ]


    // reusable image slideshow function
    useEffect(() => {
        const int = setInterval(() => {
            console.log('hitting the useEffect')
            if(state === 5) {
                state = 0
                setBackgroundImage(backgroundArray[state])
            } else {
                state+= 1
                setBackgroundImage(backgroundArray[state])
            }
            console.log(state)
        }, 5000)
        return () => {
            clearInterval(int)
        }


    }, [state])

    console.log(backgroundArray[0]);

    const goHome = () => {
        history.push('/home')
    }

    const goToSignup = () => {
        history.push('/signup')
    }


    return (
        <div id="landing-page-wrapper" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div id="landing-page-content-container">
                <div id="landing-page-text">
                    <h1>Create. Inspire. Share.</h1>
                    <h2>Join the community and share your inspiration with others.</h2>
                </div>
                {currentUser ?
                    <button onClick={goHome} id="start-exploring-button">Start Exploring</button>
                    :
                    <button onClick={goToSignup} id="sign-up-free-button">Sign up for free</button>
                }

            </div>
            <div id="footer">
                <div id="footer-content-wrapper">
                    <div>
                        <p id="meet">Meet the Developer</p>
                    </div>
                    <div id="dev-info-wrapper">
                        <div id="name-image-container">

                            <p id="name">Matt McBurnett</p>
                        </div>
                        <div id="dev-links">
                            <Link to={{pathname: 'https://github.com/mattmcburnett'}} target="_blank"><i className="fa-brands fa-github"></i></Link>
                            <Link to={{pathname: 'https://www.linkedin.com/in/matt-mcburnett/'}} target="_blank"><div id="linkedin-background"><i className="fa-brands fa-linkedin"></i></div></Link>
                            <Link to={{pathname: 'https://mattmcburnett.github.io/'}} target="_blank"><p id="my-portfolio-link">My Portfolio</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
