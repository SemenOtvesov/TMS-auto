'use client';
import Breadcrums from '@app/components/helpers/breadcrums';
import styleIndex, { itemContainer } from '@app/page/style';
import Registration from './components/registration';
import Main from './components/main';

export default () => {
    if (typeof window === 'undefined') return;
    const { Container } = styleIndex();
    const ItemContainer = itemContainer();
    return (
        <Container>
            <ItemContainer>
                <Breadcrums />
                <Registration />
                <Main />
            </ItemContainer>
        </Container>
    );
};
