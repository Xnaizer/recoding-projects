document.addEventListener("DOMContentLoaded", function() {
    // 1. Ketika dokumen telah selesai dimuat, jalankan fungsi berikut
    const textElement = document.getElementById('typing-text');
    // 2. Ambil elemen dengan id 'typing-text' dan simpan dalam variabel 'textElement'
    
    const texts = ["A Small Decision.","A Hard Work.", "A Pure Consistent.", "A Lot Dedication."];
    // 3. Buat array 'texts' yang berisi teks-teks yang akan ditampilkan secara bergantian
    
    let index = 0;
    // 4. Inisialisasi variabel 'index' untuk melacak teks mana yang sedang ditampilkan dari array 'texts'
    
    let charIndex = 0;
    // 5. Inisialisasi variabel 'charIndex' untuk melacak karakter mana yang sedang ditampilkan dari teks saat ini
    
    let currentText = '';
    // 6. Inisialisasi variabel 'currentText' untuk menyimpan teks saat ini yang sedang diketik
    
    let isDeleting = false;
    // 7. Inisialisasi variabel 'isDeleting' untuk menentukan apakah teks sedang dihapus atau tidak

    function type() {
        currentText = texts[index];
        // 8. Set 'currentText' menjadi teks yang sedang ditampilkan berdasarkan 'index'
        
        if (isDeleting) {
            // 9. Jika 'isDeleting' true, hapus karakter dari 'currentText'
            textElement.textContent = currentText.substring(0, charIndex - 1);
            // 10. Kurangi panjang teks dengan satu karakter
            charIndex--;
            // 11. Kurangi 'charIndex' untuk menghapus karakter
        } else {
            // 12. Jika 'isDeleting' false, tambahkan karakter ke 'currentText'
            textElement.textContent = currentText.substring(0, charIndex + 1);
            // 13. Tambahkan satu karakter dari 'currentText'
            charIndex++;
            // 14. Tambah 'charIndex' untuk menambahkan karakter
        }

        if (!isDeleting && charIndex === currentText.length) {
            // 15. Jika pengetikan selesai (tidak sedang menghapus dan seluruh teks telah ditampilkan)
            setTimeout(() => {
                isDeleting = true;
                // 16. Tunggu 1 detik, lalu set 'isDeleting' menjadi true untuk mulai menghapus teks
            }, 1000);
        } else if (isDeleting && charIndex === 0) {
            // 17. Jika penghapusan selesai (semua karakter telah dihapus)
            isDeleting = false;
            // 18. Set 'isDeleting' menjadi false untuk mulai mengetik teks berikutnya
            index = (index + 1) % texts.length;
            // 19. Update 'index' untuk teks berikutnya. Jika sudah sampai akhir array 'texts', kembali ke awal (index 0)
        }

        const typingSpeed = isDeleting ? 60 : 125;
        // 20. Tentukan kecepatan pengetikan. Jika sedang menghapus, lebih cepat (50ms). Jika sedang mengetik, lebih lambat (100ms)
        setTimeout(type, typingSpeed);
        // 21. Jalankan fungsi 'type' lagi setelah 'typingSpeed' milidetik
    }

    type();
    // 22. Mulai fungsi 'type' untuk memulai efek pengetikan
});



// navbar fixed 

window.onscroll = function(){
    const header = document.querySelector('header');

    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');

    }else{
        header.classList.remove('navbar-fixed');
    }
}



// Hamburger menu
const hamburger = document.querySelector('#ham-btn'); // Memilih tombol hamburger dan menyimpannya dalam variabel 'hamburger'.

// Add or hide navbar
const navMenu = document.querySelector('#nav-menu'); // Memilih menu navigasi dan menyimpannya dalam variabel 'navMenu'.

// Menambahkan event listener untuk mengontrol tampilan menu navigasi saat tombol hamburger diklik
hamburger.addEventListener('click', function() {

    // Jika tombol hamburger memiliki kelas 'hamburger-active'
    if (hamburger.classList.contains('hamburger-active')) {
        // Hapus kelas 'hamburger-active' dari tombol hamburger
        hamburger.classList.remove('hamburger-active');
        // Sembunyikan menu navigasi dengan menambahkan kelas 'hidden'
        navMenu.classList.add('hidden');
    } else {
        // Jika tombol hamburger tidak memiliki kelas 'hamburger-active'
        // Tambahkan kelas 'hamburger-active' ke tombol hamburger
        hamburger.classList.add('hamburger-active');
        // Tampilkan menu navigasi dengan menghapus kelas 'hidden'
        navMenu.classList.remove('hidden');
    }
});

// Removing navbar links when they are clicked
// Memilih semua link di dalam menu navigasi dan menyimpannya dalam variabel 'navLink'
const navLink = document.querySelectorAll('.nav-link');

// Fungsi untuk menyembunyikan menu navigasi dan menghapus kelas 'hamburger-active' dari tombol hamburger saat sebuah link di dalam menu navigasi diklik
const linkAction = () => {
    // Sembunyikan menu navigasi dengan menambahkan kelas 'hidden'
    navMenu.classList.add('hidden');
    // Hapus kelas 'hamburger-active' dari tombol hamburger
    hamburger.classList.remove('hamburger-active');
}

// Menambahkan event listener untuk setiap link di dalam menu navigasi
// Setiap kali sebuah link diklik, fungsi 'linkAction' akan dijalankan
navLink.forEach(n => n.addEventListener('click', linkAction));

// Ambil semua navlink
const navLinks = document.querySelectorAll('nav ul li a');

// Loop melalui setiap navlink
navLinks.forEach(link => {
    // Tambahkan event listener untuk setiap navlink
    link.addEventListener('click', () => {
        // Hapus kelas 'active' dari setiap navlink
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        // Tambahkan kelas 'active' ke navlink yang diklik
        link.classList.add('active');
    });
});

// Fungsi untuk menandai navlink yang sesuai saat pengguna melewati setiap bagian (section)
function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            // Hapus kelas 'active' dari setiap navlink
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Tambahkan kelas 'active' ke navlink yang sesuai dengan section yang sedang dilihat
            document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');
        }
    });
}

// Panggil fungsi highlightNavLink saat pengguna melakukan scroll
window.addEventListener('scroll', highlightNavLink);