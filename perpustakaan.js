let buku = [
  { judul: "Hujan", penulis: "Tere Liye" },
  { judul: "Sepucuk Angpau Merah", penulis: "Tere Liye" },
  { judul: "Insecurity", penulis: "Tere Liye" },
];

//menambah bukubaru
function tambahBuku(judul, penulis) {
  buku.push({ judul: judul, penulis: penulis });
  console.log(`Buku "${judul}" dari penulis "${penulis}" berhasil ditambahkan`);
}

//mengedit buku
function editBuku(pencarian, judulBaru, penulisBaru) {
  // cari judul atau penulis
  const bukuBaru = buku.find(
    (b) => b.judul === pencarian || b.penulis === pencarian
  );

  if (bukuBaru) {
    //edit buku
    bukuBaru.judul = judulBaru || bukuBaru.judul;
    bukuBaru.penulis = penulisBaru || bukuBaru.penulis;
    console.log(
      `Buku berhasil diedit menjadi "${bukuBaru.judul}" oleh ${bukuBaru.penulis}.`
    );
  } else {
    console.log(
      `Buku dengan judul atau penulis "${pencarian}" tidak ditemukan.`
    );
  }
}
// hapus buku
function hapusBuku(pencarian) {
  const index = buku.findIndex(
    (b) => b.judul === pencarian || b.penulis === pencarian
  );
  if (index !== -1) {
    const bukuDihapus = buku[index]; // Simpan buku yang akan dihapus untuk log
    buku.splice(index, 1);
    console.log(
      `Buku "${bukuDihapus.judul}" dari penulis "${bukuDihapus.penulis}" berhasil dihapus.`
    );
  } else {
    console.log(
      `Buku dengan judul atau penulis "${pencarian}" tidak ditemukan.`
    );
  }
}

//menampilkan daftar buku
function tampilkanSemuaBuku() {
  console.log("Daftar Buku di Perpustakaan:");
  buku.forEach((b, index) => {
    console.log(`${index + 1}. Judul: ${b.judul}, Penulis: ${b.penulis}`);
  });
}

// Contoh penggunaan
tampilkanSemuaBuku();
tambahBuku("Pulang", "Tere Liye");
editBuku("Insecurity", "Loneliness", "Alvi Syahrin"); //edit berdasarkan judul
editBuku("Tere Liye", "Matahari", "Tere Liye"); //edit berdasarkan penulis
hapusBuku("Hujan");
hapusBuku("Alvi Syahrin");
tampilkanSemuaBuku();
