console.log("=== JavaScript Fundamental ===");

// let digunakan untuk nilai yang dapat berubah
let namaMahasiswa = "Rizki Arvi Passa";
let nilaiUts = 82;
let nilaiUas = 90;

// const digunakan untuk nilai tetap
const bobotUts = 0.4;
const bobotUas = 0.6;

// operator aritmatika
let nilaiAkhir = (nilaiUts * bobotUts) + (nilaiUas * bobotUas);
console.log("Nama:", namaMahasiswa);
console.log("Nilai akhir:", nilaiAkhir);

// conditional
if (nilaiAkhir >= 85) {
  console.log("Predikat: Sangat Baik");
} else if (nilaiAkhir >= 70) {
  console.log("Predikat: Baik");
} else {
  console.log("Predikat: Perlu Remedial");
}

// array dan loop
const daftarNilai = [80, 75, 90, 88];
let total = 0;

for (let i = 0; i < daftarNilai.length; i++) {
  total += daftarNilai[i];
}

console.log("Rata-rata:", total / daftarNilai.length);

// function
function hitungLuasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

console.log("Luas:", hitungLuasPersegiPanjang(10, 5));

// object
const mahasiswa = {
  nim: "A11.2026.001",
  nama: "Rizki Arvi Passa",
  prodi: "Sistem Informasi",
  aktif: true
};

console.log("Data mahasiswa:", mahasiswa);
