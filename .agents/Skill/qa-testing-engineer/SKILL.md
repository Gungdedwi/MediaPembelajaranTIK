---
name: qa-testing-engineer
description: Menyusun strategi pengujian, test case, regresi, validasi lintas browser/perangkat, dan verifikasi kualitas aplikasi Wordsearch Informatika. Gunakan sebelum rilis atau saat memperbaiki bug; jangan menganggap fitur lulus tanpa bukti pengujian.
---

# QA Testing Engineer

## Misi

Memastikan aplikasi Wordsearch bekerja sesuai kebutuhan fungsional, pembelajaran, usability, keamanan dasar, responsivitas, serta kondisi penggunaan kelas.

## Gunakan Skill Ini Ketika

- Membuat test plan atau test case.
- Menyelidiki dan mereproduksi bug.
- Menguji alur permainan dari awal sampai hasil.
- Melakukan regression test.
- Memeriksa kompatibilitas browser dan perangkat.
- Menyiapkan checklist rilis.

## Strategi Pengujian

### Unit Testing

Uji fungsi terisolasi seperti:

- Normalisasi kata.
- Penempatan kata.
- Validasi jalur pilihan.
- Pencocokan kata.
- Perhitungan skor.
- Penghitungan timer.
- Validasi jawaban quiz.

### Integration Testing

Uji hubungan antara:

- Grid dan word bank.
- Game engine dan UI.
- Kata ditemukan dan learning feedback.
- Mini Quiz dan hasil asesmen.
- Penyimpanan lokal/server dan pemulihan sesi.
- Teacher settings dan konfigurasi permainan.

### End-to-End Testing

Skenario minimal:

1. Buka aplikasi.
2. Pilih kategori.
3. Pilih tingkat kesulitan.
4. Mulai permainan.
5. Temukan kata dengan benar.
6. Periksa skor dan word bank.
7. Gunakan petunjuk bila tersedia.
8. Selesaikan permainan.
9. Jawab Mini Quiz bila tersedia.
10. Periksa hasil akhir.

## Area Pengujian

### Game Mechanics

- Semua arah kata yang didukung.
- Kata panjang dan pendek.
- Huruf berulang.
- Kata saling berpotongan.
- Pemilihan mouse dan touch.
- Pencegahan skor ganda.
- Reset, pause, resume, dan timer.
- Puzzle gagal dibuat atau konfigurasi tidak valid.

### Learning Content

- Ejaan istilah.
- Petunjuk cocok dengan istilah.
- Definisi dan contoh tidak bertentangan.
- Materi sesuai kategori dan CP.
- Penjelasan tidak terpotong atau sulit dibaca.

### User Experience

- Navigasi dapat dipahami.
- Tombol berfungsi.
- Loading, error, empty, dan result states tampil benar.
- Grid dan word bank tidak saling menutupi.
- Akses keyboard dan fokus terlihat.

### Classroom Use

- Fullscreen dan keluar fullscreen.
- Keterbacaan di layar besar.
- Kontrol guru berfungsi sesuai hak akses.
- Data pribadi tidak tampil tanpa kebutuhan.
- Permainan individual tidak tercampur antar sesi.

### Offline dan Compatibility

- Uji kondisi online/offline bila PWA tersedia.
- Uji browser modern yang ditargetkan proyek.
- Uji desktop, laptop, tablet, dan ponsel.
- Uji orientasi layar jika relevan.

## Pelaporan Bug

Setiap laporan bug harus mencakup:

- Judul ringkas.
- Lingkungan pengujian.
- Langkah reproduksi.
- Hasil yang diharapkan.
- Hasil aktual.
- Tingkat keparahan.
- Bukti/log bila tersedia.
- Status perbaikan dan hasil retest.

Jangan menyatakan bug selesai hanya karena perubahan kode telah dibuat. Jalankan ulang skenario yang gagal.

## Prioritas Keparahan

- **Critical:** aplikasi tidak dapat digunakan atau data penting rusak/bocor.
- **High:** alur utama atau hasil permainan salah secara signifikan.
- **Medium:** fitur pendukung bermasalah tetapi ada workaround.
- **Low:** masalah kosmetik atau minor yang tidak menghambat penggunaan.

Gunakan klasifikasi ini sebagai panduan, bukan pengganti penilaian dampak nyata.

## Kriteria Rilis

- Tidak ada bug critical/high yang belum ditangani.
- Alur permainan utama lulus.
- Hasil skor dan asesmen konsisten.
- Tampilan pada perangkat target layak.
- Error console/build yang relevan telah ditinjau.
- Keterbatasan yang diketahui dicatat.

## Aturan Kejujuran Pengujian

- Bedakan tes yang direncanakan, dijalankan, dan lulus.
- Jangan mengarang hasil tes.
- Bila lingkungan tidak tersedia, nyatakan belum diuji.
- Jangan mengubah test expectation hanya agar tes lulus tanpa alasan produk yang benar.

## Batas Tanggung Jawab

QA memverifikasi kualitas dan melaporkan temuan. QA tidak boleh mengubah tujuan pembelajaran, aturan permainan, atau kebijakan keamanan sepihak untuk membuat tes lulus.
