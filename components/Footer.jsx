import Link from 'next/link'
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='bg-cyan-800 text-white'>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-lg font-semibold mb-4'>About RFM Inc</h3>
						<p className='text-cyan-200'>
							Your trusted partner for Import-Export, Student Consultancy, Real
							Estate, and Visa Services. Bridging global opportunities since
							2005.
						</p>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<div className='grid grid-cols-2 gap-2'>
							<Link
								href='/'
								className='hover:text-yellow-300 transition-colors'>
								Home
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
								href='/real-estate'
								className='hover:text-yellow-300 transition-colors'>
								Real Estate
							</Link>
							<Link
								href='/about'
								className='hover:text-yellow-300 transition-colors'>
								About Us
							</Link>
							<Link
								href='/contact'
								className='hover:text-yellow-300 transition-colors'>
								Contact
							</Link>
						</div>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
						<div className='space-y-4'>
							<a
								href='mailto:rfmbusinessbd@gmail.com'
								className='flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-cyan-900 px-4 py-2 rounded transition-colors w-full justify-center'>
								<Mail size={20} />
								<span>Email Us</span>
							</a>
							<a
								href='tel:+8801815558785'
								className='flex items-center space-x-2 bg-blue-400 hover:bg-blue-300 text-cyan-900 px-4 py-2 rounded transition-colors w-full justify-center'>
								<Phone size={20} />
								<span>Call Us</span>
							</a>
						</div>
					</div>
				</div>
				<div className='mt-8 border-t border-cyan-700 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-cyan-300 mb-4 md:mb-0'>
						&copy; 2024 RFM Inc. All rights reserved.
					</p>

					<div className='flex space-x-4 mt-4 md:mt-0'>
						<Link
							href='https://www.facebook.com/share/s1sXGT5JbtNWBgTM/?mibextid=LQQJ4d'
							target='_blank'
							className='text-cyan-300 hover:text-white transition-colors'>
							<Facebook size={20} />
						</Link>
						<a
							href='#'
							className='text-cyan-300 hover:text-white transition-colors'>
							<Instagram size={20} />
						</a>
						<Link
							href='https://www.linkedin.com/company/rfm-group-of-companies/'
							target='_blank'
							className='text-cyan-300 hover:text-white transition-colors'>
							<Linkedin size={20} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
