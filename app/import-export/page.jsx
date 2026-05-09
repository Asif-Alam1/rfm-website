'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
	Truck,
	Package,
	ShieldCheck,
	Briefcase,
	ShoppingBag,
	ArrowUpRight
} from 'lucide-react'
import toast from 'react-hot-toast'
import SubmitButton from '../../components/SubmitButton'

const services = [
	{
		icon: Truck,
		title: 'Logistics support',
		description:
			'Efficient transportation and delivery solutions across air, sea, and road.'
	},
	{
		icon: Package,
		title: 'Customs clearance',
		description:
			'Streamlined customs processes and documentation handled by our in-house C&F agents.'
	},
	{
		icon: ShieldCheck,
		title: 'Door-to-door',
		description:
			'Order from anywhere in the world and we deliver it to your door in Bangladesh.'
	},
	{
		icon: Briefcase,
		title: 'Sourcing',
		description:
			'We source the products you need — from India, China, and beyond — with quality vetting.'
	},
	{
		icon: ShoppingBag,
		title: 'Dropshipping & fulfilment',
		description:
			'Sourcing and dropshipping with quality checks and fulfilment for resellers.'
	}
]

const products = [
	{
		name: 'Handicrafts',
		image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=900&h=900&fit=crop',
		description: 'Traditional & artisanal crafts'
	},
	{
		name: 'Fishes',
		image: 'https://images.unsplash.com/photo-1611214774777-3d997a9d0e35?w=900&h=900&fit=crop',
		description: 'Fresh & frozen seafood, wholesale'
	},
	{
		name: 'Ceramic Tableware',
		image: 'https://images.unsplash.com/photo-1610128361323-6e941c97f023?w=900&h=900&fit=crop',
		description: 'Plates, bowls & dinnerware sets'
	},
	{
		name: 'Vegetables',
		image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&h=900&fit=crop',
		description: 'Farm-fresh produce'
	},
	{
		name: 'Clothing',
		image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=900&h=900&fit=crop',
		description: 'Fashion & apparel'
	},
	{
		name: 'Plastic Products',
		image: 'https://images.unsplash.com/photo-1536939459926-301728717817?w=900&h=900&fit=crop',
		description: 'Industrial plastic goods'
	},
	{
		name: 'Wigs',
		image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&h=900&fit=crop',
		description: 'Hair extensions & wigs'
	},
	{
		name: 'Leather Goods',
		image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&h=900&fit=crop',
		description: 'Premium leather products'
	},
	{
		name: 'Garments',
		image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&h=900&fit=crop',
		description: 'Textile & ready-made garments'
	},
	{
		name: 'Machinery',
		image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&h=900&fit=crop',
		description: 'Industrial equipment'
	},
	{
		name: 'Chemicals',
		image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&h=900&fit=crop',
		description: 'Industrial chemicals'
	},
	{
		name: 'Automobiles',
		image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=900&h=900&fit=crop',
		description: 'Vehicles & auto parts'
	}
]

const importSteps = [
	{ title: 'Supplier selection', body: 'Evaluate and choose suppliers based on quality, price, and reliability.' },
	{ title: 'Negotiation', body: 'Discuss terms, prices, and conditions with selected suppliers.' },
	{ title: 'Order placement', body: 'Finalise and place orders with your chosen suppliers.' },
	{ title: 'Shipping & logistics', body: 'Arrange transportation, insurance, and live tracking of shipments.' },
	{ title: 'Customs clearance', body: 'Handle documentation and pay all necessary duties and taxes.' }
]

const exportSteps = [
	{ title: 'Product adaptation', body: 'Modify products to meet international standards and preferences.' },
	{ title: 'Export documentation', body: 'Prepare paperwork including certificates of origin and commercial invoices.' },
	{ title: 'Logistics planning', body: 'Determine the most efficient shipping methods and routes.' },
	{ title: 'Customs procedures', body: 'Comply with export regulations and obtain required licences.' },
	{ title: 'Payment collection', body: 'Establish secure payment terms with international buyers.' }
]

export default function ImportExport() {
	const [tab, setTab] = useState('import')
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
				body: JSON.stringify({ ...formData, subject: 'Import-Export Inquiry' })
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

	const steps = tab === 'import' ? importSteps : exportSteps

	return (
		<main className='bg-bone text-ink'>
			{/* HERO */}
			<section className='pt-32 md:pt-40 pb-16 md:pb-24 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8'>
						<div className='col-span-12 lg:col-span-7'>
							<p className='eyebrow mb-6 animate-rise-soft'>Practice 01 / Import-Export</p>
							<h1 className='font-display text-display-2xl animate-rise delay-100'>
								Global trade,<br />
								<em className='not-italic text-clay'>handled.</em>
							</h1>
						</div>
						<div className='col-span-12 lg:col-span-4 lg:col-start-9 flex items-end animate-rise-soft delay-300'>
							<p className='text-ash text-base md:text-lg leading-relaxed text-pretty'>
								Sourcing, customs clearance, and door-to-door logistics —
								across India, China, and partner markets worldwide. We move
								goods so you can move on.
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

			{/* PRODUCTS */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>Categories</p>
							<h2 className='font-display text-display-md'>What we move</h2>
						</div>
						<div className='col-span-12 md:col-span-7 md:col-start-6 flex items-end'>
							<p className='text-ash text-base leading-relaxed text-pretty'>
								Twelve product categories, sourced and shipped through our
								network. Don&apos;t see what you&apos;re looking for? We
								source bespoke.
							</p>
						</div>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-stone fade-up stagger'>
						{products.map(p => (
							<article
								key={p.name}
								className='group bg-bone relative overflow-hidden'>
								<div className='relative aspect-square overflow-hidden bg-paper'>
									<Image
										src={p.image}
										alt={p.name}
										fill
										sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
										className='object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-soft'
									/>
								</div>
								<div className='p-4 md:p-5 flex items-start justify-between gap-3'>
									<div>
										<h3 className='font-display text-lg md:text-xl text-ink leading-tight'>
											{p.name}
										</h3>
										<p className='text-xs text-ash mt-1 leading-snug'>
											{p.description}
										</p>
									</div>
									<ArrowUpRight
										className='h-4 w-4 text-ash shrink-0 mt-1 transition-transform group-hover:rotate-45 group-hover:text-clay'
										strokeWidth={1.5}
									/>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* PROCESS */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>How we work</p>
							<h2 className='font-display text-display-md'>The process</h2>
						</div>
						<div className='col-span-12 md:col-span-8 flex md:justify-end items-end'>
							<div className='inline-flex border border-ink/15 p-1 bg-paper'>
								<button
									onClick={() => setTab('import')}
									className={`px-5 py-2 text-sm font-medium tracking-tight transition-colors ${
										tab === 'import' ? 'bg-ink text-bone' : 'text-ink hover:text-clay'
									}`}>
									Import process
								</button>
								<button
									onClick={() => setTab('export')}
									className={`px-5 py-2 text-sm font-medium tracking-tight transition-colors ${
										tab === 'export' ? 'bg-ink text-bone' : 'text-ink hover:text-clay'
									}`}>
									Export process
								</button>
							</div>
						</div>
					</div>

					<ol className='border-t border-stone'>
						{steps.map((step, i) => (
							<li key={step.title} className='grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 border-b border-stone'>
								<div className='col-span-2 md:col-span-1'>
									<span className='font-display tabular text-2xl md:text-3xl text-clay'>
										{String(i + 1).padStart(2, '0')}
									</span>
								</div>
								<div className='col-span-10 md:col-span-4'>
									<h3 className='font-display text-2xl md:text-3xl leading-tight'>
										{step.title}
									</h3>
								</div>
								<div className='col-span-12 md:col-span-7'>
									<p className='text-ash text-base leading-relaxed text-pretty'>
										{step.body}
									</p>
								</div>
							</li>
						))}
					</ol>
				</div>
			</section>

			{/* CONTACT */}
			<section id='contact' className='py-20 md:py-32 bg-ink text-bone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-16'>
						<div className='col-span-12 lg:col-span-5'>
							<p className='eyebrow text-clay mb-4'>Get a quote</p>
							<h2 className='font-display text-display-lg text-bone mb-8'>
								Tell us what you need to move.
							</h2>
							<p className='text-bone/70 text-base md:text-lg leading-relaxed text-pretty max-w-md'>
								We typically respond within one business day with a
								feasibility note and indicative pricing.
							</p>
						</div>

						<div className='col-span-12 lg:col-span-7 lg:pl-8'>
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div>
									<label htmlFor='name' className='eyebrow text-bone/50 block mb-2'>
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
									<label htmlFor='email' className='eyebrow text-bone/50 block mb-2'>
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
									<label htmlFor='message' className='eyebrow text-bone/50 block mb-2'>
										What are you looking to import or export?
									</label>
									<textarea
										id='message'
										name='message'
										required
										rows={4}
										value={formData.message}
										onChange={handleChange}
										className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors resize-none'
										placeholder='Origin, destination, product category, and approximate volume.'
									/>
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
