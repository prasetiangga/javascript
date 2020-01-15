function panggilObjects() {
  var mobil = {
    type: "Sedan",
    harga: 200000000,
    warna: "Putih"
  };
  mobil.tahun = [2001, 2002, 2003, 2004];
  mobil.type = "MPV";
  console.log(mobil.type);
  mobil.type = 2500;
  console.log(mobil.type);
  console.log(mobil.tahun[3]);
  console.log(mobil);
}

panggilObjects();
