import React from "react";
import { createRoot } from "react-dom/client";
import { LazyMotion, domAnimation } from "framer-motion"; // <-- 1. IMPORT INI
import Home from "./Pages/Home";
import "../css/app.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        {/* 2. BUNGKUS KOMPONEN HOME DENGAN INI */}
        <LazyMotion features={domAnimation}>
            <Home />
        </LazyMotion>
    </React.StrictMode>
);
