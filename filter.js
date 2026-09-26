// Data awal: Daftar nama pengguna
const daftarBuah = ["jambu", "pisang", "apel", "durian", "semangka"];

// Menggunakan .map() untuk menambahkan prefix "Pengguna: " ke setiap nama
const buahPanjang = daftarBuah.filter((buah) => {
  return buah.length > 5; // Misalnya, hanya buah yang memiliki nama lebih dari 5 karakter
});

// Menampilkan hasil
console.log("Buah Asli:", daftarBuah);
console.log("Buah > 5 huruf:", buahPanjang);