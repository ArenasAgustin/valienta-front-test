import React from "react";
import AboutComponent from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

export default function About() {
    return (
        <div>
            <div id='home'>
                <NavBar />
            </div>

            <div>
                <Header page={"About"} />
            </div>

            <div>
                <AboutComponent />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}