import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Noto_Sans_Lao, Poppins } from 'next/font/google';
import ReactQueryProvider from '@/lib/provider/ReactQueryProvider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const notoSansLao = Noto_Sans_Lao({
  subsets: ['lao'],
  display: 'swap',
  weight: ['400', '500', '700'],
});
export const metadata: Metadata = {
  title: 'Discover Amazing Tours | Your Gateway to Adventure',
  description:
    'Explore unique destinations with our guided tours. From cultural immersions to nature expeditions, we offer personalized tour packages to make your travel dreams a reality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
          <Header />
          <main className="flex min-h-screen flex-col justify-between">{children}</main>
          <Footer />
          {/* </ThemeProvider> */}
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
