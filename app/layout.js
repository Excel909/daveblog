import {Quicksand} from 'next/font/google';
import { Raleway } from 'next/font/google';
import { Inter } from 'next/font/google';
import Nav from './components/nav';

export const metadata = {
  title: "Daveblog",
  description: "A blog website",
};

const quicksand = Quicksand({
  subsets: ['latin'],
  weight:['300','400','500','600'],
  variable:'--font-quicksand'
});

const raleway = Raleway({
  subsets:['latin'],
  weight:['100','200','300','400','500'],
  variable:'--font-raleway'
});

const inter = Inter({
  subsets:['latin'],
  weight:['100','200','300','400','500'],
  variable:'--font-inter'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${quicksand.variable} ${raleway.variable} ${inter.variable}`}
      >
        <div className='w-full h-fit'>
            <div className='h-fit w-full sticky top-0 left-0 z-40 '>
              <Nav />
            </div>

            <div>
              {children}
            </div>
        </div>
      </body>
    </html>
  );
}
