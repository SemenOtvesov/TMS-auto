import StatisticsAll from '@app/components/statisticsAll/index';
import React from 'react';

export default () => {
    if (typeof window === 'undefined') return;
    return <StatisticsAll type="japan" />;
};
