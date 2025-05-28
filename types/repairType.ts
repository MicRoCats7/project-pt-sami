export type RepairData = {
    no_urut: number;
    carline: string;
    prod_no_display: string;
    kerusakan_utama: string;
    kerusakan_id: string;
    status: 'Belum Ditangani' | 'Sedang Proses' | 'Selesai' | 'Terlambat (LL Notified)' | 'Dibatalkan';
    waktu_request: string;
    pic: string;
};