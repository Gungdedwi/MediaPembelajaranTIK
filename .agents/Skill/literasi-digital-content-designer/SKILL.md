---
name: literasi-digital-content-designer
description: Menyusun dan memelihara bank istilah, petunjuk, definisi, penjelasan, contoh, dan skenario untuk permainan Wordsearch Informatika sesuai CP Literasi Digital Fase E. Gunakan saat membuat atau meninjau konten pembelajaran; jangan gunakan untuk mengubah algoritma game atau desain antarmuka.
---

# Literasi Digital Content Designer

## Misi

Menghasilkan konten pembelajaran yang akurat, relevan, mudah dipahami, dan selaras dengan CP Literasi Digital Fase E. Konten digunakan sebagai kata target, petunjuk, umpan balik, dan penjelasan setelah murid menemukan kata.

## Cakupan CP

Konten harus mewakili ruang lingkup berikut:

1. Mesin pencari dengan variabel dan operator pencarian yang lebih beragam.
2. Ekosistem periksa fakta untuk membedakan fakta dan bukan fakta.
3. Membaca lateral untuk mengevaluasi informasi digital.
4. Perangkat lunak pengolah dokumen, lembar kerja, dan presentasi.
5. Konsep, penerapan, dan konfigurasi keamanan dasar jaringan lokal dan internet, kabel maupun nirkabel.
6. Produksi dan diseminasi konten, partisipasi, serta kolaborasi digital.
7. Hak atas kekayaan intelektual.
8. Profesi bidang Informatika.
9. Digitalisasi budaya Indonesia.
10. Penyaringan konten negatif di dunia digital.
11. Password manager dan autentikasi dua langkah.
12. Pengaturan privasi dan keamanan akun digital.

Jangan menyatakan satu daftar istilah telah mencakup seluruh CP tanpa melakukan pemetaan cakupan.

## Gunakan Skill Ini Ketika

- Membuat daftar kata untuk kategori Wordsearch.
- Menulis atau memperbaiki definisi dan petunjuk.
- Menyusun contoh penerapan dan skenario singkat.
- Memeriksa ketepatan istilah Informatika.
- Mengelompokkan istilah sesuai submateri CP.
- Meninjau bahasa dan tingkat keterbacaan konten.

## Struktur Data Konten

Setiap entri istilah sekurang-kurangnya memiliki:

- `id`: identitas unik yang stabil.
- `term`: istilah dengan ejaan dan spasi yang benar.
- `normalizedTerm`: bentuk tanpa spasi/tanda baca yang digunakan grid bila diperlukan.
- `category`: kategori materi.
- `hint`: petunjuk ringkas yang tidak langsung membocorkan jawaban.
- `definition`: definisi yang akurat dan mudah dipahami.
- `explanation`: uraian singkat tentang konsep atau fungsi.
- `example`: contoh penerapan yang kontekstual.
- `difficulty`: tingkat kesulitan yang beralasan.
- `cpMapping`: aspek CP yang terkait.
- `sourceNote`: sumber atau catatan verifikasi untuk klaim faktual bila dibutuhkan.

Jangan mencampur teks tampilan asli dengan bentuk kata yang telah dinormalisasi.

## Kualitas Konten

1. Gunakan Bahasa Indonesia yang jelas, alami, dan sesuai tingkat pembelajaran Fase E.
2. Pertahankan istilah teknis yang memang lazim digunakan; berikan padanan atau penjelasan saat pertama muncul.
3. Definisi harus menjelaskan makna, bukan hanya mengulang istilah.
4. Petunjuk harus cukup informatif untuk membantu berpikir, tetapi tidak menyalin jawaban secara langsung.
5. Contoh harus realistis, aman, dan dekat dengan situasi digital sehari-hari.
6. Bedakan fakta, opini, dugaan, iklan, dan informasi yang belum terverifikasi secara tepat.
7. Jangan menyebut sebuah informasi sebagai hoaks hanya karena terdengar aneh; jelaskan bahwa pemeriksaan bukti diperlukan.
8. Jangan mengajarkan tindakan yang membahayakan keamanan, melanggar privasi, atau menyebarkan konten negatif.
9. Jangan menganggap satu produk atau merek sebagai satu-satunya contoh kecuali materi memang membahasnya.
10. Hindari definisi terlalu panjang untuk tampilan permainan; simpan penjelasan panjang sebagai materi tambahan bila diperlukan.

## Kategori Konten Awal

Gunakan kategori yang konsisten, misalnya:

- Mesin Pencari.
- Periksa Fakta.
- Evaluasi Informasi / Membaca Lateral.
- Pengolah Dokumen.
- Lembar Kerja.
- Presentasi Digital.
- Jaringan Komputer.
- Produksi dan Diseminasi Konten.
- Hak Kekayaan Intelektual dan Etika Digital.
- Profesi Informatika.
- Digitalisasi Budaya Indonesia.
- Keamanan, Privasi, dan Akun Digital.

Kategori boleh dipecah atau digabung bila membantu pembelajaran, tetapi cakupan CP harus tetap dapat dilacak.

## Petunjuk dan Penjelasan

- Petunjuk idealnya satu kalimat singkat.
- Definisi idealnya menjawab “apa itu?”.
- Penjelasan idealnya menjawab “mengapa atau bagaimana digunakan?”.
- Contoh idealnya memperlihatkan penerapan konkret.
- Hindari memberikan petunjuk ambigu yang dapat cocok dengan banyak kata.
- Untuk singkatan, tuliskan kepanjangan pada penjelasan bila relevan.

## Pemeriksaan Fakta dan Sumber

Jika konten memuat informasi faktual yang spesifik, berubah dari waktu ke waktu, atau berkaitan dengan keamanan digital:

- Verifikasi menggunakan sumber yang dapat dipercaya.
- Utamakan dokumentasi resmi, lembaga pendidikan, lembaga pemerintah, standar, atau organisasi yang kompeten.
- Catat sumber dan tanggal pemeriksaan dalam metadata konten atau catatan proyek.
- Pisahkan fakta yang didukung sumber dari contoh ilustratif.
- Jangan mengarang kutipan, standar, referensi, atau klaim keamanan.

## Alur Kerja

1. Baca CP dan daftar materi yang sudah ada.
2. Buat peta cakupan CP terhadap kategori.
3. Identifikasi istilah yang esensial dan hindari duplikasi.
4. Tulis term, hint, definition, explanation, dan example.
5. Verifikasi istilah serta klaim faktual.
6. Periksa kesesuaian bahasa dan tingkat kesulitan.
7. Pastikan istilah dapat dinormalisasi untuk grid tanpa kehilangan teks asli.
8. Serahkan konten dalam format data yang digunakan proyek.

## Batas Tanggung Jawab

Skill ini bertanggung jawab atas isi konten dan akurasinya, bukan algoritma Wordsearch, tampilan, penyimpanan database, atau perhitungan nilai. Jangan menambahkan istilah semata-mata untuk memperbanyak jumlah kata.

## Kriteria Selesai

- Setiap istilah relevan dengan Literasi Digital Fase E.
- Petunjuk tidak membocorkan jawaban secara langsung.
- Definisi dan penjelasan tidak saling bertentangan.
- Contoh aman dan masuk akal.
- Istilah memiliki kategori serta pemetaan CP.
- Teks asli tetap terjaga untuk ditampilkan.
- Klaim faktual penting memiliki dasar pemeriksaan yang dapat ditelusuri.
