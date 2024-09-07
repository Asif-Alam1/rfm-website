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
	GraduationCap,
	BookOpen,
	Globe,
	Users,
	Lightbulb,
	Award,
	CheckCircle
} from 'lucide-react'
import Image from 'next/image'

export default function StudentConsultancy() {
	const [isVisible, setIsVisible] = useState(false)

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
							<Button className='bg-purple-500 text-white hover:bg-purple-600 text-lg px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105'>
								Start Your Journey
							</Button>
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
								<TabsList className='grid w-full grid-cols-3 mb-8 '>
									<TabsTrigger value='preparation' className='text-lg py-3'>
										Preparation
									</TabsTrigger>
									<TabsTrigger value='application' className='text-lg py-3'>
										Application
									</TabsTrigger>
									<TabsTrigger value='departure' className='text-lg py-3'>
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
											{[
												{
													title: 'Document Preparation',
													description:
														'Gather and prepare all necessary documents, including transcripts, recommendation letters, and essays.'
												},
												{
													title: 'Application Submission',
													description:
														'Complete and submit applications to chosen universities with guidance from our counselors.'
												},
												{
													title: 'Scholarship Applications',
													description:
														'Identify and apply for relevant scholarships to support your studies abroad.'
												},
												{
													title: 'Interview Preparation',
													description:
														'Receive coaching for potential university or scholarship interviews.'
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
								<TabsContent value='departure'>
									<div className='bg-white p-6 rounded-lg shadow-lg'>
										<ol className='relative border-l border-purple-200 ml-3 space-y-8'>
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
							Popular Destinations
						</h2>
						<Tabs defaultValue='usa' className='w-full max-w-3xl mx-auto'>
							<TabsList className='grid w-full grid-cols-4'>
								<TabsTrigger value='usa'>USA</TabsTrigger>
								<TabsTrigger value='uk'>UK</TabsTrigger>
								<TabsTrigger value='canada'>Canada</TabsTrigger>
								<TabsTrigger value='australia'>Australia</TabsTrigger>
							</TabsList>
							{[
								{
									country: 'usa',
									universities: [
										'Harvard University',
										'MIT',
										'Stanford University',
										'Yale University'
									],
									courses: [
										'Computer Science',
										'Business Administration',
										'Engineering',
										'Liberal Arts'
									]
								},
								{
									country: 'uk',
									universities: [
										'University of Oxford',
										'University of Cambridge',
										'Imperial College London',
										'UCL'
									],
									courses: [
										'Law',
										'Medicine',
										'Economics',
										'English Literature'
									]
								},
								{
									country: 'canada',
									universities: [
										'University of Toronto',
										'McGill University',
										'University of British Columbia',
										'University of Waterloo'
									],
									courses: [
										'Environmental Science',
										'Psychology',
										'Data Science',
										'International Relations'
									]
								},
								{
									country: 'australia',
									universities: [
										'University of Melbourne',
										'Australian National University',
										'University of Sydney',
										'University of Queensland'
									],
									courses: [
										'Marine Biology',
										'Tourism Management',
										'Renewable Energy Engineering',
										'Sports Science'
									]
								}
							].map(data => (
								<TabsContent
									key={data.country}
									value={data.country}
									className='mt-8'>
									<Card className='bg-gradient-to-br from-purple-50 to-white hover:shadow-lg transition-all duration-300'>
										<CardHeader>
											<CardTitle className='capitalize text-2xl mb-2'>
												{data.country}
											</CardTitle>
											<CardDescription>
												Top universities and popular courses in {data.country}
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className='grid md:grid-cols-2 gap-6'>
												<div>
													<h4 className='font-semibold text-lg mb-2 text-purple-700'>
														Top Universities
													</h4>
													<ul className='list-disc pl-5 space-y-1'>
														{data.universities.map((uni, index) => (
															<li key={index}>{uni}</li>
														))}
													</ul>
												</div>
												<div>
													<h4 className='font-semibold text-lg mb-2 text-purple-700'>
														Popular Courses
													</h4>
													<ul className='list-disc pl-5 space-y-1'>
														{data.courses.map((course, index) => (
															<li key={index}>{course}</li>
														))}
													</ul>
												</div>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
							))}
						</Tabs>
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
								<img
									src='/learning.svg'
									alt='Students Studying Abroad'
									className='object-cover'
									fill
								/>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800'>
							Book a Consultation
						</h2>
						<div className='max-w-2xl mx-auto bg-purple-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<form className='space-y-4'>
								<Input
									placeholder='Your Name'
									className='border-purple-300 focus:border-purple-500 transition-all duration-300'
								/>
								<Input
									type='email'
									placeholder='Your Email'
									className='border-purple-300 focus:border-purple-500 transition-all duration-300'
								/>
								<Input
									placeholder='Phone Number'
									className='border-purple-300 focus:border-purple-500 transition-all duration-300'
								/>
								<Textarea
									placeholder='Tell us about your study abroad plans'
									className='border-purple-300 focus:border-purple-500 transition-all duration-300'
								/>
								<Button
									type='submit'
									className='w-full bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300 hover:shadow-lg'>
									Schedule Consultation
								</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
