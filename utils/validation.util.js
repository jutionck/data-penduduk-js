export function nikValidation(nik) {
  return nik.length <= 16 && nik.length >= 16;
}

export function isExist(data) {
  return data.length !== 0;
}

export function isOfficeOpen(day, hour) {
  if (day === "sabtu" || day === "minggu") {
    return "Layanan Pembuatan KTP hanya Senin-Jumat";
  } else {
    if (hour < 8 || hour > 14) {
      return "Layanan Pembuatan KTP Sudah tutup";
    } else {
      return null;
    }
  }
}

export function isGenderValid(gender) {
  return (
    gender.toLowerCase() === "laki-laki" || gender.toLowerCase() === "perempuan"
  );
}

export function require(population) {
  return (
    population.id ||
    population.name ||
    population.gender ||
    population.birthDate ||
    population.placeOfBirth ||
    population.provinceId ||
    population.cityId ||
    population.districtId
  );
}
