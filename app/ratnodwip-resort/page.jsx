'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
	Waves,
	Wind,
	Sun,
	Utensils,
	MapPin,
	Phone,
	Facebook,
	Bed,
	Coffee,
	ArrowUpRight
} from 'lucide-react'
import toast from 'react-hot-toast'
import SubmitButton from '../../components/SubmitButton'

const galleryImages = [
	{ src: '/ratnowdip-1.jpeg', alt: 'Ratnodwip resort exterior view 1' },
	{ src: '/ratnowdip-3.jpeg', alt: 'Ratnodwip resort interior view' },
	{ src: '/ratnowdip-4.jpeg', alt: 'Ratnodwip beachfront view' },
	{ src: '/ratnowdip-5.jpeg', alt: 'Ratnodwip rooms and amenities' }
]

const amenities = [
	{ icon: Waves, title: 'Beachfront', description: 'Steps from the pristine East Beach of Saint Martin.' },
	{ icon: Bed, title: 'Comfortable rooms', description: 'Well-appointed rooms with modern amenities.' },
	{ icon: Utensils, title: 'Fresh seafood', description: 'Local cuisine and fresh seafood dishes daily.' },
	{ icon: Wind, title: 'Ocean breeze', description: 'Natural ventilation and refreshing sea air.' },
	{ icon: Sun, title: 'Bright & airy', description: 'Light-filled rooms with essential modern facilities.' },
	{ icon: Coffee, title: 'Island breakfast', description: 'Start your day with a complimentary breakfast.' }
]

const experiences = [
	'Coral reef snorkelling and diving',
	'Island hopping adventures',
	'Beachside dining experiences',
	'Sunrise and sunset viewing',
	'Local fishing village tours',
	'Water sports activities'
]

export default function RatnodwipResortPage() {
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
				body: JSON.stringify({ ...formData, subject: 'Ratnodwip Resort Inquiry' })
			})
			if (r.ok) {
				toast.success('Inquiry sent. We\'ll be in touch.')
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

	return (
		<main className='bg-bone text-ink'>
			{/* HERO */}
			<section className='relative pt-24 md:pt-32 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 items-end pb-12'>
						<div className='col-span-12 lg:col-span-7'>
							<p className='eyebrow mb-6 animate-rise-soft'>Practice 05 / Hospitality</p>
							<p className='font-display text-2xl text-ash mb-4 italic animate-rise-soft delay-100'>
								রত্নদ্বীপ বিচ ভিউ রিসোর্ট
							</p>
							<h1 className='font-display text-display-2xl animate-rise delay-200'>
								Ratnodwip <em className='not-italic text-clay'>Beach View</em> Resort.
							</h1>
						</div>
						<div className='col-span-12 lg:col-span-4 lg:col-start-9 animate-rise-soft delay-400'>
							<p className='text-ash text-base md:text-lg leading-relaxed text-pretty'>
								A quiet beachside escape on Saint Martin&apos;s East Beach,
								owned and operated by RFM International.
							</p>
							<div className='mt-8 flex flex-wrap gap-4'>
								<a href='tel:+8801610563904' className='btn-clay'>
									<Phone className='h-4 w-4' strokeWidth={1.75} />
									Call to book
								</a>
								<Link
									href='https://www.facebook.com/ratnodwipresort21'
									target='_blank'
									rel='noopener noreferrer'
									className='btn-ghost'>
									<Facebook className='h-4 w-4' strokeWidth={1.75} />
									Facebook
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Hero image */}
				<div className='relative w-full aspect-[21/9] bg-paper overflow-hidden'>
					<Image
						src='/ratnowdip-1.jpeg'
						alt='Ratnodwip Beach View Resort'
						fill
						priority
						sizes='100vw'
						className='object-cover'
					/>
					<div className='absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-bone/90 backdrop-blur-sm border border-stone px-4 py-2'>
						<p className='eyebrow-ink text-[10px]'>EAST BEACH · GOLACHIPA · SAINT MARTIN</p>
					</div>
				</div>
			</section>

			{/* AMENITIES */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>The resort</p>
							<h2 className='font-display text-display-md'>Amenities</h2>
						</div>
					</div>
					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone fade-up stagger'>
						{amenities.map(a => (
							<li
								key={a.title}
								className='group p-7 md:p-8 border-r border-b border-stone bg-paper'>
								<a.icon className='h-6 w-6 text-clay mb-6 transition-transform duration-500 ease-soft group-hover:scale-110' strokeWidth={1.25} />
								<h3 className='font-display text-2xl mb-3 leading-tight'>
									{a.title}
								</h3>
								<p className='text-sm text-ash leading-relaxed text-pretty'>
									{a.description}
								</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* GALLERY */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>The view</p>
							<h2 className='font-display text-display-md'>Gallery</h2>
						</div>
						<div className='col-span-12 md:col-span-7 md:col-start-6 flex items-end'>
							<Link
								href='https://www.facebook.com/ratnodwipresort21/photos'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 text-sm text-ink hover:text-clay link-underline transition-colors'>
								See more on Facebook
								<ArrowUpRight className='h-3.5 w-3.5' strokeWidth={1.75} />
							</Link>
						</div>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone fade-up stagger'>
						{galleryImages.map((img, i) => (
							<div
								key={i}
								className='relative aspect-[4/5] overflow-hidden bg-paper group'>
								<Image
									src={img.src}
									alt={img.alt}
									fill
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
									className='object-cover group-hover:scale-105 transition-transform duration-700 ease-soft'
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* EXPERIENCES */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-16 items-center'>
						<div className='col-span-12 lg:col-span-6 fade-up'>
							<div className='relative aspect-[4/5] w-full overflow-hidden bg-paper'>
								<Image
									src='/ratnowdip-2.jpeg'
									alt='Ratnodwip resort experience'
									fill
									sizes='(max-width: 1024px) 100vw, 50vw'
									className='object-cover'
								/>
							</div>
						</div>
						<div className='col-span-12 lg:col-span-6 fade-up'>
							<p className='eyebrow mb-4'>Things to do</p>
							<h2 className='font-display text-display-lg mb-8'>
								The island, on its own time.
							</h2>
							<p className='text-ash text-base md:text-lg leading-relaxed mb-10 text-pretty'>
								Saint Martin is small, quiet, and best explored slowly. We
								can arrange any of the following on request — or simply leave
								you alone with the sea.
							</p>
							<ul className='border-t border-stone'>
								{experiences.map(e => (
									<li
										key={e}
										className='py-4 border-b border-stone-soft text-ink leading-snug flex items-center gap-3'>
										<span className='text-clay font-display tabular text-sm w-6'>
											✦
										</span>
										{e}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* BOOK */}
			<section id='contact' className='py-20 md:py-32 bg-ink text-bone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-16'>
						<div className='col-span-12 lg:col-span-5'>
							<p className='eyebrow text-clay mb-4'>Book your stay</p>
							<h2 className='font-display text-display-lg text-bone mb-8'>
								Tell us when you&apos;re coming.
							</h2>
							<ul className='space-y-5'>
								<li className='flex items-start gap-4'>
									<MapPin className='h-5 w-5 mt-1 text-clay shrink-0' strokeWidth={1.5} />
									<div>
										<p className='eyebrow text-bone/50 mb-1'>Location</p>
										<p className='text-bone/85 leading-relaxed'>
											East Beach, Golachipa, Saint Martin
										</p>
									</div>
								</li>
								<li className='flex items-start gap-4'>
									<Phone className='h-5 w-5 mt-1 text-clay shrink-0' strokeWidth={1.5} />
									<div>
										<p className='eyebrow text-bone/50 mb-1'>Phone</p>
										<a href='tel:+8801610563904' className='text-bone/85 hover:text-clay transition-colors'>
											+880 1610 563 904
										</a>
									</div>
								</li>
								<li className='flex items-start gap-4'>
									<Facebook className='h-5 w-5 mt-1 text-clay shrink-0' strokeWidth={1.5} />
									<div>
										<p className='eyebrow text-bone/50 mb-1'>Follow</p>
										<Link
											href='https://www.facebook.com/ratnodwipresort21'
											target='_blank'
											rel='noopener noreferrer'
											className='text-bone/85 hover:text-clay transition-colors'>
											facebook.com/ratnodwipresort21
										</Link>
									</div>
								</li>
							</ul>
							<div className='mt-10 pt-8 border-t border-bone/15'>
								<p className='eyebrow text-bone/50 mb-3'>How to reach</p>
								<p className='text-bone/70 text-sm leading-relaxed text-pretty'>
									Take a cruise from Teknaf to Saint Martin Island. The
									resort is at East Beach, Golachipa. Shuttle from the jetty
									available on request.
								</p>
							</div>
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
									<label htmlFor='message' className='eyebrow text-bone/50 block mb-2'>Dates &amp; details</label>
									<textarea id='message' name='message' required rows={5} value={formData.message} onChange={handleChange} className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors resize-none' placeholder='Check-in / check-out, number of guests, any special requests.' />
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
