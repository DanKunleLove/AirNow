import type { Metadata } from 'next';
import './globals.css';
import AppLayout from '@/components/layout/AppLayout';
import { cn } from '@/lib/utils';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'AirNow Personalized Dashboard',
  description: 'Your personal hub for appliance management and smart services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <AuthProvider>
          <AppLayout>{children}</AppLayout>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
