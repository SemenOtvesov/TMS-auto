import Footer from './components/footer/footer';
import Header from './components/header/header';
import './style/sass/globals.scss';

export const metadata = {
    title: 'TMS-auto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    if (typeof window === 'undefined') return;
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="main">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
