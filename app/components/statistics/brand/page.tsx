'use client';
import StatisticsAll from '@app/components/statisticsAll';
import { useParams } from 'next/navigation';
import React from 'react';

export default ({ type }: { type: 'korea' | 'japan' }) => {
    const { brand }: { brand: string } = useParams();
    return <StatisticsAll type={type} brand={brand} />;
};
