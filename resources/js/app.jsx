import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home"; // Langsung import halaman utama kita
import "../css/app.css"; // Import file CSS utama

// Temukan div #app di index.html
const container = document.getElementById("app");

// Buat root untuk render React
const root = createRoot(container);

// Render komponen Home kita langsung ke dalam root
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
