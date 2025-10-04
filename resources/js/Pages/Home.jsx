import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Slider from "react-slick";
import VANTA from "vanta/dist/vanta.globe.min"; // Import Vanta Globe

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

// Komponen animasi yang lebih canggih
const AnimatedSection = ({ children, id, className = "" }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.section
            id={id}
            ref={ref}
            className={className}
            animate={controls}
            initial="hidden"
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                },
                hidden: { opacity: 0, y: 50 },
            }}
        >
            {children}
        </motion.section>
    );
};

export default function Home() {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(0);

    // Inisialisasi Vanta.js
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                VANTA({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0xff6600, // Warna oranye khas
                    backgroundColor: 0x111827, // Warna abu-abu gelap
                    size: 1.2,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    // Pengaturan untuk slider testimonial
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <>
            <Helmet>
                <title>Logistify - The Gold Standard of Modern Logistics</title>
            </Helmet>
            <div className="bg-gray-100 text-gray-800 font-sans antialiased">
                <Navbar />
                <main>
                    {/* HERO SECTION with 3D Globe */}
                    <section
                        id="beranda"
                        ref={vantaRef}
                        className="min-h-screen flex items-center justify-center text-white relative"
                    >
                        <motion.div
                            className="container mx-auto px-6 text-center z-10"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                        >
                            <h1
                                className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight"
                                style={{
                                    textShadow: "0px 4px 15px rgba(0,0,0,0.5)",
                                }}
                            >
                                Inovasi Logistik, <br /> Direkayasa untuk
                                Pertumbuhan
                            </h1>
                            <p
                                className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8"
                                style={{
                                    textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
                                }}
                            >
                                Platform terintegrasi yang mendefinisikan ulang
                                kecepatan, keamanan, dan keandalan dalam rantai
                                pasok modern.
                            </p>
                            <motion.a
                                href="#layanan"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg shadow-orange-500/40"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Temukan Solusi Anda
                            </motion.a>
                        </motion.div>
                    </section>

                    {/* STATS COUNTER SECTION */}
                    <AnimatedSection id="stats" className="py-20 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
                                        <CountUp
                                            end={500}
                                            duration={3}
                                            enableScrollSpy
                                        />
                                        +
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        Klien Terpercaya
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
                                        <CountUp
                                            end={100}
                                            duration={3}
                                            enableScrollSpy
                                        />
                                        +
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        Jangkauan Kota
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
                                        <CountUp
                                            end={250}
                                            duration={3}
                                            enableScrollSpy
                                        />
                                        +
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        Armada Siap Jalan
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
                                        <CountUp
                                            end={99}
                                            duration={3}
                                            enableScrollSpy
                                        />
                                        %
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        Ketepatan Waktu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* LAYANAN SECTION with Glassmorphism */}
                    <AnimatedSection id="layanan" className="py-24 bg-gray-100">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-16">
                                Ekosistem Layanan Terintegrasi
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <motion.div
                                    className="bg-white/50 backdrop-blur-xl p-8 rounded-xl shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-400"
                                    whileHover={{ y: -10 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Smart Freight
                                    </h3>
                                    <p className="text-gray-700">
                                        Optimalisasi rute darat, laut, dan udara
                                        dengan algoritma cerdas untuk efisiensi
                                        maksimal.
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="bg-white/50 backdrop-blur-xl p-8 rounded-xl shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-400"
                                    whileHover={{ y: -10 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Agile Warehousing
                                    </h3>
                                    <p className="text-gray-700">
                                        Solusi pergudangan fleksibel yang
                                        terhubung secara digital untuk manajemen
                                        inventaris real-time.
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="bg-white/50 backdrop-blur-xl p-8 rounded-xl shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-400"
                                    whileHover={{ y: -10 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Last-Mile Delivery
                                    </h3>
                                    <p className="text-gray-700">
                                        Pengiriman tahap akhir yang cepat dan
                                        transparan hingga ke depan pintu
                                        pelanggan Anda.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* TENTANG KAMI SECTION */}
                    <AnimatedSection id="tentang" className="py-24 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Kontainer Teks */}
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        Lebih dari Sekadar Logistik, Kami Adalah
                                        Mitra Pertumbuhan Anda
                                    </h2>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        Logistify lahir dari sebuah gagasan
                                        sederhana: bahwa logistik seharusnya
                                        menjadi akselerator, bukan penghambat,
                                        bagi pertumbuhan bisnis. Kami adalah tim
                                        yang terdiri dari para ahli logistik,
                                        teknolog, dan profesional layanan
                                        pelanggan yang bersemangat untuk
                                        menciptakan solusi yang efisien,
                                        transparan, dan andal.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Dengan memadukan pengalaman
                                        bertahun-tahun di industri dengan
                                        inovasi teknologi terkini, kami
                                        berkomitmen untuk menjembatani jarak,
                                        mengoptimalkan rantai pasok, dan
                                        mengantarkan kesuksesan langsung ke
                                        depan pintu Anda.
                                    </p>
                                </div>

                                {/* Kontainer Gambar dengan Tinggi Terkontrol */}
                                <div className="w-full h-[500px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1964&auto=format&fit=crop"
                                        alt="Tim Logistify Bekerja"
                                        className="rounded-xl shadow-2xl w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* VISI & MISI SECTION */}
                    <AnimatedSection
                        id="visimisi"
                        className="py-24 bg-gray-100"
                    >
                        <div className="container mx-auto px-6 text-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">
                                        Visi Kami
                                    </h3>
                                    <p className="text-gray-600 italic">
                                        "Menjadi pilar utama dalam ekosistem
                                        logistik digital Indonesia,
                                        memberdayakan pertumbuhan bisnis di
                                        setiap skala melalui solusi yang
                                        inovatif dan terintegrasi."
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">
                                        Misi Kami
                                    </h3>
                                    <ul className="text-gray-600 space-y-2 text-left list-disc list-inside">
                                        <li>
                                            Menyediakan layanan logistik yang
                                            aman, tepat waktu, dan transparan.
                                        </li>
                                        <li>
                                            Mengembangkan teknologi yang
                                            memudahkan pelanggan dalam mengelola
                                            pengiriman.
                                        </li>
                                        <li>
                                            Membangun tim yang profesional,
                                            berintegritas, dan berorientasi pada
                                            kepuasan pelanggan.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* TESTIMONIAL SECTION */}
                    <AnimatedSection
                        id="testimonial"
                        className="py-24 bg-gray-900 text-white"
                    >
                        <div className="container mx-auto px-6 max-w-3xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                                Apa Kata Mitra Kami
                            </h2>
                            <Slider {...sliderSettings}>
                                <div>
                                    <p className="text-xl italic text-gray-300 mb-6">
                                        "Logistify benar-benar mengubah cara
                                        kami mengelola distribusi. Sistem
                                        tracking-nya sangat akurat dan tim
                                        supportnya luar biasa responsif."
                                    </p>
                                    <h4 className="font-bold text-lg">
                                        Andi Wijaya
                                    </h4>
                                    <p className="text-orange-400">
                                        CEO, Startup B
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl italic text-gray-300 mb-6">
                                        "Keandalan adalah segalanya di bisnis
                                        kami. Sejak bermitra dengan Logistify,
                                        tingkat ketepatan waktu pengiriman kami
                                        meningkat drastis."
                                    </p>
                                    <h4 className="font-bold text-lg">
                                        Rina Hartono
                                    </h4>
                                    <p className="text-orange-400">
                                        Manager Operasional, Company A
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </AnimatedSection>

                    {/* KONTAK SECTION */}
                    <AnimatedSection id="kontak" className="py-24 bg-white">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Mari Ciptakan Masa Depan Logistik Bersama
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                                Tim ahli kami siap menjadi perpanjangan tangan
                                bisnis Anda.
                            </p>
                            <motion.a
                                href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan layanan logistik Anda.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 inline-block shadow-lg shadow-orange-500/40"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Mulai Percakapan
                            </motion.a>
                        </div>
                    </AnimatedSection>
                </main>
                <Footer />
            </div>
        </>
    );
}
