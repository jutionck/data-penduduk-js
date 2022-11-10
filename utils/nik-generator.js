import { isGenderValid } from "./validation.util.js";

export function generateNik(population) {
  /**
   * 1. NIK tidak lebih dan kurang dari 16 digit.
   * 2. 2 digit pertama merupakan kode provinsi.
   * 3. 2 digit berikutnya merupakan kode kab/kota.
   * 4. 2 digit berikutnya merupakan kecamatan.
   * 5. 6 digit berikutnya terdiri dari tanggal-bulan-tahun dimana jika gender perempuan maka tanggal ditambahkan 40 e.g tanggal 4 jadi 4 + 40 = 44 gender pria tetap.
   * 6. 4 digit terakhir adalah urutan (random/increment) misalnya  0001, 0002, 0003 dst.
   */
  const gender = isGenderValid(population.gender);
  const birthDate = population.birthDate.split('-'); // [1999, 02, 02]
  let bod = '';
  const lastFourDigits = Math.floor(Math.random() * 10);
  if (gender === 'perempuan') {
    bod = `${birthDate[2] + 44}${birthDate[1]}${birthDate[0].slice(2,4)}`;
  } else {
    bod = `${birthDate[2]}${birthDate[1]}${birthDate[0].slice(2,4)}`;
  }
  return population.provinceId + population.cityId + population.districtId + bod + population.id;
}