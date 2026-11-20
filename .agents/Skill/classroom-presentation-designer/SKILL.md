---
name: classroom-presentation-designer
description: Merancang pengalaman penggunaan Wordsearch dalam pembelajaran tatap muka melalui layar guru, proyektor, atau perangkat murid, termasuk alur sesi, kontrol guru, instruksi kelas, mode presentasi, dan pengelolaan permainan individual.
---

# Classroom Presentation Designer

## Misi

Membuat aplikasi mudah dipakai dalam situasi kelas. Guru dapat memulai dan memandu kegiatan, sedangkan setiap murid mengikuti permainan secara individual. Skill ini tidak mengasumsikan adanya mode tim atau multiplayer real-time.

## Gunakan Skill Ini Ketika

- Merancang alur guru memulai, menjeda, melanjutkan, dan mengakhiri sesi.
- Membuat tampilan presentasi/proyektor.
- Menentukan bagaimana murid memasuki permainan individual.
- Membuat instruksi singkat yang tampil di kelas.
- Mengelola pergantian aktivitas dan pembahasan kelas.
- Memastikan permainan dapat digunakan saat satu layar ditampilkan kepada kelas.

## Skenario Penggunaan

Aplikasi harus mendukung skenario kelas yang dipilih dan dikonfigurasi oleh pemilik produk, misalnya:

1. Guru menampilkan aplikasi di proyektor dan murid bermain bergiliran pada perangkat yang tersedia.
2. Guru menampilkan instruksi atau materi di proyektor, sementara murid bermain secara individual melalui perangkat masing-masing.

Jangan menganggap skenario kedua memerlukan sinkronisasi real-time. Bila sinkronisasi, kode sesi, atau pengumpulan hasil lintas perangkat diminta, jelaskan kebutuhan teknisnya dan koordinasikan dengan full-stack/database skills.

## Alur Sesi Kelas

### Persiapan

- Guru memilih kategori atau paket permainan.
- Guru mengatur kesulitan dan waktu bila fitur tersedia.
- Aplikasi menampilkan instruksi yang ringkas.
- Guru dapat memeriksa bahwa sesi siap dimulai.

### Pelaksanaan

- Murid mengikuti instruksi dan bermain secara individual.
- Status permainan dapat terlihat tanpa membuka data pribadi.
- Guru dapat menjeda kegiatan untuk memberi penjelasan.
- Murid dapat melanjutkan sesuai aturan sesi.

### Penutup

- Tampilkan ringkasan hasil yang relevan.
- Guru dapat membahas istilah atau soal yang paling menantang.
- Hindari leaderboard publik berdasarkan nama lengkap murid secara default.

## Kontrol Guru

Kontrol yang dapat dipertimbangkan:

- Mulai sesi.
- Jeda dan lanjutkan.
- Atur ulang permainan.
- Tampilkan/sembunyikan petunjuk.
- Tampilkan instruksi.
- Masuk/keluar mode fullscreen.
- Akhiri sesi.

Kontrol berbahaya seperti reset atau menghapus hasil harus meminta konfirmasi.

## Desain Presentasi

- Buat informasi utama terbaca dari kejauhan.
- Gunakan kontras tinggi dan layout yang stabil.
- Tampilkan instruksi satu per satu bila terlalu panjang.
- Jangan menutupi grid dengan panel yang tidak diperlukan.
- Sediakan state yang jelas ketika permainan belum dimulai, sedang berjalan, dijeda, selesai, atau waktu habis.
- Pastikan mode presentasi tidak menghilangkan akses ke kontrol keluar.

## Keterbatasan Kelas dan Jaringan

- Jangan bergantung pada koneksi yang selalu stabil untuk menjalankan permainan inti.
- Sediakan alur alternatif bila koneksi terputus, sesuai kemampuan aplikasi.
- Jangan menampilkan data murid yang tidak diperlukan di layar publik.
- Bila setiap murid menggunakan perangkat sendiri, identitas dan pengumpulan hasil harus mengikuti kebijakan sekolah yang ditetapkan.

## Alur Kerja

1. Pastikan skenario penggunaan kelas yang diminta.
2. Petakan peran guru dan murid.
3. Susun alur sebelum, selama, dan setelah permainan.
4. Tentukan kontrol yang diperlukan dan siapa yang dapat mengaksesnya.
5. Tinjau keterbacaan pada layar proyektor.
6. Uji alur ketika guru menjeda, melanjutkan, dan mengakhiri permainan.
7. Dokumentasikan ketergantungan pada backend atau sinkronisasi jika ada.

## Batas Tanggung Jawab

Skill ini tidak membangun algoritma permainan, mengarang konten materi, menentukan hasil asesmen, atau mengimplementasikan sistem akun. Koordinasikan kebutuhan lintas perangkat kepada full-stack dan database skills.

## Kriteria Selesai

- Peran guru dan murid jelas.
- Alur penggunaan kelas dapat dijalankan tanpa kebingungan.
- Mode presentasi terbaca dan stabil.
- Permainan individual tidak berubah menjadi kompetisi tim tanpa permintaan.
- Kontrol sesi penting berfungsi dan tindakan destruktif terlindungi.
- Privasi murid diperhatikan pada tampilan publik.
