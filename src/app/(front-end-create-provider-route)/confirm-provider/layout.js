import { Manrope } from 'next/font/google';
import "@/app/globals.css";
import Header from '@/components/frontend-panel/confirm-provider/ProviderHeader';
import Footer from '@/components/frontend-panel/confirm-provider/ProviderFooter';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const manrope = Manrope({
  // weight: ['200', '300', '400', '500', '600', '700', '800'], // Specify the weights to load
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}