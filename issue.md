# Setup Proyek ElysiaJS, Drizzle, dan MySQL dengan Bun

Tugas ini adalah untuk menginisialisasi proyek backend baru menggunakan Bun. Proyek ini akan menggunakan ElysiaJS sebagai framework web, Drizzle sebagai ORM, dan MySQL sebagai database.

## Spesifikasi
- **Runtime**: Bun
- **Framework Web**: ElysiaJS
- **ORM**: Drizzle ORM
- **Database**: MySQL

## Instruksi (High-Level)

1. **Inisialisasi Proyek Bun**
   - Buat proyek Bun baru di direktori root saat ini.
   - Pastikan file konfigurasi (seperti `package.json` dan `tsconfig.json`) telah disiapkan untuk TypeScript.

2. **Setup ElysiaJS**
   - Instal dependensi `elysia`.
   - Setup server dasar Elysia yang me-listen pada port tertentu (misalnya 3000).
   - Buat sebuah health check endpoint (misalnya `GET /`) yang mengembalikan status sukses.

3. **Setup Drizzle ORM & Database MySQL**
   - Instal dependensi untuk `drizzle-orm`, driver MySQL (misal: `mysql2`), serta `drizzle-kit` untuk keperluan migrasi.
   - Buat file konfigurasi koneksi Drizzle ke database MySQL (gunakan variabel environment untuk kredensial).
   - Definisikan sebuah skema tabel sederhana (misal tabel `users` berisi `id` dan `name`).
   - Siapkan script di dalam `package.json` untuk men-generate dan meng-apply migrasi Drizzle.

4. **Koneksi dan Integrasi Endpoint**
   - Hubungkan instance Drizzle ORM dengan ElysiaJS.
   - Buat contoh endpoint API untuk mengambil list data (misal `GET /users`) menggunakan Drizzle.

5. **Penyelesaian & Standarisasi**
   - Sediakan file `.env.example` dengan variabel untuk koneksi database.
   - Buat `README.md` singkat yang menjelaskan cara instalasi (`bun install`), cara menjalankan migrasi, dan cara menjalankan server (`bun run dev`).
