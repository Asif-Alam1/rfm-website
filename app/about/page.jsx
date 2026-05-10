'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
	Users,
	Target,
	TrendingUp,
	Award,
	ChevronDown,
	ArrowRight
} from 'lucide-react'

const values = [
	{ icon: Users, title: 'Customer-centric', description: 'We put the client at the heart of everything we do.' },
	{ icon: Target, title: 'Integrity', description: 'Honesty and transparency in every dealing, no exceptions.' },
	{ icon: TrendingUp, title: 'Innovation', description: 'We constantly seek better ways to serve and adapt.' },
	{ icon: Award, title: 'Excellence', description: 'We strive for the highest standards across every business.' }
]

const teamMembers = [
	{
		name: 'Omar Faruk Tarek',
		role: 'Chairman',
		group: 'leadership',
		image: '/omar.jpg',
		description:
			'RFM International thrives under the guidance of our esteemed Chairman, Omar Faruk Tarek. With vast experience and a forward-thinking approach, Mr. Faruk plays a pivotal role in shaping the strategic direction of the company. His leadership has been instrumental in establishing RFM International as a trusted name in export, import, manpower consultancy, student abroad consultancy, real estate, and tourism.'
	},
	{
		name: 'Ferdouse Begum',
		role: 'Co-Chairman',
		group: 'leadership',
		image: '/ferdouse.jpg',
		description:
			'Ferdouse Begum serves as the Co-Chairman of RFM International, playing a key role in the leadership and strategic direction of the company. As Co-Chairman, she is committed to ensuring that the company continues to deliver excellence in all its endeavors.'
	},
	{
		name: 'Redwanul Farabi Muttaki',
		role: 'Managing Director',
		group: 'leadership',
		image: '/muttaki.jpg',
		description:
			"With a BBA in Management and an MBA in Strategic and International Management from the University of Dhaka, Mr. Farabi brings deep expertise and strategic vision to the company. His leadership has driven RFM International's growth across diverse sectors, ensuring high-quality, client-focused solutions."
	},
	{
		name: 'Mukcitin Faruki Mughda',
		role: 'Director of Digital Marketing',
		group: 'leadership',
		image: '/mughdo.jpg',
		description:
			"Director of Digital Marketing at RFM International. With expertise in digital marketing and social media monetization, he leads the company's online presence and marketing strategies."
	},
	{
		name: 'Kofil Chowdhury',
		role: 'Financial Advisor',
		group: 'advisors',
		image: '/kofil.jpg',
		description:
			"Assistant Vice President (AVP) at IFIC Bank Ltd. As Financial Advisor for RFM International, Mr. Chowdhury brings a wealth of experience in banking and financial management."
	},
	{
		name: 'Mahfujul Anam Jisan',
		role: 'Patron',
		group: 'advisors',
		image: '/jisan.jpg',
		description:
			"Mahfuz Anam Jisan, the esteemed patron of RFM International, plays a vital role in supporting the company's vision and growth. His unwavering commitment and guidance have been instrumental in helping RFM International thrive."
	},
	{
		name: 'Mohsina Sharmin Nishat',
		role: 'Advisor, Student Consultancy',
		group: 'advisors',
		image: '/nishat.jpg',
		description:
			'Vice Principal of Daffodil International School and College. Her deep knowledge and experience in academic management ensure that RFM Student Consultancy provides students with the best guidance for pursuing education abroad.'
	}
]

export default function About() {
	const [tab, setTab] = useState('leadership')
	const [expanded, setExpanded] = useState(null)

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

	const visible = teamMembers.filter(m => m.group === tab)

	return (
		<main className='bg-bone text-ink'>
			{/* HERO */}
			<section className='pt-32 md:pt-40 pb-20 md:pb-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8'>
						<div className='col-span-12 lg:col-span-8'>
							<p className='eyebrow mb-6 animate-rise-soft'>About RFM International</p>
							<h1 className='font-display text-display-2xl animate-rise delay-100'>
								A house built for
								<br />
								<em className='not-italic text-clay'>global reach</em>,
								proudly Bangladeshi.
							</h1>
						</div>
					</div>
				</div>
			</section>

			{/* STORY */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-16 items-center'>
						<div className='col-span-12 lg:col-span-6 fade-up'>
							<div className='relative aspect-[4/5] w-full overflow-hidden bg-paper'>
								<Image
									src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=1500&fit=crop'
									alt='RFM International office'
									fill
									className='object-cover grayscale'
									sizes='(max-width: 1024px) 100vw, 50vw'
								/>
							</div>
						</div>
						<div className='col-span-12 lg:col-span-6 fade-up'>
							<p className='eyebrow mb-4'>Our story</p>
							<h2 className='font-display text-display-lg mb-8'>
								Founded with one idea, that global access deserves to be
								treated as a craft.
							</h2>
							<p className='text-ash text-base md:text-lg leading-relaxed mb-5 text-pretty'>
								RFM Inc was founded with a vision to revolutionise the way
								Bangladeshi businesses approach global trade and education.
								We began with a small team of specialists who believed that
								connecting people across borders is meaningful work.
							</p>
							<p className='text-ash text-base md:text-lg leading-relaxed mb-10 text-pretty'>
								Today, we operate multiple distinct businesses, employ
								specialists across each, and work with partners on five
								continents, quietly, and at a high standard.
							</p>
							<Link href='/#services' className='btn-ghost'>
								See our businesses
								<ArrowRight className='h-4 w-4' strokeWidth={1.75} />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* VALUES */}
			<section className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>Principles</p>
							<h2 className='font-display text-display-md'>What we hold to</h2>
						</div>
					</div>
					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-stone fade-up stagger'>
						{values.map(v => (
							<li
								key={v.title}
								className='group p-7 md:p-8 border-r border-b border-stone bg-paper'>
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

			{/* TEAM */}
			<section id='team' className='py-20 md:py-28 border-b border-stone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 mb-12'>
						<div className='col-span-12 md:col-span-4'>
							<p className='eyebrow mb-3'>The team</p>
							<h2 className='font-display text-display-md'>Leadership</h2>
						</div>
						<div className='col-span-12 md:col-span-8 flex md:justify-end items-end'>
							<div className='inline-flex border border-ink/15 p-1 bg-paper'>
								<button
									onClick={() => setTab('leadership')}
									className={`px-5 py-2 text-sm font-medium tracking-tight transition-colors ${
										tab === 'leadership' ? 'bg-ink text-bone' : 'text-ink hover:text-clay'
									}`}>
									Leadership
								</button>
								<button
									onClick={() => setTab('advisors')}
									className={`px-5 py-2 text-sm font-medium tracking-tight transition-colors ${
										tab === 'advisors' ? 'bg-ink text-bone' : 'text-ink hover:text-clay'
									}`}>
									Advisors
								</button>
							</div>
						</div>
					</div>

					<AnimatePresence mode='wait'>
						<motion.ul
							key={tab}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
							className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
							{visible.map(member => (
								<li key={member.name}>
								<button
									onClick={() => setExpanded(expanded === member.name ? null : member.name)}
									className='block w-full text-left group'>
									<div className='relative aspect-[4/5] w-full overflow-hidden bg-paper border border-stone mb-5'>
										<Image
											src={member.image}
											alt={member.name}
											fill
											sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
											className='object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-soft'
										/>
									</div>
									<p className='eyebrow-ink mb-2 text-[10px]'>
										{member.role}
									</p>
									<h3 className='font-display text-2xl text-ink leading-tight group-hover:text-clay transition-colors'>
										{member.name}
									</h3>
									<div className='mt-4 flex items-center gap-2 text-xs text-ash group-hover:text-clay transition-colors'>
										<span>{expanded === member.name ? 'Hide bio' : 'Read bio'}</span>
										<ChevronDown
											className={`h-3 w-3 transition-transform ${
												expanded === member.name ? 'rotate-180' : ''
											}`}
											strokeWidth={1.5}
										/>
									</div>
								</button>
								<AnimatePresence>
									{expanded === member.name && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className='overflow-hidden'>
											<p className='mt-5 text-sm text-ash leading-relaxed text-pretty pr-2'>
												{member.description}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</li>
						))}
						</motion.ul>
					</AnimatePresence>
				</div>
			</section>

			{/* JOIN */}
			<section className='py-20 md:py-32 bg-ink text-bone'>
				<div className='max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12'>
					<div className='grid grid-cols-12 gap-8 lg:gap-16 items-center'>
						<div className='col-span-12 lg:col-span-7'>
							<p className='eyebrow text-clay mb-4'>Careers</p>
							<h2 className='font-display text-display-lg text-bone mb-6'>
								Work with us.
							</h2>
							<p className='text-bone/70 text-base md:text-lg leading-relaxed mb-10 text-pretty max-w-xl'>
								We&apos;re always interested in talented people who care about
								global trade, education, hospitality, or property. Send us
								your CV and tell us what you&apos;d like to work on.
							</p>
							<a href='mailto:rfmbusinessbd@gmail.com' className='inline-flex items-center gap-2 px-6 py-3 bg-clay text-bone hover:bg-clay-soft transition-colors text-sm font-medium tracking-tight'>
								Send your CV
								<ArrowRight className='h-4 w-4' strokeWidth={1.75} />
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
