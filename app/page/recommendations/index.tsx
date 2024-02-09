import React from 'react';
import { itemContainer } from '../style';
import RecentlyPurchased from './recentlyPurchased';
import FeedbackForm from '@app/components/helpers/feedbackForm';
import CalculationUser from '@app/components/helpers/calculationUser';

type Tprops = {};

export default ({}: Tprops) => {
    const ItemContainer = itemContainer();
    return (
        <ItemContainer>
            <CalculationUser />
            <RecentlyPurchased />
            <FeedbackForm type="othersQuestions" />
        </ItemContainer>
    );
};
