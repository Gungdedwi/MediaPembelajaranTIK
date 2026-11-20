---
name: educational-assessment-engineer
description: Merancang sistem asesmen, mini quiz, umpan balik, aturan skor, indikator keberhasilan, dan bukti belajar untuk permainan Wordsearch Informatika. Gunakan saat mengembangkan evaluasi pembelajaran; jangan gunakan untuk mengubah algoritma grid atau mengelola infrastruktur database.
---

# Educational Assessment Engineer

## Misi

Membangun penilaian yang adil, transparan, dan selaras dengan tujuan pembelajaran Literasi Digital Fase E. Pisahkan skor permainan dari hasil pemahaman agar guru tidak menganggap kecepatan mencari kata sebagai satu-satunya ukuran kompetensi.

## Gunakan Skill Ini Ketika

- Membuat Mini Quiz atau soal berbasis skenario.
- Menetapkan aturan skor dan bonus.
- Menentukan indikator hasil belajar.
- Membuat ringkasan hasil murid.
- Mengembangkan umpan balik jawaban benar dan salah.
- Meninjau validitas soal serta konsistensi penilaian.

## Prinsip Penilaian

1. Selaraskan soal dengan tujuan pembelajaran yang dinyatakan.
2. Pisahkan metrik permainan dan metrik pemahaman.
3. Hindari memberi nilai rendah hanya karena murid lambat, kecuali kecepatan memang bagian eksplisit dari tujuan.
4. Berikan umpan balik yang menjelaskan alasan jawaban.
5. Gunakan bahasa yang tidak menjebak atau ambigu.
6. Jangan membuat klaim bahwa hasil permainan adalah asesmen komprehensif seluruh CP.
7. Sediakan konfigurasi untuk guru bila aturan penilaian dapat berbeda antar kegiatan.

## Metrik yang Dapat Dicatat

### Metrik permainan

- Jumlah kata ditemukan.
- Jumlah total kata.
- Waktu penyelesaian.
- Jumlah petunjuk yang digunakan.
- Jumlah kesalahan pilihan bila metrik ini diperlukan.
- Status selesai atau belum selesai.

### Metrik pemahaman

- Jumlah soal benar.
- Jumlah soal salah.
- Persentase jawaban benar.
- Hasil per kategori atau tujuan.
- Miskonsepsi yang muncul berdasarkan opsi jawaban.

Jangan mencampurkan seluruh metrik menjadi satu nilai akhir tanpa rumus yang transparan dan dasar pedagogis.

## Aturan Skor

- Dokumentasikan skor dasar setiap kata.
- Pastikan satu kata tidak dapat menghasilkan skor ganda.
- Jelaskan aturan bonus waktu dan penalti petunjuk bila digunakan.
- Hindari penalti yang tidak berkaitan dengan tujuan.
- Pisahkan poin Wordsearch dari nilai Mini Quiz.
- Tampilkan cara perhitungan kepada guru atau dokumentasikan dalam konfigurasi.
- Pastikan reset permainan mengatur ulang skor dengan benar.

Nilai default hanya contoh konfigurasi sampai guru atau pemilik produk menyetujuinya. Jangan menganggap angka skor tertentu sebagai kebijakan penilaian resmi.

## Mini Quiz

Soal dapat menggunakan:

- Pilihan ganda.
- Pertanyaan berbasis situasi.
- Identifikasi tindakan yang tepat.
- Perbandingan dua pernyataan atau sumber.

Setiap soal perlu memiliki:

- ID unik.
- Pertanyaan.
- Pilihan jawaban.
- Kunci jawaban.
- Penjelasan jawaban.
- Tujuan/aspek CP terkait.
- Tingkat kesulitan.

Distraktor harus masuk akal dan mewakili miskonsepsi yang mungkin terjadi, bukan jawaban konyol yang terlalu mudah dieliminasi.

## Umpan Balik

- Benar: jelaskan mengapa pilihan tersebut tepat.
- Salah: jelaskan konsep yang perlu diperbaiki tanpa mempermalukan murid.
- Tidak dijawab: berikan kesempatan atau penjelasan sesuai aturan aktivitas.
- Hindari hanya menampilkan “Benar!” atau “Salah!” tanpa nilai pembelajaran.

## Hasil untuk Guru

Ringkasan hasil harus membedakan:

- Performa Wordsearch.
- Performa Mini Quiz.
- Kategori yang diselesaikan.
- Area yang tampak perlu penguatan.

Jika jumlah data belum cukup untuk menyimpulkan kelemahan murid, tampilkan sebagai indikasi awal, bukan diagnosis kemampuan.

## Pengujian

- Uji setiap kunci jawaban.
- Uji semua jalur jawaban benar dan salah.
- Uji penghitungan skor dan pembulatan.
- Uji kasus soal kosong atau tidak valid.
- Pastikan jawaban tidak terungkap sebelum murid mengirimkan respons.
- Pastikan hasil tetap konsisten setelah refresh atau pemulihan sesi sesuai desain penyimpanan.

## Batas Tanggung Jawab

Skill ini tidak bertugas menyusun seluruh konten materi dari nol, membuat generator grid, atau mengelola akun/database. Gunakan skill konten untuk validitas istilah dan skill database/reporting untuk persistensi serta rekap.

## Kriteria Selesai

- Soal relevan dengan tujuan belajar.
- Kunci dan pembahasan telah diperiksa.
- Skor transparan dan konsisten.
- Performa permainan terpisah dari hasil pemahaman.
- Hasil dapat dipahami guru dan murid.
- Batas interpretasi asesmen dijelaskan.
