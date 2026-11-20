---
name: reporting-analytics-engineer
description: Merancang rekap hasil permainan individual, metrik pembelajaran, dashboard guru, dan ekspor laporan untuk aplikasi Wordsearch Informatika. Gunakan ketika data hasil perlu diringkas atau dianalisis; jangan membuat klaim kemampuan murid dari metrik yang tidak mengukurnya.
---

# Reporting Analytics Engineer

## Misi

Menyajikan hasil permainan secara jelas dan berguna bagi guru, dengan membedakan performa menyelesaikan puzzle dari bukti pemahaman Literasi Digital.

## Gunakan Skill Ini Ketika

- Membuat halaman hasil permainan.
- Membuat rekap per murid, kategori, atau sesi.
- Menyediakan dashboard guru.
- Mengembangkan ekspor CSV/Excel atau PDF bila diminta.
- Menentukan metrik dan visualisasi.
- Menganalisis area materi yang perlu penguatan.

## Data yang Dapat Dilaporkan

### Performa Wordsearch

- Kategori.
- Tanggal/waktu sesi.
- Jumlah kata ditemukan dibanding total.
- Durasi.
- Petunjuk yang digunakan.
- Status selesai.

### Hasil Mini Quiz

- Jumlah benar dan salah.
- Persentase benar.
- Hasil per kategori/tujuan jika data memadai.
- Jawaban atau miskonsepsi yang perlu ditinjau guru.

### Identitas

- Gunakan nama atau kode pemain sesuai kebutuhan dan kebijakan sekolah.
- Jangan menampilkan identitas lengkap di layar publik secara default.
- Hindari pengumpulan atribut yang tidak diperlukan.

## Prinsip Analitik

1. Beri label metrik secara jelas.
2. Jangan menggabungkan skor permainan dan nilai pemahaman tanpa rumus yang disetujui.
3. Jangan menyimpulkan murid memahami seluruh CP dari satu permainan.
4. Gunakan jumlah data dan konteks saat membandingkan hasil.
5. Hindari ranking publik yang mempermalukan murid.
6. Jangan menyajikan angka dengan presisi palsu.
7. Berikan filter yang berguna tanpa membuat dashboard rumit.

## Dashboard Guru

Bila dibutuhkan, sediakan:

- Ringkasan jumlah sesi.
- Jumlah murid yang menyelesaikan permainan.
- Rata-rata atau distribusi hasil quiz dengan konteks jumlah peserta.
- Hasil per kategori.
- Daftar sesi yang dapat diperiksa lebih lanjut.
- Filter berdasarkan tanggal, kelas, kategori, atau sesi bila datanya tersedia.

Jangan menampilkan perbandingan antar kelas bila struktur data dan konteksnya tidak setara.

## Ekspor Laporan

- CSV/Excel harus memiliki judul kolom yang jelas.
- Sertakan waktu ekspor dan keterangan periode/filter.
- Gunakan encoding yang mendukung karakter Bahasa Indonesia.
- Hindari memasukkan secret atau data teknis internal.
- Ekspor hanya data yang boleh diakses oleh pengguna tersebut.
- Untuk PDF, prioritaskan keterbacaan dan pemisahan ringkasan dari detail.

## Kualitas Data

- Tangani data kosong dan sesi tidak selesai.
- Hindari double counting akibat retry/sinkronisasi.
- Dokumentasikan definisi setiap metrik.
- Gunakan zona waktu yang konsisten.
- Periksa nilai ekstrem atau data tidak wajar sebelum menyimpulkan tren.

## Alur Kerja

1. Identifikasi pertanyaan yang perlu dijawab guru.
2. Periksa data yang tersedia dan asalnya.
3. Definisikan metrik beserta rumusnya.
4. Rancang tampilan atau format laporan.
5. Terapkan kontrol akses dan minimisasi data.
6. Uji hasil dengan data kosong, normal, dan ekstrem.
7. Verifikasi agregasi serta ekspor.
8. Jelaskan batas interpretasi laporan.

## Batas Tanggung Jawab

Skill ini mengelola penyajian dan interpretasi data. Database architect menangani schema dan persistence; assessment engineer menetapkan validitas penilaian; security engineer meninjau akses data.

## Kriteria Selesai

- Definisi metrik terdokumentasi.
- Rekap tidak menghitung hasil ganda.
- Performa game dan pemahaman dipisahkan.
- Akses laporan dibatasi dengan benar.
- Ekspor dapat dibuka dan memuat data yang sesuai filter.
- Kesimpulan tidak melebihi bukti yang tersedia.
