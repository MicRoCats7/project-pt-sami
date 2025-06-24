
import { ChartAreaStacked } from '@/components/shared/analitik/AreaChart'
import { ChartAreaInteractive } from '@/components/shared/analitik/AreaChartInteractive'
import { BarChartMultiple } from '@/components/shared/analitik/BarChartMultiple'
import { ChartLineDots } from '@/components/shared/analitik/LineChart'
import { ChartPieDonut } from '@/components/shared/analitik/PieChartDonut'
import React from 'react'

function Analitik() {
    return (
        <section className='font-geist'>
            <h1 className="text-2xl text-text-main font-bold mb-4 font-inter">Analitik</h1>
            <div className='grid grid-cols-2 gap-4'>
                <ChartPieDonut />
                <ChartAreaStacked />
                <BarChartMultiple />
                <ChartLineDots />
            </div>
            <ChartAreaInteractive />
        </section>
    )
}

export default Analitik