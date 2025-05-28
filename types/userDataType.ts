export type UserData = {
    id: number;
    no_urut: number;
    nik: string;
    nama: string;
    status_user: 'Aktif' | 'Tidak Aktif';
    kode: string;
    level: 'SUPERVISOR' | 'LINE LEADER' | 'TEKNISI';
  };