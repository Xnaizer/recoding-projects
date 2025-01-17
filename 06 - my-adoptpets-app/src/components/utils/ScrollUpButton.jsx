import { useState, useEffect } from "react";

function ScrollUpButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Monitor scroll untuk menunjukkan atau menyembunyikan tombol
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);  // Menampilkan tombol jika scroll lebih dari 300px
            } else {
                setIsVisible(false); // Menyembunyikan tombol jika scroll kurang dari 300px
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Hapus event listener saat komponen dibersihkan
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Fungsi untuk menggulir halaman ke atas
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Menggunakan scroll halus
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-slate-500 text-white p-4 w-14 text-2xl rounded-xl shadow-lg hover:bg-slate-700 transition duration-300 opacity-50 hover:opacity-100"
                title="Scroll to top"
            >
                ↑
            </button>
        )
    );
}

export default ScrollUpButton;
