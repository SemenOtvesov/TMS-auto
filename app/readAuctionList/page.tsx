'use client';
import Breadcrums from '@app/components/helpers/breadcrums';
import styleIndex, { itemContainer } from '@app/page/style';
import style from './style';
import { Tcountry } from '@locTypes/state/carState';
import { useSearchParams } from 'next/navigation';
import FeedbackForm from '@app/components/helpers/feedbackForm';
import TextBox from './components/textBox';
import Example from './components/example';
import Info from './components/info';
import Decoding from './components/decoding';
import Estimation from './components/estimation';
import AuctionList from './components/auctionList';
import Designations from './components/designations';

export default () => {
    const { Container } = styleIndex();
    const ItemContainer = itemContainer();
    const { ContainerMain } = style();

    const country = useSearchParams()?.get('country') as Tcountry;
    return (
        <Container>
            <ItemContainer>
                <Breadcrums />
                <ContainerMain>
                    <TextBox type="preview" country={country} />
                    <TextBox type="info" country={country} />
                    <Example />
                    <Info />
                    <Decoding />
                    <Estimation type="body" />
                    <Estimation type="salon" />
                    <AuctionList />
                    <Designations type="shiftBox" />
                    <Designations type="additionalOptions" />
                    <FeedbackForm type="calc" />
                </ContainerMain>
            </ItemContainer>
        </Container>
    );
};
