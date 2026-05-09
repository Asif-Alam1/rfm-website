'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
	ArrowUpRight,
	ArrowRight,
	Mail,
	Phone,
	MapPin
} from 'lucide-react'
import toast from 'react-hot-toast'
import SubmitButton from '../components/SubmitButton'

const services = [
	{
		index: '01',
		title: 'Import-Export',
		blurb:
			'Sourcing, customs clearance, and door-to-door logistics across India, China, and beyond.',
		href: '/import-export',
		image:
			'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&h=900&fit=crop'
	},
	{
		index: '02',
		title: 'Study Abroad',
		blurb:
			'Placement and admissions counselling for partner universities across the UK, US, EU, and Oceania.',
		href: '/student-consultancy',
		image:
			'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=900&fit=crop'
	},
	{
		index: '03',
		title: 'Visa Consultancy',
		blurb:
			'Work, student, tourist, and family visas — handled end-to-end with documentation support.',
		href: '/visa-consultancy',
		image:
			'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&h=900&fit=crop'
	},
	{
		index: '04',
		title: 'Real Estate',
		blurb:
			'Residential and commercial property advisory across Dhaka and the wider region.',
		href: '/real-estate',
		image:
			'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=900&fit=crop'
	},
	{
		index: '05',
		title: 'Ratnodwip Resort',
		blurb:
			'A beachside escape on Saint Martin\'s East Beach — owned and operated by RFM.',
		href: '/ratnodwip-resort',
		image: '/ratnowdip-1.jpeg'
	}
]

const stats = [
	{ value: '20+', label: 'Years of operation' },
	{ value: '5', label: 'Service verticals' },
	{ value: '40+', label: 'Partner universities' },
	{ value: '15+', label: 'Countries served' }
]

const marquee = [
	'Bangladesh',
	'India',
	'China',
	'United Kingdom',
	'United States',
	'Australia',
	'New Zealand',
	'Cyprus',
	'Malaysia',
	'United Arab Emirates'
]

export default function Home() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})
	const [pending, setPending] = useState(false)

	useEffect(() => {
		const els = document.querySelectorAll('.fade-up')
		const io = new IntersectionObserver(
			entries => {
				entries.forEach(e => {
					if (e.isIntersecting) {
						e.target.classList.add('in-view')
						io.unobserve(e.target)
					}
				})
			},
			{ threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
		)
		els.forEach(el => io.observe(el))
		return () => io.disconnect()
	}, [])

	const handleSubmit = async e => {
		e.preventDefault()
		setPending(true)
		try {
			const r = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...formData, subject: 'General Inquiry' })
			})
			if (r.ok) {
				toast.success('Message sent. We\'ll be in touch.')
				setFormData({ name: '', email: '', message: '' })
			} else toast.error('Failed to send. Please try again.')
		} catch (err) {
			toast.error('Something went wrong.')
		} finally {
			setPending(false)
		}
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(s => ({ ...s, [name]: value }))
	}

	return (
		<main className='bg-bone text-ink'>
			{/* HERO */}
			<section className='relative pt-32 md:pt-40 pb-24 md:pb-32 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-12'>
						<div className='col-span-12 lg:col-span-7'>
							<p className='eyebrow mb-6 animate-rise-soft'>
								Established 2005 · Dhaka
							</p>
							<h1 className='font-display text-display-2xl text-ink animate-rise delay-100'>
								A house of <em className='not-italic text-clay font-normal'>global</em> services,
								built in Bangladesh.
							</h1>
							<p className='mt-8 max-w-xl text-base md:text-lg text-ash leading-relaxed text-pretty animate-rise-soft delay-300'>
								Five businesses under one roof — trade, study abroad, visas,
								real estate, and a beachside resort on Saint Martin&apos;s
								Island. Serving clients in fifteen countries for two decades.
							</p>
							<div className='mt-10 flex flex-wrap items-center gap-4 animate-rise-soft delay-400'>
								<Link href='#services' className='btn-ink group cta-trigger focus-ring'>
									Explore services
									<ArrowRight className='cta-arrow h-4 w-4' strokeWidth={1.75} />
								</Link>
								<Link href='#contact' className='btn-ghost focus-ring'>
									Talk to us
								</Link>
							</div>
						</div>

						<div className='col-span-12 lg:col-span-5 lg:pl-8 flex flex-col justify-end animate-rise-soft delay-500'>
							<div className='border-l border-stone pl-6 md:pl-8'>
								<p className='eyebrow-ink mb-3'>What we do</p>
								<p className='font-display text-2xl md:text-[28px] leading-snug text-ink'>
									Import &amp; export. Educational placement. Visa &amp;
									immigration. Property advisory. Hospitality.
								</p>
							</div>
						</div>
					</div>

					{/* Stats strip */}
					<div className='mt-20 md:mt-24 fade-up'>
						<div className='border-t border-stone'>
							<ul className='grid grid-cols-2 md:grid-cols-4 gap-px bg-stone stagger'>
								{stats.map(s => (
									<li
										key={s.label}
										className='bg-bone py-6 md:py-8 px-3 md:px-5'>
										<p className='font-display tabular text-display-md text-ink'>
											{s.value}
										</p>
										<p className='eyebrow-ink mt-2'>{s.label}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Scroll cue */}
				<a
					href='#services'
					aria-label='Scroll to services'
					className='hidden md:flex scroll-cue hover:text-clay transition-colors'>
					<span>Scroll</span>
				</a>
			</section>

			{/* MARQUEE */}
			<section
				aria-hidden='true'
				className='py-10 md:py-14 border-b border-stone overflow-hidden group'>
				<div className='flex items-center gap-12 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]'>
					{[...marquee, ...marquee].map((c, i) => (
						<span
							key={i}
							className='font-display text-2xl md:text-4xl text-ink/30 tracking-tight'>
							{c}
							<span className='ml-12 text-clay'>✦</span>
						</span>
					))}
				</div>
			</section>

			{/* SERVICES */}
			<section id='services' className='py-20 md:py-32 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-14 md:mb-20'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-4'>Practices</p>
							<h2 className='font-display text-display-lg'>
								Five disciplines, one standard.
							</h2>
						</div>
						<div className='col-span-12 md:col-span-7 md:col-start-6'>
							<p className='text-ash text-base md:text-lg leading-relaxed text-pretty md:mt-12'>
								Each practice operates as its own studio — with its own team,
								partners, and standards — but shares one operating principle:
								take the work seriously, and the rest follows.
							</p>
						</div>
					</div>

					<ul className='border-t border-stone fade-up stagger'>
						{services.map(s => (
							<li
								key={s.title}
								className='group border-b border-stone overflow-hidden relative'>
								<Link
									href={s.href}
									className='grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-center transition-colors duration-300 focus-ring px-2 -mx-2'>
									<span
										aria-hidden='true'
										className='absolute inset-0 bg-paper origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-soft'
									/>
									<div className='relative col-span-2 md:col-span-1'>
										<span className='font-display tabular text-xl md:text-2xl text-clay transition-colors duration-300 group-hover:text-clay-soft'>
											{s.index}
										</span>
									</div>
									<div className='relative col-span-10 md:col-span-4'>
										<h3 className='font-display text-2xl md:text-4xl text-ink leading-tight tracking-tight transition-transform duration-500 ease-soft group-hover:translate-x-2'>
											{s.title}
										</h3>
									</div>
									<div className='relative col-span-9 md:col-span-5'>
										<p className='text-sm md:text-base text-ash leading-relaxed text-pretty'>
											{s.blurb}
										</p>
									</div>
									<div className='relative col-span-3 md:col-span-2 flex justify-end'>
										<span className='inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-stone rounded-full text-ink transition-all duration-500 ease-soft group-hover:bg-ink group-hover:text-bone group-hover:border-ink group-hover:rotate-45'>
											<ArrowUpRight
												className='h-4 w-4 md:h-5 md:w-5'
												strokeWidth={1.5}
											/>
										</span>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* ABOUT PREVIEW */}
			<section className='py-20 md:py-32 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-16 items-center'>
						<div className='col-span-12 lg:col-span-6 fade-up'>
							<div className='relative aspect-[4/5] w-full overflow-hidden bg-paper'>
								<Image
									src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=1500&fit=crop'
									alt='RFM International team'
									fill
									className='object-cover'
									sizes='(max-width: 1024px) 100vw, 50vw'
								/>
							</div>
						</div>
						<div className='col-span-12 lg:col-span-6 fade-up'>
							<p className='eyebrow mb-4'>About RFM</p>
							<h2 className='font-display text-display-lg mb-8'>
								Two decades of bridging Bangladesh with the world.
							</h2>
							<p className='text-ash text-base md:text-lg leading-relaxed mb-5 text-pretty'>
								RFM International was founded with a simple idea: that
								Bangladeshi businesses, students, and travellers deserve a
								partner who treats global access as a craft.
							</p>
							<p className='text-ash text-base md:text-lg leading-relaxed mb-10 text-pretty'>
								Today, the firm runs five distinct practices, employs a team
								of specialists across each, and works with partners on five
								continents — quietly, and at a high standard.
							</p>
							<Link href='/about' className='btn-ghost'>
								Read our story
								<ArrowUpRight className='h-4 w-4' strokeWidth={1.75} />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CONTACT */}
			<section id='contact' className='py-20 md:py-32 bg-ink text-bone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-16'>
						<div className='col-span-12 lg:col-span-5'>
							<p className='eyebrow text-clay mb-4'>Talk to us</p>
							<h2 className='font-display text-display-lg text-bone mb-8'>
								Tell us where you&apos;re going. We&apos;ll help you get there.
							</h2>
							<ul className='space-y-5 mt-12'>
								<li className='flex items-start gap-4'>
									<MapPin
										className='h-5 w-5 mt-1 text-clay shrink-0'
										strokeWidth={1.5}
									/>
									<div>
										<p className='eyebrow text-bone/50 mb-1'>Office</p>
										<p className='text-bone/85 leading-relaxed'>
											Level 6, House 299, Free School Street,
											<br />
											Kathalbagan, Dhaka, Bangladesh
										</p>
									</div>
								</li>
								<li className='flex items-start gap-4'>
									<Mail
										className='h-5 w-5 mt-1 text-clay shrink-0'
										strokeWidth={1.5}
									/>
									<div>
										<p className='eyebrow text-bone/50 mb-1'>Email</p>
										<a
											href='mailto:rfmbusinessbd@gmail.com'
											className='text-bone/85 hover:text-clay link-underline transition-colors'>
											rfmbusinessbd@gmail.com
										</a>
									</div>
								</li>
								<li className='flex items-start gap-4'>
									<Phone
										className='h-5 w-5 mt-1 text-clay shrink-0'
										strokeWidth={1.5}
									/>
									<div>
										<p className='eyebrow text-bone/50 mb-1'>Phone</p>
										<a
											href='tel:+8801815558785'
											className='text-bone/85 hover:text-clay link-underline transition-colors'>
											+880 1815 558 785
										</a>
									</div>
								</li>
							</ul>
						</div>

						<div className='col-span-12 lg:col-span-7 lg:pl-8'>
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div>
									<label
										htmlFor='name'
										className='eyebrow text-bone/50 block mb-2'>
										Your name
									</label>
									<input
										id='name'
										name='name'
										required
										value={formData.name}
										onChange={handleChange}
										className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors'
										placeholder='Full name'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='eyebrow text-bone/50 block mb-2'>
										Email
									</label>
									<input
										id='email'
										name='email'
										type='email'
										required
										value={formData.email}
										onChange={handleChange}
										className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors'
										placeholder='you@company.com'
									/>
								</div>
								<div>
									<label
										htmlFor='message'
										className='eyebrow text-bone/50 block mb-2'>
										What can we help with?
									</label>
									<textarea
										id='message'
										name='message'
										required
										rows={4}
										value={formData.message}
										onChange={handleChange}
										className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors resize-none'
										placeholder='Tell us a little about your project or destination'
									/>
								</div>
								<SubmitButton pending={pending}>Send message</SubmitButton>
							</form>

							<div className='mt-10 aspect-[16/9] w-full bg-bone/5 border border-bone/10 overflow-hidden'>
								<iframe
									title='RFM International office location'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0145542342952!2d90.3921316!3d23.7468604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b670640341%3A0x11ea2bd3be66dafd!2sRFM%20International!5e0!3m2!1sen!2sus!4v1725812529241!5m2!1sen!2sus'
									className='w-full h-full grayscale contrast-110'
									style={{ border: 0, filter: 'grayscale(0.6) contrast(1.05)' }}
									allowFullScreen=''
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
