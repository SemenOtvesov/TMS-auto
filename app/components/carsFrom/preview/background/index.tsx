'use client';
import Image from '@app/components/helpers/image/image';
import style from './style';

export default ({ backgroundName }: { backgroundName: string }) => {
    const { Container } = style();
    return (
        <Container>
            <Image imageName={backgroundName} imageType="image" sourseMod={false} />
        </Container>
    );
};
