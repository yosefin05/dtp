let Siswa = {
  nama: "Yosi",
  kelas: "XI SIJA 1",

  panggil: function () {
    console.log("panggil");
    console.log(`Halo, nama saya ${this.nama}, saya kelas ${this.kelas}`);
  },
};

Siswa.panggil();

let kelas = [
  {
    nama: "Cia",
    kelas: "XI SIJA 2",
  },
  {
    nama: "Kayla",
    kelas: "XI SIJA 2",
  },
];

kelas.forEach(function (Siswa) {
  console.log(Siswa.nama);
});
