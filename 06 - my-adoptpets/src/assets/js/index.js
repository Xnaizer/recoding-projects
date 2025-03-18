// const scrollHeader = () =>{
//     const header = document.getElementById('navbar');
//     window.scrollY >= 50 ? header.classList.add('bg-Headerbg') : header.classList.remove('bg-Headerbg');
// };
// window.addEventListener('scroll', scrollHeader);

// document.addEventListener("DOMContentLoaded", function() {
//     // 1. Ketika dokumen telah selesai dimuat, jalankan fungsi berikut
//     const textElement = document.getElementById('typing-text');
//     // 2. Ambil elemen dengan id 'typing-text' dan simpan dalam variabel 'textElement'
    
//     const texts = ["A True Companion.","A True Love.", "A Loyal Friend.", "A True Friend."];
//     // 3. Buat array 'texts' yang berisi teks-teks yang akan ditampilkan secara bergantian
    
//     let index = 0;
//     // 4. Inisialisasi variabel 'index' untuk melacak teks mana yang sedang ditampilkan dari array 'texts'
    
//     let charIndex = 0;
//     // 5. Inisialisasi variabel 'charIndex' untuk melacak karakter mana yang sedang ditampilkan dari teks saat ini
    
//     let currentText = '';
//     // 6. Inisialisasi variabel 'currentText' untuk menyimpan teks saat ini yang sedang diketik
    
//     let isDeleting = false;
//     // 7. Inisialisasi variabel 'isDeleting' untuk menentukan apakah teks sedang dihapus atau tidak

//     function type() {
//         currentText = texts[index];
//         // 8. Set 'currentText' menjadi teks yang sedang ditampilkan berdasarkan 'index'
        
//         if (isDeleting) {
//             // 9. Jika 'isDeleting' true, hapus karakter dari 'currentText'
//             textElement.textContent = currentText.substring(0, charIndex - 1);
//             // 10. Kurangi panjang teks dengan satu karakter
//             charIndex--;
//             // 11. Kurangi 'charIndex' untuk menghapus karakter
//         } else {
//             // 12. Jika 'isDeleting' false, tambahkan karakter ke 'currentText'
//             textElement.textContent = currentText.substring(0, charIndex + 1);
//             // 13. Tambahkan satu karakter dari 'currentText'
//             charIndex++;
//             // 14. Tambah 'charIndex' untuk menambahkan karakter
//         }

//         if (!isDeleting && charIndex === currentText.length) {
//             // 15. Jika pengetikan selesai (tidak sedang menghapus dan seluruh teks telah ditampilkan)
//             setTimeout(() => {
//                 isDeleting = true;
//                 // 16. Tunggu 1 detik, lalu set 'isDeleting' menjadi true untuk mulai menghapus teks
//             }, 1000);
//         } else if (isDeleting && charIndex === 0) {
//             // 17. Jika penghapusan selesai (semua karakter telah dihapus)
//             isDeleting = false;
//             // 18. Set 'isDeleting' menjadi false untuk mulai mengetik teks berikutnya
//             index = (index + 1) % texts.length;
//             // 19. Update 'index' untuk teks berikutnya. Jika sudah sampai akhir array 'texts', kembali ke awal (index 0)
//         }

//         const typingSpeed = isDeleting ? 60 : 125;
//         // 20. Tentukan kecepatan pengetikan. Jika sedang menghapus, lebih cepat (50ms). Jika sedang mengetik, lebih lambat (100ms)
//         setTimeout(type, typingSpeed);
//         // 21. Jalankan fungsi 'type' lagi setelah 'typingSpeed' milidetik
//     }

//     type();
//     // 22. Mulai fungsi 'type' untuk memulai efek pengetikan
// });



// const dtElements = document.querySelectorAll('dt');

// dtElements.forEach(element => {
//     element.addEventListener('click', () => {
//         const ddId = element.getAttribute('aria-controls');
//         const ddElement = document.getElementById(ddId);
//         const ddArrowIcon = element.querySelector('i'); // Select the correct icon

//         // Toggle the 'open' class on dd element for animation
//         ddElement.classList.toggle('open');
        
//         // Toggle the arrow rotation
//         ddArrowIcon.classList.toggle('-rotate-180');
//     });
// });




// // showing active link
// const sections = document.querySelectorAll('section[id]');

// const scrollActive = () =>{
//     const scrollY = window.pageYOffset;

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id'),
//               sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId )

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             sectionsClass.classList.add('active-link');
//         }else{
//             sectionsClass.classList.remove('active-link');
//         };
//     });
// };

// window.addEventListener('scroll', scrollActive);



// const searchButton = document.getElementById("search-button");
// const searchInputContainer = document.getElementById("search-input-container");
// const whenSearchgone = document.querySelectorAll(".guajugaheran");

// searchButton.addEventListener("click", function() {
//     if (searchInputContainer.classList.contains("hidden")) {
//         // Menampilkan search input
//         searchInputContainer.classList.remove("hidden");
        
//         setTimeout(() => {
//             searchInputContainer.classList.remove("opacity-0");
//         }, 10);
        
//         // Menyembunyikan elemen-elemen dengan kelas guajugaheran
//         whenSearchgone.forEach(element => {
//             element.classList.add("hidden");
//         });
//     } else {
//         // Menyembunyikan search input
//         searchInputContainer.classList.add("opacity-0");
        
//         setTimeout(() => {
//             searchInputContainer.classList.add("hidden");
//         }, 300); // Waktu sesuai dengan 'duration-300'

//         // Menampilkan kembali elemen-elemen dengan kelas guajugaheran dengan delay 300ms
//         setTimeout(() => {
//             whenSearchgone.forEach(element => {
//                 element.classList.remove("hidden");
//             });
//         }, 300); // Delay 300ms untuk kemunculan kembali elemen guajugaheran
//     }
// });



// function animateValue(id, start, end, duration) {
// let element = document.getElementById(id);
// let range = end - start;
// let stepTime = Math.abs(Math.floor(duration / range));

// // Prevent stepTime from becoming too small or zero
// stepTime = stepTime < 10 ? 10 : stepTime;

// let current = start;
// let increment = end > start ? 1 : -1;

// let timer = setInterval(function () {
//     current += increment;
//     element.textContent = current.toLocaleString(); // Format numbers with commas
//     if (current == end) {
//     clearInterval(timer);
//     }
// }, stepTime);
// }

//   // Initialize IntersectionObserver
// const observer = new IntersectionObserver(function(entries, observer) {
// entries.forEach(entry => {
//     if (entry.isIntersecting) {
//     animateValue('volunteerCount1', 8888, 9824, 20000);
//     animateValue('petsRescuedCount', 8899, 10247, 20000);
//     animateValue('adoptStoreCount', 0, 458, 2000);
//     observer.unobserve(entry.target); // Stop observing once animation starts
//     }
// });
// }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

// // Observe the sec-community section
// window.onload = function () {
// const communitySection = document.getElementById('sec-community');
// observer.observe(communitySection);
// };






// const mobileNavbar = document.getElementById('mobileNavbar');
// const menuButton = document.getElementById('menuButton');

// // Fungsi untuk toggle class hidden ketika tombol ditekan
// menuButton.addEventListener('click', () => {
//     mobileNavbar.classList.toggle('hidden'); // Toggle hidden class
// });

// // Menutup navbar jika link di dalam navbar diklik
// const navLinks = mobileNavbar.querySelectorAll('a');
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         mobileNavbar.classList.add('hidden'); // Sembunyikan navbar saat link diklik
//     });
// });



// const scrollUpButton = document.getElementById("scrollUp");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 175) {
//     // Menampilkan tombol "scroll up" dengan delay 300ms
//     scrollUpButton.classList.remove("hidden", "opacity-0");
//     scrollUpButton.classList.add("opacity-100", "delay-300");
//   } else {
//     // Menyembunyikan tombol "scroll up" tanpa delay
//     scrollUpButton.classList.add("opacity-0");
//     scrollUpButton.classList.remove("opacity-100", "delay-300");
    
//     setTimeout(() => {
//       scrollUpButton.classList.add("hidden");
//     }, 300); // Waktu sesuai dengan `duration-300`
//   }
// });

// // Smooth scroll saat tombol diklik
// scrollUpButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    // reset : true, // animasi berulang
});

sr.reveal('#img-hero', {origin: 'bottom'});
sr.reveal('#img-text', {origin: 'top'});
sr.reveal('#sec-support', {origin: 'top'});

sr.reveal('#mission-paragraph, #mission-img ', {origin: 'left'});
sr.reveal('#mission-title, #mission-community ', {origin: 'right'});


sr.reveal('#petlist-title ', {origin: 'right'});
sr.reveal('#adoptpets-filter', {origin: 'left'});

sr.reveal('#petlist-img, #petlist-detail', {origin: 'bottom'});

sr.reveal('#accordion-title', {origin: 'top'});
sr.reveal('#accordions', {origin: 'bottom'});

// mission-paragraph mission-title mission-img mission-community
// petlist-title adoptpets-filter petlist-img petlist-detail
// accordion-title accordions


