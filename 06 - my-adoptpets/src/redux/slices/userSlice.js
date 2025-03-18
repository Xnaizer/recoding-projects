import { createSlice} from "@reduxjs/toolkit"; // import library redux createSlice yang berguna untuk membuat reducer baru.

const initialState = {
    accounts: [

        // { username: 'admin', password: 'admin', role: 'admin' }, // Contoh akun admin
        // { username: 'user1', password: 'user1', role: 'user' }, // Contoh akun user

    ], // data akun {username, password, role}
    pets: [

        // {
        //     id: 1697041269213,
        //     jenis: 'Dog',
        //     nama: 'Buddy',
        //     gender: 'Male',
        //     umur: 2,
        //     lokasi: 'New York',
        //     nomorHP: '123-456-7890',
        //     img: 'https://example.com/dog.jpg',
        //     addedBy: 'admin',
        // },

    ],   // data pet yang dapat diadopsi
    currentUser: null, // pengguna yang sedang login
    isAuthenticated: false, // status login
};

const userSlice = createSlice({ // pembungkus bernama userSlice akan membuat reducer

    name: "user", // yang bernama user
    initialState, // yang berisi data awal oleh initialState diatas ini
    reducers: { // alat untuk mengubah isi kotak state

        // didalam kotak ini berisi beberapa action atau aksi yang dapat kita lakukan, seperti fungsi untuk login, logout, update data dan lainnya.

        // login
        login: (state, action) => {
            const { username, password } = action.payload; // Mengambil username dan password dari action.payload (data yang dikirim saat login).
            const account = state.accounts.find(
              (acc) => acc.username === username && acc.password === password
            ); // dari initialState state.accounts, mencari akun yang cocok dengan username dan password yang diberikan.
      
            if (account) {
              state.isAuthenticated = true;
              state.currentUser = account;
            } else {
              throw new Error('Password Kamu Salah!');
            } // jika akun ditemukan, maka status login diubah menjadi true dan currentUser diubah menjadi akun yang ditemukan.
        },

        // logout
        logout: (state) => {
            state.isAuthenticated = false; // status login diubah menjadi false karena pengguna telah logout
            state.currentUser = null; // currentUser diubah menjadi null karena pengguna telah logout
        },

        // Buat akun baru
        createAccount: (state, action) => {
            const { username, password, role } = action.payload; // username, password, dan role diambil dari data yang dikirim pengguna saat mencoba membuat akun.
            const existingAccount = state.accounts.find((acc) => acc.username === username); // mengecek apakah username sudah terdaftar
    
            if (existingAccount) {
            throw new Error('Username Udah Terdaftar!'); // kalo udah terdaftar, bilang username udah terdaftar
            }
    
            state.accounts.push({ username, password, role }); // kalo belum terdaftar, tambahkan akun baru
        },

        // Tambahkan data pets
        addPet: (state, action) => {
            const { currentUser } = state;
          
            // Mengecek apakah ada pengguna yang sedang login
            if (!currentUser) {
              throw new Error('Kamu Harus Login Dahulu!');
            }
          
            state.pets.push({ ...action.payload, addedBy: currentUser.username }); // Tambahkan data pets berdasarkan usernya
        },


        updatePet: (state, action) => {
            const { id, ...updatedFields } = action.payload;
            const petIndex = state.pets.findIndex((pet) => pet.id === id);

            if (petIndex === -1) {
                throw new Error('Pet Tidak Ditemukan!');
            }

            // Hanya izinkan update jika pengguna adalah yang menambahkan pet
            if (state.pets[petIndex].addedBy !== state.currentUser.username) {
                throw new Error('Kamu Hanya Bisa Update Pet Yang Kamu Tambahkan!');
            }

            // Perbarui data pet
            state.pets[petIndex] = { ...state.pets[petIndex], ...updatedFields };
        },

        // Delete pet
        deletePet: (state, action) => {
            const { currentUser } = state;
    
            if (!currentUser || currentUser.role !== 'admin') {
            throw new Error('Hanya Admin Yang Berhak Menghapus Data Pet!');
            } // jika pengguna bukan admin, bilang error karna ga bisa hapus pet
    
            // Hapus pet berdasarkan ID
            state.pets = state.pets.filter((pet) => pet.id !== action.payload); // menghapus berdasarkan id
        },

        // Delete account
        adoptPet: (state, action) => {
            const { id } = action.payload;
            const petIndex = state.pets.findIndex((pet) => pet.id === id);
      
            if (petIndex !== -1) {
              state.pets[petIndex].isAdopted = true; // Tandai sebagai diadopsi
            } else {
              throw new Error('Pet Tidak Ditemukan!');
            }
        },


    },
});

export const {
    login,
    logout,
    createAccount,
    addPet,
    updatePet,
    deletePet,
    adoptPet
} = userSlice.actions;

export default userSlice.reducer;