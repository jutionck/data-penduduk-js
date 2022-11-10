export default class Population {
  constructor(
    id,
    name,
    gender,
    nik,
    birthDate,
    placeOfBirth,
    provinceId,
    cityId,
    districtId
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.nik = nik;
    this.birthDate = birthDate;
    this.placeOfBirth = placeOfBirth;
    this.provinceId = provinceId;
    this.cityId = cityId;
    this.districtId = districtId;
  }

  toString() {
    const bodSplit = this.birthDate.split('-');
    const bod = bodSplit[2] + ' ' + bodSplit[1] + ' ' + bodSplit[0];
    return 'Data Penduduk: \n' + 
      'ID: ' + this.id + '\n' +
      'Nama Lengkap: ' + this.name + '\n' +
      'NIK: ' + this.nik + '\n' +
      'Tempat, Tanggal Lahir: ' + this.placeOfBirth + ', ' + bod 
  }
}