// Latihan Mandiri: Kalkulator Total Belanja dan Diskon
// Konsep: let/const, operator, conditional, loop, function, array of object, console.log

const keranjang = [
  { nama: "Buku Tulis", harga: 15000, jumlah: 4 },
  { nama: "Pulpen", harga: 4000, jumlah: 10 }
];

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// Loop: menjumlahkan harga x jumlah setiap barang
function hitungSubtotal(daftarBarang) {
  let subtotal = 0;
  for (let i = 0; i < daftarBarang.length; i++) {
    subtotal += daftarBarang[i].harga * daftarBarang[i].jumlah;
  }
  return subtotal;
}

// Conditional: diskon bertingkat berdasarkan subtotal
function tentukanDiskon(subtotal) {
  if (subtotal >= 500000) return 15;
  else if (subtotal >= 250000) return 10;
  else if (subtotal >= 100000) return 5;
  return 0;
}

function tampilkan() {
  const hasil = document.getElementById("hasil");

  if (keranjang.length === 0) {
    hasil.innerHTML = `<h2>Keranjang</h2><p class="kosong">Keranjang masih kosong.</p>`;
    console.log("Keranjang kosong");
    return;
  }

  const subtotal = hitungSubtotal(keranjang);
  const persen = tentukanDiskon(subtotal);
  const potongan = subtotal * persen / 100;
  const totalBayar = subtotal - potongan;

  let baris = "";
  for (let i = 0; i < keranjang.length; i++) {
    const b = keranjang[i];
    baris += `
      <tr>
        <td>${b.nama}</td>
        <td class="num">${b.jumlah}</td>
        <td class="num">${formatRupiah(b.harga * b.jumlah)}</td>
      </tr>`;
  }

  hasil.innerHTML = `
    <h2>Keranjang Belanja</h2>
    <table>
      <thead><tr><th>Barang</th><th class="num">Qty</th><th class="num">Harga</th></tr></thead>
      <tbody>${baris}</tbody>
    </table>
    <div class="baris"><span>Subtotal</span><span>${formatRupiah(subtotal)}</span></div>
    <div class="baris"><span>Diskon (${persen}%)</span><span>- ${formatRupiah(potongan)}</span></div>
    <div class="baris total"><span>Total Bayar</span><span>${formatRupiah(totalBayar)}</span></div>
  `;

  // console.log untuk debugging
  console.log("Isi keranjang:", keranjang);
  console.log("Subtotal:", subtotal, "| Diskon:", persen + "%");
  console.log("Total bayar:", totalBayar);
}

document.getElementById("formBarang").addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("namaBarang").value.trim();
  const harga = Number(document.getElementById("harga").value); // string -> number
  const jumlah = Number(document.getElementById("jumlah").value);

  if (nama === "" || harga < 0 || jumlah < 1) {
    console.log("Input tidak valid:", { nama, harga, jumlah });
    return;
  }

  keranjang.push({ nama: nama, harga: harga, jumlah: jumlah });
  event.target.reset();
  document.getElementById("harga").value = 10000;
  document.getElementById("jumlah").value = 1;
  tampilkan();
});

document.getElementById("btnReset").addEventListener("click", function () {
  keranjang.length = 0;
  tampilkan();
});

tampilkan();
