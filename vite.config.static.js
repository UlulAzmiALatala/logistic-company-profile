import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ini adalah konfigurasi standar Vite untuk aplikasi React murni
export default defineConfig({
    plugins: [react()],
    base: "./", // Path relatif agar aset selalu ditemukan
    // Kita akan membuat folder output bernama 'dist' yang standar
    build: {
        outDir: "dist",
    },
});
