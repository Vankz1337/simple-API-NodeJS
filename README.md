# API sederhana dengan Node.js

Proyek kecil ini dibuat untuk belajar cara kerja API di Node.js menggunakan module `http` bawaan, tanpa framework tambahan.

## Menjalankan

Pastikan Node.js sudah terpasang, lalu buka terminal di folder proyek dan jalankan:

```bash
node api.js
```

Server berjalan di port `3000` secara lokal.

## Mencoba endpoint

Buka alamat berikut di browser:

```text
http://localhost:3000/api?username=vankz&password=123
```

Kalau request-nya sesuai, server akan mengirim respons JSON seperti ini:

```json
{"username":"vankz","password":"123"}
```

Endpoint ini hanya menerima request `GET` ke `/api` dengan parameter `username` dan `password`. Kalau alamat atau parameternya tidak sesuai, server mengirim respons 404.

## Yang dipelajari

- Membuat server HTTP dengan module bawaan Node.js.
- Membaca alamat dan parameter dari URL.
- Mengirim status HTTP dan respons JSON.
- Menggunakan `process.env.PORT` agar port bisa diatur oleh layanan hosting.

Contoh ini hanya untuk latihan. Jangan gunakan password sungguhan di URL, karena URL bisa tersimpan di riwayat browser atau log server.
