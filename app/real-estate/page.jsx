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
				body: JSON.stringify({ ...formData, subject: 'Real Estate Inquiry' })
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
			title: 'Lands',
			description: 'Buy Lands for you or for your Company around the world'
		},
		{
			icon: Briefcase,
			title: 'Lands Share',
			description: 'Buy Land Share with other shareholders'
		},
		{
			icon: DollarSign,
			title: 'Investment Opportunities',
			description: 'Explore lucrative real estate investment options'
		},
		{
			icon: Key,
			title: 'Property Management',
			description: 'Comprehensive management services for owners'
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
					className={`relative w-full min-h-[60vh] overflow-hidden transition-all duration-1000 ease-in-out ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}>
					<div className='absolute inset-0'>
						<Image
							src='/real-estate.jpg'
							alt='Global real estate solutions'
							fill
							priority
							className='object-cover'
						/>
						<div className='absolute inset-0 bg-black/40' aria-hidden='true'></div>
					</div>
					<span className='sr-only'>Real Estate Solutions</span>
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
										'Seamless Transactions',
			                            'Buy Land Shares',
										'Buy Lands for your Company',
			
									].map((item, index) => (
										<li key={index} className='flex items-center'>
											<Home className='h-6 w-6 mr-2 text-green-300' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
							<div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl scroll-animate'>
								<Image
									src='/property.svg'
									alt='Real Estate Team'
									fill
									sizes='(min-width: 768px) 50vw, 100vw'
									className='object-cover'
								/>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-800'>
							Our Current Projects
						</h2>
						<div className='max-w-4xl mx-auto'>
							<Tabs defaultValue='land' className='bg-transparent'>
								<TabsList className='grid w-full grid-cols-2 rounded-md p-1 bg-green-50 border border-green-100'>
									<TabsTrigger value='land' className='text-green-800 py-3'>Land</TabsTrigger>
									<TabsTrigger value='flat' className='text-green-800 py-3'>Flat</TabsTrigger>
								</TabsList>
								<TabsContent value='land' className='mt-6'>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
										{[
											{ title: 'South Banasree', desc: 'Well-located land plots within an established residential neighborhood, perfect for building your dream home or investment.' },
											{ title: 'Nandipara, Khilgaon', desc: 'Spacious parcels in Nandipara close to amenities and main transport routes — ideal for residential or mixed-use development.' },
											{ title: 'Shah Mosque Housing, Mohammadpur', desc: 'Attractive land opportunities in Mohammadpur with solid community infrastructure and growth potential.' },
											{ title: 'Chandrima Housing, Mohammadpur', desc: 'Established housing area offering conveniently located plots for homeowners and investors.' },
											{ title: 'Narayanganj', desc: 'Strategically positioned land outside the city with strong redevelopment and investment prospects.' }
										].map((project, idx) => (
											<Card key={idx} className='bg-white shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1'>
												<CardHeader>
													<CardTitle className='text-green-700'>{project.title}</CardTitle>
													<CardDescription className='text-sm text-slate-600'>{project.desc}</CardDescription>
												</CardHeader>
											</Card>
										))}
									</div>
								</TabsContent>
								<TabsContent value='flat' className='mt-6'>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
										{[
											{ title: 'Chandrima Flat', desc: 'Modern apartment units in Chandrima — thoughtfully designed, well-finished flats in a desirable location.' }
										].map((project, idx) => (
											<Card key={idx} className='bg-white shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1'>
												<CardHeader>
													<CardTitle className='text-green-700'>{project.title}</CardTitle>
													<CardDescription className='text-sm text-slate-600'>{project.desc}</CardDescription>
												</CardHeader>
											</Card>
										))}
									</div>
								</TabsContent>
							</Tabs>
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
