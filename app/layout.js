import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'
import { Toaster } from 'react-hot-toast'

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-display',
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic']
})

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
	weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
	title: 'RFM International, a house of global services',
	description:
		'A diversified Bangladeshi services group: import-export, study abroad, visa consultancy, real estate, and Ratnodwip Resort on Saint Martin\'s Island.'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${cormorant.variable} ${montserrat.variable}`}>
			<body className='bg-bone text-ink antialiased'>
				<Toaster
					position='top-center'
					toastOptions={{
						style: {
							background: 'hsl(var(--ink))',
							color: 'hsl(var(--bone))',
							borderRadius: '2px',
							fontFamily: 'var(--font-sans)'
						}
					}}
				/>
				<ScrollProgress />
				<Navbar />
				{children}
				<BackToTop />
				<Footer />
			</body>
		</html>
	)
}
