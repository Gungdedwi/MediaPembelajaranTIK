import type { FC } from 'react';
import { BookOpen, CheckCircle, Clock, Users, Lightbulb, X } from 'lucide-react';

interface TeacherGuideModalProps {
  onClose: () => void;
}

export const TeacherGuideModal: FC<TeacherGuideModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-slate-900 border border-sky-500/40 rounded-2xl p-5 sm:p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-sky-400" />
            <div>
              <h3 className="text-xl font-bold text-white">Panduan Penggunaan Guru di Kelas</h3>
              <p className="text-xs text-slate-400">Wordsearch Informatika – Literasi Digital (Fase D / Kelas VIII)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Workflow Stages */}
        <div className="space-y-4 text-sm text-slate-200">
          {/* Stage 1: Pre-game */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-2 font-bold text-sky-300 mb-2">
              <Clock className="w-4 h-4" />
              <span>1. Tahap Pendahuluan (Apersepsi & Tujuan - 5 Menit)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs sm:text-sm">
              <li>Sampaikan Capaian Pembelajaran dan Tujuan Pembelajaran (TP) topik yang dipilih kepada murid.</li>
              <li>Nyalakan <strong>Mode Proyektor (Ikon TV)</strong> agar tampilan font membesar dan nyaman dilihat dari belakang kelas.</li>
              <li>Jelaskan aturan main: murid mencari istilah kunci dan membaca penjelasan saat kata ditemukan.</li>
            </ul>
          </div>

          {/* Stage 2: During game */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-2 font-bold text-emerald-300 mb-2">
              <Users className="w-4 h-4" />
              <span>2. Tahap Inti (Aktivitas Individu / Bergiliran - 15–20 Menit)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs sm:text-sm">
              <li><strong>Skenario 1 (Satu Layar Kelas):</strong> Murid maju bergiliran ke layar interaktif/laptop guru untuk menemukan satu kata.</li>
              <li><strong>Skenario 2 (Gawai Mandiri):</strong> Setiap murid membuka aplikasi pada perangkat masing-masing secara mandiri.</li>
              <li>Gunakan tombol <strong>Jeda (Pause)</strong> sewaktu-waktu jika guru ingin membahas miskonsepsi atau konsep penting pada kata tertentu.</li>
            </ul>
          </div>

          {/* Stage 3: Post-game */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-2 font-bold text-amber-300 mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>3. Tahap Penguatan & Refleksi (Mini Quiz Skenario - 10 Menit)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs sm:text-sm">
              <li>Setelah semua kata ditemukan, arahkan murid mengerjakan <strong>Mini Quiz Kasus Nyata</strong>.</li>
              <li>Perhatikan pembahasan kunci jawaban yang muncul untuk mengonfirmasi pemahaman konsep.</li>
              <li>Tinjau layar rangkuman hasil untuk melihat ketercapaian pemahaman materi tanpa mempermalukan siswa yang bermain lebih lambat.</li>
            </ul>
          </div>

          {/* Teacher pedagogical advice */}
          <div className="p-3.5 rounded-xl bg-brand-950/30 border border-brand-600/30 text-xs text-brand-200">
            <strong>Catatan Pedagogis:</strong> Kecepatan menemukan kata adalah unsur permainan. Tolok ukur utama kompetensi adalah ketepatan memahami konsep istilah dan kemampuan menjawab skenario kasus di tahap akhir.
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Tutup Panduan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
