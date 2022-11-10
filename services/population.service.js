import { generateNik } from "../utils/nik-generator.js";
import {
  isExist,
  isOfficeOpen,
  nikValidation,
  require,
} from "../utils/validation.util.js";

export default class PopulationService {
  static day = "Jumat";
  static hour = 8;

  constructor() {
    this.population = [];
  }

  register(population) {
    console.log('Proses pembuatan data penduduk');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isOpenGate = isOfficeOpen(PopulationService.day, PopulationService.hour);
        if (isOpenGate) return reject(isOpenGate);

        if (!require(population)) return reject("Data tidak boleh kosong");

        const nik = generateNik(population);
        const validNik = nikValidation(nik);
        if (!validNik)
          return reject("NIK tidak lebih dan kurang dari 16 digit");

        population.nik = nik;
        if (this.isDataNikExist(population)) return reject(`NIK ${nik} sudah terdaftar disistem!`);

        this.population.push(population);
        return resolve(population)
      }, 1000);
    });
  }

  getAll() {
    console.log('Proses pengambilan data penduduk');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        isExist(this.population) ? resolve(this.population) : reject('Data kosong...')
      }, 1000);
    })
  }

  getByNIK(nik) {
    console.log('Proses pengambilan data penduduk dengan NIK ' + nik);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const population = this.population.find((p) => p.nik === nik);
        if (population) resolve(population)
        else reject(`NIK ${nik} tidak ditemukan!`)
      }, 1000);
    })
  }

  isDataNikExist(population) {
    return this.population.find((p) => p.nik === population.nik);
  }
}
