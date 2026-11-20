import { CategoryData } from './types.ts';
import { normalizeWord } from '../engine/normalizer.ts';

export const CURRICULUM_CATEGORIES: CategoryData[] = [
  {
    id: 'search-engine-credibility',
    name: 'Pencarian & Fakta',
    title: 'Mesin Pencari & Kredibilitas Informasi',
    description: 'Pelajari cara kerja mesin pencari, memilah sumber tepercaya, dan mengenali fakta vs hoaks.',
    iconName: 'Search',
    cpDescription: 'Memahami cara kerja mesin pencari, kualitas & kredibilitas informasi, pers digital, serta membedakan fakta, opini, dan hoaks (CP 1-4).',
    learningGoal: 'Peserta didik mampu mengidentifikasi cara kerja mesin pencari serta membedakan informasi fakta, opini, dan hoaks dari media pers/digital.',
    terms: [
      {
        id: 'sec-1',
        term: 'SEARCH ENGINE',
        normalizedTerm: normalizeWord('SEARCH ENGINE'),
        category: 'search-engine-credibility',
        cpRef: 'CP-1',
        hint: 'Program web yang digunakan untuk mencari informasi di internet.',
        definition: 'Mesin pencari adalah perangkat lunak berbasis web yang mengumpulkan, mengindeks, dan menampilkan halaman web sesuai kata kunci.',
        explanation: 'Mesin pencari bekerja dengan web crawler/bot yang menjelajahi situs web, menyimpannya di indeks besar, lalu memberi peringkat hasil yang paling relevan.',
        example: 'Mengetik "sejarah komputer kelas 8" pada Google atau Bing untuk menemukan artikel pembelajaran.',
        difficulty: 'easy'
      },
      {
        id: 'sec-2',
        term: 'KATA KUNCI',
        normalizedTerm: normalizeWord('KATA KUNCI'),
        category: 'search-engine-credibility',
        cpRef: 'CP-1',
        hint: 'Kata atau frasa spesifik yang dimasukkan pada kotak pencarian.',
        definition: 'Kata kunci (keyword) adalah kata atau kombinasi istilah penting yang mewakili informasi yang ingin ditemukan oleh pengguna.',
        explanation: 'Menggunakan kata kunci yang spesifik dan tepat membuat hasil pencarian lebih relevan dan menghemat waktu pencarian.',
        example: 'Menggunakan kata kunci "resep masakan tradisional Bali" daripada hanya menulis "makanan enak".',
        difficulty: 'easy'
      },
      {
        id: 'sec-3',
        term: 'KREDIBILITAS',
        normalizedTerm: normalizeWord('KREDIBILITAS'),
        category: 'search-engine-credibility',
        cpRef: 'CP-2',
        hint: 'Tingkat kepercayaan terhadap suatu sumber informasi.',
        definition: 'Kredibilitas adalah derajat keterpercayaan, keahlian, dan kejujuran dari penulis atau institusi yang menerbitkan informasi.',
        explanation: 'Informasi kredibel biasanya memiliki penulis yang jelas, diterbitkan oleh lembaga resmi/terdaftar, dan mencantumkan data rujukan yang dapat dibuktikan.',
        example: 'Memilih rujukan dari situs web Kemendikbudristek atau jurnal ilmiah dibandingkan blog pribadi anonim saat mengerjakan tugas sekolah.',
        difficulty: 'medium'
      },
      {
        id: 'sec-4',
        term: 'HOAKS',
        normalizedTerm: normalizeWord('HOAKS'),
        category: 'search-engine-credibility',
        cpRef: 'CP-4',
        hint: 'Informasi bohong yang sengaja disamarkan seolah-olah benar.',
        definition: 'Hoaks adalah berita palsu atau informasi yang direkayasa dengan tujuan menyesatkan, memicu kepanikan, atau menipu pembaca.',
        explanation: 'Hoaks sering menggunakan judul sensasional, meminta disebarkan segera ("viralkan!"), dan tidak memiliki bukti fakta yang terverifikasi.',
        example: 'Pesan berantai di grup obrolan yang mengklaim internet akan dimatikan total besok lusa tanpa surat resmi pemerintah.',
        difficulty: 'easy'
      },
      {
        id: 'sec-5',
        term: 'FAKTA',
        normalizedTerm: normalizeWord('FAKTA'),
        category: 'search-engine-credibility',
        cpRef: 'CP-4',
        hint: 'Kenyataan objektif yang dapat dibuktikan kebenarannya.',
        definition: 'Fakta adalah peristiwa, keadaan, atau data yang benar-benar terjadi dan dapat dibuktikan dengan bukti empiris atau catatan resmi.',
        explanation: 'Fakta bersifat objektif dan tidak berubah hanya karena perasaan atau preferensi pribadi seseorang.',
        example: '"Ibu kota Republik Indonesia pada tahun 2024 mulai dipersiapkan bertahap ke IKN Nusantara."',
        difficulty: 'easy'
      },
      {
        id: 'sec-6',
        term: 'OPINI',
        normalizedTerm: normalizeWord('OPINI'),
        category: 'search-engine-credibility',
        cpRef: 'CP-4',
        hint: 'Pendapat, anggapan, atau pandangan subjektif seseorang.',
        definition: 'Opini adalah penilaian, sikap, atau perasaan seseorang terhadap suatu hal yang kebenarannya relatif dan belum tentu disepakati semua orang.',
        explanation: 'Opini sering menggunakan kata sifat seperti "terbaik", "paling seru", "seharusnya", atau "menurut saya".',
        example: '"Menurut Budi, permainan Wordsearch adalah cara paling menyenangkan belajar Informatika."',
        difficulty: 'easy'
      },
      {
        id: 'sec-7',
        term: 'PERS DIGITAL',
        normalizedTerm: normalizeWord('PERS DIGITAL'),
        category: 'search-engine-credibility',
        cpRef: 'CP-3',
        hint: 'Lembaga jurnalistik resmi yang mempublikasikan berita secara daring.',
        definition: 'Pers digital adalah media jurnalistik resmi berbadan hukum yang meliput dan mempublikasikan berita dengan mematuhi kode etik jurnalistik.',
        explanation: 'Berita dari pers digital terpercaya melewati proses verifikasi fakta dan redaksi, bukan sekadar opini pribadi tanpa cek silang.',
        example: 'Membaca berita di portal berita terdaftar di Dewan Pers untuk memastikan kebenaran suatu isu nasional.',
        difficulty: 'medium'
      },
      {
        id: 'sec-8',
        term: 'INDEKS',
        normalizedTerm: normalizeWord('INDEKS'),
        category: 'search-engine-credibility',
        cpRef: 'CP-1',
        hint: 'Basis data daftar halaman web yang telah dipindai oleh mesin pencari.',
        definition: 'Indeks mesin pencari adalah katalog raksasa berisi salinan data halaman web yang dianalisis agar dapat ditampilkan secepat kilat saat dicari.',
        explanation: 'Tanpa proses pengindeksan, mesin pencari harus memeriksa miliaran halaman web dari awal setiap kali ada pengguna yang mengetik kata.',
        example: 'Setelah web sekolah dibuat, pengelola mendaftarkan peta situs (sitemap) agar masuk ke indeks pencarian.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'computer-networking',
    name: 'Komputer & Jaringan',
    title: 'Komponen Komputer & Jaringan Internet',
    description: 'Pahami komponen fungsional komputer dan bagaimana perangkat saling terhubung dalam jaringan.',
    iconName: 'Cpu',
    cpDescription: 'Mendeskripsikan komponen, fungsi, dan cara kerja komputer serta memahami konektivitas jaringan lokal dan internet (CP 6-7).',
    learningGoal: 'Peserta didik mampu mendeskripsikan komponen utama komputer beserta fungsinya serta membedakan konektivitas jaringan kabel dan nirkabel.',
    terms: [
      {
        id: 'cn-1',
        term: 'PROSESOR',
        normalizedTerm: normalizeWord('PROSESOR'),
        category: 'computer-networking',
        cpRef: 'CP-6',
        hint: 'Otak utama komputer yang memproses semua instruksi instruksi data.',
        definition: 'Prosesor (CPU) adalah unit pemroses pusat yang menjalankan instruksi program dan mengendalikan seluruh operasi komputer.',
        explanation: 'Semakin tinggi frekuensi dan efisiensi prosesor, semakin cepat komputer menjalankan perhitungan dan aplikasi secara bersamaan.',
        example: 'Saat kamu membuka game, prosesor menghitung koordinat dan logika permainan setiap detik.',
        difficulty: 'easy'
      },
      {
        id: 'cn-2',
        term: 'MEMORI RAM',
        normalizedTerm: normalizeWord('MEMORI RAM'),
        category: 'computer-networking',
        cpRef: 'CP-6',
        hint: 'Penyimpanan data sementara saat komputer sedang menyala.',
        definition: 'RAM (Random Access Memory) adalah tempat penyimpanan data kerja yang diakses cepat oleh prosesor dan bersifat sementara (volatile).',
        explanation: 'Data di RAM akan hilang saat komputer dimatikan. RAM memungkinkan multitasking membuka banyak tab dan aplikasi sekaligus tanpa macet.',
        example: 'Membuka peramban web sambil mendengarkan musik berjalan lancar berkat kapasitas RAM yang mencukupi.',
        difficulty: 'easy'
      },
      {
        id: 'cn-3',
        term: 'HARD DISK',
        normalizedTerm: normalizeWord('HARD DISK'),
        category: 'computer-networking',
        cpRef: 'CP-6',
        hint: 'Media penyimpanan permanen untuk sistem operasi, file, dan aplikasi.',
        definition: 'Media penyimpanan sekunder non-volatile yang menyimpan data secara permanen bahkan setelah aliran listrik terputus.',
        explanation: 'Saat ini terdapat dua jenis media utama: HDD (piringan magnetik) dan SSD (chip memori kilat yang jauh lebih cepat).',
        example: 'Menyimpan video tugas presentasi dan foto kegiatan ekstrakurikuler di drive komputer.',
        difficulty: 'easy'
      },
      {
        id: 'cn-4',
        term: 'JARINGAN LOKAL',
        normalizedTerm: normalizeWord('JARINGAN LOKAL'),
        category: 'computer-networking',
        cpRef: 'CP-7',
        hint: 'Jaringan yang menghubungkan komputer dalam area terbatas (LAN).',
        definition: 'LAN (Local Area Network) adalah jaringan komputer yang mencakup area geografis sempit seperti ruangan, laboratorium sekolah, atau satu gedung.',
        explanation: 'Jaringan lokal memungkinkan pertukaran berkas cepat antarkomputer dan pemakaian bersama printer tanpa memerlukan akses internet luar.',
        example: 'Komputer di laboratorium sekolah saling terhubung ke satu printer bersama di meja guru.',
        difficulty: 'medium'
      },
      {
        id: 'cn-5',
        term: 'INTERNET',
        normalizedTerm: normalizeWord('INTERNET'),
        category: 'computer-networking',
        cpRef: 'CP-7',
        hint: 'Jaringan raksasa global yang menghubungkan komputer di seluruh dunia.',
        definition: 'Internet (Interconnected Network) adalah sistem jaringan komunikasi global yang menghubungkan miliaran jaringan komputer publik dan privat.',
        explanation: 'Internet menggunakan protokol standar TCP/IP sehingga berbagai merek perangkat dari negara mana pun dapat saling berkomunikasi.',
        example: 'Mengirim email tugas ke guru atau menonton siaran video edukasi dari belahan dunia lain.',
        difficulty: 'easy'
      },
      {
        id: 'cn-6',
        term: 'ROUTER',
        normalizedTerm: normalizeWord('ROUTER'),
        category: 'computer-networking',
        cpRef: 'CP-7',
        hint: 'Perangkat yang mengarahkan lalu lintas data antarjaringan berbeda.',
        definition: 'Router adalah perangkat keras jaringan yang meneruskan paket data antardua jaringan atau lebih, seperti antara LAN sekolah dan internet.',
        explanation: 'Router menentukan rute terbaik agar paket data sampai ke alamat tujuan dengan cepat dan aman.',
        example: 'Kotak Wi-Fi di rumah atau sekolah yang menerima kabel penyedia internet dan membagikannya ke HP siswa.',
        difficulty: 'medium'
      },
      {
        id: 'cn-7',
        term: 'NIRKABEL',
        normalizedTerm: normalizeWord('NIRKABEL'),
        category: 'computer-networking',
        cpRef: 'CP-7',
        hint: 'Teknologi komunikasi data tanpa menggunakan kabel fisik (seperti Wi-Fi).',
        definition: 'Nirkabel (wireless) adalah metode transfer data menggunakan gelombang elektromagnetik (radio/inframerah) tanpa perantara kabel.',
        explanation: 'Teknologi nirkabel memberi fleksibilitas tinggi bagi perangkat bergerak seperti laptop dan ponsel untuk tetap terhubung ke jaringan.',
        example: 'Menyambungkan tablet ke Wi-Fi sekolah saat duduk di teras perpustakaan.',
        difficulty: 'medium'
      },
      {
        id: 'cn-8',
        term: 'KABEL LAN',
        normalizedTerm: normalizeWord('KABEL LAN'),
        category: 'computer-networking',
        cpRef: 'CP-7',
        hint: 'Media transmisi data fisik berbahan tembaga/serat (seperti kabel UTP).',
        definition: 'Kabel jaringan berpilin (biasanya UTP dengan konektor RJ45) yang digunakan untuk transmisi sinyal data fisik antarperangkat jaringan.',
        explanation: 'Koneksi kabel umumnya memiliki kecepatan lebih stabil dan minim interferensi dibandingkan gelombang nirkabel.',
        example: 'Kabel biru yang dicolokkan dari komputer laboratorium ke switch di dinding kelas.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'office-content',
    name: 'Aplikasi & Konten',
    title: 'Pengolah Dokumen, Lembar Kerja & Diseminasi Konten',
    description: 'Kenali perangkat lunak produktivitas dan etika menyebarkan konten positif di ruang digital.',
    iconName: 'FileText',
    cpDescription: 'Pemanfaatan pengolah dokumen, lembar kerja, presentasi, ruang publik virtual, produksi dan diseminasi konten (CP 5, 8, 9).',
    learningGoal: 'Peserta didik mampu mengidentifikasi perangkat lunak pengolah dokumen, angka, dan presentasi serta memahami etika berinteraksi di ruang publik virtual.',
    terms: [
      {
        id: 'oc-1',
        term: 'DOKUMEN',
        normalizedTerm: normalizeWord('DOKUMEN'),
        category: 'office-content',
        cpRef: 'CP-5',
        hint: 'Berkas teks digital yang dibuat menggunakan pengolah kata.',
        definition: 'File teks terstruktur yang berisi tulisan, gambar, atau tabel yang dibuat menggunakan perangkat lunak pengolah kata.',
        explanation: 'Aplikasi pengolah kata (seperti Google Docs atau Microsoft Word) memudahkan penyusunan makalah, surat, dan laporan tugas.',
        example: 'Mengetik laporan praktikum IPA lengkap dengan daftar isi dan nomor halaman.',
        difficulty: 'easy'
      },
      {
        id: 'oc-2',
        term: 'LEMBAR KERJA',
        normalizedTerm: normalizeWord('LEMBAR KERJA'),
        category: 'office-content',
        cpRef: 'CP-5',
        hint: 'Aplikasi berbasis baris dan kolom untuk mengolah angka dan grafik.',
        definition: 'Spreadsheet adalah perangkat lunak pengolah data tabel berbentuk baris dan kolom yang dilengkapi rumus matematika dan statistik.',
        explanation: 'Memungkinkan perhitungan otomatis dengan rumus (formula) seperti SUM, AVERAGE, dan pembuatan diagram grafik visual.',
        example: 'Mencatat rekap nilai ulangan kelas dan membuat grafik batang perolehan nilai siswa.',
        difficulty: 'medium'
      },
      {
        id: 'oc-3',
        term: 'PRESENTASI',
        normalizedTerm: normalizeWord('PRESENTASI'),
        category: 'office-content',
        cpRef: 'CP-5',
        hint: 'Media tayang visual berbentuk slide untuk menyampaikan ide kepada audiens.',
        definition: 'Aplikasi perancang salindia (slide) visual yang menggabungkan teks poin-poin, diagram, gambar, dan animasi untuk pemaparan di depan kelas.',
        explanation: 'Presentasi yang baik tidak memuat terlalu banyak paragraf panjang, melainkan fokus pada poin utama dan gambar yang komunikatif.',
        example: 'Menampilkan salindia ringkasan materi saat mempresentasikan tugas kelompok di depan kelas.',
        difficulty: 'easy'
      },
      {
        id: 'oc-4',
        term: 'RUANG PUBLIK',
        normalizedTerm: normalizeWord('RUANG PUBLIK'),
        category: 'office-content',
        cpRef: 'CP-8',
        hint: 'Tempat virtual di internet di mana siapapun dapat melihat dan berinteraksi.',
        definition: 'Ruang publik virtual adalah platform daring (media sosial, forum, kolom komentar terbuka) yang dapat diakses oleh khalayak ramai.',
        explanation: 'Di ruang publik virtual, setiap ucapan dan unggahan memiliki konsekuensi hukum dan etika karena dapat dibaca oleh siapa saja.',
        example: 'Kolom komentar video YouTube atau forum diskusi komunitas terbuka di internet.',
        difficulty: 'medium'
      },
      {
        id: 'oc-5',
        term: 'KONTEN DIGITAL',
        normalizedTerm: normalizeWord('KONTEN DIGITAL'),
        category: 'office-content',
        cpRef: 'CP-9',
        hint: 'Karya dalam format digital seperti teks, gambar, audio, atau video.',
        definition: 'Segala bentuk informasi, karya cipta, atau media yang disimpan dan dibagikan dalam format digital terkomputerisasi.',
        explanation: 'Murid SMP didorong menjadi produsen konten edukatif dan positif, bukan hanya konsumen pasif konten hiburan.',
        example: 'Membuat poster infografis tentang pentingnya memilah sampah menggunakan aplikasi grafis.',
        difficulty: 'easy'
      },
      {
        id: 'oc-6',
        term: 'DISEMINASI',
        normalizedTerm: normalizeWord('DISEMINASI'),
        category: 'office-content',
        cpRef: 'CP-9',
        hint: 'Penyebarluasan informasi atau konten kepada khalayak sasaran.',
        definition: 'Diseminasi adalah kegiatan menyebarkan atau mempublikasikan ide, materi edukasi, atau konten kepada masyarakat luas.',
        explanation: 'Sebelum mendiseminasikan konten, kita harus memastikan materi bermanfaat, tidak melanggar hak cipta, dan bebas dari hoaks.',
        example: 'Menyebarkan brosur digital kegiatan perlombaan OSIS melalui akun resmi sekolah.',
        difficulty: 'hard'
      },
      {
        id: 'oc-7',
        term: 'KOLABORASI',
        normalizedTerm: normalizeWord('KOLABORASI'),
        category: 'office-content',
        cpRef: 'CP-5',
        hint: 'Bekerja bersama-sama dalam satu berkas atau proyek digital secara daring.',
        definition: 'Fitur kerja sama di mana beberapa pengguna dapat mengedit satu dokumen bersama secara bersamaan (real-time) melalui internet.',
        explanation: 'Kolaborasi digital mempermudah kerja kelompok meski anggota berada di tempat berbeda.',
        example: 'Tiga orang siswa mengetik bersama bab tugas makalah di dokumen Google Docs yang sama.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'security-privacy',
    name: 'Keamanan & Privasi',
    title: 'Perlindungan Data Pribadi & Keamanan Siber',
    description: 'Pelajari cara membuat kata sandi yang kuat, menghindari malware, dan melindungi data sensitif.',
    iconName: 'ShieldAlert',
    cpDescription: 'Memahami rekam jejak digital, kata sandi aman, perlindungan dari malware, pemilahan informasi privat/publik, dan data pribadi (CP 10, 13-16).',
    learningGoal: 'Peserta didik mampu memilah data pribadi yang bersifat privat vs publik, menyusun kriteria kata sandi yang aman, dan mengenali jenis ancaman malware.',
    terms: [
      {
        id: 'sp-1',
        term: 'KATA SANDI',
        normalizedTerm: normalizeWord('KATA SANDI'),
        category: 'security-privacy',
        cpRef: 'CP-13',
        hint: 'Kunci rahasia untuk membuka dan mengamankan akun digital.',
        definition: 'Kata sandi (password) adalah serangkaian karakter rahasia yang digunakan untuk membuktikan identitas pemilik akun saat login.',
        explanation: 'Kata sandi yang aman memiliki panjang minimal 8–12 karakter, menggabungkan huruf besar, kecil, angka, dan simbol, serta tidak mudah ditebak.',
        example: 'Menggunakan "P@ndu4nBelaj4r!" daripada hanya tanggal lahir "12032011" yang mudah dibobol.',
        difficulty: 'easy'
      },
      {
        id: 'sp-2',
        term: 'REKAM JEJAK',
        normalizedTerm: normalizeWord('REKAM JEJAK'),
        category: 'security-privacy',
        cpRef: 'CP-10',
        hint: 'Bukti aktivitas digital yang tertinggal saat berselancar di internet.',
        definition: 'Rekam jejak digital adalah jejak data yang tertinggal saat menggunakan internet, meliputi situs yang dikunjungi, komentar, dan unggahan.',
        explanation: 'Rekam jejak digital sangat sulit dihapus sepenuhnya dan dapat memengaruhi reputasi serta masa depan kita di sekolah maupun dunia kerja.',
        example: 'Komentar masa lalu di media sosial yang masih bisa dicari bertahun-tahun kemudian melalui mesin pencari.',
        difficulty: 'medium'
      },
      {
        id: 'sp-3',
        term: 'MALWARE',
        normalizedTerm: normalizeWord('MALWARE'),
        category: 'security-privacy',
        cpRef: 'CP-14',
        hint: 'Perangkat lunak berbahaya yang dirancang merusak atau mencuri data.',
        definition: 'Malware (Malicious Software) adalah program jahat (seperti virus, worm, trojan, spyware) yang dibuat untuk menginfeksi perangkat.',
        explanation: 'Malware dapat masuk melalui lampiran email mencurigakan, flashdisk terinfeksi, atau unduhan aplikasi bajakan.',
        example: 'Komputer tiba-tiba menjadi lambat dan membuka iklan tak dikenal setelah mengunduh cheat game dari situs ilegal.',
        difficulty: 'easy'
      },
      {
        id: 'sp-4',
        term: 'ANTIVIRUS',
        normalizedTerm: normalizeWord('ANTIVIRUS'),
        category: 'security-privacy',
        cpRef: 'CP-14',
        hint: 'Program pelindung untuk mendeteksi dan menghapus program jahat.',
        definition: 'Perangkat lunak keamanan yang memindai sistem, mencegah infeksi malware, dan membersihkan ancaman yang ditemukan.',
        explanation: 'Antivirus harus selalu diperbarui (update) definisinya agar dapat mengenali varian malware terbaru yang beredar di internet.',
        example: 'Mengaktifkan Windows Defender dan memindai flashdisk sebelum membuka file tugas di komputer.',
        difficulty: 'easy'
      },
      {
        id: 'sp-5',
        term: 'DATA PRIBADI',
        normalizedTerm: normalizeWord('DATA PRIBADI'),
        category: 'security-privacy',
        cpRef: 'CP-16',
        hint: 'Informasi khusus tentang diri seseorang yang harus dijaga kerahasiaannya.',
        definition: 'Data pribadi adalah data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi secara tersendiri atau berkombinasi.',
        explanation: 'Data spesifik seperti NIK, nomor rekening orang tua, dan riwayat kesehatan tidak boleh dibagikan sembarangan di media sosial.',
        example: 'Menolak mengisi formulir di internet yang meminta foto kartu keluarga tanpa kejelasan pihak yang bertanggung jawab.',
        difficulty: 'easy'
      },
      {
        id: 'sp-6',
        term: 'PRIVASI',
        normalizedTerm: normalizeWord('PRIVASI'),
        category: 'security-privacy',
        cpRef: 'CP-15',
        hint: 'Hak untuk menjaga rahasia kehidupan pribadi dari penglihatan umum.',
        definition: 'Privasi adalah kebebasan individu untuk menentukan kapan, bagaimana, dan sejauh mana informasi tentang dirinya boleh dibagikan kepada pihak lain.',
        explanation: 'Mengatur setelan akun media sosial menjadi privat (*private account*) adalah salah satu contoh melindungi privasi pribadi.',
        example: 'Hanya mengizinkan teman yang dikenal melihat postingan cerita harian di media sosial.',
        difficulty: 'medium'
      },
      {
        id: 'sp-7',
        term: 'PHISHING',
        normalizedTerm: normalizeWord('PHISHING'),
        category: 'security-privacy',
        cpRef: 'CP-14',
        hint: 'Upaya penipuan untuk memancing korban memberikan kata sandi atau data rahasia.',
        definition: 'Phishing adalah kejahatan siber berupa pengelabuan dengan menyamar sebagai pihak tepercaya untuk memancing korban memberikan data sensitif.',
        explanation: 'Pelaku sering mengirim pesan palsu berkedok hadiah pulsa gratis atau tautan akun terkunci yang mengarah ke situs tiruan.',
        example: 'Menerima pesan SMS berisi tautan login bank palsu dengan iming-iming menang undian smartphone.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'digital-ethics',
    name: 'Etika & Mindfulness',
    title: 'Toleransi, Netiket & Kesejahteraan Digital',
    description: 'Tumbuhkan empati, cegah perundungan siber, dan terapkan kesadaran penuh saat menggunakan teknologi.',
    iconName: 'HeartHandshake',
    cpDescription: 'Mengamalkan toleransi dan empati, memahami dampak perundungan digital, serta kesadaran penuh (mindfulness) dalam dunia digital (CP 11, 12, 17).',
    learningGoal: 'Peserta didik mampu mengidentifikasi dampak perundungan digital serta menerapkan sikap empati, toleransi, dan kesadaran penuh (digital mindfulness).',
    terms: [
      {
        id: 'de-1',
        term: 'TOLERANSI',
        normalizedTerm: normalizeWord('TOLERANSI'),
        category: 'digital-ethics',
        cpRef: 'CP-11',
        hint: 'Sikap menghargai perbedaan pandangan dan latar belakang di ruang maya.',
        definition: 'Toleransi digital adalah kesediaan menghormati perbedaan suku, agama, pendapat, dan budaya saat berinteraksi di ruang siber.',
        explanation: 'Perbedaan pendapat di media sosial tidak boleh disikapi dengan ujaran kebencian (*hate speech*) atau penghinaan.',
        example: 'Tetap bertutur kata santun meskipun tidak sependapat dengan komentar teman di forum kelas.',
        difficulty: 'easy'
      },
      {
        id: 'de-2',
        term: 'EMPATI',
        normalizedTerm: normalizeWord('EMPATI'),
        category: 'digital-ethics',
        cpRef: 'CP-11',
        hint: 'Kemampuan membayangkan dan merasakan perasaan orang lain sebelum berkomentar.',
        definition: 'Empati digital adalah kemampuan memahami perasaan dan dampak emosional yang dialami orang lain akibat tindakan kita di dunia digital.',
        explanation: 'Sebelum menekan tombol kirim komentar, tanyakan pada diri sendiri: "Bagaimana perasaanku jika ucapan ini ditujukan kepadaku?".',
        example: 'Memberikan kalimat penyemangat kepada teman yang sedang sedih dan tidak ikut menertawakannya di grup kelas.',
        difficulty: 'easy'
      },
      {
        id: 'de-3',
        term: 'NETIKET',
        normalizedTerm: normalizeWord('NETIKET'),
        category: 'digital-ethics',
        cpRef: 'CP-11',
        hint: 'Etika dan tata krama dalam berkomunikasi di jaringan internet.',
        definition: 'Netiket (Network Etiquette) adalah aturan kesopanan dan etika sosial yang disepakati bersama dalam berkomunikasi daring.',
        explanation: 'Contoh netiket: tidak menulis dengan huruf kapital semua (karena terkesan membentak), tidak menyela obrolan, dan menyapa dengan sopan.',
        example: 'Mengucapkan salam pembuka dan menggunakan bahasa yang santun saat mengirim pesan WhatsApp kepada Bapak/Ibu guru.',
        difficulty: 'medium'
      },
      {
        id: 'de-4',
        term: 'CYBERBULLYING',
        normalizedTerm: normalizeWord('CYBERBULLYING'),
        category: 'digital-ethics',
        cpRef: 'CP-12',
        hint: 'Perundungan atau intimidasi yang dilakukan berulang kali lewat media digital.',
        definition: 'Perundungan siber adalah perilaku berulang yang bertujuan menakut-nakuti, membuat marah, atau mempermalukan orang lain menggunakan teknologi digital.',
        explanation: 'Dampak perundungan siber sangat berbahaya bagi kesehatan mental korban, menyebabkan trauma, cemas berlebih, hingga enggan bersekolah.',
        example: 'Menyebarkan foto aib teman tanpa izin di grup media sosial untuk menjadikannya bahan lelucon.',
        difficulty: 'medium'
      },
      {
        id: 'de-5',
        term: 'MINDFULNESS',
        normalizedTerm: normalizeWord('MINDFULNESS'),
        category: 'digital-ethics',
        cpRef: 'CP-17',
        hint: 'Kesadaran penuh dan pengendalian diri dalam menggunakan gawai dan internet.',
        definition: 'Mindfulness digital adalah kesadaran penuh saat menggunakan gawai, memahami tujuan pemakaian, serta mampu mengatur waktu (*screen time*) secara seimbang.',
        explanation: 'Mencegah kecanduan media sosial atau game online yang dapat merusak pola tidur, kesehatan mata, dan interaksi di dunia nyata.',
        example: 'Menaruh HP di luar kamar saat waktu tidur malam dan beristirahat 5 menit setelah 30 menit menatap layar monitor.',
        difficulty: 'hard'
      },
      {
        id: 'de-6',
        term: 'VERIFIKASI',
        normalizedTerm: normalizeWord('VERIFIKASI'),
        category: 'digital-ethics',
        cpRef: 'CP-11',
        hint: 'Tindakan memeriksa kebenaran suatu informasi sebelum mempercayai atau membagikannya.',
        definition: 'Verifikasi adalah langkah memeriksa dan memastikan kebenaran kabar dengan mencari sumber pembanding terpercaya (cek dan ricek).',
        explanation: 'Prinsip "Saring sebelum Sharing": jangan meneruskan berita sebelum yakin bahwa isinya benar dan membawa manfaat.',
        example: 'Mengecek ke situs web resmi sebelum mempercayai kabar pengumuman libur mendadak di media sosial.',
        difficulty: 'medium'
      }
    ]
  }
];

export const DIFFICULTY_CONFIG = {
  easy: {
    label: 'Mudah',
    gridSize: 10,
    maxWords: 5,
    allowedDirections: ['HORIZONTAL_LR', 'VERTICAL_TB'] as const,
    description: 'Grid 10×10. Kata hanya mengarah ke kanan dan ke bawah.'
  },
  medium: {
    label: 'Sedang',
    gridSize: 12,
    maxWords: 6,
    allowedDirections: ['HORIZONTAL_LR', 'VERTICAL_TB', 'DIAGONAL_TL_BR'] as const,
    description: 'Grid 12×12. Menambahkan arah diagonal turun.'
  },
  hard: {
    label: 'Tantangan',
    gridSize: 14,
    maxWords: 7,
    allowedDirections: [
      'HORIZONTAL_LR',
      'HORIZONTAL_RL',
      'VERTICAL_TB',
      'VERTICAL_BT',
      'DIAGONAL_TL_BR',
      'DIAGONAL_BL_TR',
      'DIAGONAL_TR_BL',
      'DIAGONAL_BR_TL'
    ] as const,
    description: 'Grid 14×14. Seluruh arah aktif, termasuk diagonal dan kata terbalik.'
  }
};
