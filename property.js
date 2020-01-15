function panggilObjects() {
  var mobil = {
    //mobil{} adalah object
    type: "Sedan", //type adalah property, sedan adalah nilai dari property
    harga: 200000000,
    warna: "Putih",
    tahun: [2001, 2002, 2003, 2004]
  };
  mobil.harga = 100000000;
  console.log(mobil);
  console.log(mobil.warna);
  console.log(mobil.harga);
  console.log(mobil.tahun[0]);
}

panggilObjects();
