---
name: full-stack-web-developer
description: Mengintegrasikan dan mengembangkan aplikasi web Wordsearch dari sisi frontend, backend, API, struktur proyek, state, dan alur data. Gunakan untuk implementasi fitur lintas lapisan; periksa stack proyek terlebih dahulu dan jangan mengganti teknologi tanpa alasan serta persetujuan.
---

# Full-Stack Web Developer

## Misi

Membangun aplikasi Wordsearch Informatika sebagai web application yang modular, dapat dipelihara, dan sesuai kebutuhan penggunaan di kelas dengan permainan individual.

## Gunakan Skill Ini Ketika

- Mengimplementasikan fitur yang melibatkan lebih dari satu lapisan aplikasi.
- Menghubungkan UI dengan logika permainan, penyimpanan, API, atau autentikasi.
- Menata struktur proyek dan kontrak data antar modul.
- Memperbaiki integrasi frontend-backend.
- Mengimplementasikan alur konfigurasi dan hasil permainan.

## Aturan Sebelum Implementasi

1. Periksa repository, README, package/config files, struktur folder, dan pola kode.
2. Identifikasi framework, bahasa, package manager, serta cara menjalankan proyek.
3. Jangan berasumsi proyek kosong.
4. Jangan mengganti framework atau merombak arsitektur hanya karena preferensi pribadi.
5. Identifikasi apakah fitur membutuhkan backend atau cukup berjalan di client.
6. Jelaskan perubahan lintas modul sebelum mengerjakan perubahan besar.

## Prinsip Arsitektur

- Pisahkan UI, domain/game logic, data content, persistence, dan integration layer.
- Gunakan komponen yang dapat digunakan ulang.
- Tetapkan tipe/kontrak data yang jelas.
- Hindari business logic tersebar di komponen presentasi.
- Tangani loading, empty, success, error, dan offline states.
- Validasi data pada boundary aplikasi.
- Jangan duplikasi aturan bisnis antara frontend dan backend tanpa alasan.
- Gunakan konfigurasi environment untuk nilai yang berbeda antar lingkungan.

## Modul Domain yang Diharapkan

Sesuaikan dengan implementasi yang benar-benar diperlukan:

- Wordsearch game engine.
- Kategori dan bank istilah Literasi Digital.
- Game session dan konfigurasi tingkat kesulitan.
- Learning feedback dan Mini Quiz.
- Identitas pemain sesuai kebutuhan privasi.
- Hasil permainan dan asesmen.
- Teacher settings atau pengelolaan konten jika diperlukan.

Jangan memaksakan seluruh modul menjadi layanan terpisah. Untuk aplikasi sederhana, modular monolith atau struktur frontend modular dapat lebih tepat.

## Data Flow

- UI mengirim tindakan pengguna ke domain layer.
- Domain layer memvalidasi aturan permainan.
- Persistence layer menyimpan data bila penyimpanan diperlukan.
- UI menerima hasil yang sudah terstruktur dan menampilkan status.
- Kesalahan teknis dipisahkan dari pesan yang ditampilkan kepada pengguna.

Jangan menaruh secret key di browser. Jangan menganggap data dari client selalu dapat dipercaya.

## State Management

- Tentukan sumber kebenaran untuk status permainan.
- Cegah skor ganda akibat event berulang.
- Tangani refresh atau perpindahan halaman sesuai kebijakan penyimpanan.
- Pisahkan state sementara UI dari data yang perlu disimpan.
- Hindari state duplikat yang dapat saling bertentangan.

## API dan Backend

Bila backend dibutuhkan:

- Rancang endpoint atau action sesuai kebutuhan nyata.
- Validasi input dan otorisasi di server.
- Gunakan respons error yang konsisten.
- Hindari pengiriman data murid yang tidak diperlukan.
- Dokumentasikan kontrak API.
- Terapkan pagination atau pembatasan hasil ketika daftar data dapat bertambah besar.

Jangan menambahkan server, autentikasi, atau database hanya untuk fitur yang bisa dilakukan secara lokal dan aman.

## Integrasi Skill Lain

- Algoritma Wordsearch: `wordsearch-game-engineer`.
- UI/UX: `wordsearch-ui-ux-designer`.
- Konten: `literasi-digital-content-designer`.
- Desain pembelajaran: `instructional-learning-designer`.
- Penilaian: `educational-assessment-engineer`.
- Penggunaan kelas: `classroom-presentation-designer`.
- Database: `database-architect`.
- Keamanan: `application-security-engineer`.
- Offline/PWA: `pwa-offline-engineer`.
- Pengujian: `qa-testing-engineer`.
- Pelaporan: `reporting-analytics-engineer`.
- Deployment: `devops-deployment-engineer`.

## Alur Kerja

1. Periksa implementasi saat ini.
2. Pecah kebutuhan menjadi perubahan kecil.
3. Tentukan kontrak antar modul.
4. Implementasikan dengan pola repository.
5. Tambahkan atau sesuaikan tes.
6. Jalankan lint, typecheck, build, dan tes yang tersedia.
7. Periksa regresi alur permainan utama.
8. Dokumentasikan perubahan, konfigurasi, serta batasan.

## Batas Tanggung Jawab

Skill ini mengintegrasikan aplikasi tetapi tidak menggantikan keahlian khusus untuk validitas materi, algoritma puzzle, penilaian, keamanan, database, atau deployment. Libatkan skill terkait bila tugas menyentuh domain tersebut.

## Kriteria Selesai

- Fitur terintegrasi dengan pola proyek yang sudah ada.
- Kontrak data antar modul konsisten.
- State dan error ditangani.
- Tidak ada secret yang terekspos.
- Tes relevan lulus atau kegagalan terdokumentasi.
- Build berhasil sesuai lingkungan proyek.
