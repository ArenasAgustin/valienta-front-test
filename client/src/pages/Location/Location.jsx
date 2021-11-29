import React from "react";
import CardsLocations from "../../components/CardsLocations/CardsLocations";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {

    return (
        <div>
            <div id='home'>
                <NavBar />
            </div>

            <div>
                <Header />
            </div>

            <div>
                <CardsLocations />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}