'use client'

import { useState, useEffect } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../../components/ui/card'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '../../components/ui/tabs'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../../components/ui/select'
import {
	GraduationCap,
	BookOpen,
	Globe,
	Users,
	Lightbulb,
	Award,
	CheckCircle,
	FileText,
	List,
	DollarSign,
	MapPin
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function StudentConsultancy() {
	const [isVisible, setIsVisible] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	})
	const [countryFilter, setCountryFilter] = useState('All')
	const [costFilter, setCostFilter] = useState('All')

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...formData,
					subject: 'Student Consultancy Inquiry'
				})
			})
			if (response.ok) {
				toast.success('Message sent successfully!')
				setFormData({ name: '', email: '', subject: '', message: '' })
			} else {
				toast.error('Failed to send message. Please try again.')
			}
		} catch (error) {
			console.error('Error:', error)
			toast.error('An error occurred. Please try again.')
		}
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({ ...prevState, [name]: value }))
	}

	useEffect(() => {
		setIsVisible(true)
		const handleScroll = () => {
			const elements = document.querySelectorAll('.scroll-animate')
			elements.forEach(el => {
				if (el.getBoundingClientRect().top < window.innerHeight - 100) {
					el.classList.add('animate-in')
				}
			})
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const services = [
		{
			icon: GraduationCap,
			title: 'University Selection',
			description: 'Find the perfect university for your academic goals'
		},
		{
			icon: BookOpen,
			title: 'Course Guidance',
			description: 'Expert advice on choosing the right courses'
		},
		{
			icon: Globe,
			title: 'Visa Assistance',
			description: 'Streamline your student visa application process'
		},
		{
			icon: Users,
			title: 'Pre-Departure Briefing',
			description: 'Prepare for your journey with comprehensive information'
		},
		{
			icon: Lightbulb,
			title: 'Career Counseling',
			description: 'Align your studies with your career aspirations'
		},
		{
			icon: Award,
			title: 'Scholarship Support',
			description: 'Discover and apply for relevant scholarships'
		}
	]

	const visaChecklist = [
		{ item: 'Passport', responsibility: 'Student' },
		{ item: 'Academic transcripts and Certificates', responsibility: 'Student' },
		{ item: 'Test scores (IELTS, Duolingo, itep)', responsibility: 'If needed' },
		
		{
			item: 'Bank Solvency',
			responsibility: 'Student (RFM will help if needed)'
		},
		{
			item: '6 month bank statement',
			responsibility: 'Client (RFM will help if needed)'
		},
		{ item: 'offer letter', responsibility: 'University' },
		{ item: 'Embassy Appointment', responsibility: 'RFM' },
		{ item: 'Scholarship', responsibility: 'RFM' }
	]

	const applicationProcess = [
		'Submission of all academic certificates to the university',
		'Getting Offer Letter from university',
		'Manage Bank Solvency',
		'Embassy Date',
		'Facing Embassy',
		'Getting Visa',
		'Fly',
	]

	const partnerUniversities = [
		{
			name: 'California Institute of Advanced Management',
			fee: '$12,000',
			country: 'USA'
		},
		{ name: 'Harrisburg University', fee: '$16,000 - $17,000', country: 'USA' },
		{ name: 'Humphreys University', fee: '$9,000', country: 'USA' },
		{ name: 'McDaniel College', fee: '$12,000', country: 'USA' },
		{ name: 'New England College', fee: '$8,000 - $9,000', country: 'USA' },
		{ name: 'National Louis University', fee: '$15,000', country: 'USA' },
		{ name: 'Monroe College', fee: '$12,000 - $19,000', country: 'USA' },
		{ name: 'Ottawa University', fee: '$15,000 - $18,000', country: 'Canada' },
		{ name: 'Sofia University', fee: '$12,000', country: 'USA' },
		{
			name: "Saint Peter's University",
			fee: '$14,000 - $15,000',
			country: 'USA'
		},
		{ name: 'Westcliffe University', fee: '$13,000 - $20,000', country: 'USA' },
		{ name: 'Tennessee Wesleyan University', fee: '$12,000', country: 'USA' },
		{ name: 'University of the Cumberlands', fee: '$12,000', country: 'USA' },
		{ name: 'Trine University', fee: '$10,000 - $16,000', country: 'USA' },
		{ name: 'Campbellsville University', fee: '$10,000', country: 'USA' },
		{ name: 'University of Potomac', fee: '$8,000', country: 'USA' }
	]

	const filteredUniversities = partnerUniversities.filter(uni => {
		const matchesCountry =
			countryFilter === 'All' || uni.country === countryFilter
		const feeLower = parseInt(uni.fee.replace(/[^0-9]/g, ''))
		const matchesCost =
			costFilter === 'All' ||
			(costFilter === 'Under $10,000' && feeLower < 10000) ||
			(costFilter === '$10,000 - $15,000' &&
				feeLower >= 10000 &&
				feeLower <= 15000) ||
			(costFilter === 'Over $15,000' && feeLower > 15000)
		return matchesCountry && matchesCost
	})

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-700'>
			<main className='flex-1 pt-16'>
				<section
					className={`w-full py-24 md:py-32 transition-all duration-1000 ease-in-out ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300'>
									Student Consultancy
								</h1>
								<p className='mx-auto max-w-[700px] text-purple-100 md:text-xl lg:text-2xl'>
									Your gateway to global education and career success
								</p>
							</div>
							<Link href='#contact'>
								<Button className='bg-purple-500 text-white hover:bg-purple-600 text-lg px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105'>
									Start Your Journey
								</Button>
							</Link>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800'>
							Our Services
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{services.map((service, index) => (
								<Card
									key={index}
									className='scroll-animate bg-gradient-to-br from-purple-50 to-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group'>
									<CardHeader className='relative'>
										<div className='absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>
										<service.icon className='h-12 w-12 mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300' />
										<CardTitle className='group-hover:text-purple-700 transition-colors duration-300'>
											{service.title}
										</CardTitle>
										<CardDescription>{service.description}</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-100 to-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800'>
							Study Abroad Journey
						</h2>
						<div className='max-w-4xl mx-auto'>
							<Tabs defaultValue='preparation' className='w-full'>
								<TabsList className='grid w-full grid-cols-4 mb-8 bg-white h-full gap-x-4'>
									<TabsTrigger
										value='preparation'
										className='text-lg py-3 bg-white hover:bg-purple-100 data-[state=active]:bg-purple-200'>
										Preparation
									</TabsTrigger>
									<TabsTrigger
										value='application'
										className='text-lg py-3 bg-white hover:bg-purple-100 data-[state=active]:bg-purple-200'>
										Application
									</TabsTrigger>
									<TabsTrigger
										value='visa'
										className='text-lg py-3 bg-white hover:bg-purple-100 data-[state=active]:bg-purple-200'>
										Visa Process
									</TabsTrigger>
									<TabsTrigger
										value='departure'
										className='text-lg py-3 bg-white hover:bg-purple-100 data-[state=active]:bg-purple-200'>
										Pre-Departure
									</TabsTrigger>
								</TabsList>
								<TabsContent value='preparation'>
									<div className='bg-white p-6 rounded-lg shadow-lg'>
										<ol className='relative border-l border-purple-200 ml-3 space-y-8'>
											{[
												{
													title: 'Initial Consultation',
													description:
														'Discuss your academic goals, preferences, and budget with our expert counselors.'
												},
												{
													title: 'Career Assessment',
													description:
														'Take aptitude tests and explore career options to align your study plans with your future goals.'
												},
												{
													title: 'Country & University Research',
													description:
														'Explore potential study destinations and universities that match your profile and aspirations.'
												},
												{
													title: 'Standardized Test Preparation',
													description:
														'Get guidance on required tests (e.g., IELTS, TOEFL, GRE, GMAT) and access to preparation resources.'
												}
											].map((step, index) => (
												<li key={index} className='mb-10 ml-6'>
													<span className='absolute flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full -left-4 ring-4 ring-white'>
														{index + 1}
													</span>
													<h3 className='font-medium text-lg mb-1 text-purple-800'>
														{step.title}
													</h3>
													<p className='text-gray-700'>{step.description}</p>
												</li>
											))}
										</ol>
									</div>
								</TabsContent>
								<TabsContent value='application'>
									<div className='bg-white p-6 rounded-lg shadow-lg'>
										<ol className='relative border-l border-purple-200 ml-3 space-y-8'>
											{applicationProcess.map((step, index) => (
												<li key={index} className='mb-10 ml-6'>
													<span className='absolute flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full -left-4 ring-4  ring-white'>
														{index + 1}
													</span>
													<h3 className='font-medium text-lg mb-1 text-purple-800'>
														{step}
													</h3>
												</li>
											))}
										</ol>
									</div>
								</TabsContent>
								<TabsContent value='visa'>
									<div className='bg-white p-6 rounded-lg shadow-lg'>
										<h3 className='font-bold text-xl mb-4 text-purple-800'>
											Student Visa Checklist
										</h3>
										<ul className='space-y-2'>
											{visaChecklist.map((item, index) => (
												<li key={index} className='flex items-start'>
													<CheckCircle className='h-5 w-5 mr-2 text-purple-500 mt-1' />
													<div>
														<span className='font-medium text-cyan-600'>
															{item.item}
														</span>
														<span className='text-sm text-gray-600 ml-2'>
															({item.responsibility})
														</span>
													</div>
												</li>
											))}
										</ul>
									</div>
								</TabsContent>
								<TabsContent value='departure'>
									<div className='bg-white p-6 rounded-lg shadow-lg'>
										<ol className='relative border-l border-purple-200 ml-3  space-y-8'>
											{[
												{
													title: 'Visa Application',
													description:
														'Receive step-by-step guidance on the student visa application process for your destination country.'
												},
												{
													title: 'Accommodation Arrangements',
													description:
														'Get assistance in finding and securing suitable accommodation options.'
												},
												{
													title: 'Pre-Departure Briefing',
													description:
														'Attend comprehensive sessions covering cultural adjustment, academic expectations, and practical tips.'
												},
												{
													title: 'Travel Planning',
													description:
														'Receive advice on booking flights, packing essentials, and preparing for your journey.'
												}
											].map((step, index) => (
												<li key={index} className='mb-10 ml-6'>
													<span className='absolute flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full -left-4 ring-4 ring-white'>
														{index + 1}
													</span>
													<h3 className='font-medium text-lg mb-1 text-purple-800'>
														{step.title}
													</h3>
													<p className='text-gray-700'>{step.description}</p>
												</li>
											))}
										</ol>
									</div>
								</TabsContent>
							</Tabs>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800'>
							Partner Universities
						</h2>
						<div className='flex flex-wrap gap-4 mb-8 justify-center'>
							<Select onValueChange={value => setCountryFilter(value)}>
								<SelectTrigger className='w-[180px] bg-purple-700'>
									<SelectValue placeholder='Filter by Country' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='All'>All Countries</SelectItem>
									<SelectItem value='USA'>USA</SelectItem>
									<SelectItem value='Canada'>Canada</SelectItem>
								</SelectContent>
							</Select>
							<Select onValueChange={value => setCostFilter(value)}>
								<SelectTrigger className='w-[180px] bg-purple-700'>
									<SelectValue placeholder='Filter by Cost' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='All'>All Costs</SelectItem>
									<SelectItem value='Under $10,000'>Under $10,000</SelectItem>
									<SelectItem value='$10,000 - $15,000'>
										$10,000 - $15,000
									</SelectItem>
									<SelectItem value='Over $15,000'>Over $15,000</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{filteredUniversities.map((university, index) => (
								<Card
									key={index}
									className='bg-white hover:shadow-lg transition-all duration-300'>
									<CardHeader>
										<CardTitle className='text-lg'>{university.name}</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='flex items-center mb-2'>
											<MapPin className='h-5 w-5 mr-2 text-purple-500' />
											<p className='text-gray-600'>{university.country}</p>
										</div>
										<div className='flex items-center'>
											<DollarSign className='h-5 w-5 mr-2 text-green-500' />
											<p className='font-semibold text-purple-600'>
												{university.fee} per year
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-900 text-white'>
					<div className='container px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
							<div className='scroll-animate'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
									Why Choose Us?
								</h2>
								<ul className='space-y-4'>
									{[
										'Experienced Counselors',
										'Personalized Guidance',
										'Extensive University Network',
										'Visa Success Rate',
										'Post-Arrival Support'
									].map((item, index) => (
										<li key={index} className='flex items-center'>
											<CheckCircle className='h-6 w-6 mr-2 text-purple-300' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
							<div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl scroll-animate'>
								<Image
									src='/learning.svg'
									alt='Students Studying Abroad'
									layout='fill'
									objectFit='cover'
                  quality={100}
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					className='w-full py-12 md:py-24 lg:py-32 bg-white'
					id='contact'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800'>
							Book a Consultation
						</h2>
						<div className='max-w-2xl mx-auto bg-purple-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<form onSubmit={handleSubmit} className='space-y-4'>
								<Input
									name='name'
									placeholder='Your Name'
									value={formData.name}
									onChange={handleChange}
									className='border-purple-300 focus:border-purple-500 transition-all duration-300'
									required
								/>
								<Input
									name='email'
									type='email'
									placeholder='Your Email'
									value={formData.email}
									onChange={handleChange}
									className='border-purple-300 focus:border-purple-500 transition-all duration-300'
									required
								/>
								<Textarea
									name='message'
									placeholder='Your Message'
									value={formData.message}
									onChange={handleChange}
									className='border-purple-300 focus:border-purple-500 transition-all duration-300'
									required
								/>
								<Button
									type='submit'
									className='w-full bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300 hover:shadow-lg'>
									Send Message
								</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
