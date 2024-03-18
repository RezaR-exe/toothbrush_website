import React from "react";
import Button from 'react-bootstrap/Button';
import Jumbotron from "./Components/Jumbotron";
import Navigation from "./Components//Navigation";
import Details from "./Components//Details";
import Carousel from "./Components//Carrousel";
import Features from "./Components//Features";
import Pricing from "./Components//Pricing";
import Footer from "./Components//Footer";

function App() {
    return (
        <div>
            <Navigation />
            <Carousel />
            <Jumbotron />
            <Details />
            <Features />
            <Pricing />
            <Footer />
        </div>
    )
}

export default App;