# Data Penduduk

## Run

```bash
node index.js
```

## input

Open file `index.js` and update line this

```js
const pop01 = new Population(
  "0001",
  "Jution Candra Kirana",
  "Laki-laki",
  null,
  "1999-12-22",
  "Natar",
  "18",
  "09",
  "05"
);
```

## Ouput

```bash
Proses pembuatan data penduduk
------------------------------------------
Data Penduduk:
ID: 0001
Nama Lengkap: Jution Candra Kirana
NIK: 1809052212990001
Tempat, Tanggal Lahir: Natar, 22 12 1999
------------------------------------------
Proses pengambilan data penduduk
[
  Population {
    id: '0001',
    name: 'Jution Candra Kirana',
    gender: 'Laki-laki',
    nik: '1809052212990001',
    birthDate: '1999-12-22',
    placeOfBirth: 'Natar',
    provinceId: '18',
    cityId: '09',
    districtId: '05'
  }
]
------------------------------------------
Proses pengambilan data penduduk dengan NIK 1809050703950001
NIK 1809050703950001 tidak ditemukan!
------------------------------------------
```
