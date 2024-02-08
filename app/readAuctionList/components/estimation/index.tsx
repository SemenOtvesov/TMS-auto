'use client';
import style from './style';
import styleMain from '@app/readAuctionList/style';

const listInfo = {
    body: [
        {
            title: '«A»',
            text: 'Тонкие царапины длиной 2-3 см. Краска лежит ровно.',
        },
        {
            title: '«B»',
            text: 'Кузов может иметь тонкие царапины длиной от 5 до 10 см, небольшие вмятины ВОЗМОЖНЫ: еле видимый ремонт, окрасы хорошего качества',
        },
        {
            title: '«С»',
            text: ' Кузов может иметь тонкие царапины длиной от 5 до 20 см, небольшие вмятины размером. ВОЗМОЖНЫ: видимый ремонт, краска в местах ремонта может лежать неровно. Возможен налет ржавчины на подвеске, небольшая трещина на лобовом стекле.',
        },
        {
            title: '«D»',
            text: 'Много больших царапин и крупных вмятин или кузов подвергся коррозии, требуется ремонт и/или произведен ремонт кузова невысокого качества.',
        },
        {
            title: '«E»',
            text: 'Многим элементам кузова требуется полное восстановление и перекраска. Местами кузов подвергнут сильной коррозии.',
        },
    ],
    salon: [
        {
            title: '«A»',
            text: 'Легкое загрязнение салона. Возможны тонкие царапины на пластике.',
        },
        {
            title: '«B»',
            text: 'присутствуют небольшие недостатки. В салоне загрязнения, мелкие царапины на пластике. Возможны небольшие повреждения в виде потертостей. Салон можно довольно легко отчистить.',
        },
        {
            title: '«С»',
            text: 'требуется химчистка салона от пятен. Салон грязный, возможны царапины на пластике, есть потертости и/или прожёги и/или порезы, о чем есть запись инспектора в аукционном листе. Возможен неприятный запах или шерсть животных.',
        },
        {
            title: '«D»',
            text: 'Салон очень грязный и/или много повреждений различного характера. Отчистить салон будет сложно',
        },
        {
            title: '«E»',
            text: 'Салон очень грязный и имеет сильный неприятный запах. Много сильных повреждений различного характера.',
        },
    ],
};
const titleInfo = {
    body: 'Расшифровка буквенных оценок кузова автомобиля в аукционном листе',
    salon: 'Расшифровка буквенных оценок салона автомобиля в аукционном листе',
};
type Tprops = {
    type: 'body' | 'salon';
};

export default ({ type }: Tprops) => {
    const { Container, List } = style();
    const { TitleItems, Item, ItemTitle, ItemText, Text } = styleMain();
    const ItemInst = Item(false);

    return (
        <Container>
            <TitleItems>{titleInfo[type]}</TitleItems>
            <Text>
                Внешний вид автомобиля оценивается инспектором и фиксируется в аукционном листе
                буквами:
            </Text>
            <List>
                {listInfo[type].map(el => (
                    <ItemInst>
                        <ItemTitle>{el.title}</ItemTitle>
                        <ItemText>{el.text}</ItemText>
                    </ItemInst>
                ))}
            </List>
        </Container>
    );
};
