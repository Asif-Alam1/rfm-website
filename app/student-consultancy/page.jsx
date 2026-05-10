'use client'

import { useState, useEffect } from 'react'
import {
	GraduationCap,
	BookOpen,
	Globe,
	Users,
	Lightbulb,
	Award,
	CheckCircle2,
	MapPin
} from 'lucide-react'
import toast from 'react-hot-toast'
import SubmitButton from '../../components/SubmitButton'

const services = [
	{ icon: GraduationCap, title: 'University selection', description: 'Find the right university for your goals, profile, and budget.' },
	{ icon: BookOpen, title: 'Course guidance', description: 'Expert advice on choosing the right courses and programmes.' },
	{ icon: Globe, title: 'Visa assistance', description: 'Streamline your student visa application from start to finish.' },
	{ icon: Users, title: 'Pre-departure briefing', description: 'Cultural, academic, and practical preparation before you fly.' },
	{ icon: Lightbulb, title: 'Career counselling', description: 'Align your studies with long-term career aspirations.' },
	{ icon: Award, title: 'Scholarship support', description: 'Discover and apply for scholarships you qualify for.' }
]

const visaChecklist = [
	{ item: 'Passport', responsibility: 'Student' },
	{ item: 'Academic transcripts and certificates', responsibility: 'Student' },
	{ item: 'Test scores (IELTS, Duolingo, iTEP)', responsibility: 'If needed' },
	{ item: 'Bank solvency', responsibility: 'Student (RFM will help if needed)' },
	{ item: '6-month bank statement', responsibility: 'Client (RFM will help if needed)' },
	{ item: 'Offer letter', responsibility: 'University' },
	{ item: 'Embassy appointment', responsibility: 'RFM' },
	{ item: 'Scholarship', responsibility: 'RFM' }
]

const applicationProcess = [
	'Submission of all academic certificates to the university',
	'Receiving offer letter from university',
	'Managing bank solvency',
	'Embassy date',
	'Facing embassy',
	'Receiving visa',
	'Departure'
]

const partnerUniversities = [
	{ name: 'Northeastern University London', country: 'UK' },
	{ name: 'INTO Manchester (NCUK)', country: 'UK' },
	{ name: 'University of Suffolk', country: 'UK' },
	{ name: 'University of Westminster', country: 'UK' },
	{ name: 'Leeds Trinity University', country: 'UK' },
	{ name: 'Teesside University', country: 'UK' },
	{ name: 'Liverpool Hope University', country: 'UK' },
	{ name: 'Birkbeck, University of London', country: 'UK' },
	{ name: 'University of York', country: 'UK' },
	{ name: 'Manchester Metropolitan University', country: 'UK' },
	{ name: 'Leeds Beckett University', country: 'UK' },
	{ name: 'University of Derby', country: 'UK' },
	{ name: 'Abertay University', country: 'UK' },
	{ name: 'Liverpool John Moores University', country: 'UK' },
	{ name: 'Middlesex University London', country: 'UK' },
	{ name: 'De Montfort University', country: 'UK' },
	{ name: 'University of Chichester', country: 'UK' },
	{ name: 'University of Sunderland', country: 'UK' },
	{ name: 'University of Central Lancashire', country: 'UK' },
	{ name: 'Oxford Brookes University', country: 'UK' },
	{ name: 'Northumbria University', country: 'UK' },
	{ name: 'Robert Gordon University', country: 'UK' },
	{ name: 'Kingston University London', country: 'UK' },
	{ name: 'University of Huddersfield', country: 'UK' },
	{ name: 'University of Brighton', country: 'UK' },
	{ name: 'University of Bradford', country: 'UK' },
	{ name: 'Birmingham City University', country: 'UK' },
	{ name: 'Bournemouth University', country: 'UK' },
	{ name: "St George's, University of London", country: 'UK' },
	{ name: 'Brunel University London', country: 'UK' },
	{ name: 'Heriot-Watt University', country: 'UK' },
	{ name: 'The University of Aberdeen', country: 'UK' },
	{ name: 'The University of Sheffield', country: 'UK' },
	{ name: 'Lancaster University', country: 'UK' },
	{ name: 'The University of Liverpool', country: 'UK' },
	{ name: 'University of Strathclyde', country: 'UK' },
	{ name: 'Queen Mary University of London', country: 'UK' },
	{ name: 'University of Leeds', country: 'UK' },
	{ name: 'University of Kent', country: 'UK' },
	{ name: 'Cardiff University', country: 'UK' },
	{ name: 'University of Durham', country: 'UK' },
	{ name: 'University of Dundee', country: 'UK' },
	{ name: 'University of Bristol', country: 'UK' },
	{ name: "Queen's University Belfast", country: 'UK' },
	{ name: 'University of Bath', country: 'UK' },
	{ name: 'Aston University', country: 'UK' },
	{ name: 'University of Exeter', country: 'UK' },
	{ name: 'University of Birmingham', country: 'UK' },
	{ name: 'The University of Buckingham', country: 'UK' },
	{ name: 'University of Technology Sydney', country: 'Australia' },
	{ name: 'Southern Cross University', country: 'Australia' },
	{ name: 'Massey University', country: 'New Zealand' },
	{ name: 'Victoria University of Wellington', country: 'New Zealand' },
	{ name: 'The University of Waikato', country: 'New Zealand' },
	{ name: 'The University of Otago', country: 'New Zealand' },
	{ name: 'Auckland University of Technology', country: 'New Zealand' },
	{ name: 'The University of Auckland', country: 'New Zealand' },
	{ name: 'Lincoln University', country: 'New Zealand' },
	{ name: 'Neapolis University Pafos', country: 'Cyprus' },
	{ name: 'University of Limassol', country: 'Cyprus' },
	{ name: 'UCLan Cyprus', country: 'Cyprus' },
	{ name: 'Avila University', country: 'USA' },
	{ name: 'Bay Atlantic University', country: 'USA' },
	{ name: 'Concordia University Texas', country: 'USA' },
	{ name: 'Indiana Wesleyan University', country: 'USA' },
	{ name: 'Westcliff University', country: 'USA' },
	{ name: 'California Institute of Advanced Management', country: 'USA' },
	{ name: 'Goldey-Beacom College', country: 'USA' },
	{ name: 'Monroe College', country: 'USA' },
	{ name: 'New England College', country: 'USA' },
	{ name: 'Sofia University', country: 'USA' },
	{ name: 'McDaniel College', country: 'USA' },
	{ name: 'Ottawa University', country: 'USA' },
	{ name: 'Humphreys University', country: 'USA' },
	{ name: 'National Louis University', country: 'USA' },
	{ name: 'Harrisburg University', country: 'USA' },
	{ name: 'Texas Wesleyan University', country: 'USA' },
	{ name: 'Benedictine University', country: 'USA' }
]

const journeyTabs = {
	preparation: {
		label: 'Preparation',
		steps: [
			{ title: 'Initial consultation', body: 'Discuss your academic goals, preferences, and budget with our counsellors.' },
			{ title: 'Career assessment', body: 'Aptitude testing and exploration of career options to align study plans with your future.' },
			{ title: 'Country & university research', body: 'Explore study destinations and universities matched to your profile.' },
			{ title: 'Standardised test prep', body: 'IELTS, TOEFL, GRE, GMAT, guidance and preparation resources.' }
		]
	},
	application: {
		label: 'Application',
		steps: applicationProcess.map((s, i) => ({ title: s, body: '' }))
	},
	departure: {
		label: 'Pre-departure',
		steps: [
			{ title: 'Visa application', body: 'Step-by-step guidance through the student visa process.' },
			{ title: 'Accommodation', body: 'Help finding and securing suitable housing options.' },
			{ title: 'Pre-departure briefing', body: 'Cultural adjustment, academic expectations, and practical tips.' },
			{ title: 'Travel planning', body: 'Booking flights, packing essentials, and final preparations.' }
		]
	}
}

export default function StudentConsultancy() {
	const [tab, setTab] = useState('preparation')
	const [country, setCountry] = useState('All')
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
				body: JSON.stringify({ ...formData, subject: 'Student Consultancy Inquiry' })
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

	const countries = ['All', ...Array.from(new Set(partnerUniversities.map(u => u.country)))]
	const filtered = country === 'All' ? partnerUniversities : partnerUniversities.filter(u => u.country === country)
	const counts = partnerUniversities.reduce((acc, u) => {
		acc[u.country] = (acc[u.country] || 0) + 1
		return acc
	}, {})

	return (
		<main className='bg-bone text-ink'>
			{/* HERO */}
			<section className='pt-32 md:pt-40 pb-16 md:pb-24 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8'>
						<div className='col-span-12 lg:col-span-7'>
							<p className='eyebrow mb-6 animate-rise-soft'>Business 02 / Study Abroad</p>
							<h1 className='font-display text-display-2xl animate-rise delay-100'>
								Your degree.<br />
								<em className='not-italic text-clay'>Anywhere.</em>
							</h1>
						</div>
						<div className='col-span-12 lg:col-span-4 lg:col-start-9 flex items-end animate-rise-soft delay-300'>
							<p className='text-ash text-base md:text-lg leading-relaxed text-pretty'>
								Placement, application, and visa support for partner
								universities in the UK, US, Australia, New Zealand, and
								Cyprus.
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

			{/* JOURNEY */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>The journey</p>
							<h2 className='font-display text-display-md'>From offer to flight</h2>
						</div>
						<div className='col-span-12 md:col-span-8 flex md:justify-end items-end'>
							<div className='inline-flex flex-wrap border border-ink/15 p-1 bg-paper'>
								{Object.keys(journeyTabs).map(key => (
									<button
										key={key}
										onClick={() => setTab(key)}
										className={`px-5 py-2 text-sm font-medium tracking-tight transition-colors ${
											tab === key ? 'bg-ink text-bone' : 'text-ink hover:text-clay'
										}`}>
										{journeyTabs[key].label}
									</button>
								))}
							</div>
						</div>
					</div>

					<ol className='border-t border-stone'>
						{journeyTabs[tab].steps.map((step, i) => (
							<li key={`${tab}-${i}`} className='grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 border-b border-stone'>
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
									{step.body && (
										<p className='text-ash text-base leading-relaxed text-pretty'>
											{step.body}
										</p>
									)}
								</div>
							</li>
						))}
					</ol>

					{/* Visa checklist */}
					<div className='mt-16 bg-paper border border-stone p-7 md:p-10'>
						<p className='eyebrow mb-3'>Visa documents</p>
						<h3 className='font-display text-2xl md:text-3xl mb-8'>
							What you&apos;ll need to assemble
						</h3>
						<ul className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4'>
							{visaChecklist.map((item, i) => (
								<li key={i} className='flex items-start gap-3 py-3 border-b border-stone-soft last:border-b-0'>
									<CheckCircle2 className='h-4 w-4 text-clay mt-1 shrink-0' strokeWidth={1.5} />
									<div className='flex-1'>
										<p className='text-ink font-medium text-sm'>{item.item}</p>
										<p className='text-xs text-ash mt-0.5'>{item.responsibility}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* PARTNER UNIVERSITIES */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>Where you can go</p>
							<h2 className='font-display text-display-md'>Partner universities</h2>
						</div>
						<div className='col-span-12 md:col-span-7 md:col-start-6 flex items-end'>
							<p className='text-ash text-base leading-relaxed text-pretty'>
								Active partnerships with {partnerUniversities.length}+
								institutions across {Object.keys(counts).length} countries.
							</p>
						</div>
					</div>

					<div className='flex flex-wrap gap-2 mb-10 pb-8 border-b border-stone'>
						{countries.map(c => (
							<button
								key={c}
								onClick={() => setCountry(c)}
								className={`px-4 py-2 text-sm tracking-tight border transition-colors ${
									country === c
										? 'bg-ink text-bone border-ink'
										: 'bg-transparent text-ink border-stone hover:border-ink'
								}`}>
								{c}
								{c !== 'All' && (
									<span className='ml-2 text-xs opacity-60 tabular'>
										{counts[c]}
									</span>
								)}
							</button>
						))}
					</div>

					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2'>
						{filtered.map(u => (
							<li
								key={u.name}
								className='flex items-start gap-3 py-3 border-b border-stone-soft'>
								<MapPin className='h-3.5 w-3.5 text-clay mt-1.5 shrink-0' strokeWidth={1.5} />
								<div className='flex-1 flex items-baseline justify-between gap-3'>
									<span className='text-ink text-sm leading-snug'>{u.name}</span>
									<span className='eyebrow-ink shrink-0 text-[10px]'>
										{u.country}
									</span>
								</div>
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
							<p className='eyebrow text-clay mb-4'>Book a consultation</p>
							<h2 className='font-display text-display-lg text-bone mb-8'>
								Tell us where you want to study.
							</h2>
							<p className='text-bone/70 text-base md:text-lg leading-relaxed text-pretty max-w-md'>
								Free initial consultation. We&apos;ll review your profile and
								shortlist universities that fit.
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
									<label htmlFor='message' className='eyebrow text-bone/50 block mb-2'>What are you hoping to study, and where?</label>
									<textarea id='message' name='message' required rows={4} value={formData.message} onChange={handleChange} className='w-full bg-transparent border-b border-bone/30 py-3 text-bone placeholder:text-bone/40 focus:border-clay outline-none transition-colors resize-none' placeholder='Programme, level, country preferences, intake.' />
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
