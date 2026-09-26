// Data awal: Daftar harga belanjaan
const nilaiUjian = [80, 90, 75, 85];

// Menggunakan .reduce() untuk menghitung total belanjaan
const totalNilai = nilaiUjian.reduce((total, nilai) => {
  return total + nilai;
}, 0); // angka 0 di sini adalah nilai awal dari 'total'

console.log("Daftar Nilai Ujian:", nilaiUjian);
console.log("Total Nilai: ", totalNilai);