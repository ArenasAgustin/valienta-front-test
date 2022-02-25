import React from "react";
import Portal from "../../assets/Portal-gif.gif"
import Rick from "../../assets/Rick-gif.gif"
import './Loading.scss';

export default function Loading() {
    return (
        <div className="loading__container">
            <div className="loading__background">
                <img
                    src={Portal}
                    alt="loading portal"
                />
            </div>

            <div className="loading__rick">
                <img
                    src={Rick}
                    alt="loading rick"
                />
            </div>
        </div>
    );
}