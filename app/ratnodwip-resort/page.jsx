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
	Waves,
	Wind,
	Sun,
	Utensils,
	CheckCircle,
	MapPin,
	Phone,
	Facebook,
	Bed,
	Coffee
} from 'lucide-react'
import toast from 'react-hot-toast'

const galleryImages = [
	{ src: '/ratnowdip-1.jpeg', alt: 'Ratnodwip resort exterior view 1' },
	{ src: '/ratnowdip-2.jpeg', alt: 'Ratnodwip resort exterior view 2' },
	{ src: '/ratnowdip-3.jpeg', alt: 'Ratnodwip resort interior view' },
	{ src: '/ratnowdip-4.jpeg', alt: 'Ratnodwip beachfront view' },
	{ src: '/ratnowdip-5.jpeg', alt: 'Ratnodwip rooms and amenities' }
]

export default function RatnodwipResortPage() {
	const [isVisible, setIsVisible] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
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
					subject: 'Ratnodwip Resort Inquiry'
				})
			})
			if (response.ok) {
				toast.success('Message sent successfully!')
				setFormData({ name: '', email: '', message: '' })
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
			icon: Waves,
			title: 'Beachfront Location',
			description: 'Steps away from the pristine East Beach of Saint Martin'
		},
		{
			icon: Bed,
			title: 'Comfortable Rooms',
			description: 'Well-appointed rooms with modern amenities'
		},
		{
			icon: Utensils,
			title: 'Fresh Seafood',
			description: 'Delicious local cuisine and fresh seafood dishes'
		},
		{
			icon: Wind,
			title: 'Ocean Breeze',
			description: 'Natural ventilation with refreshing sea breezes'
		},
		{
			icon: Sun,
			title: 'Modern Amenities',
			description: 'Essential facilities and bright, airy rooms'
		},
		{
			icon: Coffee,
			title: 'Island Breakfast',
			description: 'Start your day with complimentary breakfast'
		}
	]

	const experiences = [
		'Coral reef snorkeling and diving',
		'Island hopping adventures',
		'Beachside dining experiences',
		'Sunrise and sunset viewing',
		'Local fishing village tours',
		'Water sports activities'
	]

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-cyan-900 via-cyan-800 to-teal-700'>
			<main className='flex-1 pt-16'>
				<section
					className={`w-full py-24 md:py-32 transition-all duration-1000 ease-in-out ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<p className='text-sm uppercase tracking-widest text-cyan-200'>
									রত্নদ্বীপ বিচ ভিউ রিসোর্ট
								</p>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-300'>
									Ratnodwip Beach View Resort
								</h1>
								<p className='mx-auto max-w-[700px] text-cyan-100 md:text-xl lg:text-2xl'>
									Experience paradise at Saint Martin&apos;s most serene beachfront resort
								</p>
							</div>
							<div className='flex flex-wrap justify-center gap-4'>
								<a href='tel:+8801610563904'>
									<Button className='bg-cyan-500 text-white hover:bg-cyan-600 text-lg px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105'>
										<Phone className='mr-2 h-5 w-5' />
										Call Now
									</Button>
								</a>
								<Link
									href='https://www.facebook.com/ratnodwipresort21'
									target='_blank'
									rel='noopener noreferrer'>
									<Button
										variant='outline'
										className='text-white border-white hover:bg-white hover:text-cyan-600 text-lg px-6 py-3 rounded-full transition-all duration-300'>
										<Facebook className='mr-2 h-5 w-5' />
										Facebook Page
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-cyan-800'>
							Resort Amenities
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{services.map((service, index) => (
								<Card
									key={index}
									className='scroll-animate bg-gradient-to-br from-cyan-50 to-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group'>
									<CardHeader className='relative'>
										<div className='absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>
										<service.icon className='h-12 w-12 mb-4 text-cyan-600 group-hover:scale-110 transition-transform duration-300' />
										<CardTitle className='group-hover:text-cyan-700 transition-colors duration-300'>
											{service.title}
										</CardTitle>
										<CardDescription>{service.description}</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cyan-100 to-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-cyan-800'>
							Gallery
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
							{galleryImages.map((image, index) => (
								<div
									key={index}
									className='scroll-animate group relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg'>
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className='object-cover transition-transform duration-500 group-hover:scale-110'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								</div>
							))}
						</div>
						<div className='text-center mt-8'>
							<Link
								href='https://www.facebook.com/ratnodwipresort21/photos'
								target='_blank'
								rel='noopener noreferrer'>
								<Button
									variant='link'
									className='text-cyan-600 hover:text-cyan-700'>
									View More Photos on Facebook →
								</Button>
							</Link>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-cyan-900 text-white'>
					<div className='container px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
							<div className='scroll-animate'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
									Island Experiences
								</h2>
								<p className='text-cyan-100 mb-6'>
									Discover the magic of Saint Martin with our curated selection
									of activities and experiences. From underwater adventures to
									cultural exploration, create memories that last a lifetime.
								</p>
								<ul className='space-y-4'>
									{experiences.map((item, index) => (
										<li key={index} className='flex items-center'>
											<CheckCircle className='h-6 w-6 mr-2 text-cyan-300' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
							<div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl scroll-animate'>
								<Image
									src='/ratnowdip-5.jpg'
									alt='Ratnodwip resort experience'
									fill
									className='object-cover'
								/>
							</div>
						</div>
					</div>
				</section>

				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-cyan-50'>
					<div className='container px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
							<div className='scroll-animate'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-cyan-800'>
									Visit Us
								</h2>
								<div className='space-y-4 mb-6'>
									<div className='flex items-start space-x-3'>
										<MapPin className='h-6 w-6 text-cyan-600 mt-1' />
										<div>
											<p className='font-semibold text-cyan-800'>Location</p>
											<p className='text-gray-700'>
												East Beach, Golachipa, Saint Martin
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Phone className='h-6 w-6 text-cyan-600 mt-1' />
										<div>
											<p className='font-semibold text-cyan-800'>Phone</p>
											<a
												href='tel:+8801610563904'
												className='text-gray-700 hover:text-cyan-600'>
												+880 1610-563904
											</a>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<Facebook className='h-6 w-6 text-cyan-600 mt-1' />
										<div>
											<p className='font-semibold text-cyan-800'>Follow Us</p>
											<Link
												href='https://www.facebook.com/ratnodwipresort21'
												target='_blank'
												rel='noopener noreferrer'
												className='text-gray-700 hover:text-cyan-600'>
												facebook.com/ratnodwipresort21
											</Link>
										</div>
									</div>
								</div>
								<div className='bg-cyan-100 p-6 rounded-lg'>
									<h3 className='font-bold text-lg mb-2 text-cyan-800'>
										How to Reach
									</h3>
									<p className='text-gray-700 text-sm'>
										Take a cruise from Teknaf to Saint Martin Island. Our
										resort is located at East Beach, Golachipa. Resort shuttle
										service is available from the jetty upon request.
									</p>
								</div>
							</div>
							<div className='scroll-animate'>
								<Card className='bg-white shadow-lg'>
									<CardHeader>
										<CardTitle className='text-cyan-800'>
											Book Your Stay
										</CardTitle>
										<CardDescription>
											Contact us to reserve your room or get more information
										</CardDescription>
									</CardHeader>
									<CardContent>
										<form onSubmit={handleSubmit} className='space-y-4'>
											<Input
												name='name'
												placeholder='Your Name'
												value={formData.name}
												onChange={handleChange}
												className='border-cyan-300 focus:border-cyan-500'
												required
											/>
											<Input
												name='email'
												type='email'
												placeholder='Your Email'
												value={formData.email}
												onChange={handleChange}
												className='border-cyan-300 focus:border-cyan-500'
												required
											/>
											<Textarea
												name='message'
												placeholder='Your Message (e.g., Check-in date, number of guests, special requests)'
												value={formData.message}
												onChange={handleChange}
												className='border-cyan-300 focus:border-cyan-500'
												rows={5}
												required
											/>
											<Button
												type='submit'
												className='w-full bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300'>
												Send Inquiry
											</Button>
										</form>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
