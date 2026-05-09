'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
	{ href: '/import-export', label: 'Import-Export' },
	{ href: '/student-consultancy', label: 'Study Abroad' },
	{ href: '/visa-consultancy', label: 'Visa' },
	{ href: '/real-estate', label: 'Real Estate' },
	{ href: '/ratnodwip-resort', label: 'Ratnodwip Resort' },
	{ href: '/about', label: 'About' }
]

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()
	const [scrolled, setScrolled] = useState(false)
	const navRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 12)
		const handleClickOutside = e => {
			if (navRef.current && !navRef.current.contains(e.target)) setIsOpen(false)
		}
		window.addEventListener('scroll', handleScroll)
		document.addEventListener('mousedown', handleClickOutside)
		handleScroll()
		return () => {
			window.removeEventListener('scroll', handleScroll)
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	useEffect(() => {
		setIsOpen(false)
	}, [pathname])

	return (
		<nav
			ref={navRef}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-soft ${
				scrolled
					? 'bg-bone/85 backdrop-blur-md border-b border-stone'
					: 'bg-transparent'
			}`}>
			<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
				<div className='flex items-center justify-between h-16 md:h-20'>
					<Link href='/' className='flex items-center gap-3 group'>
						<div className='relative w-10 h-10 md:w-11 md:h-11'>
							<Image
								src='/logo.png'
								alt='RFM International'
								fill
								sizes='44px'
								style={{ objectFit: 'contain', objectPosition: 'left center' }}
								priority
							/>
						</div>
						<div className='hidden sm:flex flex-col leading-tight'>
							<span className='font-display text-lg text-ink tracking-tight'>RFM International</span>
							<span className='eyebrow-ink text-[9px] tracking-[0.2em]'>EST. 2005 · DHAKA</span>
						</div>
					</Link>

					<div className='hidden lg:flex items-center gap-1'>
						{navItems.map(item => {
							const active = pathname === item.href
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`px-3 py-2 text-[13px] font-medium tracking-tight transition-colors duration-200 relative focus-ring rounded-sm ${
										active ? 'text-clay' : 'text-ink hover:text-clay'
									}`}>
									{item.label}
									{active && (
										<span className='absolute bottom-1 left-3 right-3 h-px bg-clay' />
									)}
								</Link>
							)
						})}
					</div>

					<div className='hidden lg:flex items-center gap-3'>
						<Link
							href='/#contact'
							className='inline-flex items-center gap-1.5 text-[13px] font-medium text-ink hover:text-clay transition-colors'>
							Get in touch
							<ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.75} />
						</Link>
					</div>

					<button
						onClick={() => setIsOpen(v => !v)}
						type='button'
						className='lg:hidden p-2 -mr-2 text-ink focus-ring'
						aria-controls='mobile-menu'
						aria-expanded={isOpen}>
						<span className='sr-only'>Toggle menu</span>
						{isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						id='mobile-menu'
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						className='lg:hidden bg-bone border-t border-stone overflow-hidden'>
						<div className='px-5 py-6 flex flex-col'>
							{navItems.map((item, i) => {
								const active = pathname === item.href
								return (
									<motion.div
										key={item.href}
										initial={{ opacity: 0, x: -8 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.05 + i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
										<Link
											href={item.href}
											className={`flex items-center justify-between py-3 border-b border-stone-soft text-base font-medium transition-colors focus-ring ${
												active ? 'text-clay' : 'text-ink hover:text-clay'
											}`}>
											{item.label}
											<ArrowUpRight className='h-4 w-4 opacity-50' strokeWidth={1.5} />
										</Link>
									</motion.div>
								)
							})}
							<motion.div
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.05 + navItems.length * 0.04, duration: 0.3 }}>
								<Link
									href='/#contact'
									className='btn-ink mt-6 w-full justify-center focus-ring'>
									Get in touch
									<ArrowUpRight className='h-4 w-4' strokeWidth={1.75} />
								</Link>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
