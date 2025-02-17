'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import {
	Globe,
	GraduationCap,
	Plane,
	Mail,
	Phone,
	MapPin,
	ArrowRight,
	CheckCircle,
	House
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function Home() {
	const [isVisible, setIsVisible] = useState(false)
	const heroRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.unobserve(entry.target)
				}
			},
			{ threshold: 0.1 }
		)

		if (heroRef.current) {
			observer.observe(heroRef.current)
		}

		return () => {
			if (heroRef.current) {
				observer.unobserve(heroRef.current)
			}
		}
	}, [])
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	})

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
					subject: 'General Inquiry Inquiry'
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

	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1'>
				<section
					ref={heroRef}
					className={`relative w-full py-24 md:py-32 lg:py-48 transition-opacity duration-1000 ease-in-out ${
						isVisible ? 'opacity-100' : 'opacity-0'
					}`}>
					<div className='absolute inset-0 z-0'>
						<Image
							src='/banner.png'
							alt='Background'
							layout='fill'
							objectFit='cover'
							quality={100}
						/>
						<div className='absolute inset-0 bg-cyan-600 bg-opacity-60'></div>
					</div>
					<div className='container px-4 md:px-6 relative z-10'>
						<div className='flex flex-col items-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-300'>
									Welcome To RFM International
								</h1>
								<p className='mx-auto max-w-[700px] text-yellow-200 bg-gray-400/25 rounded-xl md:text-xl lg:text-2xl'>
									Global Solutions at your fingertips, Your trusted partner for
									Import-Export, Student Consultancy, and Visa Services
								</p>
							</div>
							<div className='space-x-4'>
								<Link href='#services'>
									<Button
										variant='secondary'
										className='bg-yellow-400 text-cyan-900 hover:bg-yellow-300 text-lg px-6 py-3'>
										Explore Services
									</Button>
								</Link>
								<Link href='#contact'>
									<Button
										variant='outline'
										className='text-white border-white hover:bg-white hover:text-cyan-600 text-lg px-6 py-3'>
										Contact Us
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section
					id='services'
					className='w-full py-12 md:py-24 lg:py-32 bg-white'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-cyan-800'>
							Our Services
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
							{[
								{
									icon: Globe,
									title: 'Import-Export',
									description:
										'Facilitating global trade with expert import-export services',
									href: '/import-export'
								},
								{
									icon: GraduationCap,
									title: 'Student Consultancy',
									description:
										'Guiding students towards their academic goals worldwide',
									href: '/student-consultancy'
								},
								{
									icon: Plane,
									title: 'Visa Consultancy',
									description:
										'Simplifying visa processes for seamless international travel',
									href: '/visa-consultancy'
								},
								{
									icon: House,
									title: 'Real Estate Solutions',
									description:
										'Your trusted partner in finding the perfect property',
									href: '/real-estate'
								}
							].map((service, index) => (
								<div
									key={index}
									className='flex flex-col items-center text-center p-6 bg-gradient-to-b from-cyan-50 to-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
									<service.icon className='h-16 w-16 mb-4 text-cyan-600' />
									<h3 className='text-xl font-bold mb-2 text-cyan-800'>
										{service.title}
									</h3>
									<p className='text-cyan-600 mb-4'>{service.description}</p>
									<Link href={service.href}>
										<Button
											variant='link'
											className='text-cyan-600 hover:text-cyan-700'>
											Learn More <ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>

				<section
					id='about'
					className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cyan-100 to-white'>
					<div className='container px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-cyan-800'>
									About RFM Inc
								</h2>
								<p className='text-cyan-600 mb-4'>
									RFM Inc is a leading consultancy firm specializing in
									import-export facilitation, student guidance, and visa
									services. With years of experience and a dedicated team of
									experts, we have helped countless individuals and businesses
									achieve their international goals.
								</p>
								<p className='text-cyan-600 mb-6'>
									Our mission is to bridge global opportunities, making
									international trade and education accessible to all. We pride
									ourselves on our personalized approach, ensuring each client
									receives tailored solutions to meet their unique needs.
								</p>
								<ul className='space-y-2 mb-6'>
									{[
										'Expert Consultants',
										'Global Network',
										'Personalized Solutions',
										'24/7 Support'
									].map((item, index) => (
										<li key={index} className='flex items-center text-cyan-700'>
											<CheckCircle className='h-5 w-5 mr-2 text-yellow-500' />
											{item}
										</li>
									))}
								</ul>
								<Link href='/about'>
									<Button className='bg-yellow-400 text-cyan-900 hover:bg-yellow-300'>
										Learn More About Us
									</Button>
								</Link>
							</div>
							<div className='relative h-[500px] rounded-lg overflow-hidden shadow-2xl'>
								<Image
									src='/office.svg'
									alt='RFM Inc Team'
									layout='fill'
									objectFit='cover'
									quality={100}
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					id='contact'
					className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-cyan-50'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-cyan-800'>
							Contact Us
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
							<div className='bg-white p-6 rounded-lg shadow-lg'>
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
										placeholder='Your Message'
										value={formData.message}
										onChange={handleChange}
										className='border-cyan-300 focus:border-cyan-500 text-cyan-400'
										required
									/>
									<Button
										type='submit'
										className='w-full bg-yellow-400 text-cyan-900 hover:bg-yellow-300'>
										Send Message
									</Button>
								</form>
							</div>
							<div className='space-y-4'>
								<div className='flex items-center space-x-2 text-cyan-700'>
									<Mail className='h-5 w-5' />
									<span>rfmbusinessbd@gmail.com</span>
								</div>
								<div className='flex items-center space-x-2 text-cyan-700'>
									<Phone className='h-5 w-5' />
									<span>+8801815558785</span>
								</div>
								<div className='flex items-center space-x-2 text-cyan-700'>
									<MapPin className='h-5 w-5' />
									<span>
										Level 6, House-299, Free School Street, Kathalbagan, Dhaka
									</span>
								</div>
								<div className='h-[300px] rounded-lg overflow-hidden shadow-lg'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0145542342952!2d90.3921316!3d23.7468604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b670640341%3A0x11ea2bd3be66dafd!2sRFM%20International!5e0!3m2!1sen!2sus!4v1725812529241!5m2!1sen!2sus'
										width='100%'
										height='100%'
										style={{ border: 0 }}
										allowFullScreen=''
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'></iframe>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
