import { ThemeProvider } from '@/context/ThemeContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../style/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Paradise :)',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode,
}>) {
	return (
		<html lang="en" className={inter.className}>
			<ThemeProvider> {children} </ThemeProvider>
		</html>
	);
}
