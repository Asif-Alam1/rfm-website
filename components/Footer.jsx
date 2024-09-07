import Link from 'next/link'
import { Mail, Phone, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='bg-cyan-800 text-white'>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-lg font-semibold mb-4'>About RFM Inc</h3>
						<p className='text-cyan-200'>
							Your trusted partner for Import-Export, Student Consultancy, and
							Visa Services. Bridging global opportunities since 2005.
						</p>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<div className='grid grid-cols-2 gap-2'>
							<Link
								href='/'
								className='hover:text-yellow-300 transition-colors'>
								About Us
							</Link>
							<Link
								href='/import-export'
								className='hover:text-yellow-300 transition-colors'>
								Import Exports
							</Link>
							<Link
								href='/student-consultancy'
								className='hover:text-yellow-300 transition-colors'>
								Student Consultancy
							</Link>
							<Link
								href='/visa-consultancy'
								className='hover:text-yellow-300 transition-colors'>
								Visa Consultancy
							</Link>
						</div>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
						<div className='space-y-4'>
							<a
								href='mailto:test@test.com'
								className='flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-cyan-900 px-4 py-2 rounded transition-colors w-full justify-center'>
								<Mail size={20} />
								<span>Email Us</span>
							</a>
							<a
								href='tel:0000000'
								className='flex items-center space-x-2 bg-blue-400 hover:bg-blue-300 text-cyan-900 px-4 py-2 rounded transition-colors w-full justify-center'>
								<Phone size={20} />
								<span>Call Us</span>
							</a>
						</div>
					</div>
				</div>
				<div className='mt-8 border-t border-cyan-700 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-cyan-300 mb-4 md:mb-0'>
						&copy; 2023 RFM Inc. All rights reserved.
					</p>
					<div className='flex space-x-6'>
						<Link
							href='/privacy-policy'
							className='text-cyan-300 hover:text-white transition-colors'>
							Privacy Policy
						</Link>
						<Link
							href='/terms-of-service'
							className='text-cyan-300 hover:text-white transition-colors'>
							Terms of Service
						</Link>
					</div>
					<div className='flex space-x-4 mt-4 md:mt-0'>
						<a
							href='#'
							className='text-cyan-300 hover:text-white transition-colors'>
							<Facebook size={20} />
						</a>
						<a
							href='#'
							className='text-cyan-300 hover:text-white transition-colors'>
							<Instagram size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
