import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: { default: 'Vaibhav Kumar Rai — Portfolio', template: '%s | Vaibhav Kumar Rai' },
  description: 'Portfolio of Vaibhav Kumar Rai, computer science student exploring AI, machine learning and software engineering.',
  openGraph: { title: 'Vaibhav Kumar Rai — Portfolio', description: 'AI · Machine Learning · Software Engineering', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider>{children}</ThemeProvider></body></html>;
}
