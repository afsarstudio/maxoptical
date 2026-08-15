import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Max Optical | Best Premium Optical Shop in Lucknow',
  description: 'Max Optical is the leading premium optical shop in Lucknow (Khurram Nagar). Find high-quality eyeglasses, designer sunglasses, contact lenses, and get a 100% FREE computerized eye testing.',
  keywords: [
    'optical shop in Lucknow',
    'best optician in Lucknow',
    'eyewear store Khurram Nagar',
    'computerized eye testing Lucknow',
    'prescription glasses Lucknow',
    'sunglasses store Lucknow',
    'eyeglasses online Lucknow',
    'contact lenses Lucknow',
    'Max Optical'
  ],
  alternates: {
    canonical: 'https://maxoptical.in',
  },
  openGraph: {
    title: 'Max Optical | Best Premium Optical Shop in Lucknow',
    description: 'Max Optical is the leading premium optical shop in Lucknow (Khurram Nagar). Premium eyeglasses, sunglasses, and 100% FREE computerized eye checkup.',
    url: 'https://maxoptical.in',
    siteName: 'Max Optical',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
