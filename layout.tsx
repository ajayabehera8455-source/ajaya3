import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AKSHAYA KUMAR | Professional Video Editor & Content Creator',
  description: 'High-end video editing and content creation services for brands, YouTubers, and social media influencers. Transform your raw footage into cinematic stories.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">{children}</body>
    </html>
  );
}
