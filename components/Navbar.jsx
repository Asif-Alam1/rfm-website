'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()
	const [scrolled, setScrolled] = useState(false)
	const navRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}

		const handleClickOutside = event => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setIsOpen(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const navItems = [
		{ href: '/import-export', label: 'Import-Export' },
		{ href: '/student-consultancy', label: 'Student Consultancy' },
		{ href: '/visa-consultancy', label: 'Visa Consultancy' },
		{ href: '/real-estate', label: 'Real Estate' },
		{ href: '/about', label: 'About Us' }
	]

	const handleLinkClick = () => {
		setIsOpen(false)
	}

	return (
		<nav
			ref={navRef}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? 'bg-cyan-700/90 backdrop-blur-md' : 'bg-transparent'
			}`}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex-shrink-0'>
						<Link href='/' className='flex items-center'>
							<Image
								className='h-16 w-auto'
								src='/logo.png'
								alt='RFM Inc Logo'
								width={32}
								height={32}
							/>
						</Link>
					</div>
					<div className='hidden md:block'>
						<div className='ml-10 flex items-baseline space-x-4'>
							{navItems.map(item => (
								<Link
									key={item.href}
									href={item.href}
									className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
										pathname === item.href
											? 'bg-cyan-600 text-white'
											: 'text-cyan-100 hover:bg-cyan-600 hover:text-white'
									}`}>
									{item.label}
								</Link>
							))}
						</div>
					</div>
					<div className='md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							type='button'
							className='inline-flex items-center justify-center p-2 rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
							aria-controls='mobile-menu'
							aria-expanded='false'>
							<span className='sr-only'>Open main menu</span>
							{isOpen ? (
								<X className='block h-6 w-6' aria-hidden='true' />
							) : (
								<Menu className='block h-6 w-6' aria-hidden='true' />
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className='md:hidden bg-cyan-400' id='mobile-menu'>
					<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
						{navItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								onClick={handleLinkClick}
								className={`block px-3 py-2 rounded-md text-base font-medium ${
									pathname === item.href
										? 'bg-cyan-600 text-white'
										: 'text-cyan-100 hover:bg-cyan-600 hover:text-white'
								}`}>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
