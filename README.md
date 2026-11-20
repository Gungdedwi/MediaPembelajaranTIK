# Wordsearch Informatika – Literasi Digital (Fase D / Kelas VIII SMP)

Media pembelajaran interaktif berbasis web yang memadukan permainan **Wordsearch** dan aktivitas penguatan pemahaman konsep Literasi Digital untuk murid kelas VIII SMP (Fase D) sesuai **Panduan Mata Pelajaran Informatika 2025, Pusat Kurikulum dan Pembelajaran**.

---

## 🎯 Capaian Pembelajaran & 5 Kategori Tematik

Aplikasi ini mencakup 17 butir CP Informatika Fase D yang dikelompokkan ke dalam 5 kategori terpadu:

1. **Mesin Pencari & Kredibilitas Informasi (CP 1-4):** Cara kerja *search engine*, kata kunci, indeks, kredibilitas sumber, ekosistem pers digital, serta pembedaan fakta, opini, dan hoaks.
2. **Komputer & Konektivitas Jaringan (CP 6-7):** Komponen fungsional komputer (prosesor, RAM, media penyimpanan) dan konektivitas jaringan lokal (LAN) serta internet (kabel & nirkabel).
3. **Aplikasi Perkantoran & Kreasi Konten (CP 5, 8, 9):** Pemanfaatan perangkat lunak pengolah kata, spreadsheet, presentasi, ruang publik virtual, dan etika diseminasi konten.
4. **Keamanan Data & Privasi Digital (CP 10, 13-16):** Pembuatan kata sandi yang aman, pencegahan infeksi malware, pemilahan informasi privat vs publik, serta perlindungan rekam jejak digital.
5. **Etika Digital & Mindfulness (CP 11, 12, 17):** Toleransi, empati, tata krama komunikasi daring (netiket), pencegahan perundungan siber (*cyberbullying*), serta kesadaran penuh (*digital mindfulness*).

---

## ✨ Fitur Utama

- **Wordsearch Engine Dinamis:**
  - 3 Tingkat Kesulitan: Mudah (10×10), Sedang (12×12), dan Tantangan (14×14).
  - Mode Seleksi Ganda: *Drag selection* (mouse/layar sentuh) & *Click-to-Click* (klik huruf awal lalu huruf akhir, sangat ramah proyektor dan papan interaktif).
  - Normalisasi kata otomatis dengan pencegahan duplikasi skor.
- **Penguatan Konsep Pedagogis:**
  - Kartu eksplanasi instan saat kata ditemukan (definisi, cara kerja, dan contoh nyata kehidupan siswa).
  - Tombol Petunjuk (*Hint*) yang mengarahkan murid tanpa langsung membocorkan jawaban.
  - **Mini Quiz Skenario Kontekstual:** 2 butir soal kasus nyata per kategori yang membedakan skor game dari skor pemahaman konsep.
- **Dukungan Penggunaan di Kelas:**
  - **Mode Proyektor / Presentasi:** Rasio kontras tinggi, font ekstra besar, dan tombol *fullscreen* satu klik.
  - **Panduan Terintegrasi Guru:** Alur tahapan kegiatan apersepsi, aktivitas inti, hingga refleksi kelas.
- **Arsitektur Local-First:**
  - Tanpa login, tanpa server backend eksternal, menjaga keamanan data pribadi murid.

---

## 🚀 Cara Menjalankan Proyek

### Prasyarat
- Node.js (v18 ke atas disarankan)
- npm

### Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka peramban pada alamat `http://localhost:3000` (atau port yang ditampilkan terminal).

### Menjalankan Pengujian Unit Mesin Game
```bash
npm run test
```

### Membangun Versi Produksi (Build)
```bash
npm run build
```

---

## 🛠️ Stack Teknologi

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Ikonografi:** Lucide React
- **Audio:** Web Audio API (ringan & tanpa aset eksternal)
- **Unit Testing:** Vitest
