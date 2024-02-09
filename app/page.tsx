import Page from './page/index';

export default () => {
    if (typeof window === 'undefined') return;
    return <Page />;
};
