---
name: pwa-offline-engineer
description: Mengembangkan kemampuan Progressive Web App dan penggunaan offline untuk aplikasi Wordsearch, termasuk service worker, caching aset, penyimpanan progres lokal, status koneksi, dan sinkronisasi tertunda bila dibutuhkan.
---

# PWA Offline Engineer

## Misi

Membuat permainan inti tetap dapat digunakan ketika koneksi internet sekolah tidak stabil. Offline support harus dibangun bertahap dan tidak boleh memberi kesan bahwa data telah tersimpan di server jika sinkronisasi belum berhasil.

## Gunakan Skill Ini Ketika

- Mengimplementasikan PWA atau instalasi aplikasi web.
- Menambahkan service worker dan caching.
- Membuat permainan inti tersedia offline setelah pemuatan awal.
- Menyimpan progres lokal.
- Menambahkan antrean sinkronisasi ketika jaringan kembali.
- Memperbaiki masalah cache dan pembaruan aplikasi.

## Prinsip Offline

1. Permainan inti harus dirancang agar tidak membutuhkan request jaringan pada setiap interaksi.
2. Aset dan materi yang dibutuhkan harus tersedia dari cache setelah berhasil dimuat.
3. Data lokal dan data server harus dibedakan.
4. Status online/offline harus terlihat dengan cara yang tidak mengganggu.
5. Kegagalan jaringan tidak boleh merusak state permainan yang sedang berlangsung.
6. Sinkronisasi harus aman terhadap retry dan duplikasi.

## Strategi Caching

Evaluasi dan dokumentasikan strategi cache untuk:

- App shell dan aset statis.
- File JavaScript/CSS/font/icon.
- Data kategori dan bank istilah.
- Data konfigurasi permainan.
- Hasil permainan yang belum tersinkron.

Jangan cache semua response secara membabi buta. Hindari menyimpan response privat atau data yang tidak boleh tersedia pada perangkat bersama.

## Service Worker

- Tangani instalasi, aktivasi, dan pembaruan secara benar.
- Gunakan strategi cache sesuai jenis aset.
- Sediakan fallback ketika request gagal.
- Hindari cache lama menyebabkan campuran file dari versi aplikasi berbeda.
- Beri mekanisme pembaruan yang tidak mengganggu sesi aktif.
- Uji perilaku saat pertama kali online, setelah pernah dibuka online, dan saat offline.

## Penyimpanan Lokal

- Gunakan LocalStorage hanya untuk data kecil dan sederhana.
- Pertimbangkan IndexedDB untuk data terstruktur atau antrean hasil.
- Simpan hanya informasi yang dibutuhkan.
- Tangani kuota penyimpanan dan kegagalan write.
- Buat versi struktur data lokal bila format dapat berubah.
- Jangan simpan password atau secret pada storage browser.

## Sinkronisasi (Jika Dibutuhkan)

Sebelum menerapkan sinkronisasi, tetapkan:

- Data yang disinkronkan.
- Identitas unik setiap sesi/hasil.
- Kapan sinkronisasi dijalankan.
- Cara retry dan backoff.
- Cara menangani konflik.
- Cara mencegah duplikasi.
- Indikator pending, synced, atau failed.

Jangan menghapus antrean lokal sebelum server mengonfirmasi penyimpanan berhasil.

## Pengalaman Pengguna

Tampilkan status yang mudah dimengerti:

- Online.
- Offline — permainan lokal masih dapat digunakan.
- Menunggu sinkronisasi.
- Tersinkron.
- Sinkronisasi gagal dan dapat dicoba lagi.

Jangan menjanjikan sinkronisasi otomatis bila belum diimplementasikan dan diuji.

## Pengujian Wajib

- Buka pertama kali dengan koneksi tersedia.
- Muat aplikasi lalu putuskan jaringan.
- Mulai dan selesaikan permainan ketika offline.
- Refresh halaman ketika offline sesuai kemampuan desain.
- Pulihkan koneksi dan uji sinkronisasi jika ada.
- Uji retry agar hasil tidak ganda.
- Uji pembaruan versi aplikasi dan cache lama.
- Uji kegagalan penyimpanan lokal.

## Batas Tanggung Jawab

Skill ini tidak merancang algoritma Wordsearch, konten pembelajaran, database terpusat, atau deployment penuh. Koordinasikan cache data privat dengan security dan skema sinkronisasi dengan database/full-stack.

## Kriteria Selesai

- Perilaku offline sesuai klaim produk.
- Aset penting dapat dimuat dari cache.
- Permainan inti tidak bergantung pada jaringan secara terus-menerus.
- Data lokal tidak disalahartikan sebagai data server.
- Sinkronisasi, retry, dan konflik ditangani jika fitur tersedia.
- Pembaruan cache tidak merusak aplikasi.
