export interface QuizQuestion {
  id: string;
  categoryId: string;
  tpRef: string;
  scenario: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
}

export const QUIZ_DATABASE: Record<string, QuizQuestion[]> = {
  'search-engine-credibility': [
    {
      id: 'sec-q1',
      categoryId: 'search-engine-credibility',
      tpRef: 'TP-01',
      scenario: 'Doni menerima pesan berantai di WhatsApp yang berisi: "Kabar darurat! Menghirup uap air panas mendidih dapat membasmi semua jenis virus komputer di HP Anda. Segera bagikan pesan ini ke 10 orang!"',
      question: 'Berdasarkan ciri-ciri informasi di atas, tindakan yang paling bijak dan benar dilakukan Doni adalah...',
      options: [
        { id: 'A', text: 'Langsung meneruskan pesan tersebut ke grup kelas agar teman-teman terhindar dari virus.' },
        { id: 'B', text: 'Mengidentifikasi pesan sebagai hoaks karena tidak masuk akal secara teknis, lalu tidak menyebarkannya.' },
        { id: 'C', text: 'Mempraktikkan petunjuk tersebut pada ponselnya terlebih dahulu sebelum bertanya.' },
        { id: 'D', text: 'Membalas pesan dengan kata-kata kasar kepada pengirimnya di grup umum.' }
      ],
      correctOptionId: 'B',
      explanation: 'Pesan tersebut merupakan hoaks khas dengan ciri klaim tidak masuk akal (uap air panas justru dapat merusak komponen elektronik ponsel) dan menyertakan paksaan membagikan segera. Tindakan tepat adalah memutus rantai hoaks dengan tidak menyebarkannya.'
    },
    {
      id: 'sec-q2',
      categoryId: 'search-engine-credibility',
      tpRef: 'TP-01',
      scenario: 'Siti ingin mencari data resmi mengenai jumlah pulau di Indonesia untuk tugas IPS kelas 8.',
      question: 'Manakah strategi pencarian dan pemilihan sumber yang memiliki tingkat kredibilitas paling tinggi?',
      options: [
        { id: 'A', text: 'Membuka blog gratis tanpa nama penulis yang baru dibuat kemarin.' },
        { id: 'B', text: 'Mengetik "jumlah pulau di Indonesia site:bps.go.id" untuk mengakses data resmi Badan Pusat Statistik.' },
        { id: 'C', text: 'Mengambil informasi dari status media sosial seorang selebriti internet.' },
        { id: 'D', text: 'Memilih situs web pertama di hasil pencarian tanpa memeriksa siapa penerbitnya.' }
      ],
      correctOptionId: 'B',
      explanation: 'Penggunaan kata kunci spesifik yang diarahkan ke domain resmi lembaga pemerintah (bps.go.id) menjamin data yang diperoleh kredibel, akurat, dan dapat dipertanggungjawabkan.'
    }
  ],
  'computer-networking': [
    {
      id: 'cn-q1',
      categoryId: 'computer-networking',
      tpRef: 'TP-02',
      scenario: 'Laboratorium komputer sekolah memiliki 20 unit komputer yang ingin dihubungkan agar semua siswa bisa mencetak tugas ke satu printer di meja guru tanpa harus menggunakan koneksi internet luar.',
      question: 'Jenis jaringan dan komponen utama yang paling tepat digunakan untuk kebutuhan ini adalah...',
      options: [
        { id: 'A', text: 'Jaringan internet internasional dengan satelit luar angkasa.' },
        { id: 'B', text: 'Jaringan lokal (LAN) menggunakan switch atau kabel jaringan/Wi-Fi lokal.' },
        { id: 'C', text: 'Koneksi Bluetooth jarak jauh antarbenua.' },
        { id: 'D', text: 'Tidak mungkin dilakukan tanpa kuota internet aktif di setiap komputer.' }
      ],
      correctOptionId: 'B',
      explanation: 'Jaringan lokal (LAN - Local Area Network) dirancang khusus untuk menghubungkan perangkat dalam area terbatas seperti satu ruangan lab, memungkinkan berbagi sumber daya (file & printer) secara lokal tanpa bergantung pada internet.'
    },
    {
      id: 'cn-q2',
      categoryId: 'computer-networking',
      tpRef: 'TP-02',
      scenario: 'Rian sedang mengerjakan tugas makalah di laptopnya. Tiba-tiba listrik rumah padam dan laptop mati karena baterainya rusak. Saat listrik menyala kembali dan file dibuka, paragraf terakhir yang belum sempat ia simpan (Save) hilang.',
      question: 'Mengapa teks yang belum disimpan tersebut hilang saat aliran listrik terputus?',
      options: [
        { id: 'A', text: 'Karena data yang sedang diketik masih berada di memori RAM yang bersifat sementara (volatile).' },
        { id: 'B', text: 'Karena prosesor komputer rusak permanen terkena petir.' },
        { id: 'C', text: 'Karena hard disk komputer otomatis menghapus teks.' },
        { id: 'D', text: 'Karena kabel jaringan internet terputus.' }
      ],
      correctOptionId: 'A',
      explanation: 'RAM bersifat volatile (data hilang saat tidak ada aliran listrik). Sebelum tombol Simpan ditekan, ketikan baru berada di RAM dan belum dituliskan ke media penyimpanan permanen (hard disk/SSD).'
    }
  ],
  'office-content': [
    {
      id: 'oc-q1',
      categoryId: 'office-content',
      tpRef: 'TP-03',
      scenario: 'Kelompok Anisa beranggotakan 4 orang dan mendapat tugas membuat poster digital serta makalah penelitian kecil.',
      question: 'Perangkat lunak yang paling tepat dipilih untuk menghitung data kuesioner dan membuat grafik otomatis adalah...',
      options: [
        { id: 'A', text: 'Perangkat lunak pengolah kata (Word processor).' },
        { id: 'B', text: 'Perangkat lunak lembar kerja (Spreadsheet/Excel/Sheets).' },
        { id: 'C', text: 'Perangkat lunak pemutar video.' },
        { id: 'D', text: 'Peramban web (Web browser).' }
      ],
      correctOptionId: 'B',
      explanation: 'Perangkat lunak lembar kerja (spreadsheet) memiliki fitur tabel, formula matematika, dan pembuat grafik otomatis yang dirancang khusus untuk mengolah angka secara akurat.'
    },
    {
      id: 'oc-q2',
      categoryId: 'office-content',
      tpRef: 'TP-03',
      scenario: 'Bayu ingin membagikan video animasi buatannya tentang tips menjaga lingkungan ke ruang publik virtual media sosial.',
      question: 'Etika diseminasi konten yang wajib diperhatikan Bayu sebelum mengunggah karyanya adalah...',
      options: [
        { id: 'A', text: 'Menggunakan lagu milik musisi terkenal tanpa izin atau tanpa mencantumkan sumber kredit.' },
        { id: 'B', text: 'Memastikan karya bermanfaat, tidak melanggar hak cipta orang lain, dan tidak memuat ujaran kebencian.' },
        { id: 'C', text: 'Menandai (tag) semua teman sekelas secara paksa agar jumlah penontonnya banyak.' },
        { id: 'D', text: 'Mengunggah video yang sama berulang kali setiap lima menit.' }
      ],
      correctOptionId: 'B',
      explanation: 'Diseminasi konten yang bertanggung jawab mengharuskan kreator menghormati hak kekayaan intelektual (musik/gambar), menyampaikan pesan positif, dan tidak melanggar etika ruang publik.'
    }
  ],
  'security-privacy': [
    {
      id: 'sp-q1',
      categoryId: 'security-privacy',
      tpRef: 'TP-04',
      scenario: 'Fajar ingin membuat akun belajar baru dan diminta menentukan kata sandi untuk akun tersebut.',
      question: 'Manakah di antara pilihan berikut yang memenuhi standar kata sandi yang aman dan sulit dibobol?',
      options: [
        { id: 'A', text: '12345678 (karena mudah diingat dan berurutan).' },
        { id: 'B', text: 'fajar2011 (nama dan tahun lahir).' },
        { id: 'C', text: 'B3lajar#SMP!2024 (kombinasi huruf besar, kecil, angka, dan simbol lebih dari 10 karakter).' },
        { id: 'D', text: 'password (karena kata yang umum digunakan).' }
      ],
      correctOptionId: 'C',
      explanation: 'Kata sandi kuat adalah kombinasi acak dari huruf besar, huruf kecil, angka, dan karakter khusus/simbol serta tidak memuat informasi pribadi yang mudah ditebak seperti tanggal lahir.'
    },
    {
      id: 'sp-q2',
      categoryId: 'security-privacy',
      tpRef: 'TP-04',
      scenario: 'Sebuah kuis online berhadiah meminta peserta mengunggah foto KTP orang tua, nomor kartu keluarga, dan alamat lengkap rumah untuk klaim hadiah.',
      question: 'Mengapa kita harus menolak memberikan informasi tersebut?',
      options: [
        { id: 'A', text: 'Karena data tersebut adalah data pribadi sensitif yang dapat disalahgunakan untuk kejahatan identitas dan penipuan perbankan.' },
        { id: 'B', text: 'Karena hadiahnya terlalu sedikit.' },
        { id: 'C', text: 'Karena kuota internet kita akan cepat habis.' },
        { id: 'D', text: 'Karena foto kartu keluarga tidak bisa diunggah ke internet.' }
      ],
      correctOptionId: 'A',
      explanation: 'NIK, nomor KK, dan identitas keluarga merupakan data pribadi yang dilindungi hukum. Membagikannya ke pihak tidak resmi membuka risiko pencurian identitas dan penipuan finansial.'
    }
  ],
  'digital-ethics': [
    {
      id: 'de-q1',
      categoryId: 'digital-ethics',
      tpRef: 'TP-05',
      scenario: 'Seorang teman sekelas terlihat mengunggah foto teman lain yang sedang tertidur di kelas dengan kata-kata ejekan yang membuat teman yang bersangkutan merasa malu dan menangis.',
      question: 'Perilaku tersebut merupakan contoh perundungan siber (cyberbullying). Sikap yang tepat dan berempati untuk kita lakukan adalah...',
      options: [
        { id: 'A', text: 'Ikut membagikan foto tersebut ke grup lain agar semakin ramai.' },
        { id: 'B', text: 'Menertawakan korban di kolom komentar agar dianggap gaul.' },
        { id: 'C', text: 'Menegur pengunggah secara baik-baik untuk menghapus foto tersebut dan memberi dukungan mental kepada korban.' },
        { id: 'D', text: 'Membalas dengan mengunggah foto aib pengunggah agar impas.' }
      ],
      correctOptionId: 'C',
      explanation: 'Perundungan siber merugikan korban secara emosional. Menegur dengan bijak, meminta penghapusan konten, dan mendukung korban adalah wujud nyata empati dan toleransi digital.'
    },
    {
      id: 'de-q2',
      categoryId: 'digital-ethics',
      tpRef: 'TP-05',
      scenario: 'Reza menyadari dirinya sering bermain gawai hingga larut malam sampai mengantuk di kelas dan nilai sekolahnya menurun.',
      question: 'Penerapan "mindfulness digital" yang paling tepat untuk memperbaiki kondisi Reza adalah...',
      options: [
        { id: 'A', text: 'Membuat jadwal batasan waktu pemakaian gawai (screen time) serta meletakkan HP di luar jangkauan saat jam tidur.' },
        { id: 'B', text: 'Membeli gawai baru yang memiliki layar lebih lebar.' },
        { id: 'C', text: 'Tidur di dalam kelas saat guru sedang menerangkan pelajaran.' },
        { id: 'D', text: 'Mematikan alarm agar bisa tidur lebih lama di pagi hari.' }
      ],
      correctOptionId: 'A',
      explanation: 'Digital mindfulness menuntut kesadaran diri untuk mengendalikan teknologi (bukan dikendalikan teknologi), salah satunya dengan membatasi durasi layar dan menjaga keseimbangan istirahat serta belajar.'
    }
  ]
};
