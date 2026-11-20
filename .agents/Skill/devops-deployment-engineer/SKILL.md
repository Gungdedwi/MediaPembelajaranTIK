---
name: devops-deployment-engineer
description: Menyiapkan build, konfigurasi lingkungan, hosting, CI/CD, domain, HTTPS, dan pemantauan rilis aplikasi web Wordsearch Informatika. Gunakan saat menyiapkan atau memperbaiki deployment; jangan mengganti provider atau merusak lingkungan produksi tanpa persetujuan.
---

# DevOps Deployment Engineer

## Misi

Membuat aplikasi web dapat dibangun dan dirilis secara konsisten ke hosting yang dipilih, dengan konfigurasi aman dan proses rollback yang dipahami.

## Gunakan Skill Ini Ketika

- Menyiapkan hosting atau deployment.
- Mengonfigurasi build dan environment variables.
- Membuat pipeline CI/CD.
- Menghubungkan domain dan HTTPS.
- Menyelesaikan kegagalan build/deploy.
- Menyiapkan log dan pemeriksaan kesehatan aplikasi.

## Pemeriksaan Awal

1. Periksa framework dan perintah build yang benar-benar digunakan proyek.
2. Baca dokumentasi hosting/provider yang dipilih.
3. Identifikasi output build dan kebutuhan runtime.
4. Pisahkan konfigurasi development, staging, dan production.
5. Identifikasi seluruh environment variable yang diperlukan.
6. Jangan mengasumsikan provider tertentu sebelum dipilih pengguna.

## Build dan CI

- Gunakan lockfile dan package manager proyek.
- Jalankan lint, typecheck, unit/integration tests yang tersedia.
- Pastikan build dapat direproduksi.
- Jangan menyimpan secret di repository.
- Gunakan pipeline yang sederhana dan sesuai ukuran proyek.
- Berikan kegagalan pipeline yang jelas.

## Deployment

- Gunakan HTTPS untuk aplikasi produksi.
- Konfigurasikan environment variables melalui fasilitas aman provider.
- Pastikan konfigurasi routing fallback cocok untuk SPA bila digunakan.
- Verifikasi aset statis dan path base.
- Periksa konfigurasi cache agar deployment baru tidak tertahan aset lama.
- Jangan mengunggah file lokal, database, atau backup rahasia ke repository publik.

## Rilis dan Rollback

- Catat versi atau commit yang dirilis.
- Uji URL production setelah deploy.
- Periksa alur utama aplikasi.
- Sediakan prosedur rollback yang sesuai provider.
- Jangan melakukan perubahan database destruktif saat deploy tanpa rencana migrasi dan backup.
- Hindari deployment otomatis langsung ke production jika quality gate belum tersedia.

## Monitoring Dasar

- Periksa status build dan deployment.
- Pantau error runtime yang tersedia.
- Jangan mencatat password, token, atau data pribadi murid ke log.
- Dokumentasikan cara memeriksa status aplikasi.
- Buat prosedur penanganan bila aplikasi tidak dapat diakses.

## Alur Kerja

1. Periksa struktur proyek dan provider yang digunakan.
2. Tentukan target environment.
3. Siapkan konfigurasi build dan environment.
4. Jalankan pemeriksaan sebelum rilis.
5. Deploy ke staging bila tersedia.
6. Verifikasi fungsi utama.
7. Deploy production setelah kriteria terpenuhi.
8. Catat versi, hasil pemeriksaan, dan cara rollback.

## Batas Tanggung Jawab

Skill ini menangani distribusi dan operasi aplikasi. Skill ini tidak menentukan framework, tidak menulis fitur pembelajaran, dan tidak mengubah skema database tanpa koordinasi dengan developer/database architect.

## Kriteria Selesai

- Build production berhasil.
- Secret tidak masuk ke repository atau bundle client.
- HTTPS dan routing bekerja.
- Aplikasi dapat dibuka pada URL target.
- Alur permainan utama diverifikasi setelah rilis.
- Cara rollback dan keterbatasan deployment terdokumentasi.
