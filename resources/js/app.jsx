import React from "react";
import { createRoot } from "react-dom/client";
import { LazyMotion, domAnimation } from "framer-motion";
import { HelmetProvider } from "react-helmet-async"; // <-- 1. IMPORT INI
import Home from "./Pages/Home";
import "../css/app.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        {/* 2. BUNGKUS SEMUANYA DENGAN HELMETPROVIDER */}
        <HelmetProvider>
            <LazyMotion features={domAnimation}>
                <Home />
            </LazyMotion>
        </HelmetProvider>
    </React.StrictMode>
);
