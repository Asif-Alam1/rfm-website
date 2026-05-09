'use client'

import { useState, useEffect } from 'react'
import {
	Briefcase,
	GraduationCap,
	Heart,
	Plane,
	FileCheck,
	Globe
} from 'lucide-react'
import toast from 'react-hot-toast'
import SubmitButton from '../../components/SubmitButton'

const visaTypes = [
	{ icon: Briefcase, title: 'Work visa', description: 'For professionals seeking employment abroad.' },
	{ icon: GraduationCap, title: 'Student visa', description: 'For students pursuing education in foreign institutions.' },
	{ icon: Heart, title: 'Family visa', description: 'For individuals joining family members overseas.' },
	{ icon: Plane, title: 'Umrah & Hajj visa', description: 'For performing Hajj or Umrah with family.' },
	{ icon: Plane, title: 'Tourist visa', description: 'For travellers exploring new destinations.' },
	{ icon: FileCheck, title: 'Permanent residency', description: 'For those looking to settle permanently abroad.' },
	{ icon: Globe, title: 'Business visa', description: 'For entrepreneurs and business travellers.' }
]

const workVisaCountries = [
	'Italy', 'Serbia', 'Russia', 'Sweden', 'Netherlands',
	'Hungary', 'Romania', 'Qatar', 'Kuwait', 'Saudi Arabia'
]
const visitVisaCountries = [
	'USA', 'UK', 'Australia', 'Germany', 'Denmark',
	'Italy', 'Canada', 'Brazil', 'Japan', 'China',
	'India', 'Singapore', 'Malaysia', 'Thailand'
]

const processTabs = {
	consultation: {
		label: 'Consultation',
		title: 'Initial consultation',
		blurb: 'Understanding your visa needs and eligibility.',
		bullets: [
			'Assess your visa requirements',
			'Evaluate eligibility for different visa types',
			'Recommend the best visa pathway',
			'Walk you through the application process'
		]
	},
	preparation: {
		label: 'Preparation',
		title: 'Document preparation',
		blurb: 'Gathering and organising required documents.',
		bullets: [
			'Comprehensive document checklist',
			'Assistance with certificates and translations',
			'Review and validation of all documents',
			'Application forms and supporting letters'
		]
	},
	submission: {
		label: 'Submission',
		title: 'Application submission',
		blurb: 'Finalising and submitting your visa application.',
		bullets: [
			'Submit application on your behalf',
			'Schedule biometrics and interviews',
			'Track status and send regular updates',
			'Respond to any embassy follow-ups'
		]
	}
}

export default function VisaConsultancy() {
	const [tab, setTab] = useState('consultation')
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
				body: JSON.stringify({ ...formData, subject: 'Visa Consultancy Inquiry' })
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

	return (
		<main className='bg-bone text-ink'>
			{/* HERO */}
			<section className='pt-32 md:pt-40 pb-16 md:pb-24 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8'>
						<div className='col-span-12 lg:col-span-7'>
							<p className='eyebrow mb-6 animate-rise-soft'>Practice 03 / Visa Consultancy</p>
							<h1 className='font-display text-display-2xl animate-rise delay-100'>
								Borders, <em className='not-italic text-clay'>opened.</em>
							</h1>
						</div>
						<div className='col-span-12 lg:col-span-4 lg:col-start-9 flex items-end animate-rise-soft delay-300'>
							<p className='text-ash text-base md:text-lg leading-relaxed text-pretty'>
								Work, student, family, and tourist visas — handled
								end-to-end with documentation, embassy appointments, and
								follow-up.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* VISA TYPES */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>Visa categories</p>
							<h2 className='font-display text-display-md'>Seven types we handle</h2>
						</div>
					</div>
					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone fade-up stagger'>
						{visaTypes.map(v => (
							<li
								key={v.title}
								className='group p-7 md:p-8 border-r border-b border-stone bg-paper hover:bg-bone transition-colors duration-500'>
								<v.icon className='h-6 w-6 text-clay mb-6 transition-transform duration-500 ease-soft group-hover:scale-110' strokeWidth={1.25} />
								<h3 className='font-display text-2xl mb-3 leading-tight'>
									{v.title}
								</h3>
								<p className='text-sm text-ash leading-relaxed text-pretty'>
									{v.description}
								</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* COUNTRIES */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>Where we work</p>
							<h2 className='font-display text-display-md'>Countries we serve</h2>
						</div>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-px bg-stone border border-stone'>
						<div className='bg-paper p-8 md:p-12'>
							<div className='flex items-center gap-3 mb-8'>
								<Briefcase className='h-5 w-5 text-clay' strokeWidth={1.5} />
								<p className='eyebrow-ink'>Work visa</p>
							</div>
							<h3 className='font-display text-3xl md:text-4xl mb-8 leading-tight'>
								Employment opportunities abroad
							</h3>
							<ul className='grid grid-cols-2 gap-x-8 gap-y-3'>
								{workVisaCountries.map(c => (
									<li key={c} className='text-ink text-sm py-2 border-b border-stone-soft'>
										{c}
									</li>
								))}
							</ul>
						</div>
						<div className='bg-paper p-8 md:p-12'>
							<div className='flex items-center gap-3 mb-8'>
								<Plane className='h-5 w-5 text-clay' strokeWidth={1.5} />
								<p className='eyebrow-ink'>Visit visa</p>
							</div>
							<h3 className='font-display text-3xl md:text-4xl mb-8 leading-tight'>
								Travel and tourism support
							</h3>
							<ul className='grid grid-cols-2 gap-x-8 gap-y-3'>
								{visitVisaCountries.map(c => (
									<li key={c} className='text-ink text-sm py-2 border-b border-stone-soft'>
										{c}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* PROCESS */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>Application process</p>
							<h2 className='font-display text-display-md'>How we work</h2>
						</div>
						<div className='col-span-12 md:col-span-8 flex md:justify-end items-end'>
							<div className='inline-flex flex-wrap border border-ink/15 p-1 bg-paper'>
								{Object.keys(processTabs).map(key => (
									<button
										key={key}
										onClick={() => setTab(key)}
										className={`px-5 py-2 text-sm font-medium tracking-tight transition-colors ${
											tab === key ? 'bg-ink text-bone' : 'text-ink hover:text-clay'
										}`}>
										{processTabs[key].label}
									</button>
								))}
							</div>
						</div>
					</div>

					<div className='grid grid-cols-12 gap-8 border-t border-stone pt-12'>
						<div className='col-span-12 md:col-span-5'>
							<p className='eyebrow mb-3'>Step</p>
							<h3 className='font-display text-3xl md:text-4xl mb-4 leading-tight'>
								{processTabs[tab].title}
							</h3>
							<p className='text-ash text-base leading-relaxed text-pretty'>
								{processTabs[tab].blurb}
							</p>
						</div>
						<div className='col-span-12 md:col-span-7'>
							<ul className='border-t border-stone'>
								{processTabs[tab].bullets.map((b, i) => (
									<li
										key={`${tab}-${i}`}
										className='grid grid-cols-12 gap-4 py-5 border-b border-stone'>
										<span className='col-span-1 font-display tabular text-lg text-clay'>
											{String(i + 1).padStart(2, '0')}
										</span>
										<span className='col-span-11 text-ink text-base leading-relaxed'>
											{b}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* CONTACT */}
			<section id='contact' className='py-20 md:py-32 bg-ink text-bone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-16'>
						<div className='col-span-12 lg:col-span-5'>
							<p className='eyebrow text-clay mb-4'>Book a consultation</p>
							<h2 className='font-display text-display-lg text-bone mb-8'>
								Tell us where you want to go.
							</h2>
							<p className='text-bone/70 text-base md:text-lg leading-relaxed text-pretty max-w-md'>
								Free initial assessment. We&apos;ll review your case and
								map out a realistic application strategy.
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
									<label htmlFor='message' className='eyebrow text-bone/50 block mb-2'>What kind of visa are you applying for?</label>
									<textarea id='message' name='message' required rows={4} value={formData.message} onChange={handleChange} className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors resize-none' placeholder='Visa type, destination country, timeline.' />
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
