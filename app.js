// 1. Menyiapkan deretan angka (Array)
const namaBuah = ["jambu", "pisang", "apel", "durian", "semangka"];

// 2. Mengasumsikan angka pertama sebagai nilai terendah awal
let kataTerpendek = namaBuah[0];

// 3. Melakukan perulangan untuk memeriksa setiap elemen
for (let i = 1; i < namaBuah.length; i++) {
  // 4. Memeriksa apakah angka saat ini lebih kecil dari kataTerpendek
  if (namaBuah[i] < kataTerpendek) {
    // Jika ya, perbarui nilaiTerendah
    kataTerpendek = namaBuah[i];
  }
}

// 5. Menampilkan hasil
console.log("Buah dengan nama terpendek adalah:", kataTerpendek);