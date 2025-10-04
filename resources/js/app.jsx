import React from "react";
import { createRoot } from "react-dom/client";
import { LazyMotion, domAnimation } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home";

// CSS INTI ANDA
import "../css/app.css";

// ==> TAMBAHKAN DUA BARIS INI UNTUK MEMPERBAIKI SLIDER <==
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <LazyMotion features={domAnimation}>
                <Home />
            </LazyMotion>
        </HelmetProvider>
    </React.StrictMode>
);
