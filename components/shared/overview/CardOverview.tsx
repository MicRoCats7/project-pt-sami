import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

function CardOverview() {
  return (
    <div className="flex items-center gap-4">
      <Card className="w-full font-inter py-4">
        <CardContent className="flex flex-col items-center justify-center gap-4 w-full px-3">
          <span className="text-5xl font-medium text-text-main">5</span>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-sm font-medium text-text-secondary">Peminjaman belum ditangani</h3>
            <Image src="/assets/icon_overview/icon_permintaan.svg" alt="Icon Permintaan" width={50} height={50} />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full font-inter py-4">
        <CardContent className="flex flex-col items-center justify-center gap-4 w-full px-3">
          <span className="text-5xl font-medium text-text-main">5</span>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-sm font-medium text-text-secondary">Sedang Proses Penanganan</h3>
            <Image src="/assets/icon_overview/icon_progress.svg" alt="Icon Proses" width={50} height={50} />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full font-inter py-4">
        <CardContent className="flex flex-col items-center justify-center gap-4 w-full px-3">
          <span className="text-5xl font-medium text-text-main">5</span>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-sm font-medium text-text-secondary">Permintaan Terlambat ({'>'} 15 Menit)</h3>
            <Image src="/assets/icon_overview/icon_terlambat.svg" alt="Icon Terlambat" width={50} height={50} />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full font-inter py-4">
        <CardContent className="flex flex-col items-center justify-center gap-4 w-full px-3">
          <span className="text-5xl font-medium text-text-main">5</span>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-sm font-medium text-text-secondary">Permintaan Selesai</h3>
            <Image src="/assets/icon_overview/icon_success.svg" alt="Icon Selesai" width={50} height={50} />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full font-inter py-4">
        <CardContent className="flex flex-col items-center justify-center gap-4 w-full px-3">
          <span className="text-5xl font-medium text-text-main">5</span>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-sm font-medium text-text-secondary">Permintaan Dibatalkan</h3>
            <Image src="/assets/icon_overview/icon_batal.svg" alt="Icon Dibatalkan" width={50} height={50} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardOverview;
