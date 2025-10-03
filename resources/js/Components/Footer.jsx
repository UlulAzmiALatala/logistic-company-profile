// resources/js/Components/Footer.jsx

import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6 text-center">
                <p>
                    &copy; {currentYear} Logistik Kita. Semua Hak Cipta
                    Dilindungi.
                </p>
            </div>
        </footer>
    );
}
