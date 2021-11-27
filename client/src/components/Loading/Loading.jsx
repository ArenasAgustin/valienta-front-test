import React from "react";
import './Loading.scss';

export default function Loading() {
    return (
        <div className="loading__container">
            <div className="loading__background">
                <img
                    src="https://cdna.artstation.com/p/assets/images/images/031/538/850/original/petro-kosariekov-portal-gun-rick-and-morty2-2.gif?1603902186"
                    alt="loading portal"
                />
            </div>

            <div className="loading__rick">
                <img
                    src="https://64.media.tumblr.com/0a92f3a539c73fb48730bf0bd5a5a1dd/a16a9e8cc810c0de-d3/s400x600/c64786701145a600c09446237a22750973ead896.gifv"
                    alt="loading rick"
                />
            </div>
        </div>
    );
}