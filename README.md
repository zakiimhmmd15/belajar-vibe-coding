# Backend Project (Bun + ElysiaJS + Drizzle ORM + MySQL)

Ini adalah scaffolding proyek backend minimalis berbasis Bun.

## Persyaratan
- [Bun](https://bun.sh) (v1.3 atau lebih baru)
- Server MySQL aktif

## Setup Proyek

1. **Instalasi Dependensi**
   ```bash
   bun install
   ```

2. **Konfigurasi Environment**
   Salin berkas `.env.example` ke `.env` dan sesuaikan URL koneksi database MySQL:
   ```bash
   # Di windows (PowerShell):
   Copy-Item .env.example .env
   ```

3. **Migrasi Database**
   Generate berkas migrasi SQL berdasarkan skema Drizzle:
   ```bash
   bun run db:generate
   ```
   Apply migrasi ke server MySQL (pastikan database yang dituju sudah dibuat di MySQL):
   ```bash
   bun run db:migrate
   ```

4. **Menjalankan Server**
   Jalankan server dalam mode pengembangan dengan hot reload:
   ```bash
   bun run dev
   ```
   Server akan berjalan secara default pada http://localhost:3000

## Endpoint yang Tersedia
- `GET /` - Health check endpoint ("Hello World").
- `GET /users` - Mengambil list user dari database MySQL via Drizzle ORM.
