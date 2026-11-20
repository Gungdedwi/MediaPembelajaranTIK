---
name: wordsearch-game-engineer
description: Merancang, membangun, memperbaiki, dan menguji mesin permainan Wordsearch untuk aplikasi pembelajaran Informatika. Gunakan skill ini ketika mengerjakan pembuatan grid huruf, penempatan kata, pemilihan huruf, validasi kata, pengacakan puzzle, atau aturan dasar permainan Wordsearch.
---

# Wordsearch Game Engineer

## Tujuan Skill

Skill ini membimbing AI Developer untuk membangun **mesin permainan Wordsearch** yang akurat, stabil, dapat diuji, dan mudah diintegrasikan ke aplikasi web pembelajaran.

Fokus skill ini hanya pada mekanisme inti Wordsearch. Jangan mengambil alih tanggung jawab desain UI/UX, penulisan materi Literasi Digital, pengelolaan kelas, sistem akun, database, atau pelaporan hasil belajar. Bagian-bagian tersebut harus ditangani oleh skill khusus masing-masing.

## Kapan Skill Ini Digunakan

Aktifkan skill ini saat pengguna meminta AI untuk:

- Membuat atau memperbaiki generator grid Wordsearch.
- Menempatkan daftar kata ke dalam grid.
- Menangani kata horizontal, vertikal, diagonal, atau terbalik.
- Memvalidasi rangkaian huruf yang dipilih pemain.
- Menangani pemilihan huruf menggunakan mouse atau layar sentuh.
- Mengacak puzzle dan menghasilkan susunan baru.
- Menguji kemungkinan kegagalan atau bug pada logika Wordsearch.

## Konteks Aplikasi

Aplikasi yang menggunakan skill ini adalah permainan Wordsearch berbasis web untuk pembelajaran Informatika, dengan konteks penggunaan berikut:

- Mata pelajaran: Informatika.
- Materi: Literasi Digital.
- Platform: Web browser.
- Penggunaan utama: Guru menampilkan permainan di kelas melalui layar presentasi atau proyektor.
- Pola bermain: Setiap murid mengerjakan permainan secara individu, bukan permainan tim atau multiplayer real-time.

Daftar istilah permainan berasal dari data materi aplikasi. Mesin permainan tidak boleh mengarang atau mengubah isi materi pembelajaran.

## Tanggung Jawab Utama

### 1. Normalisasi Kata

Sebelum kata dimasukkan ke grid:

1. Ubah huruf menjadi kapital secara konsisten.
2. Hapus spasi dan tanda baca yang tidak menjadi bagian dari pencarian grid.
3. Pertahankan huruf dan angka yang memang diperlukan oleh istilah.
4. Simpan teks asli secara terpisah agar dapat ditampilkan kembali dengan ejaan dan spasi yang benar.
5. Pastikan normalisasi tidak membuat dua istilah berbeda menjadi satu nilai yang sama tanpa penanganan.

Contoh:

| Teks tampilan | Bentuk di grid |
|---|---|
| Password Manager | PASSWORDMANAGER |
| Search Engine | SEARCHENGINE |
| IP Address | IPADDRESS |
| Wi-Fi | WIFI |

Jangan mengubah teks sumber yang disimpan untuk tampilan atau materi.

### 2. Pembuatan Grid

Buat generator yang menerima sekurang-kurangnya:

- Daftar kata yang telah dinormalisasi.
- Jumlah baris dan kolom.
- Arah penempatan kata yang diizinkan.
- Opsi pengacakan atau seed bila dibutuhkan untuk pengujian.

Generator harus:

- Menghasilkan grid dua dimensi dengan ukuran yang diminta.
- Menempatkan setiap kata secara utuh.
- Memastikan setiap huruf berada di dalam batas grid.
- Mengizinkan huruf berpotongan jika huruf pada sel yang sama cocok.
- Menolak penempatan yang bertabrakan pada huruf yang berbeda.
- Mengisi sel kosong dengan huruf acak setelah seluruh kata berhasil ditempatkan.
- Mengembalikan status gagal yang jelas jika kata tidak dapat ditempatkan.

Jangan diam-diam menghilangkan kata yang gagal ditempatkan. Laporkan kata yang gagal dan alasan kegagalannya.

### 3. Arah Penempatan Kata

Mesin permainan minimal mendukung arah berikut:

- Horizontal kiri ke kanan.
- Horizontal kanan ke kiri.
- Vertikal atas ke bawah.
- Vertikal bawah ke atas.
- Diagonal ke kanan bawah.
- Diagonal ke kiri bawah.
- Diagonal ke kanan atas.
- Diagonal ke kiri atas.

Arah yang aktif harus dapat dikonfigurasi. Contohnya, tingkat mudah dapat membatasi arah tertentu, sedangkan tingkat lebih sulit dapat mengaktifkan semua arah.

### 4. Algoritma Penempatan

Gunakan algoritma yang memprioritaskan kata terpanjang terlebih dahulu agar ruang grid digunakan secara efektif.

Proses yang disarankan:

1. Validasi ukuran grid dan daftar kata.
2. Normalisasi kata.
3. Periksa apakah setiap kata muat pada dimensi grid.
4. Urutkan kata berdasarkan panjang, dari terpanjang ke terpendek.
5. Pilih posisi awal dan arah yang diizinkan secara acak.
6. Periksa seluruh sel yang akan ditempati.
7. Terima posisi jika sel kosong atau berisi huruf yang sama.
8. Ulangi sampai kata berhasil ditempatkan atau batas percobaan tercapai.
9. Jika gagal, gunakan strategi percobaan ulang atau kembalikan kegagalan secara eksplisit.
10. Isi sel kosong dengan huruf acak.
11. Jalankan validasi akhir untuk memastikan semua kata benar-benar ada dalam grid.

Gunakan batas percobaan agar generator tidak mengalami loop tanpa akhir. Jika semua kata tidak dapat ditempatkan, sistem dapat mencoba ulang dengan seed berbeda atau menyarankan ukuran grid lebih besar.

### 5. Pemilihan Huruf Pemain

Mesin permainan harus mendukung dua pola interaksi:

- **Drag selection:** pemain menekan atau menyentuh huruf awal, menggeser pointer/jari, lalu melepaskan pada huruf akhir.
- **Start-end selection:** pemain memilih huruf awal, kemudian memilih huruf akhir.

Logika pemilihan harus menentukan apakah sel-sel yang dipilih membentuk salah satu garis lurus yang diizinkan: horizontal, vertikal, atau diagonal.

Aturan validasi:

1. Titik awal dan akhir harus berada di dalam grid.
2. Seluruh sel di antara titik awal dan akhir harus berurutan.
3. Pemilihan hanya boleh membentuk satu garis lurus.
4. Jalur harus memiliki arah yang didukung oleh konfigurasi puzzle.
5. Rangkaian huruf yang dipilih harus dibandingkan dengan kata target, termasuk kemungkinan pembacaan terbalik.
6. Kata yang sudah ditemukan tidak boleh diberi skor atau ditandai sebagai temuan baru untuk kedua kalinya.
7. Pemilihan yang tidak valid harus dapat dibatalkan tanpa merusak status puzzle.

Jangan menganggap gerakan pointer selalu bergerak satu sel pada setiap event. Implementasi harus tetap dapat menentukan sel yang dilalui ketika pointer bergerak cepat.

### 6. Pencocokan dan Status Kata

Setiap kata harus mempunyai status yang jelas, minimal:

- `not_found`: belum ditemukan.
- `found`: sudah ditemukan.

Ketika kata valid ditemukan, kembalikan informasi yang diperlukan oleh lapisan aplikasi, misalnya:

- ID kata.
- Teks asli untuk ditampilkan.
- Koordinat sel yang membentuk kata.
- Arah kata.
- Status kata setelah validasi.

Mesin permainan bertanggung jawab mengonfirmasi temuan. Tampilan warna, animasi, suara, dan pesan pembelajaran menjadi tanggung jawab lapisan UI.

### 7. Pengacakan Puzzle

Generator dapat membuat susunan puzzle baru dari daftar kata yang sama.

Ketentuan:

- Kata target tetap sama selama konfigurasi tidak diubah.
- Posisi dan arah kata dapat berubah.
- Huruf pengisi dapat berubah.
- Setiap hasil harus melewati validasi akhir.
- Sediakan opsi seed agar hasil tertentu dapat direproduksi dalam pengujian.

Jangan menjamin setiap pengacakan pasti menghasilkan susunan yang berbeda. Namun, hindari penggunaan seed tetap pada permainan normal kecuali memang diminta.

## Validasi dan Penanganan Kesalahan

Tangani kondisi berikut secara eksplisit:

- Daftar kata kosong.
- Kata kosong setelah normalisasi.
- Kata lebih panjang daripada dimensi grid yang memungkinkan.
- Ukuran grid tidak valid.
- Kata duplikat.
- Dua kata bertumpuk pada huruf yang berbeda.
- Generator gagal menempatkan satu atau beberapa kata.
- Pemain memilih titik di luar grid.
- Pemain memilih jalur yang tidak lurus.
- Pemain memilih kata yang sudah ditemukan.
- Puzzle tidak memiliki ruang yang cukup.

Gunakan pesan kesalahan yang dapat dipahami pengembang. Jangan menampilkan stack trace atau rincian teknis internal kepada pemain.

## Kontrak Integrasi

Pisahkan mesin permainan dari komponen tampilan.

Mesin permainan sebaiknya menyediakan fungsi yang setara dengan operasi berikut, menyesuaikan bahasa dan struktur proyek yang sudah digunakan:

- `normalizeWord(word)` — menyiapkan kata untuk grid.
- `generateGrid(words, config)` — menghasilkan grid dan posisi kata.
- `validateSelection(start, end, grid)` — memvalidasi jalur pilihan.
- `matchSelectedWord(selection, targets)` — mencocokkan huruf dengan kata target.
- `markWordFound(wordId)` — memperbarui status kata.
- `validateGeneratedPuzzle(puzzle)` — memastikan puzzle valid.

Nama di atas adalah gambaran tanggung jawab fungsi, bukan keharusan untuk menggunakan nama persis tersebut.

Jangan membuat ulang arsitektur proyek hanya untuk mengikuti contoh nama fungsi ini. Ikuti pola kode dan teknologi yang telah digunakan proyek.

## Pengujian Wajib

Sebelum menyatakan mesin permainan selesai, uji sekurang-kurangnya:

### Pengujian Generator

- Kata pendek dan kata panjang.
- Kata dengan huruf berulang.
- Kata yang saling berpotongan pada huruf yang cocok.
- Kata yang berpotongan pada huruf yang tidak cocok.
- Grid kecil dan grid besar.
- Semua arah penempatan yang diaktifkan.
- Daftar kata yang tidak mungkin dimuat.
- Pengacakan dengan seed yang sama.

### Pengujian Pemilihan

- Pemilihan horizontal dari kiri ke kanan dan sebaliknya.
- Pemilihan vertikal dari atas ke bawah dan sebaliknya.
- Pemilihan diagonal pada seluruh arah yang didukung.
- Pemilihan satu huruf.
- Pemilihan jalur yang bukan garis lurus.
- Pemilihan yang melewati sel di luar grid.
- Pemilihan kata yang tidak ada.
- Pemilihan kata yang sudah ditemukan.
- Pemilihan melalui mouse dan layar sentuh.

### Pengujian Konsistensi

- Semua kata yang dilaporkan berhasil ditempatkan benar-benar ada di grid.
- Tidak ada kata target yang hilang dari hasil generator.
- Setiap kata hanya dapat ditandai ditemukan satu kali.
- Koordinat kata sesuai dengan huruf yang ditampilkan.
- Reset puzzle mengembalikan status permainan ke kondisi awal.

## Standar Kualitas Kode

- Ikuti struktur proyek dan teknologi yang sudah ada.
- Pisahkan algoritma generator, validasi jalur, pencocokan kata, dan status permainan.
- Gunakan nama variabel dan fungsi yang jelas.
- Hindari duplikasi logika.
- Hindari ketergantungan tambahan jika tidak diperlukan.
- Gunakan tipe data yang konsisten jika proyek menggunakan TypeScript.
- Tambahkan komentar untuk algoritma yang tidak mudah dipahami.
- Jangan mengubah komponen lain yang tidak berkaitan dengan tugas.
- Jangan mengklaim pengujian berhasil sebelum pengujian benar-benar dijalankan.

## Alur Kerja AI Developer

Saat menerima tugas yang berkaitan dengan Wordsearch:

1. Periksa struktur proyek dan temukan implementasi permainan yang sudah ada.
2. Identifikasi bahasa, framework, dan pola kode yang digunakan.
3. Tentukan bagian logika yang perlu dibuat atau diperbaiki.
4. Jelaskan secara singkat rencana perubahan jika tugas menyentuh beberapa modul.
5. Implementasikan perubahan sekecil mungkin tanpa merusak fitur yang sudah berjalan.
6. Jalankan pengujian yang relevan.
7. Perbaiki kegagalan yang ditemukan.
8. Laporkan file yang diubah, perilaku yang ditambahkan, dan hasil pengujian.

Jika kebutuhan pengguna belum jelas, ajukan satu pertanyaan yang paling penting. Jangan menebak aturan permainan yang dapat mengubah perilaku inti aplikasi.

## Batasan Skill

Skill ini **tidak** bertanggung jawab untuk:

- Menentukan materi dan validitas konsep Literasi Digital.
- Menulis definisi atau soal pembelajaran.
- Mendesain keseluruhan halaman dan identitas visual aplikasi.
- Membuat dashboard guru atau sistem manajemen kelas.
- Membuat sistem login, database, atau autentikasi.
- Menentukan kebijakan penyimpanan data murid.
- Membuat laporan penilaian di luar status dan data permainan inti.

Gunakan skill khusus lain untuk tanggung jawab tersebut.

## Kriteria Selesai

Skill ini dianggap diterapkan dengan benar apabila mesin permainan:

1. Dapat membentuk grid dari daftar kata dan konfigurasi.
2. Dapat menempatkan kata sesuai arah yang diaktifkan.
3. Tidak menempatkan huruf di luar grid atau menimpa huruf yang berbeda.
4. Dapat memvalidasi pilihan pemain secara akurat.
5. Dapat mengenali kata yang dipilih dalam arah maju maupun terbalik sesuai konfigurasi.
6. Mencegah kata yang sama dihitung lebih dari satu kali.
7. Dapat menghasilkan puzzle baru yang tetap valid.
8. Memiliki pengujian untuk kasus normal dan kasus batas.
