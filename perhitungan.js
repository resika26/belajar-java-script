// Data awal: Daftar nama pengguna
const paraPengguna = ["andi", "budi", "cici", "dani"];

// Menggunakan .map() untuk menambahkan prefix "Pengguna: " ke setiap nama
const pengggunaKapital = paraPengguna.map((nama) => {
  return nama.toUpperCase();
});

// Menampilkan hasil
console.log("Nama Asli:", paraPengguna);
console.log("Nama Kapital:", pengggunaKapital);