import { Poppins } from 'next/font/google';
import "../globals.css";
import LmsLayouts from '@/components/enduser-lms/LmsLayouts';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="h-screen">
          <LmsLayouts>
            {children}
          </LmsLayouts>
        </div>

      </body>
    </html>
  );
}