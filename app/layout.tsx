import './globals.css';
import type { Metadata } from 'next';
import { Inter, Pacifico } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

export const metadata: Metadata = {
  title: 'Ink & Soul Tattoo Studio',
  description: 'Premium tattoo artistry in a welcoming, professional environment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${pacifico.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}