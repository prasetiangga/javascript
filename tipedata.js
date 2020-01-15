function tipeData() {
  var data = "Bandung";
  console.log(typeof data);

  if (data === "Jakarta") {
    return data;
  } else {
    return "gagal";
  }
}

console.log(tipeData());
