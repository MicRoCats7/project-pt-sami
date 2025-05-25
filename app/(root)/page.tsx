import CardOverview from '@/components/shared/overview/CardOverview';
import { TableOverview } from '@/components/shared/overview/TableOverview';
import React from 'react';

function Overview() {
  return (
    <section>
      <h1 className="text-2xl text-text-main font-bold mb-4 font-inter">Overview</h1>
      <CardOverview />
      <TableOverview />
    </section>
  );
}

export default Overview;
