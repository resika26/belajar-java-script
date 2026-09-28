// 1. Ambil elemen HTML berdasarkan id nya
const judulWeb = document.getElementById("judul");
const tombol = document.getElementById("tombolUbah");

// 2. Tambahkan aksi (Event Listener) saat tombol diklik
tombol.addEventListener("click", () => {
  // Ubah isi teks judul
  judulWeb.innerText = "🎉 Hore! Teks Berhasil Diubah Lewat JS!";
  
  // Ubah warna teks judul
  judulWeb.style.color = "dodgerblue";

tombol.style.backgroundColor = "green";
tombol.style.color = "white";
});