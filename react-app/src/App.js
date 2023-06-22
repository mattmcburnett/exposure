import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import UploadImagePage from "./components/UploadImagePage";
import ImagePage from "./components/ImagePage";
import CheckoutPage from "./components/CheckoutPage";
import MyImagesPage from "./components/MyImagesPage";
import MyLicensesPage from "./components/MyLicensesPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/upload'>
            <h1>Uploads</h1>
            <h1>Uploads</h1>
            <h1>Uploads</h1>
            <UploadImagePage />
          </Route>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/cart'>
            <CheckoutPage />
          </Route>
          <Route exact path='/:userId/images'>
            <MyImagesPage />
          </Route>
          <Route exact path='/:userId/licenses'>
            <MyLicensesPage />
          </Route>
          <Route exact path='/:userId/:imageId'>
            <ImagePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
