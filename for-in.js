function forIn() {
  var mahasiswa = {
    nama: "Angga",
    umur: 23,
    jurusan: "Sistem Informasi",
    semester: 8
  };
  for (var x in mahasiswa) {
    console.log(mahasiswa[x]);
  }
}

forIn();
