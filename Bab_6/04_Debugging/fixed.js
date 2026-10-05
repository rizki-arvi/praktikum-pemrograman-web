const namaMahasiswa = "Raka";
console.log("Nama mahasiswa:", namaMahasiswa);

const nilaiTugas = Number("80");
const nilaiUts = Number("75");
const total = nilaiTugas + nilaiUts;
console.log("Total nilai:", total);

function hitungRataRata(a, b) {
  return (a + b) / 2;
}

console.log("Rata-rata:", hitungRataRata(nilaiTugas, nilaiUts));
