import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'
import { Toaster } from 'react-hot-toast'

const fraunces = Fraunces({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-fraunces',
	axes: ['SOFT', 'opsz']
})

const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-manrope'
})

export const metadata = {
	title: 'RFM International — A house of global services',
	description:
		'A diversified Bangladeshi services group: import-export, study abroad, visa consultancy, real estate, and Ratnodwip Resort on Saint Martin\'s Island.'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${fraunces.variable} ${manrope.variable}`}>
			<body className='bg-bone text-ink antialiased'>
				<Toaster
					position='top-center'
					toastOptions={{
						style: {
							background: 'hsl(var(--ink))',
							color: 'hsl(var(--bone))',
							borderRadius: '2px',
							fontFamily: 'var(--font-manrope)'
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
