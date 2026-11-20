---
name: wordsearch-ui-ux-designer
description: Merancang dan memperbaiki antarmuka serta pengalaman pengguna aplikasi Wordsearch Informatika, termasuk navigasi, game screen, visual system, responsivitas, aksesibilitas, dan interaksi mouse atau layar sentuh. Gunakan saat mengerjakan tampilan atau alur penggunaan; jangan gunakan untuk mengubah algoritma inti Wordsearch atau isi materi.
---

# Wordsearch UI/UX Designer

## Misi

Menciptakan antarmuka web permainan Wordsearch yang mudah dipahami murid, nyaman digunakan guru, terbaca dari layar proyektor, dan tetap berfungsi pada laptop, tablet, serta ponsel.

Aplikasi digunakan dalam pembelajaran Informatika materi Literasi Digital Fase E. Mode utama adalah penggunaan di kelas dan permainan individual. Jangan mengasumsikan adanya permainan tim atau kompetisi real-time.

## Gunakan Skill Ini Ketika

- Membuat atau mengubah halaman, layout, navigasi, komponen, tema visual, atau micro-interaction.
- Memperbaiki tampilan grid huruf, daftar kata, skor, timer, petunjuk, dan hasil permainan.
- Mengoptimalkan tampilan untuk proyektor dan berbagai ukuran layar.
- Meninjau usability dan aksesibilitas.

## Prinsip Desain

1. **Game first, learning always:** grid dan daftar kata harus menjadi fokus saat permainan berlangsung, tetapi penjelasan pembelajaran tetap mudah diakses.
2. **Readable at distance:** teks penting memiliki ukuran dan kontras yang memadai untuk dilihat dari belakang kelas.
3. **Clear hierarchy:** murid harus segera memahami apa yang harus dilakukan, berapa kata tersisa, dan bagaimana menyelesaikan permainan.
4. **Low distraction:** hindari ornamen, animasi, suara, dan pop-up yang tidak membantu tugas.
5. **Responsive by design:** jangan hanya mengecilkan layout desktop; susun ulang elemen sesuai ruang yang tersedia.
6. **Accessible interaction:** jangan mengandalkan warna saja untuk menandai status.
7. **Consistent system:** gunakan token warna, jarak, radius, tipografi, dan state komponen yang konsisten.

## Layar dan Komponen yang Ditangani

- Beranda dan petunjuk singkat.
- Pemilihan kategori dan tingkat kesulitan.
- Layar permainan: grid, word bank, skor, timer, progress, hint, pause, dan keluar.
- Dialog atau panel penjelasan istilah setelah ditemukan.
- Halaman hasil dan ringkasan permainan.
- Tampilan guru/pengaturan jika diminta oleh produk.
- Komponen status: belum ditemukan, dipilih, ditemukan, salah, nonaktif, fokus keyboard, dan loading.

Jangan menambahkan layar atau alur yang tidak memiliki tujuan produk yang jelas.

## Aturan Game Screen

- Grid huruf harus menjadi elemen visual paling dominan.
- Ukuran sel dan huruf harus konsisten serta tetap terbaca.
- Word bank harus terlihat tanpa menutupi grid pada ukuran layar yang ditargetkan.
- Kata ditemukan ditandai dengan lebih dari satu petunjuk visual, misalnya warna plus ikon/strikethrough/status teks.
- Status skor, waktu, dan jumlah kata tersisa harus mudah ditemukan.
- Tombol utama memiliki label yang jelas; ikon tanpa label hanya digunakan bila maknanya universal dan tersedia accessible name.
- Jangan membuat elemen interaktif terlalu kecil untuk disentuh.
- Jangan mengandalkan hover sebagai satu-satunya cara mengakses fungsi karena perangkat sentuh tidak memiliki hover.

## Classroom Presentation Experience

- Sediakan layout presentasi yang meminimalkan navigasi yang tidak relevan saat permainan dimulai.
- Fullscreen harus dapat diaktifkan dan ditinggalkan dengan jelas.
- Pastikan teks, grid, dan status permainan tetap terbaca pada rasio layar umum.
- Pertahankan kontrol yang penting bagi guru, tetapi hindari kontrol pengelolaan memenuhi layar murid.
- Jangan mengasumsikan proyektor mendukung sentuhan. Interaksi harus dapat dilakukan dengan mouse atau perangkat individual sesuai cara penggunaan yang dipilih guru.
- Hindari menampilkan nama lengkap atau data pribadi murid secara publik kecuali memang diperlukan dan disetujui.

## Responsivitas

Uji sekurang-kurangnya pada layout desktop/laptop, tablet, dan ponsel.

- Desktop: manfaatkan ruang untuk grid dan word bank secara seimbang.
- Tablet: pertimbangkan word bank di bawah atau di sisi grid sesuai orientasi.
- Ponsel: pastikan grid tidak terlalu kecil; gunakan scrolling yang disengaja dan hindari overflow horizontal halaman.
- Perubahan orientasi layar tidak boleh menghilangkan status permainan.

Jangan menetapkan breakpoint tanpa memeriksa sistem styling yang sudah digunakan proyek.

## Aksesibilitas

- Gunakan kontras teks dan latar yang memadai.
- Sediakan fokus keyboard yang terlihat.
- Gunakan elemen semantik dan label yang jelas.
- Berikan accessible name pada tombol ikon.
- Jangan menyampaikan status hanya melalui warna.
- Perhatikan reduced-motion preference bila animasi digunakan.
- Pastikan dialog dapat dioperasikan dengan keyboard dan fokus tidak hilang.
- Jangan membuat timer menjadi satu-satunya penentu keberhasilan tanpa opsi pengaturan yang sesuai kebutuhan pembelajaran.

## Alur Kerja

1. Periksa struktur aplikasi, komponen, design token, dan framework yang sudah ada.
2. Identifikasi pengguna, layar, perangkat, serta tugas utama yang terdampak.
3. Jelaskan perubahan UI/UX yang diusulkan bila dampaknya lintas halaman.
4. Gunakan atau perluas komponen yang sudah ada sebelum membuat pola baru.
5. Implementasikan perubahan secara konsisten dan responsif.
6. Uji alur dengan mouse, keyboard, dan touch bila relevan.
7. Periksa layout pada ukuran layar utama dan mode fullscreen.
8. Laporkan komponen yang diubah dan hasil pemeriksaan.

## Batas Tanggung Jawab

Skill ini tidak menentukan algoritma penempatan/validasi kata, kebenaran materi Literasi Digital, rumus penilaian, skema database, atau infrastruktur deployment. Koordinasikan kebutuhan tersebut dengan skill yang sesuai.

## Kriteria Selesai

- Alur utama mudah dipahami tanpa instruksi panjang.
- Grid, word bank, skor, timer, dan status terbaca.
- Tampilan bekerja pada desktop, tablet, dan ponsel.
- Interaksi tidak bergantung pada hover atau warna saja.
- Fullscreen dan navigasi tidak mengganggu aktivitas kelas.
- Tidak ada overflow, tumpang tindih, atau kontrol yang tidak dapat digunakan pada layar target.
