'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'

const services = [
	{ href: '/import-export', label: 'Import-Export' },
	{ href: '/student-consultancy', label: 'Study Abroad' },
	{ href: '/visa-consultancy', label: 'Visa Consultancy' },
	{ href: '/real-estate', label: 'Real Estate' },
	{ href: '/ratnodwip-resort', label: 'Ratnodwip Resort' }
]

const company = [
	{ href: '/about', label: 'About' },
	{ href: '/about#team', label: 'Leadership' },
	{ href: '/#contact', label: 'Contact' }
]

const Footer = () => {
	const wordmarkRef = useRef(null)
	const [revealed, setRevealed] = useState(false)

	useEffect(() => {
		const el = wordmarkRef.current
		if (!el) return
		const io = new IntersectionObserver(
			entries => {
				entries.forEach(e => {
					if (e.isIntersecting) {
						setRevealed(true)
						io.disconnect()
					}
				})
			},
			{ threshold: 0.1 }
		)
		io.observe(el)
		return () => io.disconnect()
	}, [])

	return (
		<footer ref={wordmarkRef} className='relative bg-ink text-bone overflow-hidden'>
			<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pt-20 pb-10'>
				<div className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12'>
					<div className='md:col-span-5 lg:col-span-4'>
						<div className='flex items-center gap-3 mb-6'>
							<div className='relative w-10 h-10 bg-bone/5 rounded-sm p-1'>
								<Image
									src='/logo.png'
									alt='RFM International'
									fill
									sizes='40px'
									style={{ objectFit: 'contain' }}
								/>
							</div>
							<span className='font-display text-xl tracking-tight'>
								RFM International
							</span>
						</div>
						<p className='text-bone/70 text-sm leading-relaxed max-w-sm'>
							A diversified Bangladeshi services group operating across
							import-export, study abroad, visa consultancy, real estate,
							and hospitality.
						</p>
						<p className='eyebrow text-bone/50 mt-6'>
							ESTABLISHED 2005 · DHAKA, BANGLADESH
						</p>
					</div>

					<div className='md:col-span-3 lg:col-span-3'>
						<p className='eyebrow text-bone/50 mb-5'>Services</p>
						<ul className='space-y-3'>
							{services.map(item => (
								<li key={item.href}>
									<Link
										href={item.href}
										className='text-bone/85 hover:text-clay text-sm transition-colors duration-200 inline-flex items-center gap-1.5 group'>
										{item.label}
										<ArrowUpRight
											className='h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all'
											strokeWidth={1.75}
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className='md:col-span-2 lg:col-span-2'>
						<p className='eyebrow text-bone/50 mb-5'>Company</p>
						<ul className='space-y-3'>
							{company.map(item => (
								<li key={item.href}>
									<Link
										href={item.href}
										className='text-bone/85 hover:text-clay text-sm transition-colors duration-200'>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className='md:col-span-12 lg:col-span-3'>
						<p className='eyebrow text-bone/50 mb-5'>Contact</p>
						<ul className='space-y-4 text-sm'>
							<li className='flex items-start gap-3'>
								<MapPin className='h-4 w-4 mt-0.5 shrink-0 text-clay' strokeWidth={1.5} />
								<span className='text-bone/85 leading-relaxed'>
									Level 6, House 299, Free School Street, Kathalbagan, Dhaka
								</span>
							</li>
							<li>
								<a
									href='mailto:rfmbusinessbd@gmail.com'
									className='flex items-center gap-3 text-bone/85 hover:text-clay transition-colors'>
									<Mail className='h-4 w-4 text-clay' strokeWidth={1.5} />
									rfmbusinessbd@gmail.com
								</a>
							</li>
							<li>
								<a
									href='tel:+8801815558785'
									className='flex items-center gap-3 text-bone/85 hover:text-clay transition-colors'>
									<Phone className='h-4 w-4 text-clay' strokeWidth={1.5} />
									+880 1815 558 785
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-16 pt-8 border-t border-bone/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
					<p className='text-xs text-bone/50 tabular'>
						&copy; {new Date().getFullYear()} RFM International. All rights reserved.
					</p>
					<div className='flex items-center gap-5'>
						<Link
							href='https://www.facebook.com/share/s1sXGT5JbtNWBgTM/?mibextid=LQQJ4d'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Facebook'
							className='text-bone/60 hover:text-clay transition-colors focus-ring rounded-sm p-1 -m-1'>
							<Facebook size={16} strokeWidth={1.5} />
						</Link>
						<Link
							href='https://www.linkedin.com/company/rfm-group-of-companies/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='LinkedIn'
							className='text-bone/60 hover:text-clay transition-colors focus-ring rounded-sm p-1 -m-1'>
							<Linkedin size={16} strokeWidth={1.5} />
						</Link>
						<Link
							href='#'
							aria-label='Instagram'
							className='text-bone/60 hover:text-clay transition-colors focus-ring rounded-sm p-1 -m-1'>
							<Instagram size={16} strokeWidth={1.5} />
						</Link>
					</div>
				</div>
			</div>

			<div
				aria-hidden='true'
				className={`pointer-events-none select-none absolute -bottom-12 md:-bottom-20 left-0 right-0 text-center font-display leading-none ${
					revealed ? 'text-bone/[0.05] opacity-100' : 'text-bone/0 opacity-0'
				}`}
				style={{
					fontSize: 'clamp(6rem, 22vw, 22rem)',
					letterSpacing: '-0.04em',
					transform: revealed ? 'translateY(0)' : 'translateY(40px)',
					transition: 'opacity 1500ms cubic-bezier(0.22, 1, 0.36, 1), transform 1500ms cubic-bezier(0.22, 1, 0.36, 1), color 1500ms ease'
				}}>
				RFM
			</div>
		</footer>
	)
}

export default Footer
