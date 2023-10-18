// function Mobil(nama, bensin) {
//   this.nama = nama;
//   this.bensin = bensin;
// }

// Mobil.prototype.IsiBensin = function (liter) {
//   this.bensin += liter;
//   return `halo mobil ${this.nama}, isi bensin dulu ya!`;
// };

// Mobil.prototype.jalan = function (km) {
//   this.bensin -= km;
//   return `halo mobil ${this.nama}, selamat jalan-jalan!`;
// };

// let jeep = new Mobil("Jeep", 10);

class Mobil {
  constructor(nama, bensin) {
    this.nama = nama;
    this.bensin = bensin;
  }

  IsiBensin(liter) {
    this.bensin += liter;
    return `halo mobil ${this.nama}, isi bensin dulu ya!`;
  }

  jalan(km) {
    this.bensin -= km;
    return `halo mobil ${this.nama}, selamat jalan-jalan!`;
  }
}
let jeep = new Mobil("Jeep", 10);
