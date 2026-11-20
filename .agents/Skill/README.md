# Wordsearch Informatika – Skill Pack

Paket ini berisi kumpulan skill modular untuk membantu AI coding agent mengembangkan aplikasi **Wordsearch Informatika – Literasi Digital**.

## Konteks proyek

- Platform: Web application.
- Penggunaan: pembelajaran di kelas.
- Pola permainan: individual.
- Materi: Literasi Digital, Informatika Fase E.
- Fokus produk: permainan Wordsearch yang mendukung pengenalan istilah dan aktivitas belajar lanjutan.

## Isi paket

| Folder skill | Tanggung jawab utama |
|---|---|
| `wordsearch-game-engineer` | Generator grid, penempatan kata, validasi pilihan, dan logika inti Wordsearch. |
| `wordsearch-ui-ux-designer` | UI/UX, responsivitas, aksesibilitas, dan tampilan permainan. |
| `literasi-digital-content-designer` | Bank istilah, petunjuk, definisi, contoh, dan akurasi konten. |
| `instructional-learning-designer` | Pemetaan CP, alur belajar, scaffolding, dan aktivitas pembelajaran. |
| `educational-assessment-engineer` | Mini Quiz, feedback, aturan skor, dan bukti belajar. |
| `classroom-presentation-designer` | Pengalaman guru dan murid dalam penggunaan di kelas/presentasi. |
| `full-stack-web-developer` | Integrasi frontend, backend, API, state, dan struktur aplikasi. |
| `database-architect` | Skema dan penyimpanan data jika memang diperlukan. |
| `application-security-engineer` | Keamanan web, kontrol akses, privasi, secret, dan API. |
| `pwa-offline-engineer` | PWA, cache, offline gameplay, penyimpanan lokal, dan sinkronisasi. |
| `qa-testing-engineer` | Test plan, pengujian, regresi, dan validasi kualitas. |
| `reporting-analytics-engineer` | Rekap hasil individual, dashboard guru, dan ekspor laporan. |
| `devops-deployment-engineer` | Build, hosting, CI/CD, HTTPS, rilis, dan rollback. |

Setiap folder memiliki file `SKILL.md` sendiri dengan metadata `name` dan `description` serta batas tanggung jawab yang spesifik.

## Cara memasang

Jika menggunakan struktur skill project-level Google Antigravity yang umum, letakkan folder-folder skill ini di dalam:

```text
.agent/skills/
```

Setelah diekstrak, struktur folder akan terlihat seperti:

```text
.agent/
└── skills/
    ├── wordsearch-game-engineer/
    │   └── SKILL.md
    ├── wordsearch-ui-ux-designer/
    │   └── SKILL.md
    ├── literasi-digital-content-designer/
    │   └── SKILL.md
    └── ...
```

Jika proyek atau versi tool Anda menggunakan lokasi skill yang berbeda, ikuti konfigurasi skill yang berlaku pada lingkungan tersebut. Jangan menaruh semua isi `SKILL.md` ke dalam satu file.

## Cara menggunakan

- Aktifkan skill sesuai jenis pekerjaan yang sedang dilakukan.
- Untuk tugas lintas bidang, gunakan beberapa skill yang relevan, bukan semua skill secara otomatis.
- Mulai dari skill paling spesifik, kemudian gunakan `full-stack-web-developer` untuk integrasi bila diperlukan.
- `database-architect`, `application-security-engineer`, `pwa-offline-engineer`, `reporting-analytics-engineer`, dan `devops-deployment-engineer` dipanggil sesuai kebutuhan fitur; jangan menambahkan kompleksitas yang tidak diminta.
- Periksa repository dan teknologi yang sudah ada sebelum mengubah arsitektur atau menambahkan dependency.

## Catatan penting

- Skill adalah pedoman cara kerja AI, bukan aplikasi yang sudah jadi.
- Skill tidak menggantikan kebutuhan validasi materi dan persetujuan guru.
- CP Fase E menjadi acuan konten; Wordsearch terutama mendukung pengenalan istilah. Kemampuan evaluasi dan penerapan memerlukan aktivitas lanjutan seperti skenario atau kuis.
- Jangan menganggap mode kelas berarti multiplayer real-time. Sistem permainan yang ditentukan adalah individual.
