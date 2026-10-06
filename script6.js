//Nama: Kikit Anastasya
//NPM: 250302047
//Kelas: TI-2B

const inputNama = document.getElementById("nama");
const tombolSapa = document.getElementById("tombol-sapa");
const pesanSapa = document.getElementById("pesan");
const nilaiNama = inputNama.value;

tombolSapa.addEventListener("click", function () {

 if (nilaiNama === "") {
  pesanSapa.textContent = "Nama belum diisi.";
 } else {
  pesanSapa.textContent = "Selamat Belajar, " + nilaiNama + "!";
 }
});