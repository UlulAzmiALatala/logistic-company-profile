import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // <-- TAMBAHKAN IMPORT INI

export default defineConfig({
    plugins: [react()],
    base: "./",
    build: {
        outDir: "dist",
    },
    // TAMBAHKAN BAGIAN INI UNTUK MENDEFINISIKAN ALIAS '@'
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js"),
        },
    },
});
