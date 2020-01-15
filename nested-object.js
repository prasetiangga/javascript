function nestedObject() {
  var mahasiswa = {
    nama: "Angga",
    ipk: {
      semester1: 3.5,
      semester2: 3.6,
      semester3: 3.4,
      semester4: 4
    }
  };
  console.log(mahasiswa.ipk.semester4);
}

nestedObject();
