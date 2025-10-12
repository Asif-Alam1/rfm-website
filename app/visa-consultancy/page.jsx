'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
	Briefcase,
	GraduationCap,
	Heart,
	Plane,
	FileCheck,
	Globe,
	CheckCircle,
	MapPin
} from 'lucide-react'
import toast from 'react-hot-toast'

export default function VisaConsultancy() {
	const [isVisible, setIsVisible] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	})

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
					subject: 'Visa Consultancy Inquiry'
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

	const visaTypes = [
		{
			icon: Briefcase,
			title: 'Work Visa',
			description: 'For professionals seeking employment abroad'
		},
		{
			icon: GraduationCap,
			title: 'Student Visa',
			description: 'For students pursuing education in foreign institutions'
		},
		{
			icon: Heart,
			title: 'Family Visa',
			description: 'For individuals joining family members overseas'
		},
		{
			icon: mosque,
			title: 'Umrah Hajj Visa',
			description: 'For Performing Hajj with Family'
		},
		{
			icon: Plane,
			title: 'Tourist Visa',
			description: 'For travelers exploring new destinations'
		},
		{
			icon: FileCheck,
			title: 'Permanent Residency',
			description: 'For those looking to settle permanently'
		},
		{
			icon: Globe,
			title: 'Business Visa',
			description: 'For entrepreneurs and business travelers'
		}
	]

	const workVisaCountries = [
		'Italy',
		'Serbia',
		'Russia',
		'Sweden',
		'Netherlands',
		'Hungary',
		'Romania'
		'Qatar',
		'Kuwait',
		'Saudi-Arabia',
	]
	const visitVisaCountries = [
		'USA',
		'UK',
		'Australia',
		'Germany',
		'Denmark',
		'Italy', 
		'Canada', 
		'Brazil'
		'Japan',
		'China',
		'India',
		'Singapore',
		'Malaysia',
		'Thailand',
	]

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-yellow-700 via-yellow-600 to-amber-500'>
			<main className='flex-1 pt-16'>
				<section
					className={`w-full py-24 md:py-32 transition-all duration-1000 ease-in-out ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200'>
									Visa Consultancy Services
								</h1>
								<p className='mx-auto max-w-[700px] text-yellow-100 md:text-xl lg:text-2xl'>
									Your gateway to global opportunities with expert visa guidance
								</p>
							</div>
							<Link href='#contact'>
								<Button className='bg-yellow-500 text-yellow-900 hover:bg-yellow-400 text-lg px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105'>
									Get Started
								</Button>
							</Link>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-800'>
							Our Visa Services
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{visaTypes.map((visa, index) => (
								<Card
									key={index}
									className='scroll-animate bg-gradient-to-br from-yellow-50 to-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group'>
									<CardHeader className='relative'>
										<div className='absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>
										<visa.icon className='h-12 w-12 mb-4 text-yellow-600 group-hover:scale-110 transition-transform duration-300' />
										<CardTitle className='group-hover:text-yellow-700 transition-colors duration-300'>
											{visa.title}
										</CardTitle>
										<CardDescription>{visa.description}</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-100 to-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-800'>
							Countries We Serve
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<Card className='bg-gradient-to-br from-yellow-50 to-white hover:shadow-lg transition-all duration-300'>
								<CardHeader>
									<CardTitle className='flex items-center'>
										<Briefcase className='h-6 w-6 mr-2 text-yellow-600' />
										Work Visa Countries
									</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className='grid grid-cols-2 gap-2'>
										{workVisaCountries.map((country, index) => (
											<li key={index} className='flex items-center'>
												<MapPin className='h-5 w-5 mr-2 text-yellow-500' />
												{country}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
							<Card className='bg-gradient-to-br from-yellow-50 to-white hover:shadow-lg transition-all duration-300'>
								<CardHeader>
									<CardTitle className='flex items-center'>
										<Plane className='h-6 w-6 mr-2 text-yellow-600' />
										Visit Visa Countries
									</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className='grid grid-cols-2 gap-2'>
										{visitVisaCountries.map((country, index) => (
											<li key={index} className='flex items-center'>
												<MapPin className='h-5 w-5 mr-2 text-yellow-500' />
												{country}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-yellow-100'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-800'>
							Visa Application Process
						</h2>
						<div className='max-w-3xl mx-auto'>
							<Tabs defaultValue='consultation' className='w-full'>
								<TabsList className='grid w-full grid-cols-3 gap-x-4 mb-8 bg-white h-full'>
									<TabsTrigger
										value='consultation'
										className='text-lg py-3 bg-white hover:bg-yellow-100 data-[state=active]:bg-yellow-200'>
										Consultation
									</TabsTrigger>
									<TabsTrigger
										value='preparation'
										className='text-lg py-3 bg-white hover:bg-yellow-100 data-[state=active]:bg-yellow-200'>
										Preparation
									</TabsTrigger>
									<TabsTrigger
										value='submission'
										className='text-lg py-3 bg-white hover:bg-yellow-100 data-[state=active]:bg-yellow-200'>
										Submission
									</TabsTrigger>
								</TabsList>
								<TabsContent value='consultation'>
									<Card>
										<CardHeader>
											<CardTitle>Initial Consultation</CardTitle>
											<CardDescription>
												Understanding your visa needs and eligibility
											</CardDescription>
										</CardHeader>
										<CardContent>
											<ul className='space-y-2'>
												{[
													'Assess your visa requirements',
													'Evaluate your eligibility for different visa types',
													'Provide expert advice on the best visa options',
													'Explain the application process and requirements'
												].map((item, index) => (
													<li
														key={index}
														className='flex items-center space-x-2'>
														<CheckCircle className='h-5 w-5 text-yellow-500' />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value='preparation'>
									<Card>
										<CardHeader>
											<CardTitle>Document Preparation</CardTitle>
											<CardDescription>
												Gathering and organizing required documents
											</CardDescription>
										</CardHeader>
										<CardContent>
											<ul className='space-y-2'>
												{[
													'Provide a comprehensive document checklist',
													'Assist in obtaining necessary certificates and translations',
													'Review and validate all documents',
													'Prepare application forms and supporting letters'
												].map((item, index) => (
													<li
														key={index}
														className='flex items-center space-x-2'>
														<CheckCircle className='h-5 w-5 text-yellow-500' />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value='submission'>
									<Card>
										<CardHeader>
											<CardTitle>Application Submission</CardTitle>
											<CardDescription>
												Finalizing and submitting your visa application
											</CardDescription>
										</CardHeader>
										<CardContent>
											<ul className='space-y-2'>
												{[
													'Submit the application on your behalf',
													'Schedule necessary appointments (e.g., biometrics, interviews)',
													'Track application status and provide regular updates',
													'Assist with any additional requests from the visa office'
												].map((item, index) => (
													<li
														key={index}
														className='flex items-center space-x-2'>
														<CheckCircle className='h-5 w-5 text-yellow-500' />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-yellow-800 text-white'>
					<div className='container px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
							<div className='scroll-animate'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
									Why Choose Us?
								</h2>
								<ul className='space-y-4'>
									{[
										'Expert visa consultants with years of experience',
										'High success rate in visa approvals',
										'Personalized guidance throughout the process',
										'Up-to-date knowledge of immigration laws and policies',
										'Transparent and ethical practices'
									].map((item, index) => (
										<li key={index} className='flex items-center'>
											<FileCheck className='h-6 w-6 mr-2 text-yellow-300' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
							<div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl scroll-animate'>
								<Image
									src='/travel.svg'
									alt='Visa Consultation'
									className='object-cover'
									fill
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
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-800'>
							Book a Consultation
						</h2>
						<div className='max-w-2xl mx-auto bg-yellow-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<form onSubmit={handleSubmit} className='space-y-4'>
								<Input
									name='name'
									placeholder='Your Name'
									value={formData.name}
									onChange={handleChange}
									className='border-yellow-300 focus:border-yellow-500 transition-all duration-300'
									required
								/>
								<Input
									name='email'
									type='email'
									placeholder='Your Email'
									value={formData.email}
									onChange={handleChange}
									className='border-yellow-300 focus:border-yellow-500 transition-all duration-300'
									required
								/>
								<Textarea
									name='message'
									placeholder='Tell us about your visa requirements'
									value={formData.message}
									onChange={handleChange}
									className='border-yellow-300 focus:border-yellow-500 transition-all duration-300'
									required
								/>
								<Button
									type='submit'
									className='w-full bg-yellow-500 text-yellow-900 hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg'>
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
