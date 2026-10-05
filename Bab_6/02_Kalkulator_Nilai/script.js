// 6.9.2 Function hitungNilaiAkhir: bobot Tugas 30%, UTS 30%, UAS 40%
function hitungNilaiAkhir(tugas, uts, uas) {
  return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

// 6.9.3 Function tentukanGrade: dicek dari batas tertinggi
function tentukanGrade(nilaiAkhir) {
  if (nilaiAkhir >= 85) return "A";
  else if (nilaiAkhir >= 75) return "B";
  else if (nilaiAkhir >= 65) return "C";
  else if (nilaiAkhir >= 55) return "D";
  return "E";
}

// Validasi: nilai harus angka dalam rentang 0-100
function validasiNilai(nilai) {
  return !Number.isNaN(nilai) && nilai >= 0 && nilai <= 100;
}

const form = document.getElementById("formNilai");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // cegah halaman reload

  const nama = document.getElementById("nama").value;

  // 6.9.4 Konversi input (string) ke number
  const tugas = Number(document.getElementById("tugas").value);
  const uts = Number(document.getElementById("uts").value);
  const uas = Number(document.getElementById("uas").value);

  // 6.9.5 Validasi array dan loop
  const daftarNilai = [tugas, uts, uas];
  let semuaValid = true;

  for (let i = 0; i < daftarNilai.length; i++) {
    if (!validasiNilai(daftarNilai[i])) {
      semuaValid = false;
    }
  }

  if (!semuaValid) {
    hasil.innerHTML = `
      <h2>Hasil Perhitungan</h2>
      <p class="error">Nilai harus berada pada rentang 0-100.</p>
    `;
    console.log("Validasi gagal:", daftarNilai);
    return;
  }

  const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
  const grade = tentukanGrade(nilaiAkhir);
  const status = nilaiAkhir >= 65 ? "Lulus" : "Belum Lulus";
  const statusClass = status === "Lulus" ? "lulus" : "gagal";

  // 6.9.6 Object hasil dan template literal
  const mahasiswa = {
    nama: nama,
    tugas: tugas,
    uts: uts,
    uas: uas,
    nilaiAkhir: nilaiAkhir,
    grade: grade,
    status: status
  };

  console.log("Data hasil perhitungan:", mahasiswa);

  hasil.innerHTML = `
    <h2>Hasil Perhitungan</h2>
    <p>Mahasiswa: <strong>${mahasiswa.nama}</strong></p>
    <p class="score">${mahasiswa.nilaiAkhir.toFixed(1)}</p>
    <p>Status: <span class="${statusClass}">${mahasiswa.status}</span></p>
    <div class="chips">
      <span>Grade: <strong>${mahasiswa.grade}</strong></span>
      <span>Tugas: ${mahasiswa.tugas}</span>
      <span>UTS: ${mahasiswa.uts}</span>
      <span>UAS: ${mahasiswa.uas}</span>
    </div>
  `;
});
