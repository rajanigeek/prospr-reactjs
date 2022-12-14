import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
