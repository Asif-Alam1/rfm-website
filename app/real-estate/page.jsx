'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
	Home,
	Building,
	Search,
	DollarSign,
	Key,
	Briefcase
} from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function RealEstate() {
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
				body: JSON.stringify(formData)
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

	const services = [
		{
			icon: Home,
			title: 'Residential Properties',
			description: 'Find your dream home with our extensive listings'
		},
		{
			icon: Building,
			title: 'Commercial Real Estate',
			description: 'Discover prime locations for your business'
		},
		{
			icon: Search,
			title: 'Property Valuation',
			description: 'Get accurate and up-to-date property valuations'
		},
		{
			icon: DollarSign,
			title: 'Investment Opportunities',
			description: 'Explore lucrative real estate investment options'
		},
		{
			icon: Key,
			title: 'Property Management',
			description: 'Comprehensive management services for property owners'
		},
		{
			icon: Briefcase,
			title: 'Real Estate Consulting',
			description: 'Expert advice on all aspects of real estate'
		}
	]

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-emerald-700'>
			<main className='flex-1 pt-16'>
				<section
					className={`w-full py-24 md:py-32 transition-all duration-1000 ease-in-out ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300'>
									Real Estate Solutions
								</h1>
								<p className='mx-auto max-w-[700px] text-green-100 md:text-xl lg:text-2xl'>
									Your trusted partner in finding the perfect property
								</p>
							</div>
							<Link href='#properties'>
								<Button className='bg-green-500 text-white hover:bg-green-600 text-lg px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105'>
									Let us Help You
								</Button>
							</Link>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-800'>
							Our Services
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{services.map((service, index) => (
								<Card
									key={index}
									className='scroll-animate bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group'>
									<CardHeader className='relative'>
										<div className='absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>
										<service.icon className='h-12 w-12 mb-4 text-green-600 group-hover:scale-110 transition-transform duration-300' />
										<CardTitle className='group-hover:text-green-700 transition-colors duration-300'>
											{service.title}
										</CardTitle>
										<CardDescription>{service.description}</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-green-900 text-white'>
					<div className='container px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
							<div className='scroll-animate'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
									Why Choose Us?
								</h2>
								<ul className='space-y-4'>
									{[
										'Expert Agents',
										'Extensive Property Network',
										'Personalized Service',
										'Market Insights',
										'Seamless Transactions'
									].map((item, index) => (
										<li key={index} className='flex items-center'>
											<Home className='h-6 w-6 mr-2 text-green-300' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
							<div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl scroll-animate'>
								<img
									src='/property.svg'
									alt='Real Estate Team'
									className='object-cover'
									fill
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					className='w-full py-12 md:py-24 lg:py-32 bg-white'
					id='properties'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-800'>
							Contact Our Real Estate Team
						</h2>
						<div className='max-w-2xl mx-auto bg-green-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<form onSubmit={handleSubmit} className='space-y-4'>
								<Input
									name='name'
									placeholder='Your Name'
									value={formData.name}
									onChange={handleChange}
									className='border-green-300 focus:border-green-500 transition-all duration-300'
									required
								/>
								<Input
									name='email'
									type='email'
									placeholder='Your Email'
									value={formData.email}
									onChange={handleChange}
									className='border-green-300 focus:border-green-500 transition-all duration-300'
									required
								/>
								<Input
									name='subject'
									placeholder='Subject'
									value={formData.subject}
									onChange={handleChange}
									className='border-green-300 focus:border-green-500 transition-all duration-300'
									required
								/>
								<Textarea
									name='message'
									placeholder='Tell us about your property needs'
									value={formData.message}
									onChange={handleChange}
									className='border-green-300 focus:border-green-500 transition-all duration-300 text-cyan-400'
									required
								/>
								<Button
									type='submit'
									className='w-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 hover:shadow-lg'>
									Send Inquiry
								</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
