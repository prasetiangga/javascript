function tugasDelapan() {
  var kelas = {
    mataKuliah: "Database System",
    kodeDosen: "D2807",
    jumlahMahasiswa: 40,
    jamKuliah: "13.00"
  };
  console.log("Kelas", kelas);
  kelas.jamKuliah = "15.00";
  console.log("Kelas Pengganti", kelas);
}

tugasDelapan();
