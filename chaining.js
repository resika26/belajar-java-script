// Data awal: Angka acak
const daftarKata = ["kucing", "ayam", "kelinci", "sapi", "kambing"];

// Menggabungkan filter -> map -> reduce
const hasilAkhir = daftarKata
  .filter((kata) => kata.length > 4)  // 1. Filter: Ambil [kucing, kelinci, kambing]
  .map((kata) => kata.toUpperCase())      // 2. Map: Ubah menjadi kapital -> [KUCING, KELINCI, KAMBING]

console.log("Kata Asli:", daftarKata);
console.log("Hasil Akhir Chaining:", hasilAkhir);