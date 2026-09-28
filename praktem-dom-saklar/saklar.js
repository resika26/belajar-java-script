// 1. TARGET: Ambil elemen body, h1, dan button dari HTML
const layarBody = document.body;
const teksStatus = document.getElementById("statusTeks");
const tombol = document.getElementById("tombolMode");

// 2. TRIGGER & ACTION
tombol.addEventListener("click", () => {
    teksStatus.style.color = "white";
    layarBody.style.backgroundColor = "black";
    teksStatus.innerText = "Mode Malam (Dark Mode)";
    tombol.innerText = "selesai";
});