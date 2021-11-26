import React from "react";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {

    return (
        <div>
            <div>
                <NavBar />
            </div>


            <div>
                <Cards />
            </div>
        </div>
    );
}