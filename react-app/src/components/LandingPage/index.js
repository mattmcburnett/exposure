import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './LandingPage.css'





function LandingPage() {

    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory()
    const [backgroundImage, setBackgroundImage] = useState('https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/qingbao-meng-01_igFr7hd4-unsplash.jpg')
    let state = 0;

    const backgroundArray = [
        'https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/qingbao-meng-01_igFr7hd4-unsplash.jpg',
        'https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/tim-swaan-eOpewngf68w-unsplash.jpg',
        'https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/aldebaran-s-qtRF_RxCAo0-unsplash.jpg',
        'https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
        'https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/craig-manners-nWphPE-HXEI-unsplash.jpg',
        'https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg'
    ]



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
        </div>
    )
}

export default LandingPage
