import React from "react";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {

    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div>
                <Header />
            </div>

            <div>
                <Cards />
            </div>
        </div>
    );
}