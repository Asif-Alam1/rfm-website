'use client'

import { useState, useEffect } from 'react'
import {
	Home,
	Building,
	Search,
	DollarSign,
	Key,
	Briefcase,
	MapPin
} from 'lucide-react'
import toast from 'react-hot-toast'
import SubmitButton from '../../components/SubmitButton'

const services = [
	{ icon: Home, title: 'Residential properties', description: 'Find your home with extensive listings across Dhaka.' },
	{ icon: Building, title: 'Commercial real estate', description: 'Prime locations for offices, retail, and mixed-use.' },
	{ icon: Search, title: 'Land', description: 'Acquire land for personal or company use, in Bangladesh and abroad.' },
	{ icon: Briefcase, title: 'Land shares', description: 'Co-own with vetted shareholders for affordable entry points.' },
	{ icon: DollarSign, title: 'Investment opportunities', description: 'Curated real estate investments matched to your goals.' },
	{ icon: Key, title: 'Property management', description: 'End-to-end management for owners and landlords.' },
	{ icon: Briefcase, title: 'Real estate consulting', description: 'Strategy, valuation, and advisory across the asset class.' }
]

const landProjects = [
	{ title: 'South Banasree', area: 'Dhaka', body: 'Well-located plots within an established residential neighbourhood.' },
	{ title: 'Nandipara, Khilgaon', area: 'Dhaka', body: 'Spacious parcels close to amenities and transport routes.' },
	{ title: 'Shah Mosque Housing', area: 'Mohammadpur', body: 'Attractive land opportunities with solid community infrastructure.' },
	{ title: 'Chandrima Housing', area: 'Mohammadpur', body: 'Established housing area with conveniently located plots.' },
	{ title: 'Narayanganj', area: 'Outer Dhaka', body: 'Strategically positioned land with strong redevelopment prospects.' }
]

const flatProjects = [
	{ title: 'Chandrima Flat', area: 'Mohammadpur', body: 'Modern apartments, thoughtfully designed and well-finished.' }
]

export default function RealEstate() {
	const [tab, setTab] = useState('land')
	const [formData, setFormData] = useState({ name: '', email: '', message: '' })
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
			{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
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
				body: JSON.stringify({ ...formData, subject: 'Real Estate Inquiry' })
			})
			if (r.ok) {
				toast.success('Message sent. We\'ll be in touch.')
				setFormData({ name: '', email: '', message: '' })
			} else toast.error('Failed to send. Please try again.')
		} catch {
			toast.error('Something went wrong.')
		} finally {
			setPending(false)
		}
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(s => ({ ...s, [name]: value }))
	}

	const projects = tab === 'land' ? landProjects : flatProjects

	return (
		<main className='bg-bone text-ink'>
			{/* HERO */}
			<section className='relative pt-32 md:pt-40 pb-16 md:pb-24 border-b border-stone overflow-hidden'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 relative z-10'>
					<div className='grid grid-cols-12 gap-8'>
						<div className='col-span-12 lg:col-span-7'>
							<p className='eyebrow mb-6 animate-rise-soft'>Business 04 / Real Estate</p>
							<h1 className='font-display text-display-2xl animate-rise delay-100'>
								Land &amp; <em className='not-italic text-clay'>property,</em><br />
								advised.
							</h1>
						</div>
						<div className='col-span-12 lg:col-span-4 lg:col-start-9 flex items-end animate-rise-soft delay-300'>
							<p className='text-ash text-base md:text-lg leading-relaxed text-pretty'>
								Residential and commercial property advisory across Dhaka
								and the wider region. Land acquisition, share-ownership,
								and full-cycle management.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>What we do</p>
							<h2 className='font-display text-display-md'>Services</h2>
						</div>
					</div>
					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone fade-up stagger'>
						{services.map(s => (
							<li
								key={s.title}
								className='group p-7 md:p-8 border-r border-b border-stone bg-paper hover:bg-bone transition-colors duration-500'>
								<s.icon className='h-6 w-6 text-clay mb-6 transition-transform duration-500 ease-soft group-hover:scale-110' strokeWidth={1.25} />
								<h3 className='font-display text-2xl mb-3 leading-tight'>
									{s.title}
								</h3>
								<p className='text-sm text-ash leading-relaxed text-pretty'>
									{s.description}
								</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* PROJECTS */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>Current projects</p>
							<h2 className='font-display text-display-md'>What&apos;s available</h2>
						</div>
						<div className='col-span-12 md:col-span-8 flex md:justify-end items-end'>
							<div className='inline-flex border border-ink/15 p-1 bg-paper'>
								<button
									onClick={() => setTab('land')}
									className={`px-5 py-2 text-sm font-medium tracking-tight transition-colors ${
										tab === 'land' ? 'bg-ink text-bone' : 'text-ink hover:text-clay'
									}`}>
									Land
								</button>
								<button
									onClick={() => setTab('flat')}
									className={`px-5 py-2 text-sm font-medium tracking-tight transition-colors ${
										tab === 'flat' ? 'bg-ink text-bone' : 'text-ink hover:text-clay'
									}`}>
									Flat
								</button>
							</div>
						</div>
					</div>

					<ul className='grid grid-cols-1 md:grid-cols-2 gap-px bg-stone border border-stone fade-up stagger'>
						{projects.map(p => (
							<li key={p.title} className='bg-paper p-8 md:p-10 group'>
								<div className='flex items-start justify-between gap-4 mb-6'>
									<div className='flex items-center gap-2'>
										<MapPin className='h-3.5 w-3.5 text-clay' strokeWidth={1.5} />
										<p className='eyebrow-ink text-[10px]'>{p.area}</p>
									</div>
									<span className='text-xs text-ash'>Available</span>
								</div>
								<h3 className='font-display text-3xl md:text-4xl mb-4 leading-tight transition-transform duration-500 ease-soft group-hover:translate-x-1'>
									{p.title}
								</h3>
								<p className='text-ash text-base leading-relaxed text-pretty'>
									{p.body}
								</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* CONTACT */}
			<section id='contact' className='py-20 md:py-32 bg-ink text-bone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-16'>
						<div className='col-span-12 lg:col-span-5'>
							<p className='eyebrow text-clay mb-4'>Talk to our team</p>
							<h2 className='font-display text-display-lg text-bone mb-8'>
								Tell us what you&apos;re looking for.
							</h2>
							<p className='text-bone/70 text-base md:text-lg leading-relaxed text-pretty max-w-md'>
								Whether you&apos;re buying, investing, or managing, we&apos;ll
								put the right person on it.
							</p>
						</div>
						<div className='col-span-12 lg:col-span-7 lg:pl-8'>
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div>
									<label htmlFor='name' className='eyebrow text-bone/50 block mb-2'>Your name</label>
									<input id='name' name='name' required value={formData.name} onChange={handleChange} className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors' placeholder='Full name' />
								</div>
								<div>
									<label htmlFor='email' className='eyebrow text-bone/50 block mb-2'>Email</label>
									<input id='email' name='email' type='email' required value={formData.email} onChange={handleChange} className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors' placeholder='you@email.com' />
								</div>
								<div>
									<label htmlFor='message' className='eyebrow text-bone/50 block mb-2'>What kind of property are you interested in?</label>
									<textarea id='message' name='message' required rows={4} value={formData.message} onChange={handleChange} className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors resize-none' placeholder='Land, flat, commercial, share, and your preferred area.' />
								</div>
								<SubmitButton pending={pending} />
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
