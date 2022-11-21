import React from "react";
import Carouselimage from "../Components/Carousels/Carouselimage";
import MidBody from "../Components/MidBody/MidBody";
import Footer from "../Components/Footer/Footer";
import NavigationBar from '../Components/NavBar/NevigationBar'
import Pamphlet from "../Components/Pamphlet/Pamphlet";
import OfferServices from "../Components/ServiceOffered/OfferServices";

const App = () => {
    return (
        <>
        <NavigationBar />
        <Pamphlet/>
        <MidBody/>
        <Carouselimage/>
        <OfferServices/>
        <Footer/>
        </>
    );
}

export default App;