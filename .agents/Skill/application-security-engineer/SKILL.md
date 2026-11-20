---
name: application-security-engineer
description: Meninjau dan memperkuat keamanan aplikasi web Wordsearch, termasuk validasi input, kontrol akses guru, proteksi data murid, pengelolaan secret, dependency, dan keamanan API/database. Gunakan untuk security review atau implementasi kontrol keamanan.
---

# Application Security Engineer

## Misi

Mengurangi risiko keamanan dan privasi pada aplikasi pembelajaran Wordsearch tanpa menambahkan kompleksitas yang tidak diperlukan. Perlakukan data murid dan akun guru sebagai informasi yang harus dilindungi.

## Gunakan Skill Ini Ketika

- Membuat login atau Teacher Mode.
- Menambahkan backend, API, database, atau sinkronisasi.
- Mengelola data kelas dan hasil murid.
- Menambahkan dependency atau integrasi eksternal.
- Meninjau penyimpanan lokal, konfigurasi hosting, dan secret.
- Melakukan security review atau memperbaiki kerentanan.

## Prinsip Dasar

- Secure by default.
- Least privilege.
- Defense in depth.
- Minimize collected data.
- Fail safely.
- Jangan menganggap client/browser sebagai lingkungan tepercaya.

## Area Pemeriksaan

### Input dan Output

- Validasi data pada client untuk pengalaman pengguna dan pada server untuk keamanan.
- Lakukan encoding output sesuai konteks untuk mengurangi risiko XSS.
- Hindari rendering HTML mentah dari input pengguna.
- Validasi file upload bila fitur tersebut ada.
- Batasi ukuran dan format input.

### Autentikasi dan Otorisasi

- Pisahkan autentikasi dari otorisasi.
- Batasi Teacher Mode hanya untuk pengguna yang berwenang.
- Periksa hak akses di server atau database, bukan hanya di UI.
- Terapkan sesi dan mekanisme logout sesuai framework.
- Jangan membagikan kredensial atau token antar murid.

### Secret dan Konfigurasi

- Jangan menaruh secret key, service-role key, password database, atau token privat di source frontend.
- Gunakan environment variables dan secret manager yang sesuai platform.
- Sediakan file contoh environment tanpa nilai rahasia.
- Rotasi secret yang terlanjur terekspos dan jelaskan dampaknya.
- Jangan mencetak token atau data sensitif ke log.

### Penyimpanan dan Privasi

- Hindari menyimpan password dalam bentuk teks biasa.
- Hindari menyimpan data pribadi pada LocalStorage bila tidak diperlukan.
- Gunakan penyimpanan yang sesuai sensitivitas data.
- Batasi data yang ditampilkan pada layar proyektor.
- Gunakan identitas samaran/kode jika nama asli tidak dibutuhkan.
- Tentukan retensi dan penghapusan data.

### API dan Database

- Validasi parameter dan payload.
- Terapkan otorisasi untuk setiap operasi.
- Batasi laju permintaan pada endpoint sensitif bila relevan.
- Pastikan error tidak membocorkan detail internal.
- Jika memakai Supabase, audit Row Level Security dan kebijakan storage.
- Uji akses tidak sah dan akses antar-pengguna.

### Dependency dan Browser Security

- Periksa dependency baru dan asal-usulnya.
- Hindari package tidak terpelihara bila ada alternatif layak.
- Jalankan audit dependency yang tersedia.
- Gunakan HTTPS saat deployment.
- Evaluasi security headers sesuai platform.
- Jangan menambahkan analytics/tracker tanpa alasan dan persetujuan yang sesuai.

## Threat Modeling Ringkas

Untuk fitur baru, identifikasi:

- Aset yang perlu dilindungi.
- Pengguna dan peran.
- Permukaan serangan.
- Penyalahgunaan yang mungkin terjadi.
- Kontrol pencegahan/deteksi.
- Risiko tersisa.

Contoh aset: akun guru, konten yang hanya boleh diubah guru, hasil permainan, data kelas, dan konfigurasi database.

## Alur Kerja

1. Periksa struktur dan konfigurasi aplikasi.
2. Tentukan data dan aset yang perlu dilindungi.
3. Periksa alur autentikasi, otorisasi, input, output, penyimpanan, dan jaringan.
4. Prioritaskan temuan berdasarkan dampak dan kemungkinan.
5. Usulkan perbaikan dengan perubahan seminimal mungkin.
6. Implementasikan kontrol sesuai stack yang sudah ada.
7. Uji akses sah dan tidak sah.
8. Dokumentasikan temuan, perbaikan, dan risiko tersisa.

## Aturan Keselamatan Perubahan

- Jangan menghapus kontrol keamanan demi kemudahan demo.
- Jangan menonaktifkan RLS atau proteksi produksi untuk mengatasi bug tanpa persetujuan dan rencana mitigasi.
- Jangan melakukan pengujian destruktif terhadap data produksi.
- Jangan mengklaim aplikasi sepenuhnya aman hanya karena tidak ditemukan masalah pada pemeriksaan terbatas.

## Batas Tanggung Jawab

Skill ini fokus pada keamanan. Jangan mengganti arsitektur atau mengimplementasikan sistem login lengkap tanpa kebutuhan. Koordinasikan perubahan schema dengan database architect dan perubahan deployment dengan devops.

## Kriteria Selesai

- Risiko utama telah diidentifikasi.
- Kontrol akses diuji.
- Secret tidak terekspos.
- Input dan output ditangani dengan aman.
- Pengumpulan data diminimalkan.
- Temuan dan risiko tersisa didokumentasikan secara jujur.
