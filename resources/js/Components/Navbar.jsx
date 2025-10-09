import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Daftar menu untuk menghindari duplikasi
    const menuItems = [
        { href: "#layanan", label: "Layanan" },
        { href: "#dashboard", label: "Dashboard" },
        { href: "#tentang", label: "Tentang Kami" },
    ];

    return (
        <header className="bg-white/90 backdrop-blur-lg shadow-sm fixed top-0 left-0 w-full z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex-shrink-0">
                    <a href="#beranda" className="flex items-center space-x-2">
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 0L36 18L18 36L0 18L18 0Z"
                                fill="#F97316"
                            />
                            <path
                                d="M18 6L30 18L18 30L6 18L18 6Z"
                                fill="#0F172A"
                            />
                        </svg>
                        <span className="text-2xl font-extrabold tracking-wider">
                            <span className="text-orange-500">LOGIST</span>
                            <span className="text-gray-800">IFY</span>
                        </span>
                    </a>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center space-x-8 font-medium">
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-gray-600 hover:text-orange-500 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#kontak"
                        className="bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-black transition-colors"
                    >
                        Hubungi Kami
                    </a>
                </div>

                {/* Tombol Hamburger Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Menu Dropdown Mobile */}
            <div
                className={`${
                    isMenuOpen ? "max-h-96" : "max-h-0"
                } md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out`}
            >
                {menuItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-3 px-6 text-sm text-gray-600 hover:bg-gray-50 border-t"
                    >
                        {item.label}
                    </a>
                ))}
                <a
                    href="#kontak"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-6 text-sm text-gray-600 hover:bg-gray-50 border-t"
                >
                    Hubungi Kami
                </a>
            </div>
        </header>
    );
}
