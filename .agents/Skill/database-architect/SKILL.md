---
name: database-architect
description: Merancang skema data, relasi, migrasi, kebijakan akses, dan strategi penyimpanan untuk aplikasi Wordsearch Informatika bila persistence terpusat memang diperlukan. Gunakan saat mengerjakan database atau model data; jangan menambahkan database tanpa kebutuhan produk.
---

# Database Architect

## Misi

Merancang penyimpanan data yang sederhana, aman, konsisten, dan sesuai kebutuhan aplikasi permainan Wordsearch. Database bukan prasyarat untuk menjalankan puzzle inti; gunakan penyimpanan lokal jika sudah cukup.

## Kapan Skill Ini Digunakan

- Aplikasi perlu menyimpan konten yang dikelola guru.
- Hasil permainan perlu dikumpulkan lintas perangkat.
- Dibutuhkan data kelas, sesi, atau identitas pengguna.
- Dibutuhkan histori permainan atau laporan terpusat.
- Perlu membuat atau mengubah skema, migrasi, indeks, atau aturan akses.

## Keputusan Sebelum Membuat Database

Jawab terlebih dahulu:

1. Data apa yang perlu bertahan setelah browser ditutup?
2. Apakah data perlu dibagikan antarperangkat?
3. Siapa yang membuat, membaca, mengubah, dan menghapus data?
4. Berapa lama data disimpan?
5. Apakah data pribadi murid benar-benar dibutuhkan?

Jika kebutuhan tersebut belum ada, jangan memaksakan database online.

## Entitas yang Mungkin Diperlukan

Sesuaikan dengan kebutuhan aktual. Kandidat entitas:

- `categories`: kategori materi.
- `terms`: istilah, petunjuk, definisi, dan penjelasan.
- `quizzes`: pertanyaan evaluasi.
- `quiz_options`: pilihan jawaban jika dipisahkan.
- `game_sessions`: sesi permainan.
- `players` atau identitas pseudonim: hanya jika diperlukan.
- `game_results`: hasil sesi individual.
- `class_groups`: kelas jika pengelolaan kelas dibutuhkan.
- `teachers`: pengelola konten bila autentikasi guru dibutuhkan.

Entitas tersebut bukan daftar wajib. Hindari tabel yang tidak memiliki kebutuhan nyata.

## Prinsip Skema

- Gunakan primary key yang stabil.
- Tetapkan foreign key dan aturan penghapusan secara sadar.
- Gunakan tipe data yang sesuai.
- Tambahkan constraint untuk data yang harus unik atau valid.
- Simpan istilah asli terpisah dari bentuk normalisasi untuk grid.
- Gunakan timestamp yang konsisten dan dokumentasikan zona waktu.
- Hindari penyimpanan hasil turunan yang bisa dihitung, kecuali ada alasan performa atau audit.
- Sediakan migrasi yang dapat ditinjau dan diulang sesuai tooling.

## Keamanan dan Privasi Data

- Terapkan prinsip least privilege.
- Batasi akses berdasarkan peran dan kepemilikan data.
- Jika menggunakan Supabase, evaluasi Row Level Security untuk seluruh tabel yang dapat diakses client.
- Jangan mengandalkan penyembunyian tombol sebagai kontrol akses.
- Jangan menyimpan password dalam teks biasa.
- Jangan menyimpan data pribadi murid yang tidak diperlukan.
- Tentukan kebijakan retensi dan penghapusan data.
- Uji akses lintas pengguna agar data satu murid/kelas tidak bocor ke pihak lain.

## Offline dan Sinkronisasi

Jika aplikasi mendukung penggunaan offline:

- Tentukan data mana yang dapat dicache secara lokal.
- Pisahkan data statis (materi) dari hasil permainan.
- Tetapkan strategi sinkronisasi dan penanganan konflik.
- Jangan menganggap setiap hasil lokal sudah berhasil tersimpan di server.
- Berikan status sinkronisasi yang jelas kepada pengguna.
- Hindari duplikasi hasil saat retry.

## Migrasi dan Perubahan Skema

1. Periksa schema dan migrasi yang sudah ada.
2. Jelaskan dampak perubahan.
3. Buat migrasi yang dapat ditinjau.
4. Pertahankan data lama bila diperlukan.
5. Jangan menjalankan destructive migration tanpa persetujuan eksplisit dan rencana backup.
6. Uji migrasi pada lingkungan non-produksi.
7. Dokumentasikan cara rollback bila memungkinkan.

## Batas Tanggung Jawab

Skill ini merancang lapisan data, bukan menulis seluruh UI, algoritma game, konten pembelajaran, atau konfigurasi hosting. Untuk aplikasi client-only, jangan menambahkan database hanya agar arsitektur tampak lebih kompleks.

## Kriteria Selesai

- Skema memenuhi kebutuhan nyata.
- Relasi, constraint, dan indeks beralasan.
- Akses data dibatasi secara benar.
- Migrasi dapat ditinjau dan diuji.
- Data pribadi diminimalkan.
- Perilaku offline/sinkronisasi terdokumentasi jika relevan.
