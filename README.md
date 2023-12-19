# cdp-mock-test

## Skill Metric & Delivery

- DMembiasakan dan mempersiapkan diri menghadapi salah satu jenis technical test (take home test - case study)
- Melatih diri mempresentasikan hasil kerja melalui mocktest presentation
- Menguji kemampuan yang telah dipelajari selama di bootcamp
- Menguji kemampuan manajemen waktu dalam mengerjakan task yang relatif singkat
- Menambahkan koleksi portofolio
- Membuka peluang untuk dijadikan project experience

## Criteria

#### Mock Technical Test
 - Kemampuan mengerjakan suatu task dalam waktu singkat (terkumpul tepat waktu)
 - Kemampuan membaca dan mengerjakan task sesuai dengan instruksi yang diberikan secara menyeluruh (kesesuaian tugas yang dikumpulkan denagn brief)
 - Originalitas hasil pekerjaan mocktest
 - Kemampuan implementasi skill teknis sesuai role masing-masing
 - Penataan dokumen

### Mock Presentation
 - Kelengkapan informasi yang disampaikan
 - kejelasan penyampaian informasi
 - Kemampuan menjelaskan langkah-langkah pengerjaan mock test dan alasan dibalik pemilihan solusi atas masalah yang diberikan

## Pengujian Endpoint di postman

### register account

- [x] POST http://localhost:8080/auth/register
      Contoh:
      {
      "name": "nama",
      "email": "email@mail.com",
      "password": "pass",
      "birthdate": "2004-07-11",
      "age": "19"
      }

### login

- [x] POST http://localhost:8080/auth/login
      Contoh:
      {
      "email": "email@mail.com",
      "password": "pass"
      }

### forgot password

- [x] POST http://localhost:8080/auth/forgotPassword
      Contoh:
      {
      "email": "email@mail.com"
      }

### reset password

- [x] PUT http://localhost:8080/auth/resetPassword?token=
      Contoh:
      {
      "newPassword": "password"
      }

## Deploy in Railway

### register account

- [x] POST https://challenge-chapter-7-production.up.railway.app/auth/register
      Contoh:
      {
      "name": "nama",
      "email": "email@mail.com",
      "password": "pass",
      "birthdate": "2004-07-11",
      "age": "19"
      }

### login

- [x] POST https://challenge-chapter-7-production.up.railway.app/auth/login
      Contoh:
      {
      "email": "email@mail.com",
      "password": "pass"
      }

### forgot password

- [x] POST https://challenge-chapter-7-production.up.railway.app/auth/forgotPassword
      Contoh:
      {
      "email": "email@mail.com"
      }

### reset password

- [x] PUT https://challenge-chapter-7-production.up.railway.app/auth/resetPassword?token=
      Contoh:
      {
      "newPassword": "password"
      }